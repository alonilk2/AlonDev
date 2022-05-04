import React from 'react'
import CelluImg from '../Images/cellu.png'
import ReactIcon from '../Images/React-icon.png'
import Node from '../Images/nodejs.svg'
import Java from '../Images/java.png'

import Maps from '../Images/maps.png'
import '../App.css'
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

function Cellu (props) {
  return (
    <>
      <section className={props.className} style={{zIndex:2}}>
        <div className='content-body-project'>
          <div
            className='col-5'
            style={{
              margin: '5% 2%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <h1 className='content-title-project delay-1'>Cellu 5G</h1>
            <p className='description'>
              Cellu is an Android application which allows users to locate
              cellular antennas in Israel. Cellu displays antennas located close
              to you according to the current device's location, obtained by the
              device's GPS module. Users can also locate nearby antennas based
              on a specific address that being chosen from a list of all streets
              and cities in Israel.
            </p>
            <div className='row project-info'>
              <div className='col tech-col'>
                <img
                  className='row tech-logo'
                  src={ReactIcon}
                  style={{ width: '50%' }}
                  alt='react'
                />
                <p className='row stack-title'>React Native</p>
              </div>
              <div className='col tech-col'>
                <img
                  className='tech-logo'
                  src={Node}
                  alt='node.js'
                  style={{ width: '40%' }}
                />
                <p className='stack-title'>Node.js</p>
              </div>
              <div className='col tech-col'>
                <img
                  className='tech-logo'
                  src={Maps}
                  alt='Google Maps API'
                  style={{ width: '50%' }}
                />
                <p className='stack-title'>Google Maps API</p>
              </div>
              <div className='col tech-col'>
                <img
                  className='tech-logo'
                  src={Java}
                  alt='Java'
                  style={{ width: '40%' }}
                />
                <p className='stack-title'>Java</p>
              </div>
            </div>
            <a style={{zIndex:2}} href='https://play.google.com/store/apps/details?id=com.cellu&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img
                alt='Get it on Google Play'
                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                width={300}
                style={{marginTop: '15%'}}
              />
            </a>
          </div>

          <div class='col image-cropper cf4a' style={{ borderRadius: '25px' }}>
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={[
                'https://alonilk2.github.io/map1/3.png',
                'https://alonilk2.github.io/map1/4.png',
                'https://alonilk2.github.io/map1/5.png',
                'https://alonilk2.github.io/map1/1.jpg',
                'https://alonilk2.github.io/map1/2.jpg'
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cellu
