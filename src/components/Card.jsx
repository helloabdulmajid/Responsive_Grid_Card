import React from 'react'
import '../styles/Card.css'
import { CardList } from '../helper/CardList'

const Card = () => {
  
  return (
   <>
    <div className="main">
        <h1>Responsive Card Grid Layout</h1>
        <ul className="cards">

    
        {
                CardList.map((x)=>{
                    return(
                        <>

                         <li className="cards_item">
                           <div className="card">
                        <div className="card_image"><img   src={x.image} alt="am"/>
                        </div>

                  <div className="card_content">
                <h2 className="card_title">{x.title}</h2>
                <p className="card_text">{x.text}</p>
                <button className="btn card_btn">{x.more}</button>
              </div>
              </div>
         </li>

             
              </>
                    );
                })
            }
             
         
       
</ul>
    </div>
      
      {/* <h3 className="made_by">Made with ♡</h3> */}
   </>
  )
}

export default Card