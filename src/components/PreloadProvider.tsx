"use client";

import LogoIcon from "@/entities/icons/LogoIcon";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { useRootStore } from "@/store/RootStoreProvider";

const PreloadProvider = ({ children }: { children: ReactNode }) => {
    const store = useRootStore();

    const [mounted, setMounted] = useState(false);
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (localStorage.getItem("theme")) {
        } else {
            localStorage.setItem("theme", "dark");
        }

        let timeFunc = setTimeout(() => {
            setDomLoaded(true);
        }, 200);

        return () => {
            clearTimeout(timeFunc);
        };
    }, []);

    if (!mounted) {
        return null;
    }

    const groupId = localStorage.getItem("groupId");
    const groupName = localStorage.getItem("groupName");
    groupId === null || groupName === null ? store.clearGroup() : store.setGroup(groupId, groupName);

    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {mounted && domLoaded ? (
                <>{children}</>
            ) : (
                <div className=" relative flex h-[100dvh] w-full items-center justify-center bg-light-light dark:bg-dark-dark">
                    <div className="absolute bottom-0 left-0 p-4 text-sm text-white">Version: v{process.env.VERSION}</div>
                    <div className=" h-8/12 flex flex-col items-center justify-between ">
                        <div className="animate-bounce">
                            <LogoIcon fill={localStorage.getItem("theme") == "dark" ? "white" : "#0376b4"} width={150} />
                        </div>
                        <p className="my-10 rounded-lg px-6 py-3 text-center text-2xl  font-semibold text-[#0376b4] dark:text-white">
                            Загрузка расписания...
                        </p>
                    </div>
                </div>
            )}
        </ThemeProvider>
    );
};

export default PreloadProvider;
