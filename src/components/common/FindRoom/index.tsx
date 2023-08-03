import { useEffect, useState } from 'react';

import axios from 'axios';
import { ru } from 'date-fns/locale';
import moment, { Moment } from 'moment';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { toast } from 'react-toastify';
import useSWR from 'swr';

import 'react-datepicker/dist/react-datepicker.css';

import { HouseLocation } from '@/landing/TransferSection';

import Button from '../Button';

interface BookedDate {
  startDate: Date;
  endDate: Date;
}

export default function FindRoom() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [house, setHouse] = useState(-1);

  const { data: houses, isLoading } = useSWR<HouseLocation[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/houses`,
    (arg: string) => axios.get(arg).then((res) => res.data)
  );
  const { data: dates } = useSWR<BookedDate[], Error>(
    houses?.[house]
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/book_ranges/${houses[house].id}`
      : null,
    (arg: string) =>
      axios.get(arg).then((res) =>
        res.data.map(
          ({ startDate, endDate }: { startDate: string; endDate: string }) => ({
            startDate: new Date(startDate + ' 00:00:00'),
            endDate: new Date(endDate + ' 00:00:00')
          })
        )
      )
  );

  registerLocale('ru', ru);
  setDefaultLocale('ru');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await toast.promise(
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/book/${house}`, {
        startDate: moment(startDate).format('YYYY-MM-DD'),
        endDate: moment(endDate).format('YYYY-MM-DD')
      }),
      {
        pending: 'Бронирование...',
        success: 'Забронировано!',
        error: 'Ошибка! Убедитесь, что все поля заполнены корректно.'
      }
    );
  };

  const hasOverlap = (
    interval1: { start: Moment; end: Moment },
    interval2: { start: Moment; end: Moment }
  ) => {
    return (
      (interval1.start.isSameOrBefore(interval2.end) &&
        interval1.end.isSameOrAfter(interval2.start)) ||
      (interval2.start.isSameOrBefore(interval1.end) &&
        interval2.end.isSameOrAfter(interval1.start))
    );
  };

  useEffect(() => {
    if (endDate <= startDate) {
      setEndDate(() => moment(startDate).add(1, 'days').toDate());
    }
  }, [endDate, startDate]);

  return (
    <form
      className="relative z-20 lg:w-full 2xl:absolute"
      onSubmit={handleSubmit}
    >
      <div className="relative mx-5 mt-8 flex flex-col items-center gap-6 bg-white p-5 sm:pl-28 sm:pr-16 lg:mx-48 2xl:flex-row 2xl:px-5 2xl:py-12 [&>*]:grow">
        <div className="flex flex-col items-start 2xl:flex-row 2xl:items-center 2xl:shadow-[4px_4px_4px_rgba(0,0,0,0.1)] [&>*]:w-full [&>*]:grow [&>*]:2xl:mr-4">
          <div className="flex">
            <div className="grow">
              <label htmlFor="startDate" className="font-light">
                Заезд
              </label>
              <DatePicker
                selected={startDate}
                dateFormat={'dd.MM.yyyy'}
                onChange={(date) => setStartDate(date || new Date())}
                excludeDateIntervals={dates?.map((d) => ({
                  start: d.startDate,
                  end: d.endDate
                }))}
                minDate={new Date()}
                className="font-serif font-semibold"
                name="startDate"
                dayClassName={(date) => {
                  if (date < new Date(new Date().setHours(0, 0, 0, 0)))
                    return 'unavailable';

                  const isFree = dates?.every(
                    (d) =>
                      (d.startDate <= date && d.endDate < date) ||
                      (d.startDate >= date && d.endDate > date)
                  );

                  if (isFree) return 'free';

                  if (
                    dates?.some((d) => d.startDate < date && d.endDate >= date)
                  )
                    return 'booked';

                  return '';
                }}
                required
              />
            </div>
            <Image
              priority
              src="/images/calendar.svg"
              width={22.5}
              height={24}
              alt="calendar"
            />
          </div>

          <div className="flex">
            <div className="grow">
              <label htmlFor="endDate" className="font-light">
                Выезд
              </label>
              <DatePicker
                selected={endDate}
                name="endDate"
                dateFormat={'dd.MM.yyyy'}
                onChange={(date) => setEndDate(date || new Date())}
                filterDate={(date) =>
                  !dates?.some((d) =>
                    hasOverlap(
                      { start: moment(d.startDate), end: moment(d.endDate) },
                      { start: moment(startDate), end: moment(date) }
                    )
                  )
                }
                minDate={startDate}
                maxDate={moment(startDate).add(1, 'year').toDate()}
                className="font-serif font-semibold"
                dayClassName={(date) => {
                  if (moment(date).isSameOrBefore(startDate))
                    return 'unavailable';

                  const hasAnyOverlap = dates?.some((d) =>
                    hasOverlap(
                      { start: moment(d.startDate), end: moment(d.endDate) },
                      { start: moment(startDate), end: moment(date) }
                    )
                  );

                  if (
                    hasAnyOverlap ||
                    moment(date).isSameOrAfter(moment(startDate).add(1, 'year'))
                  )
                    return 'booked';
                  else return 'free';
                }}
                required
              />
            </div>
            <Image
              src="/images/calendar.svg"
              width={22.5}
              height={24}
              alt="calendar"
            />
          </div>

          <div className="mr-0 flex">
            <div className="flex grow flex-col">
              <label htmlFor="house" className="font-light">
                Коттедж
              </label>
              <div className="flex w-full flex-col">
                <select
                  name="house"
                  className="bg-transparent px-3 py-1 font-serif font-semibold"
                  onChange={(e) => setHouse(+e.target.value)}
                  defaultValue={-1}
                  required
                >
                  <option value={-1} disabled>
                    Выберите дом
                  </option>
                  {isLoading ? (
                    <option>Загрузка...</option>
                  ) : (
                    (houses || []).map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
          </div>

          <div className="!mr-0">
            <Button title="Забронировать" filled submit />
          </div>
        </div>
      </div>
    </form>
  );
}
