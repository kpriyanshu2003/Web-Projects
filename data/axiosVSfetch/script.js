const Axios = document.getElementById("Axios");
const Fetch = document.getElementById("Fetch");
const URL = document.getElementById("requestURL");

function makeRequest() {
  Axios.innerHTML = "";
  Fetch.innerHTML = "";
  console.log("Request URL: ", URL.value);
  axios
    .get(URL.value)
    .then((response) => {
      console.log(response.data);
      return JSON.stringify(response.data);
    })
    .then((data) => {
      Axios.innerHTML = data;
    })
    .catch((error) => {
      console.error("Axios: Error Fetching JSON:", error);
    })
    .finally(() => {
      console.log("Axios Request Made");
    });

  fetch(URL.value)
    .then((response) => response.json())
    .then((data) => {
      Fetch.innerHTML = JSON.stringify(data); // Convert data to string
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch: Error fetching JSON:", error);
    })
    .finally(() => {
      console.log("Fetch Request made");
    });
}
