DROP TABLE IF EXISTS menus_v3;
CREATE TABLE menus_v3 (
  idx SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  json JSONB NOT NULL DEFAULT '{"version":3,"skinIdx":0,"titles":[],"headers":[],"groups":[],"footers":[]}'::jsonb
);
