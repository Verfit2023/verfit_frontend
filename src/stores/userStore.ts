import { create } from 'zustand'

interface userStoreType {
  isLoggedInStore: boolean,
  nicknameStore: string,
  setIsLoggedInStore: (isLoggedIn: boolean) => void,
  setNicknameStore: (nickname: string) => void,
}

export const useUserStore = create<userStoreType>(set => ({
  isLoggedInStore: false,
  nicknameStore: '',
  setIsLoggedInStore: (isLoggedIn) => {
    set(() => ({isLoggedInStore: isLoggedIn}))
  },
  setNicknameStore: (nickname) => {
    set(() => ({nicknameStore: nickname}))
  },
}))