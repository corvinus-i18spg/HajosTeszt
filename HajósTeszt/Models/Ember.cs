using System;
using System.Collections.Generic;

#nullable disable

namespace HajósTeszt.Models
{
    public partial class Ember
    {
        public int Id { get; set; }
        public string Vezetéknév { get; set; }
        public string Név { get; set; }
        public int? Kor { get; set; }
        public bool? Nem { get; set; }
    }
}
