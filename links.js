const container = document.querySelector("#image-links-container");

const genPath = name => `link-images/${name}`;
const tiles = [
  {
    path: genPath("top javascript courses.jpg"),
    alt: "top low-cost online Javascript courses",
    title: "Top Low-Cost Javascript Courses",
    content:
      "Javascript is the language that powers the web. It's easier to start with with than Java or C, and is an excellent choice for a first language. Start learning it today!",
    linkPath:
      "https://drive.google.com/file/d/1q2xIJ2b1Q9gDWx-I6HBU1ybmDQMG51yF/view?usp=sharing"
  }
];

function generateImageLinkTile(imgLinkObj) {
  const { path, alt, title, content, linkPath } = imgLinkObj;

  return `
        <div class="col-12 col-md-3 my-2">
            <div class="card shadow-sm border-0">
                <a href="${linkPath}">
                    <img src="${path}" class="card-img-top" alt="${alt}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                    <a href="${linkPath}" class="btn btn-primary mt-2">Go to Link</a>
                </div>
            </div>
        </div>
    `;
}

tiles.forEach(function(obj) {
  container.innerHTML += generateImageLinkTile(obj);
});
