

//////////////////////////////////////////////// CLAUSES //////////////////////////////////////////////////////////



/*

                                                >>>>>>  WHERE CLAUSE  <<<<<<


 select * from [table_name] where col = value;

 Ex1: select * from user where city = "Kolkata";
 Ex2: select name,city,country from user where city = "Kolkata";

 Since we have used WHERE clause, this will return those data only whose city is Kolkata.


////////////////////////////////////////////////////////


                                                >>>>>> DISTINCT <<<<<<

seletc distinct (col) from [table_name];

Ex: seletc distinct (country) from user;

Since we have used DISTINCT , the repetation will not be occur.  


/////////////////////////////////////////////////////////


                                                >>>>>>> AND <<<<<<<<

select * from [table_name] where [col] = " " and [col] = " ";

Ex: select * from user where country = "India" and city = "Kolkata";


Here both the condition should be satisfied.

///////////////////////////////////////////////////////////



                                                >>>>>>> OR <<<<<<<<

select * from [table_name] where [col] = " " or [col] = " ";

Ex: select * from user where country = "India" or city = "Kolkata";


Here only one of the condition should be satisfied.


/////////////////////////////////////////////////////////////////////



>>>>>>>> LIKE <<<<<<<<<<<<<<





*/