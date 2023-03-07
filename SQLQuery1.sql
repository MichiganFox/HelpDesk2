--CREATE DATABASE TicketDB;
--USE TicketDB;

----Drop Table Ticket;
--CREATE TABLE Ticket(
--ID INT Identity(1,1) NOT NULL Primary Key,
--UserId NVARCHAR (20) NOT NULL,
--Email NVARCHAR(30) NOT NULL,
--Priority NVARCHAR (30),
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

--INSERT INTO Ticket(UserId, Email, Priority, DateSubmitted, DateCompleted, SubjectBrief, FullIssue, [Open])
--VALUES ('JohnJohnson', 'jj@gmail.com', 'Moderate Priority' '03/03/2023', Null, 'Can''t access outlook', 'I have been trying to login into outlook but my password is incorrect.', 1),
--('StanSmith', 'ss@gmail.com', 'Low Priority','03/07/2023', Null, 'The CIA website is down', 'I have been trying to go to the CIA website to update the threat level to terror alert orange for an hour and it''s not working. How will American''s know to be moderately on edge about vauge looming threats without it??.', 1),
--('DaleDenton', 'dd@gmail.com', 'High Priority', '03/06/2023', Null, 'My computer can''t connect to the internet', 'I have been trying to login into the internet for an hour, but it''s not working.', 1),
--('ChrisChristie', 'cc@gmail.com', 'Critical Priority', '03/07/2023', Null, 'My computer won''t turn on', 'The screen hasn''t turned on since the power outage', 1);
--Select * from Ticket;