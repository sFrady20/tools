"use client";

import { makeStore } from "@/utils/make-store";
import { ReactNode } from "react";

const App = makeStore((get, set) => ({
  conversion: {
    input: {
      data: "",
      mimeType: "",
    },
    output: {},
  },
}));

export const AppProvider = function (props: { children: ReactNode }) {
  const { children } = props;
  return <App.Provider>{children}</App.Provider>;
};

export const useApp = App.use;
