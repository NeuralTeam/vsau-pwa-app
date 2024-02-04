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

export let weekDays: IWeekDays = {
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
