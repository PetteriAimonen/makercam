

$(function(){
  $('#myCanvas').mousewheel(function(event){
    //console.log(event.deltaY, event.deltaFactor);
    //changeZoom(getView(), event.deltaY);
    //changeZoom(event.deltaY);
    //changeCenter(0,10*event.deltaY,1);
    stableZoom(event.deltaY, event.offsetX, event.offsetY);
    return event.preventDefault();
  });
});
