import React,{Component} from 'react';
import { Link } from 'react-router-dom'

import API_URL from "./API_URL";
const axios = require('axios');



class Ogrencigiris extends Component {


 constructor(props){
   super(props);
    this.state ={
      ogrenci_k_a:'',
      ogrenci_s:'',
      role:'user',
      contacts:[]
      
    }
    this.routeChange = this.routeChange.bind(this);
    this.onChange = this.onChange.bind(this);
 }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })

  }
    routeChange() {
   {
      let path = `/ogrencigiris/Bilgilerim`;
      this.props.history.push(path);
    }
  }
  
      
    

  getContacts = async () => {
    const {data : {data }} = await axios.get(API_URL + "/api/users");
    this.setState({
      contacts: data,
    });
   // console.log(data);
   // console.log(data.length);
  };

    componentDidMount() {
     this.getContacts();
  }


   render(){


    return(
     
      <div className="ogrenci-girisi">
        <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
        <div className="column">
          <div className="ui form">
            <div className="field">
              <label >E-mail</label>
              <div className="ui left icon input">
                <input type="text" placeholder="E-mail"
                  name='ogrenci_k_a'
                  value={this.state.ogrenci_k_a}
                  onChange={this.onChange}></input>
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label>Şifre</label>
              <div className="ui left icon input">
                <input  type="password" placeholder="Şifreniz"  name='ogrenci_s'
                  value={this.state.ogrenci_s}
                  onChange={this.onChange}></input>
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="ui blue submit button"
                onClick={()=>{
                  for(var i = 0 ; i < this.state.contacts.length ; i++){
                    if(this.state.contacts[i].email === this.state.ogrenci_k_a && this.state.contacts[i].role === this.state.role){
                    axios.post(API_URL + "/api/auth/login", {
                        email: this.state.ogrenci_k_a,
                        password: this.state.ogrenci_s
                        }
                    ).then((res) => {
                         console.log(res.data);
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('email', this.state.ogrenci_k_a);
                        this.routeChange();
                    })
                  } }}}
               >Giriş Yap</div>
          </div>
        </div>
        <div className="middle aligned column">
            <Link to='/ogrencigiris/kayitol'>
              <div className="ui big button"><i className="signup icon"></i> Kayıt Ol </div>
           </Link>

        </div>
      </div>
      <div className="ui vertical divider">Veya </div>
    </div>

      </div>

        )
   }
}

export default Ogrencigiris;
