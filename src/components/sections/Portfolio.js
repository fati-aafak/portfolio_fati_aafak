// import { salimovSlider } from "@/src/sliderProps";
// import { Swiper, SwiperSlide } from "swiper/react";

// const Portfolio = () => {
//   return (
//     <section
//       className="portfolio main-section flex-column-mobile"
//       id="portfolio"
//     >
//       {/* TITLE STARTS */}
//       <div className="custom-title">
//         {/* MAIN TITLE STARTS */}
//         <h3>
//           <span>
//             <span className="animated-layer fade-in-left-animation fadeInUp wow">
//               My Portfolio
//             </span>
//           </span>
//         </h3>
//         {/* MAIN TITLE ENDS */}
//       </div>
//       {/* TITLE ENDS */}
//       <Swiper
//         {...salimovSlider.portfolio}
//         className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
//         data-wow-offset={200}
//       >
//         {/* PORTFOLIO ITEM STARTS */}
//         <SwiperSlide className="single-item swiper-slide">
//           {/* ITEM MAIN CONTENT STARTS */}
//           <div className="main-content">
//             <img
//               className="img-fluid"
//               src="assets/portfolio/rma.png"
//               alt="Image Project"
//             />
//           </div>
//           {/* ITEM MAIN CONTENT ENDS */}
//           {/* ITEM DETAILS STARTS */}
//           <div className="details">
//             <h4>rechargermonauto</h4>
//             <div>
//               <ul>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-file-lines" /> Project :
//                   </span>
//                   <span>Website</span>
//                 </li>
//                 {/* <li>
//                   <span>
//                     <i className="fa-regular fa-user" /> Client :
//                   </span>
//                   <span>Envato</span>
//                 </li> */}
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-hourglass" /> Duration :
//                   </span>
//                   <span>3 months</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-solid fa-code-branch" /> Frameworks :
//                   </span>
//                   <span>React js</span>
//                 </li>
//               </ul>
//             </div>
//             <a href="https://rechargermonauto.com/mobile" target="_blank" className="custom-btn">
//               <span>
//                 preview <i className="fa-solid fa-arrow-up-right-from-square" />
//               </span>
//             </a>
//           </div>
//           {/* ITEM DETAILS ENDS */}
//         </SwiperSlide>
//         {/* PORTFOLIO ITEM ENDS */}
//         {/* PORTFOLIO ITEM STARTS */}
//         <SwiperSlide className="single-item swiper-slide">
//           {/* ITEM MAIN CONTENT STARTS */}
//           <div className="main-content">
//            <img
//               className="img-fluid"
//               src="assets/portfolio/fostp.png"
//               alt="Image Project"
//             />
//           </div>
//           {/* ITEM MAIN CONTENT ENDS */}
//           {/* ITEM DETAILS STARTS */}
//           <div className="details">
//             <h4> FOSTP</h4>
//             <div>
//               <ul>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-file-lines" /> Project :
//                   </span>
//                   <span>website FOSTP</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-user" /> Client :
//                   </span>
//                   <span>Fondation des Œuvres Sociales
// des Travaux Publics</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-hourglass" /> Duration :
//                   </span>
//                   <span>2 months</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-solid fa-code-branch" /> Frameworks :
//                   </span>
//                   <span>React js</span>
//                 </li>
//               </ul>
//             </div>
//             <a href="https://www.fostp.ma/" target="_blank" className="custom-btn">
//               <span>
//                 preview <i className="fa-solid fa-arrow-up-right-from-square" />
//               </span>
//             </a>
//           </div>
//           {/* ITEM DETAILS ENDS */}
//         </SwiperSlide>
//         {/* PORTFOLIO ITEM ENDS */}
//         {/* PORTFOLIO ITEM STARTS */}
//         <SwiperSlide className="single-item swiper-slide">
//           {/* ITEM MAIN CONTENT STARTS */}
//           <div className="main-content">
//             <Swiper
//               {...salimovSlider.portfolioItems}
//               className="swiper swiper-portfolio-item"
//             >
//               <SwiperSlide className="swiper-slide">
//                 <img src="assets/portfolio/its.png" title="img" />
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide">
//                 <img src="assets/portfolio/azfod.png" title="img" />
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide">
//                 <img src="assets/portfolio/rma1.png" title="img" />
//               </SwiperSlide>
//               <div className="swiper-pagination" />
//             </Swiper>
//           </div>
//           {/* ITEM MAIN CONTENT ENDS */}
//           {/* ITEM DETAILS STARTS */}
//           <div className="details">
//             <h4>Slider Project</h4>
//             <div>
//               <ul>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-file-lines" /> Project :
//                   </span>
//                   <span>Mobile App</span>
//                 </li>
//                 {/* <li>
//                   <span>
//                     <i className="fa-regular fa-user" /> Client :
//                   </span>
//                   <span>Codecanyon</span>
//                 </li> */}
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-hourglass" /> Duration :
//                   </span>
//                   <span>3 months</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-solid fa-code-branch" /> Figma :
//                   </span>
//                   <span>its materieux - az fod - rma</span>
//                 </li>
//               </ul>
//             </div>
//             <a href="https://www.figma.com/design/N0IkM80dGxDNERPk0UmrhV/az-food?node-id=0-1&p=f&t=ld61u9wq0agp7gZX-0" target="_blank" className="custom-btn">
//               <span>
//                 preview <i className="fa-solid fa-arrow-up-right-from-square" />
//               </span>
//             </a>
//           </div>
//           {/* ITEM DETAILS ENDS */}
//         </SwiperSlide>
//         {/* PORTFOLIO ITEM ENDS */}
//         {/* PORTFOLIO ITEM STARTS */}
//         <SwiperSlide className="single-item swiper-slide">
//           {/* ITEM MAIN CONTENT STARTS */}
//           <div className="main-content">
          
