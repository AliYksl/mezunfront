import React from 'react';
import logo from './alku-logo.png'
import { Link } from 'react-router-dom'
import './deneme.css';


const Secim = () =>{
    return(
        <div>
            <img src={logo} height="150" alt=" " style={{ marginTop:'20px' }}/>
            <h1 style={{ fontSize:'30px',color:'#f2f2f2'  }}>MEZUN TAKİP SİSTEMİ</h1>
             <div className="deneme">
                <Link to='/ogretmengiris'>
                    <button className="ui inverted red button" style={{ fontSize:'30px'  }}>Öğretmen Girişi</button>
                </Link>
                <Link to='/ogrencigiris'>
                    <button className="ui inverted red button"style={{ fontSize:'30px'  }}>Öğrenci Girişi</button>
                </Link>
             </div>
        </div>
   

    )
}
export default Secim;
