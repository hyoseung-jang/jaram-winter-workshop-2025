/*
Template: CloudBOX - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Fixed Nav
:: Scroll up menu
:: Magnific Popup
:: Ripple Effect
:: Sidebar Widget
:: Page Loader
:: Owl Carousel
:: Counter
:: Progress Bar
:: Page Menu
:: Close  navbar Toggle
:: Mailbox
:: chatuser
:: chatuser main
:: Chat start
:: todo Page
:: user toggle
:: Scroll up horizontal menu
:: Data tables
:: Form Validation
:: Active Class for Pricing Table
:: Flatpicker
:: Scrollbar
:: checkout
:: Datatables
:: image-upload
:: video
:: Button
:: Pricing tab
:: menu click li
:: tab sidebar back close
:: Remove collapse panel
:: Current Time

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {



"use strict";

jQuery(document).ready(function () {

    /*---------------------------------------------------------------------
    Tooltip
    -----------------------------------------------------------------------*/
    jQuery('[data-toggle="popover"]').popover();
    jQuery('[data-toggle="tooltip"]').tooltip();

    /*---------------------------------------------------------------------
    Fixed Nav
    -----------------------------------------------------------------------*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.iq-top-navbar').addClass('fixed');
        } else {
            $('.iq-top-navbar').removeClass('fixed');
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.white-bg-menu').addClass('sticky-menu');
        } else {
            $('.white-bg-menu').removeClass('sticky-menu');
        }
    });

    /*---------------------------------------------------------------------
       Scroll up menu
    -----------------------------------------------------------------------*/
    var position = $(window).scrollTop();
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        //  console.log(scroll);

        if (scroll < position) {
            $('.tab-menu-horizontal').addClass('menu-up');
            $('.tab-menu-horizontal').removeClass('menu-down');
        } else {
            $('.tab-menu-horizontal').addClass('menu-down');
            $('.tab-menu-horizontal').removeClass('menu-up');
        }
        if (scroll == 0) {
            $('.tab-menu-horizontal').removeClass('menu-up');
            $('.tab-menu-horizontal').removeClass('menu-down');
        }
        position = scroll;
    });


    /*---------------------------------------------------------------------
    Magnific Popup
    -----------------------------------------------------------------------*/
    if (typeof $.fn.magnificPopup !== typeof undefined) {
        jQuery('.popup-gallery, .icon-grid').magnificPopup({
            delegate: 'a.image-popup-vertical-fit',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }


    /*---------------------------------------------------------------------
    Ripple Effect
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', ".iq-waves-effect", function (e) {
        // Remove any old one
        jQuery('.ripple').remove();
        // Setup
        let posX = jQuery(this).offset().left,
            posY = jQuery(this).offset().top,
            buttonWidth = jQuery(this).width(),
            buttonHeight = jQuery(this).height();

        // Add the element
        jQuery(this).prepend("<span class='ripple'></span>");


        // Make it round!
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        let x = e.pageX - posX - buttonWidth / 2;
        let y = e.pageY - posY - buttonHeight / 2;


        // Add the ripples CSS and start the animation
        jQuery(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });

    /*---------------------------------------------------------------------
     Sidebar Widget
     -----------------------------------------------------------------------*/

    jQuery(document).on("click", '.iq-menu > li > a', function () {
        jQuery('.iq-menu > li > a').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
    });

    // Active menu
    var parents = jQuery('li.active').parents('.iq-submenu.collapse');

    parents.addClass('show');


    parents.parents('li').addClass('active');
    jQuery('li.active > a[aria-expanded="false"]').attr('aria-expanded', 'true');

    /*---------------------------------------------------------------------
    FullScreen
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.iq-full-screen', function () {
        let elem = jQuery(this);
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && // Mozilla
            !document.webkitFullscreenElement && // Webkit-Browser
            !document.msFullscreenElement) { // MS IE ab version 11

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
    });


    /*---------------------------------------------------------------------
       Page Loader
       -----------------------------------------------------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay().fadeOut("");



    /*---------------------------------------------------------------------
    Owl Carousel
    -----------------------------------------------------------------------*/
    jQuery('.owl-carousel').each(function () {
        let jQuerycarousel = jQuery(this);
        jQuerycarousel.owlCarousel({
            items: jQuerycarousel.data("items"),
            loop: jQuerycarousel.data("loop"),
            margin: jQuerycarousel.data("margin"),
            nav: jQuerycarousel.data("nav"),
            dots: jQuerycarousel.data("dots"),
            autoplay: jQuerycarousel.data("autoplay"),
            autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
            navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: jQuerycarousel.data("items-mobile-sm"),
                    nav: false,
                    dots: true
                },
                // breakpoint from 480 up
                480: {
                    items: jQuerycarousel.data("items-mobile"),
                    nav: false,
                    dots: true
                },
                // breakpoint from 786 up
                786: {
                    items: jQuerycarousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: jQuerycarousel.data("items-laptop")
                },
                1199: {
                    items: jQuerycarousel.data("items")
                }
            }
        });
    });


    /*---------------------------------------------------------------------
    Counter
    -----------------------------------------------------------------------*/
    if (window.counterUp !== undefined) {
        const counterUp = window.counterUp["default"]
        const $counters = $(".counter");
        $counters.each(function (ignore, counter) {
            var waypoint = new Waypoint({
                element: $(this),
                handler: function () {
                    counterUp(counter, {
                        duration: 1000,
                        delay: 10
                    });
                    this.destroy();
                },
                offset: 'bottom-in-view',
            });
        });
    }


    /*---------------------------------------------------------------------
    Progress Bar
    -----------------------------------------------------------------------*/
    jQuery('.iq-progress-bar > span').each(function () {
        let progressBar = jQuery(this);
        let width = jQuery(this).data('percent');
        progressBar.css({
            'transition': 'width 2s'
        });

        setTimeout(function () {
            progressBar.appear(function () {
                progressBar.css('width', width + '%');
            });
        }, 100);
    });

    jQuery('.progress-bar-vertical > span').each(function () {
        let progressBar = jQuery(this);
        let height = jQuery(this).data('percent');
        progressBar.css({
            'transition': 'height 2s'
        });
        setTimeout(function () {
            progressBar.appear(function () {
                progressBar.css('height', height + '%');
            });
        }, 100);
    });



    /*---------------------------------------------------------------------
    Page Menu
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.wrapper-menu', function () {
        jQuery(this).toggleClass('open');
    });

    jQuery(document).on('click', ".wrapper-menu", function () {
        jQuery("body").toggleClass("sidebar-main");
    });


    /*---------------------------------------------------------------------
     Close  navbar Toggle
     -----------------------------------------------------------------------*/

    jQuery('.close-toggle').on('click', function () {
        jQuery('.h-collapse.navbar-collapse').collapse('hide');
    });


    /*---------------------------------------------------------------------
    Mailbox
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', 'ul.iq-email-sender-list li', function () {
        jQuery(this).next().addClass('show');
        // jQuery('.mail-box-detail').css('filter','blur(4px)');
    });

    jQuery(document).on('click', '.email-app-details li h4', function () {
        jQuery('.email-app-details').removeClass('show');
    });

    /*---------------------------------------------------------------------
    chatuser
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.chat-head .chat-user-profile', function () {
        jQuery(this).parent().next().toggleClass('show');
    });
    jQuery(document).on('click', '.user-profile .close-popup', function () {
        jQuery(this).parent().parent().removeClass('show');
    });

    /*---------------------------------------------------------------------
    chatuser main
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.chat-search .chat-profile', function () {
        jQuery(this).parent().next().toggleClass('show');
    });
    jQuery(document).on('click', '.user-profile .close-popup', function () {
        jQuery(this).parent().parent().removeClass('show');
    });

    /*---------------------------------------------------------------------
    Chat start
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '#chat-start', function () {
        jQuery('.chat-data-left').toggleClass('show');
    });
    jQuery(document).on('click', '.close-btn-res', function () {
        jQuery('.chat-data-left').removeClass('show');
    });
    jQuery(document).on('click', '.iq-chat-ui li', function () {
        jQuery('.chat-data-left').removeClass('show');
    });
    jQuery(document).on('click', '.sidebar-toggle', function () {
        jQuery('.chat-data-left').addClass('show');
    });

    /*---------------------------------------------------------------------
    todo Page
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.todo-task-list > li > a', function () {
        jQuery('.todo-task-list li').removeClass('active');
        jQuery('.todo-task-list .sub-task').removeClass('show');
        jQuery(this).parent().toggleClass('active');
        jQuery(this).next().toggleClass('show');
    });
    jQuery(document).on('click', '.todo-task-list > li li > a', function () {
        jQuery('.todo-task-list li li').removeClass('active');
        jQuery(this).parent().toggleClass('active');
    });

    /*---------------------------------------------------------------------
    user toggle
    -----------------------------------------------------------------------*/
    jQuery(document).on('click', '.iq-user-toggle', function () {
        jQuery(this).parent().addClass('show-data');
    });

    jQuery(document).on('click', ".close-data", function () {
        jQuery('.iq-user-toggle').parent().removeClass('show-data');
    });
    jQuery(document).on("click", function (event) {
        var $trigger = jQuery(".iq-user-toggle");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            jQuery(".iq-user-toggle").parent().removeClass('show-data');
        }
    });
    /*-------hide profile when scrolling--------*/
    jQuery(window).scroll(function () {
        let scroll = jQuery(window).scrollTop();
        if (scroll >= 10 && jQuery(".iq-user-toggle").parent().hasClass("show-data")) {
            jQuery(".iq-user-toggle").parent().removeClass("show-data");
        }
    });
    let Scrollbar = window.Scrollbar;
    if (jQuery('.data-scrollbar').length) {

        Scrollbar.init(document.querySelector('.data-scrollbar'), {
            continuousScrolling: false
        });
    }

    /*---------------------------------------------------------------------
       Scroll up horizontal menu
    -----------------------------------------------------------------------*/
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll < position) {
            $('.bg-nav-horizontal').addClass('menu-up');
            $('.bg-nav-horizontal').removeClass('menu-down');
        } else {
            $('.bg-nav-horizontal').addClass('menu-down');
            $('.bg-nav-horizontal').removeClass('menu-up');
        }
        if (scroll == 0) {
            $('.bg-nav-horizontal').removeClass('menu-up');
            $('.bg-nav-horizontal').removeClass('menu-down');
        }
        position = scroll;
    });

    /*---------------------------------------------------------------------
    Data tables
    -----------------------------------------------------------------------*/
    if ($.fn.DataTable) {
        $('.data-table').DataTable();
    }




    /*---------------------------------------------------------------------
    Form Validation
    -----------------------------------------------------------------------*/

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*---------------------------------------------------------------------
     Active Class for Pricing Table
     -----------------------------------------------------------------------*/
    jQuery("#my-table tr th").click(function () {
        jQuery('#my-table tr th').children().removeClass('active');
        jQuery(this).children().addClass('active');
        jQuery("#my-table td").each(function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active')
            }
        });
        var col = jQuery(this).index();
        jQuery("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
    });

    /*------------------------------------------------------------------
    Flatpicker
    * -----------------------------------------------------------------*/
    if (jQuery('.date-input').hasClass('basicFlatpickr')) {
        jQuery('.basicFlatpickr').flatpickr();
        jQuery('#inputTime').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
        jQuery('#inputDatetime').flatpickr({
            enableTime: true
        });
        jQuery('#inputWeek').flatpickr({
            weekNumbers: true
        });
        jQuery("#inline-date").flatpickr({
            inline: true
        });
        jQuery("#inline-date1").flatpickr({
            inline: true
        });
    }

    /*---------------------------------------------------------------------
    Scrollbar
    -----------------------------------------------------------------------*/

    jQuery(window).on("resize", function () {
        if (jQuery(this).width() <= 1299) {
            jQuery('#salon-scrollbar').addClass('data-scrollbar');
        } else {
            jQuery('#salon-scrollbar').removeClass('data-scrollbar');
        }
    }).trigger('resize');

    jQuery('.data-scrollbar').each(function () {
        var attr = $(this).attr('data-scroll');
        if (typeof attr !== typeof undefined && attr !== false) {
            let Scrollbar = window.Scrollbar;
            var a = jQuery(this).data('scroll');
            Scrollbar.init(document.querySelector('div[data-scroll= "' + a + '"]'));
        }
    });



    /*---------------------------------------------------------------------
       checkout
    -----------------------------------------------------------------------*/

    jQuery(document).ready(function () {
        jQuery('#place-order').click(function () {
            jQuery('#cart').removeClass('show');
            jQuery('#address').addClass('show');
        });
        jQuery('#deliver-address').click(function () {
            jQuery('#address').removeClass('show');
            jQuery('#payment').addClass('show');
        });
    });

    /*---------------------------------------------------------------------
           Datatables
        -----------------------------------------------------------------------*/
    if (jQuery('.data-tables').length) {
        $('.data-tables').DataTable();
    }


    /*---------------------------------------------------------------------
    image-upload
    -----------------------------------------------------------------------*/

    $('.form_gallery-upload').on('change', function () {
        var length = $(this).get(0).files.length;
        var galleryLabel = $(this).attr('data-name');

        if (length > 1) {
            $(galleryLabel).text(length + " files selected");
        } else {
            $(galleryLabel).text($(this)[0].files[0].name);
        }
    });

    /*---------------------------------------------------------------------
        video
      -----------------------------------------------------------------------*/
    $(document).ready(function () {
        $('.form_video-upload input').change(function () {
            $('.form_video-upload p').text(this.files.length + " file(s) selected");
        });
    });


    /*---------------------------------------------------------------------
    Button
    -----------------------------------------------------------------------*/

    jQuery('.qty-btn').on('click', function () {
        var id = jQuery(this).attr('id');

        var val = parseInt(jQuery('#quantity').val());

        if (id == 'btn-minus') {
            if (val != 0) {
                jQuery('#quantity').val(val - 1);
            } else {
                jQuery('#quantity').val(0);
            }

        } else {
            jQuery('#quantity').val(val + 1);
        }
    });
    if ($.fn.select2 !== undefined) {
        $("#single").select2({
            placeholder: "Select a Option",
            allowClear: true
        });
        $("#multiple").select2({
            placeholder: "Select a Multiple Option",
            allowClear: true
        });
        $("#multiple2").select2({
            placeholder: "Select a Multiple Option",
            allowClear: true
        });
    }

    /*---------------------------------------------------------------------
    Pricing tab
    -----------------------------------------------------------------------*/
    jQuery(window).on('scroll', function (e) {

        // Pricing Pill Tab
        var nav = jQuery('#pricing-pills-tab');
        if (nav.length) {
            var contentNav = nav.offset().top - window.outerHeight;
            if (jQuery(window).scrollTop() >= (contentNav)) {
                e.preventDefault();
                jQuery('#pricing-pills-tab li a').removeClass('active');
                jQuery('#pricing-pills-tab li a[aria-selected=true]').addClass('active');
            }
        }
    });

    /*---------------------------------------------------------------------
       menu click li
       -----------------------------------------------------------------------*/

    jQuery('.two-sidebar .iq-sidebar-small').on('mouseover', function () {
        jQuery('.two-sidebar .iq-sidebar').addClass('iq-sidebar-hover');
    });

    jQuery('.two-sidebar .iq-sidebar-small').on('mouseleave', function () {
        jQuery('.two-sidebar .iq-sidebar').removeClass('iq-sidebar-hover');
    });

    if (jQuery('.two-sidebar').find('li.active').length > 0) {
        const active = jQuery('.two-sidebar').find('li.active').closest('.tab-pane')
        jQuery('.nav-pills a[href="#' + active.attr('id') + '"]').tab('show');
    }


    /*---------------------------------------------------------------------
    tab sidebar back close
    -----------------------------------------------------------------------*/

    jQuery('.iq-tab-toggle').on('click', function () {
        jQuery(this).fadeOut().prev('.tab-scrollbar-data').addClass('tab-sidebar-close')
        jQuery('.close-setting-sidebar').removeClass('active')
        jQuery('body').removeClass('setting-sidebar-open');
    });
    jQuery('.iq-tab-toggle').on('click', function () {
        if (jQuery(this).hasClass('active') === true) {
            jQuery('.tab-scrollbar-data').addClass('tab-sidebar-close')
            jQuery(this).removeClass('active');
            jQuery('body').removeClass('tab-sidebar-data-open');
            jQuery('.iq-tab-toggle').fadeOut();
        } else {
            jQuery('.tab-scrollbar-data').removeClass('tab-sidebar-close')
            jQuery(this).addClass('active');
            jQuery('body').addClass('tab-sidebar-data-open');
            if (jQuery('#hidebackdrop').is(':checked') != true) {
                jQuery('.iq-tab-toggle').fadeIn()
            }
        }
    });


    /*---------------------------------------------------------------------
    Remove collapse panel
    -----------------------------------------------------------------------*/

    jQuery(window).bind("resize", function () {
        if (jQuery(this).width() <= 1199) {
            jQuery('.iq-navbar-callapse-menu .collapse').removeClass('show');
        } else {
            jQuery('.iq-navbar-callapse-menu .collapse').addClass('show');
        }
    }).trigger('resize');

    /*---------------------------------------------------------------------
    Current Time
    -----------------------------------------------------------------------*/
    setInterval(function () {
        var now = new Date(Date.now());
        var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        jQuery('.current-time').html(formatted);
    }, 1000);

    /*---------------------------------------------------------------------
    List and Grid
    -----------------------------------------------------------------------*/
    $('.list-grid-toggle').click(function () {
        var txt = $(".icon").hasClass('icon-grid') ? 'List' : 'Grid';
        $('.icon').toggleClass('icon-grid');
        $(".label").text(txt);
    })

    /*---------- */
    $(".dropdown-menu li a").click(function () {
        var selHtml = $(this).html();
        var selName = $.trim($(this).text())
        $(this).parents('.btn-group').find('.search-replace').html(selHtml);
        $(this).parents('.btn-group').find('.search-query').val(selName);
    });
});

