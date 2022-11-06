window.onload =  loader;

function loader() {
    setTimeout(function() {
        document.querySelector('body').style.display = 'block';
        document.querySelector('.showbox').style.display = 'none';
    }, 300);
}
