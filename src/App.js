import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesCard from "./components/ServicesCard";
import Image1 from "./image/search.png"
import Image2 from "./image/bottol.png"
import Image3 from "./image/consulation.png"
import Image4 from "./image/Details.png"
import Image5 from "./image/everyone.png"
import Image6 from "./image/tracking.png"
import Btn from "./components/Btn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <div className='serviceCards'>
        <ServicesCard
          image={Image1}
          h1='Search doctor'
          p='Choose your doctor from thousands of specialist, general, and trusted hospitals'
        />
        <ServicesCard
          image={Image2}
          h1='Online pharmacy'
          p='Buy your medicines with our mobile application with a simple delivery system'
        />
        <ServicesCard
          image={Image3}
          h1='Consultation'
          p='Free consultation with our trusted doctors and get the best recommendations'
        />
        <ServicesCard
          image={Image4}
          h1='Details info'
          p='Free consultation with our trusted doctors and get the best recommendations'
        />
        <ServicesCard
          image={Image5}
          h1='Emergency care'
          p='You can get 24/7 urgent care for yourself or your children and your lovely family'
        />
        <ServicesCard
          image={Image6}
          h1='Tracking'
          p='Track and save your medical history and health data'
          />
      </div>
      <Btn/>
    </div>
  );
}

export default App;
