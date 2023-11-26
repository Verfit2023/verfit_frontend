import { useRecentViewStore } from "../stores/recentViewStore";
import RecentWorkbook from "./RecentWorkbook";

function RecentViewBanner() {
    const { recentViewsStore } = useRecentViewStore(state => ({ recentViewsStore: state.recentViewsStore }));

    const recentViewsArray = Array.from(recentViewsStore.values());
  
    return (
        <div className="ml-auto mr-0 flex flex-col items-center border-gray-200 border rounded-md px-4 py-3 w-40 h-fit gap-3">
            <div className="font-semibold text-lg">최근에 본 문제집</div>
            {recentViewsArray.map((x) => (
                <RecentWorkbook data={x} />
            ))}
        </div>
    );
}


export default RecentViewBanner;