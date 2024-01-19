const proto = {
    initProp: 500,
  };
  const obj = {
    __proto__: proto,
  };
  
  let text = ""
  text += ("initProp" in obj) + " ";
  text += ("initProp" in proto) + " ";
  text += Object.hasOwn("initProp") + " ";
  document.getElementById("p1").innerHTML = text;