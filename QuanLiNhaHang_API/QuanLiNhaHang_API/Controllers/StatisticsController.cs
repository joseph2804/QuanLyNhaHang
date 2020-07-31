using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuanLiNhaHang_API.Models;
using Microsoft.EntityFrameworkCore;
using QuanLiNhaHang_API.Models.Requests;

namespace QuanLiNhaHang_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private readonly QuanLiContext _context;

        public StatisticsController (QuanLiContext context)
        {
            _context = context;
        }


        // Tổng daonh thu từ ngày đến ngày
        [HttpPost("sumDateToDate")]
        public async Task<ActionResult<Double>> postSumDateToDate(DateToDate dateToDate)
        {
            var sumDateToDate = await _context.ExportOrders
                .Where(x => x.Exp_Date >= dateToDate.fromDate && x.Exp_Date <= dateToDate.toDate)
                .SumAsync(x => x.Exp_Total);
            return sumDateToDate;
        }

        // liệt kê hóa đơn từ ngày đến ngày
        [HttpPost("DateToDate")]
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


        // Tổng tất cả doanh thu
        [HttpGet("Total")]
        public async Task<ActionResult<double>> GetTotal()
        {
            var sumTotal = await _context.ExportOrders.SumAsync(x => x.Exp_Total);
            return sumTotal;
        }

        // tổng doanh thu theo ngày
        [HttpGet("TotalDate/{date}")]
        public async Task<ActionResult<double>> GetTotalDate(DateTime date)
        {
            var sumTotalDate = await _context.ExportOrders
                .Where(x => x.Exp_Date.Date == date)
                /*.Where(x => x.Exp_Date.Date.ToString("yyyy-MMMM-dd") == date.ToString("yyyy-MMMM-dd"))*/
                .SumAsync(x => x.Exp_Total);
            return sumTotalDate;
        }

        // Tổng doanh thu theo tháng
        [HttpGet("TotalMonth/{month}")]
        public async Task<ActionResult<double>> GetTotalMonth(int month)
        {
            var sumTotalMonth = await _context.ExportOrders
                .Where(x => x.Exp_Date.Month == month)
                .SumAsync(x => x.Exp_Total);
            return sumTotalMonth;
        }

        [HttpGet("TotalDay/{day}")]
        public async Task<ActionResult<double>> GetTotalDay(int day)
        {
            var sumTotalDay = await _context.ExportOrders
                .Where(x => x.Exp_Date.Day == day)
                .SumAsync(x => x.Exp_Total);
            return sumTotalDay;
        }
    }
}
