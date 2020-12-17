//selecting element
const h2 = document.querySelector('h2')
const select = document.querySelector('.select')
const button = document.getElementsByTagName('button')
const section = document.getElementsByClassName('products')

//looping button
for (but of button) {
    //add counters
    but.addEventListener('click', (e) => {
        var add = Number(h2.getAttribute('data-count') || 0)
        h2.setAttribute('data-count', add + 1)
        h2.classList.add('zero')

        //select parent button ==> section
        const parent = e.target.parentNode
        //clone isinya & masukkan kedalam div class select
        const clone = parent.cloneNode(true)
        select.appendChild(clone)
        clone.lastElementChild.innerText = "Buy-now"

        if (clone) {
            h2.onclick = () => {
                select.classList.toggle('display')
            }
        }


        //moving animation
        const image = e.target.parentNode.querySelector('img')
        const span = e.target.parentNode.querySelector('span')
        const mImage = image.cloneNode(false)
        //  console.log(mImage);
        // console.log(span);

        span.appendChild(mImage)
        span.classList.add('active')
        setTimeout(() => {
            span.removeChild(mImage)
            span.classList.remove('active')
        }, 500)

        //add remove button
        select.addEventListener('click', deleteButton)
        const p = select.querySelector('p')

        function deleteButton(e) {
            // console.log(e.target);
            const parent = e.target.parentNode
            // console.log(parent);
            parent.style.display = 'none'
            h2.setAttribute('data-count', add--)
        }

    })
}

