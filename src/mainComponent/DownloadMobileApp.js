import React from 'react';
import AppQR from "../assets/images/AppQr-Img.png";
import Phone from "../assets/images/Phones.png";
import AppStore from "../assets/images/AppStore-Btn.png";
import PlayStore from "../assets/images/PlayStore-Btn.png";
import { Link } from 'react-router-dom';


const DownloadMobileApp = () => {
  return (
    <>
    <section className='HomeApp-DownloadSec'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="HomeApp-DownloadCard">
                <h4 className="HomeApp-DownloadTitle">Do more with the app!</h4>
                <p className="HomeApp-DownloadDiscription">
                  Download the Rapidmate mobile app and fulfill your delivery
                  needs anywhere any time..
                </p>
                <div className="HomeApp-DownloadQrMainCard">
                  <img
                    className="HomeApp-DownloadQrImage"
                    src={AppQR}
                    alt="QR"
                  />
                  <p className="HomeApp-DownloadTextFrench">
                    Télécharger gratuitement
                  </p>
                  <div className="HomeApp-DownloadImgBtns">
                    <Link>
                      <img
                        className="HomeApp-DownloadAppstoreImg"
                        src={AppStore}
                        alt="AppStore"
                      />
                    </Link>
                    <Link>
                      <img
                        className="HomeApp-DownloadAppstoreImg"
                        src={PlayStore}
                        alt="AppStore"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='HomeApp-DownloadPhoneImgCard'>
                <img className='HomeApp-DownloadPhoneImg' src={Phone} alt="img"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadMobileApp