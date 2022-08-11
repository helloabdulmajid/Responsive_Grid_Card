import React from 'react'
import '../styles/Card.css'
import { CardList } from '../helper/CardList'

const Card = () => {
  
  return (
   <>
    <div className="main">
        <h1>Responsive Card Grid Layout</h1>
        <ul className="cards">
<<<<<<< HEAD
=======
                        
                      
>>>>>>> 0df31875d30855c0cf1ccd3a68c2c15cd278c774

    
        {
                CardList.map((x)=>{
                    return(
                        <>
<<<<<<< HEAD
                       
=======
>>>>>>> 0df31875d30855c0cf1ccd3a68c2c15cd278c774
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
<<<<<<< HEAD
         
              </li>
=======
         </li>
>>>>>>> 0df31875d30855c0cf1ccd3a68c2c15cd278c774
             
              </>
                    );
                })
            }
             
         
         </ul>

</ul>
    </div>
      
      {/* <h3 className="made_by">Made with ♡</h3> */}
   </>
  )
}

export default Card