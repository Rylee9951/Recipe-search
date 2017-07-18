
function submit() {
  var input = document.getElementById('search').value
  fetch(
    "http://www.recipepuppy.com/api/?q=" + `${input}`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);

        return;
      }
      response.json().then(function(data) {
        console.log("test", response.url);
        displayInfo(data)
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

  let container = document.querySelector('#container')

  function displayInfo(data){
    let info = ''
      data.results.map(function(item){
        info += `
          <div class="recipeContainer">
            <a href="${item.href}">
              <div class="recipe">
                <img src="${item.thumbnail}"/>
                <p class="title">${item.title}</p>
              </div>
            </a>
          </div>
        ` 
      container.innerHTML = info
    })
  }
}