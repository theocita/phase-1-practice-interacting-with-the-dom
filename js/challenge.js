document.addEventListener("DOMContentLoaded", () => {
    counter()

    let interval = setInterval(incrementCounter, 1000)

    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let count = document.getElementById("counter")
        count.textContent = parseInt(count.textContent, 10) -1
    })

    const heart = document.getElementById("heart")
    let likes = {}
    heart.addEventListener("click", () => {
        let countValue = document.getElementById("counter").textContent
        if(likes[countValue]) {
            likes[countValue] += 1
        } else{
            likes[countValue] = 1
        }
        
        let li = document.createElement("li")
        let likes1 = document.querySelector(".likes")
        li.innerText = `${countValue} has been liked ${likes[countValue]}`
        likes1.appendChild(li)
    })
    const submit = document.getElementById("submit")

    const pause = document.querySelector("#pause")
    pause.addEventListener("click", () => {
        if(pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000)
        } else{
            pause.innerText = "resume"
            clearInterval(interval)
        }
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled
    })
    let commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const list = document.getElementById("list")
        let li = document.createElement("li")
        li.innerText = e.target[0].value
        list.appendChild(li)
        commentForm.reset()
    })
})

function counter() {
    incrementCounter()
}

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}

