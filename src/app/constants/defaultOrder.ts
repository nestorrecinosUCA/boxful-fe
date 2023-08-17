import { OrderType } from "@/app/types";

export const defaultOrder: OrderType = {
  collectingAddres: "",
  date: new Date(),
  names: "",
  lastnames: "",
  email: "",
  userAddres: "",
  state: "",
  city: "",
  reference: "",
  indications: "",
  packages: []
};
