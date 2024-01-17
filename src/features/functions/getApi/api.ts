import axios from 'axios'

const mode = process.env.NODE_ENV
console.debug(mode)

const localURL = 'http://localhost:8000/api/v1/schedule/?g='
const prodURL = 'https://schedule.neuralteam.ru/api/v1/schedule/?g='

export const getGroupSchedule = async (id: string) => {
	const URL = mode === 'development' ? localURL + id : prodURL + id
	let data = await axios.get(URL)

	// if (data.status === 200) {
	// } else {
	// 	console.error('fetch failled')
	// }
	return data.data
}
