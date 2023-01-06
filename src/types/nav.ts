export interface INavConfig {
  title: string;
  path: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  children?: INavConfig[];
}
