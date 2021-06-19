import {optionType} from "../../utils/Product options/productOptionTypes";

export type contextValue = {
  productOptions: optionType[];
  optionSelected: optionSelectedType;
  setOptionSelected: (value: optionSelectedType) => void;
  lastFamilySelected: lastFamilySelectedType;
  setLastFamilySelected: (value: lastFamilySelectedType) => void
};

export type contextProps = {
  children: React.ReactNode;
};
