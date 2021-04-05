/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {
    var asideCart = document.querySelector('.js-aside'), 
        asideWrapper = null, 
        P = 0;

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
    function initAsideScroll(){
        cartScroll();
        window.addEventListener('scroll', cartScroll, false);
        document.body.addEventListener('scroll', cartScroll, false);
    }
    if ($('.js-aside').length){
        initAsideScroll();
    }
    
    $(document).on('click','.js-order-next', function(e){
        e.preventDefault();
        $(this).parents('.js-order-section').addClass('closed complete');
        var nextEl = $('.js-order-section').not('.complete').first();
        if (nextEl.length){
            nextEl.removeClass('closed');
            var menuHeight = 0,
                top = nextEl.offset().top,
                topIndent = top - menuHeight;
            $('html').animate({scrollTop: topIndent}, 300);
        }
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

    //левое меню делим на три колонки
    var $leftMenu = $('.menu_top_block.catalog_block .dropdown>li.full>.dropdown, .menu_top_block.catalogfirst li.full>.dropdown').masonry({
        itemSelector: '.menu_top_block.catalog_block .dropdown>li.full>.dropdown>li, .menu_top_block.catalogfirst li.full>.dropdown>li',
        transitionDuration: 0
    });

    $(document).on('mouseenter','.menu_top_block li.full:not(.v_bottom)', function(e){
        $leftMenu.masonry();
    });

    $(document).ready(function(){
        var flexsliderItemWidth = 236;
        var flexsliderItemMargin = 12;

        var sliderWidth = $('.js-basket-items-slider').outerWidth();
        var flexsliderMinItems = Math.floor((sliderWidth - flexsliderItemMargin) / (flexsliderItemWidth + flexsliderItemMargin));
        console.log(flexsliderItemWidth, flexsliderItemMargin, sliderWidth, flexsliderMinItems);
        $('.basket-items-list-item-extra-slider').each(function(index, element){
            $(element).flexslider({
                animation: 'slide',
                selector: '.tabs_slider .catalog_item',
                slideshow: false,
                animationSpeed: 600,
                directionNav: true,
                controlNav: false,
                pauseOnHover: true,
                animationLoop: true,
                itemWidth: flexsliderItemWidth,
                itemMargin: flexsliderItemMargin,
                minItems: flexsliderMinItems,
                controlsContainer: $(element).parents('.js-basket-items-slider').find('.basket-items-list-item-extra-arrows'),
                start: function(slider){
                    slider.find('li').css('opacity', 1);
                }
            });

        });
    });

    
    // личный кабинет - история заказов
    $(document).on('click','.js-history-item', function(e){
        e.stopPropagation();
        e.preventDefault();
        let id = $(this).data('id');
        $('.js-history').addClass('hide');
        $('.js-history-more').removeClass('show');
        $('#'+id+'.js-history-more').addClass('show');
        $('html').animate({scrollTop: 0}, 300);
    });
    $(document).on('click','.js-history-back', function(e){
        $('.js-history').removeClass('hide');
        $('.js-history-more').removeClass('show');
        $('html').animate({scrollTop: 0}, 300);
    });
    $(document).on('click','.js-history-delete', function(e){
        e.stopPropagation();
    });
    $(document).on('click','.js-history-repeat', function(e){
        e.stopPropagation();
    });
    $(document).on('click','.js-history-pay', function(e){
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('click','.js-lk-message-close', function(e){
        $(this).parents('.js-lk-message').addClass('hidden');
    });
    $(document).on('click','.js-history-product-edit', function(e){
        $(this).parents('.js-history-product').addClass('editing');
        $(this).parents('.js-history-more').find('.js-history-confirm').addClass('show');
    });
    $(document).on('click','.js-history-product-save', function(e){
        $(this).parents('.js-history-product').removeClass('editing');
    });
    $(document).on('click','.js-history-confirm-btn', function(e){
        $(this).parents('.js-history-confirm').removeClass('show');
        $(this).parents('.js-history-more').find('.js-history-product').removeClass('editing');
    });
    $(document).on('click','.js-mobile-top-close', function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.js-mobile-top').addClass('closed');
        $('.js-header-wrap').css({'min-height': $('.js-header').height()});
    });
    $(document).on('click','.js-mobile-lk', function(e){
        $(this).toggleClass('open');
    });
    $(document).on('click','.js-header-burger-open', function(e){
        let height = $(window).height() - $('.header-2021-mobile').height();
        $('.js-header-burger').css({
            'height': height
        });
        $('.js-header-burger').toggleClass('open');
        console.log(height);
        $('body').toggleClass('mod-overflow');
        $('html').toggleClass('mod-overflow');
    });
    $(document).on('click','.js-header-burger-close', function(e){
        $('.js-header-burger').removeClass('open');
        $('body').removeClass('mod-overflow');
        $('html').removeClass('mod-overflow');
    });
    function closeMobileLk(e){
        var element = $('.js-mobile-lk');
        if (!element.is(e.target) && element.has(e.target).length === 0){
            $('.js-mobile-lk').removeClass('open');
        }

    }

    document.addEventListener('mousedown', closeMobileLk, false);

    function initSublists(element, parent, container){
        $(element).each(function(){
            $this = $(this);
            let $parent = $this.parents(parent);
            let $container = $this.parents(container);
            let $tail = $this.find('.header-2021-menu-sublist__tail');
            let position = $parent.position();
            if (position.left < $this.width() / 2){
                $this.css({
                    'left': '0',
                    'right': 'auto',
                    'transform': 'translateX('+(24-position.left)+'px)'
                });
                $tail.css({
                    'left': (position.left - 24 + $parent.width() / 2) + 'px',
                    'right': 'auto'
                });
            } else {
                if (position.left +  $this.width() / 2 + $parent.width() / 2 > $container.width()) {
                    $this.css({
                        'left': 'auto',
                        'right': '0',
                        'transform': 'translateX('+($container.width() - position.left - $parent.width())+'px)'
                    });
                    $tail.css({
                        'left': 'auto',
                        'right': ($container.width() - position.left - $parent.width() / 2 )+'px'
                    });
                } else {
                    $this.css({
                        'left': '50%',
                        'right': 'auto',
                        'transform': 'translateX(-50%)'
                    });
                    $tail.css({
                        'left': '50%',
                        'right': 'auto'
                    });

                }
            }
        });
    }

    initSublists('.header-2021-menu-list-item-popup', '.header-2021-menu-list-item', '.header-2021-menu');

    $(window).resize(function() {
        initSublists('.header-2021-menu-list-item-popup', '.header-2021-menu-list-item', '.header-2021-menu');
    });
    
    $(document).on('click','.js-about-time', function(e){
        let index = Number($(this).data('index'));
        $('.js-about-time').removeClass('active');
        $(this).addClass('active');
        $('.js-about-time-tab').removeClass('active');
        $('.js-about-time-tab').addClass(function (i){
            if (i==index){
                return 'active';
            }
        });
    });
});

/***/ })
/******/ ]);