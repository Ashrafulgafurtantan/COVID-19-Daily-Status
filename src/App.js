import React, { useEffect } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import axios from "axios";
//import { fetchData } from "./api/index";
function App() {
  const [posts, setPosts] = React.useState({
    singleData: {},
    country: "",
  });
  const [requestData, setRequestData] = React.useState(new Date());

  function handleCountry(count) {
    console.log(count);
    // setPosts({
    //   country: count,
    // });
    // console.log(posts.country + " bdedwbe");
    setRequestData(new Date());
  }

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
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
  }, [requestData]);
  //}, []);
  return (
    <div className={styles.container}>
      <Cards formPosts={posts} />
      <CountryPicker onPick={handleCountry} />
      <Chart />
    </div>
  );
}
export default App;
// eslint-disable-next-line react-hooks/exhaustive-deps
