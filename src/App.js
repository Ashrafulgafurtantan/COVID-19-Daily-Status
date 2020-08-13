import React, { useEffect } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import axios from "axios";
import image from "./images/image.png";
//import { fetchData } from "./api/index";
function App() {
  const [posts, setPosts] = React.useState({
    singleData: {},
  });
  const [requestData, setRequestData] = React.useState(new Date());
  const [selectCountry, setSelectCountry] = React.useState("");
  function handleCountry(count) {
    console.log(count);
    setSelectCountry(count);
    console.log(selectCountry.length);
    setRequestData(new Date());
  }

  useEffect(() => {
    axios
      .get(
        selectCountry !== "global"
          ? `https://covid19.mathdro.id/api/countries/${selectCountry}`
          : "https://covid19.mathdro.id/api"
      )
      .then((response) => {
        const {
          data: { confirmed, recovered, deaths, lastUpdate },
        } = response;

        const modifiedData = { confirmed, recovered, deaths, lastUpdate };

        // console.log(modifiedData);
        setPosts({ singleData: modifiedData });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestData]);
  // }, []);
  return (
    <div className={styles.container}>
      <img alt="Corona.png" src={image} className={styles.image} />
      <Cards formPosts={posts} />
      <CountryPicker onPick={handleCountry} />
      <Chart selectCountry={selectCountry} formPosts={posts} />
    </div>
  );
}
export default App;
