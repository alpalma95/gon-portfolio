import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [store, setStore] = useState({
    firstItem: "first item",
    secondItem: "bla",
  });
  const actions = {
    test: () => {
      setStore({ ...store, firstItem: "I'm working hehe" });
    },
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {props.children}
    </Context.Provider>
  );
};
