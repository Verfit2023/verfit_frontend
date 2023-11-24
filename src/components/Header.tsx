import { useUserStore } from '../stores/userStore';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isLoggedIn, nickname } = useUserStore(state => ({ isLoggedIn: state.isLoggedInStore, nickname: state.nicknameStore }));
  
    return (
        <div className="sticky top-0 w-full px-28 py-4 flex justify-between items-center bg-white">
            <div className="font-bold text-3xl text-sky-500">
                <Link to="/">Verfit</Link>
            </div>
            <div className="gap-20 flex flex-row">
                <div className="font-semibold text-base text-black">
                    <Link to="/generate">문제 생성</Link>
                </div>
                <div className="font-semibold text-base text-black">
                    <Link to="/workbook">전체 문제집</Link>
                </div>
            </div>
            <div className="flex px-2 items-center gap-2">
                {isLoggedIn ? (
                    <>
                        <div className="font-semibold text-base text-black">
                            {nickname}
                        </div>
                        <div className="font-semibold text-base text-black">
                            Sign out
                        </div>
                    </>
                ) : (
                    <div className="font-semibold text-base text-black">
                        <Link to="/login">Sign in</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;