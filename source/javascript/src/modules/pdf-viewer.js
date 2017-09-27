import $ from 'jquery';
import PDFObject from 'pdfobject';

class PdfViewer {

    constructor(element) {
        this.$pdfElement            = $( element );
        this.$pdfElementTrigger     = this.$pdfElement[0];
        this.$pdfSrc                = this.$pdfElement.attr('data-pdf-src');

        this.initPdfViewer();
    }

    initPdfViewer(){

        PDFObject.embed( this.$pdfSrc, this.$pdfElementTrigger);
    }

}


// export the constructor function
export default PdfViewer;

