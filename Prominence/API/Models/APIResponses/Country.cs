using System;
using System.Collections.Generic;

namespace Models.APIResponses
{
    public class Country
    {
        public string name { get; set; }
        public List<string> topLevelDomain { get; set; }
        public string alpha2Code { get; set; }
        public string alpha3Code { get; set; }
        public List<string> callingCodes { get; set; }
        public string capital { get; set; }
        public List<string> altSpellings { get; set; }
        public string region { get; set; }
        public string subregion { get; set; }
        public long? population { get; set; }
        public List<decimal>? latlng { get; set; }
        public string demonym { get; set; }
        public decimal? area { get; set; }
        public decimal? gini { get; set; }
        public List<string> timezones { get; set; }
        public List<string> borders { get; set; }
        public string nativeName {get;set;}
        public string numericCode { get; set; }
        public List<Currency> currencies { get; set; }
        public List<Language> languages { get; set; }
        public Translation translations { get; set; }
        public string flag { get; set; }
        public List<RegionalBloc> regionalBlocs { get; set; }
        public string cioc { get; set; }
    }
}
