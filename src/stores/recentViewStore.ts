import { create } from 'zustand'

interface DataType {
    id: number,
    img: string,
    title: string,
}

interface recentViewStoreType {
  recentViewsStore: Map<number, DataType>,
  setRecentViewsStore: (recentView: DataType) => void,
}

export const useRecentViewStore = create<recentViewStoreType>(set => ({
    recentViewsStore: new Map<number, DataType>(),
    setRecentViewsStore: (recentView) => {
        set(state => {
            const updatedRecentViews = new Map(state.recentViewsStore);

            updatedRecentViews.delete(recentView.id);

            const newRecentViews = new Map();
            newRecentViews.set(recentView.id, recentView);

            let count = 0;
            updatedRecentViews.forEach((value, key) => {
                if (count < 2) {
                    newRecentViews.set(key, value);
                    count++;
                }
            });
    
            return { recentViewsStore: newRecentViews };
        });
    },
}));
  
  
  
  
  