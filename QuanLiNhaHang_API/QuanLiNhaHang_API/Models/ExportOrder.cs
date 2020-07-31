using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("ExportOrders")]
    public class ExportOrder
    {
        [Key]
        public int Id { get; set; }
        public int Epl_Id { get; set; }
        public int Tab_Id { get; set; }
        [Column("Exp_Discount")]
        public double Discount { get; set; }
        public DateTime Exp_Date { get; set; }
        public double Exp_Total { get; set; }
        public int Exp_Status { get; set; }
        [ForeignKey("Tab_Id")]
        public virtual Table Table { get; set; }
        [ForeignKey("Epl_Id")]
        public virtual Employee Employee { get; set; }
        public virtual ICollection<DetailExportOrder> DetailExportOrders { get; set; }
    }
}
