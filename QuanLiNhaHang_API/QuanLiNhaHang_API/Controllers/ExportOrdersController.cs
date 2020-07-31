using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLiNhaHang_API.Models;

namespace QuanLiNhaHang_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExportOrdersController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public ExportOrdersController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/ExportOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> GetExportOrders()
        {
            return await _context.ExportOrders.ToListAsync();
        }

        // GET: api/ExportOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExportOrder>> GetExportOrder(int id)
        {
            var exportOrder = await _context.ExportOrders.FindAsync(id);

            if (exportOrder == null)
            {
                return NotFound();
            }

            return exportOrder;
        }

        [HttpGet("Total")]

        public async Task<ActionResult<float>> GetTotal()
        {
            var dateTO = DateTime.Now;
            var sumTotal = await _context.ExportOrders
                .Where(x => x.Exp_Date.Year == dateTO.Year && x.Exp_Date.DayOfYear == dateTO.DayOfYear)
                .SumAsync(x => x.Exp_Total);
            /*var sumTotal = await _context.ExportOrders.Where(x => x.Exp_Date == DateTime.Today)
                .SumAsync(x => x.Total);*/
            return (ActionResult<float>)sumTotal;
        }

        // PUT: api/ExportOrders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<ExportOrder>> put(int id, ExportOrder exportOrder)
        {
            var exp = await _context.ExportOrders.FindAsync(id);
            if (exp == null)
            {
                return NotFound();
            }

            exp.Tab_Id = exportOrder.Tab_Id;
            exp.Exp_Status = exportOrder.Exp_Status;
            exp.Exp_Date = exportOrder.Exp_Date;
            exp.Discount = exportOrder.Discount;
            exp.Epl_Id = exportOrder.Epl_Id;

            _context.ExportOrders.Update(exp);
            await _context.SaveChangesAsync();

            return exp;

        }

        // POST: api/ExportOrders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ExportOrder>> PostExportOrder(ExportOrder exportOrder)
        {
            _context.ExportOrders.Add(exportOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExportOrder", new { id = exportOrder.Id }, exportOrder);
        }

        // DELETE: api/ExportOrders/5
        /*[HttpDelete("{id}")]
        public async Task<ActionResult<ExportOrder>> DeleteExportOrder(int id)
        {
            var exportOrder = await _context.ExportOrders.FindAsync(id);
            if (exportOrder == null)
            {
                return NotFound();
            }

            _context.ExportOrders.Remove(exportOrder);
            await _context.SaveChangesAsync();

            return exportOrder;
        }

        private bool ExportOrderExists(int id)
        {
            return _context.ExportOrders.Any(e => e.Id == id);
        }*/
    }
}
