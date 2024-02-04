import { facultyTypes } from "@/entities/facultyTypes";
import { lessonTypes } from "@/entities/weekData/lessonTypes";
import { ITeacherGroups } from "@/components/lessons/Lessons";

export const LessonItem = ({ ...item }: any) => {
    const types = lessonTypes;

    const type = typeof window !== "undefined" && localStorage.getItem("type");

    return (
        <div className="relative mx-auto w-[90%] rounded-lg bg-light-light p-2 dark:bg-dark-dark">
            <div className=" w-full text-left text-sm ">
                <div className="">
                    {item.time_start} - {item.time_end}
                </div>
            </div>
            <div className="">
                <div className="mt-5 flex w-full items-center justify-start">
                    <div className="">{item.name}</div>
                    {item.room !== null && <div className="mx-3 rounded-lg bg-light-main px-2 py-1 dark:bg-dark-main">{item.room}</div>}
                </div>
                <div
                    style={{
                        background: `${types.find((i) => i.type === item.type)?.color || "#c47929"}`
                    }}
                    className={`absolute right-1  top-1 flex h-6 w-14 items-center justify-center rounded-lg bg-[] text-sm font-semibold text-white`}
                >
                    {types.find((i) => i.type === item.type)?.name || "Общ"}
                </div>
                <div className="mt-2">{item.teacher !== null && item.teacher}</div>
                {type == "1" && (
                    <div className="flex w-full flex-wrap items-center justify-start gap-1 text-sm">
                        {item.groups.map((item: ITeacherGroups, index: any) => (
                            <div
                                key={index}
                                style={{
                                    borderBottomColor: facultyTypes.find((i) => i.num == item.group_faculty)?.color || "white"
                                }}
                                className=" rounded-lg border-b-2 bg-light-main p-2 dark:bg-dark-main "
                            >
                                {item.group_name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
