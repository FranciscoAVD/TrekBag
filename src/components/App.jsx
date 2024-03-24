import ItemsContextProvider from '../contexts/ItemsContextProvider';
import BackgroundHeading from "./BackgroundHeading/BackgroundHeading";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";
import SideBar from "./Sidebar/Sidebar";

function App() {

  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemsContextProvider> */}
          <Header />
          <ItemList />
          <SideBar />
        {/* </ItemsContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
