using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Prominence.Controllers.API
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        private ICountryRepo _repo;
        public CountryController(ICountryRepo repo)
        {
            _repo = repo;
        }

        [HttpGet("getAllCountries")]
        public async Task<ActionResult> getAllCountries()
        {
            return Ok(await _repo.getAllCountries());
        }

        [HttpGet("getSpecificCountry")]
        public async Task<ActionResult> getSpecificCountry(string countryName)
        {
            return Ok(await _repo.getSpecificCountryInfo(countryName));
        }

        [HttpGet("getSpecificRegion")]
        public async Task<ActionResult> getSpecificRegion(string regionName)
        {
            return Ok(await _repo.getSpecificRegionInfo(regionName));
        }

        [HttpGet("getSpecificSubRegion")]
        public async Task<ActionResult> getSpecificSubRegion(string subRegionName)
        {
            return Ok(await _repo.getSpecificSubRegionInfo(subRegionName));
        }


    }
}
