// JavaScript Document

(function($){
  $(document).ready(function() {
    $('a.remove').click(function(){
      var obj = $(this);

      if (confirm('Are you sure you want to remove this item from your shopping cart?')) {
        obj.parent().find('input').attr('checked','checked');
        $('#update-cart').click();
        return false;
      }
      else {
        return false;
      }
    });
  });
})(jQuery);
