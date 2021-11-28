$('.header__nav').hcOffcanvasNav({
    disableAt: 1024,
    insertClose: true,
    insertBack: true,
    labelClose: 'Close',
    labelBack: 'Back'
});

$('.header__cooperation').click(function(){
    $('.header__cooperation > ul').slideToggle();
    $('.header__cooperation').toggleClass('rotate180');
});

const menuBtn = $('.header__cooperation > ul'),
      menu    = $('.header__cooperation');

$(document).click(function (e) {
    if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menuBtn.slideUp();
        menu.removeClass('is-active');
        menu.removeClass('rotate180');
    }
});

$('.header__catalogue').click(function(){
    $('.header__catalogue > ul').slideToggle();
});

$(document).click(function (e) {
    if ( !$('.header__catalogue > ul').is(e.target) && !$('.header__catalogue').is(e.target) && $('.header__catalogue').has(e.target).length === 0) {
        $('.header__catalogue > ul').slideUp();
        $('.header__catalogue').removeClass('is-active');
    }
});

let widthOfWrapper = document.querySelector('.header__wrap').offsetWidth;

$(window).on('resize', function() {
    widthOfWrapper = document.querySelector('.header__wrap').offsetWidth;
    document.querySelector('.header__cooperation > ul').style.width = widthOfWrapper + 'px';
});

document.querySelector('.header__cooperation > ul').style.width = widthOfWrapper + 'px';
document.querySelector('.header__catalogue > ul').style.width = widthOfWrapper / 4 + 'px';

$('.nav-content').append(`
    <form action="">
        <div class="header__radio-wrapper">
            <span class="header__radio-label">Язык</span>
            <div class="header__radio-box">
                <div class="header__language">
                    <label class="radio">
                        <input type="radio" name="language" checked>
                        <div class="header__img-wrap">
                            <img src="./img/russia.jpg" alt="russian">
                        </div>
                    </label>
                </div>
                <div class="header__language">
                    <label class="radio">
                        <input type="radio" name="language">
                        <div class="header__img-wrap">
                            <img src="./img/ukraine.jpg" alt="ukrainian">
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="header__radio-wrapper">
            <span class="header__radio-label">Валюта</span>
            <div class="header__radio-box">
                <div class="header__currency">
                    <label class="radio">
                        <input type="radio" name="currency">
                        <span>EUR</span>
                    </label>
                </div>
                <div class="header__currency">
                    <label class="radio">
                        <input type="radio" name="currency">
                        <span>USD</span>
                    </label>
                </div>
                <div class="header__currency">
                    <label class="radio">
                        <input type="radio" name="currency" checked>
                        <span>UAN</span>
                    </label>
                </div>
                <div class="header__currency">
                    <label class="radio">
                        <input type="radio" name="currency">
                        <span>RUB</span>
                    </label>
                </div>
            </div>
        </div>
    </form>
`);