import React from "react";
import Blog1 from "../assets/images/Blog-1.png";
import Blog2 from "../assets/images/Blog-2.png";
import Blog3 from "../assets/images/Blog-3.png";
import BlogAdmin from "../assets/images/Blog-Admin.jpeg";

const HomeBlog = () => {
  return (
    <>
      <section className="HomeLatest-BlogSec">
        <div className="container">
          <div className="row">
            <div className="HomeourServices-TitleMainCard">
              <h2 className="HomeourServices-Title">Latest blogs</h2>
            </div>
            <div className="col-md-4">
              <div className="HomeLatest-BlogCard">
                <div>
                  <img
                    className="HomeLatest-BlogImages"
                    src={Blog1}
                    alt="Blog-img"
                  />
                </div>
                <button className="HomeLatest-BlogTypeText">Technology</button>
                <h4 className="HomeLatest-BlogTitle">
                  Lorem ipsum dolor sit amet consectetur. Eget viverra volutpat
                  a pellentesque.
                </h4>
                <div className="HomeLatest-BlogAdmin-Maincard">
                  <div className="HomeLatest-BlogAdminInfoCard">
                    <img
                      className="HomeLatest-BlogAdminImg"
                      src={BlogAdmin}
                      alt="admin"
                    />
                    <p className="HomeLatest-BlogAdminName">Tracey Wilson</p>
                  </div>
                  <p className="HomeLatest-BlogAdminName">August 20, 2022</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="HomeLatest-BlogCard">
                <div>
                  <img
                    className="HomeLatest-BlogImages"
                    src={Blog2}
                    alt="Blog-img"
                  />
                </div>
                <button className="HomeLatest-BlogTypeText">Technology</button>
                <h4 className="HomeLatest-BlogTitle">
                  Lorem ipsum dolor sit amet consectetur. Eget viverra volutpat
                  a pellentesque.
                </h4>
                <div className="HomeLatest-BlogAdmin-Maincard">
                  <div className="HomeLatest-BlogAdminInfoCard">
                    <img
                      className="HomeLatest-BlogAdminImg"
                      src={BlogAdmin}
                      alt="admin"
                    />
                    <p className="HomeLatest-BlogAdminName">Tracey Wilson</p>
                  </div>
                  <p className="HomeLatest-BlogAdminName">August 20, 2022</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="HomeLatest-BlogCard">
                <div>
                  <img
                    className="HomeLatest-BlogImages"
                    src={Blog3}
                    alt="Blog-img"
                  />
                </div>
                <button className="HomeLatest-BlogTypeText">Technology</button>
                <h4 className="HomeLatest-BlogTitle">
                  Lorem ipsum dolor sit amet consectetur. Eget viverra volutpat
                  a pellentesque.
                </h4>
                <div className="HomeLatest-BlogAdmin-Maincard">
                  <div className="HomeLatest-BlogAdminInfoCard">
                    <img
                      className="HomeLatest-BlogAdminImg"
                      src={BlogAdmin}
                      alt="admin"
                    />
                    <p className="HomeLatest-BlogAdminName">Tracey Wilson</p>
                  </div>
                  <p className="HomeLatest-BlogAdminName">August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlog;
