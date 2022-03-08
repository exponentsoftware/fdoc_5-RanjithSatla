const axios = require("axios").default;

async function fetchApi() {
  try {
    const fetchedData = await axios.get("https://restcountries.com/v3/all");

    // Count total languages
    let totalLanguages = {};

    fetchedData.data.forEach((obj) => {
      let a = (obj) => {
        for (x in obj.languages) {
          totalLanguages[x] = obj.languages[x];
        }
      };
      a(obj);
    });

    // 15 most spoken languages
    let fifteenMostSpokenLanguages = [];

    fetchedData.data.forEach((obj) => {
      let a = (obj) => {
        for (x in obj.languages) {
          let temp = obj.name.common;
          if (fifteenMostSpokenLanguages[x]) {
            fifteenMostSpokenLanguages[x].push(obj.name.common);
          } else {
            fifteenMostSpokenLanguages[x] = [];
            fifteenMostSpokenLanguages[x].push(obj.name.common);
          }
        }
      };
      a(obj);
    });

    console.log(fifteenMostSpokenLanguages);
  } catch (err) {
    console.log(err);
  }
}

fetchApi();
