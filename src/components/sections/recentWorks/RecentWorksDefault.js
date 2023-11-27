import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("ui")}`}
            onClick={handleFilterKeyChange("ui")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="ui" />
              UI
            </label>
          </div>
          {/* <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div> */}
          {/* <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("music")}`}
            onClick={handleFilterKeyChange("music")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="music" />
              Music
            </label>
          </div> */}
          <div className={`f_btn ${activeBtn("design")}`} onClick={handleFilterKeyChange("design")}>
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Design
            </label>
          </div>
          <div className={`f_btn ${activeBtn("web")}`} onClick={handleFilterKeyChange("web")}>
            <label>
              <input type="radio" name="fl_radio" defaultValue="web" />
              Web
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">

          {/* BUILD A BIKE */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item web border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img src="images/works/Build a Bike Product Images.jpg" alt="Build a Bike" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/Build a Bike Product Images.jpg" alt="Build a Bike" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Web Design</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            Build a Bike was a concept that was created by myself during COVID to offer an online service that involved
                            building of custom made bicycles.
                          </p>
                          <blockquote>
                            I believe that the website was a success in terms of the design and the user experience, but the lack of interest in the service and was eventually decommissioned.
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-2" className="name has-popup-media">
                  Website
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          {/* ONE DAY BARGAIN */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item web border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/onedaybargain.png" alt="One Day Bargain" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/onedaybargain.png" alt="One Day Bargain" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>One Day Bargain Store</h1>
                        <div className="blog-detail">Design/E-Commerce</div>
                        <div className="blog-content">
                          <p>
                            Another project that was launched by myself during COVID, which offered daily deals on a variety of products. The main idea was to offer a range of products at a discounted price for a limited time.
                          </p>
                          <p>
                            The artwork, layout and design of the website was created by myself, and the website was built using WordPress with WooCommerce.
                          </p>
                          <p>
                            Due to other commitments and the amount of time required to run the website, the website was eventually decommissioned.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  One Day Bargain Store
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          {/* ULTRA BIKE */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item web border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/Facebook - ULTRA BIKE.jpg" alt="ULTRA BIKE" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/ultrabike-website.png" alt="ULTRA BIKE" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>ULTRA BIKE</h1>
                        <div className="blog-detail">Design/E-Commerce/Branding</div>
                        <div className="blog-content">
                          <p>
                            COVID was definately a period where I made many attempts to launch a successful side-hustle, but unfortunately, due to the lack of funds and interest, many ventures failed and ULTRA BIKE is no different.
                          </p>
                          <div className="content quote">
                            {/* title */}
                            <div className="title">
                              <span>Quote</span>
                            </div>
                            {/* content */}
                            <div className="row">
                              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="revs-item">
                                  <div className="text">
                                    <div>
                                      Your failures only make you stronger. Never give up. Don't let life's failures discourage from living your best life.
                                    </div>
                                  </div>
                                  <div className="user">
                                    <div className="img">
                                      <img src="images/avatar.png" alt="Edward Whitehead" />
                                    </div>
                                    <div className="info">
                                      <div className="name">Edward Whitehead</div>
                                      <div className="company">Developer, Father, Husband.</div>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                          <p>
                            ULTRA BIKE was a bike brand that I launched, in the hope that it would one day lead to me being able to have my own range of bikes. The brand was created with the intention of being a high-end, luxury brand, with a focus on quality and design.
                          </p>
                          <p>
                            As a rider, this would have been the ultimate acheivement, but sadly, I had to face the reality that I would never be able to afford to launch a brand of my own, and so ULTRA BIKE was eventually decommissioned.
                          </p>
                          <a href="https://www.facebook.com/weareultrabike" className="button" target={"_blank"}>
                            <span className="text">View Facebook Page</span>
                            <span className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                  <a href="#popup-1" className="name has-popup-media">
                    ULTRA BIKE
                  </a>
                  <div className="category">Content</div>
                </div>
            </div>
          </div>

          {/* NOUVEAU */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-2" className="has-popup-media">
                  <img src="images/works/nouveau.png" alt="NOUVEAU" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/nouveau.png" alt="NOUVEAU" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Menu Design/Social Media</h1>
                        <div className="blog-detail">Design</div>
                        <div className="blog-content">
                          <p>
                            During my sabattaical, I ventured into various fields of entertainment, one of which was opening a restaurant called Nouveau with my partner at the time.
                          </p>
                          <p>
                            Given I was more the tech guy and had the skills for design, I created our first menu and all relevant social media posts.
                          </p>
                          <p>
                            The restaurant was unfortunately closed a month after it was opened, due to the previous owner failing to disclose information about the restaurant's location and problems it had with the local council.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/profile/100009274319076/search/?q=nouveau" className="button" target={"_blank"}>
                          <span className="text">View Some Only Works</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-2" className="name has-popup-media">
                  Menu Design/Social Media
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          {/* COMIC CON AFRICA */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/Comic Con.png" alt="COMIC CON AFRICA" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/Comic Con.png" alt="COMIC CON AFRICA" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Food Truck Fridays Village - Comic Con Africa</h1>
                        <div className="blog-detail">Event Management/Design/Social Media</div>
                        <div className="blog-content">
                          <p>
                            During my sabattaical, I played the field in terms of industries and event management happened to be one of them. 
                          </p>
                          <p>
                            I was commissioned to manage all the food and drinks for the first even Comic Con Africa event back in 2018.
                            
                            The event also happened to be the biggest gathering of Food Trucks under my Food Truck Fridays event brand, with over 50 food trucks serving around 50,000 patrons, over a three day period.

                            I also setup all the beverage tents, and managed all the beverage vendors, as well as the beverage sales.

                            As part of the process, I also secured sponsorship for the event, but more specifically for the Food Truck Village and beverage tents and ensure ample seating throughout the various areas under my control.
                          </p>
                          <p>
                            To create awareness for my Food Truck Fridays event brand, I created a separate event called Food Truck Fridays Village.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/events/1472288546233950/?active_tab=discussion" className="button" target={"_blank"}>
                          <span className="text">View Facebook Event</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Event Management/Design/Social Media
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          {/* FOOD TRUCK FRIDAYS */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/foodtruckfridays.png" alt="Food Truck Fridays" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/foodtruckfridays1.jpg" alt="Food Truck Fridays" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>Food Truck Fridays</h1>
                        <div className="blog-detail">Event Management/Design/Social Media</div>
                        <div className="blog-content">
                          <p>
                            Food Truck Fridays was an event I created as a branding exexercise, to bring awareness to my company I owned at the time called We Heart Events (Previously Amped Events).
                          </p>
                          <p>
                            It proved to be so popular that I eventually had the event once a month at various locations around Johannesburg. The event eventually ended due to weather conditions and lack of funds.
                          </p>
                          <p>
                            I hosted a number of events prior to going solo during my sabattaical and I absolutely loved the action and excitement that surrounds the event industry.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/welovefoodtruckfridays" className="button" target={"_blank"}>
                          <span className="text">Facebook Page</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  Event Management/Design/Social Media
                </a>
                <div className="category">Content</div>
              </div>
            </div>
          </div>

          {/* PAYBEE */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item ui border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/paybee.png" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/paybee-mixed.png" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>PayBeeᵀᴹ</h1>
                        <div className="blog-detail">UI/Full-Stack Development</div>
                        <div className="blog-content">
                          <p>
                            In 2020, while travelling the world, I visited a country called Georgia. During my stay, I noticed that waitering staff did not get their tips, in-fact the establishments they worked at got the tips. I thought to myself, there must be a way to solve this problem, because back in South Africa, when you tipped someone, they got their money.
                          </p>
                          <p>
                            It took a while to come up with a suitable concept that would work in any country, but eventually I came up with the idea of PayBeeᵀᴹ. 
                          </p>
                          <p>
                            PayBeeᵀᴹ is a mobile application that allows patrons to tip waitering staff directly, without the need for a waiter to be present. This was the original concept. However, this has now evolved into a more diverse application that will cater for all industries, not just the hospitality industry.
                          </p>
                          <p>
                            The application is currently in development and will require a considerable amount of work, because the idea is to also include payment processing using cryptocurrencies, as well as traditional payment methods.
                          </p>
                        </div>
                        <a href="https://paymentbee.net/" className="button" target={"_blank"}>
                          <span className="text">Website</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-1" className="name has-popup-media">
                  UI/Full-Stack Development
                </a>
                <div className="category">UI/Development</div>
              </div>
            </div>
          </div>

          {/* work item photo (UI) */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/Build a Bike Product Images.jpg" className="has-popup-image">
                  <img src="images/works/Build a Bike Product Images.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/Build a Bike Product Images.jpg"
                  className="name has-popup-media"
                >
                  Buuild a Bike
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div> */}

          {/* work item video */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="name has-popup-video"
                >
                  NUDE Branding Mockup
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div> */}

          {/* work item music */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work3.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-music-note" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup">
                  Art Poster Mockup
                </a>
                <div className="category">Music</div>
              </div>
            </div>
          </div> */}         

          {/* work item photo */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery img-gallery">
                  <img src="images/works/work5.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                  <div id="gallery-1" className="mfp-hide">
                    <a href="images/works/work5.jpg" />
                    <a href="images/works/work1.jpg" />
                    <a href="images/works/work6.jpg" />
                  </div>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup-image">
                  RETR Style
                </a>
                <div className="category">Gallery</div>
              </div>
            </div>
          </div> */}

          {/* work item music */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work7.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-music-note" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name has-popup">
                  OYYI Mobile App
                </a>
                <div className="category">Music</div>
              </div>
            </div>
          </div> */}

          {/* work item video */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="has-popup-video"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://www.youtube.com/embed/mkjwxmcdb0E"
                  className="name has-popup-video"
                >
                  Infinity Logo
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div> */}         

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
