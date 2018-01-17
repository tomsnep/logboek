import $ from 'jquery';

import '../../vendor/scrolloverflow.min.js';
import 'fullpage.js/dist/jquery.fullpage.extensions.min';


class Fullpage {

    constructor(element) {
        this.$element 		    = $( element );
        this.$chapterSection    = this.$element.find('.c-chapter-section');

        this.$arrowLeft             = $('[data-js-hook="fp-nav-left"]');
        this.$arrowUp               = $('[data-js-hook="fp-nav-up"]');
        this.$arrowDown             = $('[data-js-hook="fp-nav-down"]');
        this.$arrowRight            = $('[data-js-hook="fp-nav-right"]');

        this.initFullpage();
        this.bindEvents();
    }

    initFullpage() {
        this.$element.fullpage({


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

                    console.log(prev);
                    console.log(next);

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
            afterRender: this.afterRender(),
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
                const $prevButton = $('.fullpage__slides-indicator .prev');
                const $nextButton = $('.fullpage__slides-indicator .next');

                if(loadedSection.find('.c-chapter-slide').length >= 1){
                    const $loadedSlide = loadedSection.find('.c-chapter-slide.active');
                    const prev = $loadedSlide.prev();
                    const next = $loadedSlide.next();
                    const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                    const nextText = (next.length) ? next.attr('data-chapter') : '';

                    console.log(prev);
                    console.log(next);

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
            afterSlideLoad: function(){
                const loadedSlide = $(this);
                const prev = loadedSlide.prev();
                const next = loadedSlide.next();
                console.log(loadedSlide);
                const prevText = (prev.length) ? prev.attr('data-chapter') : '';
                const nextText = (next.length) ? next.attr('data-chapter') : '';
                const $prevButton = $('.fullpage__slides-indicator .prev');
                const $nextButton = $('.fullpage__slides-indicator .next');

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
            },
            afterResize: function(){
                $.fn.fullpage.reBuild();
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

    afterRender() {

        //append header again to be outside fp-scrollable div
        $(document).ready(() => {
            this.$chapterSection.map((i, section) => {

                const hasSlides = $(section).find('.fp-slides').length >= 1;

                if(hasSlides){
                    $(section).find('.chapter-section__header').insertBefore($(section).find('.fp-slides'));
                } else {
                    $(section).find('.chapter-section__header').insertBefore($(section).find('.fp-scrollable'));
                }
            })
        })
    }
}


// export the constructor function
export default Fullpage;

