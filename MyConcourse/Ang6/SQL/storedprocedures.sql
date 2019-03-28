/*start discussion board stored procedures*/


-- Stored Procedure that retrieves the discussion boards created by the user
Drop PROC spGetDiscussionBoardsByUserId
Go
Create PROC spGetDiscussionBoardsByUserId
@UserId nvarchar(128)
AS
BEGIN
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			Declare @IsValId int
			exec spIsValIdUser @Id = @UserId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			Select dbo.DiscussionBoard.AdminId, dbo.DiscussionBoardCode.Code,dbo.DiscussionBoardCode.CodeId,dbo.DiscussionBoard.DiscussionBoardId, 
			Title, BoardDescription, IsConfirmed, IsBanned, IIF(dbo.DiscussionBoard.AdminId = @UserId, 1, 0) As 'IsOwner', dbo.AspNetUsers.FirstName, dbo.AspNetUsers.LastName
			From dbo.DiscussionBoard
			Join dbo.DiscussionBoardMember 
			ON dbo.DiscussionBoard.DiscussionBoardId = dbo.DiscussionBoardMember.DiscussionBoardId
			Join dbo.DiscussionBoardCode
			On dbo.DiscussionBoardCode.DiscussionBoardId = dbo.DiscussionBoard.DiscussionBoardId
			Join dbo.AspNetUsers
			On dbo.AspNetUsers.Id = dbo.DiscussionBoardMember.UserId
			Where  dbo.DiscussionBoard.IsDeleted = 0 And dbo.DiscussionBoardMember.UserId = @UserId
			Order By dbo.DiscussionBoard.DateCreated ASC
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Set @ErrorMessage = ERROR_MESSAGE()
		RAISERROR(@ErrorMessage,16,1)
	End Catch
END
GO


--  Stored procedure that creates a discussion board
Drop Proc spCreateDiscussionBoard
Go
Create Proc spCreateDiscussionBoard
	@UserId nvarchar(128),
	@Title  nvarchar(80),
	@Code   nvarchar(30),
	@Description  nvarchar(500)
