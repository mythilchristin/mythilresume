// {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readytate === 4 && xhr.status == "200")
//     {
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send(null);
// }
// getfile("index.json",function (text){
//   var data = JSON.parse(text);
//   console.log(data);
// })

  function loadJSON(file){
    return new  Promise((resolve,reject)=>{
      return fetch(file).then(response=>{
        if(response.ok){
          resolve(response.json());
        } else {
          reject(new Error('error'));

        }

      })
    })
  }
  var newFILE=loadJSON("index.json");
  newFILE.then(data=>{
    console.log(data);
    career(data.career);
    education(data.education);
    skills(data.skills);
      achievements(data.achievements);
  })

  var childTwo=document.querySelector(".childtwo");

  function career(careerObj){
    var careerHeading=document.createElement("h2");

    careerHeading.textContent="Career Objective";
    childTwo.appendChild(careerHeading);
    var hr=document.createElement("hr");
    careerHeading.appendChild(hr);
    var careerP=document.createElement("p");
    careerP.textContent=careerObj.info;
    childTwo.appendChild(careerP);
  }
   function education(edu){
 var  careerHeading=document.createElement("h2");
 careerHeading.textContent="Education qualifications";
 childTwo.appendChild(careerHeading);
 var hr=document.createElement("hr");
 careerHeading.appendChild(hr);
 for(var i=0; i<edu.length; i++){
   eduH3=document.createElement("h3");
   eduH3.textContent=edu[i].degree;
   childTwo.appendChild(eduH3);
   var eduU1=document.createElement("u1");
   var eduli=document.createElement("li");
   eduli.textContent=edu[i].institute;
   eduU1.appendChild(eduli);
   childTwo.appendChild(eduU1);
   var eduU2=document.createElement("u1");
   var eduli1=document.createElement("li");
   eduli1.textContent=edu[i].data;
   eduU2.appendChild(eduli1);
   childTwo.appendChild(eduU2);
 }
 }
function skills(skillInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="technical skills";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var skillTable=document.createElement("table");
  skillTable.border = "1";
  childTwo.appendChild(skillTable);
  var tableData="";
  for(var i=0;i<skillInfo.length;i++){
    tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td><tr>";
  }
  skillTable.innerHTML=tableData;
}
function achievements(ach){
  var  careerHeading=document.createElement("h2");
  careerHeading.textContent="Achievements";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var ul=document.createElement("ul");
  childTwo.appendChild(ul);
  var li="";
  for(var i=0;i<ach.length;i++){
    li+="<li>"+ach[i].achieveData;+"</li>";
    ul.innerHTML=li;
  }
}
