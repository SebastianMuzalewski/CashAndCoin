function myFunction(){
 
now = new Date();

hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
  
alert("\
Warning!\n\
The coins last from the following start and end dates:\n\
Start Date:01/12/20 at 23:59:59\n\
End Date:31/12/20 at 23:59:59\n\
" + "The Current time is: " +
(hours + ":"+ mins + ":" + secs) 
);
    
}

