import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return <>
      <header>
         <div className="bg-[#2a2c30] h-[7vh] text-white text-3xl flex justify-around items-center">
            <p>Free shipping, 30-day return or refund guarantee.</p>
            <div className="flex gap-3">
               <a href="#">Sign In</a>
               <a href="#">Sign Up</a>
            </div>
         </div>
         <nav className="bg-[#f7f7f7] h-[7vh] text-2xl flex justify-around items-center">
            <p>KambojFix</p>
            <ul className="flex justify-around gap-5">
               <li><NavLink to="/">HOME</NavLink></li>
               <li><NavLink to="/about">ABOUT</NavLink></li>
               <li><NavLink to="/movies">MOVIES</NavLink></li>
               <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
         </nav>
      </header>
   </>
}