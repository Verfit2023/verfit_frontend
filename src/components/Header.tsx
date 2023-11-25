import { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline'
import SideBar from './SideBar';


const Header = () => {
    const [open, setOpen] = useState(false);
    const { isLoggedIn, nickname } = useUserStore(state => ({ isLoggedIn: state.isLoggedInStore, nickname: state.nicknameStore }));
  
    return (
        <div className="sticky top-0 w-3/4 mx-auto py-4 flex justify-between items-center bg-white">
            <div className="font-bold text-3xl text-sky-500">
                <Link to="/">Verfit</Link>
            </div>
            <div className="sm:hidden">
                <Bars3Icon className="h-6 w-6" onClick={() => setOpen(!open)} />
                <SideBar open={open} setOpen={setOpen} />
            </div>
            <div className=" hidden sm:gap-20 sm:flex sm:flex-row">
                <div className="font-semibold text-base text-black">
                    <Link to="/generate">문제 생성</Link>
                </div>
                <div className="font-semibold text-base text-black">
                    <Link to="/workbook">전체 문제집</Link>
                </div>
            </div>
            <div className="hidden sm:flex sm:px-2 sm:items-center sm:gap-2">
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