using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLiNhaHang_API.Models;
using QuanLiNhaHang_API.Models.Responses;

namespace QuanLiNhaHang_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodsController : ControllerBase
    {
        private readonly QuanLiContext _db;
        public FoodsController(QuanLiContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Food>>> Get()
        {
            return await _db.Foods
                         .Include(f => f.Type)
                         .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Food>> Get(long id)
        {
            var food = await _db.Foods.Where(f => f.Id == id)
                                      .FirstOrDefaultAsync();

            if (food == null)
            {
                return NoContent();
            }

            return food;
        }

        [HttpGet("current-time")]
        public ActionResult<CurrentTime> GetTime()
        {
            DateTime mydat;
            //mydat = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Local);
            mydat = DateTime.Now;
            var time = new CurrentTime
            {
                timeNow = mydat
                //có múi giờ zzz
                //timeNow = mydat.ToString("dd/MM/yyyy H:mm:ss zzz")
            };

            if (time == null)
            {

                return null;
            }
            return time;
        }

        [HttpPost]
        public async Task<ActionResult<Food>> PostFood(Food food)
        {
            _db.Foods.Add(food);
            await _db.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = food.Id }, food);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Food>> putFoods(int id, Food food)
        {
            var food1 = await _db.Foods.FindAsync(id);
            if (food1 == null)
            {
                return NotFound();
            }

            food1.Foo_Name = food.Foo_Name;
            food1.Ty_Id = food.Ty_Id;
            food1.Foo_Id = food.Foo_Id;
            food1.Foo_Price = food.Foo_Price;
            food1.Foo_Status = food.Foo_Status;

            _db.Foods.Update(food1);
            await _db.SaveChangesAsync();

            return food;

        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Food>>> search([FromQuery] string st)
        {
            return await _db.Foods.AsNoTracking()
                .Where(t => t.Foo_Name.Contains(st))
                .ToListAsync();
        }
    }
}
