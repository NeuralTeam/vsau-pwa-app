import { useEffect, useState } from "react";
import { Lesson } from "@/components/lessons/Lesson";

interface ILessons {
    weekday: number;
    numerator: any[];
    denominator: any[];
}
interface ISchedule {
    id: number;
    lessons: ILessons[];
}
export type Root = Root2[];

export interface Root2 {
    weekday: number;
    numerator: IWeekType[];
    denominator: IWeekType[];
}

export interface IWeekType {
    time_start: string;
    time_end: string;
    name: string;
    type: number;
    teacher: string;
    room: string;
    groups?: ITeacherGroups[];
}

export interface ITeacherGroups {
    group_name: string;
    group_faculty: number;
}

const Lessons = ({ weekday, data, parity }: any) => {
    const [isRender, setIsRender] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRender(true);
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <div className="jc flex w-full items-center">
            {isRender ? (
                <div className="w-full">
                    <Lesson weekday={weekday} data={data} parity={parity} />
                </div>
            ) : (
                <div className="w-full">
                    <div className="animation-skeleton mx-auto mb-3 h-32 w-[90%] rounded-lg bg-light-light dark:bg-dark-dark">
                        <div className="animation-skeleton-line"></div>
                    </div>
                    <div className="animation-skeleton mx-auto h-32 w-[90%] rounded-lg bg-light-light dark:bg-dark-dark">
                        <div className="animation-skeleton-line  bg-light-blue"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lessons;
