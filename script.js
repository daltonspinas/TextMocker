function mockify (str) {
    return str.split("").map((el, idx) => {
        if(idx % 2 === 1){
           return el.toUpperCase()
        }
        else{
            return el.toLowerCase();
        }
    }).join(" ")
}

 document.getElementById("mock-submit").addEventListener("click", (evt) => {
     evt.preventDefault()
    const textToString = document.getElementById('input').value
    let newP = document.createElement('pre')
    newP.innerHTML = mockify(textToString);
    console.log(typeof mockify(textToString))
    document.getElementById('returned').appendChild(newP)
    return false;
 })    

 console.log(mockify('This is a test string'))
 