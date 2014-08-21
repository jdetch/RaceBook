// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require jquery
//= require handlebars
//= require ember
//= require blueimp-file-upload/cors/jquery.postmessage-transport
//= require blueimp-file-upload/cors/jquery.xdr-transport
//= require blueimp-file-upload/vendor/jquery.ui.widget
//= require blueimp-file-upload/jquery.fileupload
//= require blueimp-file-upload/jquery.fileupload-process
//= require blueimp-file-upload/jquery.fileupload-validate
//= require blueimp-file-upload/jquery.fileupload-image
//= require blueimp-file-upload/jquery.fileupload-audio
//= require blueimp-file-upload/jquery.fileupload-ui
//= require blueimp-file-upload/jquery.iframe-transport
//= require ember-data
//= require_self
//= require ./race_book

// for more details see: http://emberjs.com/guides/application/
RaceBook = Ember.Application.create();

//= require_tree .

$(function(){ $(document).foundation(); });
