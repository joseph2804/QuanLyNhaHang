using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("ImportOrders")]
    public class ImportOrder
    {
        [Key]
        public int Id { get; set; }
        public int Epl_Id { get; set; }
        public int Sup_Id { get; set; }
        public DateTime Imp_Date { get; set; }
        [ForeignKey("Sup_Id")]
        public virtual Supplier Supplier { get; set; }
        [ForeignKey("Epl_Id")]
        public virtual Employee Employee { get; set; }
        public virtual ICollection<DetailImportOrder> DetailImportOrders { get; set; }
    }
}
