import { Fragment } from "react";
const bio_ = `<p>
<strong>Hello! I'm Edward Whitehead.</strong>
I am a software developer originally from South Africa.
I have been working in the industry for over 15 years and currently specialise in mobile development.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age</strong> 49
                </li>
                <li>
                  <strong>Residence</strong> Moscow, Russia
                </li>
                <li>
                  <strong>Freelance</strong> Available
                </li>
                <li>
                  <strong>Address</strong> Mowcow, Russia
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

// export const AboutMeClassic = () => {
//   return (
//     <div className="content about">
//       {/* title */}
//       <div className="title">About Me</div>
//       {/* content */}
//       <div className="row">
//         <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
//           <div className="text-box">
//             <p>
//               I am Edward Whitehead, a software developer originally from South Africa. I have been working in the industry for over 15 years and currently specialise in mobile development.
//             </p>
//           </div>
//           <div className="info-list">
//             <ul>
//               <li>
//                 <strong>Age</strong> 49
//               </li>
//               <li>
//                 <strong>Residence</strong> Moscow, Russia
//               </li>
//               <li>
//                 <strong>Freelance</strong> Available
//               </li>
//               <li>
//                 <strong>Address</strong> Mowcow, Russia
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
