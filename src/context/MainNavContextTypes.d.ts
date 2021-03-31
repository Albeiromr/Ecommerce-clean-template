import optionType from "../utils/productOptionsTypes";

export type defaultValue = {
  productOptions: optionType[];
  optionSelected: string;
  setOptionSelected: (value: string) => void;
};

export type Props = {
  children: React.ReactNode;
};
