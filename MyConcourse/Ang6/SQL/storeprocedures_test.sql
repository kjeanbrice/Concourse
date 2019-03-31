exec spCreateDiscussionBoard @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @title = 'Board1', @code='GrandLarson', @description='New board'
exec spCreateDiscussionBoard @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @title = 'Board2', @code='GrandLarson', @description='New board'
exec spCreateDiscussionBoard @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @title = 'Board3', @code='GrandLarson', @description='New board'
exec spCreateDiscussionBoard @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @title = 'Board4', @code='GrandLarson', @description='New board'
exec spCreateDiscussionBoard @userId = 'b47365c3-21b6-446f-91ce-f7006ca3776c', @title = 'Board4', @code='GrandLarson', @description='New board'
exec spCreateDiscussionBoard @userId = 'b47365c3-21b6-446f-91ce-f7006ca3776c', @title = 'CSE-220', @code='HelloThere', @description=''

exec spJoinDiscussionBoard @CodeId = 1004, @Code = 'GrandLarson', @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac'
exec spJoinDiscussionBoard @CodeId = 1000, @Code = 'Testing', @UserId = '058019a2-dd6c-4ad9-b296-b38821a67d09'
exec spJoinDiscussionBoard @CodeId = 1000, @Code = 'GrandLarson', @UserId = '9ac18c89-394c-44c1-991f-0b8d7bed6fee'
exec spJoinDiscussionBoard @CodeId = 1002, @Code = 'GrandLarson', @UserId = '9ac18c89-394c-44c1-991f-0b8d7bed6fee'


exec spGetDiscussionBoardMembers @UserId='40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId = 100
exec spGetDiscussionBoardMembers @UserId='058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId = 100
exec spGetDiscussionBoardMembers @UserId='86691472-2277-4aaa-b9c5-2afc7ff330c5', @DiscussionBoardId = 100
exec spGetDiscussionBoardMembers @UserId='b47365c3-21b6-446f-91ce-f7006ca3776c', @DiscussionBoardId = 100

exec spBanUserFromDiscussionBoard @UserId='40f559e6-418a-43f5-a7ad-d5a6058058ac', @UserIdToBan='058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId = 100, @BanValue = 0
exec spConfirmUserById @UserId='40f559e6-418a-43f5-a7ad-d5a6058058ac', @UserIdToConfirm='058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId = 100

exec spCreatePost @DiscussionBoardId=100, @UserId='40f559e6-418a-43f5-a7ad-d5a6058058ac', @Title ='New Post From Boad Admin', @Content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nulla id tellus egestas malesuada. Morbi sodales diam ut magna luctus, quis viverra elit dignissim. In vulputate facilisis purus in posuere. Pellentesque sem est, hendrerit quis velit in, malesuada aliquam velit. Nullam at dui pellentesque, ornare libero at, fringilla dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In a nisi faucibus, semper lacus vitae, malesuada eros. Vestibulum sit amet tempus nunc, et efficitur nisi. In luctus vehicula ipsum sed elementum. Donec tempor iaculis porttitor. Nam est felis, gravida et cursus a, rutrum sit amet lacus. Aenean posuere dui at nulla consectetur, non porttitor metus bibendum. Morbi non velit sit amet elit blandit consectetur quis quis lectus.

Vivamus vel felis varius, sollicitudin arcu in, convallis ex. Aliquam sodales varius ultrices. Fusce eget elementum nulla. Nunc mattis vehicula ante quis iaculis. Sed non elit arcu. Vestibulum elementum luctus fermentum. Maecenas nulla nisl, varius a massa a, suscipit vehicula magna. Phasellus fermentum volutpat risus, et maximus justo semper a. Phasellus euismod quam vitae imperdiet convallis. Integer eu magna suscipit, iaculis quam sit amet, laoreet magna. Fusce lectus dolor, luctus nec sem et, rhoncus volutpat lorem. Sed sed scelerisque leo. Donec dapibus vitae ligula sed euismod. Phasellus imperdiet suscipit scelerisque. Sed malesuada auctor tortor quis facilisis.

