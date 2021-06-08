show databases;#mostrar todas mis bd
/*comentarios:
DML-> SELECT, INSERT, UPDATE, DELETE
DDL-> CREATE, ALTER, DROP
*/
#comentarios
create database miprimerabd;#crear bd
drop database miprimerabd;#eliminar bd
use miprimerabd;
create table invento3(
	edad tinyint,
	dni int (8),
    precio double,
    nombre varchar(20),
    algo char(10),
    resp bool,
    fecha date
);
create table invento4(
	edad tinyint(20),
	dni int,
    precio double,
    nombre varchar(20),
    algo char,
    fecha date
);
show tables;#muestra todas las tablas dentro de una bd
describe invento;#muestra la estructura de mi tabla
describe invento4;




