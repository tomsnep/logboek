import $ from 'jquery';

class ComparisonImage {


	constructor(element) {
		this.$element = $( element );

		this.init();
	}

	init() {

        const $imageAfter = this.$element.find('.comparison-image__before');

        this.$element.mousemove(function(e) {
            const offX  = (e.offsetX || e.clientX - $imageAfter.offset().left);
            $imageAfter.width(offX);
        })
    }
}


// export the constructor function
export default ComparisonImage;

