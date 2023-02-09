using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoldleFinal.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Champion",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Species = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Resource = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RangeType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReleaseYear = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ChampId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Champion", x => x.Name);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Champion");
        }
    }
}
