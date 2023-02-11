const discussions  = [
{
ticketLocation: "nss-evening-web-development/discussions-base",
ticketName: "How To Prevent App From Automatically Crashing?",
discussionPageName: "GhostZen_Help"
},
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




const createDiscussion = (array) => {
  let domString = "";
  for (item of discussions) {
    domString += 
    
   `<div class="overallDiscussionCard">
    <div class="card-body">
      <div style="display: flex;">  
          <div class="mainDiscussLinks">
            <div class="discussTitle" style="padding-right: 20px;">
            <a href=""><span style="color:gray; padding-right:10px;">${item.ticketLocation}</span></a>
            <a href=""><span style="color:white;">${item.ticketName}</span></a>
            </div>
            <div style="background-color: red;">
            <img src="">
            <a href="">${item.discussionPageName}</a>
            </div>
          </div>
        
          <div>
          <img src="Images/Monica.jpg" style="border-radius: 2000px; height: 40px; width: 40px;">
          </div>
          <div  style="background-color: rgb(54, 54, 54)";>
          <p><span style="color:white;">Time</span></p>
          </div>
          <div>
            <a>What</a>
            <a>Yo</a>
          </div>
          <div>
          <img src="/Images/Checkmark.png">
          </div>

     </div>
  </div>
  </div>`
  };
  discussionToDOM("#container", domString);
};

container.style.display = "block";

createDiscussion(discussions);
