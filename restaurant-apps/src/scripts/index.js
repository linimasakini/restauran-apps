import 'regenerator-runtime'; 
import '../styles/main.css';
import '../styles/responsive.css'



// toggle

const NavbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu-lainnya').onclick = () => {
    NavbarNav.classList.toggle('active')
}

// click dimanapun

const menulainnya = document.querySelector('#menu-lainnya');

document.addEventListener('click', function(e){
    if(!menulainnya.contains(e.target) && !NavbarNav.contains(e.target)){
        NavbarNav.classList.remove('active');
    }
})

async function loadNames() {
    const response = await import ('../DATA.json')
    .then (({default: json})=>{
        console.log(json)
        let jsonfile = json ['restaurants']
        let jsonlist = '';

        jsonfile.forEach(function(data){
            jsonlist += `
            <div class="list_item">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : 
                    <a href="#" class="list_item_rating_value">${data['rating']}</a>
                </p>
                <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
                <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
            `;
        })
        document.querySelector('#mcon').innerHTML= jsonlist;
    })
}

loadNames();


