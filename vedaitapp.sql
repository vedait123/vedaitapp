CREATE DATABASE vedaitapp;
USE vedaitapp;

-- user created time, last login time, password changed time, 
-- CREATE TABLE users (
-- fullname varchar(50), 
-- email varchar(100),
-- phone int,
-- enquiry_id varchar(20),
-- user_password varchar(20),
-- user_type varchar(20),
-- student_id varchar(20)
-- );

-- ALTER TABLE users 
-- MODIFY COLUMN phone varchar(20);

ALTER TABLE users 
ADD COLUMN password varchar(20);

-- CREATE TABLE courses (
-- course_id varchar(20),
-- course_name varchar(100),
-- trainer_name varchar(50),
-- start_date date,
-- end_date date,
-- start_time time,
-- end_time time,
-- student_count int
-- );

-- DID NOT CREATE TABLE YET
-- CREATE TABLE login (
-- email varchar(50),
-- password varchar(50)
-- );

-- DID NOT CREATE TABLE YET
-- CREATE TABLE signup (
-- fullName varchar (50),
-- email varchar(50),
-- password varchar(50)
-- );

-- insert into users (fullname, email, phone) values ('Ananya Amireddy', 'ananyareddy412@gmail.com', '6303012091');

select * from users;

delete from users where fullname = 'Abhi';

-- set sql_safe_updates = 0;