As
Begin
	DECLARE @ErrorMessage NVARCHAR(MAX)
	Begin Try
		Begin Transaction
		
			If( @UserId = NULL OR @Title = NULL OR @Description = NULL OR @Code = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End


			Declare @IsValid int
			exec spIsValidUser @Id = @UserId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End


			-- Throw an error to the calling application if a discussion board with the same title has already been created by the user
			If Exists(
				Select DiscussionBoardId 
				From dbo.DiscussionBoard 
				Where Lower(Title) = Lower(@Title) And AdminId = @UserId And IsDeleted = 0)
			Begin
				RAISERROR('INVALID_REQUEST_ALREADY_EXISTS',16,1)
				RETURN
			End
			Else
			Begin	

				Insert Into dbo.DiscussionBoard(AdminId,Title,BoardDescription)
				Values(@UserId,@Title,@Description);

				Declare @DiscussionBoardId int = (Select DiscussionBoardId From dbo.DiscussionBoard Where IsDeleted = 0 And AdminId = @UserId And Title = @Title)

				Insert Into dbo.DiscussionBoardCode(DiscussionBoardId,Code)
				Values(@DiscussionBoardId,@Code)

				Insert Into dbo.DiscussionBoardMember(DiscussionBoardId,UserId,UserRole,IsConfirmed)
				Values(@DiscussionBoardId,@UserId,0,1)
			End
		Commit Transaction
	End Try
	Begin Catch
		IF @@TRANCOUNT > 0
		Begin
			Rollback Transaction
		End
		Select @errorMessage = ERROR_MESSAGE();
		RAISERROR(@errorMessage,16,1)
	End Catch
End
Go

--Stored Procedure that updates a specified discussion board
DROP Proc spUpdateDiscussionBoard
GO
Create Proc spUpdateDiscussionBoard
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@NewTitle nvarchar(80),
	@NewDescription nvarchar(500)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @NewTitle = NULL OR @NewDescription = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			Declare @isValid int
			exec spIsValidUser @id = @userId, @Status = @isValid output
			If @isValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			
			Set @isValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @isValid output
			If @isValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End



			-- Throws an error back to the calling application if the user does not have the correct role to remove a user from the discussion board
			Declare @UserValidation nvarchar(128);
			Set @UserValidation = (
				Select Id
				From dbo.AspNetUsers
				Where dbo.AspNetUsers.Id = @UserId 
				AND (@UserId IN ( Select dbo.AdminData.UserId From AdminData)
				OR @UserId IN (Select UserId From dbo.DiscussionBoardMember
				Where dbo.DiscussionBoardMember.UserRole = 0 AND dbo.DiscussionBoardMember.UserId = @UserId AND dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId)))

			If @UserValidation IS NULL
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
				RETURN
			End

			
			Declare @TitleValidation nvarchar(80);
			Set @TitleValidation = (
				Select Title
				From dbo.DiscussionBoard
				Where dbo.DiscussionBoard.Title = @NewTitle AND dbo.DiscussionBoard.DiscussionBoardId <> @DiscussionBoardId AND dbo.DiscussionBoard.AdminId = @UserId
			)

			If @TitleValidation <> NULL
			Begin
				RAISERROR('INVALID_REQUEST_ALREADY_EXISTS',16,1)
				RETURN
			End
	
			Update dbo.DiscussionBoard
			Set Title = @NewTitle, BoardDescription = @NewDescription
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0
			
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE()
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

--Stored procedure that deletes a specified discusion board
Drop Proc spDeleteDiscussionBoard
Go
Create Proc spDeleteDiscussionBoard
	@UserId nvarchar(128),
	@DiscussionBoardId int
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If( @UserId = NULL OR @DiscussionBoardId = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			Set @IsValid = 0
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
				RETURN
			End
			
				
			-- delete the entry code associated with the discussion board
			Update dbo.DiscussionBoardCode
			Set IsDeleted = 1
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0

			-- delete members associated with the discussion board
			Update dbo.DiscussionBoardMember
			Set IsDeleted = 1
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0

			-- delete posts associated with the discussion board
			Update dbo.Post
			Set IsDeleted = 1
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0

			-- delete comments associated with the discussion board
			Update dbo.Comment
			Set IsDeleted = 1
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0

			-- delete the requested discussion board by updating the delete flag to 1 
			Update dbo.DiscussionBoard
			Set IsDeleted = 1
			Where AdminId = @UserId And DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0

			
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE()
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spUpdateDiscussionBoardCode
Go
Create Proc spUpdateDiscussionBoardCode
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@NewCode varchar(30)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @NewCode = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End
			
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			Set @IsValid = 0
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
				RETURN
			End


			Update dbo.DiscussionBoardCode
			Set Code = @NewCode
			Where DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0
			
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE()
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spCreatePost
Go
Create Proc spCreatePost
	@DiscussionBoardId int,
	@UserId nvarchar(128),
	@Title nvarchar(150),
	@Content nvarchar(2500),
	@ContentDelta nvarchar(2500)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			

			If( @UserId = NULL  OR @DiscussionBoardId = NULL OR @Title = NULL OR @Content = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member or admin of the requested discussion board
			Declare @IsMember int;
			Declare @IsAdmin int
			Set @IsMember = 0;
			Set @IsAdmin = 0

			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1
			Begin	
				exec spIsAdmin @UserId = @UserId, @Status=@IsAdmin output
				If @IsAdmin = 0
				Begin
					RAISERROR('INVALID_REQUEST_GROUP',16,1)
					RETURN
				End	
			End

			-- check if the user is confirmed by the adminstrator to create a post
			If (@IsMember = 1 And @IsAdmin <> 1)
			Begin
				Declare @IsConfirmed int
				Set @IsConfirmed = 0
				exec spIsConfirmed @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsConfirmed output
				If @IsConfirmed <> 1
				Begin
					RAISERROR('INVALID_REQUEST_NOT_CONFIRMED',16,1)
					RETURN
				End
			End

			Insert dbo.Post(DiscussionBoardId,OwnerId,Title,Content,ContentDelta)
			Values (@DiscussionBoardId, @UserId, @Title, @Content, @ContentDelta)
			

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go


Drop Proc spUpdatePost
Go
Create Proc spUpdatePost
	@DiscussionBoardId int,
	@UserId nvarchar(128),
	@PostId int,
	@NewTitle nvarchar(150),
	@NewContent nvarchar(2500),
	@NewContentDelta nvarchar(2500)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @NewTitle = NULL OR @NewContent = NULL OR @PostId = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board
			
			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output

			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1 And @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_GROUP',16,1)
				RETURN	
			End 

			-- check if the user is confirmed by the adminstrator to create a post
			If (@IsMember = 1 And @HasPermission <> 1)
			Begin
				Declare @IsConfirmed int
				Set @IsConfirmed = 0
				exec spIsConfirmed @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsConfirmed output
				If @IsConfirmed <> 1
				Begin
					RAISERROR('INVALID_REQUEST_NOT_CONFIRMED',16,1)
					RETURN
				End

				Declare @CanUpdate nvarchar(128)
				Set @CanUpdate = (Select OwnerId From dbo.Post Where dbo.Post.PostID = @PostId And OwnerId = @UserId And dbo.Post.IsDeleted = 0)
				If @CanUpdate IS NULL
				Begin
					RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
					RETURN
				End
			End

			Update dbo.Post
			Set Title = @NewTitle, Content = @NewContent, ContentDelta = @NewContentDelta
			Where PostId = @PostId

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spDeletePost
Go
Create Proc spDeletePost
	@DiscussionBoardId int,
	@UserId nvarchar(128),
	@PostId int
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @PostId = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			Declare @HasPermission int
			Set @HasPermission = 0
			exec spHasPermissions @UserId = @UserId,@DiscussionBoardId = @DiscussionBoardId, @Status=@HasPermission output
			If @HasPermission = 0
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSIONS',16,1)
				RETURN
			End	
			

			Update dbo.Post
			Set IsDeleted = 1
			Where dbo.Post.PostId = @PostId AND dbo.Post.DiscussionBoardId = @DiscussionBoardId

			Update dbo.Comment
			Set IsDeleted = 1
			Where dbo.Comment.PostId = @PostId

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spGetPosts
Go
Create Proc spGetPosts
	@DiscussionBoardId int,
	@UserId nvarchar(128)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
		If( @UserId = NULL OR @DiscussionBoardId = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board
			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1
			Begin
				Declare @HasPermission int
				Set @HasPermission = 0
				exec spHasPermissions @UserId = @UserId,@DiscussionBoardId = @DiscussionBoardId, @Status=@HasPermission output
				If @HasPermission = 0
				Begin
					RAISERROR('INVALID_REQUEST_GROUP',16,1)
					RETURN
				End	
			End

			Select PostId, dbo.Post.DiscussionBoardId, dbo.DiscussionBoardMember.UserRole, OwnerId, Title, Content, ContentDelta , AspNetUsers.FirstName, AspNetUsers.LastName, AspNetUsers.UserName ,Format(DateCreated, 'dddd MMMM dd, yyyy') AS DateCreated,  Format(DateCreated, 'hh:mm tt') As TimeCreated
			From dbo.Post
			Join dbo.AspNetUsers 
			ON Post.OwnerId = AspNetUsers.Id
			Join dbo.DiscussionBoardMember
			ON dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId AND dbo.DiscussionBoardMember.UserId = @UserId
			Where dbo.Post.DiscussionBoardId = @DiscussionBoardId AND dbo.Post.IsDeleted = 0
			ORDER BY dbo.Post.DateCreated DESC 

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spJoinDiscussionBoard
Go
Create Proc spJoinDiscussionBoard
	@CodeId int,
	@Code varchar(30),
	@UserId nvarchar(128)	
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If (@CodeId = NULL OR @Code = NULL OR @UserId = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			If Not Exists(Select Id From dbo.AspNetUsers Where Id = @UserId)
			BEGIN
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			END

			--Throws and error back to the calling application if there is no discussion board associated with the code.
			Declare @DiscussionBoardId int;
			Set @DiscussionBoardId = (Select DiscussionBoardId From dbo.DiscussionBoardCode Where CodeId = @CodeId And Code = @Code);
			If @DiscussionBoardId IS NULL
			Begin
				RAISERROR('INVALID_REQUEST_CODE',16,1);
				RETURN
			End

			Declare @CheckBanned int;
			Set @CheckBanned = (Select IsBanned From dbo.DiscussionBoardMember Where DiscussionBoardId = @DiscussionBoardId And UserId = @UserId And IsBanned = 1)
			If @CheckBanned IS NOT NULL
			Begin
				RAISERROR('INVALID_REQUEST_USER_BANNED',16,1)
				RETURN
			End

			-- Throws an error back to the calling application if the user is attempting to join into an already joined discussion board
			Declare @CheckEnrolled int;
			Set @CheckEnrolled = (Select UserRole From dbo.DiscussionBoardMember Where DiscussionBoardId = @DiscussionBoardId And UserId = @UserId)
			If @CheckEnrolled IS NOT NULL
			Begin
				RAISERROR('INVALID_REQUEST_ALREADY_ENROLLED',16,1);
				RETURN
			End


			Insert dbo.DiscussionBoardMember(DiscussionBoardId,UserId)
			Values (@DiscussionBoardId,@UserId);

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spRemoveUserFromDiscussionBoard
Go
Create Proc spRemoveUserFromDiscussionBoard
	@UserId nvarchar(128),
	@UserIdToRemove nvarchar(128),
	@DiscussionBoardId int

As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If (@UserId IS NULL OR @UserIdToRemove IS NULL OR @DiscussionBoardId IS NULL)
			Begin
				RAISERROR('INVALID_REQUEST_NULL',16,1)
				RETURN
			End


			If (@UserId = @UserIdToRemove)
			Begin
				RAISERROR('INVALID_REQUEST_IDENTICAL_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the user doesn't have permission to remove another user.
			Set @IsValid = 0
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
				RETURN
			End

			Update dbo.DiscussionBoardMember
			Set IsDeleted = 1
			Where UserId = @UserIdToRemove And DiscussionBoardId = @DiscussionBoardId


		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spBanUserFromDiscussionBoard
Go
Create Proc spBanUserFromDiscussionBoard
	@UserId nvarchar(128),
	@UserIdToBan nvarchar(128),
	@DiscussionBoardId int,
	@BanValue int

As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If (@UserId IS NULL) OR (@UserIdToBan IS NULL) OR (@DiscussionBoardId IS NULL OR @BanValue IS NULL)
			Begin
				RAISERROR('INVALID_REQUEST_NULL',16,1)
				RETURN
			End


			If (@UserId = @UserIdToBan)
			Begin
				RAISERROR('INVALID_REQUEST_IDENTICAL_ID',16,1)
				RETURN
			End

			
			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the user doesn't have permission to ban another user.
			Declare @HasPermission int
			Set @HasPermission = 0
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output
			If @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the user to ban is not part of the group.
			Declare @IsMember int 
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserIdToBan, @DiscussionBoardId=@DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1 And @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_GROUP',16,1)
				RETURN
			End


			If(@BanValue = 0 OR @BanValue = 1)
			Begin
				Update dbo.DiscussionBoardMember
				Set IsBanned = @BanValue
				Where DiscussionBoardMember.UserId = @UserIdToBan And DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId

				Select 1 AS 'ReturnValue'
			End
			Else
			Begin
				RAISERROR('INVALID_REQUEST_BAN_VALUE',16,1)
				RETURN
			End

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go

Drop Proc spCreateComment
Go
Create Proc spCreateComment
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@PostId int,
	@Content nvarchar(2500),
	@ContentDelta nvarchar(2500)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
		
			If (@UserId IS NULL OR @PostId IS NULL OR @DiscussionBoardId IS NULL OR @Content is NULL)
			Begin
				RAISERROR('INVALID_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End


			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output

			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1 And @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_GROUP',16,1)
				RETURN	
			End 

			-- check if the user is confirmed by the adminstrator to create a post
			If (@IsMember = 1 And @HasPermission <> 1)
			Begin
				Declare @IsConfirmed int
				Set @IsConfirmed = 0
				exec spIsConfirmed @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsConfirmed output
				If @IsConfirmed <> 1
				Begin
					RAISERROR('INVALID_REQUEST_NOT_CONFIRMED',16,1)
					RETURN
				End
			End


			If Not Exists(Select PostId From dbo.Post Where PostId = @PostId And dbo.Post.IsDeleted = 0)
			Begin
				RAISERROR('INVALID_REQUEST_POST',16,1)
				RETURN
			End

			Insert Into dbo.Comment(DiscussionBoardId,OwnerId,PostId,Content, ContentDelta)
			Values(@DiscussionBoardId,@UserId,@PostId,@Content, @ContentDelta)

			/*Select dbo.DiscussionBoard.DiscussionBoardId
			From dbo.DiscussionBoard
			Join dbo.Post On dbo.Post.DiscussionBoardId = @DiscussionId
			Join dbo.DiscussionBoardMember On dbo.DiscussionBoardMember.UserId = @UserId*/
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go


Drop Proc spDeleteCommentById
Go
Create Proc spDeleteCommentById
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@CommentId int
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If (@UserId IS NULL OR @CommentId IS NULL OR @DiscussionBoardId IS NULL)
			Begin
				RAISERROR('INVALID_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			
			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId ,@Status = @HasPermission output
			If @HasPermission <> 1
			Begin
					RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
					RETURN
			End


			Declare @IsComment int
			Set @IsComment = (Select CommentId From dbo.Comment Where CommentID = @CommentId And DiscussionBoardId = @DiscussionBoardId And IsDeleted = 0)
			If @IsComment IS NULL
			Begin 
				RAISERROR('INVALID_REQUEST_COMMENT',16,1)
				RETURN
			End

			Update dbo.Comment
			Set IsDeleted = 1
			Where CommentId = @CommentId And DiscussionBoardId = @DiscussionBoardId
		
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go


Drop Proc spGetCommentsByPostId
Go
Create Proc spGetCommentsByPostId
	@DiscussionBoardId int,
	@PostId int,
	@UserId nvarchar(128)

As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL OR @DiscussionBoardId = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board
			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1
			Begin
				Declare @HasPermission int
				Set @HasPermission = 0
				exec spHasPermissions @UserId = @UserId,@DiscussionBoardId = @DiscussionBoardId, @Status=@HasPermission output
				If @HasPermission = 0
				Begin
					RAISERROR('INVALID_REQUEST_GROUP',16,1)
					RETURN
				End	
			End

			Declare @IsValidPost int
			Set @IsValidPost = ( Select PostID from dbo.Post Where PostID = @PostId And DiscussionBoardId = @DiscussionBoardId)
			If @IsValidPost IS NULL
			Begin
				RAISERROR('INVALID_REQUEST_POST',16,1)
				RETURN
			End

			Select CommentId, PostId, Comment.DiscussionBoardId, OwnerId, Content, ContentDelta, dbo.AspNetUsers.FirstName, dbo.AspNetUsers.LastName, dbo.DiscussionBoardMember.UserRole,Format(DateCreated, 'dddd MMMM dd, yyyy') AS DateCreated,  Format(DateCreated, 'hh:mm:ss tt') As TimeCreated
			From dbo.Comment
			Join dbo.DiscussionBoardMember
			On dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId
			Join dbo.AspNetUsers
			On dbo.Comment.OwnerId = dbo.AspNetUsers.Id
			Where Comment.DiscussionBoardId = @DiscussionBoardId And Comment.IsDeleted = 0 And Comment.PostId = @PostId
			Order By CommentId ASC

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go




Drop Proc spGetComments
Go
Create Proc spGetComments
	@DiscussionBoardId int,
	@UserId nvarchar(128)

As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL OR @DiscussionBoardId = NULL )
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board
			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1
			Begin
				Declare @HasPermission int
				Set @HasPermission = 0
				exec spHasPermissions @UserId = @UserId,@DiscussionBoardId = @DiscussionBoardId, @Status=@HasPermission output
				If @HasPermission = 0
				Begin
					RAISERROR('INVALID_REQUEST_GROUP',16,1)
					RETURN
				End	
			End

			Select CommentId, PostId, Comment.DiscussionBoardId, OwnerId, Content, ContentDelta, dbo.DiscussionBoardMember.UserRole, dbo.AspNetUsers.FirstName, dbo.AspNetUsers.LastName, Format(DateCreated, 'dddd MMMM dd, yyyy') AS DateCreated,  Format(DateCreated, 'hh:mm:ss tt') As TimeCreated
			From dbo.Comment
			Join dbo.DiscussionBoardMember
			On dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId
			Join dbo.AspNetUsers
			On dbo.Comment.OwnerId = dbo.AspNetUsers.Id
			Where Comment.DiscussionBoardId = @DiscussionBoardId And Comment.IsDeleted = 0
			Order By CommentId ASC

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go




Drop Proc spUpdateCommentById
Go
Create Proc spUpdateCommentById
	@UserId nvarchar(128),
	@CommentId int,
	@DiscussionBoardId int,
	@NewContent nvarchar(2500),
	@NewContentDelta nvarchar(2500)
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			
			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @NewContent = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board
			
			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output

			Declare @IsMember int
			Set @IsMember = 0
			exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
			If @IsMember <> 1 And @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_GROUP',16,1)
				RETURN	
			End 

			-- check if the user is confirmed by the adminstrator to create a post
			If (@IsMember = 1 And @HasPermission <> 1)
			Begin
				Declare @IsConfirmed int
				Set @IsConfirmed = 0
				exec spIsConfirmed @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsConfirmed output
				If @IsConfirmed <> 1
				Begin
					RAISERROR('INVALID_REQUEST_NOT_CONFIRMED',16,1)
					RETURN
				End

				Declare @CanUpdate nvarchar(128)
				Set @CanUpdate = (Select OwnerId From dbo.Comment Where dbo.Comment.CommentID = @CommentId And OwnerId = @UserId AND dbo.Comment.IsDeleted = 0)
				If @CanUpdate IS NULL
				Begin
					RAISERROR('INVALID_REQUEST_PERMISSIONS',16,1)
					RETURN
				End
			End

			Declare @IsCommentValid int
			Set @IsCommentValid = (Select CommentId From dbo.Comment Where CommentId = @CommentId AND dbo.Comment.IsDeleted = 0)
			If @IsCommentValid IS NULL
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSIONS',16,1)
				RETURN
			End

			Update dbo.Comment
			Set Content = @NewContent, ContentDelta = @NewContentDelta
			Where CommentId = @CommentId

		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go



Drop Proc spConfirmUserById
Go
Create Proc spConfirmUserById
	@UserId nvarchar(128),
	@UserIdToConfirm nvarchar(128),
	@DiscussionBoardId int
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction
			If( @UserId = NULL OR @DiscussionBoardId = NULL OR @UserIdToConfirm = NULL)
			Begin
				RAISERROR('INVALD_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			Set @IsValid = 0
			exec spIsValidUser @id = @UserIdToConfirm, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

			If (@UserId = @UserIdToConfirm)
			Begin
				RAISERROR('INVALID_REQUEST_IDENTICAL_ID',16,1)
				RETURN
			End


		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the specified user is not a member of the requested discussion board		
			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output
			If @HasPermission <> 1
			Begin
				RAISERROR('INVALID_REQUEST_PERMISSIONS',16,1)
				RETURN
			End

			Update dbo.DiscussionBoardMember
			Set IsConfirmed = 1
			Where UserId = @UserIdToConfirm And DiscussionBoardId = @DiscussionBoardId
	
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go




Drop Proc spGetDiscussionBoardMembers
Go
Create Proc spGetDiscussionBoardMembers
	@UserId nvarchar(128),
	@DiscussionBoardId int
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
		Begin Transaction

			If (@UserId IS NULL OR @DiscussionBoardId IS NULL)
			Begin
				RAISERROR('INVALID_REQUEST_NULL',16,1)
				RETURN
			End

			--Throws an error back to the calling application if the requested user doesn't exist
			Declare @IsValid int
			exec spIsValidUser @id = @userId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_USER',16,1)
				RETURN
			End

		    --Throws an error back to the calling application if the discussion board doesn't exist
			Set @IsValid = 0;
			exec spIsValidDiscussionBoard @DiscussionBoardId=@DiscussionBoardId, @Status = @IsValid output
			If @IsValid <> 1
			Begin
				RAISERROR('INVALID_REQUEST_ID',16,1)
				RETURN
			End


			Declare @HasPermission int
			Set @HasPermission = 0;
			exec spHasPermissions @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @HasPermission output

			If @HasPermission = 1
			Begin
				Select UserId, IsConfirmed, IsBanned, Email, dbo.DiscussionBoardMember.UserName, dbo.DiscussionBoardMember.UserRole, Format(DateJoined, 'dddd MMMM dd, yyyy') AS DateJoined,  Format(DateJoined, 'hh:mm:ss tt') As TimeJoined
				From dbo.DiscussionBoardMember
				Inner Join dbo.AspNetUsers
				On dbo.DiscussionBoardMember.UserId = dbo.AspNetUsers.Id
				Where dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId
			End
			Else
			Begin
				Declare @IsMember int
				Set @IsMember = 0
				exec spIsMemberOfDiscussionBoard @UserId = @UserId, @DiscussionBoardId = @DiscussionBoardId, @Status = @IsMember output
				If @IsMember <> 1 And @HasPermission <> 1
				Begin
					RAISERROR('INVALID_REQUEST_GROUP',16,1)
					RETURN	
				End 

				Select  Email, dbo.DiscussionBoardMember.UserName, dbo.DiscussionBoardMember.UserRole
				From dbo.DiscussionBoardMember
				Inner Join dbo.AspNetUsers
				On dbo.DiscussionBoardMember.UserId = dbo.AspNetUsers.Id
				Where dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId And dbo.DiscussionBoardMember.UserId <> @UserId
			End
		Commit Transaction
	End Try
	Begin Catch
		Rollback Transaction
		Select @ErrorMessage = ERROR_MESSAGE();
		RAISERROR(@ErrorMessage,16,1)
	End Catch
End
Go





/* end instance methods */





/* -- start helper methods */


Drop Proc spIsValidUser
Go
Create Proc spIsValidUser
	@id nvarchar(128),
	@status int OUTPUT
As
Begin
	Begin Try	
			If Not Exists(Select Id From dbo.AspNetUsers Where Id = @id)
			Begin
				Set @status = 0
				RETURN
			End
			Set @status = 1
	End Try
	Begin Catch
		
	End Catch
End
Go

Drop Proc spIsValidDiscussionBoard
Go
Create Proc spIsValidDiscussionBoard
	@DiscussionBoardId int,
	@Status int OUTPUT
As
Begin
	Declare @ErrorMessage nvarchar(MAX)
	Begin Try
	
		Set @Status = 0
		If Not Exists(Select DiscussionBoardId From dbo.DiscussionBoard Where DiscussionBoardId = @DiscussionBoardId And DiscussionBoard.IsDeleted = 0)
		Begin
			RAISERROR('INVALID_REQUEST_ID',16,1)
			RETURN
		End

		Set @Status = 1
	
	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go

Drop Proc spHasPermissions
Go
Create Proc spHasPermissions
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@Status int OUTPUT

As
Begin
	Begin Try
		Set @Status = 0
		Declare @UserValidation nvarchar(128);
		Set @UserValidation = (
			Select Id
			From dbo.AspNetUsers
			Where dbo.AspNetUsers.Id = @UserId 
			AND (@UserId IN ( Select dbo.AdminData.UserId From AdminData)
			OR @UserId IN (Select UserId From dbo.DiscussionBoardMember
			Where dbo.DiscussionBoardMember.UserRole = 0 AND dbo.DiscussionBoardMember.UserId = @UserId AND dbo.DiscussionBoardMember.DiscussionBoardId = @DiscussionBoardId)))

		If @UserValidation IS NULL
		Begin		
			RAISERROR('INVALID_REQUEST_PERMISSONS',16,1)
			RETURN
		End

		Set @Status = 1

	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go

Drop Proc spIsMemberOfDiscussionBoard
Go
Create Proc spIsMemberOfDiscussionBoard
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@Status int OUTPUT
As
Begin
	Begin Try
		
		Set @Status = 0

		Declare @IsMember nvarchar(128)
		Set @IsMember = (Select UserId From dbo.DiscussionBoardMember Where DiscussionBoardId = @DiscussionBoardId And UserId = @UserId And IsBanned = 0)
		If @IsMember IS NULL
		Begin
			RAISERROR('INVALID_REQUEST_GROUP',16,1)
			RETURN
		End

		Set @Status = 1
	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go

Drop Proc spIsBanned
Go
Create Proc spIsBanned
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@Status int OUTPUT
As
Begin
	Begin Try

		Set @Status = 0
		
		Declare @IsBanned nvarchar(128)
		Set @IsBanned = (Select UserId From DiscussionBoardMember Where UserId = @UserId And DiscussionBoardId = @DiscussionBoardId And IsBanned = 1)
		If @IsBanned IS NOT NULL
		Begin
			RAISERROR('INVALID_REQUEST_BANNED',16,1)
			RETURN
		End
			
		Set @Status = 1
	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go

Drop Proc spIsConfirmed
Go
Create Proc spIsConfirmed
	@UserId nvarchar(128),
	@DiscussionBoardId int,
	@Status int OUTPUT
As
Begin
	Begin Try
			Set @Status = 0
			Declare @IsConfirmed int
			Set @IsConfirmed = (Select IsConfirmed From DiscussionBoardMember Where UserId = @UserId And DiscussionBoardId = @DiscussionBoardId)
			If (@IsConfirmed IS NULL OR @IsConfirmed <> 1)
			Begin
				RAISERROR('INVALID_REQUEST_NOT_CONFIRMED',16,1)
				RETURN
			End

			Set @Status = 1
	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go

Drop Proc spIsAdmin
Go
Create Proc spIsAdmin
	@UserId nvarchar(128),
	@Status int OUTPUT
As
Begin
	Begin Try
			Set @Status = 0
			Declare @IsAdmin int
			Set @IsAdmin = (Select UserId From AdminData Where UserId = @UserId)
			If @IsAdmin IS NULL
			Begin
				RAISERROR('INVALID_REQUEST_NOT_ADMIN',16,1)
				RETURN
			End

			Set @Status = 1
	End Try
	Begin Catch
		Set @Status = 0
	End Catch
End
Go





/* ---- end of helper methods ---- */




/*Use Concourse
Insert INTO DiscussionBoard(AdminId,Title,BoardDescription)
Values('40f559e6-418a-43f5-a7ad-d5a6058058ac', 'New Board', 'No summary yet');

Insert INTO DiscussionBoard(AdminId,Title,BoardDescription)
Values('40f559e6-418a-43f5-a7ad-d5a6058058ac', 'New Board', 'No summary');

Select id from dbo.AspNetUsers
Select * from DiscussionBoard


Declare @otput int
exec spIsValidUser @id='40f559e6-418a-43f5-a7ad-d5a6058058a', @status=@otput output*/
