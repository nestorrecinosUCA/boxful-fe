import { CityType } from "@/app/types/city";
import { CollectingAddressType } from "@/app/types/collecting-address";

export type StateType = {
  id: string;
  name: string;
  cities: CityType[];
  collectionAddresses: CollectingAddressType;
};
