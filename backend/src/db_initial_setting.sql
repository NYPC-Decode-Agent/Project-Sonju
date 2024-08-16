SET time_zone = 'Asia/Seoul';

-- -----------------------------------------------------
-- Table `mydatabase`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`users`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `phone` VARCHAR(255) NULL UNIQUE,  -- 전화번호를 저장할 열
    `name` VARCHAR(255) DEFAULT "",  -- 사용자 이름을 저장할 열
    `password` VARCHAR(255) NOT NULL,  -- 비밀번호 해시를 저장할 열
    -- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- `deleted_at` TIMESTAMP DEFAULT NULL
);


-- -----------------------------------------------------
-- Table `mydatabase`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydatabase`.`customer`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,  -- 사용자 id를 저장할 열
    `phone` VARCHAR(255) NULL UNIQUE,  -- 전화번호를 저장할 열
    `name` VARCHAR(255) DEFAULT "",  -- 사용자 이름을 저장할 열
    `age` INT DEFAULT 0,  -- 나이를 저장할 열
    -- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- `deleted_at` TIMESTAMP DEFAULT NULL,
    INDEX idx_user_id_deleted_at (user_id, deleted_at) -- 결합 인덱스
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
    `script` VARCHAR(5000) DEFAULT NULL,  -- 스크립트를 저장할 열
    -- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- `deleted_at` TIMESTAMP DEFAULT NULL,
    INDEX idx_user_id_customer_id_deleted_at (user_id, customer_id, deleted_at), -- 결합 인덱스
    INDEX idx_time_is_active_deleted_at (time, is_active, deleted_at) -- 결합 인덱스
);


-- INSERT INTO users (username, password, age) VALUES ('김현수', '3333',1);
-- INSERT INTO users (username, password, age) VALUES ('조코딩', '1111',2);
-- INSERT INTO users (username, password, age) VALUES ('김태영', '2222',3);

-- INSERT INTO call_schedule (user_id, is_repetition, day_of_week, time) VALUES (1, TRUE, '[true, false, true, true, true, true, true]', '10:00:00');
