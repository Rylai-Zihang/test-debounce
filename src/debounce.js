function debounce(fn, time) {
    let timer = null
    const result = function () {
        // 如果正在计时，则清楚定时器
        if (timer) clearTimeout(timer)
        // 重新计时
        timer = setTimeout(() => {
            fn()
        }, time)
    }
    function cancel() {
        if (timer) {
            clearTimeout(timer)
        }
    }
    result.cancel = cancel
    return result
}

export default debounce