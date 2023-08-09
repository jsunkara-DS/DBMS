insert into shop values(1,"peoria",309856985,"Avin"),(2,"bloomington",305689532,"Jessie"),(3,"chicago",305689456,"Robert");

insert into electronics(e_id,type,model,price) values(1,"Laptop","DELL XPS",4000),(2,"TV","LG-OLED",5500),(3,"Monitor","MSI-GF",1000),(4,"Laptop","HP OMEN",3500);

insert into customers values(1,"Justin",356456892,"Peoria"),(2,"SAM",564895235,"Downtown"),(3,"Alex",356894561,"Russell"),(4,"Tony",305456235,"Morton");

insert into store_inventory values(1,1,5),(1,2,6),(1,3,4),(1,4,7),(2,1,3),(2,2,3),(2,3,5),(2,4,4),(3,1,5),(3,2,3),(3,3,5),(3,4,7);

insert into transactions(c_id,e_id,s_id,quantity) values(1,1,1,2),(2,4,2,1),(3,3,3,2);