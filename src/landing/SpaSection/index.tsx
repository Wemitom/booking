import Image from 'next/image';
import spa from 'public/images/spa.png';

const SpaSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="mb-8 flex flex-col gap-10 lg:justify-between lg:px-48 xl:flex-row xl:items-center">
        <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl xl:w-1/3">
          КРУПНЕЙШИЙ SPA В ГОРАХ АЛТАЯ
        </h2>

        <p className="text-white xl:w-1/2">
          В 2023 году на территории GRAND CHALET ALTAY планируется запуск
          современного SPA-комплекса площадью 2 550 м2, где для гостей будут
          доступны разнообразные процедуры для отдыха и восстановления. Здесь вы
          сможете не только ощутить полный релакс, но и поправить здоровье.
        </p>
      </div>

      <Image src={spa} alt="spa" />

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:px-36 [&>*]:flex [&>*]:flex-col [&>*]:gap-3 [&>*]:lg:px-8">
        <div>
          <h3 className="text-3xl font-bold text-accent">5 парных</h3>
          <p className="text-white">
            помогут снять усталось и получить наслаждение от правильного пара
          </p>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <h3 className="text-3xl font-bold text-accent">16 программ</h3>
          <p className="text-white">
            вдохнут в тело новую энергию и поднимут настроение
          </p>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <h3 className="text-3xl font-bold text-accent">20 метров</h3>
          <p className="text-white">
            составляет длина крытого бассейна, для любителей активного отдыха
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
