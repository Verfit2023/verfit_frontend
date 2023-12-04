import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface userStoreType {
  isLoggedInStore: boolean,
  nicknameStore: string,
  setIsLoggedInStore: (isLoggedIn: boolean) => void,
  setNicknameStore: (nickname: string) => void,
}

export const useUserStore = create<userStoreType>(
  devtools(
    persist(
      (set) => ({
        isLoggedInStore: false,
        nicknameStore: '',
        setIsLoggedInStore: (isLoggedIn) => {
          set(() => ({isLoggedInStore: isLoggedIn}))
        },
        setNicknameStore: (nickname) => {
          set(() => ({nicknameStore: nickname}))
        },
      }),
      { name: "userStore" }
    )
  )
)