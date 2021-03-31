export type defaultValue = {
  productOptions: string[]
  optionSelected: string;
  setOptionSelected: (value: string) => void;
};

export type Props = {
  children: React.ReactNode;
};
