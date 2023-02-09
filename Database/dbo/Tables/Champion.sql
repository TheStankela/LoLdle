CREATE TABLE [dbo].[Champion] (
    [Name]        NVARCHAR (450) NOT NULL,
    [Gender]      NVARCHAR (MAX) NOT NULL,
    [Position]    NVARCHAR (MAX) NOT NULL,
    [Species]     NVARCHAR (MAX) NOT NULL,
    [Resource]    NVARCHAR (MAX) NOT NULL,
    [RangeType]   NVARCHAR (MAX) NOT NULL,
    [Region]      NVARCHAR (MAX) NOT NULL,
    [ReleaseYear] NVARCHAR (MAX) NOT NULL,
    [ChampId]     INT            NULL,
    CONSTRAINT [PK_Champion] PRIMARY KEY CLUSTERED ([Name] ASC)
);

