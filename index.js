import {profile, navLinkList} from './src/script/data/datasource.js';
import updateTime from "./src/script/moment/index.moment.js";

const navLink = () => {
    const linkList = navLinkList[0];
    const titleList = navLinkList[1];

    for(let i = 0; i < linkList.length; i++){
        $('.nav-links').append(`<li>${linkList[i]}</li>`);
    }

    for(let j = 0; j < titleList.length; j++){
        if(j === 0){
            $('.clock').append(`<p>" ${titleList[j]} "</p>`);
        } else {
            $('.clock').append(`<p>${titleList[j]}</p>`);
        }
    };
}

navLink();

const navSlide = () => {
    const links = document.querySelectorAll('.nav-links li');

    $('.burger').click(() => {
        $('.nav-links').toggleClass('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })

    });
}

navSlide();

const main = () => {
    $('.article-text button').click(() => {
        $('article').toggleClass('disable');
    })

    const [name, paragraph1, paragraph2, paragraph3] = profile[0];
    $('.article-text button').before(`
        <h1>${name}</h1>
        <br>
        <p>${paragraph1}</p>
        <p>${paragraph2}</p>
        <p>${paragraph3}</p>
        `
    )

    // Menggunakan ForEach Dari API Local
    const profileSatu = profile[1];
    profileSatu.forEach((profileFirst) => {
        $('.first').append(
            `<div class="main-content" id="mmacareer">
                <p>${profileFirst.text1}</p>
                <img src=${profileFirst.text2} alt=${profileFirst.text3} class="early">
            </div>`
        )
    });

    const profileDua = profile[2];
    const profileTiga = profile[3];
    const profileEmpat = profile[4];
    const profileLima = profile[5];
    const profileEnam = profile[6];

        $('.second').append(
            `
            <h3>${profileDua.year}</h3>
            <div class="main-content ufc-career" id="ufcareer">
                <p>${profileDua.text1}</p>

                <img src=${profileDua.img} alt=${profileDua.year}>
            </div>

            <h3>${profileTiga.year}</h3>
            <div class="main-content">
                <p>${profileTiga.text1}</p>

                <div class="img-content">
                    <img src=${profileTiga.img} alt=${profileTiga.year}>
                    <img src=${profileTiga.img2} alt=${profileTiga.year}>
                </div>
            </div>

            <h3>${profileEmpat.year}</h3>
            <div class="main-content ufc-career">
                <p>${profileEmpat.text1}</p>

                <div class="img-content none">
                    <img src=${profileEmpat.img}>
                    <img src=${profileEmpat.img2}>
                    <img src=${profileEmpat.img3}>
                    <img src=${profileEmpat.img4}>
                </div>
            </div>

            <div class="alt-content">
                <img src=${profileEmpat.img}>
                <img src=${profileEmpat.img2}>
                <img src=${profileEmpat.img3}>
                <img src=${profileEmpat.img4}>
            </div>


            <h3>${profileLima.year}</h3>
            <div class="main-content ufc-career">
                <p>${profileLima.text1}</p>

                <div class="img-content none">
                    <img src=${profileLima.img}>
                    <img src=${profileLima.img2}>
                    <img src=${profileLima.img3}>
                    <img src=${profileLima.img4}>
                    <img src=${profileLima.img5}>
                </div>
            </div>

            <div class="alt-content">
                <img src=${profileLima.img}>
                <img src=${profileLima.img2}>
                <img src=${profileLima.img3}>
                <img src=${profileLima.img4}>
                <img src=${profileLima.img5}>
            </div>

            <h3>${profileEnam.title}</h3>
            <div class="main-content">
                <p>${profileEnam.text1}</p>

                <img src=${profileEnam.img}>
            </div>
            `
        )

}

main();

const footer = () => {
    const insta = document.querySelector('.instagram');
    const instaColor = document.getElementById('instagram');
    insta.addEventListener('mouseenter', () => {
        instaColor.style.backgroundColor = 'black';
    })
    insta.addEventListener('mouseleave', () => {
        instaColor.style.backgroundColor = 'white';
    })

    const git = document.querySelector('#Github');
    const gitColor = document.getElementById('Github');
    git.addEventListener('mousemove', () => {
        gitColor.style.backgroundColor = 'black';
    })
    git.addEventListener('mouseleave', () => {
        gitColor.style.backgroundColor = 'white';
    })

    const linkkedin = document.querySelector('.linkedin');
    const linkColor = document.getElementById('linkedin');
    linkkedin.addEventListener('mouseenter', () => {
        linkColor.style.backgroundColor = 'black';
    })
    linkkedin.addEventListener('mouseleave', () => {
        linkColor.style.backgroundColor = 'white';
    })
};
footer();