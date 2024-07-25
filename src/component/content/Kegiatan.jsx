import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import './Kegiatan.css';
import { useState } from "react";
import { useGaleriPagination } from "../../hooks/galeri/useGaleriPagination";

const Kegiatan = () => {
   const navigate = useNavigate();
   const [dataTable] = useState({
      current_page: 1,
      per_page: 1000,
      total: 0,
   });

   const { data, isLoading } = useGaleriPagination(
      dataTable,
      ''
   );

=======
import { Link } from "react-router-dom"
import './Kegiatan.css'

const Kegiatan = () => {
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };

   return (
      <div>
         <div className="container">
            <div className="kegiatan-title-box">
               <div className="header-box">
                  <div className='kegiatan-icon'>
                     <i className='fas fa-camera'></i>
                  </div>
                  <h2>Galeri Kegiatan</h2>
               </div>
<<<<<<< HEAD
               <Link to="/kegiatan">Lihat Semua</Link>
=======
               <Link>Lihat Semua</Link>
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
            </div>
            <Carousel
               swipeable={false}
               draggable={false}
<<<<<<< HEAD
=======
               // showDots={true}
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
               responsive={responsive}
               ssr={false} // means to render carousel on server-side.
               infinite={true}
               autoPlaySpeed={1000}
               keyBoardControl={true}
               customTransition="all .5"
               transitionDuration={500}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
<<<<<<< HEAD
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               {
                  isLoading && (
                     <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                  )
               }
               {
                  !isLoading && data?.data?.map((x, i) => {
                     return (
                        <div className="kegiatan-box" key={i}>
                           <img src={x?.gambarGaleri} alt={x?.nama} className="kegiatan-image" />
                           <button className="button-kegiatan"
                              onClick={() => navigate(`/kegiatan`)}
                           >Lihat Kegiatan</button>
                        </div>
                     );
                  })
               }
               {
                  !isLoading && data?.data?.length === 0 && (
                     <div className="kegiatan-box">
                        <p className="galeri-title">
                           Data tidak ditemukan
                        </p>
                     </div>
                  )
               }
            </Carousel>
         </div>
      </div>
   );
}

export default Kegiatan;
=======
               // deviceType={this.props.deviceType}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
            </Carousel>
         </div>
      </div>
   )
}

export default Kegiatan
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
