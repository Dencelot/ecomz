'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import styles from './styles.module.scss'

export const YandexMap = () => {
  return (
    <div className={`${styles.map}`}>
      <YMaps>
        <Map
          style={{ height: '713px', width: '100%' }}
          defaultState={{
            center: [59.88309, 30.37005],
            zoom: 16,
            controls: [],
          }}
          options={{
            autoFitToViewport: 'always',
            copyrightLogoVisible: false,
            copyrightUaVisible: false,
            copyrightProvidersVisible: false,
          }}
        >
          <Placemark geometry={[59.88309, 30.37005]} />
        </Map>
      </YMaps>
    </div>
  )
}
