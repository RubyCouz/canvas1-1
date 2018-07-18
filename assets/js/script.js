var c = document.getElementById("maison");
var ctx = c.getContext("2d");

//toit de la maison
ctx.beginPath(); // début de chemin
ctx.moveTo(200,50) //le tracé part du point 200,50
ctx.lineTo(100,150) //un segment est ajouté vers 100.150
ctx.lineTo(300,150) //un segment est ajouté vers 300.150
ctx.closePath(); // fermeture du chemin
ctx.fillStyle = "#D7823E"; //défintion de la couleur de remplissage
ctx.fill();         //remplissage du dernier chemin tracé

// murs
ctx.beginPath();
ctx.moveTo(100,150);
ctx.lineTo(100,350);
ctx.lineTo(300,350);
ctx.lineTo(300,150);
ctx.closePath();
ctx.fillStyle = "#A1D8E6";
ctx.fill();

  //porte

  ctx.beginPath();
  ctx.moveTo(175,350);
  ctx.lineTo(175,250);
  ctx.lineTo(225,250);
  ctx.lineTo(225,350);
  ctx.closePath();
  ctx.fillStyle = "#C9C9C9";
  ctx.fill();

  //fenetre

  ctx.beginPath();
  ctx.moveTo(125,175);
  ctx.lineTo(125,225);
  ctx.lineTo(175,225);
  ctx.lineTo(175,175);
  ctx.closePath();
  ctx.fillStyle = "#C9C9C9";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(225,175);
  ctx.lineTo(225,225);
  ctx.lineTo(275,225);
  ctx.lineTo(275,175);
  ctx.closePath();
  ctx.fillStyle = "#C9C9C9";
  ctx.fill();
