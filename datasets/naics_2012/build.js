var buildIndex  = require( process.cwd() + '/lib/build_index' );

var OBJECTS     = require( './dataset' );
var INDEX_PATH  = './datasets/naics_2012/index.json';
var ID_PROPERTY = 'code';
var PROPERTIES  = [ 'code', 'title', 'index', 'examples', 'description' ];

module.exports = function () {
  buildIndex(OBJECTS, PROPERTIES, ID_PROPERTY, INDEX_PATH);
}
