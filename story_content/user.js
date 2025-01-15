function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5w7uYAkCfpy":
        Script1();
        break;
  }
}

function Script1()
{
  if( window.cssPatchWebObject !== "done") {

  style = document.createElement('style');

  style.textContent = `

    .webobject {

      width:  100% !important;

      height: 100% !important;

      transform: none !important;

     };`

 

  document.body.appendChild(style);

  window.cssPatchWebObject = "done";

}

 
}

