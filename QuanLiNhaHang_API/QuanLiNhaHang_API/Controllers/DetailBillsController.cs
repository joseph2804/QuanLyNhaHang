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
    public class DetailBillsController : ControllerBase
    {
        private readonly QuanLiContext _db;
        public DetailBillsController(QuanLiContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetailExportOrder>>> Get()
        {
            return await _db.DetailExportOrders
                         .ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<DetailExportOrder>> Get(int id)
        {
            var detailExportOrder = await _db.DetailExportOrders
                                .Where(r => r.Id == id)
                                .FirstOrDefaultAsync();


            if (detailExportOrder == null)
            {
                return NoContent();
            }

            return detailExportOrder;
        }
        [HttpPost]
        public async Task<ActionResult<DetailExportOrder>> Add(DetailExportOrder detailExportOrder)
        {
            _db.Add(detailExportOrder);
            await _db.SaveChangesAsync();
            return CreatedAtAction("get", new { id = detailExportOrder.Id }, detailExportOrder);
        }

    }
}
