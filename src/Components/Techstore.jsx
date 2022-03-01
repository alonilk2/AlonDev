import React from 'react'
import TechStoreImg from '../Images/techstore.png'
import ReactIcon from '../Images/React-icon.png'
import Sequelize from '../Images/sequelize.png'
import Express from '../Images/Expressjs.png'
import '../App.css'
function Techstore (props) {
  return (
    <>
      <section className={props.className}>
        <div className='content-body-project'>
          <h1 className='content-title-project delay-1'>TechStore</h1>
          <p className="description">
    Maecenas laoreet luctus urna iaculis porta. Mauris laoreet sem non commodo ullamcorper. Cras vulputate erat scelerisque ultricies aliquet. Aliquam vitae ultricies ante, sed lobortis dui. Cras consectetur ante et tellus varius porta. Duis eget mi ac nunc malesuada lacinia pretium vitae nunc. Integer iaculis augue nibh, vel convallis erat sagittis et. Sed nec pretium urna. Nunc velit turpis, posuere eget ornare at, euismod sit amet nunc. Etiam vehicula libero fermentum elit iaculis ullamcorper. Quisque id nunc lorem.
          </p>
          <div className='row project-info'>
            <img className='tech-logo' src={ReactIcon} width={'100px'}/>
            <img className='tech-logo' src={Sequelize} width={'250px'}/>
            <img className='tech-logo' src={Express} width={'100px'}/>

          </div>
          <div class='image-cropper'>
            <img className='screenshot' src={TechStoreImg} width={'1500px'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Techstore
