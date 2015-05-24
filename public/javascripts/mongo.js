(function(root) {
  root.Mongo = root.Mongo || {};
})(this);

var mongo_app = angular.module('mongo',[]);

$('.signup.content form input').each(function(){
    var $this = $(this);
    $this.data('placeholder', $this.attr('placeholder'))
         .focus(function(){$this.removeAttr('placeholder');})
         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
});

$("#item_quantity").inputmask("9{1,4}");