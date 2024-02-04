import React from "react";

interface ICalendar {
    day: string;
    dayOfWeek: string;
    month: string;
}

const Calendar = ({ day, dayOfWeek, month }: ICalendar) => {
    return (
        <div className=" relative w-[150px] overflow-hidden rounded-lg">
            <div className="absolute -top-4 left-0 z-40 flex w-full items-center justify-center">
                <div className=" flex w-9/12 items-center justify-between">
                    <div className="bg-gray-200 h-4 w-1"></div>
                    <div className="bg-gray-200 h-4 w-1"></div>
                </div>
            </div>
            <div className="border-transparent bg-black mb-1 border-b-4 py-1 text-center text-xl first-letter:uppercase ">{dayOfWeek}</div>
            <div className="bg-black flex items-center justify-center pt-6 text-6xl font-semibold">
                <p>{day}</p>
            </div>
            <div className="bg-black py-1 text-center text-xl first-letter:uppercase">{month}</div>
        </div>
    );
};
export default Calendar;
