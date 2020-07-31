using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("DetailExportOrders")]
    public class DetailExportOrder
    {
        [Key]
        public int Id { get; set; }
        public int  Exp_Id { get; set; }
        public int Foo_Id { get; set; }
        [Column("DeExp_Quantity")]
        public double Quantity { get; set; }
        public int DeExp_Status { get; set; }
        [ForeignKey("Foo_Id")]
        public virtual Food Food { get; set; }
        [ForeignKey("Exp_Id")]
        public virtual ExportOrder ExportOrder { get; set; }
    }
}
