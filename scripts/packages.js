const packages = [
  {
    title: "Docker",
    description: "A software platform used for building applications based on containers -- small and lightweight execution environments."
  },
  {
    title: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment."
  },
  {
    title: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."
  },
  {
    title: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
  },
  {
    title: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
  },
  {
    title: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

const showCards = (array) => {
  let domString = ""
  for (const arr of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${arr.title}</h5>
      <p class="card-text">${arr.description}</p>
      <a href="#" class="btn btn-primary">Learn more</a>
    </div>
  </div>` 
  }
  renderToDom("#container", domString)
}

let container = document.querySelector("#container")

container.style.display = "flex"

const packButton = document.querySelector("#packs")

packButton.addEventListener("click", () => {
  showCards(packages)
  document.querySelector('#container').hidden = false;
  document.querySelector('#discussContainer').hidden = true;
})
