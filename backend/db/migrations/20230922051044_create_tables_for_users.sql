-- migrate:up

-- CREATE TABLE IF NOT EXISTS quiz_type
-- (
--     quiz_type_id SERIAL PRIMARY KEY,
--     type VARCHAR(25)
-- );

-- CREATE TABLE IF NOT EXISTS subject
-- (
--     subject_id SERIAL PRIMARY KEY,
--     subject_name VARCHAR(45),
--     description VARCHAR(45),
--     code VARCHAR(25),
--     teacher_id INTEGER,
--     schedule VARCHAR(45)
-- );

-- CREATE TABLE IF NOT EXISTS subjects_students
-- (
--     subject_student_id SERIAL PRIMARY KEY,
--     subject_id INTEGER,
--     user_id INTEGER,
--     status INTEGER,
--     date_created timestamp DEFAULT now()
-- );

-- CREATE TABLE IF NOT EXISTS todos
-- (
--     id SERIAL PRIMARY KEY,
--     task VARCHAR(45),
--     is_completed BOOLEAN,
--     created_at timestamp NOT NULL DEFAULT now(),
--     updated_at timestamp NOT NULL DEFAULT now()
-- );

-- CREATE TABLE IF NOT EXISTS users
-- (
--     user_id SERIAL PRIMARY KEY,
--     lastname VARCHAR(45),
--     firstname VARCHAR(45),
--     middlename VARCHAR(45),
--     suffix VARCHAR(5),
--     email VARCHAR(45) UNIQUE ,
--     password VARCHAR(45),
--     user_type_id INTEGER,
--     date_created timestamp DEFAULT now()
-- );

-- ALTER TABLE IF EXISTS activity
-- ADD CONSTRAINT activity_subject_id_fkey FOREIGN KEY (subject_id)
-- REFERENCES subject (subject_id) MATCH SIMPLE
-- ON UPDATE NO ACTION
-- ON DELETE NO ACTION;


-- ALTER TABLE IF EXISTS activity_items
-- ADD CONSTRAINT activity_items_activity_id_fkey FOREIGN KEY (activity_id)
-- REFERENCES activity (activity_id) MATCH SIMPLE
-- ON UPDATE NO ACTION
-- ON DELETE NO ACTION;

-- ALTER TABLE IF EXISTS activity_items
-- ADD CONSTRAINT activity_items_quiz_type_fkey FOREIGN KEY (quiz_type)
-- REFERENCES quiz_type (quiz_type_id) MATCH SIMPLE
-- ON UPDATE NO ACTION
-- ON DELETE NO ACTION;


-- ALTER TABLE IF EXISTS subject
-- ADD CONSTRAINT subject_teacher_id_fkey FOREIGN KEY (teacher_id)
-- REFERENCES users (user_id) MATCH SIMPLE
-- ON UPDATE NO ACTION
-- ON DELETE NO ACTION;


-- ALTER TABLE IF EXISTS subjects_students
-- ADD CONSTRAINT subjects_students_user_id_fkey FOREIGN KEY (user_id)
-- REFERENCES users (user_id) MATCH SIMPLE
-- ON UPDATE NO ACTION
-- ON DELETE NO ACTION;

-- migrate:down

