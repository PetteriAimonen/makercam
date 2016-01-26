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

  //for(i=factor;i<=Xsize;i+=factor)
  for(i=-50*factor;i<=Xsize;i+=factor)
  {
    //var linea = new Path.Line(new Point(i,0),new Point(i,Ysize));
    var linea = new Path.Line(new Point(i,-25*factor),new Point(i,Ysize));
    linea.strokeColor = 'gray';
    linea.dashArray = [0.5,5];
    linea.strokeScaling = false;
  }
  //for(i=factor;i<=Ysize;i+=factor)
  for(i=-25*factor;i<=Ysize;i+=factor)
  {
    //var linea = new Path.Line(new Point(0,i),new Point(Xsize,i));
    var linea = new Path.Line(new Point(-50*factor,i),new Point(Xsize,i));
    linea.strokeColor = 'gray';
    linea.dashArray = [0.5,5];
    linea.strokeScaling = false;
  }
}

function changeZoom(delta)
{
  var factor = 1.05;
  if(delta < 0)
  {
    view.zoom /= factor;
  }
  else if (delta > 0)
  {
    view.zoom *= factor;
  }
  else
  {}
  view.draw();
}

function changeCenter(deltaX, deltaY, factor)
{
  var offset = new Point(deltaX, -deltaY)*factor;
  view.center += offset;
}

function stableZoom(delta, offsetX, offsetY)
{
  var mousePosition = new paper.Point(offsetX, offsetY);
  var viewPosition = view.viewToProject(mousePosition);
  var beta, newZoom, pc, oldZoom, factor, offset, c, p;
  c = view.center;
  p = viewPosition;
  oldZoom = view.zoom;
  factor = 1.05;
  if(delta<0)
  {
    newZoom = oldZoom / factor;
    beta = factor;
  }
  if (delta>0)
  {
    newZoom = oldZoom * factor;
    beta = 1/factor;
  }
  if(delta==0)
  {
    newZoom = oldZoom;
    beta=1;
  }
  //beta = oldZoom / newZoom;
  //pc = p.subtract(c);
  pc = p-c;

  //offset = p.subtract(pc.multiply(beta)).subtract(c);
  offset= p - (pc *beta) - c;
  view.zoom = newZoom;
  view.center = view.center.add(offset);
  view.draw();
}

window.fondo = fondo;
window.changeZoom = changeZoom;
window.changeCenter = changeCenter;
window.stableZoom = stableZoom;
