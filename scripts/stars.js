const lists=[{
        title:"Misc"
    },
    {
        title:"Favorites"
    }
];
//Hide the form till clicked
const hideForm = () => {
    document.getElementById("top").style.display ='none'
};
const showForm= ()=>{
    document.getElementById("top").style.display ='block'
};
const starsButton = document.querySelector("#stars");

//Click the start button to show the form
const eventListener = () => {
    starsButton.addEventListener('click', showForm)
};


//Show items to the dom
const showToDom =(divId,htmlToShow)=>{
    const selectedDiv= document.querySelector(divId);
    selectedDiv.innerHTML= htmlToShow
   };

const listsOnDom = (array) => {
    let domString =''
    for (const item of array){
        domString +=`
        <div id="listGroup">
            <ul class="list-group">
                <li class="list-group-item">${item.title}</li>
            </ul>
        </div>
    </div>`;
    }
    showToDom('#listContainer', domString);
}; 



//Page setup with title and buttons
const createList= () => {
    const domString = `
      <!-- Button trigger modal -->
      <h3>Lists</h3> 
          <form>
          <div id="formInput">
          <input type="text" placeholder="Search" id="inputText">
          <button type="button" class="btn btn-light">Sort</button>
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-video">
      Create list
      </button>
      <!-- Modal -->
      <div class="modal fade" id="add-video" tabindex="-1" aria-labelledby="add-video" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Video</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modal-body">
            <form>
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Title" id="title" aria-label="title" required>
              <label for="title">Title</label>
            </div>
        
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="Write a description" id="title" aria-label="title" required>
              <label for="title">Write a description</label>
            </div>
            <button 
              type="submit" 
              class="btn btn-success" 
            >
              Create
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
          </div>
        </form>
          <div id="listContainer"></div>
      
    `;
    showToDom('#top', domString);

    const listForm = document.querySelector('form')
    listForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newList={
          title: document.querySelector('#title').value
      }
      lists.push(newList);
      listForm.reset();
      listsOnDom(lists);
    //   formModal.hide();
    });
  };




  
  // //Hide the form and call the function for the button
const starting = ()=> {
    eventListener();
    hideForm();
    createList();
    listsOnDom(lists)
};
starting();