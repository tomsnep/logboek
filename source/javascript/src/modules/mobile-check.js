import $ from 'jquery';

class MobileCheck {


    constructor(element) {
        this.$element       = $( element );


        this.checkScreenSize();
    }

    checkScreenSize() {

        if($(window).width() <= 1024){
            this.$element.removeClass('is--hidden');
        }

    }


}


// export the constructor function
export default MobileCheck;

