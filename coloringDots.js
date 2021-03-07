(function() {
let setColor="white";
init();
pallete();
function init()
{
let dots=document.querySelector('#main');
for(let i=0 ; i<dots.children.length ; i++)
{
  let dot=dots.children[i];
  dot.addEventListener('click',colorChange);
}
}

function colorChange(e)
{   
    e.target.style.backgroundColor=setColor;
}

function pallete()
{
let colorPick=document.querySelector("#colorPicker");
let colorBox=["#232526","red","darkgreen","darkblue","yellow","maroon","#00ff00","#0000ff","#ffff66","#ff4040","#065535"
              ,"#003366","#daa520","#f7347a","#bada55","cyan","orange","brown","magenta","#088da5","#800080","khaki","#696969"
              ,"#5ac18e","#8a2be2"];
for(let i=0;i<=colorPick.children.length;i++)
{
  let color=colorPick.children[i];
  color.style.backgroundColor = colorBox[i % colorBox.length];
  color.addEventListener('click',
  function(e)
  {
   setColor=e.target.style.backgroundColor;
  });
}

}
}) ();