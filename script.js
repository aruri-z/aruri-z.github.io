//selecting element
const h2 = document.querySelector('.cart') //cart
const select = document.querySelector('.select')
const done = document.querySelector('.done')
const button = document.getElementsByTagName('button')
const section = document.getElementsByClassName('products')
const catalog = document.getElementById('catalog')
const history = document.querySelector('.history')

// console.log(catalog);

//looping button
for (let i = 0; i < button.length; i++) {
	//add counters
	button[i].addEventListener('click', (e) => {
		let add = Number(h2.getAttribute('data-count') || 0)
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
		// console.log(e.pageX, e.pageY);

		span.appendChild(mImage)
		span.classList.add('active')
		setTimeout(() => {
			span.removeChild(mImage)
			span.classList.remove('active')
		}, 500)
		// console.log(span);


		select.addEventListener('click', deleteButton)
		// const p = select.querySelector('p')

		//tambah fitur deleteButton dan buynow
		function deleteButton(e) {
			// console.log(e.target);
			const parent = e.target.parentNode
			const target = e.target
			// console.log(parent);
			const delbut = document.getElementsByClassName('del-btn')[0]
			const greenBtn = document.getElementsByClassName('green-btn')[0]

			// console.log(target.classList);

			if (target.classList[0] === delbut.classList[0]) {
				parent.remove()
				h2.setAttribute('data-count', add--)
			} else if (target.classList[0] === greenBtn.classList[0]) {
				// alert('Terimakasih')
				h2.setAttribute('data-count', add--)
				parent.remove()


				// let hist = Number(history.getAttribute('data-count') || 0)
				// history.setAttribute('data-count', hist+1)
				history.classList.add('zero')

				// console.log(e.target.parentNode);

				done.appendChild(clone) //masih error parentNodenya masih sama kek si cart
				//kalo satu2 masih aman. add 1 -> buy -> aman
				// gak aman ->>>> add 1+1+1+1 ->>> buy --> hilang semua
				// yg udah di remove juga masuk ke history, kalo pencet remove terus add terus buy
				clone.lastElementChild.innerHTML = "<h5>Payment Successfull</h5>"

				if (clone) {
					history.onclick = () => {
						done.classList.toggle('display')
					}
				}
			}
		}

	})
}

const warning = document.getElementById('oops')
warning.innerText = "Oops! fitur 'buy-now' sedang dalam perbaikan"
warning.setAttribute('style', 'opacity')
warning.style.opacity = 0.3
