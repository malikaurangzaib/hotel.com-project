import './App.css';
import Header from './Components/Header';
import MemDiscountDiv from './Components/MemDiscountDiv';
import OffersSection from './Components/OfferSection';
import TopDealsDiv from './Components/TopDealsDiv';
import WhereToNextDiv from './Components/WhereToNextDiv';
import DiscoverFavCarousel from './Components/DiscoverFavCarousel';
import ExpUniqueDiv from './Components/ExpUniqueDiv';
import ExpPopularDiv from './Components/ExpPopularDiv';
import PromoSection from './Components/PromoSection/PromoSection';
import Footer from './Components/Footer';
import HotelsOverviewPage from './Pages/HotelsOverviewPage/HotelsOverviewPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function HomePage() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main style={{ margin: 0, padding: 0 }}>
        <WhereToNextDiv/>
        <MemDiscountDiv/>
        <OffersSection/>
        <DiscoverFavCarousel/>
        <TopDealsDiv/>
        <ExpPopularDiv/>
        <ExpUniqueDiv/>
        <PromoSection/>
        <Footer/>
      </main>
    </div>

);
}  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel/:slug" element={<HotelsOverviewPage />} />
      </Routes>
    </Router>
  );
}
    

export default App;