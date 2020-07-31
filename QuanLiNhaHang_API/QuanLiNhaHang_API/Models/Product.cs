using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("Products")]
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Pro_Name { get; set; }
        public double Pro_Price { get; set; }
        [Column("Pro_Quantity")]
        public double Quantity { get; set; }
        public string Pro_Unit { get; set; }
        public bool Pro_Type { get; set; }
        public virtual  ICollection<DetailFood> DetailFoods { get; set; }
        public virtual ICollection<DetailImportOrder> DetailImportOrders { get; set; }

    }
}
