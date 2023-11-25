import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';


const tabOptions = [
    '전체',
    '제목',
    '교재',
];

function SearchBar() {
  const [selected, setSelected] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between w-3/4 mx-auto border-gray-300 border rounded-md py-1 px-1 text-md my-6">
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <div className="relative">
                    <Listbox.Button className="relative w-24 sm:w-28 cursor-default rounded-3xl border-2 border-sky-500 py-1.5 pl-3 text-left text-sky-500 pr-3">
                        <span className="h-5 w-5 flex-shrink-0">
                            {selected}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronDownIcon className="h-5 w-5 text-sky-500" />
                        </span>
                    </Listbox.Button>

                    <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {tabOptions.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    className={({ active }) =>
                                        `${active ? 'bg-sky-500 text-white' : 'text-gray-900'}
                                        relative cursor-default select-none py-2 pl-3 pr-9`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <div className="flex items-center">
                                            <span className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>
                                                {option}
                                            </span>
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
        <input
            type="text"
            placeholder="Search workbooks you want"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="basis-5/6 focus:outline-none pl-2 bg-transparent"
        />
        <button
            type="button"
            onClick={() => navigate(`/workbook?type=${selected}&keyword=${searchQuery}`)}
            className="rounded-xl right-2"
        >
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-900 mx-3" />
        </button>
    </div>
  )
}

export default SearchBar;