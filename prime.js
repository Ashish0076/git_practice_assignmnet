
let num = 7;
let count=0;     

for ( let i=1; i<num; i++ ){   //update: i<=num
  if( num % i === 0 ){     
    count++;
  }
}
if( count==1 ){      //update : count==2;
  console.log("Yes");
}else {
  console.log("No")
}