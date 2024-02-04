"use client";

import { INavbarItem, NavbarItem } from "@/components/navbar/NavbarItem";
import ScheduleIcon from "@/entities/icons/ScheduleIcon";
import SettingsIcon from "@/entities/icons/SettingsIcon";
import WarningIcon from "@/entities/icons/WarningIcon";
import { observer } from "mobx-react-lite";

const Navbar = observer(() => {
    const navbarItemsData: INavbarItem[] = [
        {
            title: "Расписание",
            icon: <ScheduleIcon fill={"white"} width={30} />,
            href: "/"
        },
        {
            title: "Настройки",
            icon: <SettingsIcon fill={"white"} width={30} />,
            href: "/settings"
        },
        {
            title: "Помощь",
            icon: <WarningIcon fill={"white"} width={30} />,
            href: "/help"
        }
    ];

    return (
        <footer className="absolute bottom-0 z-50 h-[90px] w-full rounded-t-lg bg-light-blue bg-opacity-90 dark:bg-dark-dark dark:bg-opacity-90">
            <div className="relative -top-1 grid grid-cols-3 items-start justify-center">
                {navbarItemsData.map((item, index) => (
                    <div className="text-white transition-all" key={index}>
                        <NavbarItem {...item} />
                    </div>
                ))}
            </div>
        </footer>
    );
});

export default Navbar;
