-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema eventos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventos` DEFAULT CHARACTER SET utf8 ;
USE `eventos` ;

-- -----------------------------------------------------
-- Table `eventos`.`Eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eventos`.`Eventos` (
  `IdEvento` INT NOT NULL COMMENT 'PK del evento',
  `Titulo` VARCHAR(100) NULL COMMENT 'Titulo del evento',
  `Descripción` VARCHAR(255) NULL COMMENT 'Descripcion del evento',
  `Lugar` VARCHAR(255) NULL COMMENT 'Lugar del evento',
  `Destacado` TINYINT NULL DEFAULT 0 COMMENT 'Indica si es un evento destacado',
  `Imagen` VARCHAR(255) NULL COMMENT 'Contiene la url de la imagen',
  PRIMARY KEY (`IdEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eventos`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eventos`.`Usuarios` (
  `IdUsuario` INT NOT NULL,
  `Email` VARCHAR(80) NULL,
  `Password` VARCHAR(255) NULL,
  PRIMARY KEY (`IdUsuario`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
