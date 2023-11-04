import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Group = {
	groupId: string
	groupName: string
	type: string
}

type GroupState = {
	list: Group[]
}

const initialState: GroupState = {
	list: [],
}

interface IGroup {
	groupId: string
	groupName: string
	type: string
}

const sheduleCurrentSlice = createSlice({
	name: 'groups',
	initialState: {
		initialState,
	},
	reducers: {
		getGroup(state, action: PayloadAction<IGroup>) {
			state.initialState.list.push({
				groupId: action.payload.groupId,
				groupName: action.payload.groupName,
				type: action.payload.type,
			})
			localStorage.setItem('groupId', action.payload.groupId)
			localStorage.setItem('groupName', action.payload.groupName)
			localStorage.setItem('type', action.payload.type)
			console.log(action.payload.type)
		},
	},
})

export const { getGroup } = sheduleCurrentSlice.actions
export default sheduleCurrentSlice.reducer
