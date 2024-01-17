import { create } from 'zustand'

export interface IModalHandler {
	isOpen: boolean
	openM: () => void
	closeM: () => void
}

export const useModalSearchHandler = create<IModalHandler>(set => ({
	isOpen: false,
	openM: () => set(() => ({ isOpen: true })),
	closeM: () => set(() => ({ isOpen: false })),
}))

export const useModalFeedback = create<IModalHandler>(set => ({
	isOpen: false,
	openM: () => set(() => ({ isOpen: true })),
	closeM: () => set(() => ({ isOpen: false })),
}))
