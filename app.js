const ul = document.getElementById('list-holder');
const btnSubmit = document.querySelector('input[type="submit"]');
const inputField = document.querySelector('input[type="text"]')
const searchField = document.querySelector('input[type="search"]');

btnSubmit.addEventListener('click', function(){
    if(inputField.value === ''){
        document.getElementById('error').innerText = "*Please type something*"
    }
    else{
        document.getElementById('error').innerText = "";
    let li = document.createElement('li');
    li.className='item';
    ul.append(li);
    li.innerText = inputField.value;
    const removeBtn = document.createElement('button');
    li.append(removeBtn)
    removeBtn.className = "btn";
    removeBtn.innerText="X"
    removeBtn.addEventListener('click', function(){
        ul.removeChild(li)
    })
}})

searchField.addEventListener('keydown',function(){
    let value = searchField.value.toLowerCase();
    Array.from(ul).forEach(function(ul){
        let searchName = ul.firstChild.textContent;
        console.log(searchName);
    })
})

