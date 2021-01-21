import './App.css';
import { Homepage } from './containers/homepage';
import InfoSection from './containers/infoSection/InfoSection';
import {ReviewsSection} from './containers/reviews/ReviewSection.jsx';

import { homeObjOne,homeObjThree,homeObjTwo } from './containers/infoSection/Data';
import { Footer } from './containers/footer/Footer';
import Contact from './containers/contact/Contact';

function App() {
  return (
    <div>
    <Homepage></Homepage>
    <InfoSection {...homeObjOne}></InfoSection>
    <InfoSection {...homeObjTwo}></InfoSection>
    <InfoSection {...homeObjThree}></InfoSection>
    <ReviewsSection></ReviewsSection>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    
  );
}

export default App;
