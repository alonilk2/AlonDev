import React from 'react';
import fiberImg from '../Images/fiber.png';
function Fiber(props){
    
    return (
        <>
          <section className={props.className}>
            <div className='content-body-project'>
              <h1 className='content-title-project delay-1'>FiberLocator</h1>
              {/* <h1 className='content-title-2 full-stack custom-animation-gradient delay-2'>
                asgd
              </h1>
              <h1 className='content-title-2 developer custom-animation-white delay-1'>
                {' '}
                SGDHFJGM,
              </h1> */}
              <img className='screenshot' src={fiberImg} width={'1400px'}/>
            </div>

          </section>
        </>    
        
    )
}

export default Fiber;