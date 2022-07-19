import { Icon } from "react-bootstrap-icons";

export type Deployments = {
  [contractName: string]: {
    address: string;
    abi: any[];
  };
};

export type ConfigurationType = {
  chainId: number;
  networkName: string;
  deployments: Deployments;
};

export type ClientConfigType = {
  [client: string]: ClientType;
};

export type ClientType = {
  brandName: string;
  description: string;
  page404: Page404ContentType;
  socialAccounts: SocialAccountType[];
  headerNavItems: LinkType[];
  footerNavItems: FooterNavItemsType[];
};

export type Page404ContentType = {
  titles: string[],
  descriptions: string[],
}

export type SocialAccountType = {
  name: string;
  handle?: string;
  link: string;
  icon: Icon;
}

export type LinkType = {
  text: string;
  link: string;
  isAbsolutePath?: boolean;
  tooltip?: string;
};

export type FooterNavItemsType = {
  text: string;
  links: LinkType[];
};
