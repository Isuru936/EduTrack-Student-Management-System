//Database name studentmanagement

CREATE TABLE admin (
  username VARCHAR(50),
  password VARCHAR(50),
  email VARCHAR(50)
);
INSERT INTO admin (username, password, email)
VALUES
    ('Naveen', 'Devapriya232', 'ekanayake1212@gmail.com'),
    ('isuru', 'isuru123', 'isuru233@gmail.com'),
    ('Miya', 'Miya4545', 'miya34@gmail.com'),
    ('Jack', 'jack4545', 'Hanma343@gmail.com'),
    ('Baki', 'baki2434', 'baki2323@gmail.com');


CREATE TABLE studentdata (
  Sid INT,
  firstname VARCHAR(10),
  lastname VARCHAR(10),
  email VARCHAR(20),
  city VARCHAR(10),
  guardian VARCHAR(10),
  course VARCHAR(10),
  subject VARCHAR(10)
  
);

INSERT INTO studentdata (Sid, firstname, lastname, email, city, guardian, subject, course)
VALUES
    (1, 'John', 'Doe', 'john.doe@example.com', 'New York', 'Jane', 'Foundation', 'OOP'),
    (2, 'Alice', 'Smith', 'alice.smith@example.com', 'Los Angeles', 'Bob', 'HND', 'HCI'),
    (3, 'Mike', 'Johnson', 'mike.johnson@example.com', 'Chicago', 'Sarah', 'Degree', 'IP'),
    (4, 'Emily', 'Brown', 'emily.brown@example.com', 'Houston', 'David', 'Degree', 'SE'),
    (5, 'Alex', 'Wilson', 'alex.wilson@example.com', 'San Francisco', 'Olivia', 'Degree', 'OOP');


