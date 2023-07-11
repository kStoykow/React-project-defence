// nice select

// $(document).ready(function () {
//     $('select').niceSelect();
// });

document.querySelector(document).ready(function () {
    document.querySelector('select').niceSelect();
});


// date picker

// $(function () {
//     $("#inputDate").datepicker({
//         autoclose: true,
//         todayHighlight: true
//     }).datepicker('update', new Date());
// });

document.querySelector(function () {
    document.querySelector("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// owl carousel slider js

// $('.team_carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     dots: true,
//     autoplay: true,
//     navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1,
//             margin: 0
//         },
//         576: {
//             items: 2,
//         },
//         992: {
//             items: 3
//         }
//     }
// })

document.querySelector('.team_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
        },
        992: {
            items: 3
        }
    }
})