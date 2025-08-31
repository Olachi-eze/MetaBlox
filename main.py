# first.py — MetaBlox Python Integration

def welcome_player(name):
    print(f"👋 Welcome to MetaBlox, {name}!")
    print("Type 'help' to see available Python commands.")

def help_menu():
    print("📜 Available Commands:")
    print("- teleport(x, y, z): Move to coordinates")
    print("- spawn(entity): Create an entity")
    print("- set_block(x, y, z, block_type): Place a block")

# Example usage
if __name__ == "__main__":
    player_name = input("Enter your player name: ")
    welcome_player(player_name)
    help_menu()
  
