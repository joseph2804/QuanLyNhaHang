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
    public class ProductsController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public ProductsController(QuanLiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> put(int id, Product product)
        {
            var prod = await _context.Products.FindAsync(id);
            if (prod == null)
            {
                return NotFound();
            }

            prod.Pro_Name = product.Pro_Name;
            prod.Pro_Price = product.Pro_Price;
            prod.Pro_Unit = product.Pro_Unit;
            prod.Quantity = product.Quantity;
            product.Pro_Type = product.Pro_Type;

            _context.Products.Update(prod);
            await _context.SaveChangesAsync();

            return prod;

        }

        // POST: api/Employees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

/*        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id, Employee employee)
        {
            var employ = await _context.Employees.FindAsync(id);
            if (employ == null)
            {
                return NotFound();
            }

            employee.Status = false;
            employ.Status = employee.Status;
            _context.Employees.Update(employ);
            await _context.SaveChangesAsync();

            return employee;
        }*/

      /*  private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }*/
    }
}
