
import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/navbar/navigationBar.css'
import MainPageFilms from './components/movies/MainPageFilms'
import BardeRecherche from './components/barDeRecherche/BardeRecherche'
import Favorit from './components/favorit/Favorit';
import Navbar from "./components/navbar/Navbar";
import Register from "./components/signinup/Register"


class App extends Component {
   lesFilms = [
    {img: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
    title: "Pursiut of happiness",
    year: "2006",
    star: 5,
    time: "1h 57 minutes",
    id:1,
    category: "Drame",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    },
    {img: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    title: "Coco",
    year: "2017",
    star: 3,
    time    : "1h 49 minutes",
    id:1,
    category: "Animation",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    },
    {img: "https://fr.web.img3.acsta.net/pictures/14/04/03/12/56/160545.jpg",
    title: "Maléfique",
    year: "2014",
    star: 5,
    time    : "1h 37 minutes",
    id:1,
    category: "Thriller",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    },
    {img: "https://vincentvietnamblog.files.wordpress.com/2017/05/1-me-before-you.jpg?w=1108",
    title: "Me before you",
    year: "2016",
    star: 5,
    time    : "1h 51 minutes",
    id:1,
    category: "Romance",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    },
    {img: "https://cdn1.webmanagercenter.com/tekiano/wp-content/uploads/2019/01/dachra-affiche-1.jpg",
    title: "Dachra",
    year: "2018",
    star: 5,
    time    : "1h 54 minutes",
    id:1,
    category: "Horreur",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    },

    {img: "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._AC_SY445_.jpg",
    title: "Inception",
    year: "2010",
    star: 3,
    time    : "2h 28 minutes",
    id:2,
    category: "science-fiction",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

  
  },

    {img: "https://i.pinimg.com/originals/aa/c5/68/aac5685ae1204004d4125891dd8a9726.jpg",
    title: "3 metros sobre el cielo",
    year: "2010",
    star: 4,
    time    : "2h 03 minutes",
    id:3,
    category: "Romance",
    year: 2002,
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

},

    {img: "https://i.pinimg.com/originals/fb/c6/d7/fbc6d73bc1d80a347c057656ff9f7b36.jpg",
    title: "a walk to remember",
    year: "2002",
    star: 5,
    time    : "1h 42 minutes",
    id:4,
    category: "Romance",
    year: 2002,
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

},

    {img: "https://images-na.ssl-images-amazon.com/images/I/A1tC7-MIB2L._AC_SY445_.jpg",
    title: "Colonia",
    year: "2015",
    star: 1,
    time    : "1h 50 minutes",
    id:5,
    category: "thriller",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."
    
},

    {img: "https://imgr.cineserie.com/2018/07/707202.jpg?imgeng=/f_jpg/cmpr_0/w_208/h_320/m_cropbox&ver=1",
    title: "La fureur du Dragon:Bruce Lee",
    year: "1972",
    star: 2,
    time: "2h 13 minutes",
    id:6,
    category: "Action",
    parag : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sapien mollis, consectetur diam in, faucibus ante. Nunc odio massa, fermentum vitae eleifend eu, efficitur non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet commodo tortor, eget ornare nisi. Vestibulum accumsan nec velit dictum rhoncus. Etiam id fermentum mauris. Donec tincidunt lectus vel magna mollis volutpat. Ut volutpat et magna a ornare. Etiam tempor ipsum purus, vel tincidunt purus efficitur ac. Aliquam sollicitudin tristique nulla vel dapibus."

    
}
]
  
