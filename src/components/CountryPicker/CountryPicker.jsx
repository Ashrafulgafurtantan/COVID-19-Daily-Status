import React, { useEffect, useState } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountryPicker } from "../../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";
function CountryPicker(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountryPicker());
    };
    fetchAPI();
  }, [setCountry]);
  console.log(country);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => {
          props.onPick(event.target.value);
        }}
      >
        <option value="global">Global</option>
        {country.map((val, index) => {
          return (
            <option key={index} value={val}>
              {val}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
