function almostIncreasingSequence(sequence) {
    var i = 0;
   var run = true;
   var isOneRemoved = false;

   while(run)
   {
       if(i <= sequence.length-2) 
       {
           if(sequence[i] >= sequence[i+1]) 
           {
               if(isOneRemoved) break;
               isOneRemoved = true;
               if(i <= sequence.length-3) 
               {
                   if(sequence[i] < sequence[i+2]) 
                   {
                       sequence.splice(i+1, 1);
                   }
                   else if(sequence[i+1] < sequence[i+2])
                   {
                       sequence.splice(i, 1);
                   }
               }
               else
               {
                   if(sequence[i] <= sequence[i+1])
                       sequence.splice(i+1, 1);
                   else if(sequence[i+1] <= sequence[i] && sequence[i+1] > sequence[i-1])
                       sequence.splice(i,1) 
                   else 
                   {
                       sequence.splice(i+1, 1);
                   }  
               }
           }
           else 
           {
               i++;
           }

       }
       else
       {
           run = false;
       }
   }
   
   for(var i = 0; i < sequence.length; i++) {
       if(i <= sequence.length-2) {
           if(!(sequence[i] < sequence[i+1])){
               return false;
           }
       }
   }

   return true;
}
