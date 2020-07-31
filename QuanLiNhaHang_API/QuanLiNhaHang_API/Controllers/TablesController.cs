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
    public class TablesController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public TablesController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Table>>> GetEmployees()
        {
            return await _context.Tables.Include(x => x.Employee).ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Table>> GetTable(int id)
        {
            var tbl = await _context.Tables.FindAsync(id);

            if (tbl == null)
            {
                return NotFound();
            }

            return tbl;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<Table>> put(int id, Table table)
        {
            var tab = await _context.Tables.FindAsync(id);
            if (tab == null)
            {
                return NotFound();
            }

            tab.Tab_Status = table.Tab_Status;
            tab.Epl_Id = table.Epl_Id;
            await _context.SaveChangesAsync();

            return tab;

        }

        // POST: api/Employees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Table>> PostTable(Table table)
        {
            _context.Tables.Add(table);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = table.Id }, table);
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteTable(int id, Employee employee)
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
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }
    }
}
