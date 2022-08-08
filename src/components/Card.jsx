import React from 'react'
import '../styles/Card.css'
import { CardList } from '../helper/CardList'

const Card = () => {
    console.log(CardList.image)
  
  return (
   <>
    <div className="main">
        <h1>Responsive Card Grid Layout</h1>
        

    
        {
                CardList.map((x)=>{
                    return(
                        <>
                        <ul className="cards">
                         <li className="cards_item">
                         <div className="card">
                        
                        <div className="card_image">{x.image}</div>
                      
                  <div className="card_content">
                <h2 className="card_title">{x.title}</h2>
                <p className="card_text">{x.text}</p>
                <button className="btn card_btn">{x.more}</button>
              </div>
              </div>
         
              </li>
              </ul>
              </>
                    );
                })
            }

      
    </div>
      
      {/* <h3 className="made_by">Made with ♡</h3> */}
   </>
  )
}

export default Card