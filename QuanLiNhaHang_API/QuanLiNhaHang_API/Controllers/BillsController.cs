using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using QuanLiNhaHang_API.Models;
using QuanLiNhaHang_API.Models.Requests;

namespace QuanLiNhaHang_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillsController : ControllerBase
    {
        private readonly QuanLiContext _db;
        public BillsController(QuanLiContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> Get()
        {
            return await _db.ExportOrders
                         .Include(x => x.DetailExportOrders)
                         .ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ExportOrder>> Get(int id)
        {
            var exportOrder = await _db.ExportOrders
                                .Where(r => r.Id == id)
                                .Include(r => r.Table)
                                .Include(r => r.Employee)
                                .Include(r => r.DetailExportOrders)
                                .FirstOrDefaultAsync();


            if (exportOrder == null)
            {
                return NoContent();
            }

            return exportOrder;
        }
        [HttpPost("date-to-date")]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> GetByDate(DateToDate dateToDate)
        {
            //return dateToDate.toDate.Subtract(dateToDate.fromDate).TotalDays;  trừ ngày cho ngày ra số ngày cách nhau
            //DateTime endDate = dateToDate.fromDate;
            //int addedDays = 10;
            //return endDate = endDate.AddDays(addedDays); cộng thêm số ngày (10) để tìm ngày mới
            return await _db.ExportOrders
                          .Where(e => e.Exp_Date >= dateToDate.fromDate && e.Exp_Date <= dateToDate.toDate)
                          .ToListAsync();
        }

        [HttpGet("daily")]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> GetByDate()
        {
            var curDate = DateTime.Now;
            
            return await _db.ExportOrders
                          .Where(e => e.Exp_Date.Year == curDate.Year
                                      && e.Exp_Date.DayOfYear == curDate.DayOfYear)
                          .ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult<ExportOrder>> Add(ExportOrder exportOrder)
        {
            exportOrder.Exp_Date = DateTime.Now;
            _db.Add(exportOrder);
            await _db.SaveChangesAsync();
            return CreatedAtAction("get", new { id = exportOrder.Id }, exportOrder);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<ExportOrder>> Edit(int id)
        {
            var exportOrder = await _db.ExportOrders.FindAsync(id);
            if (exportOrder == null)
            {
                return NotFound();
            }
            exportOrder.Exp_Status = 1;

            //_db.TodoItems.Update(todo);
            await _db.SaveChangesAsync();

            return Ok(exportOrder);
        }

    }
}
