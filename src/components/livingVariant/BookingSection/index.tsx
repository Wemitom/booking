import React from 'react';

import Image from 'next/image';

import Button from '@/components/common/Button';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SectionTitle from '@/components/common/typography/SectionTitle';

const BookingSection = () => {
  return (
    <section className="mt-12 px-5 lg:px-48">
      <div className="mb-12 xl:hidden">
        <SectionTitle>ЗАБРОНИРУЙТЕ ЭТОТ НОМЕР</SectionTitle>
      </div>
      <div className="flex flex-col-reverse justify-between gap-16 lg:flex-row">
        <div>
          <div className="mb-12 hidden xl:block">
            <SectionTitle>ЗАБРОНИРУЙТЕ ЭТОТ НОМЕР</SectionTitle>
          </div>

          <div className="mb-6">
            <DescriptionMain>
              Оставьте заявку и мы перезвоним вам в течение часа.
            </DescriptionMain>
          </div>

          <Button title="Забронировать" size="full" filled />

          <div className="font-inter my-6 text-white">
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
