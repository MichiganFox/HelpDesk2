--CREATE DATABASE TicketDB;
--USE TicketDB;

----Drop Table Ticket;
--CREATE TABLE Ticket(
--ID INT Identity(1,1) NOT NULL Primary Key,
--UserId NVARCHAR (20) NOT NULL,
--Email NVARCHAR(30) NOT NULL,
--DateSubmitted DATE,
--DateCompleted DATE,
--SubjectBrief NVARCHAR(100),
--FullIssue NVARCHAR (700),
--[Open] BIT,
--);

--CREATE TABLE Favorites(
--	ID INT Identity(1,1) NOT NULL Primary Key,
--	[UID] NVARCHAR(20) NOT NULL,
--	DateAdded DATE,
--	TicketId INT FOREIGN KEY REFERENCES Ticket(ID),
--	);

--INSERT INTO Ticket(UserId, Email, DateSubmitted, DateCompleted, SubjectBrief, FullIssue, [Open])
--VALUES ('JohnJohnson', 'jj@gmail.com', '03/03/2023', Null, 'Can''t access outlook', 'I have been trying to login into outlook but my password is incorrect.', 1);

Select * from Ticket;