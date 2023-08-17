import { PackageType } from './package';

export type OrderType = {
  collectingAddres: string;
  date: Date;
  names: string;
  lastnames: string;
  email: string;
  userAddres: string;
  state: string;
  city: string;
  reference: string;
  indications: string;
  packages: PackageType[];
};
