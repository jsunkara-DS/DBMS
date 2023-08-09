drop table shop;
drop table customers;
drop table store_inventory;
drop table electronics;
drop table transactions;

create table shop(s_id int AUTO_INCREMENT,s_branch varchar(20),s_contact varchar(20),s_manager varchar(20), primary key(s_id));

create table electronics(e_id int AUTO_INCREMENT,type varchar(20),model varchar(20),price numeric check(price>=0),primary key(e_id));

create table customers(c_id int AUTO_INCREMENT,c_name varchar(20),c_contact numeric,c_address varchar(20),primary key(c_id));

create table store_inventory(s_id int,e_id int,available int check(available>0),foreign key(s_id) references shop(s_id) on delete cascade on update cascade, foreign key(e_id) references electronics(e_id) on delete cascade on update cascade);
                    
create table transactions(c_id int ,e_id int,s_id int,quantity int default 1 check(quantity>=1),tprice numeric check(tprice>=0),
                         foreign key(c_id) references customers(c_id) on delete cascade on update cascade,
                         foreign key(e_id) references electronics(e_id) on delete cascade on update cascade,
                         foreign key(s_id) references shop(s_id) on delete cascade on update cascade
                         );