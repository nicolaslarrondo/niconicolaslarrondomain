

let array = [0,1,2];
let span = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
    ];
function like(id){
    array[id]++;
  //  span[id].innerHTML = array[id] + " likes";
    span[id].innerHTML = `${array[id]} likes`;
}