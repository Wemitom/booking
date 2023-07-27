import Image from 'next/image';
import { useRouter } from 'next/router';
import decorator from 'public/images/decorator1.svg';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Select from '@/components/common/Select';
import Controls from '@/components/common/Select/Controls';
import Options from '@/components/common/Select/Options';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import SectionTitle from '@/components/common/typography/SectionTitle';
import { Variants, variants, variantsPreview } from '@/utils/constants';
import useSelect from '@/utils/hooks/useSelect';

const Preview = () => {
  const { chosen } = useSelect();
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <div className="flex flex-col items-center xl:relative xl:block">
        <div className="my-6 mr-auto">
          <Options options={variants} width={9} indicatorID={1} />
        </div>

        <div className="flex flex-col-reverse xl:flex-row">
          <Image
            src={variantsPreview[chosen as Variants[number]].src}
            alt={chosen}
            className="my-auto xl:hidden"
          />

          <div>
            <h3 className="my-3 text-3xl font-extrabold text-white md:text-4xl xl:text-5xl">
              {variantsPreview[
                chosen as Variants[number]
              ].fullName.toUpperCase()}
            </h3>

            <div className="mb-3 flex gap-3">
              <Badge>
                <>{variantsPreview[chosen as Variants[number]].size} м2</>
              </Badge>
              <Badge>
                <>от {variantsPreview[chosen as Variants[number]].cost}Р</>
              </Badge>
            </div>
          </div>
        </div>

        <div>
          {variantsPreview[chosen as Variants[number]].description.map(
            (line, i) => (
              <DescriptionSecondary key={'line' + i}>
                {line}
              </DescriptionSecondary>
            )
          )}
        </div>

        <div className="mt-8">
          <Button
            title="Посмотреть"
            onClick={() =>
              push(
                '/' +
                  encodeURI(
                    variantsPreview[chosen as Variants[number]].fullName
                  )
              )
            }
          />
          <Controls options={variants} />
        </div>
      </div>

      <Image
        src={variantsPreview[chosen as Variants[number]].src}
        alt={chosen}
        className="hidden w-1/2 object-contain xl:block"
      />
    </div>
  );
};

const LivingOptionsSection = () => {
  return (
    <section className="relative mt-16 px-5 lg:mt-32 lg:px-48">
      <Image
        src={decorator}
        alt="decorator_1"
        className="absolute -left-52 -top-52 -z-10 hidden w-full scale-50 2xl:block"
      />
      <div className="my-12">
        <SectionTitle>
          <span>ВАРИАНТЫ</span>
          <br />
          <span className="sm:ml-20">ПРОЖИВАНИЯ</span>
        </SectionTitle>
      </div>

      <Select options={variants}>
        <Preview />
      </Select>
    </section>
  );
};

export default LivingOptionsSection;
