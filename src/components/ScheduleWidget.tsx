import weekInit from "@/features/functions/weekInit";
import Week from "@/components/Week";
import { useState } from "react";
import { useRootStore } from "@/store/RootStoreProvider";
import { observer } from "mobx-react-lite";

const ScheduleWidget = observer(() => {
    const store = useRootStore();

    const [activeParity, setActiveParity] = useState<string>(weekInit.parityEng);

    const weekParityHandler = (parity: string) => {
        setActiveParity(parity);
    };

    return (
        <div className="h-full">
            <div className="text mx-2 -mt-1 flex items-start justify-center gap-1 text-center font-semibold">
                <div className="w-1/2 rounded-b-lg bg-light-blue px-3 py-2 text-white dark:bg-dark-dark">{weekInit.day}</div>
            </div>
            <div className="my-5 text-center">
                <span className="text-3xl font-semibold">{store.groupName}</span>
            </div>
            <div className="relative mx-auto my-5 w-10/12">
                <div
                    className={`absolute top-0 h-full w-1/2 rounded-lg ${
                        activeParity === "numerator" ? "left-[1%]" : "left-[51%]"
                    } d bg-light-light text-center transition-all duration-200 dark:bg-dark-dark`}
                ></div>
                <div className="relative z-20 flex h-full w-full items-center justify-between gap-0 text-center">
                    <button onClick={() => weekParityHandler("numerator")} className={`relative h-full w-full px-3 py-1 text-center`}>
                        <div className={weekInit.parityRu == "Числитель" ? "z-20 rounded-[4px] bg-dark-green bg-opacity-30 py-1.5" : ""}>
                            Числитель
                        </div>
                    </button>
                    <button onClick={() => weekParityHandler("denominator")} className={`relative h-full w-full text-center`}>
                        <div className={weekInit.parityRu == "Знаменатель" ? "z-20 rounded-[4px] bg-dark-green bg-opacity-30 py-1.5" : ""}>
                            Знаменатель
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex h-full w-full justify-center transition-all">
                <Week activeParity={activeParity} />
            </div>
        </div>
    );
});

export default ScheduleWidget;
