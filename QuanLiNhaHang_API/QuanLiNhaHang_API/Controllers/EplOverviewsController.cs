using System;
using System.Collections.Generic;
using System.Composition;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLiNhaHang_API.Models;
using QuanLiNhaHang_API.Models.Requests;

namespace QuanLiNhaHang_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EplOverviewsController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public EplOverviewsController(QuanLiContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            var employee = await _context.Employees.Where(x => x.Working == true).ToListAsync();
            if(employee == null)
            {
                return NotFound();
            }
            return employee;
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

        [HttpGet("CountTableWK")]
        public async Task<ActionResult<int>> GetTable()
        {
            var countTable = await _context.Tables.CountAsync(x => x.Tab_Status == true);
            return countTable;
        }

        //[HttpGet("CountTable")]
        //public async Task<ActionResult<int>> GetCountTable()
        //{
        //    var countTable = await _context.Tables.CountAsync(x => x.Id != null);
        //    return countTable;
        //}

        [HttpGet("Listdetail/{id}")]
        public async Task<ActionResult<IEnumerable<DetailExportOrder>>> getListdetail(int id , ExportOrder exportOrder)
        {
            var listDetail = await _context.DetailExportOrders
                            .Where(x => x.Exp_Id == id && x.Exp_Id == exportOrder.Id)
                             .ToListAsync();
            return listDetail;
        }

        // Tổng daonh thu từ ngày đến ngày
        [HttpPost("sumDateToDate")]
        public double postSumDateToDate(DateToDate dateToDate)
        {
            return _context.ExportOrders
                .Where(x => x.Exp_Date >= dateToDate.fromDate && x.Exp_Date <= dateToDate.toDate)
                .Sum(x => x.Exp_Total);
        }

        // liệt kê hóa đơn từ ngày đến ngày
        [HttpPost("listDateToDate")]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> postDateToDate(DateToDate dateToDate)
        {
            var DateToDate = await _context.ExportOrders
                .Where(x => x.Exp_Date >= dateToDate.fromDate && x.Exp_Date <= dateToDate.toDate)
                .ToListAsync();
            return DateToDate;
        }

        /*// Tổng số tiền hóa đơn ngày hiện tại
        [HttpPost("totalDatenow")]
        public async Task<ActionResult<Double>> postDateNow(DateToDate dateToDate)
        {
            var DateToDate = await _context.ExportOrders
                .Where(x => x.Exp_Date == dateToDate.nowDate)
                .SumAsync(x => x.Total);
            return DateToDate;
        }

        // Liệt kê số hóa đơn trong ngày hôm nay
        [HttpPost("ListTotalDatenow")]
        public async Task<ActionResult<IEnumerable<ExportOrder>>> postListTotal(DateToDate dateToDate)
        {
            var DateToDate = await _context.ExportOrders
                .Where(x => x.Exp_Date == dateToDate.nowDate)
                .ToListAsync();
            return DateToDate;
        }*/



        /*[HttpGet("SumOrder")]

        public async Task<ActionResult<float>> GetSumOrder()
        {
            var sumOrder = await _context.
        }*/

        /*// PUT: api/Employees/5
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
        }*/
    }
}
