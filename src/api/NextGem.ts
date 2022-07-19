import { ethers, Contract } from "ethers";

import { ConfigurationType } from "../utils/types";

/**
 * An API module of NextGem contracts.
 * All contract-interacting domain logic should be defined in here.
 */
export class NextGem {
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  contracts: { [name: string]: Contract };

  constructor(cfg: ConfigurationType) {
    const { deployments, chainId } = cfg;
    this.provider = new ethers.providers.Web3Provider(window.ethereum, chainId);

    // loads contracts from deployments
    this.contracts = {};
    for (const [name, deployment] of Object.entries(deployments)) {
      this.contracts[name] = new Contract(
        deployment.address,
        deployment.abi,
        this.provider
      );
    }
  }

  async createClaim(
    gemPool: string,
    mintQuantity: string,
    depositLength: string
  ) {
    if (!this.signer) {
      await this.provider.send("eth_requestAccounts", []);
      this.signer = this.provider.getSigner();
    }
    const { GemPool, ServiceRegistry } = this.contracts;
    const gemPoolHash = await GemPool.gemPoolHash(gemPool);
    const claimData = [
      ethers.constants.Zero, // id
      gemPoolHash, // poolId
      ServiceRegistry.address, // serviceRegistry
      this.signer.getAddress(), // owner
      ethers.constants.AddressZero, // minter
      ethers.constants.Zero, // depositAmount
      ethers.constants.AddressZero, // depositToken
      mintQuantity, //mintQuantity
      depositLength, // depositLength
      ethers.constants.Zero, // createTime
      ethers.constants.Zero, // createdBlock
      ethers.constants.Zero, // claimedBlock
      ethers.constants.Zero, // gemHash
      ethers.constants.Zero, // feePaid
    ];
    await GemPool.createClaim(claimData);
  }
}
