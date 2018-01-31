let arr=[ "A","B","C" ] ;
for (let i in arr) {
	console.log("Gia tri: "+ i + " -- "+ arr[i]);
}

let object={  
	id: 111,     
	name: "Chien",     
	address: "ha Noi",     
	class:
	{        
		idClass: "aaa12",         
		nameClass: "Class Java",
		addressClass: "Hoang Dao Thuy"     
	}
}
let obj; for (let index in object) {
	console.log("index:"+ index + " -- value: "+ object[index]); 
	// obj =	object[index]; 
	if(index==='class')
	{
		for (let cb in object['class']) {
			console.log(cb + "--"+ object['class'][cb])
		}


	}
}
console.log("Detructuing")
console.log("Case Array")
let arr2 = ["C","b","D"];
let [a,b,c] = arr2;
for(let i of arr2)
{
	console.log("arr2: "+ i);
}

console.log("Case Object")

let obj2 = {
	id: 2,
	name: "cbv"
}
let{id, name, birt = "10/20/2015"} = obj2;
// for (let i in obj2){
	console.log(id +"---" +name+"=="+ birt);
// }

	// arroư function
	console.log("Ccác trường hợp function ")
	function func1(param1, param2)
	{
		console.log("Nguyen VAn "+ param1 + "/"+ "Que: "+param2);
	}

	var func2 = (a1, a2) =>
	{
		return ("Nguyen VAn "+ a1 + "/"+ "Que: "+a2);
	}
	var func3 = () =>
	{
		return "aaaaaaaaaaaaaaaaaaaaaaaa";
	}

// console.log(func1("Chien","Ha Noi"));
console.log("JKF: "+ func3())

let arrScore =[1,4,6,3,9,4,2]
arrScore.sort((x,y) => x<y?true:false)
console.log("Array Sort: "+ arrScore);


console.log("Year: "+ new Date().getFullYear());

// Class trong ES6
console.log("Class trong ES6");
class Person{
	constructor(name, address,age)
	{
		this.name=  name;
		this.address  =address;
		this.age = age;
	}
	showInfo()
	{
		console.log(this.name +"--"+  this.address +"--"+ this.getAge())
	}
	getAge()
	{
		let day  = new Date();
		let year = day.getFullYear();
		return year - this.age;
	}
}


let per = new Person("Chien","HA Noi",1992);
// console.log(per);
per.showInfo();

class student extends Person{
	constructor(name, address, age, score){
		super(name,address,age)	
		this.score = score;
	}

	showInfo()
	{
		super.showInfo();
		console.log("-"+ this.score);
	}


}

let stu = new student("Chien","HA Noi","1992", 12);
stu.showInfo();
