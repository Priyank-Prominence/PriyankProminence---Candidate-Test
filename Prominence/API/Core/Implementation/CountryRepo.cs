using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using Core.Interface;
using Models;
using Models.APIResponses;
using Newtonsoft.Json;

namespace Core.Implementation
{
    public class CountryRepo : ICountryRepo
    {
        private IGenericResponseBody response;
        public CountryRepo(IGenericResponseBody genericResponse)
        {
            response = genericResponse;
        }

        public async Task<GenericResponseBody> getAllCountries()
        {
            try
            {
                return await downloadDataFromApi("https://restcountries.eu/rest/v2/all");
            }
            catch(Exception ex)
            {
                return response.getFailureResponse(ex.Message);
            }
        }


        public async Task<GenericResponseBody> getSpecificCountryInfo(string countryName)
        {
            try
            {
                return await downloadDataFromApi(string.Format("https://restcountries.eu/rest/v2/name/{0}",countryName));
            }
            catch(Exception ex)
            {
                return response.getFailureResponse(ex.Message);
            }
        }

        public async Task<GenericResponseBody> getSpecificRegionInfo(string regionName)
        {
            try
            {
                return await downloadDataFromApi(string.Format("https://restcountries.eu/rest/v2/region/{0}", regionName));
            }
            catch(Exception ex)
            {
                return response.getFailureResponse(ex.Message);
            }
        }

        public async Task<GenericResponseBody> getSpecificSubRegionInfo(string subRegionName)
        {
            try
            {
                return await downloadDataFromApi(string.Format("https://restcountries.eu/rest/v2/subregion/{0}", subRegionName));
            }
            catch (Exception ex)
            {
                return response.getFailureResponse(ex.Message);
            }
        }

        public async Task<GenericResponseBody> downloadDataFromApi(string url)
        {
            try
            {
                WebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
                webRequest.ContentType = "application/x-www-form-urlencoded";
                webRequest.Method = "GET";
                WebResponse webResponse = await webRequest.GetResponseAsync();
                StreamReader streamReader = new StreamReader(webResponse.GetResponseStream());
                string responseText = await streamReader.ReadToEndAsync();
                IEnumerable<Country> responseData = JsonConvert.DeserializeObject<IEnumerable<Country>>(responseText);
                return response.getSuccessResponse(responseData);
            }
            catch(Exception ex)
            {
                return response.getFailureResponse(ex.Message);
            }
        }


    }
}
