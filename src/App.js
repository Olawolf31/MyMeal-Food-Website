import React from 'react'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Footer from '../src/components/Footer/Footer'
import AvailableMeals from './AvailableMeals'
/* import { Context } from './components/StoreContext/Context' */
import ContextProvider from './components/StoreContext/ContextProvider'

function App() {
  /* const [lgShow, setLgShow] = useState(false); */
  return (
    <ContextProvider>
      <Header />
      <Hero />
      <AvailableMeals />
      <Footer />
    </ContextProvider>
  );
}

export default App;
