import { makeAutoObservable } from "mobx";
import { number } from "prop-types";

interface ILesson {
    name: string;
    parity: number;
}

interface IWeekDay {
    name: string;
    shortName: string;
    activeState: number;
    lessons: ILesson[] | [];
}

interface IWeekDays {
    [key: number]: IWeekDay;
}

export default class RootStore {
    searchIsOpen = false;
    groupId: number | null = null;
    groupName: string | null = null;
    fetchData: IWeekDays = {
        1: {
            name: "Понедельник",
            shortName: "Пн",
            activeState: 0,
            lessons: []
        },
        2: {
            name: "Вторник",
            shortName: "Вт",
            activeState: -100,
            lessons: []
        },
        3: {
            name: "Среда",
            shortName: "Ср",
            activeState: -200,
            lessons: []
        },
        4: {
            name: "Четверг",
            shortName: "Чт",
            activeState: -300,
            lessons: []
        },
        5: {
            name: "Пятница",
            shortName: "Пт",
            activeState: -400,
            lessons: []
        },
        6: {
            name: "Суббота",
            shortName: "Сб",
            activeState: -500,
            lessons: []
        },
        7: {
            name: "Воскресенье",
            shortName: "Вс",
            activeState: -600,
            lessons: []
        }
    };

    constructor() {
        makeAutoObservable(this);
    }

    setSearchOpen = () => {
        this.searchIsOpen = true;
    };

    setSearchClose = () => {
        this.searchIsOpen = false;
    };

    setGroup = (id: number | string, name: string) => {
        this.groupName = name;
        if (typeof id === "number") {
            this.groupId = id;
            return;
        }
        this.groupId = +id;
    };

    clearGroup = () => {
        this.groupId = null;
    };

    getFetchData = (key: number) => {
        return this.fetchData[key];
    };

    setFetchData = (key: number, lessons: ILesson[]) => {
        this.fetchData[key].lessons = lessons;
    };
}
