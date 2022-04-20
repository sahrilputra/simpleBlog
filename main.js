const parentContainer =  document.querySelector('.container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('btn-read');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.more');

    currentText.classList.toggle('more--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})