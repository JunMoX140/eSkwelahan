-- migrate:up
CREATE TABLE IF NOT EXISTS students_activity
(
    student_activity_id SERIAL PRIMARY KEY,
    activity_id INTEGER,
    student_id INTEGER,
    status INTEGER,
    date_created timestamp
);


-- migrate:down

