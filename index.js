const ask = document.getElementsByClassName("asked");
const arrow = document.getElementsByClassName("arrow-bottom");


for(let i = 0; i < ask.length; i++) {
    ask[i].addEventListener('click', (event)=> { 
        let searchActive = document.querySelector('.active');
        let h4;
        if(searchActive) {
            h4 = searchActive.firstElementChild.firstElementChild;
        }
        if(h4 == ask[i]) {
           searchActive.classList.toggle('active');
        } else {
            searchActive?.classList.remove('active');
            ask[i].parentElement.parentElement.classList.toggle('active');
        }

        
    
    });
    
    
}