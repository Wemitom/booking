import { useState } from 'react';

import { ru } from 'date-fns/locale';
import Image from 'next/image';
import calendar from 'public/images/calendar.svg';
import person from 'public/images/person.svg';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Button from '../Button';

export default function FindRoom() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  registerLocale('ru', ru);
  setDefaultLocale('ru');

  return (
    <div className="lg:w-full 2xl:absolute 2xl:bottom-20">
      <div className="relative z-10 mx-5 mt-8 flex flex-col items-center gap-6 bg-white p-5 sm:pl-28 sm:pr-16 lg:mx-48 2xl:flex-row 2xl:px-5 2xl:py-12 [&>*]:grow">
        <div className="flex flex-col items-start 2xl:flex-row 2xl:items-center 2xl:shadow-[4px_4px_4px_rgba(0,0,0,0.1)] [&>*]:w-full [&>*]:grow [&>*]:2xl:mr-4">
          <div className="flex">
            <div className="grow">
              <label className="font-light">Заезд</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="font-inter font-semibold"
              />
            </div>
            <Image src={calendar} alt="calendar" />
          </div>

          <div className="flex">
            <div className="grow">
              <label className="font-light">Выезд</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="font-inter font-semibold"
              />
            </div>
            <Image src={calendar} alt="calendar" />
          </div>

          <div className="flex">
            <div className="flex grow flex-col">
              <label className="font-light">Гости</label>
              <input />
            </div>
            <Image src={person} alt="person" />
          </div>
        </div>

        <Button title="Найти номер" filled />
      </div>
    </div>
  );
}