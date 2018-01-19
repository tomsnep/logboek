import $ from 'jquery';

class ComparisonImage {


	constructor(element) {
		this.$element = $( element );

		this.init();
	}

	init() {

        const $imageAfter = this.$element.find('.comparison-image__before');
        const $imageDivider = this.$element.find('.comparison-image__divider');

        const img_width = $imageAfter.find('img').width();
        const init_split = Math.round(img_width/2);

        $imageAfter.width(init_split);
        $imageDivider.css('left', init_split);

        this.$element.mousemove(function(e) {
            const offX  = (e.offsetX || e.clientX - $imageAfter.offset().left);
            $imageAfter.width(offX);
            $imageDivider.css('left', offX);
        });
    }
}


// export the constructor function
export default ComparisonImage;

