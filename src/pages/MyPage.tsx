import { useState, useEffect } from 'react';
import Header from "../components/Header";
import { BookOpenIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Workbook from "../components/Workbook";
import { getMypageApi } from '../apis/mypageApi';
import { ResponsiveRadar } from '@nivo/radar'

function MyPage() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [abilityScore, setAbilityScore] = useState(null);
    const [madeWorkbooks, setMadeWorkbooks] = useState([]);
    const [favWorkbooks, setFavWorkbooks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getMypageApi();
            const data = response.data;
            console.log(data);
            setNickname(data.nickname);
            setEmail(data.email);
            setAbilityScore(data.ability_score);
            setMadeWorkbooks(data.made_workbooks);
            setFavWorkbooks(data.fav_workbooks);
        } catch (e) {
            alert("정보를 가져올 수 없습니다.");
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const MyResponsiveRadar = ({data}) => {
        let transformedList = [];
        if (data != null) {
            transformedList = Object.entries(data).map(([key, value]) => {
                return { "key": key, "You": value };
            });
        }

        return (
            <ResponsiveRadar
                data={transformedList}
                keys={['You']}
                indexBy="key"
                maxValue={3}
                margin={{ top: 20, right: 60, bottom: 30, left: 90 }}
                borderColor={{ from: 'color' }}
                gridLabelOffset={10}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                colors={{ scheme: 'category10' }}
                blendMode="multiply"
                motionConfig="wobbly"
                isInteractive={false}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 20,
                        itemHeight: 20,
                        itemTextColor: '#0da5ea',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }

    return (
        <div className="flex flex-col min-h-full bg-white">
            <Header />
            <div className="w-3/4 mx-auto">
                <div className="text-xl font-medium leading-6 text-gray-900 mt-6">마이페이지</div>
                <div className="flex flex-row justify-start py-4 mt-10 mb-7 border-y border-gray-200">
                    <UserCircleIcon className="w-16 h-16 rounded-full" />
                    <div className="flex flex-col justify-center ml-4 font-medium">
                        <p className="text-lg">{nickname}</p>
                        <p className="text-base">{email}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-3/4 mx-auto">
                <div className="flex flex-col w-3/4">
                    <div className="flex flex-row items-center gap-3 mb-3">
                        <BookOpenIcon className="h-6 w-6" />
                        <div className="text-2xl font-semibold">내가 만든 문제집</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:w-3/4 mb-7">
                        {madeWorkbooks.map((problemSet) => (
                            <Workbook data={problemSet} />
                        ))}
                    </div>

                    <div className="h-px w-full bg-gray-200 mb-5" />

                    <div className="flex flex-row items-center gap-3 mb-3">
                        <BookOpenIcon className="h-6 w-6" />
                        <div className="text-2xl font-semibold">북마크한 문제집</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full lg:w-3/4 mb-7">
                        {favWorkbooks.map((problemSet) => (
                            <Workbook data={problemSet} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/4">
                    <div className="flex flex-col w-full ml-3">
                        <div className="w-64 h-64 ml-auto mr-0">
                            <MyResponsiveRadar data={abilityScore} />
                        </div>
                        
                        <div className="ml-auto mr-0 flex flex-row items-center justify-between border-gray-200 border rounded-md px-4 py-3 w-40 h-fit">
                            <div className="flex flex-col items-end">
                                <div className="font-regular text-sm text-gray-400">문제집</div>
                                <div className="font-semibold text-lg">2</div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="font-regular text-sm text-gray-400">문제 개수</div>
                                <div className="font-semibold text-lg">15</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
