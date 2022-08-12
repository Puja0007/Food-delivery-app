import React from "react";
import { SearchRounded, ShoppingCartRounded,BarChart } from "@mui/icons-material";
function Header() {
    return (
        <header>
               <img src="logo.jpg" alt="" className="logo"/>
            <div className="inputBox"> 
            <SearchRounded className="searchIcon" />
            <input type="text" className="search" placeholder="Search"/>
            </div>

            <div className="shoppingCart">
                <ShoppingCartRounded className="cart"/>
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>
         <div className="profileContainer">
             <div className="imgBox">
                 <img src="profile.png" alt="" />
             </div>
             <h2 className="userName">Puja Das</h2>
         </div>
         <div className="toggleMenu">
             <BarChart className="toggleIcon"/>
             
         </div>
        </header>
    )
}

export default Header;