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
        answer.innerHTML = "";
        const ul = document.createElement("ul");
        array.forEach((el) => {
          const li = document.createElement("li");
          li.textContent = `Post nr ${el.id}, userId: ${el.userId}`;
          ul.appendChild(li);

          const ul2 = document.createElement("ul");
          li.appendChild(ul2);
          const title = document.createElement("li");
          title.textContent = el.title;
          const body = document.createElement("li");
          body.textContent = el.body;

          ul2.appendChild(title);
          ul2.appendChild(body);
        });
        answer.appendChild(ul);
      });
  });

  cw2.addEventListener("click", function () {
    const postId = document.getElementById("cw2_select").value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((el) => {
        answer.innerHTML = "";
        const ul = document.createElement("ul");

        const li = document.createElement("li");
        li.textContent = `Post nr ${el.id}, userId: ${el.userId}`;
        ul.appendChild(li);

        const ul2 = document.createElement("ul");
        li.appendChild(ul2);
        const title = document.createElement("li");
        title.textContent = el.title;
        const body = document.createElement("li");
        body.textContent = el.body;

        ul2.appendChild(title);
        ul2.appendChild(body);

        answer.appendChild(ul);
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
