DROP DATABASE IF EXISTS wawa_melon;

CREATE DATABASE wawa_melon;

USE wawa_melon;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(150),
  description varchar(280),
  stock int,
  fabric varchar(280),
  care varchar(280),
  designed_for varchar(280),
  fit varchar(280),
  sizes varchar(280),
  colors varchar(280),
  PRIMARY KEY (ID)
);