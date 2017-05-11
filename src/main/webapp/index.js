function getRandomNumber(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var response = JSON.parse(xhr.responseText)
            callback(response.randomNumber)
        }
    }
    xhr.send()
}

function sortNumbersAndShowThem(numbers) {
    if (numbers.length === 3) {
        numbers.sort()

        numbers.forEach(function(n) {
            var ul = document.getElementById('numbers')
            var li = document.createElement('li')
            li.textContent = n
            ul.append(li)
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded')
    var numbers = []

    // Solution A
    getRandomNumber('/a', function(numberA) {
        console.log('a')
        numbers.push(new Number(numberA))
        sortNumbersAndShowThem(numbers)
    })

    getRandomNumber('/b', function(numberB) {
        console.log('b')
        numbers.push(new Number(numberB))
        sortNumbersAndShowThem(numbers)
    })

    getRandomNumber('/c', function(numberC) {
        console.log('c')
        numbers.push(new Number(numberC))
        sortNumbersAndShowThem(numbers)
    })

//    Solution B
//
//    getRandomNumber('/a', function(numberA) {
//        console.log('a')
//        numbers.push(new Number(numberA))
//
//        getRandomNumber('/b', function(numberB) {
//            console.log('b')
//            numbers.push(new Number(numberB))
//
//            getRandomNumber('/c', function(numberC) {
//                console.log('c')
//                numbers.push(new Number(numberC))
//
//                sortNumbersAndShowThem(numbers)
//            })
//        })
//    })
})
