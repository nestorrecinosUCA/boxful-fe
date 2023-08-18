import { ChangeEvent } from "react";

export function getValue(event: ChangeEvent<HTMLInputElement>) {
  return event.target.value;
}