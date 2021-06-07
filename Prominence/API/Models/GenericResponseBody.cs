using System;
namespace Models
{

    public interface IGenericResponseBody
    {
        GenericResponseBody getSuccessResponse(object data);
        GenericResponseBody getFailureResponse(string message);

    }

    public class GenericResponseBody :IGenericResponseBody
    {
        public string Message { get; set; }
        public int Status { get; set; }
        public bool Success { get; set; }
        public object Data { get; set; }

        public GenericResponseBody getSuccessResponse(object data)
        {
            Message = "Success";
            Status = 200;
            Success = true;
            Data = data;
            return this;
        }


        public GenericResponseBody getFailureResponse(string message)
        {
            Message = message;
            Status = 400;
            Success = false;
            Data = null;
            return this;
        }

    }
}
