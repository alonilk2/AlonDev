import React from 'react'
import CelluImg from '../Images/cellu.png'
import ReactIcon from '../Images/React-icon.png'
import Node from '../Images/nodejs.svg'
import Maps from '../Images/maps.png'
import '../App.css'
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

function Techstore (props) {
  return (
    <>
      <section className={props.className}>
        <div className='content-body-project'>
          <div className='col-5'  style={{
              margin: '5% 2%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center'
            }}>
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
                  style={{width: '33%'}}
                  alt='react'
                />
                <p className='row stack-title'>React Native</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Node} alt='node.js' style={{width: '33%'}}/>
                <p className='stack-title'>Node.js</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Maps} alt='Google Maps API' style={{width: '33%'}}/>
                <p className='stack-title'>Google Maps API</p>
              </div>
            </div>
            <h1 className='content-title-visit delay-1 '>Visit IM.Barber</h1>
          </div>

          <div class='col image-cropper cf4a' style={{ borderRadius: '25px' }}>
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={[
                'https://play-lh.googleusercontent.com/cJa1I2DlCMEWfuWI8BQr7wQZfuvOE2EeMvuS5yCEmDvz2OupxwhxFC2UbSBl6sqjesHS=w1920-h961-rw',
                'https://play-lh.googleusercontent.com/66bwZ55WSYG-fKlJ3oOtlWiCf6OPelfW8pxwoyZPudsuf9v8jV8542Ms0C70JSGrxw=w1920-h961-rw',
                'https://play-lh.googleusercontent.com/SmGTLMWN7o-yv0Q2GJan_HEw1ZAIprRr8yhaA6PT9oMILGVh9vXqffn7hGYXhhSuI0g=w1920-h961-rw',
                'https://play-lh.googleusercontent.com/hJZV8K6Dro-CoGtrqgUtJpf7HulEbMbgmzPl5DxDs7iXEhoFM49h2ye_rLgU1827VtU=w1920-h961-rw',
                'https://play-lh.googleusercontent.com/K3n_XiMyMfQapShDyNUkJWPNNx-8B_XbuOs_LKhdMWvgVhj-LKbGHY5uqSd64UoV0Qg=w1920-h961-rw'
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Techstore
