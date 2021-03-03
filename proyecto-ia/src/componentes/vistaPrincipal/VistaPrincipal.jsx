import React from 'react';
import * as Styles from '../vistaPrincipal/vistaPrincipal.module.css';
import { BsInfoCircleFill, FaHome, BsFillPersonFill } from 'react-icons/all';
import logo from '../../assets/images/logo.png';

const VistaPrincipal = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className="row" style={{height: 70}}>
          <div className="col-8 d-flex align-items-center">
            <div className={Styles.imageContainer} style={{ backgroundImage: `url(${logo})` }}/>
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
              <a className={"nav-link active " + Styles.navLabels}
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

      
    </>
  )
}

export default VistaPrincipal 