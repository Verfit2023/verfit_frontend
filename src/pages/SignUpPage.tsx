import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../apis/authApi";

function SignupPage() {
    const [nickname, setNickname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const navigate = useNavigate();


    const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNickname = e.target.value;
        setNickname(newNickname);
    
        const nicknamePattern = /^[a-zA-Z가-힣0-9]{2,8}$/;
        setIsNicknameValid(nicknamePattern.test(newNickname));
    };

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsEmailValid(emailPattern.test(newEmail));
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        setIsPasswordValid(passwordPattern.test(newPassword));
    };

    const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
    
        setIsConfirmPasswordValid(password === newConfirmPassword);
    };

    const onSignupClick = async (nickname:string, email: string, password: string) => {
        if (!isNicknameValid) {
            setErrorMsg('닉네임은 한글, 영문, 숫자만 사용 가능하며, 2자에서 8자 사이로 입력해주세요.');
            setIsPending(false);
            return;
        }  else if (!isEmailValid) {
            setErrorMsg('올바른 이메일 형식으로 입력해주세요.');
            setIsPending(false);
            return;
        } else if (!isPasswordValid) {
            setErrorMsg('비밀번호는 영문, 숫자, 특수문자를 포함하여 8자에서 16자 사이로 입력해주세요.');
            setIsPending(false);
            return;
        } else if (!isConfirmPasswordValid) {
            setErrorMsg('비밀번호가 일치하지 않습니다.');
            setIsPending(false);
            return;
        }

        const response = await signupApi(nickname, email, password);
        if (response.status === 200) {
            navigate('/signup/complete');
        } else {
            setErrorMsg(response.data.message);
            setIsPending(false);
        }
    }


    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-5xl font-semibold leading-9 tracking-tight text-gray-900">
                    VERFIT
                </h2>
                <h3 className="mt-1 text-center text-xl font-regular tracking-tight text-gray-700">
                    Ready to fit your curiosity?
                </h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" action="#" method="POST">
                    <div>
                        <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-gray-900">
                            Nickname
                        </label>
                        <div className="mt-2">
                            <input
                                id="nickname"
                                name="nickname"
                                type="nickname"
                                autoComplete="nickname"
                                placeholder="닉네임을 입력하세요"
                                required
                                value={nickname}
                                onChange={onNicknameChange}
                                className={
                                    `block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    ${isNicknameValid ? 'focus:ring-green-500' : 'focus:ring-red-500'} sm:text-sm sm:leading-6`
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="이메일 주소를 입력하세요"
                                required
                                value={email}
                                onChange={onEmailChange}
                                className={
                                    `block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    ${isEmailValid ? 'focus:ring-green-500' : 'focus:ring-red-500'} sm:text-sm sm:leading-6`
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                required
                                value={password}
                                onChange={onPasswordChange}
                                className={
                                    `block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    ${isPasswordValid ? 'focus:ring-green-500' : 'focus:ring-red-500'} sm:text-sm sm:leading-6`
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="confirm password"
                                name="confirm password"
                                type="password"
                                placeholder="비밀번호를 다시 입력하세요"
                                required
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}
                                className={
                                    `block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                    ${isConfirmPasswordValid ? 'focus:ring-green-500' : 'focus:ring-red-500'} sm:text-sm sm:leading-6`
                                }
                            />
                        </div>
                    </div>

                    {errorMsg != '' && (
                        <p className="mt-10 text-xs text-red-500">
                            {errorMsg}
                        </p>
                    )}

                    <div>
                        {isPending ? (
                            <button
                                type="button"
                                disabled
                                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                            >
                                <svg aria-hidden="true" role="status" className="inline w-4 h-6 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled={!nickname || !email || !password || !confirmPassword}
                                onClick={async () => {
                                    setIsPending(true);
                                    onSignupClick(nickname, email, password);
                                }}
                                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400 disabled:bg-gray-400"
                            >
                                회원가입
                            </button>
                        )}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    이미 계정이 있나요?{' '}
                    <a href="/login" className="font-semibold leading-6 text-sky-500 hover:text-sky-400">
                        로그인
                    </a>
                </p>
            </div>
        </div>
        </>
    );
}

export default SignupPage;