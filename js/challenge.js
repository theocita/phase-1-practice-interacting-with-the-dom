document.addEventListener("DOMContentLoaded", () => {
    counter()

    const interval = setInterval(incrementCounter,1000)

    let plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    let minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let count = document.getElementById("counter")
        count.textContent = parseInt(count.textContent, 10) -1
    })

    let likes = document.getElementById("heart")
    let submit = document.getElementById("submit")

    let pause = document.getElementById("pause")
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
    let commentForm = document.getElementById("comment-form")
    commentForm.addEventListener("submit", (e) => {
        
    })
})

function counter() {
    incrementCounter()
}

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}
