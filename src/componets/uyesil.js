import React,{Component} from 'react';
import KayıtlıVeriSil from './kayitliverisil';
import axios from 'axios';
import API_URL from './API_URL';



let token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = token



class UyeSil extends Component {
  state ={
    users:[]
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
            <a href="UyeBlokla"  className="item"> Mezun Öğrenci Blokla  </a>
            <a href="UyeSil"  className="active item"> Mezun Öğrenci Sil  </a>
            <div className='right menu'>
                <div className="ui icon input">
                    <input type="text " placeholder="Öğrenci Ara..." />
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

           {
            this.state.users.map(veriler=>(   
            
            <KayıtlıVeriSil veriler={veriler}/>
          ))
        }
        

      </div>
        
        )
   }
  }

  
  export default  UyeSil;