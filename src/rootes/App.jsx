import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchItem from "../Components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
