import React from 'react';
import * as Styles from '../vistaPrincipal/vistaPrincipal.module.css';
import { GiHamburgerMenu, BsInfoCircleFill, FaHome, BsFillPersonFill, IoLocationSharp, FaWhatsapp, FaTelegramPlane, FiMail, FaFacebookF, AiOutlineTwitter, FaInstagram, RiCopyrightLine, FaLinkedinIn, FaMagento } from 'react-icons/all';
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
              <a className={Styles.navLabels + " nav-link active"}
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

      <div className={"p-5 text-center bg-image " + Styles.image} style={{ backgroundImage: `url(${backGround})`, height: 770 }}>
        <div>
          <div className={"container-fluid "}>
            <GiHamburgerMenu className="d-flex align-items-center"
              style={{ color: "#e6f0ff" }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-white">
              <h1 className="mb-3 display-3">Planifica <span style={{ color: "#fc5c65" }}>rutas</span> <IoLocationSharp style={{ color: "pink" }} /></h1>
              <h1 className="mb-3 display-3" style={{ color: "#fc5c65" }}>rápido y sencillo</h1>
              <h5 className="mb-3 mw-50">
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

      <div className={Styles.container}>
        <span className={Styles.labelsFooter}> Contactanos: </span>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <FaTelegramPlane style={{ color: "#e6f0ff" }} />
            <span className={Styles.labelsFooter}>@LogisticNetwork</span>
          </div>
          <div className="d-flex align-items-center">
            <FaWhatsapp style={{ color: "#e6f0ff" }} />
            <span className={Styles.labelsFooter}>+52 222 263 2910</span>
          </div>
          <div className="d-flex align-items-center">
            <FiMail style={{ color: "#e6f0ff" }} />
            <span className={Styles.labelsFooter}>example@mail.com</span>
          </div>

          <div style={{ marginLeft: 300}}>
            <span className={Styles.labelsFooter} style={{color: "#e6f0ff"}}> Siguenos en nuestras redes: </span>
            <div className="d-flex justify-content-center align-items-center">
              <div className={"d-flex aling-items-centert " + Styles.icons}>
                <FaFacebookF style={{ color: "#e6f0ff" }}/>
              </div>
              <div className={"d-flex aling-items-centert " + Styles.icons}>
                <AiOutlineTwitter style={{ color: "#e6f0ff" }}/>
              </div>
              <div className={"d-flex aling-items-centert " + Styles.icons}>
                <FaInstagram style={{ color: "#e6f0ff" }}/>
              </div>
              <div className={"d-flex aling-items-centert " + Styles.icons}>
                <FaLinkedinIn style={{ color: "#e6f0ff" }}/>
              </div>
              <div className={"d-flex align-items-center"} style={{marginLeft: 90}}>
                <RiCopyrightLine style={{ color: "#e6f0ff" }}/>
                <span className={Styles.labelsFooter}>Copyrigth Arturo Escobar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VistaPrincipal 