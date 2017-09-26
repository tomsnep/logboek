import $ from 'jquery';
import 'slick-carousel';

class ImageSlider {


	constructor(element) {
		this.$sliderEl = $( element );
		this.initSlider();
	}

	initSlider() {
        this.$sliderEl.slick({

		})
	}


}


// export the constructor function
export default ImageSlider;