  constructor(props) {
    super(props)
    this.state = {
      rechercheParName :null,
      Films:this.lesFilms,
      title:"",
      img:"",
      showMe : false,
      showRegister : true,
      description:[],
      ModalShow:false,
      sh:false,
      name: "",
      password: "",
      email : "",    
      inputEmail:"",
      inputPassword:"",
      t:[1,2,3,4,5],
      starClicked:"☆",
      star:null,
      
    };
    this.array = [];
    
  }
  handleChangeName = (e) =>{
    this.setState ({
        name: e.target.value
        
    })
    localStorage.setItem("name",this.state.name)

}
handleChangePassWord = (e) =>{
  this.setState ({
      password : e.target.value
  })
  localStorage.setItem("password",this.state.password)
  
}
handleChangeEmail = (e) =>{
  this.setState ({
      email : e.target.value
  })
  localStorage.setItem("email",this.state.email)
  
}
log =()=>{
     
  alert("votre donner a eter bien enregister")
}
/* ================================================================================================================================================== */

changeInputEmail = (e) =>{
  this.setState({
    inputEmail:e.target.value
  },()=>{return this.state.inputEmail})
}
changeInputPassword = (e) =>{
  this.setState({
    inputPassword:e.target.value
  },)
}


clickSignUp= () => {
    if (
      this.state.inputEmail  == localStorage.getItem("email") &&
      this.state.inputPassword == localStorage.getItem("password")
    )
    {
      
      return  (
        alert("Bienvenue dans ma box movie"),
        this.setState({
          /* inputPassword:'verifier votre password',
          inputEmail :'verifier votre email', */
          sh:true
         
        },()=>{return this.state.sh}
        ));
    
  }
    else {
     /*  alert("Oups!Veuillez vérifier votre mot  passe ou votre adresse mail"); */
     this.setState({
      inputPassword:'verifier votre password',
      inputEmail :'verifier votre email',
      sh:false
    });
    }
  }
 
/* ================================================================================================================================================== */
      /* function search by name */
      handeleChangeParName = (name) =>{
        this.setState({
          rechercheParName : name.target.value 
        })
      }
      /* end function */
      /* function reset from filter by name */
      resetHandleChangeParName = ()=>{
        this.setState({
          rechercheParName: this.state.rechercheParName.replace(this.state.rechercheParName,'')
        })
      }
      /* end function reset */
      /* function add new film */
      addNewMovie = (newFilm) => {
        this.setState({
          Films: this.state.Films.concat(newFilm )})
          console.log(this.state.Films)
      }
      /* function add to favorit */
      addToFavorit = (x) => {
        if (this.array.indexOf(x) == -1) {
          this.array.push(x);
        } else if (this.array.indexOf(x) > -1) {
          this.array.splice(this.array.indexOf(x), 1);
        }
      }
      /* end function add to favorit liste */
      /* function show me the home page */
      showMe = ()=>{
        this.setState({
          showMe:true,  
          showRegister:false
        })
      }
      /* function for description button plus de detaille */
      showDescription = (x) => {
        this.setState({ModalShow: true})
        /* this.setState({description: [x]}) */
    }
/* function for hiding description button back */
      hidingDescription = () => {
          this.setState({ModalShow: false})
          this.setState({description: []})
      }
 /* fucntion pour le filtrage par etoile */
      getRate = (x) => {

        this.setState(
          {star: parseInt(x)}
        )
        this.setState(
          {starClicked:"🌟" }
        )
      
      }
/* function reset  */
      resetRate = () => {

          this.setState(
            {titredefilem:""}
          )
          this.setState(
            {star: null}
          )
          this.setState(
            {starClicked: "☆"}
          )

      }
     
      
  render() {
    return (
      
            <BrowserRouter>
            <Switch>
              <div className="App">
             { this.state.showMe? <Navbar/>:null}
             <Route path="/">
              {this.state.showRegister?< Register showRegister={this.showMe}
                                                  show={this.state.showMe}
                                                  showRegister={this.state.showRegister}
                                                  s={this.showMe}
                                                  handleChangeName={this.handleChangeName}
                                                  handleChangePassWord={this.handleChangePassWord}
                                                  handleChangeEmail={this.handleChangeEmail}
                                                  log={this.log}
                                                  changeInputEmail={this.changeInputEmail}
                                                  changeInputPassword={this.changeInputPassword}
                                                  clickSignUp={this.clickSignUp}
                                                  sh={this.state.sh}
                                                  inputPassword={this.state.inputPassword}
                                                  inputEmail={this.state.inputEmail}
                                                  value={this.state.title}  />:null}
              </Route>
                              
                  <Route  path="/" exact>
                    
                    
                    {this.state.showMe?<BardeRecherche handeleChangeParName = {this.handeleChangeParName}
                                    rechercheParName={this.state.rechercheParName}
                                    resetHandleChangeParName={this.resetHandleChangeParName}/>:null}   
                    {this.state.showMe?<MainPageFilms rechercheParName={this.state.rechercheParName}
                                  Films={this.state.Films}
                                  addNewMovie={(newFilm)=>this.addNewMovie(newFilm)}
                                  addToFavorit={this.addToFavorit}
                                  showDescription={this.showDescription}
                                  getRate={this.getRate}
                                  tt={this.state.t}
                                  star={this.state.star} />: null}
                                  
                  </Route>
                  <Route path="/favorit" >
                    <Favorit arrays={this.array}/>
                  </Route>  
              </div>
              </Switch>
            </BrowserRouter>
          )
        }
        
        } 
        
export default App;
    

