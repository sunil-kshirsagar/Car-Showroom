import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Car from './Car'
import { initialCars } from '../cars';
import { additionalCars } from '../cars';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: initialCars
    };
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this);
  }

  loadAdditionalCars() {
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, additionalCars);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div className="App">
        <div className=""></div>
        <Header text="CarShowroom" />
        <h3 className="App-intro">
          Vehicle Quick Info
        </h3>
        <div className="cars">
          {
            Object
              .keys(this.state.cars)
              .map(key => <Car key={key} meta={this.state.cars[key]} />)
          }
        </div>
        <div className="add-cars"><button onClick={this.loadAdditionalCars} className="btn btn-primary">Load more...</button></div>
        
        <div className="container card bg-info text-white">
          <h2 class="fontsH">About Us</h2>
          <p class="fontsP">
          Welcome to car showroom, your number one source for all things. We're dedicated to giving you the 
          very best of [product], with a focus on [store characteristic 1], [store characteristic 2], [store characteristic 3].
          Founded in [year] by [founder name], car showroom has come a long way from its beginnings in [starting location]. 
          When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] 
          drove them to quit day job, so that car showroom can offer you [competitive differentiator].
          We now serve customers all over the world, and are thrilled that we're able to turn our passion into 
          our own website.<br/><br/>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          <br/><br/>
          Sincerely,<br/>
          [founder name]
          </p>
        </div><br/><br/>

        <div className="container card bg-info text-white">
          <h2 class="fontsH">Our History</h2>
          <p class="fontsP">
          If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at example@gmail.com. Our Disclaimer was generated with the help of the Disclaimer Generator.
          All the information on this website - www.carshowroom.com - is published in good faith and for general information purpose only. carshowroom does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (carshowroom), is strictly at your own risk. carshowroom will not be liable for any losses and/or damages in connection with the use of our website.
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
          Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
          </p>
        </div><br/><br/>
        
        <div className="row">
          <div id="contact" className="container card col-lg-4">
           <iframe width="auto" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Jabalpur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
           <a href='https://mapswebsite.org/' className="bg-info text-white">https://www.mapswebsite.org</a>
           <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=39cba753862aca6d26495dd3a4166cd22f2c05f6'></script>
          <h2 id="cd">Contact Details</h2>
          <p>Mobile No. : +915544988998</p>
          <p>Email : example@gmail.com</p>
          <p>Website : www.carshowroom.com</p>
          </div>

          <div id="contact" className="container card col-lg-4">
            <h2>Contact Us</h2>
            <form action="#">

              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.."/>
    
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <input type="submit" value="Submit"/>

            </form>
          </div>

        </div>
        
        <div>
          <footer class="footer-distributed">
 
            <div class="footer-left">

              <h3>Car<span>Showroom</span></h3>

              <p class="footer-links">
              <a href="#">Home</a><br/>
              <a href="#">About</a><br/>
              <a href="#">Faq</a><br/>
              <a href="#">Contact</a>
              </p>

              <p class="footer-company-name">Car Showroom &copy; 2019</p>
            </div>

            <div class="footer-center">

              <div>
                <i class="fa fa-map-marker"></i>
                <p><span>21 Wright Town, Sadar</span> Jabalpur, India</p>
              </div>

              <div>
                <i class="fa fa-phone"></i>
                <p>+91 555 123456</p>
              </div>

                <div>
                  <i class="fa fa-envelope"></i>
                  <p><a href="mailto:support@company.com">contact@carshowroom.com</a></p>
                </div>

            </div>

            <div class="footer-right">

              <p class="footer-company-about">
              <span>About the company</span>
              We offer best deals and services to our clients to maintain a good customer relationship.
              </p>

              <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

              </div>

            </div>

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
