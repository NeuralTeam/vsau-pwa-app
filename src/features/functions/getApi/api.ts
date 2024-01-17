import axios from 'axios'

const mode = process.env.NODE_ENV
console.debug(mode)

const localURL = 'http://localhost:8000/api/v1/schedule/?g='
const prodURL = 'https://schedule.neuralteam.ru/api/v1/schedule/?type=0&id=17'

export const getGroupSchedule = async (id: string, type: string) => {
	const URL =
		'https://schedule.neuralteam.ru/api/v1/schedule/?type=' + type + '&id=' + id
	let data = await axios.get(URL)
	console.debug(data)

	// if (data.status === 200) {
	// } else {
	// 	console.error('fetch failled')
	// }
	return data.data
}
