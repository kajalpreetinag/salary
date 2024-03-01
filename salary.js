const input =require("readline-sync")
let salary = input.questionInt("enter salary: ")
if(salary<=10000){ HRA=salary*0.20; DA=salary*0.80; basicsalary=salary+HRA+DA;}
else if (salary<=20000){HRA=salary*0.25; DA=salary*0.90; basicsalary=salary+HRA+DA;}
else if(salary>20000){HRA=salary*0.30; DA=salary*0.95; basicsalary=salary+HRA+DA;}
console.log(basicsalary)