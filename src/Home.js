import React from 'react'

function Home() {
  return (
    <div>
  

  <body className="bg-theme bg-theme1">
 

 <div id="wrapper">
 
 
  


<div className="clearfix"></div>
	
  <div className="content-wrapper">
    <div className="container-fluid">

 

	<div className="card mt-3">
    <div className="card-content">
  <div className="row row-group m-0">
    <div className="col-12 col-lg-6 col-xl-3 border-light">
      <div className="card-body">
        <h5 className="text-white mb-0">
          9526 <span className="float-right"><i className="fa fa-shopping-cart"></i></span>
        </h5>
        <div className="progress my-3" style={{ height: '3px' }}>
          <div className="progress-bar" style={{ width: '55%' }}></div>
        </div>
        <p className="mb-0 text-white small-font">
          Total Orders <span className="float-right">+4.2% <i className="zmdi zmdi-long-arrow-up"></i></span>
        </p>
      </div>
    </div>
    <div className="col-12 col-lg-6 col-xl-3 border-light">
      <div className="card-body">
        <h5 className="text-white mb-0">
          8323 <span className="float-right"><i className="fa fa-usd"></i></span>
        </h5>
        <div className="progress my-3" style={{ height: '3px' }}>
          <div className="progress-bar" style={{ width: '55%' }}></div>
        </div>
        <p className="mb-0 text-white small-font">
          Total Revenue <span className="float-right">+1.2% <i className="zmdi zmdi-long-arrow-up"></i></span>
        </p>
      </div>
    </div>
    <div className="col-12 col-lg-6 col-xl-3 border-light">
      <div className="card-body">
        <h5 className="text-white mb-0">
          6200 <span className="float-right"><i className="fa fa-eye"></i></span>
        </h5>
        <div className="progress my-3" style={{ height: '3px' }}>
          <div className="progress-bar" style={{ width: '55%' }}></div>
        </div>
        <p className="mb-0 text-white small-font">
          Visitors <span className="float-right">+5.2% <i className="zmdi zmdi-long-arrow-up"></i></span>
        </p>
      </div>
    </div>
    <div className="col-12 col-lg-6 col-xl-3 border-light">
      <div className="card-body">
        <h5 className="text-white mb-0">
          5630 <span className="float-right"><i className="fa fa-envira"></i></span>
        </h5>
        <div className="progress my-3" style={{ height: '3px' }}>
          <div className="progress-bar" style={{ width: '55%' }}></div>
        </div>
        <p className="mb-0 text-white small-font">
          Messages <span className="float-right">+2.2% <i className="zmdi zmdi-long-arrow-up"></i></span>
        </p>
      </div>
    </div>
  </div>
</div>

 </div>  
	  
	<div className="row">
     <div className="col-12 col-lg-8 col-xl-8">
	    <div className="card">
		 <div className="card-header">Site Traffic
		   <div className="card-action">
			 <div className="dropdown">
			 <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
			  <i className="icon-options"></i>
			 </a>
				<div className="dropdown-menu dropdown-menu-right">
				<a className="dropdown-item" href="javascript:void();">Action</a>
				<a className="dropdown-item" href="javascript:void();">Another action</a>
				<a className="dropdown-item" href="javascript:void();">Something else here</a>
				<div className="dropdown-divider"></div>
				<a className="dropdown-item" href="javascript:void();">Separated link</a>
			   </div>
			  </div>
		   </div>
		 </div>
		 <div className="card-body">
		    <ul className="list-inline">
			  <li className="list-inline-item"><i className="fa fa-circle mr-2 text-white"></i>New Visitor</li>
			  <li className="list-inline-item"><i className="fa fa-circle mr-2 text-light"></i>Old Visitor</li>
			</ul>
			<div className="chart-container-1">
			  <canvas id="chart1"></canvas>
			</div>
		 </div>
		 
		 <div className="row m-0 row-group text-center border-top border-light-3">
		   <div className="col-12 col-lg-4">
		     <div className="p-3">
		       <h5 className="mb-0">45.87M</h5>
			   <small className="mb-0">Overall Visitor <span> <i className="fa fa-arrow-up"></i> 2.43%</span></small>
		     </div>
		   </div>
		   <div className="col-12 col-lg-4">
		     <div className="p-3">
		       <h5 className="mb-0">15:48</h5>
			   <small className="mb-0">Visitor Duration <span> <i className="fa fa-arrow-up"></i> 12.65%</span></small>
		     </div>
		   </div>
		   <div className="col-12 col-lg-4">
		     <div className="p-3">
		       <h5 className="mb-0">245.65</h5>
			   <small className="mb-0">Pages/Visit <span> <i className="fa fa-arrow-up"></i> 5.62%</span></small>
		     </div>
		   </div>
		 </div>
		 
		</div>
	 </div>

     <div className="col-12 col-lg-4 col-xl-4">
        <div className="card">
           <div className="card-header">Weekly sales
             <div className="card-action">
             <div className="dropdown">
             <a href="javascript:void();" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
              <i className="icon-options"></i>
             </a>
              <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="javascript:void();">Action</a>
              <a className="dropdown-item" href="javascript:void();">Another action</a>
              <a className="dropdown-item" href="javascript:void();">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="javascript:void();">Separated link</a>
               </div>
              </div>
             </div>
           </div>
           <div className="card-body">
		     <div className="chart-container-2">
               <canvas id="chart2"></canvas>
			  </div>
           </div>
           <div className="table-responsive">
             <table className="table align-items-center">
               <tbody>
                 <tr>
                   <td><i className="fa fa-circle text-white mr-2"></i> Direct</td>
                   <td>$5856</td>
                   <td>+55%</td>
                 </tr>
                 <tr>
                   <td><i className="fa fa-circle text-light-1 mr-2"></i>Affiliate</td>
                   <td>$2602</td>
                   <td>+25%</td>
                 </tr>
                 <tr>
                   <td><i className="fa fa-circle text-light-2 mr-2"></i>E-mail</td>
                   <td>$1802</td>
                   <td>+15%</td>
                 </tr>
                 <tr>
                   <td><i className="fa fa-circle text-light-3 mr-2"></i>Other</td>
                   <td>$1105</td>
                   <td>+5%</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
     </div>
	</div>
	
	<div className="row">
      <div className="col-12 col-lg-12">
        <div className="card">
          <div className="card-header">
            Recent Order Tables
            <div className="card-action">
              <div className="dropdown">
                <a
                  href="#!"
                  className="dropdown-toggle dropdown-toggle-nocaret"
                  data-toggle="dropdown"
                >
                  <i className="icon-options"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-items-center table-flush table-borderless">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Photo</th>
                  <th>Product ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Shipping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Iphone 5</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/110x110"
                      className="product-img"
                      alt="product img"
                    />
                  </td>
                  <td>#9405822</td>
                  <td>$ 1250.00</td>
                  <td>03 Aug 2017</td>
                  <td>
                    <div className="progress shadow" style={{ height: '3px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Earphone GL</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/110x110"
                      className="product-img"
                      alt="product img"
                    />
                  </td>
                  <td>#9405820</td>
                  <td>$ 1500.00</td>
                  <td>03 Aug 2017</td>
                  <td>
                    <div className="progress shadow" style={{ height: '3px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>HD Hand Camera</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/110x110"
                      className="product-img"
                      alt="product img"
                    />
                  </td>
                  <td>#9405830</td>
                  <td>$ 1400.00</td>
                  <td>03 Aug 2017</td>
                  <td>
                    <div className="progress shadow" style={{ height: '3px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '70%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Classic Shoes</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/110x110"
                      className="product-img"
                      alt="product img"
                    />
                  </td>
                  <td>#9405825</td>
                  <td>$ 1200.00</td>
                  <td>03 Aug 2017</td>
                  <td>
                    <div className="progress shadow" style={{ height: '3px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Hand Watch</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/110x110"
                      className="product-img"
                      alt="product img"
                    />
                  </td>
                  <td>#9405840</td>
                  <td>$ 1800.00</td>
                  <td>03 Aug 2017</td>
                  <td>
                    <div className="progress shadow" style={{ height: '3px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '40%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
		  <div className="overlay toggle-menu"></div>	
    </div>
   
    
    </div>
    <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up"></i> </a>
   
	<footer className="footer">
      <div className="container">
        <div className="text-center">
            <a href='https://shreedigimarketing.in/'>
          Copyright © 2024 Shree Digital Marketing Agency
          </a>
        </div>
      </div>
    </footer>
	
   <div className="right-sidebar">
    <div className="switcher-icon">
      <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
    </div>
    <div className="right-sidebar-content">

      <p className="mb-0">Gaussion Texture</p>
      <hr/>
      
      <ul className="switcher">
        <li id="theme1"></li>
        <li id="theme2"></li>
        <li id="theme3"></li>
        <li id="theme4"></li>
        <li id="theme5"></li>
        <li id="theme6"></li>
      </ul>

      <p className="mb-0">Gradient Background</p>
      <hr/>
      
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
  )
}

export default Home