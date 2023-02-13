const repos = [
  {
    title: "greys-anatomy-generator",
    description: "A lorem ipsum generator with medical terms and words from the show"
  },
  {
    title: "how-many-days-until",
    description: "A React countdown app of dayd between today and next year."
  },
  {
    title: "httriri",
    description: "HTTRIRI - HTTP Status Code"
  },
  {
    title: "ambition-fund",
    description: "Wensite for www.ambitionfund.org micro-grant program."
  }
];

const renderToDomRepo = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
};
//render cards to DOM
const cardsOnDom = (array) => {
  let domString = ""
  for (const item of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <a href="#" class="btn btn-primary">Learn more</a>
    </div>
  </div>` 
  }
  renderToDomRepo("#container1", domString);
};

let container1Repo = document.querySelector("#container1")

cardsOnDom(repos);

container1Repo.style.display = "flex"
container1.style.flexDirection = "column"

const repoButton = document.querySelector("#repos")

repoButton.addEventListener("click", () => {
  cardsOnDom(repos)
  showInputRepos()
  searchBar()
})
// create new repos form
const showInputRepos = () => {
  let domString = ""
  domString += `<h2 class="form-label">Create a New Repository</h2>
  <form id="reposform">
  <div class= "mb-3">
    <label for= "title" class="form-label">Repo Name</label>
    <input type="text" class="form-control" id="title">
  </div>
  <div class="mb-3">
    <label for= "description" class="form-label">Repo Description</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
    <button type="button" class="btn btn-primary" id="crepos">Create Repo</button>
  </div>
  </form>
  `
  renderToDomRepo("#container2", domString);
};
// search bar form 
const searchBar = () => {
  let domString = ""
  domString += `
  <form id="searchBar">
  <div class="mb-3">
    <label for= "description" class="form-label"></label>
    <textarea class="form-control" id="description" rows="1"
    placeholder="search repos here..."></textarea>
  </div>
  </form>
  `
  renderToDomRepo("#container0", domString);
};