Integer at fringilla nulla, vel egestas velit. Aenean dignissim ut tortor ut molestie. Morbi interdum, diam commodo tempus varius, quam dolor laoreet nunc, at efficitur libero sem id felis. Duis ut pretium elit. Aenean eu rutrum nibh, ut aliquet elit. Donec et mi in nunc laoreet pulvinar sed non massa. Aliquam egestas est vitae nunc efficitur tincidunt. Phasellus sit amet congue mauris. Nullam vel lobortis justo. Praesent mattis turpis a neque ultrices, cursus ullamcorper nibh luctus. Morbi gravida dignissim sollicitudin. Mauris auctor in erat sed faucibus.'
exec spCreatePost @DiscussionBoardId=100, @UserId='058019a2-dd6c-4ad9-b296-b38821a67d09', @Title ='New Post Banned', @Content = 'Content Banned'

exec spGetPosts @DiscussionBoardId = 100, @UserId =  '40f559e6-418a-43f5-a7ad-d5a6058058ac'
exec spGetPosts @DiscussionBoardId = 100, @UserId =  '058019a2-dd6c-4ad9-b296-b38821a67d09'
exec spGetPosts @DiscussionBoardId = 100, @UserId =  '86691472-2277-4aaa-b9c5-2afc7ff330c5'
exec spGetPosts @DiscussionBoardId = 100, @UserId =  'b47365c3-21b6-446f-91ce-f7006ca3776c'





exec spGetDiscussionBoardsByUserId @userId = '9ac18c89-394c-44c1-991f-0b8d7bed6fee'
exec spGetDiscussionBoardsByUserId @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac'
exec spGetDiscussionBoardsByUserId @userId = '058019a2-dd6c-4ad9-b296-b38821a67d09'


exec spUpdateDiscussionBoard @userId = '058019a2-dd6c-4ad9-b296-b38821a67d09', @discussionBoardId = 101, @newTitle = 'Updated Board2', @newDescription='New Description for Board 2'
exec spUpdateDiscussionBoard @userId = 'b47365c3-21b6-446f-91ce-f7006ca3776c', @discussionBoardId = 101, @newTitle = 'Updated Board7 Admin', @newDescription='New Description for Board 4 Admin'
exec spUpdateDiscussionBoard @userId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @discussionBoardId = 101, @newTitle = 'Updated Board5', @newDescription='New Description for Board 4'
exec spUpdateDiscussionBoardCode @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId = 100, @NewCode="Testing"
exec spDeleteDiscussionBoard @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId='100'

exec spGetPosts @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId=100
exec spGetPosts @UserId = '058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId=100

exec spCreateComment @UserId = '058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId = 100, @PostId=52, @Content='This is a comment on the first post'
exec spCreateComment @UserId = '058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId = 100, @PostId=52, @Content='This is a comment on the first post'


exec spGetCommentsByPostId @UserId = '058019a2-dd6c-4ad9-b296-b38821a67d09', @DiscussionBoardId=100, @PostId = 51
exec spGetCommentsByPostId @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId=100, @PostId = 62
exec spGetCommentsByPostId @UserId = '86691472-2277-4aaa-b9c5-2afc7ff330c5', @DiscussionBoardId=100, @PostId = 51

exec spGetComments @UserId = 'df2fdc37-2baf-4a0d-aa32-c621fbe81787', @DiscussionBoardId=102

Select * from AspNetUsers
Select *  from DiscussionBoard




exec spDeletePost @PostId=50, @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @DiscussionBoardId=100
exec spCreatePost @DiscussionBoardId = 100, @UserId = '40f559e6-418a-43f5-a7ad-d5a6058058ac', @Title='New Post2', @Content='New Content2'

Select * From dbo.DiscussionBoard
Select Id, Email ,Username from dbo.AspNetUsers
Select * From dbo.DiscussionBoardMember
Select * From dbo.Post


Select * From dbo.DiscussionBoardCode
Select Format(DateCreated, 'dddd MMMM dd, yyyy') AS DateCreated From dbo.DiscussionBoard
Select Id, username from dbo.AspNetUsers

Select Title From dbo.DiscussionBoard Where '40f559e6-418a-43f5-a7ad-d5a6058058ac' in (Select Id From dbo.AspNetUsers)

Select * from dbo.DiscussionBoard

Select * from dbo.Post
				
Insert INTO dbo.AdminData(UserId,AdminRole)
Values('b47365c3-21b6-446f-91ce-f7006ca3776c',0)





Select * from dbo.AspNetUsers

Update dbo.AspNetUsers
Set FirstName = 'Henry'
Where FirstName IS NULL

Update dbo.AspNetUsers
Set LastName = 'Bushing'
Where LastName IS NULL

