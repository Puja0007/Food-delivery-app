import React from 'react';

export default function MenuContainer({icon,link,isHome}) {
    return(
       
     <li className={isHome ? `active` : ``}>
     <a href={link}>
        <span className="icon">{icon}</span>
      </a>
     </li>
       
    )
}