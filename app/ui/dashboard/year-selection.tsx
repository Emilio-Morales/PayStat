'use client';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

type YearDropdownProps = {
  onYearChange: (year: number) => void;
};

const dates = [{ date: 2021 }, { date: 2022 }, { date: 2023 }, { date: 2024 }];
// { onYearChange }: YearDropdownProps
export default function YearDropdown() {
  const [selected, setSelected] = useState(dates[0]);

  // const handleYearChange = (selected: { date: number }) => {
  //   setSelected(selected);
  //   onYearChange(selected.date);
  // };

  return (
    <div className="inline-block ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full  rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.date}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400 hover:cursor-pointer"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {dates.map((date, dateIdx) => (
                <Listbox.Option
                  key={dateIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={date}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block  ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {date.date}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
