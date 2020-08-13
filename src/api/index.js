import axios from "axios";

export const fetchData = async (selectCountry) => {
  try {
    const response = await axios.get(
      selectCountry !== "global" && selectCountry
        ? `https://covid19.mathdro.id/api/countries/${selectCountry}`
        : "https://covid19.mathdro.id/api"
    );
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = response;

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryPicker = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get("https://covid19.mathdro.id/api/countries");
    return countries.map((country) => {
      return country.name;
    });
  } catch (err) {
    console.log(err);
  }
};
