import './App.css';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
import BestWork1 from './components/BestWork1';
import BestWork3 from './components/BestWork3';
import BestWork4 from './components/BestWork4';
import Services from './components/Services';
import OfferPlans from './components/OfferPlans';
import FAQ from './components/FAQ';
// import Companies from './components/Companies';
import Reviews from './components/Reviews';


function App() {
  return (
    <div className="App"> 
        <NavBar/>
        <MainBody/>
        <BestWork1/>
        <BestWork3/>
        <BestWork4/>
        <Services/>
        <OfferPlans/>
        <FAQ/>
        {/* <Companies/> */}
        <Reviews/>
        
       </div>
    
  );
}

export default App;
