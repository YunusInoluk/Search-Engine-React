import { MainContext, useContext } from "../context";
import logo from "../assets/images/logo.png";
import { ResultBox } from "../components/ResultBox";
import { SearchBar } from "../components/SearchBar";

export const LandingPage = () => {
  const { inputData, mergedData, searchData } = useContext(MainContext);
  return (
    <div className="landing-page w-100 d-flex flex-column align-items-center justify-content-center">
      <img className="w-25" src={logo} alt="tesodev logo" />
      <h5 className="sub-title">Search Web App</h5>
      <SearchBar />
      {inputData ? <ResultBox data={searchData(mergedData)} /> : null}
    </div>
  );
};
