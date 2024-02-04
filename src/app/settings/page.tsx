"use client";

import ResetIcon from "@/entities/icons/ResetIcon";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/store/RootStoreProvider";

const Settings = observer(() => {
    const store = useRootStore();
    const router = useRouter();

    const [resetAlert, setResetAlert] = useState(false);

    const resetApp = () => {
        router.back();
        store.clearGroup();
        localStorage.clear();
    };

    const resetPopup = (bool: boolean) => {
        setResetAlert(bool);
    };

    return (
        <div className="light:bg-white h-[100dvh] w-full overflow-hidden bg-light-main  p-5 text-white dark:bg-dark-main">
            <div className="">
                <p className="mb-4 mt-14 text-center text-3xl text-dark-dark dark:text-white">Настройки</p>
                <div className="mx-3">
                    <div className="">
                        <div className="w-full overflow-hidden rounded-lg bg-light-light px-0 dark:bg-dark-dark ">
                            <div
                                style={{ gridTemplateColumns: "70% 30%" }}
                                className="grid h-[55px]  items-center justify-start overflow-hidden border-b-[0.5px] border-y-dark-dark px-6 py-0 text-left text-lg font-semibold text-dark-dark dark:border-y-[#5a5a5a] dark:text-white "
                            >
                                <p>Сброс приложения</p>
                                <div
                                    className="mx-4 flex items-center justify-center rounded-lg bg-red p-2 text-white"
                                    onClick={() => resetPopup(true)}
                                >
                                    <ResetIcon fill={`white`} width={20} />
                                </div>
                            </div>

                            <div
                                className="grid   h-[55px] items-center justify-start overflow-hidden px-6 py-0 text-left text-lg font-semibold text-dark-dark dark:text-white "
                                style={{ gridTemplateColumns: "70% 30%" }}
                            >
                                <div className="flex items-center justify-start text-left text-lg text-dark-dark dark:text-white">Тема</div>
                                <ThemeSwitcher place="settings" />
                            </div>
                        </div>
                    </div>
                </div>
                {resetAlert ? (
                    <div className="bg-black absolute left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-30 ">
                        <div className="relative h-1/4 w-11/12 overflow-hidden rounded-lg  bg-light-light text-lg dark:bg-dark-dark">
                            <div className=""></div>
                            <p className="flex h-full w-full items-center justify-center text-center text-dark-dark dark:text-white">
                                Вы уверены что хотите полностью сбросить данные приложения?
                            </p>

                            <div className="absolute bottom-0 grid h-10 w-full grid-cols-2 text-center">
                                <div className="flex h-full items-center justify-center font-semibold text-red" onClick={resetApp}>
                                    Да
                                </div>

                                <div className="flex h-full items-center justify-center font-semibold text-green" onClick={() => resetPopup(false)}>
                                    Нет
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
});

export default Settings;
