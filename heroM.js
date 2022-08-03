
const createButton = document.querySelector(".create-button")
const body = document.querySelector("body")
function heroCard() {
    const inputName = document.querySelector("input").value
    const inputStory = document.querySelector("textarea").value
    const imageLink = document.querySelector(".link-img").value
    const inputRole = document.querySelector('input[name="btnradio"]:checked').value
    const resultContainer = document.createElement("div")
    resultContainer.setAttribute("class", "container result-container mb-4 py-3")
    const divRow = document.createElement("div")
    divRow.setAttribute("class", "row")
    resultContainer.appendChild(divRow)
    const divCol = document.createElement("div")
    divCol.setAttribute("class", "col")
    divRow.appendChild(divCol)
    divCol.innerHTML = `<div class="row mb-4">
    <div class="col image-hero d-flex justify-content-center">
        <img src="img/${imageLink}" alt="hero image">
        
    </div>
</div>
<div class="row mb-1 d-flex justify-content-center">
    <div class="col-2  ">Name </div>
    <div class="col-2 ">${inputName}</div>
</div>
<div class="row mb-5 d-flex justify-content-center">
    <div class="col-2">Role</div>
    <div class="col-2 ">${inputRole}</div>
</div>
<div class="row">
    <div class="col d-flex justify-content-center">
        <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
             Hero Story
        </button>
            
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-dark" id="staticBackdropLabel">Story</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-dark">${inputStory}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>`
    const removeButton = document.createElement("button")
    removeButton.setAttribute("type", "button")
    removeButton.setAttribute("class", "btn-close remove-button")
    removeButton.setAttribute("aria-label", "Close")
    divCol.appendChild(removeButton)
{/* <button type="button" class="btn-close remove-button" data-bs-dismiss="modal" aria-label="Close"></button> */}
    divRow.appendChild(divCol)
    body.appendChild(resultContainer)
    removeButton.addEventListener("click", function() {
        removeButton.parentElement.parentElement.parentElement.remove()
    })
}

// const removeButton = document.querySelector(".remove-button")
// removeButton.addEventListener("click", function(){
//     removeButton.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    
// })
 createButton.addEventListener("click", function() {
    heroCard() 
 })

