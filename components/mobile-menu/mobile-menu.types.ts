import { Dispatch, SetStateAction } from "react";

export interface MobileMenuProps {
  onClick: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
}
