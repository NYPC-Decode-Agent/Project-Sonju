SET time_zone = 'Asia/Seoul';

-- -----------------------------------------------------
-- Table `mydatabase`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`users`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `phone` VARCHAR(255) NULL UNIQUE,  -- 전화번호를 저장할 열
    `name` VARCHAR(255) DEFAULT "",  -- 사용자 이름을 저장할 열
    `password` VARCHAR(255) NOT NULL  -- 비밀번호 해시를 저장할 열
);


-- -----------------------------------------------------
-- Table `mydatabase`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`customers`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,  -- 사용자 id를 저장할 열
    `phone` VARCHAR(255) NULL UNIQUE,  -- 전화번호를 저장할 열
    `name` VARCHAR(255) DEFAULT "",  -- 사용자 이름을 저장할 열
    `birth_date` DATE DEFAULT "2000-01-01",  -- 생년월일을 저장할 열
    INDEX idx_user_id (user_id) -- 결합 인덱스
);


-- -----------------------------------------------------
-- Table `mydatabase`.`alarm`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`alarm` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,  -- 사용자 id를 저장할 열 
    `name` VARCHAR(255) DEFAULT "",  -- 사용자 이름을 저장할 열
    `phone` VARCHAR(255) NULL,  -- 전화번호를 저장할 열
    `birth_date` DATE DEFAULT "2000-01-01",  -- 생년월일을 저장할 열
    `address` VARCHAR(255) DEFAULT "",  -- 주소를 저장할 열
    `is_repetition` BOOLEAN DEFAULT TRUE,  -- 반복 여부를 저장할 열
    `time` JSON NOT NULL,  -- 알람 시간을 저장할 열
    `is_active` BOOLEAN DEFAULT TRUE,  -- 활성화 여부를 저장할 열
    `ai_script` VARCHAR(5000) DEFAULT NULL,
    `memo` VARCHAR(5000) DEFAULT NULL,
    `emergency_phone` VARCHAR(255) DEFAULT NULL,
    `emergency_count` INT DEFAULT 0, -- 결합 인덱스
    INDEX idx_user_id (user_id)
);


INSERT INTO users (phone, name, password) VALUES ('+821000000000','김현수', '1234');

Insert into customers (user_id, phone, name, birth_date) values (1, '+821000000000', '조코딩', "1990-01-01");

INSERT INTO `mydatabase`.`alarm` (
  `user_id`, `name`,`phone`, `birth_date`, `address`, `is_repetition`, `time`, `is_active`, `ai_script`, `memo`, `emergency_phone`, `emergency_count`
) 
VALUES 
  (1, '김현수','+821012345678', '1990-01-01', 'Seoul, South Korea', TRUE,'[null,null,null,null,null,null,"19:46"]', TRUE, 'AI Script Example', 'Remember to call in the morning.', '+821012345678', 1),
  (2, '김태영','+821012345678', '1985-02-15', 'Busan, South Korea', FALSE, '["19:42",null,null,null,null,null,"19:45"]', FALSE, NULL, 'Important meeting on Monday', NULL, 0),
  (3, '김현수2','+821012345678', '2000-03-20', '', TRUE, '["19:43",null,null,null,null,null,null]', TRUE, 'AI Script for emergency', NULL, '010-8765-4321', 3);
