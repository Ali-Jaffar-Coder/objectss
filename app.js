var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},

    {name:"cookie",price:"30", quantity:"9"},
   
    {name:"shirt",price:"880", quantity:"1"},
   
    {name:"pen",price:"100", quantity:"2"}

];


var dict = {};

for (var i =0 ; i<itemsArray.length;i++){

console.log(itemsArray[i].name);
dict[itemsArray[i].name]=itemsArray[i].price * itemsArray[i].quantity; 


}

console.log(dict);



function Person(name,age,classification){

this.name = name;
this.age = age;
this.classification = classification;

}



var person1 = new Person('Ali',23,'Alevels');
var person2 = new Person('Hamza',21,'Inter');
var person3 = new Person('Taha',17,'Metric');



var objq2={

name:"",
email:"",
password:"",
age:"",
gender:"",
city:"",
country:""





};


if (objq2['age'] === undefined){

console.log("Age property undefined");

}
else{

console.log("Age property Defined");

}



if (objq2['country'] === undefined){

    console.log("Country property undefined");
    
    }
    else{
    
    console.log("Country property Defined");
    
    }
    


    if (objq2['firstName'] === undefined){

        console.log("firstName property undefined");
        
        }
        else{
        
        console.log("firstName property Defined");
        
        }

        



        if (objq2['lastName'] === undefined){

            console.log("lastName property undefined");
            
            }
            else{
            
            console.log("lastName property Defined");
            
            }
            


function Population(name,gender,address,education,profession){

this.name=name;
this.gender=gender;
this.address=address;
this.education=education;
this.profession=profession;


}


function takeinput(){


var n= document.getElementById('name').value;

var g= document.getElementById('gen').value;

var a= document.getElementById('address').value;

var e= document.getElementById('education').value;

var p= document.getElementById('profession').value;



var obj = new Population(n,g,a,e,p);

document.write(obj.name + ' ' + obj.gender + ' ' + obj.address + ' ' + obj.education + ' ' + obj.profession);


}