show databases;
#ddl creamos bd
create database practica;
use practica;
#keys: pk: primary key, foreign key, unique
create table usuarios(
	id int(4) auto_increment,
    nombre varchar(20) not null,
    apellido varchar (20),
    edad int,
    primary key(id)
);
describe usuarios;
drop table usuarios;
create table supermercado(
	codigo int auto_increment, 
	nombre varchar(30) not null,
    direccion varchar(100) default "Buenos Aires",
    telefono varchar(15),
    meta int not null,
    numero_empleados tinyint,
    activo bool,
    primary key(codigo),
    unique(nombre)
);
drop table supermercado;
describe supermercado;
#dml insertar datos
insert into usuarios (nombre,apellido,edad)
	values("Pepe","Perez",100);
insert into usuarios (nombre,apellido,edad)
	values("","Blanco",18);
insert into usuarios (apellido,edad)
	values("Blanco",18);
insert into usuarios (edad)
	values(40);
insert into usuarios (nombre,apellido,edad) 
	values ("Ana","Kannemann",20),
			("José","Terán",45),
            ("Candela","Duque",16),
            ("Lourdes","Vera",5);
#dml consultar datos
select *from usuarios;
describe usuarios;
insert into supermercado 
	(nombre,direccion,telefono,meta,numero_empleados,activo)
values
	("Chango más","Av Rivadavia","1-23",90000,20,1),
    ("Día","09 de julio","4-56",145600,35,1),
    ("Disco","Cordoba","7-89",0,0,0),
    ("Super Alexis","Belgrano 5311","9-87",52900,100,1);
select *from supermercado;
select nombre from supermercado;
select nombre,direccion from supermercado;#solo muestra dos columnas
select meta*1.05 as META from supermercado;#as es para agregar un alias
select direccion as 'DIRECCIÓN DEL SUPER' FROM supermercado;
select *from supermercado order by meta desc;#ordenamos asc o desc
select *from supermercado limit 1 offset 2;#limit limitar, offset desde donde
select sum(meta) from supermercado;#sumar
select avg(meta) from supermercado;#promedio
select min(meta) from supermercado;
select max(meta) from supermercado;
select round(avg(meta)) as 'valor redondeado' from supermercado;#redondea el promedio de meta
select concat('Empleados ;): ',numero_empleados,' - Nombre: ',nombre) as EMPLEADOS from supermercado;
select UPPER(nombre) from supermercado;
select lower(nombre) from supermercado;
select substring(telefono,1,2) from supermercado;#columna,a partir de donde, cantidad a mostrar
select *from usuarios;
#con la clausula where < > <= >= = <>
select *from usuarios where id = 5;
select *from usuarios where edad > 40;
select *from usuarios where edad < 40;
# and or
select *from usuarios where nombre = 'Candela' or edad = 18;
select *from usuarios where nombre = 'Candela' and edad = 16;


