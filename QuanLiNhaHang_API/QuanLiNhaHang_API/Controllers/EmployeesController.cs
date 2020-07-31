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
    public class EmployeesController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public EmployeesController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }


        // PUT: api/Employees/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<Employee>> put(int id, Employee employee)
        {
            var employ = await _context.Employees.FindAsync(id);
            if (employ == null)
            {
                return NotFound();
            }

            employ.FirstName = employee.FirstName;
            employ.LastName = employee.LastName;
            employ.Phone = employee.Phone;
            employ.Position = employee.Position;
            employ.Gender = employee.Gender;
            employ.Status = employee.Status;
            employ.Working = employee.Working;

            _context.Employees.Update(employ);
            await _context.SaveChangesAsync();

            return employee;

        }

        // POST: api/Employees
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
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
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }
    }
}
