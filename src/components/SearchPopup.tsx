"use client";

import Delete from "@/entities/icons/Delete";

import { observer } from "mobx-react-lite";
import { useRootStore } from "@/store/RootStoreProvider";
import { useState } from "react";
import axios from "axios";
import { facultyTypes } from "@/entities/facultyTypes";
import { logger } from "workbox-core/_private";

export interface IGroup {
    id: number;
    name: string;
    faculty: number | null;
}

const SearchPopup = observer(() => {
    const store = useRootStore();

    const [searchType, setSearchType] = useState(1);
    const [inputData, setInputData] = useState("");
    const [searchResult, setSearchResult] = useState<IGroup[]>([]);

    const searchHandler = async (value: string) => {
        setInputData(value);

        if (value.length >= 1) {
            setSearchResult(
                await axios
                    .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/schedule/search?edu_type=1&data_type=${searchType}&data=${value}`)
                    .then((data) => data.data)
            );
        }
    };

    const searchTypeHandler = async (value: number) => {
        if (searchType !== value) {
            setSearchType(value);

            if (inputData.length >= 1) {
                setSearchResult(
                    await axios
                        .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/schedule/search?edu_type=1&data_type=${value}&data=${inputData}`)
                        .then((data) => data.data)
                );
            }
        }
    };

    const setGroup = (group: IGroup) => {
        localStorage.setItem("groupId", group.id.toString());
        localStorage.setItem("groupName", group.name);
        store.setGroup(group.id, group.name);
        store.setSearchClose();
    };

    return (
        <div className="text-black z-50 flex h-screen max-h-screen w-full items-center justify-center overflow-hidden bg-light-main p-4 dark:bg-dark-main">
            <button className="absolute right-3 top-3 cursor-pointer text-3xl font-semibold text-red" onClick={store.setSearchClose}>
                <Delete width={40} fill="#E4473F" />
            </button>
            <div className="w-full">
                <div className="mx-auto mt-16 w-11/12 border-b-2 border-b-dark-dark text-xl dark:border-b-white">
                    <input
                        type="text"
                        onChange={(e) => searchHandler(e.target.value)}
                        placeholder={searchType == 1 ? "Пример: Тэ2-5" : "Пример: Подколзин Р.В."}
                        className="focus-within: w-full bg-light-main bg-opacity-100 px-3 py-2 capitalize text-dark-dark focus-within:border-0 focus-within:border-b-2 focus-within:outline-0 focus:outline-0 dark:bg-dark-main dark:text-white"
                    />
                </div>
                <div className="my-3 flex items-center justify-center gap-1 px-4 text-center text-dark-dark dark:text-white">
                    <button
                        onClick={() => searchTypeHandler(1)}
                        className={`${searchType == 1 && "bg-light-light dark:bg-dark-dark"} w-1/2 rounded-lg px-3 py-2`}
                    >
                        Группы
                    </button>
                    <button
                        onClick={() => searchTypeHandler(2)}
                        className={`${searchType == 2 && "bg-light-light dark:bg-dark-dark"} w-1/2 rounded-lg px-3 py-2`}
                    >
                        Преподаватели
                    </button>
                </div>
                <div className="mx-auto mt-10 h-[45dvh] w-11/12 overflow-y-auto">
                    {inputData?.length !== 0 ? (
                        <div>
                            {searchResult?.length !== 0 ? (
                                searchResult?.map((item) => (
                                    <button
                                        style={{
                                            borderBottomColor: facultyTypes.find((i) => i.num == item.faculty)?.color || "white"
                                        }}
                                        key={item.id}
                                        onClick={() => {
                                            setGroup(item);
                                        }}
                                        className="border-ai mb-4 w-full cursor-pointer rounded-lg border-b-4 bg-light-light p-4 text-left text-xl text-dark-dark dark:bg-dark-dark dark:text-white"
                                    >
                                        {item.name}
                                    </button>
                                ))
                            ) : (
                                <div className="w-full items-center justify-center text-left">
                                    <div className=" mx-auto rounded-lg px-6 py-3 text-xl text-dark-dark dark:text-white">Не найдено</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="w-full items-center justify-center text-left">
                            <div className=" mx-auto rounded-lg px-6 py-3 text-lg text-dark-dark dark:text-white">
                                <p>Введите название группы</p>
                                <p>Например: Тэ2-5</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default SearchPopup;
