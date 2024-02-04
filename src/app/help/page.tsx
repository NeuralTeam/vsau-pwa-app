"use client";

import TelegramIcon from "@/entities/icons/TelegramIcon";

const HelpPage = () => {
    return (
        <div className="light:bg-white h-[100dvh] w-full overflow-hidden bg-light-main p-5 text-white dark:bg-dark-main">
            <p className="mb-4 mt-14 text-center text-3xl text-dark-dark dark:text-white">Помощь</p>
            <div className="mx-3 text-center">
                <p className="text-lg">У вас возникла проблема? </p>
                <p>Напишите нам в Telegram!</p>
                <div className="mx-auto my-10 flex w-10/12 items-center justify-center gap-3 rounded-lg bg-light-blue py-3 text-white dark:bg-dark-dark">
                    <div className="w-[40px] ">
                        <TelegramIcon />
                    </div>
                    <a href="https://t.me/vsau_unofficial" className="text-lg">
                        @vsau_unofficial
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
