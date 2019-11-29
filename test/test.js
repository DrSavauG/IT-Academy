function myClick() {
    console.log('click');
    console.log(event.target);
}
// {/* <div id="one">One</div>  */}
let div = document.createElement('div');
div.classList = 'button'
div.innerHTML = 'ererere';
document.body.append(div);

document.querySelector('div').onclick = myClick;
// document.querySelector('html').onclick = myClick;