//회원가입
$("#signupForm").on("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 막기

    // 입력값 가져오기
    let nickname = $("#nickname").val().trim();
    let userId = $("#userId").val().trim();
    let password = $("#password").val().trim();
    let confirmPassword = $("#confirm-password").val().trim();
    let isChecked = $("#customcheck1").is(":checked");

    // 유효성 검사
    if (!nickname || !userId || !password || !confirmPassword) {
        alert("모든 필드를 입력해주세요.");
        return;
    }

    if (password !== confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    if (!isChecked) {
        alert("이용 약관에 동의해야 합니다.");
        return;
    }


    let newUser = {
        nickname: nickname,
        username: userId,
        password: password
    };

    //  API로 회원가입 요청 보내기
    $.ajax({
        // url: "https://jsonplaceholder.typicode.com/users",
        url: "http://127.0.0.1:8000/signup",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(newUser),
        success: function (response) {
            console.log("회원가입 성공:", response);
            alert("회원가입 성공!");
            window.location.href = "auth-sign-in.html"; // 로그인 페이지로 이동
        },
        error: function (xhr, status, error) {
            console.error("회원가입 실패:", error);
            alert("회원가입 실패. 다시 시도해주세요.");
        }
    });
});


//로그인 
$(document).ready(function () {
    $("#loginForm").on("submit", function (event) {
        event.preventDefault(); // 기본 제출 방지

        // ✅ 입력값 가져오기
        let userId = $("#userId").val().trim();
        let password = $("#password").val().trim();
        let rememberMe = $("#rememberMe").is(":checked");

        // ✅ 유효성 검사
        if (!userId || !password) {
            alert("ID와 비밀번호를 입력해주세요.");
            return;
        }

        // ✅ 로그인 요청 데이터
        let loginData = {
            username: userId,
            password: password
        };

        // ✅ 서버에 로그인 요청 (`POST`)
        $.ajax({
            url: "http://127.0.0.1:8000/login", // 🔥 실제 API URL로 변경
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(loginData),
            success: function (response) {
                if (response.success) {
                    alert("로그인 성공!");

                    // ✅ 
                    localStorage.setItem('username', response.username);
                    localStorage.setItem('nickname', response.nickname);

                    // ✅ Remember Me 체크 시 아이디 저장
                    if (rememberMe) {
                        localStorage.setItem("userId", userId);
                    } else {
                        localStorage.removeItem("userId");
                    }

                    // ✅ 로그인 후 이동할 페이지 (예: 대시보드)
                    window.location.href = "index.html";
                } else {
                    alert("로그인 실패: " + response.message);
                }
            },
            error: function (xhr, status, error) {
                console.error("로그인 실패:", error);
                alert("로그인 실패. 서버를 확인해주세요.");
            }
        });
    });


    // ✅ Remember Me 체크 시 이전 ID 자동 입력
    let savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
        $("#userId").val(savedUserId);
        $("#rememberMe").prop("checked", true);
    }


});
// 로그아웃 처리
$("#signOutBtn").on("click", function (event) {
    event.preventDefault(); // 링크의 기본 동작 방지 (페이지 이동 방지)

    // 로컬스토리지에서 저장된 사용자 정보 삭제
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");
    localStorage.removeItem("userId"); // Remember Me 체크 시 저장된 ID도 삭제

    // 추가적으로 쿠키도 삭제하고 싶다면 (쿠키 삭제 예시)
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    document.cookie = "nickname=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";

    // 로그아웃 후 로그인 페이지로 이동
    window.location.href = "auth-sign-in.html"; // 로그인 페이지로 이동
});




