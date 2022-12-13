import React from 'react';
import pizzas from './pizzasdata';
import Pizza from './Pizza';


function Home() {

  
  return (
    <div>
        <div className="row justify-content-center">
          {
            pizzas.map(pizza=>{
              return <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza}/>
                </div>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Home