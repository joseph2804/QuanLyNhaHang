using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("Employees")]
    public class Employee
    {

        [Key]
        public int Id { get; set; }
        [Column("Epl_FirstName")]
        public string FirstName { get; set; }
        [Column("Epl_LastName")]
        public string LastName { get; set; }
        [Column("Epl_Position")]
        public string Position { get; set; }
        [Column("Epl_Phone")]
        public string Phone { get; set; }
        [Column("Epl_Gender")]
        public bool Gender { get; set; }

        [Column("Epl_status")]
        public bool Status { get; set; }
        [Column("Epl_working")]
        public bool Working { get; set; }


        public virtual ICollection<Table>   Tables { get; set; }
        public virtual ICollection<ExportOrder> ExportOrders { get; set; }
        public virtual ICollection<Food> Foods { get; set; }
    }
}
