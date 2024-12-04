import React from 'react';

function Testinomial() {
  return (
    <div>
      <body className="bg-theme bg-theme1">
        <div id="pageloader-overlay" className="visible incoming">
          <div className="loader-wrapper-outer">
            <div className="loader-wrapper-inner">
              <div className="loader"></div>
            </div>
          </div>
        </div>

        <div id="wrapper">
          <div className="clearfix"></div>

          <div className="content-wrapper" style={{ marginLeft: '70vh' }}>
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">Testimonial Form</div>
                      <hr />
                      <form>
                        <div className="form-group">
                          <label htmlFor="clientname">Client Name</label>
                          <input type="text" className="form-control" id="clientname" placeholder="Enter Client Name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="profession">Profession</label>
                          <input type="text" className="form-control" id="profession" placeholder="Enter Profession" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="testimonial">Testimonial</label>
                          <textarea className="form-control" id="testimonial" placeholder="Enter Testimonial" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">Upload Image</label>
                          <input type="file" className="form-control" id="image" />
                        </div>
                        
                        <div className="form-group">
                          <button type="submit" className="btn btn-light px-5">
                            <i></i>Add Testimonial
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay toggle-menu"></div>
            </div>
          </div>

          <a href="javaScript:void();" className="back-to-top">
            <i className="fa fa-angle-double-up"></i>
          </a>

          <footer className="footer">
            <div className="container">
            <a href='https://shreedigimarketing.in/'>
          Copyright © 2024 Shree Digital Marketing Agency
          </a>
            </div>
          </footer>

          <div className="right-sidebar">
            <div className="switcher-icon">
              <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
            </div>
            <div className="right-sidebar-content">
              <p className="mb-0">Gaussion Texture</p>
              <hr />
              <ul className="switcher">
                <li id="theme1"></li>
                <li id="theme2"></li>
                <li id="theme3"></li>
                <li id="theme4"></li>
                <li id="theme5"></li>
                <li id="theme6"></li>
              </ul>
              <p className="mb-0">Gradient Background</p>
              <hr />
              <ul className="switcher">
                <li id="theme7"></li>
                <li id="theme8"></li>
                <li id="theme9"></li>
                <li id="theme10"></li>
                <li id="theme11"></li>
                <li id="theme12"></li>
                <li id="theme13"></li>
                <li id="theme14"></li>
                <li id="theme15"></li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Testinomial;
