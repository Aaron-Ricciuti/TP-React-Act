import CarouselItem from "./CarouseIItem";
import styles from "../../public/css/cajonde12.module.css";

function Carousel({ slides, imgClass}) {
  return (
    <div id="carouselExampleCaptions" className={`carousel slide ${styles.carouselExampleCaptions}`} >
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className={styles['carousel-inner']}>
    {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            imageAlt={slide.alt}
            imageSrc={slide.image}
            active={index === 0}
            imgClass={imgClass}
            />
        ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  );
}


export default Carousel;