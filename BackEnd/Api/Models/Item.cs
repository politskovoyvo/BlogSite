namespace Childrens.Models
{
    public class Item
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string Link { get; set; }

        public string Image { get; set; }

        public long ParentId { get; set; }
    }
}
