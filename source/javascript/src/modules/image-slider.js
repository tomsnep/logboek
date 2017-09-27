import $ from 'jquery';
import 'slick-carousel';

class ImageSlider {


	constructor(element) {
		this.$sliderEl 		= $( element );

        this.$imageContainer = this.$sliderEl.find('.image-slider__slider-container');
        this.$prevButton 	= this.$sliderEl.find('.image-slider__control--prev');
        this.$nextButton 	= this.$sliderEl.find('.image-slider__control--next');

		this.initSlider();
	}

	initSlider() {
        this.$imageContainer.slick({
			prevArrow: this.$prevButton,
            nextArrow: this.$nextButton
        })
	}


}


// export the constructor function
export default ImageSlider;

