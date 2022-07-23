var facilitators, color;
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}
function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random() * n);
}
function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)];
}
facilitators = [];
color = ["#33CC00", "#FFFF00", "#CC66CC"];
document.getElementById("add").addEventListener("click", (event) => {
  if (getNumberOrString(document.getElementById("input").value) == "") {
    let element_added_info = document.getElementById("added-info");
    window.speechSynthesis.speak(
      new SpeechSynthesisUtterance("Please enter a name")
    );
  } else {
    facilitators.push(
      getNumberOrString(document.getElementById("input").value)
    );
    let element_added_info2 = document.getElementById("added-info");
    element_added_info2.innerText = "- Added Successffully";
    element_added_info2.style.backgroundColor = randomMember(color);
  }
});
// document.getElementById("select").addEventListener("click", (event) => {
//   let element_select_info = document.getElementById("select-info");
//   element_select_info.innerText = randomMember(facilitators);
// });
document.getElementById("show-all").addEventListener("click", () => {
  let element_list_of_facilitators = document.getElementById("list-of-items");
  element_list_of_facilitators.replaceChildren();
  facilitators.forEach((facilitators) => {
    let new_li = document.createElement("li");
    new_li.innerText = facilitators;
    element_list_of_facilitators.appendChild(new_li);
    
  });
});
