
let num = 7;
let flag=0;     			  // changed count as flag m2.DONE 

for ( let i=1; i<=num; i++ ){   //update: i<=num  // m2.DONE
  if( num % i === 0 ){     
    flag++;
  }
}
if( flag==2 ){     		 //update : count==2;  // m2.DONE
  console.log("Yes");
}else {
  console.log("No")
}