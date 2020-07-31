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
    public class DetailExportOrdersController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public DetailExportOrdersController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/DetailExportOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetailExportOrder>>> GetDetailExportOrders()
        {
            return await _context.DetailExportOrders.ToListAsync();
        }

        // GET: api/DetailExportOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetailExportOrder>> GetDetailExportOrder(int id)
        {
            var detailExportOrder = await _context.DetailExportOrders.FindAsync(id);

            if (detailExportOrder == null)
            {
                return NotFound();
            }

            return detailExportOrder;
        }

        // PUT: api/DetailExportOrders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetailExportOrder(int id, DetailExportOrder detailExportOrder)
        {
            if (id != detailExportOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(detailExportOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetailExportOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DetailExportOrders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DetailExportOrder>> PostDetailExportOrder(DetailExportOrder detailExportOrder)
        {
            _context.DetailExportOrders.Add(detailExportOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetailExportOrder", new { id = detailExportOrder.Id }, detailExportOrder);
        }

        // DELETE: api/DetailExportOrders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetailExportOrder>> DeleteDetailExportOrder(int id)
        {
            var detailExportOrder = await _context.DetailExportOrders.FindAsync(id);
            if (detailExportOrder == null)
            {
                return NotFound();
            }

            _context.DetailExportOrders.Remove(detailExportOrder);
            await _context.SaveChangesAsync();

            return detailExportOrder;
        }

        private bool DetailExportOrderExists(int id)
        {
            return _context.DetailExportOrders.Any(e => e.Id == id);
        }
    }
}
