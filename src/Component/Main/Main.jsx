import React, { useState } from 'react'
import logo from '../../Assets/Logo/bg_remove.png'
import './Main.scss'

function Main() {
   const [hamburg, setHamburg] = useState(false)

   let body = document.querySelector('body')
   function handler() {
      setHamburg(!hamburg)
      body.style.overflow = 'hidden'
   }
   function cansel(){
      body.style.overflow = 'auto'
      setHamburg(!hamburg)
   }

   




   return (
      <>
         <div className="banner">
            <div className="navbar">
               <div className="container">
                  <ul>
                     <li className="logo">
                        <img src={logo} alt="" className="logo__item" />
                     </li>
                     <li className='navbar__item'>
                        <a  href="#">Bosh Sahifa</a>
                        <a href="#" >Bizning Xizmatlar</a>
                        <a href="#" >Mijozlar</a>
                        <a href="#" >Bog'lanish</a>
                     </li>
                     <i onClick={handler} class="bi bi-list icon"></i>
                  </ul>
               </div>

               {/* Mobile Menu */}
               <div className={hamburg == true ? "hamburg__open" : "hamburg__close"}>
                     <ul className='hamburg__nav' >
                        <img src={logo} alt="" className="logo__item" />
                        <h2>WeeB.Devs</h2>
                        <i onClick={cansel} class="bi bi-x icon"></i>
                     </ul>
                     <ul className="list">
                        <li><a className="active" href="#">Bosh Sahifa</a></li>
                        <li><a href="#">Bizning Xizmatlar</a></li>
                        <li><a href="#">Mijozlar</a></li>
                        <li><a href="#">Bog'lanish</a></li>
                     </ul>
               </div>
               {/*Menu End */}
               <div className="container">
                  <h2 className="main__title">WeeB.Devs</h2>
                  <p className="main__desc">Biznes Yoki Tijorat Boshlamoqchi Bo'lyapsiz Va Ishni Nimadan Bo'shlashni Bilmayotgan Bo'lsangiz Biz Sizga Yordam Beramiz </p>
                  <button  className="main__btn">Davom Etish <i class="bi bi-arrow-down-short next__btn"></i></button>
               </div>
            </div>

         </div>
      </>
   )
}

export default Main