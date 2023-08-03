import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import axios from 'axios';
import useSWR from 'swr';

import SectionTitle from '@/components/common/typography/SectionTitle';

export interface HouseLocation {
  name: string;
  id: number;
  lon: number;
  lat: number;
}

const Placemarks = ({ houses }: { houses: HouseLocation[] }) => {
  return (
    <>
      {houses.map((result) => (
        <Placemark
          key={`placemark at [${result.lon}; ${result.lat}]`}
          geometry={[+result.lon, +result.lat]}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          properties={{
            balloonContentBody: `Дом №${result.id}`,
            hintContent: `Дом №${result.id}`
          }}
        />
      ))}
    </>
  );
};

const TransferSection = () => {
  const { data: houses } = useSWR<HouseLocation[], Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/houses`,
    (arg: string) => axios.get(arg).then((res) => res.data)
  );

  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col gap-6">
        <SectionTitle>
          <span>ЗАБРОНИРОВАТЬ КОТТЕДЖ</span>
        </SectionTitle>

        <div className="flex h-full w-full justify-center">
          <YMaps
            query={{ apikey: process.env.NEXT_PUBLIC_YAPI_KEY, mode: 'debug' }}
          >
            <Map
              defaultState={{
                center: [54.80766607019127, 37.22630604733787],
                zoom: 17
              }}
              className="aspect-square w-full sm:w-1/2"
            >
              <ZoomControl />
              {houses && <Placemarks houses={houses} />}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
