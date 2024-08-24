// import React, { useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { MdDarkMode } from "react-icons/md";
// import { SiWolframmathematica } from "react-icons/si";
// import { IoReloadCircle } from "react-icons/io5";

// function MainPage() {
//     const leftsideRef = useRef(null);
//     const rightsideRef = useRef(null);
//     const nameRef = useRef(null);

//     useEffect(() => {
//         // Sample code to handle text animation with React (without jQuery)   
        
//         const words = document.querySelectorAll(".cd-words-wrapper b");
//         let wordIndex = 0;
//         words[wordIndex].classList.add("is-visible");

//         const intervalId = setInterval(() => {
//             words[wordIndex].classList.remove("is-visible");
//             wordIndex = (wordIndex + 1) % words.length;
//             words[wordIndex].classList.add("is-visible");
//         }, 2000);

//         // Cleanup on unmount
//         return () => clearInterval(intervalId);
//     }, []);

//     const white = () => {
//         if (leftsideRef.current && rightsideRef.current) {
//             leftsideRef.current.style.backgroundColor = "rgba(33, 34, 34, 0.846)";
//             leftsideRef.current.style.color = "white";

//             rightsideRef.current.style.backgroundColor = "rgb(33, 33, 33)";
//             rightsideRef.current.style.color = "white";
//         }
//     }

//     const bgg = () => {
//         if (rightsideRef.current) {
//             rightsideRef.current.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/622/625/95/himalayas-prayer-flags-wallpaper-preview.jpg')";
//             rightsideRef.current.style.backgroundRepeat = "no-repeat";
//             rightsideRef.current.style.backgroundSize = "cover";
//         }
//     }

//     const changeColor = (color) => {
//         if (nameRef.current) {
//             nameRef.current.style.color = color;
//         }
//     }

//     return (
//         <>
//             <div className="main-div">
//                 <div className="row d-flex flex-column flex-sm-column flex-md-row flex-lg-row">
//                     <div className="left col-12 col-sm-12 col-md-2 col-lg-2 p-0" id="leftside" ref={leftsideRef}>
//                         <h1 className='logo'><span className='Niks' id='N'>N</span>iks</h1>
//                         <br />
//                         <ul>
//                             <li><a href="#" className='nav-hov'>Home</a></li>
//                             <li><a href="#" className='nav-hov'>About</a></li>
//                             <li><a href="#" className='nav-hov'>Service</a></li>
//                             <li><a href="#" className='nav-hov'>Contact Us</a></li>
//                         </ul>
//                     </div>
//                     <div className="right col-12 col-sm-12 col-md-10 col-lg-10 p-0" id="rightside" ref={rightsideRef}>
//                         <div className="main-con">
//                             <h1>Hello My Name Is <span className='Name' id="Name" ref={nameRef}>Niks Nimje</span></h1>
//                             <p>Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Eum voluptatum accusantium<br />obcaecati animi quos repellat, quam<br />laboriosam alias perspiciatis amet molestiae dolore totam.</p>
//                             <br /><br />
//                             <a href="#" className='view-a' id='Viewaa'>View More</a><br /><br />
//                             <button onClick={white} className='Sunn'><MdDarkMode /></button>
//                             <button onClick={bgg} className='bgg'><SiWolframmathematica /></button>
//                             <br /><br />
//                             <button onClick={() => changeColor('red')} className='red'>Red</button>
//                             <button onClick={() => changeColor('lawngreen')} className='green'>Green</button>
//                             <button onClick={() => changeColor('yellow')} className='yellow'>Yellow</button>
//                             <button onClick={() => changeColor('rgb(255, 0, 179)')} className='pink'>Pink</button>
//                             <a href='#' className='reload'><IoReloadCircle /></a>
//                         </div>
//                         <div className="img-div d-none d-sm-none d-md-none d-lg-block"></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MainPage;
