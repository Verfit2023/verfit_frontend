import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function HomePage() {

    return (
        <div className="flex flex-col min-h-full bg-white">
            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f094ba] to-[#75d2f7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 40.7% 22%, 72.5% 32.5%, 60.2% 62.4%, 82.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 29.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto w-3/4 py-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Find workbooks you need
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Can't you find the workbook you need? Then try making it yourself.{' '}
                            <a href="/generate" className="font-semibold text-sky-500">
                                Try it <span aria-hidden="true">&rarr;</span>
                            </a>
                        </p>
                        <div className="my-16">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f094ba] to-[#75d2f7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 90% 61.6%, 97.5% 56.9%, 25.5% 4.1%, 80.7% 2%, 42.5% 52.5%, 60.2% 62.4%, 32.4% 68.1%, 47.5% 68.3%, 90.2% 34.5%, 97.5% 56.7%, 0.1% 64.9%, 17.9% 100%, 37.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
