  $(document).ready (function(){
 $('#social').validate({
   rules: {
   commentbox: {
   required: true,
   checkbookname: true,
 }
   },
 messages: {
   commentbox:{
   required:'This field is required <br>',
   checkbookname: 'This is invalid <br>',
   },
   },
 });
 
 $.validator.addMethod("checkbookname",function(value, element) {
     return /^[A-Za-z0-9-:!&,#@!^*().\s]+$/.test(value);
 });
  });