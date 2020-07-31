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
    public class ImportOrdersController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public ImportOrdersController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/ImportOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImportOrder>>> GetImportOrders()
        {
            return await _context.ImportOrders.ToListAsync();
        }

        // GET: api/ImportOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ImportOrder>> GetImportOrder(int id)
        {
            var importOrder = await _context.ImportOrders.FindAsync(id);

            if (importOrder == null)
            {
                return NotFound();
            }

            return importOrder;
        }

        // PUT: api/ImportOrders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImportOrder(int id, ImportOrder importOrder)
        {
            if (id != importOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(importOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImportOrderExists(id))
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

        // POST: api/ImportOrders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ImportOrder>> PostImportOrder(ImportOrder importOrder)
        {
            _context.ImportOrders.Add(importOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImportOrder", new { id = importOrder.Id }, importOrder);
        }

        // DELETE: api/ImportOrders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ImportOrder>> DeleteImportOrder(int id)
        {
            var importOrder = await _context.ImportOrders.FindAsync(id);
            if (importOrder == null)
            {
                return NotFound();
            }

            _context.ImportOrders.Remove(importOrder);
            await _context.SaveChangesAsync();

            return importOrder;
        }

        private bool ImportOrderExists(int id)
        {
            return _context.ImportOrders.Any(e => e.Id == id);
        }
    }
}
