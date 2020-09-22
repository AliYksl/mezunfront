import React, { Component } from 'react';
import './deneme.css';
import API_URL from "./API_URL";

const axios = require('axios');

class Ogretmengiris extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ogretmen_k_a:'',
      ogretmen_s:'',
      role:'admin',
      contacts:[]
    }
    this.routeChange = this.routeChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  routeChange() {
    let path = `/ogretmengiris/Ogrenciler`;
    this.props.history.push(path);
  }

  getContacts = async () => {
    const { data: { data } } = await axios.get(API_URL + "/api/users");
    this.setState({
      contacts: data,
    });
    //console.log(data);
    //console.log(data.length);
  };

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (
      <div className="ogretmen-girisi">
        <div className="ui form">
          <div className="field">
            <label >KULLANICI ADI</label>
            <div className="ui left icon input">
              <input type="text" placeholder="Kullanıcı Adı"
                name='ogretmen_k_a'
                value={this.state.ogretmen_k_a}
                onChange={this.onChange}></input>
              <i className="user icon"></i>
            </div>
          </div>
          <div className="field">
            <label>Şifre</label>
            <div className="ui left icon input">
              <input type="password" placeholder="Şifreniz" name='ogretmen_s'
                value={this.state.ogretmen_s}
                onChange={this.onChange}></input>
              <i className="lock icon"></i>
            </div>
          </div>
          <div className="ui blue submit button"
            onClick={() => {
              for(var i = 0 ; i < this.state.contacts.length ; i++){
                if(this.state.contacts[i].email === this.state.ogretmen_k_a && this.state.contacts[i].role === this.state.role){
              axios.post(API_URL + "/api/auth/login", {
                email: this.state.ogretmen_k_a,
                password: this.state.ogretmen_s
              }).then((res) => {
                localStorage.setItem('token', res.data.token);
                    this.routeChange();
              })
            } }}}>Login</div>
        </div>
      </div>

    )
  }

}
export default Ogretmengiris;
