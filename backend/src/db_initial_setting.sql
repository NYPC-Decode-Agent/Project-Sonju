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
    `age` INT DEFAULT 0,
    INDEX idx_user_id (user_id) -- 결합 인덱스
);


-- -----------------------------------------------------
-- Table `mydatabase`.`alarm`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`alarm` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,  -- 사용자 id를 저장할 열 
    `customer_id` INT NOT NULL,  -- 고객 id를 저장할 열
    `is_repetition` BOOLEAN DEFAULT FALSE,  -- 반복 여부를 저장할 열
    `day_of_week` JSON DEFAULT NULL,  -- 요일을 저장할 열
    `time` TIME DEFAULT NULL,  -- 시간을 저장할 열
    `is_active` BOOLEAN DEFAULT TRUE,  -- 활성화 여부를 저장할 열
    `script` VARCHAR(5000) DEFAULT NULL,
    INDEX idx_user_id_customer_id (user_id, customer_id), -- 결합 인덱스
    INDEX idx_time_is_active (time, is_active) -- 결합 인덱스
);


INSERT INTO users (phone, name, password) VALUES ('+821000000000','김현수', '1234');

Insert into customers (user_id, phone, name, age) values (1, '+821000000000', '조코딩', 25);

insert into alarm (user_id, customer_id, day_of_week, time, is_active, script) values (1, 1, '[true, true, true, true, true, true, true]', '04:10', true, '안녕하세요. 오늘은 무엇을 하실 예정인가요?');

insert into alarm (user_id, customer_id, day_of_week, time, is_active, script) values (1, 1, '[true, true, true, true, true, true, true]', '04:11', true, '조코딩님 오늘 약은 드셨나요?');
-- INSERT INTO users (username, password, age) VALUES ('조코딩', '1111',2);
-- INSERT INTO users (username, password, age) VALUES ('김태영', '2222',3);

-- INSERT INTO call_schedule (user_id, is_repetition, day_of_week, time) VALUES (1, TRUE, '[true, false, true, true, true, true, true]', '10:00:00');
