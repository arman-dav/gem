import { useCallback, useEffect, useState } from "react";

import { useMoralis } from "react-moralis";

export enum TxState {
  NONE = "TXSTATE_NONE",
  INITIATING = "TXSTATE_INITIATING",
  WALLET_CONFIRMATION_PENDING = "TXSTATE_WALLET_CONFIRMATION_PENDING",
  WALLET_CONFIRMATION_COMPLETED = "TXSTATE_WALLET_CONFIRMATION_COMPLETED",
  NETWORK_CONFIRMATION_PENDING = "TXSTATE_NETWORK_CONFIRMATION_PENDING",
  NETWORK_CONFIRMATION_COMPLETED = "TXSTATE_NETWORK_CONFIRMATION_COMPLETED",
  COMPLETED = "TXSTATE_COMPLETED",
}

export enum TxStateModifier {
  NONE = "TXSTATE_MOD_NONE",
  CANCELED = "TXSTATE_MOD_CANCELED",
  ERROR = "TXSTATE_MOD_ERROR",
}

export type TxStateHelperProps = {
  children: any;
  txHandler: any;
  txArgs: any;
  initTx: boolean;
  txStateCallback?: TxStateCallback;
  txStateModifierCallback?: TxStateModifierCallback;
  setInitTx: (initTx: boolean) => void;
  className?: string;
};

export type TxCallbackResult = {
  message?: string;
  tx: string;
  [otherProps: string]: unknown;
};

export type TxStateCallback = (
  txState: TxState,
  result: TxCallbackResult
) => void;
export type TxStateModifierCallback = (
  txStateModifier: TxStateModifier,
  result: TxCallbackResult
) => void;

const TxStateHelper = ({
  children,
  txHandler,
  txArgs,
  txStateCallback = () => {},
  txStateModifierCallback = () => {},
  initTx = false,
  setInitTx = () => {},
  className = "",
}: TxStateHelperProps) => {
  const { Moralis } = useMoralis();
  const [txState, setTxState] = useState(TxState.NONE);
  const [txStateModifier, setTxStateModifier] = useState(TxStateModifier.NONE);
  const [txResult, setTxResult] = useState({} as unknown as TxCallbackResult);

  const handleError = useCallback((err: any) => {
    setTxResult({
      message: err.reason || err.message,
      tx: err.transactionHash,
    });
    setTxState(TxState.NONE);
    setTxStateModifier(TxStateModifier.ERROR);
    console.error(`Tx Issue: ${err}`, err);
  }, []);

  useEffect(() => {
    if (!initTx || txState !== TxState.NONE) return;
    setInitTx(false);
    setTxState(TxState.INITIATING);
  }, [initTx]);

  useEffect(() => {
    if (txState !== TxState.INITIATING) return;
    console.log(`Tx: Initializing`);

    const runTx = async () => {
      try {
        console.log(`Tx: Initialized`);
        // Waiting for wallet confirmation:
        setTxState(TxState.WALLET_CONFIRMATION_PENDING);
        txHandler(Moralis, txArgs)
          .then(async (networkConfirmationPromise: Promise<any>) => {
            // setTxState(TxState.NETWORK_CONFIRMATION_PENDING);
            setTxState(TxState.COMPLETED);

            // // Waiting for network confirmation:
            // networkConfirmationPromise.then(({ txResult, contractListenerPromise }:
            //   {txResult: any, contractListenerPromise: Promise<any>}) => {
            //     setTxState(TxState.NETWORK_CONFIRMATION_COMPLETED);
            //     // Final confirmation with contract event listener:
            //     contractListenerPromise
            //       .then((result: any) => {
            //           console.log(result, 'result');
            //           setTxState(TxState.COMPLETED);
            //       })
            //       .catch(handleError);
            // });
          })
          .catch(handleError);
      } catch (err: any) {
        handleError(err);
      }
    };

    runTx();
  }, [txState]);

  useEffect(() => {
    txStateModifierCallback(txStateModifier, txResult);
  }, [txStateModifier, txStateModifierCallback, txResult]);

  useEffect(() => {
    txStateCallback(txState, txResult);
  }, [txState, txStateCallback, txResult]);

  const cssClasses = [className, "TXSTATE", txState, txStateModifier];

  return (
    <>
      <div className={cssClasses.join(" ")}>{children}</div>
    </>
  );
};

export default TxStateHelper;
