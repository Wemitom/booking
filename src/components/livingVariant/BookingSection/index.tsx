import React from 'react';

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

          <div className="lg:w-[280px]">
            <Button title="Забронировать" size="full" filled />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
