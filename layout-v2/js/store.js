// JavaScript Document

(function($){
  $(document).ready(function() {
    $('a.remove').click(function(){
      var obj = $(this);

      if (confirm('Are you sure you want to remove this item from your shopping cart?')) {
        obj.parent().find('input').attr('checked','checked');
        $('#updateForm').submit();
        return false;
      }
      else {
        return false;
      }
    });

    $('.size-qty').keydown(function(e){
      if (e.which != 8 && e.which != 9 && e.which != 0 && (e.which < 48 || e.which > 57)){
        return false;
      }
    });

    $('.size-qty').keyup(function(e){
      calculateSum($(this).parents('form.product'));
    });


    $('form.product').submit(function(){
      if($(this).find('input.quantity').data('moq') > $(this).find('input.quantity').val())
      {
        alert('Minimum quantity not reached for item');
        return false;
      }

      if($(this).find('.size-qty')){
        $(this).find('.size-qty').each(function(){
          $(this).val($(this).data('size') + ': ' + $(this).val());
        });
      }

      return;
    });
  });
})(jQuery);

function calculateSum(parent) {
    var sum = 0;
    parent.find('.size-qty').each(function() {
        if(!isNaN(this.value) && this.value.length!=0) {
            sum += parseFloat(this.value);
        }
    });
    parent.find('.quantity').val(sum.toFixed(0));
}
