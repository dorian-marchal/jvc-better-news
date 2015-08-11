-- MySQL Script generated by MySQL Workbench
-- mar. 11 août 2015 17:34:34 CEST
-- Model: New Model    Version: 1.0
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema jvc-better-news
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `vote_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vote_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `votes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `votes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_ip` VARCHAR(45) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `vote_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_votes_vote_types_idx` (`vote_type_id` ASC),
  CONSTRAINT `fk_votes_vote_types`
    FOREIGN KEY (`vote_type_id`)
    REFERENCES `vote_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `vote_types`
-- -----------------------------------------------------
START TRANSACTION;
INSERT INTO `vote_types` (`id`, `label`) VALUES (1, '-1');
INSERT INTO `vote_types` (`id`, `label`) VALUES (2, '+1');

COMMIT;

