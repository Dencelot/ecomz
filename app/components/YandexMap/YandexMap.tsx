'use client'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import styles from './styles.module.scss'

export const YandexMap = () => {
  return (
    <div className={`${styles.map}`}>
      {/* <YMaps>
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
      </YMaps> */}
      <div className='h-full' style={{position:"relative",overflow:"hidden"}}><a href="https://yandex.ru/maps/org/kontinent/1189678926/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>Континент</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Торговый центр в Санкт‑Петербурге</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/entertainment_center/184106372/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"28px"}}>Развлекательный центр в Санкт‑Петербурге</a><iframe className='h-full w-full' src="https://yandex.ru/map-widget/v1/org/kontinent/1189678926/?ll=30.369813%2C59.883336&utm_source=share&z=14" width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
    </div>
  )
}
