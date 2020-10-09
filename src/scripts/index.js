$(document).ready(function() {

    $(document).on('click','.js-delivery-tab', function(e){
        e.preventDefault();
        $('.js-delivery-tab').removeClass('active');
        $(this).addClass('active');
        let tab = $(this).attr('href')
        $('.js-delivery-tab-content').removeClass('active');
        $(tab).addClass('active');
    });

    $(document).on('click','.js-delivery-tab-link', function(e){
        e.preventDefault();
        $(this).parents('.js-delivery-tab-content').find('.js-delivery-tab-link').removeClass('active');
        $(this).addClass('active');
        let tab = $(this).attr('href')
        $(this).parents('.js-delivery-tab-content').find('.js-delivery-tab-link-content').removeClass('active');
        $(tab).addClass('active');
    });

    $(document).on('click','.js-city', function(e){
        e.preventDefault();
        $(this).parents('.js-delivery-tab-content').find('.js-city').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click','.js-address', function(e){
        e.preventDefault();
        $(this).parents('.js-delivery-tab-content').find('.js-address').removeClass('active');
        $(this).addClass('active');
    });

    function cartScroll() {
        if (asideWrapper == null) {
            asideWrapper = document.createElement('div');
            asideWrapper.style.cssText = 'box-sizing: border-box; width: ' + asideCart.offsetWidth + 'px;';
            asideCart.insertBefore(asideWrapper, asideCart.firstChild);
            var l = asideCart.childNodes.length;
            for (var i = 1; i < l; i++) {
                asideWrapper.appendChild(asideCart.childNodes[1]);
            }
            asideCart.style.height = asideWrapper.getBoundingClientRect().height + 'px';
        }
        var Ra = asideCart.getBoundingClientRect(),
            R = Math.round(Ra.top + asideWrapper.getBoundingClientRect().height - document.querySelector('.js-content').getBoundingClientRect().bottom);
        if ((Ra.top - P) <= 0 && window.innerWidth>1024) {
            if ((Ra.top - P) <= R) {
                asideWrapper.className = 'stop';
                asideWrapper.style.top = - R +'px';
            } else {
                asideWrapper.className = 'sticky';
                asideWrapper.style.top = P + 'px';
            }
        } else {
            asideWrapper.className = '';
            asideWrapper.style.top = '';
        }
        window.addEventListener('resize', function() {
            asideCart.children[0].style.width = getComputedStyle(asideCart, '').width;
            if (window.innerWidth<=1024){
                asideWrapper.className = '';
                asideWrapper.style.top = '';
                asideCart.style.height = 'auto';
            }
        }, false);
    }

    if ($('.js-aside').length){
        var asideCart = document.querySelector('.js-aside'), 
            asideWrapper = null, 
            P = 0;
        window.addEventListener('scroll', cartScroll, false);
        document.body.addEventListener('scroll', cartScroll, false);
    }

    
    $(document).on('click','.js-order-next', function(e){
        e.preventDefault();
        $(this).parents('.js-order-section').addClass('closed complete');
        var nextEl = $('.js-order-section').not('.complete').first();
        nextEl.removeClass('closed');
        var menuHeight = 0,
            top = nextEl.offset().top,
            topIndent = top - menuHeight;
        $('html').animate({scrollTop: topIndent}, 300);
    });

    $(document).on('click','.js-order-back', function(e){
        e.preventDefault();
        $(this).parents('.js-order-section').addClass('closed').removeClass('complete');
        var prevEl = $('.js-order-section.complete').last();
        prevEl.removeClass('closed complete');
        var menuHeight = 0,
            top = prevEl.offset().top,
            topIndent = top - menuHeight;
        $('html').animate({scrollTop: topIndent}, 300);
    });
    
    $(document).on('click','.js-accept', function(e){
        e.stopPropagation();
        if ($('.js-accept input:checked').length){
            $('.js-submit-btn').removeClass('disabled');
        } else{
            $('.js-submit-btn').addClass('disabled');
        }
    });

    
    if ($('.js-custom-scroll-checkout').length){
        window.dima = baron({
            root: '.js-custom-scroll-checkout',
            scroller: '.baron-checkout__scroller',
            bar: '.baron-checkout__bar'
        }).autoUpdate(); 
    }
    if ($('.js-custom-scroll-courier').length){
        window.dima = baron({
            root: '.js-custom-scroll-courier',
            scroller: '.baron-checkout__scroller',
            bar: '.baron-checkout__bar'
        }).autoUpdate(); 
    }

    $(document).on('click','.js-auth-tab', function(e){
        e.preventDefault();
        $('.js-auth-tab').removeClass('active');
        $(this).addClass('active');
        let tab = $(this).attr('href')
        $('.js-auth-tab-content').removeClass('active');
        $(tab).addClass('active');
    });

    function initScrolling(){
        $('.js-header-wrap').css({'min-height': $('.js-header').height()});
        var _isScrolling = false;
        $(window).scroll(function(){
            if(!_isScrolling) {
                _isScrolling = true;

                if($(window).scrollTop() > 150){
                    $('.js-header').addClass('header-sticky');
                    _isScrolling = false;
                }
                else{
                    var headerHeight =  0;
                    $('.js-header').removeClass('header-sticky');
                    $('.js-header-wrap').css({'padding-top': 0 + 'px'});
                    _isScrolling = false;
                }
            }
        });
        $(window).resize(function(){
            $('.js-header-wrap').css({'min-height': $('.js-header').height()});
            if(!_isScrolling) {
                _isScrolling = true;

                if($(window).scrollTop() > 100){
                    $('.js-header').addClass('header-sticky');
                    _isScrolling = false;
                }
                else{
                    var headerHeight =  0;
                    $('.js-header').removeClass('header-sticky');
                    $('.js-header-wrap').css({'padding-top': 0 + 'px'});
                    _isScrolling = false;
                }
            }
        });
    }
    initScrolling();

    $(document).on('click','.js-search-mobile', function(e){
        e.preventDefault();
        $('.mobile_menu-search').toggleClass('opened');
    });

    $(document).on('click','.js-show-more', function(e){
        e.preventDefault();
        $('.js-catalog-section').toggleClass('opened');
    });
});