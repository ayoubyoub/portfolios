import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">December 2021 - Present</div>
                <div className="name">Software Developer</div>
                <div className="company">SmartTask (UK)</div>
                <p>Initially contracted for the company for approximately twelve months.</p><br />
                <p>Did an in-depth review of their Xamarin Forms application before beginning with the process of upgrading
                  the solution to the latest Xamarin platform and ensuring the ability to target the latest operating system
                  versions for Android and iOS.</p><br />
                <p>Successfully upgraded the solution and now resolving issues and performing additional enhancements
                  to the application and solution.</p><br />
                <strong>Noteworthy Achievements:</strong>
                <p>Successfully upgraded the company's mobile solution that allowed the company to target the latest platform version
                  for Android and iOS, given they could no longer release any further versions to the stores as result
                  of a redundant solution.</p><br />
                <p>Successfully migrated the company's mobile solution from Xamarin Forms to .Net MAUI, that included a new UI design by myself.</p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">May 2021 - December 2021</div>
                <div className="name">Software Developer</div>
                <div className="company">Thinkology (UK)</div>
                <p>Took over the implementation of a mobile application that was to be used in the beauty industry by IIAA.
                  The end goal of the application was to capture client details after which, the clients would have headshot
                  photos of themselves processed to eventually provide recommendations about what beauty products to use.</p><br />
                <p>Development efforts included implementation of NFC, refactoring code to follow the MVVM pattern and fix the complex
                  problems that were already in place. The refactoring of the code also saw notable improvements in the user interface,
                  that were constantly delayed or causing the application to hang and crash on a regular basis.</p><br />
              </div>
              <div className="resume-item">
                <div className="date">March 2021 - April 2022</div>
                <div className="name">Senior Software Developer</div>
                <div className="company">AZ Consulting (SA)</div>
                <p>Senior software developer where I performed architectural reviews as a subject matter expert.</p><br />
                <p>Performed solution upgrades in Xamarin for clients in the United Kingdom and South Africa.</p><br />
                <p>Conducted technical interviews to ensure the correct fit for client’s requirements.</p><br />
                <p>Primary focus was mobile using Xamarin.</p>
              </div>
              <br />
              <div className="lnks">
                <a target="_blank" rel="noreferrer" href="resume/Edward Whitehead - Professional Resume.pdf" className="lnk">
                  <span className="text">Download CV for more.</span>
                  <span class="ion ion-ios-cloud-download"></span>
                </a>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">1993</div>
                <div className="name">Johannesburg Technical College</div>
                <div className="company">Johannesburg, South Africa</div>
                <p>
                  {`N3`} Certificate (High School)
                </p>
                <p>
                  Mathematics, Technical Drawing, Theory, Science
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2016</div>
                <div className="name">Signa</div>
                <div className="company">Johannesburg, South Africa</div>
                <p>{`N4`} General Management (FedEx)</p>
              </div>
              <div className="resume-item">
                <div className="date">2020</div>
                <div className="name">Flutter &amp; Dart</div>
                <div className="company">Udemy</div>
                <a target="_blank" rel="noreferrer" href="certificates/UC-6446df03-2cf3-4ae8-9c86-c535f068bbd7.pdf" className="lnk">
                  <span className="text">View Certificate</span>
                  <span class="ion ion-ios-eye"></span>
                </a>
                <p>
                  Flutter & Dart – The Complete Guide
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2021</div>
                <div className="name">Qt 6 Core Beginners with C++</div>
                <div className="company">Udemy</div>
                <a target="_blank" rel="noreferrer" href="certificates/UC-c6bd95d1-f06f-4eff-bf52-d58c31a928dc.pdf" className="lnk">
                  <span className="text">View Certificate</span>
                  <span class="ion ion-ios-eye"></span>
                </a>
              </div>
              <div className="resume-item">
                <div className="date">2022</div>
                <div className="name">Ethereum Blockchain Developer Bootcamp With Solidity</div>
                <div className="company">Udemy</div>
                <a target="_blank" rel="noreferrer" href="certificates/UC-e1609f6e-40ed-4123-850f-14890bb7e1a4.pdf" className="lnk">
                  <span className="text">View Certificate</span>
                  <span class="ion ion-ios-eye"></span>
                </a>
                <p>
                  Ethereum Blockchain Developer Bootcamp With Solidity
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2022</div>
                <div className="name">Complete C# Masterclass</div>
                <div className="company">Udemy</div>
                <a target="_blank" rel="noreferrer" href="certificates/UC-efc3f9de-9c0f-4bb3-b539-07db781dd00c.pdf" className="lnk">
                  <span className="text">View Certificate</span>
                  <span class="ion ion-ios-eye"></span>
                </a>
                <p>
                  Ethereum Blockchain Developer Bootcamp With Solidity
                </p>
              </div>
              <strong>Future Education</strong>
              <p>Progressively upgrading my skills in the Blockchain and web3 space.</p>
              <br/>
              <p>Please scroll down for more.</p>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

