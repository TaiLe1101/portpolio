import ActiveSectionContextProvider from "@/containers/active-section";
import ThemeContextProvider from "@/containers/theme-context";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ActiveSectionContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ActiveSectionContextProvider>
  );
}
