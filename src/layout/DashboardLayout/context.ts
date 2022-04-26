import React, { createContext, SetStateAction } from "react";

interface ITitleContext {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
}
export const TitleContext = createContext<ITitleContext>({} as ITitleContext);
