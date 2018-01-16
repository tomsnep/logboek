import $ from 'jquery';

import '../../vendor/scrolloverflow.min.js';
import 'fullpage.js/dist/jquery.fullpage.extensions.min';


class Fullpage {

    constructor(element) {
        this.$element 		= $( element );

        this.initFullpage();
    }

    initFullpage() {
        this.$element.fullpage({


            //Scrolling
            scrollOverflow: true,
            scrollOverflowReset: true,

            //Custom selectors
            sectionSelector: '.c-chapter-section',
            slideSelector: '.chapter-slide',

            // Centering
            verticalCentered: false
        });

        // disable mousescrolling
        $.fn.fullpage.setAllowScrolling(false);
    }
}


// export the constructor function
export default Fullpage;

