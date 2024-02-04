import { LessonItem } from "@/components/lessons/LessonItem";

interface ILesson {
    name: string;
    parity: number;
}

interface ILessons {
    [key: number]: ILesson[];
}

interface IWeekDay {
    day: number;
    name: string;
    shortName: string;
    activeState: number;
    lessons: ILesson[] | [];
}

interface IWeekDays {
    [key: number]: IWeekDay;
}

export const Lesson = ({ weekday, data, parity }: { weekday: number; data: IWeekDays; parity: string }) => {
    return (
        <div className="flex-3 flex h-[100%] w-full flex-col justify-center gap-y-2">
            {data ? (
                parity == "numerator" ? (
                    data[weekday].lessons.length != 0 ? (
                        data[weekday].lessons.map(
                            (item, index) =>
                                item.parity === 1 && (
                                    <div className="transition-all last:pb-52" key={index}>
                                        <LessonItem {...item} />
                                    </div>
                                )
                        )
                    ) : (
                        <div className="mt-10 w-full items-center justify-center text-center text-4xl">
                            <div className="mx-auto w-6/12 rounded-lg bg-light-light px-6 py-3 dark:bg-dark-dark">Нет пар</div>
                        </div>
                    )
                ) : data[weekday].lessons.length != 0 ? (
                    data[weekday].lessons.map(
                        (item, index) =>
                            item.parity === 2 && (
                                <div className="transition-all last:pb-52" key={index}>
                                    <LessonItem {...item} />
                                </div>
                            )
                    )
                ) : (
                    <div className="mt-10 w-full items-center justify-center text-center text-4xl">
                        <div className="mx-auto w-6/12 rounded-lg bg-light-light px-6 py-3 dark:bg-dark-dark">Нет пар</div>
                    </div>
                )
            ) : (
                <div className="">
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
