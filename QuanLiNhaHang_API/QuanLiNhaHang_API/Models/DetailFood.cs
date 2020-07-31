using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models
{
    [Table("DetailFoods")]
    public class DetailFood
    {
        [Key]
        public int Id { get; set; }
        public int Pro_Id { get; set; }
        public int Foo_Id { get; set; }
        [Column("DEFOO_QUANTITY")]
        public int Quantity { get; set; }
        [ForeignKey("Foo_Id")]
        public virtual Food Food { get; set; }
        [ForeignKey("Pro_Id")]
        public virtual Product Product { get; set; }
    }
}
