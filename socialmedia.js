  $(document).ready(function(){
   $.ajax ('likedisplay.php',{
    type: 'POST',
    success: function (data){
    //alert (data);
    $('#likecount').val(data);
  }
 });
   $.ajax ('commentdisplay.php',{
    type: 'POST',
    success: function (data){
    //alert (data);
    $('#commentcount').val(data);
  }
 });
  $('#like').click(function () {
  var getlikecount = $('#likecount').val();
    $.ajax ('likeadd.php',{
    type: 'POST',
    data: { likcount: getlikecount }, 
    success: function (data){
    //alert (data);
    $('#likecount').val(data);
  }
 });
});

  $('#addcomment').click(function () {
   var getinp =  $('#commentbox').val();
   if (getinp.length > 0) {
     $.ajax ('commentadd.php',{
     type: 'POST',
     data: { inp: getinp },
     success: function (data){
     alert (data);
     $('#commentcount').val(data);
     $('#commentbox').val('');
  }
 });
}
   else{
     

  }
 });
}); 
