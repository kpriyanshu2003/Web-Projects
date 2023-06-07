const statusCode = document.getElementById("statusCode");
const requestHeader = document.getElementById("requestHeader");
const requestData = document.getElementById("requestData");
const requestURL = document.getElementById("requestURL");

async function makeRequest(req) {
  const config = {
    method: req,
    url: requestURL.value,
  };

  let res = await axios(config);
  console.log("URL" + requestURL.value);
  console.log(req + " request made");
  console.log("Status Code : " + res.status);
  statusCode.innerHTML = JSON.stringify(res.status);
  requestHeader.innerHTML = JSON.stringify(res.headers);
  requestData.innerHTML = JSON.stringify(res.data);
}
