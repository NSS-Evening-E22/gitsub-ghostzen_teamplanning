const discussions  = [
    {
    id: "created",
    ticketLocation: "nss-evening-web-development/discussions-base",
    ticketName: "How To Prevent App From Automatically Crashing?",
    discussionPageName: "GhostZen_Help"
    },
    {
      id: "created",
      ticketLocation: "nss-evening-web-development/discussions-base",
      ticketName: "main.js not linking from folder and to the DOM",
      discussionPageName: "GhostZen_Help"
    },
    {
      id: "created",
      ticketLocation: "nss-evening-web-development/discussions-base",
      ticketName: "No output display for JS code",
      discussionPageName: "GhostZen_Help"
    },
    {
      id: "created",
      ticketLocation: "nss-evening-web-development/discussions-base",
      ticketName: "API won't connect. Tried everything!",
      discussionPageName: "GhostZen_Help"
    },
    ];
    
    const discussionToDOM = (selectId, htmlRender) => {
    const divContainer = document.querySelector(selectId);
    divContainer.innerHTML = htmlRender;
    };
    //create a filter to cycle between created and commented
    
    
    const createDiscussion = (array) => {
      let domString = "";
      for (item of discussions) {
        domString += 
    
       `
          <div class="container4two">

              <div class="mainDiscussLinks">

                <div class="discussTitle">
                <a href="" style="text-decoration: none; color:gray; padding-right:10px;">${item.ticketLocation}</span></a>
                <a href="" style="text-decoration: none; color:white;">${item.ticketName}</a>
                </div>
                <div>
                <img src="Images/prayHands.png" style=" height: 20px; width: 20px;">
                <a href="" style="text-decoration: none; color: rgb(111, 116, 121)">${item.discussionPageName}</a>
                </div>
                
              </div>
            
              <div class="iconPosition" >
                <div style="padding: 10px; box-sizing: content-box;">
                <img src="Images/Monica.jpg" style="border-radius: 2000px; height: 30px; width: 30px;">
                </div>
                <div style="padding: 10px; color:white">
                <a>1w</a>
                </div>
                <div style="padding: 10px; color: white;">
                  <img src="Images/chatbubble.png" style="width: 20px; height:20px;">
                  <a>1</a>
                </div>
                <div style="padding: 10px; box-sizing: content-box; ">
                <img src="Images/Checkmark.png" style="height: 20px; width: 20px;">
                </div>
              </div>
         </div>
    
      `
      };
      discussionToDOM('#discussContainer', domString);
    };
    const discussBtn = document.querySelector('#discussions');
    
   

  
    discussBtn.addEventListener('click', () => {
        createDiscussion();
    
    document.querySelector('#container').hidden = true;  
    document.querySelector('#discussContainer').hidden = false;    
    });


    