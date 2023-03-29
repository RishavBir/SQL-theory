


///////////////////////////////////////////// ///////////// QUERIES //////////////////////////////////////////////////////////////////////

/*

1) Showing of the databases in database server.           >>>>>   show databases;

2) Creating Database.                                     >>>>    create database [db_name];

3) Using the Database.                                    >>>>    use [db_name];

4) Delete database.                                       >>>>    drop database [db_name];

5) Creating Table in database                             >>>>    create table [table_name] (coloumn1's Name and type, 
                                                                  coloumn2's Name and type, coloumn3's Name and type.... ); 
                                                               
                                                                  Ex: create table user (id int primary key, name varchar(50) not null, 
                                                                  city varchar(50));

                                                                  // here primary key is used for uniqueness.


6) Showing all tables                                     >>>>    show tables;

7) Showing inside table                                   >>>>    desc [table_name];

8) Delete table                                           >>>>    drop table [table_name];

                                                                  NOTE: If table is dropped/delete then the datas associate with it 
                                                                        will also delete.


9) Rename the table                                       >>>>    alter table [old table_name] rename to [new table_name];

10) Delete all the datas inside table                     >>>>    truncate table [table_name];
    but not deleting the table

11) Delete only single data/ sinle column                 >>>>    delete from [table_name] where id = 10;
    inside table

12) Inserting data in the table                           >>>>    insert into [table_name] (col1,col2,col3....) values (for col1,col2,col3...);

                                                                  Ex: insert inro user (id,name,city) values(10, "Rishav", "Kolkata");


13) Viewing all datas inside table                        >>>>    select * from [table_name];

14) Adding new coloumn                                    >>>>    alter table [table_name] add [column_name];

                                                                  Ex: alter table user add country varchar(50);


15) Updating the data                                     >>>>    update [table_name] set [column_name] = " " where name = "Rishav";

                                                                  Ex: update user set country = "India" where name = "Rishav";


16) Getting the Range Data                                >>>>    select * from [table_name] where [col >= 24 and col < 20 ];

                                                                  Ex: select * from user where id >= 24 and id < 30;



17) Selecting multiple Data                               >>>>    select * from [table_name] where col in (col's value);

                                                                  Ex: select * from user where id in (23, 24,67,43);



18) Selecting data from top                               >>>>    select * from [table_name] limit (value);

                                                                  Ex: select * from user limit 5;



19) Arrange data in ascending order                       >>>>   select * from [table_name] order by [col];

20) Arrange data in descending order                      >>>>   select * from [table_name] order by [col] desc;

21) 


*/