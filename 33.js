$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b> <? echo 'oman' ; ?> </b>aaa");
    });

    $("#btn2").click(function(){
        $("#lll").append('<? echo "oman" ; ?>');
    });
});