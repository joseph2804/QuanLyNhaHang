using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuanLiNhaHang_API.Models;

namespace QuanLiNhaHang_API.Models
{
    public class QuanLiContext: DbContext 
    {
        public QuanLiContext(DbContextOptions<QuanLiContext> options) : base(options) { }
        //mapping model class
        public DbSet<Food> Foods { get; set; }
        public DbSet<DetailExportOrder> DetailExportOrders { get; set; }
        public DbSet<DetailFood> DetailFoods { get; set; }
        public DbSet<DetailImportOrder> DetailImportOrders { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<ExportOrder> ExportOrders { get; set; }
        public DbSet<ImportOrder> ImportOrders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Type> Types { get; set; } 

    }
}
