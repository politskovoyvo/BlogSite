using Microsoft.EntityFrameworkCore.Migrations;

namespace Childrens.Migrations
{
    public partial class addParentID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ParentId",
                table: "LinkItems",
                newName: "Parent");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Parent",
                table: "LinkItems",
                newName: "ParentId");
        }
    }
}
