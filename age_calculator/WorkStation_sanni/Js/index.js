 const ageindays = () => {
    var birthyear = prompt('what year were you born... good friend' )
    var ageindays = (2022 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('you are ' + ageindays + ' days old.')
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(answer)
    document.getElementById('result').appendChild(h1)
    console.log(ageindays);
}


const reset = () => {
    document.getElementById('ageindays').remove();
}



