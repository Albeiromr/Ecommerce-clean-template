import React from "react";

export type contextValue = {
    showFilters: boolean;
    setShowFilters: (value: boolean) => void;
};

export type contextProps = {
    children: React.ReactNode
};