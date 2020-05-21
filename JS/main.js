const toggle_btn = document.querySelector('.navbar_toggle_btn');
const menu = document.querySelector('.navbar_menu');
const social_icons = document.querySelector('.navbar_social_icons');
let vh = 1;

toggle_btn.addEventListener('click', () => {

    /*토글 버튼을 클릭하게 되면 css의 다른 클래스를 불러와 바꿔주어 네비게이션 열고닫기 기능 구현*/
    menu.classList.toggle('active');
    social_icons.classList.toggle('active');
    
    /*네비게이션 버튼 클릭할때마다 높이 설정하기*/
    if (vh == 1) {
        const navbar = document.querySelector('.navbar');
        navbar.style.height = "30vh";
        vh = 2;
    } else {
        const navbar = document.querySelector('.navbar');
        navbar.style.height = "7vh";
        vh = 1;
    }

});