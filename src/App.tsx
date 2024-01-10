import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/pageHome/PageHome";
import ViewPage from "./components/view/ViewPage";
import EditPage from "./components/edit/EditPage";
import Template from "./pages/DemoTempelate/Template";
import Gallery from "./components/view/Gallery/Gallery";
import Header from "./components/view/Header";



const App = () => {
  return (
    <>
      <Header />
    </>
      // <Routes>
        /* <Route path="/" element={<PageHome />} />
        <Route path='/viewPage' element={<ViewPage />} />
        <Route path='/editPage' element={<EditPage />} />
        <Route path='/demoTemplate' element={<Template />} /> */
    
    // </Routes>
    
  );
};

export default App;
