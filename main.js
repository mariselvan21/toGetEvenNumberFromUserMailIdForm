
var email=prompt('enter any emailId');
var str=email.toString();
var index=0;
var evenNumbers=[];
for(i=0;i<str.length;i++){
    if(str[i]%2==0){
        evenNumbers[index]=parseInt(str[i]);
        index++;
    }

}
console.log(evenNumbers);