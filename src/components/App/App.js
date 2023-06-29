import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Catalog from "../product/Catalog"

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="products/*" element={<Catalog products={props.appState.products}/>} />
          </Routes>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
