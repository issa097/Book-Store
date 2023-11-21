import Services from '../../componants/services/Services';
import Slider from '../../componants/slider/Slider';
import { books} from "../../data/books"
import HeadTilte from '../../componants/headtitle/HeadTitle';
import BookSlider from '../../componants/bookslider/BookSlider';

const Homepage  = () => {
    return (  
        <div className="home">
             <Slider/>
      <Services/>
      <HeadTilte title="Most gifted"/>
      <BookSlider data={books}/>
      <HeadTilte title="Best seller"/>
      <BookSlider data={books}/>
      <HeadTilte title="Most wished for"/>
      <BookSlider data={books}/>
        </div>
    );
}
 
export default Homepage  ;