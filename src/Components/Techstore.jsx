import React from 'react';
import TechStoreImg from '../Images/techstore.png';
function Techstore(props){
    
    return (
        <>
          <section className={props.className}>
            <div className='content-body-project'>
              <h1 className='content-title-project delay-1'>TechStore</h1>
              {/* <h1 className='content-title-2 full-stack custom-animation-gradient delay-2'>
                asgd
              </h1>
              <h1 className='content-title-2 developer custom-animation-white delay-1'>
                {' '}
                SGDHFJGM,
              </h1> */}
              <img className='screenshot' src={TechStoreImg} width={'1400px'}/>
            </div>

          </section>
        </>    
        
    )
}

export default Techstore;