import { Route, Routes } from "react-router-dom";
import ViewPage from "./components/view/ViewPage";
import Element from "./components/edit/element/Element";
import Design from "./components/edit/designs/Design";


const App = () => {
  return (
    
      <Routes>
      <Route path="/" element={<ViewPage toggleSidebar={function (): void {
        throw new Error("Function not implemented.");
      } } />} />
      
      <Route path="/elements" element={ <Element /> } />
      <Route path="/design" element={ <Design /> } />
        
    </Routes>
    
  );
};

export default App;
