/*ALTER DATABASE Concourse SET ENABLE_BROKER WITH ROLLBACK IMMEDIATE ;*/

------USE Concourse
GO

if OBJECT_ID('Comment') is not NULL
	drop table Comment
if OBJECT_ID('Post') is not NULL
	drop table Post
if OBJECT_ID('DiscussionBoardMember') is not NULL
	drop table DiscussionBoardMember
if OBJECT_ID('DiscussionBoardCode') is not NULL
	drop table DiscussionBoardCode
if OBJECT_ID('DiscussionBoard') is not NULL
	drop table DiscussionBoard
if OBJECT_ID('AdminData') is not NULL
	drop table AdminData

/*if OBJECT_ID('AspNetUsers') is not NULL
	drop table AspNetUsers*/
/*if OBJECT_ID('UserData') is not NULL
	drop table UserData*/


	Select * from AspNetUsers
	

CREATE TABLE AdminData
(
	Id int NOT NULL UNIQUE IDENTITY(150,1),
	UserId nvarchar(128) NOT NULL,
	AdminRole int DEFAULT 2,
	IsDeleted int DEFAULT 0,
	CONSTRAINT PK_AdminData_AspNetUserId FOREIGN KEY(UserId) REFERENCES dbo.AspNetUsers(Id),
	CONSTRAINT PK_UserId PRIMARY KEY(UserId)
);



CREATE TABLE DiscussionBoard(
	DiscussionBoardId int NOT NULL UNIQUE IDENTITY(100,1),
	AdminId nvarchar(128) NOT NULL,
	Title nvarchar(80) NOT NULL,
	BoardDescription nvarchar(500),
	DateCreated datetime DEFAULT GetDate(),
	IsDeleted int DEFAULT 0,
	CONSTRAINT FK_DiscussionBoard_AdminId FOREIGN KEY(AdminId) REFERENCES dbo.AspNetUsers(Id),
	/*CONSTRAINT PK_DiscussionBoard_AdminId_Title PRIMARY KEY(AdminId,Title)*/
	CONSTRAINT PK_DiscussionBoardId Primary Key(DiscussionBoardId)
);

CREATE TABLE DiscussionBoardCode(
	CodeId int NOT NULL IDENTITY(1000,1),
	DiscussionBoardId int NOT NULL,
	Code varchar(30) NOT NULL,
	DateCreated datetime DEFAULT GetDate(),
	IsDeleted int DEFAULT 0,
	CONSTRAINT FK_DiscussionBoardCode_DiscussionBoardID FOREIGN KEY(DiscussionBoardId) REFERENCES dbo.DiscussionBoard(DiscussionBoardId),
	CONSTRAINT PK_DiscussionBoardCode_CodeId PRIMARY KEY(CodeId)
);


Create TABLE DiscussionBoardMember(
	DiscussionBoardId int NOT NULL,
	UserId nvarchar(128) NOT NULL,
	UserRole int DEFAULT 3,
	UserName varchar(25),
	IsConfirmed int DEFAULT 0,
	IsBanned int DEFAULT 0,
	DateJoined datetime DEFAULT GetDate(),
	IsDeleted int DEFAULT 0,
	CONSTRAINT FK_DiscussionBoardMember_MemberId FOREIGN KEY(UserId) REFERENCES dbo.AspNetUsers(Id),
	CONSTRAINT FK_DiscussionBoardMember_DiscussionBoardId FOREIGN KEY(DiscussionBoardId) REFERENCES DiscussionBoard(DiscussionBoardId),
	CONSTRAINT PK_DiscussionBoardMember_DiscussionBoardId_UserId PRIMARY KEY(DiscussionBoardId,UserId)
);


CREATE TABLE Post(
	PostId int NOT NULL IDENTITY(50,1),
	DiscussionBoardId int NOT NULL,
	OwnerId nvarchar(128) NOT NULL,
	Title nvarchar(200) NOT NULL,
	Content nvarchar(2500) NOT NULL,
	ContentDelta nvarchar(2500) NOT NULL,
	DateCreated datetime DEFAULT GetDate(),
	IsDeleted int DEFAULT 0,
	CONSTRAINT FK_Post_DiscussionBoardId FOREIGN KEY(DiscussionBoardId) REFERENCES DiscussionBoard(DiscussionBoardId),
	CONSTRAINT FK_Post_OwnerId FOREIGN KEY(OwnerId) REFERENCES dbo.AspNetUsers(Id),
	CONSTRAINT PK_Post_PostId PRIMARY KEY(PostId)
);


CREATE TABLE Comment(
	CommentId int NOT NULL IDENTITY(100,1),
	DiscussionBoardId int NOT NULL,
	PostId int NOT NULL,
	OwnerId nvarchar(128) NOT NULL,
	Content nvarchar(2500) NOT NULL,
	ContentDelta nvarchar(2500) NOT NULL,
	DateCreated datetime DEFAULT GetDate(),
	IsDeleted int DEFAULT 0,
	CONSTRAINT FK_Comment_DiscussionBoardId FOREIGN KEY(DiscussionBoardId) REFERENCES dbo.DiscussionBoard(DiscussionBoardId),
	CONSTRAINT FK_Comment_PostId FOREIGN KEY(PostId) REFERENCES Post(PostId),
	CONSTRAINT FK_Comment_OwnerEmail FOREIGN KEY(OwnerId) REFERENCES dbo.AspNetUsers(Id),
	CONSTRAINT PK_Comment_CommentId PRIMARY KEY(CommentId)
);







Select *
FROM dbo.AspNetUsers;

Alter table dbo.AspNetUsers Add FirstName nvarchar(50)
Alter table dbo.AspNetUsers Add LastName nvarchar(50)


SELECT * 
FROM DiscussionBoard;

INSERT INTO dbo.DiscussionBoard (AdminId,Title,BoardDescription) 
VALUES ('40f559e6-418a-43f5-a7ad-d5a6058058ac','New', 'Test');

INSERT INTO dbo.DiscussionBoard (AdminId,Title,BoardDescription) 
VALUES ('40f559e6-418a-43f5-a7ad-d5a6058058ac','Board2', 'Board2 Description');


Select is_broker_enabled, name From sys.databases