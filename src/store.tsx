"use client";

import { makeStore } from "./utils/make-store";

export const { Provider: StoreProvider, use: useStore } = makeStore(
  (set, get) => {
    return {
      test: true,
    };
  }
);
