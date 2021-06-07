using System;
using System.Collections.Generic;

namespace Models.APIResponses
{
    public class RegionalBloc
    {
        public string acronym { get; set; }
        public string name { get; set; }
        public List<string> otherAcronyms { get; set; }
        public List<string> otherNames { get; set; }
    }
}
