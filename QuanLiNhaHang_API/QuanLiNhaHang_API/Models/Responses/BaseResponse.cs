using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLiNhaHang_API.Models.Responses
{
    public class BaseResponse
    {
        public int ErrorCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}
