INSERT INTO Users
    (firstName, lastName, userName, about, email, password, createdAt, updatedAt)
VALUES
    ('yoan', 'ante', 'yoanante', 'super fun guy', 'yoanante@gmail.com', '123123asd', NOW(), NOW()),
    ('tim', 'allen', 'tallen', 'the tool man taylor', 'tallen@gmail.com', '123123asd', NOW(), NOW()),
    ('jimmy', 'john', 'jjohn', 'jj burgers', 'jj@gmail.com', '123123asd', NOW(), NOW());


INSERT INTO Blogs
    (title, subtitle, content, createdAt, updatedAt
    )
VALUES
    ('Code is not the reason for living', 'Trust me you will know it when you see it', 'For those who have seen the Earth 
from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. 
The things that we share in our world are far more valuable than those which divide us.
It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted 
out the planet Earth. I did not feel like a giant. I felt very, very small.
Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. 
We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal 
will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we 
are unwilling to postpone, and one which we intend to win.', NOW(), NOW());