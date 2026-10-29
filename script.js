(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {});

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        const rows = array
          .map(
            (el) => `
              <tr>
                <td>${el.id}</td>
                <td>${el.userId}</td>
                <td class="title">${el.title}</td>
                <td class="body">${el.body}</td>
              </tr>
            `,
          )
          .join("");

        answer.innerHTML = `
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
              </tr>
            </thead>
            <tbody border="0">
              ${rows}
            </tbody>
          </table>
        `;
      })
      .catch((error) => {
        answer.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        console.error(error);
      });
  });

  cw2.addEventListener("click", function () {
    const postId = document.getElementById("cw2_select").value;
    answer.innerHTML = "Loading...";

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((el) => {
        console.log(el);
        answer.innerHTML = `
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${el.id}</td>
                <td>${el.userId}</td>
                <td class="title">${el.title}</td>
                <td class="body">${el.body}</td>
              </tr>
            </tbody>
          </table>
        `;
      })
      .catch((error) => {
        answer.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        console.error(error);
      });
  });

  cw3.addEventListener("click", function () {
    answer.textContent = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "POST" })
      .then((response) => response.json())
      .then((json) => {
        answer.textContent = `Dodano nowy post o ID = ${json.id}`;
      });
  });
})();
