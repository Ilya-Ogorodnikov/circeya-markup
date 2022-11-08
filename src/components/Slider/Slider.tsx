import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { slides } from '../../utils/constants';
import './style.scss';

const Slider = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="slider" ref={scrollRef}>
      {slides.map(slide => (
        <div key={slide.id}>
          <img src={slide.img} alt={`slide № ${slide.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
