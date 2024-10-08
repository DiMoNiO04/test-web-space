'use client';

import React, { useEffect, useState } from 'react';
import styles from './Map.module.scss';

const Map: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!document.getElementById('yandex-map-script')) {
      const script = document.createElement('script');
      script.id = 'yandex-map-script';
      script.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A81741ccd89f4e5064aef9e02c3cbed6dcc52b6ecd240e6ddc6cf6dc2b6b4af40&amp;width=1280&amp;height=480&amp;lang=ru_RU&amp;scroll=true';
      script.async = true;

      script.onload = () => setIsLoading(false);

      document.getElementById('yandex-map')?.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.mapContainer}>
          {isLoading && <div className={styles.loading}>Loading map...</div>}
          <div id="yandex-map" className={styles.map}></div>
        </div>
      </div>
    </section>
  );
};

export default Map;
