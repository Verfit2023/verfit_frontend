import { Link } from "react-router-dom";

function SignupCompletePage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-20 lg:px-8">
            <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                회원가입이 완료되었습니다!
            </h2>
            <p className="mt-2 text-lg text-gray-700">
                환영합니다. Verfit에 오신 것을 환영합니다!
            </p>
            <Link
                to="/login"
                className="mt-8 bg-sky-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-sky-400 transition duration-300"
            >
                로그인하기
            </Link>
        </div>
    );
}

export default SignupCompletePage;
