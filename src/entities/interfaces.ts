import { number } from "prop-types";

interface ILessons {
    weekday: number;
    numerator: any[];
    denominator: any[];
}
interface ISchedule {
    id: number;
    lessons: ILessons[];
}

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
