"use strict";


/*------------------------------------*\
 * JS Main entry file
 \*------------------------------------*/

// Import utilities.
import moduleInit from './src/modules/util/module-init';


// Import modules.
import ImageSlider from './src/modules/image-slider';
import PdfViewer from './src/modules/pdf-viewer';
import Accordion from './src/modules/accordion';
import Fullpage from './src/modules/fullpage';


// Initialize modules.
moduleInit( '[data-js-hook="image-slider"]', ImageSlider );
moduleInit( '[data-js-hook="pdf-viewer"]', PdfViewer );
moduleInit( '[data-js-hook="accordion"]', Accordion );
moduleInit( '[data-js-hook="fullpage"]', Fullpage );
