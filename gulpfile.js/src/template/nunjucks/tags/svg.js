// @formatter:off

var svg           = require( '../../utils/svg' );

// @formatter:on

function SVGExtension ( nunjucks ) {

	this.tags = [ 'svg' ];

	this.parse = function ( parser, nodes, lexer ) {
		// get the tag token
		var tok = parser.nextToken();

		// parse the args and move after the block end. passing true
		// as the second arg is required if there are no parentheses
		var args = parser.parseSignature( null, true );
		parser.advanceAfterBlockEnd( tok.value );

		// See above for notes about CallExtension
		return new nodes.CallExtension( this, 'run', args );
	};

	this.run = function ( context, name, opt_altText ) {

		var svgString = svg( name, opt_altText );
		return new nunjucks.runtime.SafeString( svgString );

	};
}

module.exports = SVGExtension;