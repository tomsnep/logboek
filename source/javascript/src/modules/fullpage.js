import $ from 'jquery';

import '../../vendor/scrolloverflow.min.js';
import 'fullpage.js/dist/jquery.fullpage.extensions.min';


class Fullpage {

    constructor(element) {
        this.$element 		    = $( element );
        this.$chapterSection    = this.$element.find('.c-chapter-section');
        this.$chapterSlide    = this.$element.find('.c-chapter-slide');

        this.$arrowLeft             = $('[data-js-hook="fp-nav-left"]');
        this.$arrowUp               = $('[data-js-hook="fp-nav-up"]');
        this.$arrowDown             = $('[data-js-hook="fp-nav-down"]');
        this.$arrowRight            = $('[data-js-hook="fp-nav-right"]');

        this.initFullpage();
        this.bindEvents();
        this.onKeyDown();
    }

    initFullpage() {
        this.$element.fullpage({

            //menu
            menu: '.menu__list',
            navigation: false,


            //Scrolling
            scrollOverflow: true,
            scrollOverflowReset: true,
            scrollingSpeed: 250,
            continuousVertical: false,
            continuousHorizontal: false,

            //Custom selectors
            sectionSelector: '.c-chapter-section',
            slideSelector: '.c-chapter-slide',

            //navigation
            slidesNavigation: false,

            lazyLoading: true,

            // Design
            verticalCentered: false,
            fixedElements: '.fullpage__header, .fullpage__slides-indicator',
            paddingTop: '60px',

            // Methods
            onLeave: function(){
                const loadedSection = $(this);
                const $prevButton = $('.fullpage__slides-indicator .prev');
                const $nextButton = $('.fullpage__slides-indicator .next');

                if(loadedSection.find('.c-chapter-slide').length >= 1){
                    const $loadedSlide = loadedSection.find('.c-chapter-slide.active');
                    const prev = $loadedSlide.prev();
                    const next = $loadedSlide.next();
                    const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                    const nextText = (next.length) ? next.attr('data-chapter') : '';

                    if(prevText){
                        $prevButton.find('span').html(prevText);
                        $prevButton.removeClass('is--hidden');
                    } else {
                        $prevButton.addClass('is--hidden');
                    }

                    if(nextText){
                        $nextButton.find('span').html(nextText);
                        $nextButton.removeClass('is--hidden');
                    } else {
                        $nextButton.addClass('is--hidden');
                    }
                } else {
                    $prevButton.addClass('is--hidden');
                    $nextButton.addClass('is--hidden');
                }
            },
            afterLoad: function(){
                const loadedSection = $(this);
                const currentChapterTitel = loadedSection.attr('data-chapter');
                const prev = loadedSection.prev();
                const next = loadedSection.next();

                const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                const nextText = (next.length) ? next.attr('data-chapter') : '';

                // set title
                $('.fullpage__title').html(currentChapterTitel);
                $('.fullpage__header-button span').html(prevText);


                // check if section has Slides
                const $prevButton   = $('.fullpage__slides-indicator .prev');
                const $nextButton   = $('.fullpage__slides-indicator .next');
                const $prevArrow    = $('.fullpage__nav-left');
                const $nextArrow    = $('.fullpage__nav-right');

                if(loadedSection.find('.c-chapter-slide').length >= 1){
                    const $loadedSlide = loadedSection.find('.c-chapter-slide.active');
                    const prev = $loadedSlide.prev();
                    const next = $loadedSlide.next();
                    const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                    const nextText = (next.length) ? next.attr('data-chapter') : '';

                    if(prevText){
                        $prevButton.find('span').html(prevText);
                        $prevButton.removeClass('is--hidden');
                        $prevArrow.removeClass('is--hidden');
                    } else {
                        $prevArrow.addClass('is--hidden');
                        $prevButton.addClass('is--hidden');
                    }

                    if(nextText){
                        $nextButton.find('span').html(nextText);
                        $nextButton.removeClass('is--hidden');
                        $nextArrow.removeClass('is--hidden');
                    } else {
                        $nextArrow.addClass('is--hidden');
                        $nextButton.addClass('is--hidden');
                    }
                } else {
                    $prevButton.addClass('is--hidden');
                    $nextButton.addClass('is--hidden');
                    $prevArrow.addClass('is--hidden');
                    $nextArrow.addClass('is--hidden');
                }

                // activate slide in menu
                $('.menu__nav').find('.menu__list-item--secondary.active a').removeClass('active');
            },
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
                const loadedSlide = $(this);
                const prev = loadedSlide.prev();
                const next = loadedSlide.next();
                const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                const nextText = (next.length) ? next.attr('data-chapter') : '';
                const $prevButton = $('.fullpage__slides-indicator .prev');
                const $nextButton = $('.fullpage__slides-indicator .next');
                const $prevArrow    = $('.fullpage__nav-left');
                const $nextArrow    = $('.fullpage__nav-right');

                if(prevText){
                    $prevButton.find('span').html(prevText);
                    $prevButton.removeClass('is--hidden');
                    $prevArrow.removeClass('is--hidden');
                } else {
                    $prevButton.addClass('is--hidden');
                    $prevArrow.addClass('is--hidden');
                }

                if(nextText){
                    $nextButton.find('span').html(nextText);
                    $nextButton.removeClass('is--hidden');
                    $nextArrow.removeClass('is--hidden');
                } else {
                    $nextButton.addClass('is--hidden');
                    $nextButton.addClass('is--hidden');
                }



                // activate slide in menu
                $('.menu__nav').find('.menu__list-item--secondary a.active').removeClass('active');
                $(`[data-menuanchor="${slideAnchor}"]`).addClass('active');
            },
            afterResize: function(){
                $.fn.fullpage.reBuild();
            },
            afterRender: function(){
                $('.c-loader').addClass('is--hidden');
            }
        });

        // disable mousescrolling
        $.fn.fullpage.setAllowScrolling(false);
    }

    bindEvents() {
        this.$arrowLeft.on('click', () =>  $.fn.fullpage.moveSlideLeft());
        this.$arrowUp.on('click', () =>  $.fn.fullpage.moveSectionUp());
        this.$arrowDown.on('click', () =>  $.fn.fullpage.moveSectionDown());
        this.$arrowRight.on('click', () =>  $.fn.fullpage.moveSlideRight());
    }

    onKeyDown() {
        const keyCodes = {
            '37': 'left',
            '38': 'up',
            '39': 'right',
            '40': 'down'
        }

        $(document).on('keydown', (e) => {
            const event = window.event ? window.event : e;
            const keyCodeNr = event.keyCode;

            $(`.fullpage__nav-${keyCodes[keyCodeNr]}`).addClass('is--pressed');
        })

        $(document).on('keyup', (e) => {
            const event = window.event ? window.event : e;
            const keyCodeNr = event.keyCode;

            $(`.fullpage__nav-${keyCodes[keyCodeNr]}`).removeClass('is--pressed');
        })
    }


}


// export the constructor function
export default Fullpage;

