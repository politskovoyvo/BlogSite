using System.Collections.Generic;
using Childrens.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Childrens.Models;

namespace Childrens.Controllers
{
    [Route("api/Repository")]
    public class HomeController : Controller
    {
        private readonly IItemRepository _itemRepository;

        private IEnumerable<Item> Items { get; }

        private IEnumerable<Folder> Folders { get; }

        public HomeController(IItemRepository itemRepository)
        {
            this._itemRepository = itemRepository;
        }

        public async Task<ActionResult> Index()
        {
            var items = await _itemRepository.GetItems(7);

            return View(items);
        }

        [HttpGet]
        public async Task <IEnumerable<Folder>> Get()
        {
            return await _itemRepository.GetFolders();
        }
    }
}