//              <img
//               className="img-fluid"
//               src="assets/portfolio/zest1.png"
//               alt="Image Project"
//             />
            
//           </div>
//           {/* ITEM MAIN CONTENT ENDS */}
//           {/* ITEM DETAILS STARTS */}
//           <div className="details">
//             <h4>Zest juice</h4>
//             <div>
//               <ul>
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-file-lines" /> Project :
//                   </span>
//                   <span>website zest juice</span>
//                 </li>
//                 {/* <li>
//                   <span>
//                     <i className="fa-regular fa-user" /> Client :
//                   </span>
//                   <span>Envato</span>
//                 </li> */}
//                 <li>
//                   <span>
//                     <i className="fa-regular fa-hourglass" /> Duration :
//                   </span>
//                   <span>1 month</span>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fa-solid fa-code-branch" /> Frameworks :
//                   </span>
//                   <span>React js</span>
//                 </li>
//               </ul>
//             </div>
//             <a href="https://zestjuiceco.vercel.app/" target="_blank" className="custom-btn">
//               <span>
//                 preview <i className="fa-solid fa-arrow-up-right-from-square" />
//               </span>
//             </a>
//           </div>
//           {/* ITEM DETAILS ENDS */}
//         </SwiperSlide>
//         {/* PORTFOLIO ITEM ENDS */}
//         <div className="nav-item next-item animated-btn">
//           <span />
//         </div>
//         <div className="nav-item prev-item animated-btn">
//           <span />
//         </div>
//       </Swiper>
//       <img
//         alt=""
//         className="separator hide-mobile"
//         src="assets/separator.png"
//       />
//     </section>
//   );
// };
// export default Portfolio;

import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Image Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>WordPress</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/AqcjdkPMPJA?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Youtube Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Short Film</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Videohive</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>8 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>After Effects</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-1.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Slider Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Mobile App</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Codecanyon</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>React JS</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>External Link</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Advertising</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Envato</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Adobe Premiere</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
