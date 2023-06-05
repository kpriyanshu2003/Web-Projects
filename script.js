const root = document.getElementById("root");

fetch(`./data.json`)
  .then((response) => response.json())
  .then((data) => {
    let tmp = `<tr>
        <th>Sl No</th>
        <th>Name</th>
        <th>Description</th>
      </tr>`;
    for (i in data) {
      data[i].status
        ? (tmp =
            tmp +
            `<tr>
          <td>${parseInt(i) + 1}</td>
          <td><a href="${data[i].link}">${data[i].name}</a></td>
          <td>${data[i].description}</td>
          </tr>
      `)
        : "";
    }
    root.innerHTML = tmp;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
