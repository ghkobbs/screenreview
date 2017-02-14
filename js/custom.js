function startTrailer(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("movietrailer");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'stopVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function startTrailer2(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("seriestrailer");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'stopVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}


$('.guestcheck').click(function(){

    if($('.guestcheck:checked').length > 0){

        $('.guests-inputs').css("display","block");
        $('.checkbox').css("margin-top","35px");

    } else {

         $('.guests-inputs').css("display","none");
         $('.checkbox').css("margin-top","10px");
    }

})