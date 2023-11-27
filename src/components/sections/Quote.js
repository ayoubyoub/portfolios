import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quotes</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                  Sometime you just have to take life with a pinch of salt and enjoy the moment.
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
    </Fragment>
  );
};
export default Quote;
