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

const container = document.querySelector("#container")

container.style.display = "flex"

const showInput = () => {
  let domString = ""
  domString += `<h2 class="form-label">Create a new Package</h2>
  <form id="packsform">
  <div class="mb-3">
  <label for="title" class="form-label">Package Name</label>
  <input type="text" class="form-control" id="title">
</div>
<div class="mb-3">
  <label for="description" class="form-label">Package Description</label>
  <textarea class="form-control" id="description" rows="3"></textarea>
  <button type="submit" class="btn btn-primary" id="cpacks">Create Package</button>
</div>
</form>`
renderToDom("#container2", domString)
const addButton = document.querySelector("#cpacks")

  addButton.addEventListener("click", (event) => {
  event.preventDefault()

  const title = document.querySelector("#title")
  const description = document.querySelector("#description")

  const newPackage = {
    title: title.value,
    description: description.value,
  }

  packages.push(newPackage)
  showCards(packages) 

  let form = document.querySelector("#packsform")
  form.reset()
})
} 


const packButton = document.querySelector("#packs")

packButton.addEventListener("click", () => {
  showCards(packages)

  //Jovanni added this
  document.querySelector('#container').hidden = false;
  document.querySelector('#discussContainer').hidden = true;
  document.querySelector('#filtBtns').hidden = true;
  document.querySelector('#overviewContainer').hidden = true;
  document.querySelector('#container2').hidden = false;

  showInput()
})
