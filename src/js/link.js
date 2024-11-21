export function link() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            for (const elem of anchors) {
                elem.classList.remove('on')
            }

            this.classList.add('on')

            const targetId = this.getAttribute('href')

            const targetElem = document.querySelector(targetId)
            if (targetElem) {
                targetElem.scrollIntoView({ behavior: "smooth" })
            }
        })
    })
}