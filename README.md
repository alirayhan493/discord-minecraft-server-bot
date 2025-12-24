# Discord Minecraft Server Bot

A Discord bot that runs **on the same machine** as a Minecraft server and allows authorized users to start, stop, and check the server status via Discord commands.

## Features
- Discord command interface
- Local command execution (no SSH)
- Fabric / Paper compatible
- Environment-based config (safe)

## Setup
```bash
npm install
cp .env.example .env
node src/index.js