import React from 'react';

import Image from 'next/image';

import Button from '@/components/common/Button';

const BookingSection = () => {
  return (
    <section className="mt-12 px-5 lg:px-48">
      <h2 className="my-12 font-inter text-4xl font-bold text-accent md:text-6xl xl:hidden">
        ЗАБРОНИРУЙТЕ ЭТОТ НОМЕР
      </h2>
      <div className="flex flex-col-reverse justify-between gap-16 lg:flex-row">
        <div>
          <h2 className="my-12 hidden font-inter text-4xl font-bold text-accent md:text-6xl xl:block">
            ЗАБРОНИРУЙТЕ ЭТОТ НОМЕР
          </h2>
          <p className="mt-5 text-xl text-white xl:text-2xl">
            Оставьте заявку и мы перезвоним вам в течение часа.
          </p>

          <Button title="Забронировать" size="full" filled />

          <div className="my-6 font-inter text-white">
            <p className="my-6 font-medium xl:text-xl">Включенные услуги:</p>

            <ul className="[&>li]:list-inside [&>li]:list-disc">
              <li>Завтрак в ресторане «Сосны»</li>
              <li>Меню подушек и одеял</li>
              <li>Вечерний сервис</li>
            </ul>
          </div>
        </div>

        <div>
          <Image
            src="/images/bookSuit.png"
            alt="living_booking"
            width={700}
            height={834}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
