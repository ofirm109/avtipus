function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Wp9hCNvypE":
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

