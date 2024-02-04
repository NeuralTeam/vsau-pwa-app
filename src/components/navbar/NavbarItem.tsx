"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { observer } from "mobx-react-lite";

export interface INavbarItem {
    title: string;
    icon: ReactNode;
    href: string;
}

export const NavbarItem = observer(({ title, icon, href }: INavbarItem) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`${pathname === href ? "cursor-default opacity-100" : "opacity-50"} flex h-full w-full flex-col items-center justify-center pt-3`}
        >
            <div className="relative flex flex-col items-center justify-start gap-1 text-center text-sm">
                {icon}
                <p>{title}</p>
            </div>
        </Link>
    );
});
