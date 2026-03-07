let patients = [];

const priorityValue = {
Critical:1,
High:2,
Moderate:3,
Mild:4,
Low:5
};

document.getElementById("patientForm").addEventListener("submit",function(e){

e.preventDefault();

const id=document.getElementById("patientId").value;
const name=document.getElementById("name").value;
const age=document.getElementById("age").value;
const symptoms=document.getElementById("symptoms").value;
const priority=document.getElementById("priority").value;

const patient={
id:id,
name:name,
age:age,
symptoms:symptoms,
priority:priority
};

patients.push(patient);

displayPatients();

document.getElementById("patientForm").reset();

});


function displayPatients(){

const tableBody=document.querySelector("#patientTable tbody");

tableBody.innerHTML="";

let sortedPatients=[...patients].sort((a,b)=>
priorityValue[a.priority]-priorityValue[b.priority]
);

sortedPatients.forEach(p=>{

const row=`
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.symptoms}</td>
<td>${p.priority}</td>
</tr>
`;

tableBody.innerHTML+=row;

});

}


function servePatient(){

if(patients.length===0){
alert("No patients available");
return;
}

patients.sort((a,b)=>priorityValue[a.priority]-priorityValue[b.priority]);

let served=patients.shift();

alert("Serving Patient: "+served.name+" ("+served.priority+")");

displayPatients();

}