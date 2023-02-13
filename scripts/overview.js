const ovRepos = [
  {
    id: 1,
    title: "gatsby-workshop",
    description: "This workshop covers the fundmentals of developing fast, accessible sites with Gatbsy, a React Framework, and dive deep into the building blocks you'll need to build your oen custom Gatsby sites.",
    starNum: 38,
    forkNum: 8
  },
  {
    id: 2,
    title: "React-Ladies",
    description: "We're a group of women and non-binary ReactJS enthusiasts in New York City (and beyond).",
    starNum: 99,
    forkNum: 26
  },
  {
    id: 3,
    title: "getting-started-with-open-source",
    description: "This is a presentation on Getting Started With Open Source",
    starNum: 6,
    forkNum: 0
  },
  {
    id: 4,
    title: "httriri",
    description: "HHTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs",
    starNum: 37,
    forkNum: 22
  },
  {
    id: 5,
    title: "RBB-Website",
    description: "Website to help connect black-owned businesses with consumers and resources",
    starNum: 99,
    forkNum: 75
  },
  {
    id: 6,
    title: "affirmation_generator",
    description: "A random affirmation generator written with ReactJS :-)",
    starNum: 52,
    forkNum: 32
  }
]

//Render to DOM function
const overviewToDom = (divId, htmlToRender) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = htmlToRender;
};

// Rendering the repo cards to DOM
const repoApp = (ovRepos) => {
  let ovDomString = '';

  for (const repo of ovRepos) {
    ovDomString += `<div class="div-il">
    <div class="repoCard-box">
      <div class="repoCard">
        <div class="repoCard-title">
          <a class="github-button" href="" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-repo-template" data-size="large" aria-label="Use this template buttons/github-buttons on GitHub">${repo.title}</a>
        </div>
        <div class="repoCard-desc">
          <p>${repo.description}</p>
        </div>
        <div class="repoCard-statusBar">
          <div class="repo-lang">
            <span class="repo-lang-color"></span>
            <span class="lang">JavaScript</span>
          </div>
          <div class="repo-star">
            <a class="github-button" href="https://github.com/buttons/github-buttons" data-color-scheme="no-preference: dark; light: dark_dimmed; dark: dark;" data-icon="octicon-star" aria-label="Star buttons/github-buttons on GitHub">${repo.starNum}</a>
          </div>
          <div class="repo-fork">
            <a class="github-button" href="https://github.com/buttons/github-buttons/fork" data-color-scheme="no-preference: dark; light: dark_dimmed; dark: dark;" data-icon="octicon-repo-forked" aria-label="Fork buttons/github-buttons on GitHub">${repo.forkNum}</a>
          </div>
        </div>
      </div>
    </div>
    </div>`
  }

  overviewToDom('.pinned-repos', ovDomString)
}

const newPinnedRepo = (event) => {
  event.preventDefault();

  const randomNumber = Math.floor(Math.random() * 3);

  const randomRepo = ovRepos[randomNumber];

  const newPinRepo = {
    id: ovRepos.length + 2,
    title: document.querySelector("#repo-title").value,
    description: document.querySelector("#repo-desc").value,
    starNum: randomRepo.starNum,
    forkNum: randomRepo.forkNum
  };

  ovRepos.push(newPinRepo);
  repoApp(ovRepos);

  document.querySelector("#createPinRepoForm").reset()
}

const overviewDisplay = () => {
  document.querySelector('#container').hidden = true;
  document.querySelector('#overviewContainer').hidden = false;
  
}
const startOverviewApp = () => {
  repoApp(ovRepos);

  // document.querySelector("#over").addEventListener('click', overviewDisplay)

  document.querySelector("#new-pin-repo").addEventListener('click', newPinnedRepo)

}

startOverviewApp();
