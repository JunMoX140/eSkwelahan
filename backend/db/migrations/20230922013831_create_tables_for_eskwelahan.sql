-- migrate:up
CREATE TABLE activity_items(
    activity_item_id SERIAL PRIMARY KEY,
    activity_id INTEGER,
    quiz_type INTEGER,
    activity_content json
);

-- migrate:down

