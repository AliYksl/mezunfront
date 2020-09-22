import React,{Component} from 'react';
import './deneme.css';
import ReactShadowScroll from 'react-shadow-scroll';
import API_URL from "./API_URL";
const axios = require('axios');


class KayıtOl extends Component {

  constructor(props){

    super(props);
     this.state ={
         identificationNumber: '', //tc kimlik no
         name: "",
         email: "",
         phoneNumber: "",
         faculty: "",
         program: "",
         studentNumber: "",
         company: "",
         position: "",
         sector: "",
         schoolStartDate: "",
         schoolGraduationDate: "",
         place: "",
         country: "",
         degree: "",
         gender: "",
         password: ""

     }

     this.onChange = this.onChange.bind(this);
  }

   onChange(event){
     this.setState({
       [event.target.name]: event.target.value
     })

   }
    routeChange() {
        let path = `/ogrencigiris`;
        this.props.history.push(path);
    }


  render(){



    return(
      <ReactShadowScroll>


     <div className='kayit-tasarim'>
      <h1 style={{color:'white'}}>MEZUN  KAYIT FORMU</h1>




     <h3 className='kayıt-baslık'> Kimlik Bilgileri</h3>
     <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
       <input type="text" placeholder="TC. Kimlik No"
                  name='identificationNumber'
                  value={this.state.identificationNumber}
                  onChange={this.onChange}></input>
         <div className="ui left icon input" style={{marginTop:'15px'}}>
             <input type="text" placeholder="Ad-Soyad"
                name='name'
                value={this.state.name}
                onChange={this.onChange}></input>
              <i className="user icon"></i>
         </div>
         <div className="ui left icon input" style={{marginTop:'15px'}}>
             <input type="text" placeholder="Okul-Numarası"
                name='studentNumber'
                value={this.state.studentNumber}
                onChange={this.onChange}></input>
              <i className="user icon"></i>
         </div>

     </div>


     <h3 className='kayıt-baslık'> Eğitim Bilgileri</h3>


     <select  multiple="" style={{fontSize:'18px',width:'400px'}}
                    name='faculty' value={this.state.faculty} onChange={this.onChange} >
         <option value="Akedemik Birim Seçiniz">Akedemik Birim Seçiniz</option>
         <option value="Eğitim Fakültesi">Eğitim Fakültesi</option>
        <option value="Diş Hekimliği Fakültesi">Diş Hekimliği Fakültesi</option>
        <option value="Eczacılık Fakültesi">Eczacılık Fakültesi</option>
        <option value="Fen Fakültesi">Fen Fakültesi</option>
        <option value="Mimarlık Fakültesi">Mimarlık Fakültesi</option>
        <option value="Mühendislik Fakültesi">Mühendislik Fakültesi</option>
        <option value="Sağlık Bilimleri Fakültesi">Sağlık Bilimleri Fakültesi</option>
        <option value="Spor Bilimleri Fakültesi">Spor Bilimleri Fakültesi</option>
        <option value="Teknoloji Fakültesi">Teknoloji Fakültesi</option>
        <option value="Tıp Fakültesi">Tıp Fakültesi</option>
        <option value="Uygulamalı Bilimler Fakültesi">Uygulamalı Bilimler Fakültesi</option>
        <option value="Bilişim Enstitüsü">Bilişim Enstitüsü</option>
        <option value="Eğitim Bilimleri Enstitüsü">Eğitim Bilimleri Enstitüsü</option>
        <option value="Fen Bilimleri Enstitüsü">Fen Bilimleri Enstitüsü</option>
        <option value="Kazaları Araştırma ve Önleme Enstitüsü">Kazaları Araştırma ve Önleme Enstitüsü</option>
        <option value="Sağlık Bilimleri Enstitüsü">Sağlık Bilimleri Enstitüsü</option>
        <option value="Yabancı Diller Yüksekokulu">Yabancı Diller Yüksekokulu</option>
        <option value="Sağlık Hizmetleri Meslek Yüksekokulu">Sağlık Hizmetleri Meslek Yüksekokulu</option>
        <option value="Teknik Bilimler Meslek Yüksekokulu">Teknik Bilimler Meslek Yüksekokulu</option>

        </select>









    <div>
        <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
              <input type="text" placeholder="Bölümünüzü Girin"
                  name='program'
                  value={this.state.program}
                  onChange={this.onChange}>
              </input><i className="bookmark icon"></i>
        </div>

    </div>






     <h3 className='kayıt-baslık'>İletişim Bilgileri</h3>
     <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
       <div className="ui left icon input" style={{fontSize:'12px',width:'400px'}}>
          <input type="text" placeholder="E-Mail"
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}></input><i className="envelope icon"></i>
       </div>
       <div className="ui left icon input" style={{fontSize:'12px',width:'400px',marginTop:'12px'}}>
         <input type="text" placeholder="Cep No"
          name='phoneNumber'
          value={this.state.phoneNumber}
          onChange={this.onChange} ></input><i className="phone icon"></i>
       </div>
     </div>




     <h3 className='kayıt-baslık'> Çalışma Bilgileri</h3>
     <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>

         <div className="ui left icon input" style={{marginTop:'12px'}}>
             <input type="text" placeholder="Şirket"
             name='company'
             value={this.state.company}
             onChange={this.onChange}></input>
             <i className="angle double right icon"></i>
         </div>
         <div className="ui left icon input" style={{marginTop:'12px'}}>
             <input type="text" placeholder="Pozisyon"
                name='position'
                value={this.state.position}
                onChange={this.onChange}></input>
             <i className="angle double right icon"></i>
         </div>
         <div className="ui left icon input" style={{marginTop:'12px'}}>
             <input type="text" placeholder="Sektör"
                name='sector'
                value={this.state.sector}
                onChange={this.onChange}></input>
             <i className="angle double right icon"></i>
         </div>

     </div>



     <h3 > Başlangıç Yılı</h3>
     <div  >
        <select multiple="" style={{fontSize:'18px',width:'200px'}}
                name='schoolStartDate'
                value={this.state.schoolStartDate}
                onChange={this.onChange}>
        <option value=" --Sec-- "> --Sec-- </option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>

       </select>

      </div>
     <h3 > Bitiş Yılı</h3>
     <div  >
        <select multiple="" style={{fontSize:'18px',width:'200px'}}
                name='schoolGraduationDate'
                value={this.state.schoolGraduationDate}
                onChange={this.onChange}>
        <option value=" --Sec-- "> --Sec-- </option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>

       </select>

     </div>
         <h3 className='kayıt-baslık'> Eğitim Düzeyi</h3>
         <select multiple="" style={{fontSize:'18px',width:'400px'}}
                 name='degree'
                 value={this.state.degree}
                 onChange={this.onChange}>
             <option value="">Eğitim Düzeyinizi Seçiniz </option>
             <option value="css">Önlisans</option>
             <option value="css">Lisans</option>
             <option value="css">Lisansüstü</option>
         </select>





     <h3 className='kayıt-baslık'> Ülke</h3>
     <select style={{fontSize:'18px',width:'400px'}}
              name='country'
              value={this.state.country}
              onChange={this.onChange}>
        <option value="--Sec--"> --Sec-- </option>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Åland Islands">Åland Islands</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="American Samoa">American Samoa</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Anguilla">Anguilla</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Aruba">Aruba</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahamas">Bahamas</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Belize</option>
        <option value="Benin">Benin</option>
        <option value="Bermuda">Bermuda</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option>
        <option value="Bouvet Island">Bouvet Island</option>
        <option value="Brazil">Brazil</option>
        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
        <option value="Brunei Darussalam">Brunei Darussalam</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burundi">Burundi</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada">Canada</option>
        <option value="Cape Verde">Cape Verde</option>
        <option value="Cayman Islands">Cayman Islands</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option value="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Christmas Island">Christmas Island</option>
        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
        <option value="Colombia">Colombia</option>
        <option value="Comoros">Comoros</option>
        <option value="Congo">Congo</option>
        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
        <option value="Cook Islands">Cook Islands</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Cote D'ivoire">Cote D'ivoire</option>
        <option value="Croatia">Croatia</option>
        <option value="Cuba">Cuba</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option value="Estonia">Estonia</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
        <option value="Faroe Islands">Faroe Islands</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="French Guiana">French Guiana</option>
        <option value="French Polynesia">French Polynesia</option>
        <option value="French Southern Territories">French Southern Territories</option>
        <option value="Gabon">Gabon</option>
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Greece">Greece</option>
        <option value="Greenland">Greenland</option>
        <option value="Grenada">Grenada</option>
        <option value="Guadeloupe">Guadeloupe</option>
        <option value="Guam">Guam</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guernsey">Guernsey</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-bissau">Guinea-bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option>
        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
        <option value="Honduras">Honduras</option>
        <option value="Hong Kong">Hong Kong</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="Isle of Man">Isle of Man</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Japan">Japan</option>
        <option value="Jersey">Jersey</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya">Kenya</option>
        <option value="Kiribati">Kiribati</option>
        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
        <option value="Korea, Republic of">Korea, Republic of</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho">Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Macao">Macao</option>
        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
        <option value="Madagascar">Madagascar</option>
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives">Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Islands">Marshall Islands</option>
        <option value="Martinique">Martinique</option>
        <option value="Mauritania">Mauritania</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mayotte">Mayotte</option>
        <option value="Mexico">Mexico</option>
        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
        <option value="Moldova, Republic of">Moldova, Republic of</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozambique">Mozambique</option>
        <option value="Myanmar">Myanmar</option>
        <option value="Namibia">Namibia</option>
        <option value="Nauru">Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Netherlands Antilles">Netherlands Antilles</option>
        <option value="New Caledonia">New Caledonia</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Niue">Niue</option>
        <option value="Norfolk Island">Norfolk Island</option>
        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palau">Palau</option>
        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea">Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Pitcairn">Pitcairn</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="Qatar">Qatar</option>
        <option value="Reunion">Reunion</option>
        <option value="Romania">Romania</option>
        <option value="Russian Federation">Russian Federation</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saint Helena">Saint Helena</option>
        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
        <option value="Saint Lucia">Saint Lucia</option>
        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
        <option value="Samoa">Samoa</option>
        <option value="San Marino">San Marino</option>
        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal">Senegal</option>
        <option value="Serbia">Serbia</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Islands">Solomon Islands</option>
        <option value="Somalia">Somalia</option>
        <option value="South Africa">South Africa</option>
        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Sudan">Sudan</option>
        <option value="Suriname">Suriname</option>
        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
        <option value="Swaziland">Swaziland</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
        <option value="Thailand">Thailand</option>
        <option value="Timor-leste">Timor-leste</option>
        <option value="Togo">Togo</option>
        <option value="Tokelau">Tokelau</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Viet Nam">Viet Nam</option>
        <option value="Virgin Islands, British">Virgin Islands, British</option>
        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
        <option value="Wallis and Futuna">Wallis and Futuna</option>
        <option value="Western Sahara">Western Sahara</option>
        <option value="Yemen">Yemen</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
    </select>
     <h3 className='kayıt-baslık'> Şehir</h3>
     <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
             <input type="text" placeholder="Şehir"
                name='place'
                value={this.state.place}
                onChange={this.onChange}></input>
             <i className="angle double right icon"></i>
     </div>
         <h3 className='kayıt-baslık'> Cinsiyet</h3>
         <select multiple="" style={{fontSize:'18px',width:'400px'}}
                 name='gender'
                 value={this.state.gender}
                 onChange={this.onChange}>
             <option value="">Cinsiyetinizi seçiniz </option>
             <option value="css">Kadın</option>
             <option value="css">Erkek</option>
         </select>
     <h3 className='kayıt-baslık'> Giriş Bilgileri</h3>
     <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
      <div className="ui left icon input" style={{fontSize:'12px',width:'400px',flexDirection:'column'}}>
         <input type="password" placeholder="Şifre"
              name='password'
              value={this.state.password}
              onChange={this.onChange}></input>
          <i className="lock icon"></i>
      </div>

     </div>
     <div>




     <button className="ui primary button"
        onClick={()=>{
            axios.post(API_URL + "/api/auth/register", {

                identificationNumber:this.state.identificationNumber, //tc kimlik no
                name:this.state.name,
                studentNumber:this.state.studentNumber,
                faculty:this.state.faculty,
                program:this.state.program,
                email:this.state.email,
                phoneNumber:this.state.phoneNumber,
                company:this.state.company,
                position:this.state.position,
                sector:this.state.sector,
                degree:this.state.degree,
                schoolStartDate:this.state.schoolStartDate,
                schoolGraduationDate:this.state.schoolGraduationDate,
                country:this.state.country,
                place:this.state.place,
                gender:this.state.gender,
                password:this.state.password,
            }).then((res) => {
                // console.log(res.data);
                localStorage.setItem('token', res.data.token);
                this.routeChange();
            })
        } } >  Üye ol  </button>

     <div style={{fontSize:'12px',width:'400px',flexDirection:'column',marginTop:'100px'}} />

     </div>

     </div>



     </ReactShadowScroll>


         )
  }

}
export default  KayıtOl;
