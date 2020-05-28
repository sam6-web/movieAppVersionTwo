import React, { Component } from 'react'

 class Favorit extends Component {
  
    render() {

        const{arrays}=this.props
        const favoriteList = arrays.map(x => {
            return(                        
                <div>
                    <div className="poster" key={Math.random()} >                    
                        <div>
                            <img className="image" src={x.img}></img>
                        </div>
                        <div className='titreDuFilm'>
                            <h3> {x.title} </h3>
                        </div>                        
                    </div>    
                </div>                  
            )})
          
        return(
          <div className="mainposter">
              

            {favoriteList}
          </div>
        )
      }
}

export default Favorit
