import React from 'react';

function Profile() {
  return (
    <div className="bg-theme bg-theme1">
      <div id="pageloader-overlay" className="visible incoming">
        <div className="loader-wrapper-outer">
          <div className="loader-wrapper-inner">
            <div className="loader"></div>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="content-wrapper">
        <div className="container-fluid">

          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="card profile-card-2">
                <div className="card-img-block">
                  <img className="img-fluid" src="https://via.placeholder.com/800x500" alt="Card image cap" />
                </div>
                <div className="card-body pt-5">
                  <img src="https://via.placeholder.com/110x110" alt="profile-image" className="profile" />
                  <h5 className="card-title">Mark Stern</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="icon-block">
                    <a href="javascript:void();"><i className="fa fa-facebook bg-facebook text-white"></i></a>
                    <a href="javascript:void();"><i className="fa fa-twitter bg-twitter text-white"></i></a>
                    <a href="javascript:void();"><i className="fa fa-google-plus bg-google-plus text-white"></i></a>
                  </div>
                </div>

                <div className="card-body border-top border-light">
                  <div className="media align-items-center">
                    <div>
                      <img src="images/timeline/html5.svg" className="skill-img" alt="skill img" />
                    </div>
                    <div className="media-body text-left ml-3">
                      <div className="progress-wrapper">
                        <p>HTML5 <span className="float-right">65%</span></p>
                        <div className="progress" style={{ height: '5px' }}>
                          <div className="progress-bar" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="media align-items-center">
                    <div>
                      <img src="images/timeline/bootstrap-4.svg" className="skill-img" alt="skill img" />
                    </div>
                    <div className="media-body text-left ml-3">
                      <div className="progress-wrapper">
                        <p>Bootstrap 4 <span className="float-right">50%</span></p>
                        <div className="progress" style={{ height: '5px' }}>
                          <div className="progress-bar" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="media align-items-center">
                    <div>
                      <img src="images/timeline/angular-icon.svg" className="skill-img" alt="skill img" />
                    </div>
                    <div className="media-body text-left ml-3">
                      <div className="progress-wrapper">
                        <p>AngularJS <span className="float-right">70%</span></p>
                        <div className="progress" style={{ height: '5px' }}>
                          <div className="progress-bar" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="media align-items-center">
                    <div>
                      <img src="images/timeline/react.svg" className="skill-img" alt="skill img" />
                    </div>
                    <div className="media-body text-left ml-3">
                      <div className="progress-wrapper">
                        <p>React JS <span className="float-right">35%</span></p>
                        <div className="progress" style={{ height: '5px' }}>
                          <div className="progress-bar" style={{ width: '35%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                    <li className="nav-item">
                      <a href="javascript:void();" data-target="#profile" data-toggle="pill" className="nav-link active">
                        <i className="icon-user"></i> <span className="hidden-xs">Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void();" data-target="#messages" data-toggle="pill" className="nav-link">
                        <i className="icon-envelope-open"></i> <span className="hidden-xs">Messages</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void();" data-target="#edit" data-toggle="pill" className="nav-link">
                        <i className="icon-note"></i> <span className="hidden-xs">Edit</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content p-3">
                    <div className="tab-pane active" id="profile">
                      <h5 className="mb-3">User Profile</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>About</h6>
                          <p>Web Designer, UI/UX Engineer</p>
                          <h6>Hobbies</h6>
                          <p>Indie music, skiing and hiking. I love the great outdoors.</p>
                        </div>
                        <div className="col-md-6">
                          <h6>Recent badges</h6>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">html5</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">react</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">codeply</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">angularjs</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">css3</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">jquery</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">bootstrap</a>
                          <a href="javascript:void();" className="badge badge-dark badge-pill">responsive-design</a>
                          <hr />
                          <span className="badge badge-primary"><i className="fa fa-user"></i> 900 Followers</span>
                          <span className="badge badge-success"><i className="fa fa-cog"></i> 43 Forks</span>
                          <span className="badge badge-danger"><i className="fa fa-eye"></i> 245 Views</span>
                        </div>
                        <div className="col-md-12">
                          <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                          <div className="table-responsive">
                            <table className="table table-hover table-striped">
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>Robert</strong> joined the <strong>`Prototype-Express`</strong> project
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="messages">
                      <h5>Messages</h5>
                      {/* Messages Content */}
                    </div>
                    <div className="tab-pane" id="edit">
                      <h5>Edit Profile</h5>
                      {/* Edit Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
