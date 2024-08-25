import React from "react";

const CompanyAchivments = () => {
  return (
    <>
      <section className="homeCompanies-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="homeCompany-PartnerCounts-MainCard">
                <h4 className="homeCompany-PartnerCounts">5000+</h4>
                <p className="homeCompany-PartnerCountsText">
                  Companies trust us
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="homeCompany-PartnerCounts-MainCard">
                <h4 className="homeCompany-PartnerCounts">96.4%</h4>
                <p className="homeCompany-PartnerCountsText">
                  Successful deliveries
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="homeCompany-PartnerCounts-MainCard">
                <h4 className="homeCompany-PartnerCounts">24/7</h4>
                <p className="homeCompany-PartnerCountsText">Availability</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="homeCompany-PartnerCounts-MainCard">
                <h4 className="homeCompany-PartnerCounts">15 min</h4>
                <p className="homeCompany-PartnerCountsText">
                  Average delivery time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAchivments;
