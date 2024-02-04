"use client";

import "moment/locale/ru";
import "../font/stylesheet.css";
import SearchPopup from "@/components/SearchPopup";
import SearchIcon from "@/entities/icons/SearchIcon";
import ScheduleWidget from "@/components/ScheduleWidget";
import { useEffect } from "react";
import { useRootStore } from "@/store/RootStoreProvider";
import { observer } from "mobx-react-lite";

const HomePage = observer(() => {
    const store = useRootStore();

    useEffect(() => {
        if (store.searchIsOpen) {
            store.setSearchClose();
        }
    }, [store]);

    return (
        <main className="text-black relative h-[100dvh] overflow-hidden bg-light-main dark:bg-dark-main dark:text-white">
            <div className="z-10 h-full">
                {store.searchIsOpen ? (
                    <SearchPopup />
                ) : store.groupId === null ? (
                    <div className="flex h-[80dvh] w-full items-center justify-center text-2xl font-semibold">
                        <div className="px-4">
                            <div className="font-normal">Выберете группу</div>
                            <div
                                className="mx-auto my-4 flex w-6/12 flex-col items-center justify-between gap-2 rounded-lg bg-light-light bg-opacity-70 px-5 py-3 text-xl font-normal dark:bg-dark-dark"
                                onClick={store.setSearchOpen}
                            >
                                <div className="flex aspect-square items-start justify-center">
                                    <SearchIcon fill="white" width={30} />
                                </div>
                                <p>Поиск</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full">
                        <ScheduleWidget />
                    </div>
                )}
            </div>
        </main>
    );
});

export default HomePage;
