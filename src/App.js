import { Routes, Route } from "react-router-dom";
import Nav from "./routes/nav/nav.jsx";
import Home from "./routes/Home/home.jsx";
import Authentication from "./routes/authentication/authentication.jsx";


const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>

        <Route index  element={<Home />} />
        <Route path='shop' element={<Shop />} />
   
        <Route path='auth' element={<Authentication />} />
        
      </Route>
    </Routes>
  );
};

export default App;
