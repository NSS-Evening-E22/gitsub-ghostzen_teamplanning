const projects = [
  {
    name: 'Jimmy`s Project',
    status: 'Last Updated 1 hour ago'
  },
  {
    name: 'Jovanni`s Project',
    status: 'Last Updated Today'
  },
  {
    name: 'Madd`s Project' ,
    status: 'Last Updated 1990'
  },
  {
    name: 'Dimitric`s Project',
    status: 'Last Updated bouta week ago'
  },
  {
    name: 'Michael`s Project',
    status: 'Last Updated 3 Hours Ago'
  },
  {
    name: 'Grace`s Project',
    status: 'Lat Updated Yesterday'
  },
  {
    name: 'Justin`s Project',
    status: 'Last Updated After Rihannas Halftime Show'
  },
  {
    name: 'Sydney`s Project',
    status: 'Last Updated Tuesday'
  },
  {
    name: 'Trevor`s Project',
    status: 'Last Updated Never'
  },
  {
    name: 'Harris`s Tumley`s Project',
    status: 'Last Updated Today'
  },
  {
    name: 'Logan Paul`s Project',
    status: 'Last Updated Cancelled'
  }

];


const renderProjects = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

const search = () => {
  let html = '';
  html += `
  <div class='search'>
  <input class='searchbar' id='searchbar' type='search' placeholder='Search All Projects' data-search>
  <button type="button" class="btn btn-success">New Project</button>
  </div>
  <div class='project-cards'>
  <div class='header'></div>
  <div class='body'></div>
  </div>
  `;
  
  renderProjects('#container', html)

  const searchProjects = document.querySelector("#searchbar")
  
  searchProjects.addEventListener("input", (e) => {
    const value = e.target.value
    projects.forEach(projects => {
      const isVisible = projects.name.includes(value)
      projects.element.classList.toggle('hide', !isVisible)
    });
    console.log(projects)
  });
}


let projectButton = document.querySelector('#proj')

projectButton.addEventListener("click", () => {
  search();
})


const projectCards = (array) => {
  let html = '';
  for (const proj of array) {
    html += `<div class="card w-75 mb-3">
    <div class="card-body">
    <h5 class="card-title">${proj.name}</h5>
    <li class="card-text">${proj.status}</li>
    
    </div>
    </div>`
  }
  
  renderProjects('#container2', html)
}

let projectButton2 = document.querySelector('#proj')

projectButton.addEventListener("click", () => {
  projectCards(projects);

  document.querySelector('#overviewContainer').hidden = true;
  

  return {
    name: proj.name,
    status: proj.status
  }
});
