import {BrowserRouter,Routes,Route} from "react-router-dom"

import "./App.css"
import Mobile from "./components/Mobile";
import OTP from "./components/OTP";
import Success from "./components/success";


const App=()=>{

return(
<BrowserRouter>
<Routes>

  <Route exact path="/" element={<Mobile/>}  />
  <Route exact path="/otp" element={<OTP/>}  />
  <Route exact path="/success" element={<Success/>}  />
</Routes>

</BrowserRouter>
)

}
export default App;
