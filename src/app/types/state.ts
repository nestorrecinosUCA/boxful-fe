import { City } from "@/app/types/city";
import { CollectingAddres } from "@/app/types/collecting-address";

export type State = {
  id: string;
  name: string;
  cities: City[];
  collectionAddresses: CollectingAddres;
};
