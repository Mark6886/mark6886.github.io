const $ = {}

function createModal(title, text){
    const modal = document.createElement("div")
    modal.classList.add("modal");
    modal.insertAdjacentHTML("afterbegin", `
    <div class = "modal-overlay">
        <div class = "modal-main">
            <div class = "modal-title">` + title + `</div>
            <div class = "modal-content">` + text + `</div>
            <div class = "modal-button">
                <div class = "modal-ok" onclick = "modalClose()">Ок</div>
            </div>
        </div>
    </div>           
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(title, text){
    const _modal = createModal(title, text)
    return {
        open(){
            _modal.classList.add('open')
        },
        close(){
            _modal.classList.remove('open')
        },
        destroy(){
            
        }
    }
}
