function onKeyUp(event) {
    console.log('onKeyUp:' + event.key);
    }
    document.addEventListener('keyup', onKeyUp);
    
var article=document.getElementById('electriccars');

article.dataset.columns //"3"
article.dataset.indexNumber //"12314"
article.dataset.parent//"cars"