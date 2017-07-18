fetch(
  "http://www.recipepuppy.com/api/?q=omelet"
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);

      return;
    }
    response.json().then(function(data) {
      console.log("test", response.url);
      console.log(data)
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

//   $(function() {
//     var $cells = $("td");

//     $("#search").keyup(function() {
//         var val = $.trim(this.value).toUpperCase();
//         if (val === "")
//             $cells.parent().show();
//         else {
//             $cells.parent().hide();
//             $cells.filter(function() {
//                 return -1 != $(this).text().toUpperCase().indexOf(val);
//             }).parent().show();
//         }
//     });
// });​