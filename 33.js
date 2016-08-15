$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b> <? echo 'oman' ; ?> </b>aaahub");
    });

    $("#btn2").click(function(){
        $("#lll").append('<? echo "oman" ; ?>');
    });
});
