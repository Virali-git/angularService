export class CounterService{
 activeToInactiveCounter= 0;
 inactiveToActiveCounter = 0;



 incrementActiveToInactive(){
this.activeToInactiveCounter++;
console.log('Active To InActive' + this.activeToInactiveCounter);

 }

 incrementInactiveToActive(){
this.inactiveToActiveCounter++;
console.log('InActive To Active' + this.inactiveToActiveCounter);



 }
    }

//we will inject counter.service into user.service