
import { Header, Footer } from "./components/header";
import { AboutFooter } from "./components/About";
import { BlogModule } from "./components/BlogsPost";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";

function App() {
 

  return (
    <>
      <Header />
       
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/blogs" element={<BlogModule />} />
        </Routes>
   
     <AboutFooter/>
     <Footer/>
    </>
  );
}

export default App;
