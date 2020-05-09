// we have to call atleast one elemen of HTML so we are calling Body tag using ID
const body = document.getElementById('body')
//body.innerHTML = `<H1> Write Anything here... </H1>`

//body.innerHTML = `<H1> Write Anything not here... </H1>`
// var heading = document.createElement('H1')
// body.appendChild(heading)


// two method to create HTML using Js 
// > Template Literal + InnerHTML  === write extactly what you want in html 
// think we are creating things in body
// for ex. if you have to create a H1 tag ... using this method you will write body.innerHTML = `<H1> Write Anything here... </H1>` 
// > Create Element + AppendChild
// for ex. if u wanna do same thing ... 1) createElement 2) append Element
// var heading = document.createElement('H1') normal qoute
// for append u should have 2 things parent and child
// parent.appednChild(child)
// body.appendChild(heading)


// appedchild methdod can create one element at a time but it will not overright
// innerHTML methid will overright excitind code with new code.
var PageTitle = 'My Portfolio'

body.innerHTML = `<h2 id="pageTitle">${PageTitle}</h1>
                    <div id="grid"></div>
                    <div id="overlay"></div>
                    <div class="bodyOpacity"></div>`

const imgNames = [
    'argentina1',
    'argentina2',
    'dublin1',
    'bogota1',
    'escocia_endiburg1',
    'estocomo_suecia',
    'helsinki_finlandia1',
    'helsinky_finland2',
    'ilhadepascoa2',
    'ilhadepascoa1',
    'irlandadonorte2',
    'irlandadonorte1',
    'london1',
    'panama1',
    'oslonoroega',
    'scocia_endiburg2',
    'marosado1',
    'cancun1',
    'shibuya1',
    'hiroshima1'
]

const HTMLofImages = []

for (let oneImage of imgNames) {
    HTMLofImages.push(`<div class="imgBox">
                            <img src="./images/gallery/${oneImage}.jpg" title="${oneImage}" class="image">
                            <span class="thumbNail">Thumbnail</span>
                            <span class="hoverText">${oneImage}</span>
                        </div>`)
}

const grid = document.getElementById('grid')

grid.innerHTML = HTMLofImages.join(' ')


// calling image from grid which we created just before
const singleImage = document.querySelectorAll('.image')
//var hoverText = document.querySelectorAll('.hoverText')


for (let oneImageOfGrid of singleImage) {
    oneImageOfGrid.addEventListener('click', makeBig)
}

const overlay = document.getElementById('overlay')


function makeBig() {
    overlay.innerHTML = `<h1 class="bigImgTitle">${this.title}</h1>
                        <img class="bigImage" src="${this.src}">`;
    window.addEventListener('mouseup', closeMe);
}

function closeMe(ev) {
    const bigImage = document.querySelector('.bigImage');
    if (ev.target !== overlay && ev.target !== bigImage) {
        overlay.innerHTML = ``;
    }
}
