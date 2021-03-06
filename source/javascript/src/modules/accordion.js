import $ from 'jquery';


class Accordion {


    constructor(element) {
        this.$el            = $(element);
        this.$allContainers = $('.c-week-container');
        this.$trigger       = this.$el.find('.week-container__title');
        this.$content       = this.$el.find('.week-container__content');
        this.$item          = this.$content.find('.c-item');
        this.$sliders       = this.$content.find('.image-slider__slider-container');


        this.initAccordion();
    }

    initAccordion() {

        this.$trigger.on('click', () => {
            this.openAccordion();
        });
    }


    openAccordion() {

        if (this.$el.hasClass('is--open')){

            this.$el.removeClass('is--open');

            return;
        }

        this.$allContainers.each((index, element) => {
            $(element).removeClass('is--open');
        });

        this.$el.addClass('is--open');

        this.scrollToTop();

        if (this.$sliders) this.reInitSlider();
    }

    reInitSlider(){
        this.$content.find('.image-slider__slider-container').each((index, element) => {
            $(element).slick('reinit');
        });
    }

    scrollToTop(){

        let _distanceScrolled = this.$trigger.scrollTop();
        let _distanceFromTop = this.$trigger.offset().top;


        $('html, body').stop().animate({
            scrollTop: _distanceFromTop + _distanceScrolled - 60
        }, 400);
    }


}


// export the constructor function
export default Accordion;

