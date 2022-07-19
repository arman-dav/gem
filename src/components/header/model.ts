import { ClientType } from "../../utils/types";

export type HeaderPropsTypes = {
  isOpenHeaderMobileMenu: boolean;
};

export type HeaderNavigationProps = {
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
  clientConfig: ClientType;
};

export type HeaderNavigationLinkType = {
  path: string;
  name: string;
  id: string;
  isAbsolutePath?: boolean;
  tooltip?: string;
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
};

export type HeaderNavigationWalletsProps = {
  isAuthenticated: boolean;
  isWeb3Enabled: boolean;
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
};

export type HeaderNavigationMobileProps = {
  isAuthenticated: boolean;
  isWeb3Enabled: boolean;
  // currentId: string | null;
  // setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
  // isOpenHeaderMobileMenu: boolean;
};

export type HeaderMobileMenuProps = {
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
  clientConfig: ClientType;
  // isOpenHeaderMobileMenu: boolean;
};
