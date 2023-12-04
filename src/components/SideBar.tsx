import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useUserStore } from '../stores/userStore';

function SideBar(props: {open: boolean, setOpen: (value: boolean) => void}) {
    const { isLoggedIn, nickname, setIsLoggedIn, setNickname } = 
        useUserStore(state => ({ 
            isLoggedIn: state.isLoggedInStore, 
            nickname: state.nicknameStore, 
            setIsLoggedIn: state.setIsLoggedInStore, 
            setNickname: state.setNicknameStore 
        }));

    const onSignOutClick = () => {
        setIsLoggedIn(false);
        setNickname('');
    }

  return (
    <Transition.Root show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4" />
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-8 flex flex-row justify-between">
                            <span className="font-bold text-3xl text-sky-500">
                                Verfit
                            </span>
                            <button
                                type="button"
                                className="rounded-md text-gray-300"
                                onClick={() => props.setOpen(false)}
                            >
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="w-full h-px bg-gray-200 my-5" />
                        <div className="relative px-8">
                            <div className="my-7 font-semibold text-xl text-black">
                                <Link to="/generate">문제 생성</Link>
                            </div>
                            <div className="my-7 font-semibold text-xl text-black">
                                <Link to="/workbook">전체 문제집</Link>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-200 my-5" />
                        <div className="relative px-8">
                            {isLoggedIn ? (
                                <>
                                    <div className="my-7 font-semibold text-xl text-sky-500">
                                        <Link to="/mypage">{nickname}</Link>
                                    </div>
                                    <button onClick={onSignOutClick} className="my-7 font-semibold text-xl text-black">
                                        Sign out
                                    </button>
                                </>
                            ) : (
                                <div className="my-7 font-semibold text-xl text-black">
                                    <Link to="/login">Sign in</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </div>
        </Dialog>
    </Transition.Root>
  )
}

export default SideBar;