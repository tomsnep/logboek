import $ from 'jquery';
import 'slick-carousel';

class ImageSlider {


	constructor(element) {
		this.$sliderEl 		= $( element );

        this.$imageContainer = this.$sliderEl.find('.image-slider__slider-container');
        this.$prevButton 	= this.$sliderEl.find('.image-slider__control--prev');
        this.$nextButton 	= this.$sliderEl.find('.image-slider__control--next');
        this.$slides		= this.$sliderEl.find('.image-slider__slide');

		this.initSlider();
		this.checkAmountOfImages();
	}

	initSlider() {

        this.$imageContainer.slick({
			prevArrow: this.$prevButton,
            nextArrow: this.$nextButton,
			infinite: false
        });
	}

	checkAmountOfImages(){
        const isSingle = this.$slides.length === 1;
        
		if(isSingle){
			this.$prevButton.addClass('is--hidden');
            this.$nextButton.addClass('is--hidden');
		}
	}

}


// export the constructor function
export default ImageSlider;

