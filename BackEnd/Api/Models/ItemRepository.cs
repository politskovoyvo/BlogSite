using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Childrens.Models.Interfaces;
using Microsoft.AspNetCore.Identity.UI.V3.Pages.Internal.Account;
using Microsoft.EntityFrameworkCore;

namespace Childrens.Models
{
    public class ItemRepository : IItemRepository
    {
        private readonly ApplicationDbContex _appDbContext; 

        public ItemRepository(ApplicationDbContex appDbContext)
        {
            _appDbContext = appDbContext; 
        }

        public async Task<IReadOnlyList<Item>> GetItems(long id)
        {
            var items = await _appDbContext.LinkItems.Where(i => i.ParentId == id).Select(i => new Item
            {
                Id = i.Id,
                Name = i.Name,
                Image = i.Image,
                Link = i.Link
            }).AsNoTracking().ToListAsync();

            return items;
        }

        public async Task<IReadOnlyList<Folder>> GetFolders()
        {
            return await _appDbContext.Folders.AsNoTracking().ToListAsync(); 
        }

        public async Task DeleteItem(long id)
        {
            var removeItem = await _appDbContext.LinkItems.SingleAsync(i => i.Id == id);

            _appDbContext.Remove(removeItem);

            _appDbContext.SaveChanges();
        }

        public void AddItem(Item item)
        {
            _appDbContext.Add(item);

            _appDbContext.SaveChanges();
        }

        public async Task Edit(Item item)
        {
            var editItem = await _appDbContext.LinkItems.SingleAsync(i => i.Id == item.Id);

            editItem = item;

            _appDbContext.SaveChanges(); 
        }

        public async Task<Item> GetItem(long id)
        {
            var item = await _appDbContext.LinkItems.SingleAsync(i => i.Id == id);

            return item; 
        }
    }
}
