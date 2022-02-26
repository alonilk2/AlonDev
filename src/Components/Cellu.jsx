import React from 'react';
import CelluImg from '../Images/cellu.png';
function Cellu(props){
    
    return (
        <>
          <section className={props.className}>
            <div className='content-body-project'>
              <h1 className='content-title-project delay-1'>Cellu</h1>
              {/* <h1 className='content-title-2 full-stack custom-animation-gradient delay-2'>
                asgd
              </h1>
              <h1 className='content-title-2 developer custom-animation-white delay-1'>
                {' '}
                SGDHFJGM,
              </h1> */}
              <img className='screenshot' src={CelluImg} width={'300px'}/>
            </div>

          </section>
        </>    
        
    )
}

export default Cellu;