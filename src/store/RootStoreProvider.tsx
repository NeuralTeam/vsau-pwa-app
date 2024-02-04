import { createContext, ReactNode, useContext } from "react";
import { observer } from "mobx-react-lite";
import RootStore from "@/store/RootStore";

const Store = new RootStore();
const Context = createContext(Store);

export const RootStoreProvider = observer(({ children }: { children: ReactNode }) => {
    return <Context.Provider value={Store}>{children}</Context.Provider>;
});

export const useRootStore = () => {
    const store = useContext(Context);
    if (!store) throw new Error("Use App store within provider!");
    return store;
};
