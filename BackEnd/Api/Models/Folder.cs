using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Childrens.Models
{
    public class Folder
    {
        public long Id { get; set; }

        public string FolderName { get; set; }

        public long Parent { get; set; }

        public string Status { get; set; }
    }
}
