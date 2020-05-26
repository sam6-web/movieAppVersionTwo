import React, { Component } from 'react'
import './barDerecherche.css'

export class BardeRecherche extends Component {
    render() {
        
        const  {handeleChangeParName,resetHandleChangeParName,rechercheParName} = this.props     
        return (        
            <div>
                <div className='barDeRecherche'>
                  <input className='inpt' placeholder='search' /* value={rechercheParName} */   onChange={handeleChangeParName}></input>
                  <button className='btn' /* onClick={resetHandleChangeParName} */ >mise à zero</button>
                </div>
            </div>
        )
    }
}

export default BardeRecherche
