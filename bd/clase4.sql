show databases;
use tiendainformatica;
show tables;
select *from articulos;
select *from fabricantes;
/*
DDL -> definición: create, drop, alter
ALTER TABLE ____ OPERACION (add, drop, change, modify, rename)
*/
create table pruebas (
	codigo int,
    nombre varchar(30)
);
describe pruebas;
select *from pruebas;
#agregar columnas
alter table pruebas add column nuevaColumna varchar (10);
alter table pruebas add column edad int(3) first;
alter table pruebas add column otra int after edad;
#eliminar columnas
alter table pruebas drop column otra;
alter table pruebas drop column nombre,drop column nuevaColumna;
#modificar columnas
alter table pruebas change codigo id int;#nombre y tipo de datos
alter table pruebas modify id int;#tipo de datos
#modificar nombre de tabla
alter table pruebas rename lindatablita;
describe lindatablita;
show tables;
update fabricantes set nombre = "chanchun" where codigo = 7;
select *from fabricantes;
update fabricantes set nombre = "samsung" where nombre = "chanchun";
#modificar el nombre de los que tienen letra g
update fabricantes set nombre = "nuevos" where nombre like '%g%';
update fabricantes set nombre = "miércoles" where codigo in(5,6,7);
update fabricantes set nombre = "jueves" where codigo >= 5;
delete from fabricantes where codigo = 3 or codigo = 5;
use practica;
show tables;
select *from supermercado;
describe supermercado;
delete from supermercado where codigo = 56 or codigo= 84;

#PRACTICA FACULTAD

create database educacion;
use educacion;
create table facultad (
	codigo int auto_increment,
    nombre nvarchar (100),
    primary key(codigo)
);
#ON UPDATE CASCADE ON DELETE CASCADE
create table investigadores (
	dni varchar(8),
    nomapels nvarchar(25),
    facultad int,
    primary key(dni),
    foreign key(facultad) references facultad(codigo)
    ON DELETE CASCADE ON UPDATE CASCADE
);
create table equipos (
	numserie char(4),
    nombre nvarchar(100),
    facultad int,
    primary key(numserie),
    foreign key(facultad) references facultad(codigo)
    ON DELETE CASCADE ON UPDATE CASCADE
);
create table reserva(
	dni varchar(8),
    numserie char(4),
    comienzo datetime,
    fin datetime,
    foreign key(dni) references investigadores(dni),
    foreign key(numserie) references equipos(numserie)
    ON DELETE CASCADE ON UPDATE CASCADE
);
show tables;
insert into facultad (nombre) values ("computación"),("sistemas"),
	("Informática"),("Robótica"),("Medicina");
select *from facultad;
insert into investigadores	values 
	("123","Natalia",1),("456","Martin",2),("789","Javier",3),
    ("987", "Eliana",1),("654", "Lucía",5),("321","Gabriel",2);
select *from investigadores;

