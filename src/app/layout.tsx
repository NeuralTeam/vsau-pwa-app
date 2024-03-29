"use client";

import Header from "@/components/Header";
import Navbar from "@/components/navbar/Navbar";
import PreloadProvider from "@/components/PreloadProvider";
import "./globals.scss";
import { ReactNode } from "react";
import { RootStoreProvider } from "@/store/RootStoreProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ru">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <title>Расписание</title>
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Расписание ВГАУ" />
                <meta property="og:url" content="https://schedule.neuralteam.ru/" />
                <meta
                    property="og:image"
                    content="https://sun9-19.userapi.com/impg/0Qm0NMqt1f7sq-Dg-EkBgLKXnFSBlvYdlx7r5w/20aEnT_4XuI.jpg?size=807x571&quality=95&sign=0f2c513e3c0abea62d639d5d0649375c&c_uniq_tag=Kzr1oGpxrXQQ-QtUvohYe0urwxRycpDW7kwBuqhcNp4&type=album"
                />
                <meta
                    property="og:description"
                    content="Официальное расписание Воронежского Государственного Аграрного Университета. Разработанное студентами для студентов и преподавателей"
                ></meta>
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#0091DF" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212121" />
                <meta name="msapplication-TileColor" content="#212121" />
                <meta name="description" content="Расписание ВГАУ" />
                <meta name="msapplication-navbutton-color" content="#212121" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#212121" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:title" content="Расписание ВГАУ" />
                <meta
                    name="twitter:description"
                    content="Официальное расписание Воронежского Государственного Аграрного Университета. Разработанное студентами для студентов и преподавателей"
                />
                <meta
                    name="twitter:image"
                    content="https://sun9-19.userapi.com/impg/0Qm0NMqt1f7sq-Dg-EkBgLKXnFSBlvYdlx7r5w/20aEnT_4XuI.jpg?size=807x571&quality=95&sign=0f2c513e3c0abea62d639d5d0649375c&c_uniq_tag=Kzr1oGpxrXQQ-QtUvohYe0urwxRycpDW7kwBuqhcNp4&type=album"
                />
            </head>
            <body className=" left-0 top-0  mx-auto  bg-light-light dark:bg-dark-main">
                <RootStoreProvider>
                    <PreloadProvider>
                        <Header />
                        {children}
                        <Navbar />
                    </PreloadProvider>
                </RootStoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
