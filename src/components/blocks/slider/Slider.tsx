'use client';

import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styles from './Slider.module.scss';
import { Button, EButtonClass } from '@/components/ui';

const slides = [
  {
    id: 1,
    title: 'Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией',
    description: 'Без головной боли и отклонений от сметы строительства',
  },
  {
    id: 2,
    title: 'Мы создаем надежные и современные дома для вашего уютного проживания',
    description: 'В своей работе мы применяем современные технологии и специализированное строительное оборудование',
  },
  {
    id: 3,
    title: 'В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет',
    description: 'Мы оперативно выполняем весь спектр строительных работ',
  },
];

const Slider: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ el: `.${styles.pagination}`, clickable: true }}
      speed={700}
      loop={true}
      spaceBetween={30}
      autoplay={{ delay: 4000 }}
      className={styles.swiper}
    >
      {slides.map(({ id, title, description }) => (
        <SwiperSlide key={id} className={styles.slide}>
          <h2 className="title">{title}</h2>
          <p>{description}</p>
          <Button text="Узнать стоимость" nameClass={EButtonClass.DEF} isLink={false} />
        </SwiperSlide>
      ))}
      <div className={`${styles.pagination} swiper-pagination`}></div>
    </Swiper>
  );
};

export default Slider;
