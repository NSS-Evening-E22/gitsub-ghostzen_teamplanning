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
      <div style="display: flex; border: solid gray 1px;">  
          <div class="mainDiscussLinks">

            <div class="discussTitle">
            <a href=""><span style="color:gray; padding-right:10px;">${item.ticketLocation}</span></a>
            <a href=""><span style="color:white;">${item.ticketName}</span></a>
            </div>
            <div style="background-color: red;">
            <img src="">
            <a href="">${item.discussionPageName}</a>
            </div>
            
          </div>
        
          <div class="iconPosition" >

            <div style="padding: 10px; box-sizing: content-box;">
            <img src="Images/Monica.jpg" style="border-radius: 2000px; height: 40px; width: 40px;">
            </div>

            <div style="padding: 10px; color:white">
            <a>1w</a>
            </div>

            <div style="padding: 10px; color: white">
              <a>What</a>
              <a>1</a>
            </div>

            <div style="padding: 10px; box-sizing: content-box;">
            <img src="Images/Checkmark.png" style="height: 20px; width: 20px;">
            </div>

          </div>
     </div>
  </div>`
  };
  discussionToDOM("#container", domString);
};

container.style.display = "block";

createDiscussion(discussions);
