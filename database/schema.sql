DROP DATABASE IF EXISTS wawa_melon;

CREATE DATABASE wawa_melon;

USE wawa_melon;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(150),
  description varchar(280),
  fabric varchar(500),
  care varchar(280),
  features varchar(280),
  colors varchar(5000),
  price varchar(15),
  PRIMARY KEY (ID),
);
