/* jshint devel:true */

define([
  'amd!cdf/lib/backbone',
  'cdf/lib/BaseEvents'],
  function( Backbone, BaseEvents ) {

    // Base Model
    var BaseModel = BaseEvents.convertClass( Backbone.Model );
    return BaseModel;

 });

