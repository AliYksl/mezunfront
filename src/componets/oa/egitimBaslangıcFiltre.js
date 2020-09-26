import React,{Component} from 'react';
import axios from 'axios';
import Ozelaramaveri from '../ozelaramaveri';
import API_URL from '../API_URL';


let token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = token


class EgitimBaslangıcFiltre extends Component {
  
  

  async componentDidMount(){
    
   const res = await axios.get(API_URL + "/api/Users");
   this.setState({users:res.data.data});
  }
  constructor(props){
    super(props);
     this.state ={
       inpt: "",
       users:[]
   
     }
     this.onChange = this.onChange.bind(this);
     
  }
 
   onChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })
     
   }
   

  render(){
   // console.log(this.state)
   
    return(
      <div>
          
        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <a  href="Ogrenciler" className="item"> Mezun Öğrenciler  </a>
            <a href="UyeBlokla"  className="item"> Mezun Öğrenci Blokla  </a>
            <a href="UyeSil"  className="item"> Mezun Öğrenci Sil  </a>
            <a href="OzelArama"  className="active item"> Özel Arama  </a>
            <div className='right menu'>
         
            <a href="/" className="ui item"  onClick={()=>{
                      
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
                   }} >Çıkış Yap </a>

            </div>
        
          </div>


         
          
        </div>
      
                      <div className="ui left icon input" style={{marginTop:'15px'}}>
                             <input type="text" placeholder="Anahtar Kelime"
                                name='inpt'
                                value={this.state.inpt}
                                onChange={this.onChange}></input>
                              <i className="user icon"></i>
                         </div>
                         <div>
              
                         </div>
                         
        <div align="center">
        <div className="ui inverted vertical menu" align="center"style={{float:'left'}}>
                <a href="OzelArama" className="item">TC Kimlik No Göre Filtrele </a>
                <a href="OkulNoFiltre" className=" item" >Okul Numarasına Göre Filtrele</a>
                <a href="AkedemikBirimFiltre" className="item">Akedemik Birime Göre Filtrele </a>
                <a href="EgitimBaslangıcFiltre" className="active item">Eğitim Başlama Yılına Göre Filtrele</a>
                <a href="EgitimBitisFiltre" className=" item">Eğitim Bitirme Yılına Göre Filtrele </a>
                <a href="EmailFiltre" className=" item">E-mail'e Göre Filtrele </a>
                <a href="SektörFiltre" className=" item">Sektöre Göre Filtrele </a>
                <a href="PozisyonFiltre" className=" item">Pozisyona Göre Filtrele </a>
                
            </div>

            <div align="center" style={{marginTop:'40px'}}>
            {this.state.users
                        .filter(user => user.schoolStartDate.includes(this.state.inpt))
                         .map(veriler => (
                         <Ozelaramaveri  veriler={veriler} />
                         )
                 )}
            </div>
          
        

       
        </div  >
          
        <div style={{marginTop:'80px'}}></div>
      </div>

        )
  }
}


export default EgitimBaslangıcFiltre;
