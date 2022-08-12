import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Settings,Favorite, HomeRounded, Chat, AccountBalanceWalletOutlined, SummarizeRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import MenuContainer from './Components/MenuContainer';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import { MenuItems, Items } from "./Components/Data";
import MenuCard from "./Components/MenuCard";
import ItemCard from "./Components/ItemCard";


function App() {
  const[isMainData, setMainData] = useState(Items.filter(item=> item.itemId = "buger01"));
  const setData = (itemId)=>{
    setMainData(Items.filter(item=> item.itemId = itemId));
  }
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    // const menuCard = document
    //   .querySelector(".rowContainer")
    //   .querySelectorAll(".rowMenuCard");

    // function setMenuCardActive() {
    //   menuCard.forEach((n) => n.classList.remove("active"));
    //   this.classList.add("active");
    // }

    // menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Main container */}
      <main>
        <div className="mainContainer">
          <div className="banner">
              <BannerName name={"Puja"} discount={"20"} more={"#"} />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                alt=""
                className="deliveryPic"
              />
            </div>
            <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* bottom section */}

      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon = {<HomeRounded/>} isHome/>
          <MenuContainer link={'#'} icon = {<Chat/>}/>
          <MenuContainer link={'#'} icon = {<AccountBalanceWalletOutlined/>}/>
          <MenuContainer link={'#'} icon = {<Favorite/>}/>
          <MenuContainer link={'#'} icon = {<SummarizeRounded/>}/>
          <MenuContainer link={'#'} icon = {<Settings/>}/>

          <div className="indicator"></div>

        </ul>
      </div>
    </div>
  );
}

export default App;
