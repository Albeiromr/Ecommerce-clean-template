import {optionType} from "../../utils/Product options/types";

export type contextValue = {
  productOptions: optionType[];
  optionSelected: string;
  setOptionSelected: (value: string) => void;
};

export type contextProps = {
  children: React.ReactNode;
};
