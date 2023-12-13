
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inbox from "./components/Inbox";
import Dashboard from "./pages/dashboard";
import Products from "./components/Products";

function App() {
 

  return (
   <>
   <BrowserRouter>
                <Routes>
                    <Route path="" element={<Dashboard />}>
                        <Route path="/product" element={<Products/>} />
                        <Route path="/inbox" element={<Inbox />} />                        
                    </Route>
                  
                </Routes>
            </BrowserRouter>
   </>
  );
}

export default App;
