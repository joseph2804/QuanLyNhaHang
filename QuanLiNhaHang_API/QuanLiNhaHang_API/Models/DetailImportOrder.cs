using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("DetailImportOrders")]
    public class DetailImportOrder
    {
        [Key]
        public int Id { get; set; }
        public int Pro_Id { get; set; }
        public int Imp_Id { get; set; }
        [Column("DeImp_Quantity")]
        public int Quantity { get; set; }
        [Column("DeImp_Price")]
        public double Price { get; set; }
        [ForeignKey("Imp_Id")]
        public virtual ImportOrder ImportOrder { get; set; }
        [ForeignKey("Pro_Id")]
        public virtual Product Product { get; set; }
    }
}
