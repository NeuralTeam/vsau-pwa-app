import { lessonTypes } from "@/entities/weekData/lessonTypes";
import { weekDays } from "@/entities/weekDay/weekDay";
import weekData from "@/features/functions/weekInit";
import { useEffect, useState } from "react";
import Lessons from "./lessons/Lessons";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/store/RootStoreProvider";
import axios, { AxiosResponse } from "axios";

interface ILessonResponse {
    weekday: number;
    parity: number;
    time_start: string;
    time_end: string;
    name: string;
    type: number;
    teacher: string;
    room: string;
}

interface ILesson {
    name: string;
    parity: number;
    time_start: string;
    time_end: string;
    teacher: string;
    room: string;
    type: number;
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

const Week = observer((activeParity: any) => {
    const store = useRootStore();

    const [data, setData] = useState<IWeekDays>({});

    useEffect(() => {
        const fetchData = async () => {
            const URL = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/schedule?edu_type=1&group_id=${store.groupId}`;
            if (store.groupId) {
                return await axios.get(URL);
            }
        };

        fetchData().then((response: AxiosResponse<ILessonResponse[], any> | undefined) => {
            const fetchDatas: IWeekDays = {
                1: {
                    day: 1,
                    name: "Понедельник",
                    shortName: "Пн",
                    activeState: 0,
                    lessons: []
                },
                2: {
                    day: 2,
                    name: "Вторник",
                    shortName: "Вт",
                    activeState: -100,
                    lessons: []
                },
                3: {
                    day: 3,
                    name: "Среда",
                    shortName: "Ср",
                    activeState: -200,
                    lessons: []
                },
                4: {
                    day: 4,
                    name: "Четверг",
                    shortName: "Чт",
                    activeState: -300,
                    lessons: []
                },
                5: {
                    day: 5,
                    name: "Пятница",
                    shortName: "Пт",
                    activeState: -400,
                    lessons: []
                },
                6: {
                    day: 6,
                    name: "Суббота",
                    shortName: "Сб",
                    activeState: -500,
                    lessons: []
                }
            };
            let lessons: ILessons = {};
            if (response !== undefined) {
                response.data.map((i) => {
                    if (lessons[i.weekday] === undefined) {
                        lessons[i.weekday] = [];
                    }
                    lessons[i.weekday].push({
                        name: i.name,
                        parity: i.parity,
                        time_start: i.time_start,
                        time_end: i.time_end,
                        teacher: i.teacher,
                        room: i.room,
                        type: i.type
                    });
                });

                Object.keys(lessons).forEach((i) => {
                    fetchDatas[+i].lessons = lessons[+i];
                });
                setData(fetchDatas);
            }
        });
    }, [store.groupId]);

    const types = lessonTypes;
    const todayTranslate = weekDays[weekData.nowDay].activeState;

    const [stateDay, setStateDay] = useState<number>(weekData.nowDay);
    const [activeTranslate, setActiveTranslate] = useState<any>(todayTranslate);
    const [touchPosition, setTouchPosition] = useState<any>(null);

    const activeItem = (index: number) => {
        setStateDay(index);
        setActiveTranslate(data[index].activeState);
    };

    const mouseStartHandler = (e: any) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const mouseMoveHandler = (e: any) => {
        const touchDown = touchPosition;
        const currentTouch = e.touches[0].clientX;
        const diff = touchPosition - currentTouch;

        if (touchDown === null) {
            return;
        }
        if (diff < -10) {
            next();
        } else if (diff > 10) {
            prev();
        }

        setTouchPosition(null);
        return;
    };

    const next = () => {
        const day: IWeekDay = Object.values(data).find((item: IWeekDay) => item.activeState === activeTranslate + 100);
        setStateDay(day ? day.day : 6);
        setActiveTranslate(day ? day.activeState : -500);
    };
    const prev = () => {
        const day: IWeekDay = Object.values(data).find((item: IWeekDay) => item.activeState === activeTranslate - 100);
        setStateDay(day ? day.day : 1);
        setActiveTranslate(day ? day.activeState : 0);
    };

    const styles = {
        transform: `translate(${activeTranslate}%, 0)`
    };

    return (
        <div className="relative h-[60vh] w-full p-0 ">
            {data ? (
                <div className="flex  w-full items-center justify-center gap-x-1">
                    {Object.keys(data).map((i, index) => (
                        <div key={data[+i].name} className="relative z-10 overflow-hidden rounded-lg">
                            <button
                                key={index}
                                onClick={() => activeItem(+i)}
                                className={`  ${
                                    +i === weekData.nowDay ? "border-t-4 border-azure" : "border-t-4 border-light-blue dark:border-dark-green"
                                } bg-light-light text-center shadow-lg  dark:bg-dark-dark ${
                                    +i == stateDay ? "w-[110px]" : " w-[40px]"
                                } flex h-12 items-center justify-center rounded-lg  text-sm transition-all duration-300 ease-in-out`}
                            >
                                {+i == stateDay ? data[+i].name : data[+i].shortName}
                            </button>

                            <div className="absolute bottom-0 left-0 flex w-full items-center justify-center transition-all">
                                {activeParity.activeParity === "numerator"
                                    ? data[+i].lessons.map(
                                          (i, index) =>
                                              i.parity === 1 && (
                                                  <div
                                                      key={index}
                                                      style={{
                                                          background: types.find((color) => color.type === i.type)?.color || "#c47929"
                                                      }}
                                                      className="h-[4px] w-full rounded-lg"
                                                  ></div>
                                              )
                                      )
                                    : data[+i].lessons.map(
                                          (i, index) =>
                                              i.parity === 2 && (
                                                  <div
                                                      key={index}
                                                      style={{
                                                          background: types.find((color) => color.type === i.type)?.color || "#c47929"
                                                      }}
                                                      className="h-[4px] w-full rounded-lg"
                                                  ></div>
                                              )
                                      )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>ERROR</div>
            )}

            <div className="relative mt-5 flex h-[110%] w-[100%] gap-x-0 overflow-x-hidden overflow-y-scroll py-2">
                {Object.keys(data).map((i, index) => (
                    <div
                        key={index}
                        style={styles}
                        onTouchMove={mouseMoveHandler}
                        onTouchStart={mouseStartHandler}
                        className="h-full w-full transition-all duration-300 ease-in-out"
                    >
                        <div
                            className={`relative bottom-0 flex h-full w-[100dvw]  items-start justify-start  overflow-x-hidden  transition-all ease-in-out`}
                        >
                            <div className="w-screen">
                                <Lessons weekday={+i} data={data} parity={activeParity.activeParity} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Week;
