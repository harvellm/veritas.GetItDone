SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Projects](
	[ProjectId] [int] IDENTITY(1,1) NOT NULL,
	[ClientName] [nvarchar](255) NULL,
	[ClientPriority] [nvarchar](50) NULL,
	[ProjectName] [nvarchar](255) NULL,
	[ProjectLead] [nvarchar](255) NULL,
	[ProjectStatus] [nvarchar](50) NULL,
	[ProjectHealth] [nvarchar](50) NULL,
	[ProjectStartDate] [nvarchar](255) NULL,
	[ProjectCompletionDate] [nvarchar](255) NULL,
	[ReleaseDate] [nvarchar](255) NULL,
	[BillingMonth] [nvarchar](10) NULL,
	[EstimatedDevelopment] [nvarchar](10) NULL,
	[EstimatedDatabase] [nvarchar](10) NULL,
	[EstimatedVDP] [nvarchar](10) NULL,
	[EstimatedBAPM] [nvarchar](10) NULL,
	[EstimatedQA] [nvarchar](10) NULL,
	[RemainingDevelopment] [nvarchar](10) NULL,
	[RemainingDatabase] [nvarchar](10) NULL,
	[RemainingVDP] [nvarchar](10) NULL,
	[RemainingBAPM] [nvarchar](10) NULL,
	[RemainingQA] [nvarchar](10) NULL,
	[ReadyToStart] [nvarchar](10) NULL,
	[updatedAt] [datetime] NULL,
	[createdAt] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Projects] ADD PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
