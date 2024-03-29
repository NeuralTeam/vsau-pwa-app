import moment from "moment";
import "moment/locale/ru";

const weekNum = Number(moment().format("w"));
let parityRu = weekNum % 2 !== 0 ? "Числитель" : "Знаменатель";
let parityEng = weekNum % 2 !== 0 ? "numerator" : "denominator";

let dayOfWeek: string;
const now = new Date();
const nowDay = ((now.getDay() + 6) % 7) + 1 === 7 ? 6 : ((now.getDay() + 6) % 7) + 1;

if (nowDay == 1) {
    dayOfWeek = "понедельник";
    if (parityEng == "denominator") {
        parityEng = "numerator";
        parityRu = "Числитель";
    } else {
        parityEng = "denominator";
        parityRu = "Знаменатель";
    }
} else {
    dayOfWeek = moment().locale("ru").format("dddd");
}

const day = moment().format("LL");

const weekData = {
    parityEng,
    parityRu,
    dayOfWeek,
    nowDay,
    day
};

export default weekData;
