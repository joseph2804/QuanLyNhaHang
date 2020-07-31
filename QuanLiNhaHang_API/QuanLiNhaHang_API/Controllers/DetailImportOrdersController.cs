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
    public class DetailImportOrdersController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public DetailImportOrdersController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/DetailImportOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetailImportOrder>>> GetDetailImportOrders()
        {
            return await _context.DetailImportOrders.ToListAsync();
        }

        // GET: api/DetailImportOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetailImportOrder>> GetDetailImportOrder(int id)
        {
            var detailImportOrder = await _context.DetailImportOrders.FindAsync(id);

            if (detailImportOrder == null)
            {
                return NotFound();
            }

            return detailImportOrder;
        }

        // PUT: api/DetailImportOrders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetailImportOrder(int id, DetailImportOrder detailImportOrder)
        {
            if (id != detailImportOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(detailImportOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetailImportOrderExists(id))
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

        // POST: api/DetailImportOrders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DetailImportOrder>> PostDetailImportOrder(DetailImportOrder detailImportOrder)
        {
            _context.DetailImportOrders.Add(detailImportOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetailImportOrder", new { id = detailImportOrder.Id }, detailImportOrder);
        }

        // DELETE: api/DetailImportOrders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetailImportOrder>> DeleteDetailImportOrder(int id)
        {
            var detailImportOrder = await _context.DetailImportOrders.FindAsync(id);
            if (detailImportOrder == null)
            {
                return NotFound();
            }

            _context.DetailImportOrders.Remove(detailImportOrder);
            await _context.SaveChangesAsync();

            return detailImportOrder;
        }

        private bool DetailImportOrderExists(int id)
        {
            return _context.DetailImportOrders.Any(e => e.Id == id);
        }
    }
}
