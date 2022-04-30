import React from 'react'
import ReactIcon from '../Images/React-icon.png'
import Sequelize from '../Images/sequelize.svg'
import Postgre from '../Images/psql.png'
import Node from '../Images/nodejs.svg'
import Express from '../Images/Expressjs.png'
import '../App.css'
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

function Compound (props) {
  return (
    <>
      <section className={props.className} style={{margin: '0 2%'}}>
        <div className='content-body-project'>
          <div
            className='col-4'
            style={{
              margin: '5% 2%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <h1 className='content-title-project delay-1'>Compound DApp</h1>
            <p className='description'>
            A single-page web application for Compound DeFi Protocol services, featuring ETH coins supply and DAI coins borrow. The app is interfacing with MetaMask wallets.
            </p>
            <div className='row project-info'>
              <div className='col tech-col'>
                <img
                  className='row tech-logo'
                  src={ReactIcon}
                  style={{ width: '90%' }}
                  alt='react'
                />
                <p className='row stack-title'>React.js</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Node} alt='node.js' />
                <p className='stack-title'>Node.js</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Sequelize} alt='Sequelize' />
                <p className='stack-title'>Sequelize</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Postgre} alt='PostgreSQL' />
                <p className='stack-title'>PostgreSQL</p>
              </div>
              <div className='col tech-col'>
                <img className='tech-logo' src={Express} alt='Express.js' />
                <p className='stack-title'>Express.js</p>
              </div>
            </div>
            <h1
              className='content-title-visit delay-1 '
              style={{ textAlign: 'center' }}
            >
              Visit IM.Barber
            </h1>
          </div>

          <div class='image-cropper cf4a'>
            <CrossfadeCarousel
              interval={3000}
              transition={2000}
              images={[
                'https://alonilk2.github.io/map1/compound.jpg'
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Compound
