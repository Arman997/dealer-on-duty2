function solution(sequence) {
    let sum = 0;
       for(let i = 0; i < sequence.length; i++) {
         if(i === 0 && sequence[i] >= sequence[i+1]){
           sum += 1;
           sequence.splice(i,1)
           i = 0;
         }if(sequence[i] >= sequence[i+1] && sequence[i] >= sequence[i+2]){
            sum += 1;
            sequence.splice(i, 1)
            i = 0;
         }if(sequence[i] >= sequence[i+1] ){
           sum += 1;
           sequence.splice(i+1, 1)
           i = 0;
         }
           
       }
         if(sum > 1){
           return false;
         }
       return true;
        }

console.log(solution([1, 2, 3, 4, 99, 5, 6]));
