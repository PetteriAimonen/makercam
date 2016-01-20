function fondo(unit)
{
  var factor;
  if(unit=="mm")
  {
    factor = 30;
  }
  else
  {
    factor = 76.2;
  }
  var canvasSize = view.size;
  var Xsize = canvasSize.width;
  var Ysize = canvasSize.height;

  for(i=factor;i<=Xsize;i+=factor)
  {
    var linea = new Path.Line(new Point(i,0),new Point(i,Ysize));
    linea.strokeColor = 'gray';
    linea.dashArray = [0.5,5];
  }
  for(i=factor;i<=Ysize;i+=factor)
  {
    var linea = new Path.Line(new Point(0,i),new Point(Xsize,i));
    linea.strokeColor = 'gray';
    linea.dashArray = [0.5,5];
  }
}

function onResize(event)
{
  view.draw();
}

fondo("in");
