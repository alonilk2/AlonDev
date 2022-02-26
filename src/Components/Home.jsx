import React from 'react';

function Home(props){
    
    return (
        <>
          <section className={props.className}>
            <div className='content-body'>
              <h1 className='content-title delay-1'>Software Engineer &</h1>
              <h1 className='content-title-2 full-stack infinite delay-2'>
                Full-Stack
              </h1>
              <h1 className='content-title-2 developer custom-animation-white'>
                {' '}
                Developer
              </h1>
            </div>
          </section>
        </>    
        
    )
}

export default Home;