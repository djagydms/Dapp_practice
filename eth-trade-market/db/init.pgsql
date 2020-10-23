CREATE EXTENSION pgcrypto;

CREATE TABLE users (
email TEXT PRIMARY KEY,
username TEXT NOT NULL UNIQUE,
password TEXT NOT NULL,
wallet_address TEXT,
created_on TIMESTAMP NOT NULL
);

INSERT INTO users (email, username, password, wallet_address, created_on) VALUES (
'kmk@pusan.ac.kr',
'kmk',
crypt('p@ssw0rd', gen_salt('bf')),
'0x00',
'2020-09-23 10:18:30'
);

SELECT username
FROM users
WHERE email = 'kmk@pusan.ac.kr'
AND password = crypt('p@ssw0rd', password);