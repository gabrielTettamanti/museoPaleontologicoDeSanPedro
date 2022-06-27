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


-- -----------------------------------------------------
-- Table `museo_db`.`subscribers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `museo_db`.`subscribers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `staus` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
