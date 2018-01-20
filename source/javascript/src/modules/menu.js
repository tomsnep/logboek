import $ from 'jquery';

class Menu {


    constructor(element) {
        this.$element       = $( element );
        this.$trigger       = this.$element.find('.menu__trigger');
        this.$menuItems      = this.$element.find('a');


        this.bindEvents();
    }

    bindEvents() {
        $(document).on('click', (e) => {
            if(this.$element.hasClass('is--open')){
                if (e.target !== this.$element[0] && e.target !== this.$trigger[0]){
                    this.toggleMenu();
                }
            }
        })
        this.$trigger.on('click', () => this.toggleMenu());

        $(document).on('keydown', (event) =>{
            event = event || window.event;

            if(event.keyCode == 27) this.toggleMenu();
        })

        this.$menuItems.on('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.$element.toggleClass('is--open');
    }
}


// export the constructor function
export default Menu;