// export const ResumeSectionFitness = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">
//         <div className="first-letter">Resume</div>
//       </div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Fitness Trainer</div>
//               <div className="company">Gym Club</div>
//               <p>
//                 Inspired clients to push their hardest and do their very best.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Cardio Trainer</div>
//               <div className="company">High-Intensity Complex</div>
//               <p>
//                 Dynamic sculpting exercises for the perfect balance of cardio
//                 and strength training.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Pace University</div>
//               <div className="company">New York</div>
//               <p>
//                 Pace University is a private university with its main campus in
//                 New York City.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Fitness Course</div>
//               <div className="company">London</div>
//               <p>Personal trainer and fitness instructor courses in London.</p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionLawyer = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Law Director</div>
//               <div className="company">Facebook Inc.</div>
//               <p>
//                 Head of the Law Department which represents and advises the City
//                 in all civil.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Lawyer Leader</div>
//               <div className="company">Google Inc.</div>
//               <p>
//                 Was part of a client focused organisation that makes a
//                 difference.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Junior Lawyer</div>
//               <div className="company">ABC Inc.</div>
//               <p>
//                 A fast-growing international pharmaceutical services company.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Law University</div>
//               <div className="company">London</div>
//               <p>
//                 {`Gray's`} Inn, 4 {`Gray's`} Inn Place, Warwick Ct
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Law Schools</div>
//               <div className="company">London</div>
//               <p>
//                 The Law School of English has over 50 years experience teaching
//                 general.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">London School</div>
//               <div className="company">London</div>
//               <p>
//                 The London School of English has over 100 years experience
//                 teaching general.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionWritter = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Writer Director</div>
//               <div className="company">DBBooks</div>
//               <p>
//                 Collaborate with creative and development teams on the execution
//                 of ideas.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Team Leader</div>
//               <div className="company">ABC Inc.</div>
//               <p>
//                 A team leader is responsible for guiding a group of employees as
//                 they complete a project.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Business Writer</div>
//               <div className="company">Writer Corporation.</div>
//               <p>Corporate writing is writing for business purposes.</p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">New York University</div>
//               <div className="company">New York</div>
//               <p>
//                 New York University offers 2 Creative Writing Degree programs.
//                 {`It's`} a large private university in a large city.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Writing Course</div>
//               <div className="company">London</div>
//               <p>
//                 Creative writing short courses is taught at City, University of
//                 London. Develop writing skills with professional and published
//                 authors.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">New York School</div>
//               <div className="company">Brooklyn, NY, United States</div>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
// export const ResumeSectionMusician = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2018 - Present</div>
//               <div className="name">Schenectady Symphony Orchestra</div>
//               <div className="company">New York</div>
//               <p>Third chair, first violin section.</p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2016 - 2018</div>
//               <div className="name">Utica Symphony Orchestra</div>
//               <div className="company">New York</div>
//               <p>
//                 First violin section; orchestra is currently without contract.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2014 - 2016</div>
//               <div className="name">Frequent freelance</div>
//               <div className="company">New York</div>
//               <p>
//                 Work in: New York Capital Region for Cohoes Music Hall, Hubbard
//                 Hall Opera Theater.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="fa fa-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2014</div>
//               <div className="name">Peabody Institute</div>
//               <div className="company">Baltimore</div>
//               <p>
//                 M.M. in Performance, Peabody Institute {`–`} Baltimore, MD 2015.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2008 - 2011</div>
//               <div className="name">American University</div>
//               <div className="company">Washington</div>
//               <p>
//                 B.A. in Music, American University {`–`} Washington, D.C. 2012.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2000 - 2008</div>
//               <div className="name">New York School of Music</div>
//               <div className="company">New York</div>
//               <p>Great school! The teachers really care about the students.</p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };

// export const ResumeSectionClassic = () => {
//   return (
//     <div className="content resume">
//       {/* title */}
//       <div className="title">Resume</div>
//       {/* content */}
//       <div className="row">
//         {/* experience */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="ion ion-briefcase" />
//             </div>
//             <div className="name">Experience</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h active">
//               <div className="date">2013 - Present</div>
//               <div className="name">Art Director</div>
//               <div className="company">Facebook Inc.</div>
//               <p>
//                 Collaborate with creative and development teams on the execution
//                 of ideas.
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2011 - 2012</div>
//               <div className="name">Front-end Developer</div>
//               <div className="company">Google Inc.</div>
//               <p>
//                 Monitored technical aspects of the front-end delivery for
//                 several projects.
//               </p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2009 - 2010</div>
//               <div className="name">Senior Developer</div>
//               <div className="company">Abc Inc.</div>
//               <p>Optimize website performance using latest technology.</p>
//             </div>
//           </div>
//         </div>
//         {/* education */}
//         <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
//           <div className="resume-title border-line-h">
//             <div className="icon">
//               <i className="ion ion-university" />
//             </div>
//             <div className="name">Education</div>
//           </div>
//           <div className="resume-items">
//             <div className="resume-item border-line-h">
//               <div className="date">2006 - 2008</div>
//               <div className="name">Art University</div>
//               <div className="company">New York</div>
//               <p>
//                 {`Bachelor's`} Degree in Computer Science ABC Technical
//                 Institute, Jefferson, Missouri
//               </p>
//             </div>
//             <div className="resume-item border-line-h">
//               <div className="date">2005 - 2006</div>
//               <div className="name">Programming Course</div>
//               <div className="company">Paris</div>
//               <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
//             </div>
//             <div className="resume-item">
//               <div className="date">2004 - 2005</div>
//               <div className="name">Web Design Course</div>
//               <div className="company">London</div>
//               <p>
//                 Converted Photoshop layouts to web pages using HTML, CSS, and
//                 JavaScript
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="clear" />
//       </div>
//     </div>
//   );
// };
