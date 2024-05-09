const search = document.querySelector("#search");
const articles = document.querySelector(".articles");
const article = document.querySelectorAll(".article");

search.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  article.forEach((article) => {
    const title = article.querySelector(".title").textContent.toLowerCase();
    const description = article
      .querySelector(".description")
      .textContent.toLowerCase();

    if (title.includes(value) || description.includes(value)) {
      article.classList.remove("hidden");
    } else {
      article.classList.add("hidden");
    }
  });
});
