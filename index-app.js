let dropBtn = document.querySelector('.drop-btn.index');
let activeBtns = document.querySelectorAll('.btn-link');

dropBtn.addEventListener('click', () => {
    let ul = document.querySelector('.dropdown-menu');

    if (ul.style.display === "block") {
        ul.style.display = 'none';
    } else {
        ul.style.display = "block";
    }
});

activeBtns
    .forEach(btn => {
        btn.addEventListener('click',(ev) => {

            activeBtns
                .forEach(btns => btns.classList.remove('active'));

          if (!btn.classList.contains('active')){
              btn.classList.add('active');
          }
        })
    })


console.log(activeBtns);


// Here i read url for active link buttons in NAV (HEADER)
let currUrl = window.location.href;
let urlText = currUrl.match('/\\w+.html').toString();
console.log(urlText.substr(1,urlText.length-6));