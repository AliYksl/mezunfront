import React,{Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Secim from './componets/secim';
import Ogretmengiris from './componets/ogretmengiris';
import Ogrencigiris from './componets/ogrencigiris';
import KayıtOl from './componets/kayitol';
import Ogretmenmenu from './componets/ogretmenmenu';
import UyeSil from './componets/uyesil';
import UyeBlokla from './componets/uyeblokla';
import OgrenciBilgilerim from './componets/ogrencimenu/ogrencibilgilerim';
import history from './history'
import './App.css';


class App extends Component{


 render(){
  return (
      
    <Router history ={history}>
      <div className="App">
        <Switch>
            <Route path='/' exact component={Secim}/>
            <Route path='/ogretmengiris' exact component={Ogretmengiris}/>
            <Route path='/ogrencigiris' exact component={Ogrencigiris}/>
            <Route path='/ogrencigiris/Bilgilerim' exact component={OgrenciBilgilerim}/>
            <Route path='/ogrencigiris/kayitol' exact component={KayıtOl}/>
            <Route path='/ogretmengiris/Ogrenciler' exact component={Ogretmenmenu}/>
            <Route path='/ogretmengiris/UyeSil' exact component={UyeSil}/>
            <Route path='/ogretmengiris/UyeBlokla' exact component={UyeBlokla}/>

        </Switch>
      </div>
  
  </Router>


 
);
 }
}

export default App;
