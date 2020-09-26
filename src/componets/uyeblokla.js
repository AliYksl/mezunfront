import React,{Component} from 'react';
import KayıtlıVeriBlokla from './kayitliveriblokla';
import axios from 'axios';
import API_URL from './API_URL';



let token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = token



class UyeBlokla extends Component {
  constructor(props){
    super(props);
     this.state ={
       arama:'',
       users:[]
   
     }
     this.onChange = this.onChange.bind(this);
     
  }
 
   onChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
     
   }

  async componentDidMount(){
    
   const res = await axios.get(API_URL + "/api/Users");
   this.setState({users:res.data.data});
  }


   render(){
    return(
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <a  href="Ogrenciler" className="item"> Mezun Öğrenciler  </a>
            <a href="UyeBlokla"  className="active item"> Mezun Öğrenci Blokla  </a>
            <a href="UyeSil"  className="item"> Mezun Öğrenci Sil  </a>
            <a href="OzelArama"  className="item"> Özel Arama  </a>

            <div className='right menu'>
                <div className="ui icon input">
                    <input type="text " placeholder="Öğrenci Ara..."
                       name='arama' 
                       value={this.state.arama}
                       onChange={this.onChange} />
                    <i className="search link icon"></i>
                  </div>
                <a href="/" className="ui item" className="ui item"  onClick={()=>{
                      
                      axios.get(API_URL + "/api/auth/logout",{
                        headers: {
                            'Authorization': `Bearer: ${localStorage.getItem('token')}`
                        }
                    })
                      .then(()=>{
                       
                      })
                      .catch((err)=>{
                        console.log(err);
                      })
                   }}>Çıkış Yap </a>

            </div>
          
          </div>
        </div>


        {this.state.users
              .filter(user => user.name.includes(this.state.arama))
              .map(veriler => (
                <KayıtlıVeriBlokla  veriler={veriler} />
              )
          )}
    
        

      </div>
        
        )
   }
  }

  
  export default  UyeBlokla;