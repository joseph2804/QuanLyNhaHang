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
    public class DetailFoodsController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public DetailFoodsController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/DetailFoods
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetailFood>>> GetDetailFoods()
        {
            return await _context.DetailFoods.ToListAsync();
        }

        // GET: api/DetailFoods/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetailFood>> GetDetailFood(int id)
        {
            var detailFood = await _context.DetailFoods.FindAsync(id);

            if (detailFood == null)
            {
                return NotFound();
            }

            return detailFood;
        }

        // PUT: api/DetailFoods/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetailFood(int id, DetailFood detailFood)
        {
            if (id != detailFood.Id)
            {
                return BadRequest();
            }

            _context.Entry(detailFood).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetailFoodExists(id))
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

        // POST: api/DetailFoods
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DetailFood>> PostDetailFood(DetailFood detailFood)
        {
            _context.DetailFoods.Add(detailFood);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetailFood", new { id = detailFood.Id }, detailFood);
        }

        // DELETE: api/DetailFoods/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetailFood>> DeleteDetailFood(int id)
        {
            var detailFood = await _context.DetailFoods.FindAsync(id);
            if (detailFood == null)
            {
                return NotFound();
            }

            _context.DetailFoods.Remove(detailFood);
            await _context.SaveChangesAsync();

            return detailFood;
        }

        private bool DetailFoodExists(int id)
        {
            return _context.DetailFoods.Any(e => e.Id == id);
        }
    }
}
