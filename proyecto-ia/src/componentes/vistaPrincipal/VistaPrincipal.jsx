import React from 'react';
import * as Styles from '../vistaPrincipal/vistaPrincipal.module.css';
import { GiHamburgerMenu, BsInfoCircleFill, FaHome, BsFillPersonFill, IoLocationSharp } from 'react-icons/all';
import logo from '../../assets/images/logo.png';
import backGround from '../../assets/images/fondo.jpg';

const VistaPrincipal = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={"row " + Styles.navBar} >
          <div className="col-8 d-flex align-items-center">
            <div className={Styles.imageContainer} style={{ backgroundImage: `url(${logo})` }} />
          </div>
          <div className="col-4 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <FaHome style={{ color: "#e6f0ff" }} />
              <a className={"nav-link active " + Styles.navLabels}
                href="#"
              >
                Inicio
              </a>
            </div>
            <div className="d-flex align-items-center">
              <BsFillPersonFill style={{ color: "#e6f0ff" }} />
              <a className={Styles.navLabels + " nav-link active" }
                href="#"
              >
                Mi cuenta
              </a>
            </div>
            <div className="d-flex align-items-center">
              <BsInfoCircleFill style={{ color: "#e6f0ff" }} />
              <a className={"nav-link active " + Styles.navLabels}
                href="#"
              >
                Acerca de nosotros
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={"container-fluid " + Styles.container}>
        <GiHamburgerMenu className="d-flex align-items-center"
          style={{ color: "#e6f0ff" }}
        />
        <div className={Styles.imageContainer} style={{ backgroundImage: `url(${backGround})` }}/>
        <h1 style={{color:"red"}}>wefrgvdfgrtfg</h1>
      </div> */}

      <div className={"p-5 text-center bg-image " + Styles.image} style={{ backgroundImage: `url(${backGround})`, height: 400 }}>
        <div className="">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-white">
              <h1 className={"mb-3 display-3 " + Styles.labels}>Planifica <span style={{color: "#fc5c65"}}>rutas</span> <IoLocationSharp style={{ color: "#e6f0ff" }}/></h1> 
              <h1 className={"mb-3 display-3 " + Styles.labels} style={{color: "#fc5c65"}}>rápido y sencillo</h1>
              <h5 className={"mb-3 " + Styles.labels}>
                Podrás crear rutas óptimas, hacer seguimiento en tiempo real,
                darle visibilidad a tus clientes sobre tus tiempos de llegada y más...
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-light"> Crear una cuenta </button>
                  <h2> o bien</h2>
                <button className="btn btn-light"> Inicia sesión </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* footer */}
      </div>
    </>
  )
}

export default VistaPrincipal 