// 파일 확장자에 따라 아이콘 경로 반환
function getFileIcon(extension) {
    let iconPath = "../assets/images/layouts/page-1/";

    switch (extension) {
        case "pdf":
            return iconPath + "pdf.png";
        case "doc":
        case "docx":
            return iconPath + "doc.png";
        case "xlsx":
        case "xls":
            return iconPath + "xlsx.png";
        case "ppt":
        case "pptx":
            return iconPath + "ppt.png";
        case "txt":
            return iconPath + "txt.png";
        default:
            return iconPath + "file.png"; // 기본 아이콘
    }
}



// function getFileTypeIcon(fileName) {
//     let ext = fileName.split('.').pop().toLowerCase();
//     let icons = {
//         "pdf": "../assets/images/layouts/page-1/pdf.png",
//         "doc": "../assets/images/layouts/page-1/doc.png",
//         "docx": "../assets/images/layouts/page-1/doc.png",
//         "xlsx": "../assets/images/layouts/page-1/xlsx.png",
//         "ppt": "../assets/images/layouts/page-1/ppt.png",
//         "pptx": "../assets/images/layouts/page-1/ppt.png",
//         "jpg": "../assets/images/layouts/page-1/image.png",
//         "png": "../assets/images/layouts/page-1/image.png",
//         "zip": "../assets/images/layouts/page-1/zip.png"
//     };
//     return icons[ext] || "../assets/images/layouts/page-1/file.png"; // 기본 아이콘
//     }
//     });

})(jQuery);