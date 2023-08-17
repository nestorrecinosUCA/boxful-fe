import { OrderType } from "@/app/types";

export const defaultOrder: OrderType = {
  collectingAddress: "",
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
