$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   // Challenge 1
   /*$("p").click(function() {
       $("p").css("background-color", "red");
   });
   $("h2").mouseenter(function() {
       $("h2").css("background-color","lightblue");
   });
   $("h2").mouseleave(function() {
       $("h2").css("background-color","white");
   });
   $("h2").mouseenter(function() {
       $("h2:hover").css("font-size","larger");
   });
   $(".bottom_button").mouseenter(function() {
       $("body").css("background-color","#111");
   });
   $(".bottom_button").mouseleave(function() {
       $("body").css("background-color","#eee");
   });*/

   // Challenge 2
   /*$("button").click(function() {
       $("button:first").hide('slow');
   });*/

   // Challenge 3
   /*$("button").click(function() {
       $("button").toggle('slow');
   });*/

   // Challenge 4
   $("button").mouseenter(function() {
       $("button").fadeTo(100, 0.5);
   });
   $("button").mouseleave(function() {
       $("button").fadeTo(100, 1);
   });
}); 