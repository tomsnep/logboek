import $ from 'jquery';
// import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';

class Fullpage {


    constructor(element) {
        this.$element 		= $( element );

        this.initFullpage();
    }

    initFullpage() {

        this.$element.fullpage({
            //Scrolling
            // scrollOverflow: true,

            //Custom selectors
            sectionSelector: '.chapter-section',
            slideSelector: '.chapter-slide'
        })
    }

}


// export the constructor function
export default Fullpage;

