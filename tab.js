//버튼1 누르면
//    -
//    모든버튼에 붙은 orange 클래스명 제거 -
//    버튼1에 orange 클래스명 추가 -
//    모든 div에 붙은 show 클래스명 제거 -
//    모든 div1에 show 클래스명 추가

/*$('.tab-button').eq(0).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
});
$('.tab-button').eq(1).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show');
});
$('.tab-button').eq(2).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show');
});*/
//for (let i = 0; i < $('.tab-button').length; i++) {
//    $('.tab-button').eq(i).on('click', function () {
//        탭열기(i);
//    });
//}
$('.list').click(function (e) {
    console.log(e.target.dataset.id);
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}
