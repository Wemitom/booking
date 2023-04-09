import Image from 'next/image';
import { useRouter } from 'next/router';

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
        <Image
          src={variantsPreview[chosen as Variants[number]].src}
          alt={chosen}
          className="my-auto xl:hidden"
        />
        <div>
          {variantsPreview[chosen as Variants[number]].description.map(
            (line, i) => (
              <DescriptionSecondary key={'line' + i}>
                {line}
              </DescriptionSecondary>
            )
          )}
        </div>

        <div className="xl:absolute xl:bottom-0">
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
          </div>
          <Controls options={variants} />
        </div>
      </div>

      <Image
        src={variantsPreview[chosen as Variants[number]].src}
        alt={chosen}
        className="hidden h-[680px] w-1/2 xl:block"
      />
    </div>
  );
};

const LivingOptionsSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col">
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
