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
    newP.id = 'new-p'
    console.log(typeof mockify(textToString))
    document.getElementById('returned').appendChild(newP)
    const copyButton = document.createElement('button')
    copyButton.innerText = 'Copy to Clipboard'
    copyButton.addEventListener('click', () => {
        document.getElementById('input').select()
        document.execCommand('copy');
        alert(`copied: ${textToString}`)
    })
    document.getElementById('returned').appendChild(copyButton)
 })    

 console.log(mockify('This is a test string'))
 