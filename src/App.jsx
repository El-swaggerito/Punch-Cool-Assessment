import HomePage from "./components/HomePage/homePage";
import SecondPage from "../src/components/SecondPage/secondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthPage from "./components/FourthPage/FourthPage";
import FifthPage from "./components/FifthPage/FifthPage";
import SixthPage from "./components/SixthPage/ZwiltComponent";
import SeventhPage from "./components/SeventhPage/SeventhPage";
import EighthPage from "./components/EighthPage/EighthPage";
import Divider from "./components/Divider/Divider";
import "./App.css";
function App() {
  return (
    <>
      <HomePage />
      <Divider />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
    </>
  );
}

export default App;
