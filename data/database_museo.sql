-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema museo_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema museo_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `museo_db` DEFAULT CHARACTER SET utf8 ;
USE `museo_db` ;

-- -----------------------------------------------------
-- Table `museo_db`.`notices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `museo_db`.`notices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `date` DATE NULL,
  `text` LONGTEXT NULL,
  `img` MEDIUMTEXT NULL,
  `status` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO notices VALUES (1, "DESCUBREN RASTROS DEL MAR DE HACE 5.000 AÑOS EN VUELTA DE OBLIGADO, A 18 KM DE SAN PEDRO",null," El equipo del Museo Paleontológico .","new1.jpeg",1);
-- -----------------------------------------------------
-- Table `museo_db`.`sponsores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `museo_db`.`sponsores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `img` MEDIUMTEXT NULL,
  `status` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `museo_db`.`administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `museo_db`.`administrators` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NULL,
  `password_conf` VARCHAR(200) NULL,
  `status` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO museo_db.administrators(id, email, password, password_conf, status) 
VALUES 
(1, "gabrieltettamanti.dev@gmail.com", "$2a$10$JpwojoKdxtx22/nT59315OecsWm4mTFabhQwLjs4C2I1XqimTarlC", "$2a$10$JpwojoKdxtx22/nT59315OecsWm4mTFabhQwLjs4C2I1XqimTarlC", 1),
(2, "gcfosiles@gmail.com", "$2a$10$JpwojoKdxtx22/nT59315ONv/V/R6GuJ3Q0ZnnQc5WVNo72RzDCf6", "$2a$10$JpwojoKdxtx22/nT59315ONv/V/R6GuJ3Q0ZnnQc5WVNo72RzDCf6", 1);

-- -----------------------------------------------------
-- Table `museo_db`.`subscribers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `museo_db`.`subscribers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `status` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
