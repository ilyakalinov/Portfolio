export default class ScrollTo {
    constructor() {
        this.anchors = document.querySelectorAll('.menu__item');
        this.aDef = document.querySelectorAll('a');
    }

    getAncors () {
        this.aDef.forEach(a => a.addEventListener('click', (e) => e.preventDefault()))
        this.anchors.forEach(anc => {
            anc.addEventListener('click', (e) => {
                e.preventDefault()
                const id = e.target.parentElement.getAttribute('href')
                this.toBlock(id);
            })
        })
    }

    toBlock(id) {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    }
    
    init() {
        this.getAncors()
    }
}