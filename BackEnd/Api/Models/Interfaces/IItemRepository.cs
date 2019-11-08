using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Childrens.Models.Interfaces
{
    public interface IItemRepository
    {
        Task<IReadOnlyList<Item>> GetItems(long id);

        Task<IReadOnlyList<Folder>> GetFolders();

        Task DeleteItem(long id);

        void AddItem(Item item);

        Task Edit(Item item);

        Task<Item> GetItem(long id);
    }
}
