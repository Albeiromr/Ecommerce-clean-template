import React from "react";

export type contextValue = {
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  range: { min: number; max: number };
  setRange: (value: range) => void;
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
};

export type contextProps = {
  children: React.ReactNode;
};
