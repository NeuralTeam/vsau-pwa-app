"use client";

import LogoIcon from "@/entities/icons/LogoIcon";
import SearchIcon from "@/entities/icons/SearchIcon";
import { useRootStore } from "@/store/RootStoreProvider";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const store = useRootStore();

    return (
        <header className=" z-50 flex w-screen items-center justify-between rounded-b-lg bg-light-blue p-4 text-white dark:bg-dark-dark">
            <div className="flex w-1/2 items-end justify-start gap-3">
                <div className="flex items-center justify-start">
                    <LogoIcon fill="white" width={40} />
                </div>

                <div className="text-center text-2xl font-semibold ">Расписание</div>
            </div>
            <div className="flex w-1/3 items-baseline justify-end gap-4">
                {store.groupId !== null && !store.searchIsOpen && (
                    <div onClick={store.setSearchOpen}>
                        <SearchIcon fill={"white"} width={35} />
                    </div>
                )}
            </div>
        </header>
    );
});

export default Header;
