show databases;
use practica;
show tables;
select *from supermercado;
select *from supermercado where meta > 80000 and meta < 110000;
select *from supermercado where meta between 80000 and 110000;#rango 
select *from supermercado where meta in(90000,70000,52900);#buscar datos del parametro
select *from supermercado where meta not between 80000 and 110000;
select *from supermercado where meta not in(90000,70000,52900);
select *from supermercado where nombre like '%a%'; #buscar una palabra
select *from supermercado where nombre like '%más%';#buscar una palabra
select *from supermercado where nombre like 'd%';#buscar las palabras con inicial d
select *from supermercado where nombre like '%o';#buscar las palabras que termine con o 
select *from supermercado order by codigo desc;
select *from supermercado group by codigo having numero_empleados < 100;
select *from supermercado;
insert into supermercado 
	(nombre,direccion,telefono,meta,numero_empleados,activo)
values
	("Chango más","Av Rivadavia","1-23",90000,20,1),
    ("Día","09 de julio","4-56",145600,35,1),
    ("Disco","Cordoba","7-89",0,0,0),
    ("Super Alexis","Belgrano 5311","9-87",52900,100,1);
delete from supermercado where codigo = 4;
delete from supermercado;#borrar info, dml
truncate table supermercado;
#modificar, dml
update supermercado set nombre = 'ultramercado más' where numero_empleados = 20;
update supermercado set meta = 150000 where activo = 1;
update supermercado set codigo = 84 where codigo = 2;
update supermercado set direccion = 'Patagonia', telefono = '3-45' where codigo = 1;
insert into supermercado 
	(nombre,direccion,telefono,meta,numero_empleados,activo)
values
	("Dolar","Principal","1-259",7500,40,1);
    
    
    
#PRACTICA TIENDA INFORMATICA************
create database tiendainformatica;
show databases;
use tiendainformatica;
create table fabricantes (
	codigo int auto_increment,
    nombre nvarchar(100),
    primary key(codigo)
);
create table articulos (
	codigo int auto_increment,
    nombre nvarchar(100),
    precio int,
    fabricante int,
    primary key(codigo),
    foreign key(fabricante) references fabricantes(codigo)
);
insert into fabricantes (nombre) values ('hp'),('lg'),('dell'),
	('asus'),('mashintosh'),('msi'),('sansumg');
describe fabricantes;
select *from fabricantes;
insert into articulos (nombre,precio,fabricante) values
	('notebook', 100, 1),('monitor', 50, 1),
    ('monitor',40,2),('pc',220, 3),('teclado',10,3),
    ('mouse',16,6),('parlante',35,6),('microfono', 62, 6),
    ('monitor',58,7);
describe articulos;
select *from articulos;
#consulta con inner join
select *from fabricantes inner join articulos
	on fabricantes.codigo = articulos.fabricante;
#consulta sin inner join
select *from fabricantes, articulos
	where fabricantes.codigo = articulos.fabricante;

select f.nombre as 'NOMBRE FABRICANTE',a.nombre as 'NOMBRE ARTICULO', 
	a.precio from fabricantes as f 
	inner join articulos as a
	on f.codigo = a.fabricante;




