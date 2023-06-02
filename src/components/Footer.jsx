import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className = 'row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className = 'col-md-3'>
            <a className=''>
              <img src='img/logo1.png' className='bi me-2' width={100} height={100}>

              </img>
            </a>
            <p>
              ТВОЯ ОДЕЖДА
            </p>
            <div className='col mb-3'>

            </div>


            <div className='col mb-4'>
              <h5>Мы созданы для тебя</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Найди свой стиль</a>  
                </li>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Почувствуюй себя принцессой</a>
                </li>
              </ul>
          
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer