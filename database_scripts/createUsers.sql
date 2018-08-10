SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[ResetToken] [nvarchar](255) NULL,
	[Role] [int] NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[LastLogin] [nvarchar](50) NULL,
	[History] [nvarchar](max) NULL,
	[Password] [nvarchar](255) NULL,
	[createdAt] [nvarchar](50) NULL,
	[updatedAt] [nvarchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [History should be formatted as JSON] CHECK  ((isjson([History])=(1)))
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [History should be formatted as JSON]
GO
