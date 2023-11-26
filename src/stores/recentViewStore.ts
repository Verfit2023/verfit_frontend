import { create } from 'zustand'

interface recentViewStoreType {
  recentViewsStore: number[],
  setRecentViewsStore: (recentView: number) => void,
}

export const useRecentViewStore = create<recentViewStoreType>(set => ({
    recentViewsStore: [],
    setRecentViewsStore: (recentView) => {
      set(state => {
        const updatedRecentViews = new Set([recentView, ...state.recentViewsStore]);
        // Set을 Array로 변환하여 최대 3개 요소만 유지
        const limitedRecentViews = Array.from(updatedRecentViews).slice(0, 3);
        return { recentViewsStore: limitedRecentViews };
      });
    },
  }));
  
  