const currentDate = new Date()
const weekNum = Math.ceil(
	(currentDate.getTime() -
		new Date(currentDate.getFullYear(), 0, 1).getTime()) /
		(7 * 24 * 60 * 60 * 1000)
)
let parityRu: string = weekNum % 2 !== 0 ? 'Числитель' : 'Знаменатель'
let parityEng: string = weekNum % 2 !== 0 ? 'numerator' : 'denominator'

let dayOfWeek: string

const dayNum: number = currentDate.getDay()
console.log(dayNum)
if (dayNum === 0) {
	dayOfWeek = 'понедельник'
	if (parityEng === 'denominator') {
		parityEng = 'numerator'
		parityRu = 'Числитель'
	} else {
		parityEng = 'denominator'
		parityRu = 'Знаменатель'
	}
} else {
	const ruDaysOfWeek: string[] = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
	]
	dayOfWeek = ruDaysOfWeek[dayNum]
}

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}
const day: string = currentDate.toLocaleDateString('ru-RU', options)

const weekData: {
	parityEng: string
	parityRu: string
	dayOfWeek: string
	day: string
} = {
	parityEng,
	parityRu,
	dayOfWeek,
	day,
}

export default weekData
