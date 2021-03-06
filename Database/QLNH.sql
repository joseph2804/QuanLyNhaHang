USE [master]
GO
/****** Object:  Database [QuanLyNhaHang]    Script Date: 7/31/2020 11:40:17 AM ******/
CREATE DATABASE [QuanLyNhaHang]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QuanLyNhaHang', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\QuanLyNhaHang.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'QuanLyNhaHang_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\QuanLyNhaHang_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QuanLyNhaHang].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QuanLyNhaHang] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET ARITHABORT OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QuanLyNhaHang] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QuanLyNhaHang] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET  DISABLE_BROKER 
GO
ALTER DATABASE [QuanLyNhaHang] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QuanLyNhaHang] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [QuanLyNhaHang] SET  MULTI_USER 
GO
ALTER DATABASE [QuanLyNhaHang] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QuanLyNhaHang] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QuanLyNhaHang] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QuanLyNhaHang] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
USE [QuanLyNhaHang]
GO
/****** Object:  Table [dbo].[DETAILEXPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DETAILEXPORTORDERS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EXP_ID] [int] NOT NULL,
	[FOO_ID] [int] NOT NULL,
	[DEEXP_QUANTITY] [float] NULL,
	[DEEXP_STATUS] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DETAILFOODS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DETAILFOODS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_ID] [int] NOT NULL,
	[FOO_ID] [int] NOT NULL,
	[DEFOO_QUANTITY] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DETAILIMPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DETAILIMPORTORDERS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_ID] [int] NOT NULL,
	[IMP_ID] [int] NOT NULL,
	[DEIMP_QUANTITY] [float] NULL,
	[DEIMP_PRICE] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EMPLOYEES]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EMPLOYEES](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EPL_FIRSTNAME] [nvarchar](100) NULL,
	[EPL_LASTNAME] [nvarchar](100) NULL,
	[EPL_POSITION] [nvarchar](100) NOT NULL,
	[EPL_PHONE] [char](10) NULL,
	[EPL_GENDER] [bit] NOT NULL,
	[EPL_STATUS] [bit] NULL,
	[EPL_WORKING] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EXPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EXPORTORDERS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EPL_ID] [int] NOT NULL,
	[TAB_ID] [int] NOT NULL,
	[EXP_DISCOUNT] [float] NULL,
	[EXP_DATE] [datetime] NOT NULL,
	[EXP_STATUS] [int] NULL,
	[EXP_TOTAL] [float] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FOODS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FOODS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FOO_ID] [nvarchar](50) NOT NULL,
	[EPL_ID] [int] NOT NULL,
	[TY_ID] [int] NOT NULL,
	[FOO_NAME] [nvarchar](100) NULL,
	[FOO_PRICE] [float] NOT NULL,
	[FOO_STATUS] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IMPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IMPORTORDERS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EPL_ID] [int] NOT NULL,
	[SUP_ID] [int] NOT NULL,
	[IMP_DATE] [date] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCTS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCTS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PRO_NAME] [nvarchar](100) NULL,
	[PRO_PRICE] [float] NULL,
	[PRO_QUANTITY] [float] NULL,
	[PRO_UNIT] [nvarchar](10) NULL,
	[PRO_TYPE] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SUPPLIERS]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SUPPLIERS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[SUP_NAMESUPPLIER] [nvarchar](100) NULL,
	[SUP_ADDRESS] [nvarchar](100) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TABLES]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TABLES](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EPL_ID] [int] NULL,
	[TAB_STATUS] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TYPES]    Script Date: 7/31/2020 11:40:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TYPES](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TY_NAME] [nvarchar](100) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DETAILEXPORTORDERS] ON 

INSERT [dbo].[DETAILEXPORTORDERS] ([ID], [EXP_ID], [FOO_ID], [DEEXP_QUANTITY], [DEEXP_STATUS]) VALUES (2, 1, 1, 2, 1)
INSERT [dbo].[DETAILEXPORTORDERS] ([ID], [EXP_ID], [FOO_ID], [DEEXP_QUANTITY], [DEEXP_STATUS]) VALUES (4, 1, 1, 1, 1)
INSERT [dbo].[DETAILEXPORTORDERS] ([ID], [EXP_ID], [FOO_ID], [DEEXP_QUANTITY], [DEEXP_STATUS]) VALUES (5, 1019, 7, 1, 1)
SET IDENTITY_INSERT [dbo].[DETAILEXPORTORDERS] OFF
SET IDENTITY_INSERT [dbo].[DETAILFOODS] ON 

INSERT [dbo].[DETAILFOODS] ([ID], [PRO_ID], [FOO_ID], [DEFOO_QUANTITY]) VALUES (1, 1, 1, 1)
INSERT [dbo].[DETAILFOODS] ([ID], [PRO_ID], [FOO_ID], [DEFOO_QUANTITY]) VALUES (2, 1, 1, 2)
SET IDENTITY_INSERT [dbo].[DETAILFOODS] OFF
SET IDENTITY_INSERT [dbo].[DETAILIMPORTORDERS] ON 

INSERT [dbo].[DETAILIMPORTORDERS] ([ID], [PRO_ID], [IMP_ID], [DEIMP_QUANTITY], [DEIMP_PRICE]) VALUES (2, 1, 1, 20, 500000)
INSERT [dbo].[DETAILIMPORTORDERS] ([ID], [PRO_ID], [IMP_ID], [DEIMP_QUANTITY], [DEIMP_PRICE]) VALUES (5, 1, 1, 30, 500000)
SET IDENTITY_INSERT [dbo].[DETAILIMPORTORDERS] OFF
SET IDENTITY_INSERT [dbo].[EMPLOYEES] ON 

INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (1, N'Huỳnh', N'Trần', N'Hốt rác', N'0352014241', 0, 0, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (2, N'Hiệp', N'Đặng', N'Quản lý', N'0979294862', 0, 0, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (3, N'Đường', N'Hải', N'Nhân Viên', N'0986266666', 1, 0, 0)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (4, N'Lộc', N'Nguyễn', N'Nhân Viên', N'0981237777', 1, 0, 0)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (5, N'Dương', N'Lộc', N'Nhân Viên', N'0972454999', 1, 0, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (7, N'Hoàng', N'Nguyễn', N'Đầu Bếp', N'0978881122', 1, 0, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (9, N'Lâm', N'Trần ', N'Đầu Bếp', N'0912345678', 1, 1, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (10, N'Lan', N'Nguyễn', N'Đầu Bếp', N'0987654321', 0, 0, 0)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (11, N'Sương', N'Lê', N'Đầu Bếp', N'0982458199', 0, 1, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (12, N'Mai', N'Lê Thanh', N'Đầu Bếp', N'0984682873', 0, 1, 1)
INSERT [dbo].[EMPLOYEES] ([ID], [EPL_FIRSTNAME], [EPL_LASTNAME], [EPL_POSITION], [EPL_PHONE], [EPL_GENDER], [EPL_STATUS], [EPL_WORKING]) VALUES (13, N'Thủy Tiên', N'Lê', N'Quản lý', N'0908977298', 1, 1, 1)
SET IDENTITY_INSERT [dbo].[EMPLOYEES] OFF
SET IDENTITY_INSERT [dbo].[EXPORTORDERS] ON 

INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (1, 1, 1, 20000, CAST(N'2020-07-31T00:00:00.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (7, 1, 1, 20000, CAST(N'2020-06-04T00:00:00.000' AS DateTime), 0, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (8, 1, 1, 20000, CAST(N'2020-06-26T00:00:00.000' AS DateTime), 0, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (9, 1, 1, 2000, CAST(N'2020-07-27T10:34:09.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (10, 1, 1, 2000, CAST(N'2012-06-18T22:34:09.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (11, 1, 1, 20000, CAST(N'2020-06-24T00:00:00.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (12, 1, 1, 20000, CAST(N'2020-06-24T00:00:00.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (13, 1, 1, 20000, CAST(N'2020-06-24T00:00:00.000' AS DateTime), 1, 500000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (18, 1, 1, 5000, CAST(N'2020-07-30T10:34:09.000' AS DateTime), 1, 800000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (1018, 1, 1, 5000, CAST(N'2020-07-31T00:00:00.000' AS DateTime), 1, 700000)
INSERT [dbo].[EXPORTORDERS] ([ID], [EPL_ID], [TAB_ID], [EXP_DISCOUNT], [EXP_DATE], [EXP_STATUS], [EXP_TOTAL]) VALUES (1019, 1, 1, 0, CAST(N'2020-07-31T11:19:45.767' AS DateTime), 1, 150000)
SET IDENTITY_INSERT [dbo].[EXPORTORDERS] OFF
SET IDENTITY_INSERT [dbo].[FOODS] ON 

INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (1, N'LA001', 1, 1, N'Lẩu bò', 50000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (7, N'ca001 ', 2, 6, N'Canh khổ qua chay', 150000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (8, N'ca002     ', 4, 6, N'Canh rau củ chay ngọt', 350000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (9, N'ca003     ', 5, 1, N'Canh rong biển đậu hũ chay', 450000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (10, N'ca004     ', 6, 1, N'Canh chua cá diêu hồng', 100000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (12, N'ca005     ', 8, 1, N'Canh chua cá diêu hồng', 250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (13, N'ca006     ', 3, 1, N'Canh rau dền mồng tơi nấu riêu cua', 350000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (14, N'la001     ', 5, 1, N'Lẩu Bò', 450000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (15, N'la002     ', 1, 1, N'Lẩu Gà', 750000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (17, N'la003     ', 1, 1, N'Lẩu hải sản', 1250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (18, N'la004     ', 1, 1, N'Lẩu Vịt', 950000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (19, N'la005     ', 1, 1, N'Lẩu chua cay', 550000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (20, N'la006     ', 1, 1, N'Lẩu thập cẩm', 950000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (21, N'mx001     ', 1, 1, N'Chân giò xào lăn', 650000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (22, N'mx002     ', 1, 1, N'Ếch xào cay', 650000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (23, N'mx003     ', 1, 1, N'Tai heo xào cay', 250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (24, N'mx004     ', 1, 1, N'Thịt heo xào xả ớt cay', 650000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (26, N'mx005     ', 1, 1, N'Tép khô xào hành', 750000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (28, N'mx006     ', 1, 1, N'Bông cải xào tương ớt', 850000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (30, N'sl001     ', 1, 1, N'Salad ớt chuông', 1250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (31, N'sl002     ', 1, 1, N'Salad dưa leo', 550000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (32, N'sl003     ', 1, 1, N'Salad bơ đậu hũ', 650000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (33, N'sl004     ', 1, 1, N'Salad đậu bắp', 950000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (34, N'sl005     ', 1, 1, N'Salad dầu giấm', 550000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (36, N'sl006     ', 1, 1, N'Salad tổng hợp', 250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (37, N'tr001     ', 1, 1, N'Mực hấp kiểu thái', 250000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (38, N'tr002     ', 1, 1, N'Trứng thập cẩm', 250000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (39, N'tr003     ', 1, 1, N'Gà hấp nấm', 250000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (41, N'tr004     ', 1, 1, N'Mướp nhồi tôm', 250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (42, N'tr005     ', 1, 1, N'Cá lóc hấp xả hành', 250000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (43, N'tr006     ', 1, 1, N'Cà tím hấp', 100000, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (44, N'LA01      ', 2, 2, N'Lẩu Đường', 250000, 0)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (45, N'LA01      ', 2, 2, N'Lẩu Đường Ba Hổ', 2500, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (66, N'LA01      ', 3, 2, N'Lẩu Đường óc choa', 2500, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (1085, N'1998', 0, 4, N'ádas', 12300, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (1086, N'1998', 0, 4, N'ádas', 12300, 1)
INSERT [dbo].[FOODS] ([ID], [FOO_ID], [EPL_ID], [TY_ID], [FOO_NAME], [FOO_PRICE], [FOO_STATUS]) VALUES (1087, N'la001', 0, 1, N'Hột Vịt', 5000, 1)
SET IDENTITY_INSERT [dbo].[FOODS] OFF
SET IDENTITY_INSERT [dbo].[IMPORTORDERS] ON 

INSERT [dbo].[IMPORTORDERS] ([ID], [EPL_ID], [SUP_ID], [IMP_DATE]) VALUES (1, 1, 1, CAST(N'2020-06-24' AS Date))
INSERT [dbo].[IMPORTORDERS] ([ID], [EPL_ID], [SUP_ID], [IMP_DATE]) VALUES (2, 1, 1, CAST(N'2020-06-26' AS Date))
SET IDENTITY_INSERT [dbo].[IMPORTORDERS] OFF
SET IDENTITY_INSERT [dbo].[PRODUCTS] ON 

INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (1, N'Thịt heo', 11111, 500, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (2, N'Thịt bò Mỹ', 500000, 50, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (3, N'Rau xà lách', 20000, 10, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (4, N'Tiger', 17000, 500, N'Chai', 0)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (5, N'Sting', 10000, 7000, N'Lon', 0)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (6, N'Thịt nợn', 300000, 5, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (7, N'Thịt nợn', 300000, 5, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (8, N'Thịt nai', 300000, 5, N'KG', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (10, N'goi bo', 50000, 1, N'kg', 1)
INSERT [dbo].[PRODUCTS] ([ID], [PRO_NAME], [PRO_PRICE], [PRO_QUANTITY], [PRO_UNIT], [PRO_TYPE]) VALUES (9, N'bia 333', 50000, 50, N'Lon', 0)
SET IDENTITY_INSERT [dbo].[PRODUCTS] OFF
SET IDENTITY_INSERT [dbo].[SUPPLIERS] ON 

INSERT [dbo].[SUPPLIERS] ([ID], [SUP_NAMESUPPLIER], [SUP_ADDRESS]) VALUES (1, N'Bia Sài Gòn', N'22 Quang Trung')
INSERT [dbo].[SUPPLIERS] ([ID], [SUP_NAMESUPPLIER], [SUP_ADDRESS]) VALUES (3, N'Bia Hà Nội', N'23 Phố Tràng Tiền')
SET IDENTITY_INSERT [dbo].[SUPPLIERS] OFF
SET IDENTITY_INSERT [dbo].[TABLES] ON 

INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (1, 2, 1)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (2, 2, 1)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (5, 1, 0)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (7, 1, 0)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (8, 2, 1)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (9, 6, 0)
INSERT [dbo].[TABLES] ([ID], [EPL_ID], [TAB_STATUS]) VALUES (10, 5, 1)
SET IDENTITY_INSERT [dbo].[TABLES] OFF
SET IDENTITY_INSERT [dbo].[TYPES] ON 

INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (1, N'Lẫu')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (2, N'Xào')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (3, N'Chiên')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (4, N'Nước ngọt')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (5, N'Bia')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (6, N'Luộc')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (7, N'Nước Suối')
INSERT [dbo].[TYPES] ([ID], [TY_NAME]) VALUES (8, N'Kho')
SET IDENTITY_INSERT [dbo].[TYPES] OFF
/****** Object:  Index [PK_DETAILEXPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[DETAILEXPORTORDERS] ADD  CONSTRAINT [PK_DETAILEXPORTORDERS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_DETAILFOODS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[DETAILFOODS] ADD  CONSTRAINT [PK_DETAILFOODS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_DETAILIMPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[DETAILIMPORTORDERS] ADD  CONSTRAINT [PK_DETAILIMPORTORDERS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_EMPLOYEES]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[EMPLOYEES] ADD  CONSTRAINT [PK_EMPLOYEES] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_EXPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[EXPORTORDERS] ADD  CONSTRAINT [PK_EXPORTORDERS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_FOODS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[FOODS] ADD  CONSTRAINT [PK_FOODS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_IMPORTORDERS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[IMPORTORDERS] ADD  CONSTRAINT [PK_IMPORTORDERS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_PRODUCTS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[PRODUCTS] ADD  CONSTRAINT [PK_PRODUCTS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_SUPPLIERS]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[SUPPLIERS] ADD  CONSTRAINT [PK_SUPPLIERS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_TABLES]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[TABLES] ADD  CONSTRAINT [PK_TABLES] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [PK_TYPES]    Script Date: 7/31/2020 11:40:17 AM ******/
ALTER TABLE [dbo].[TYPES] ADD  CONSTRAINT [PK_TYPES] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DETAILEXPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILEXPORTORDERS_EXPORTORDERS] FOREIGN KEY([EXP_ID])
REFERENCES [dbo].[EXPORTORDERS] ([ID])
GO
ALTER TABLE [dbo].[DETAILEXPORTORDERS] CHECK CONSTRAINT [FK_DETAILEXPORTORDERS_EXPORTORDERS]
GO
ALTER TABLE [dbo].[DETAILEXPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILEXPORTORDERS_FOODS] FOREIGN KEY([FOO_ID])
REFERENCES [dbo].[FOODS] ([ID])
GO
ALTER TABLE [dbo].[DETAILEXPORTORDERS] CHECK CONSTRAINT [FK_DETAILEXPORTORDERS_FOODS]
GO
ALTER TABLE [dbo].[DETAILFOODS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILFOODS_FOODS] FOREIGN KEY([FOO_ID])
REFERENCES [dbo].[FOODS] ([ID])
GO
ALTER TABLE [dbo].[DETAILFOODS] CHECK CONSTRAINT [FK_DETAILFOODS_FOODS]
GO
ALTER TABLE [dbo].[DETAILFOODS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILFOODS_PRODUCTS] FOREIGN KEY([PRO_ID])
REFERENCES [dbo].[PRODUCTS] ([ID])
GO
ALTER TABLE [dbo].[DETAILFOODS] CHECK CONSTRAINT [FK_DETAILFOODS_PRODUCTS]
GO
ALTER TABLE [dbo].[DETAILIMPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILIMPORTORDERS_IMPORTORDERS] FOREIGN KEY([IMP_ID])
REFERENCES [dbo].[IMPORTORDERS] ([ID])
GO
ALTER TABLE [dbo].[DETAILIMPORTORDERS] CHECK CONSTRAINT [FK_DETAILIMPORTORDERS_IMPORTORDERS]
GO
ALTER TABLE [dbo].[DETAILIMPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_DETAILIMPORTORDERS_PRODUCTS] FOREIGN KEY([PRO_ID])
REFERENCES [dbo].[PRODUCTS] ([ID])
GO
ALTER TABLE [dbo].[DETAILIMPORTORDERS] CHECK CONSTRAINT [FK_DETAILIMPORTORDERS_PRODUCTS]
GO
ALTER TABLE [dbo].[EXPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_EXPORTORDERS_EMPLOYEES] FOREIGN KEY([EPL_ID])
REFERENCES [dbo].[EMPLOYEES] ([ID])
GO
ALTER TABLE [dbo].[EXPORTORDERS] CHECK CONSTRAINT [FK_EXPORTORDERS_EMPLOYEES]
GO
ALTER TABLE [dbo].[EXPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_EXPORTORDERS_TABLES] FOREIGN KEY([TAB_ID])
REFERENCES [dbo].[TABLES] ([ID])
GO
ALTER TABLE [dbo].[EXPORTORDERS] CHECK CONSTRAINT [FK_EXPORTORDERS_TABLES]
GO
ALTER TABLE [dbo].[FOODS]  WITH CHECK ADD  CONSTRAINT [FK_FOODS_TYPES] FOREIGN KEY([TY_ID])
REFERENCES [dbo].[TYPES] ([ID])
GO
ALTER TABLE [dbo].[FOODS] CHECK CONSTRAINT [FK_FOODS_TYPES]
GO
ALTER TABLE [dbo].[IMPORTORDERS]  WITH CHECK ADD  CONSTRAINT [FK_IMPORTORDERS_SUPPLIERS] FOREIGN KEY([SUP_ID])
REFERENCES [dbo].[SUPPLIERS] ([ID])
GO
ALTER TABLE [dbo].[IMPORTORDERS] CHECK CONSTRAINT [FK_IMPORTORDERS_SUPPLIERS]
GO
USE [master]
GO
ALTER DATABASE [QuanLyNhaHang] SET  READ_WRITE 
GO
