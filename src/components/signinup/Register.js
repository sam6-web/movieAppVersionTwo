import React, { Component } from 'react'

class Register extends Component {
    constructor(){
        super()
        this.state = {
          loading:true,     
           
            
        }
      }
      componentDidMount = ()=>{
        setTimeout(()=>{
           this.setState({
               loading:false
           })
        },3000)
    }
      
   
    
    
    
    render() {
        const{s,handleChangeName,handleChangePassWord,handleChangeEmail,log,changeInputEmail,changeInputPassword,clickSignUp,sh,inputEmail,inputPassword}=this.props
        return (
            <div className="flex">
              <Home />
                <div className="register">
                  <div className="signin">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <div className="FormField">
                          <label className="FormField__Label" >Full Name</label>
                          <input type="text"   className="FormField__Input" placeholder="Enter your full name"    value={this.state.name}  onChange={handleChangeName}    />
                          <br></br>
                          <span ></span>
                        </div>
                        <div className="FormField">
                          <label className="FormField__Label" >Password</label>
                          <input type="password"   className="FormField__Input" placeholder="Enter your password"   value={this.state.password}  onChange={handleChangePassWord}  />
                        </div>
                        <div className="FormField">
                          <label className="FormField__Label" >E-Mail Address</label>
                          <input type="email"   className="FormField__Input" placeholder="Enter your email"   value={this.state.email}  onChange={handleChangeEmail}  />
                        </div>

                        <div className="FormField">
                          <label className="FormField__CheckboxLabel">
                              <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"  value={this.state.hasAgreed}  /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                          </label>
                        </div>

                        <div className="FormField">
                            <button className="FormField_Button" onClick={log}>Sign Up</button> 
                        </div>
                      </form>
                  </div>
                  <div className="signin">
                    <form  className="FormFields">
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" onChange={changeInputEmail}  className="FormField__Input" placeholder="Enter your email"/>
                        <div> {inputEmail} </div>
                      </div>
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" onChange={changeInputPassword}  className="FormField__Input" placeholder="Enter your password"/>
                        <div> {inputPassword} </div>
                      </div>
                      <div className="FormField">
                          <button className="FormField_Button" onClick={clickSignUp,s}>Sign in</button> 
{/*                           <button className='btnBtn' onClick={s}>show me movies</button>                      
 */}                      </div>
                    </form>
                  </div>    
                </div>
            </div>
            
        )
    }
}


 function Home() {
  return (
    <div>

                <div className="homePage">
                  <div className="titleEtP">
                      <h1>Welcome Movie Box App </h1>
                      <h4>Download / Watch <br></br>
                          Any HD movie or TV-Show on your smart device for Free</h4>
                  </div>
                  <div className="titleEtP">
                      <img className="imghome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLT8DduoAnTuUmVsmy8rttNl4b0t25E12H5Lzg1JLKPQWVt8w&usqp=CAU"></img>
                  </div>                                
                </div>

    </div>
  )
}


export default Register
