
function minZ(asd){
	var a=1*asd.zn1.value;
	var b=1*asd.zn2.value;
	// var m=a;
	// if (b<m){ m=b;}
	asd.rez.value=Math.min(a, b);
	{alert('2)Минимальное значение:'+ ' ' +(asd.rez.value=Math.min(a, b)))
	}
}











// var tabElem
// document.form.name('search');


// function showMessage(){ alert ("Вы щелкнули по div-у"); }

// function areaRectangle(obj){ 
// var a=obj.t1.value; 
// var b=obj.t2.value; 
// var s=a*b;obj.res.value=s;  
// }
// function message(m){ 
// alert (m); 
// }
// function showDesc(obj, n){ 
// obj.desc.value=n; 
// }
//  function del(obj){ 
//  obj.desc.value=' '; 
//  }

// 	  var phrase = "Привет, " + name;
// 	  alert( phrase );}
// 	  sayHi('Вася');

// function sayHi(name) {
// 	  var phrase = 'Привет';
// 	  alert(phrase + ', ' + name);}
// 	 sayHi('Вася');  // Привет, Вася (*)
// 	 phrase = 'Пока';
// 	 sayHi('Вася'); // Пока, Вася (**)

// function sayHiBye(firstName, lastName) {
// 	alert( "Привет, " + getFullName() );
// 	alert( "Пока, " + getFullName() );
// 	function getFullName() {
// 		return firstName + " " + lastName;
// 	}
// }
// 	sayHiBye("Вася", "Пупкин"); // Привет, Вася Пупкин ; Пока, Вася Пупкин

// function makeCounter() {
//   	var currentCount = 1;
//  	return function() { // (**)return currentCount++;
//  	return currentCount++;
//    };
// }
// 	var counter = makeCounter(); // (*)// каждый вызов увеличивает счётчик и возвращает результат
// 	alert( counter() ); // 1 alert( counter() ); // 2
// 	alert( counter() ); // 3 // создать другой счётчик, он будет независим от первого
// 	var counter2 = makeCounter();
// 	alert( counter2() ); // 1

// function f() {}
// f.test = 5;
// alert( f.test );
