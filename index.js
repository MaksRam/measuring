let hikingTrips = []
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const climbEl = document.getElementById("climb-el")
const inputBtn = document.getElementById("input-btn")
const endBtn = document.getElementById("end-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    hikingTrips.push({
        mountain: inputEl.value,
        length: Number(lengthEl.value),
        height: Number(climbEl.value)
    })
    inputEl.value = ''
    lengthEl.value = ''
    climbEl.value = ''
    console.log(hikingTrips)
})

function render(leads) {
    let listItems = ""
    for (el in leads) {
        listItems += `
            <li>
        ${leads[el].mountain}: length - ${leads[el].length} km, height - ${leads[el].height} km, total - ${leads[el].length + leads[el].height} km 
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

endBtn.addEventListener('click', function(){
    render(hikingTrips)
})