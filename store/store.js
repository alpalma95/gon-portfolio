import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [store, setStore] = useState({
    showPublications: true,
    fadePublications: false,
    showConferences: false,
    fadeConferences: false,
    showTransfer: true,
    fadeTransfer: false,
    showAwards: false,
    fadeAwards: false,
    showOther: false,
    fadeOther: false,
    fadeCurrent: false,
    navbarOpen: false,
    fadeLinks: false,
  });
  const actions = {
    setShowPublications: () => {
      setStore({ ...store, fadePublications: false, fadeConferences: true });
      setTimeout(() => {
        setStore({
          ...store,
          showPublications: true,
          showConferences: false,
        });
      }, 100);
    },
    setShowConferences: () => {
      setStore({ ...store, fadePublications: true, fadeConferences: false });
      setTimeout(() => {
        setStore({
          ...store,
          showPublications: false,
          showConferences: true,
        });
      }, 100);
    },
    setShowTransfer: () => {
      setStore({
        ...store,
        fadeTransfer: false,
        fadeOther: true,
        fadeAwards: true,
      });
      setTimeout(() => {
        setStore({
          ...store,
          showTransfer: true,
          showAwards: false,
          showOther: false,
        });
      }, 100);
    },
    setShowAwards: () => {
      setStore({
        ...store,
        fadeTransfer: true,
        fadeOther: true,
        fadeAwards: false,
      });
      setTimeout(() => {
        setStore({
          ...store,
          showTransfer: false,
          showAwards: true,
          showOther: false,
        });
      }, 100);
    },
    setShowOther: () => {
      setStore({
        ...store,
        fadeTransfer: true,
        fadeOther: false,
        fadeAwards: true,
      });
      setTimeout(() => {
        setStore({
          ...store,
          showTransfer: false,
          showAwards: false,
          showOther: true,
        });
      }, 100);
    },
    setFadeCurrentTrue: () => {
      setStore({ ...store, fadeCurrent: true });
    },
    setFadeCurrentFalse: () => {
      setStore({ ...store, fadeCurrent: false });
    },

    setNavbarOpen: () => {
      setStore({ ...store, navbarOpen: !store.navbarOpen });
    },
    closeNavbar: () => {
      setStore({ ...store, navbarOpen: false });
    },
    setFadeLinks: () => {
      setStore({ ...store, fadeLinks: true });
      setTimeout(() => {
        setStore({ ...store, fadeLinks: false, navbarOpen: false });
      }, 400);
    },
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {props.children}
    </Context.Provider>
  );
};
