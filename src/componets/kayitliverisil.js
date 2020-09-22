import React from 'react';
import logo from './profil.jpg';
import API_URL from "./API_URL";
import history from '../history';


const axios = require('axios');
let token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = token
const KayıtlıVeriSil =({veriler}) =>{
       
      return veriler.blocked === false ?(
        <div>

        <div className="ui cards" style={{marginLeft:'500px'}}>
          <div className="card">
            <div className="content">
            
              <img src={logo} alt=" " className="right floated mini ui image" />
              <div className="header">
                {veriler.name}
              </div>
              <div className="meta">
                {veriler.program}
              </div>
              <div className="description" >
                Ülke: {veriler.country}
              </div>
              <div className="description">
                Yaşadığı Şehir: {veriler.place}
              </div>
              <div className="description">
                T.C Kimlik No: {veriler.identificationNumber}
              </div>
              <div className="description">
                Okul Numarası: {veriler.studentNumber}
              </div>
              <div className="description">
                Akedemik Birim: {veriler.faculty}
              </div>
              <div className="description">
                Eğitim Başlangıç Yılı: {veriler.schoolStartDate}
              </div>
              <div className="description">
                Eğitim Bitirme Yılı: {veriler.schoolGraduationDate}
              </div>
              <div className="description">
                Cep No: {veriler.phoneNumber}
              </div>
              <div className="description">
               E-mail: {veriler.email}
              </div>
              <div className="description">
                Sektör: {veriler.sector}
              </div>
              <div className="description">
                Pozisyon: {veriler.position}
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic red button"  
                  onClick={()=>{
                    axios.delete(API_URL + "/api/admin/user/"+veriler._id,{
                      headers: {
                          'Authorization': `Bearer: ${localStorage.getItem('token')}`
                      }
                  })
                    .then((veriler)=>{
                      history.push('/ogretmengiris/Ogrenciler')
                    })
                    .catch((err)=>{
                      console.log(err);
                    })
                 }}>Sil</div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
  
    ):(
      <div>

      <div className="ui cards" style={{marginLeft:'500px'}}>
        <div className="card">
          <div className="content">
          
            <img src={logo} alt=" " className="right floated mini ui image" />
          <div className="header" style={{color:'red'}}>
               BLOKLANDI
          </div>
            <div className="header">
              {veriler.name}
            </div>
            <div className="meta">
              {veriler.program}
            </div>
            <div className="description" >
              Ülke: {veriler.country}
            </div>
            <div className="description">
              Yaşadığı Şehir: {veriler.place}
            </div>
            <div className="description">
              T.C Kimlik No: {veriler.identificationNumber}
            </div>
            <div className="description">
              Okul Numarası: {veriler.studentNumber}
            </div>
            <div className="description">
              Akedemik Birim: {veriler.faculty}
            </div>
            <div className="description">
              Eğitim Başlangıç Yılı: {veriler.schoolStartDate}
            </div>
            <div className="description">
              Eğitim Bitirme Yılı: {veriler.schoolGraduationDate}
            </div>
            <div className="description">
              Cep No: {veriler.phoneNumber}
            </div>
            <div className="description">
             E-mail: {veriler.email}
            </div>
            <div className="description">
              Sektör: {veriler.sector}
            </div>
            <div className="description">
              Pozisyon: {veriler.position}
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic red button"  
                onClick={()=>{
                  axios.delete(API_URL + "/api/admin/user/"+veriler._id,{
                    headers: {
                        'Authorization': `Bearer: ${localStorage.getItem('token')}`
                    }
                })
                  .then((veriler)=>{
                    history.push('/ogretmengiris/Ogrenciler')
                  })
                  .catch((err)=>{
                    console.log(err);
                  })
               }}>Sil</div>
            </div>
          </div>
        </div>
       
      </div>
    </div>

  )
    }


export default  KayıtlıVeriSil;

