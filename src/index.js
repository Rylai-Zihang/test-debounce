import debounce from './debounce'
const test = document.getElementById("test")
const result = document.getElementById("result")

const cancel = document.getElementById("cancel")

const increase = () => {
    result.innerHTML = ~~result.innerHTML + 1
}
const debounced = debounce(increase, 500)
test.addEventListener("input", debounced)

cancel.addEventListener("click", () => {
    debounced.cancel()
})