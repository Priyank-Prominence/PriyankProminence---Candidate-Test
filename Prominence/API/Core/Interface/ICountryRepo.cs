using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Models.APIResponses;

namespace Core.Interface
{
    public interface ICountryRepo
    {
        Task<GenericResponseBody> getAllCountries();
        Task<GenericResponseBody> getSpecificCountryInfo(string countryName);
        Task<GenericResponseBody> getSpecificRegionInfo(string regionName);
        Task<GenericResponseBody> getSpecificSubRegionInfo(string subRegionName);
    }
}
