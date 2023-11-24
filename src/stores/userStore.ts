import { create } from 'zustand'

interface detailStoreType {
  isLoggedInStore: boolean,
  nicknameStore: string,
  setIsLoggedInStore: (isLoggedIn: boolean) => void,
  setNicknameStore: (nickname: string) => void,
}

export const useDetailStore = create<detailStoreType>(set => ({
  isLoggedInStore: false,
  nicknameStore: '',
  setIsLoggedInStore: (isLoggedIn) => {
    set(() => ({isLoggedInStore: isLoggedIn}))
  },
  setNicknameStore: (nickname) => {
    set(() => ({nicknameStore: nickname}))
  },
}))