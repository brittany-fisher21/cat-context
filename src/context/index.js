import { createContext } from "react";

const StateContext = createContext({});

export const StateProvider = StateContext.Provider;
export const StateConsumer = StateContext.Consumer;
// the four lines about are always needed to get started with context in react

export default StateContext;
