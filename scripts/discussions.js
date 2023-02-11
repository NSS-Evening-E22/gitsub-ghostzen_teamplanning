const discussions  = [
{
ticketLocation: "nss-evening-web-development/discussions-base",
ticketName: "How To Prevent App From Automatically Crashing?",
discussionPageName: "GhostZen_Help"
}
];

const discussionToDOM = ( selectId, htmlRender) => {
const divContainer = document.querySelector(selectId);
divContainer.innerHTML = htmlRender;
};

const createDiscussion = () => {
  let domString = "";
  for ( const i in discussions) {
    domString += 
    `<div class="card">
    <div class="card-body">
      <div>
        <div class = "discussTitle">
        <a href=""><span style="color:gray;">${discussions.ticketLocation}</span></a>
        <a href=""><span style="color:white;">${discussions.ticketName}</span></a>
        </div>
        <div>
        <img src="">
        <a href="">${discussions.discussionPageName}</a>
        </div>
      </div>
      <div class="discussIcons">
        <img src="">
        <a></a>
        <p>Time</p>
        <img src="">
      </div>
    </div>
  </div>`
  }

  discussionToDOM("#container", domString);
};
