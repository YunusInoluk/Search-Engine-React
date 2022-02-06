import { LandingPage } from "./pages/LandingPage";
import { ResultPage } from "./pages/ResultPage";
import { MainContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((json) => setDataUser(json));
  }, []);

  // Create data object for search
  const createObject = (arr) => {
    const [nameSurname, company, email, date, country, city] = arr;
    return {
      nameSurname,
      company,
      email,
      date,
      country,
      city,
    };
  };
  const mergedData = dataUser.map(createObject);

  // Search filter function
  const searchData = (data) => {
    return data.filter(
      (item) =>
        item.nameSurname.toLowerCase().indexOf(inputData) > -1 ||
        item.country.toLowerCase().indexOf(inputData) > -1 ||
        item.company.toLowerCase().indexOf(inputData) > -1 ||
        item.email.toLowerCase().indexOf(inputData) > -1 ||
        item.date.toLowerCase().indexOf(inputData) > -1 ||
        item.city.toLowerCase().indexOf(inputData) > -1
    );
  };
  const contextData = {
    inputData,
    mergedData,
    setInputData,
    searchData,
  };

  return (
    <div className="d-flex vh-100 justify-content-center">
      <MainContext.Provider value={contextData}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              path="/show-more"
              element={<ResultPage data={searchData(mergedData)} />}
            />
          </Routes>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
