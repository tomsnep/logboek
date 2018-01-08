import $ from 'jquery';
import 'fullpage.js';

class Fullpage {


    constructor(element) {
        this.$element 		= $( element );

        this.initFullpage();
    }

    initFullpage() {
        this.$element.fullpage({

        })
    }

}


// export the constructor function
export default Fullpage;

