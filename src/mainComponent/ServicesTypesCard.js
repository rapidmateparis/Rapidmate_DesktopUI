import React from "react";
import Resturent from "../assets/images/Restaurants-Icon.png";
import Grocery from "../assets/images/Grocery-Icon.png";
import Meds from "../assets/images/PharmacyMeds-Icon.png";
import Gifts from "../assets/images/Gifts-Icon.png";
import Commerce from "../assets/images/E-commerce-Icon.png";

const ServicesTypesCard = () => {
  return (
    <>
      <section className="homeCompanies-sec">
        <div className="row manageRow">
          <div className="col-md-2 offset-md-1">
            <div className="homer-cards-Imagesbg">
              <div className="homer-cards-Images">
                <img
                  className="homeResturent-CardImg"
                  src={Resturent}
                  alt="Resturent"
                />
              </div>
              <p className="homeResturent-CardsText">Restaurants</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="homer-cards-ImageswithoutBg">
              <div className="homer-cards-Images">
                <img
                  className="homeGrocery-CardImg"
                  src={Grocery}
                  alt="Grocery"
                />
              </div>
              <p className="homeResturent-CardsText">Grocery</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="homer-cards-Imagesbg">
              <div className="homer-cards-Images">
                <img className="homeResturent-CardImg" src={Meds} alt="Meds" />
              </div>
              <p className="homeResturent-CardsText">Pharmacy & Meds</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="homer-cards-ImageswithoutBg">
              <div className="homer-cards-Images">
                <img className="homeGrocery-CardImg" src={Gifts} alt="Gifts" />
              </div>
              <p className="homeResturent-CardsText">Gifts</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="homer-cards-Imagesbg">
              <div className="homer-cards-Images">
                <img
                  className="homeResturent-CardImg"
                  src={Commerce}
                  alt="Commerce"
                />
              </div>
              <p className="homeResturent-CardsText">E-commerce</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTypesCard;
