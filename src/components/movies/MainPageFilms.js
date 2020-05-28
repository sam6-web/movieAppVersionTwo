import React, { Component } from 'react'
import './mainPageMovie.css'

 class MainPageFilms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {    
             loading:true,        
            ModalShow:false,
            showImage:true,
         }      
     }
     componentDidMount = ()=>{
         setTimeout(()=>{
            this.setState({
                loading:false
            })
         },3000)
     }
     
     /* function for description button plus de detaille */
        showDescription = (x) => {
            this.setState({
                
                ModalShow: true,
                showImage:false
            }) 
        }
/* function for hiding description button back */
        hidingDescription = () => {
            this.setState({
                ModalShow: false,
                showImage:true
            })
        }
     
    render() {
        const {rechercheParName,addNewMovie,Films,addToFavorit,tt,getRate,star,value} = this.props
        return (
            <div className="main">
                {this.state.loading?<div class="loader"></div>:
                <div>
                <button className="btnAjouter" onClick={()=>addNewMovie({title: prompt('ajouter le titre du film '),
                                                                         img: prompt("ajouter un lien de l'image"),                                                                
                                                                    })} >ajouter</button>
                <button onClick={this.showDescription}>more</button>
                <button onClick={this.hidingDescription}>hide</button>
                <div className="starRating">
                            {tt.map(el => 
                            <button className="btn_rate" onClick={()=>getRate(el)}>🌟</button>)}
                            
                </div>
                
                <div className="mainposter">                        
                    {Films.filter(x => {
                        if(rechercheParName == null)
                        return x
                        else if(x.title.toLowerCase().indexOf(rechercheParName.toLowerCase(),0)!==-1)
                        return x
                    }
                    )
                    .filter((x)=>
                    {if(star==null)
                    return x
                    else if (star==x.etoile)
                    return x
                    })
                    .map(x=>{return(                        
                        <div className="poster" key={Math.random()} >
                            {this.state.showImage?<div>
                                <img className="image" src={x.img}></img>
                            </div>:null}
                            <div className='titreDuFilm'>
                                <h3> {x.title} </h3>
                                <span> {"🌟".repeat(x.star)} </span>
                            </div>
                            
                            <div className='buttonmadd'>
                                <button onClick={()=>addToFavorit(x)}>add</button>  
                            </div>
                            {this.state.ModalShow?
                            <div className="description">
                            <div> {x.year} </div>
                            <h3> {x.title} </h3>
                            <h2> {x.time} </h2>                            
                            <h2> {x.category} </h2>
                            <p> {x.parag} </p>
                            </div>:null}

                        </div>                      
                    )
                    })}                    
                </div>
                </div>}
                
                
                
            </div>
        )
    }
}

export default MainPageFilms



 



