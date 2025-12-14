# Brave Search MCP Server Examples

This directory contains example scripts demonstrating how to use the Brave Search MCP Server.

## Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Set your Brave Search API key:
   ```bash
   export BRAVE_API_KEY=your_api_key_here
   ```

## Examples

### Searching for "Unlocking Samsung"

This example demonstrates how to configure and use the brave_web_search tool to search for information about unlocking Samsung devices.

```bash
npx tsx examples/search-unlocking-samsung.ts
```

This example shows:
- How to initialize the MCP server
- Search parameter configuration
- Available search tools

### Running with MCP Inspector

For interactive testing with the MCP Inspector:

```bash
npm run build
npx @modelcontextprotocol/inspector node dist/index.js
```

Then use the Inspector UI to test queries like "unlocking samsung" with the brave_web_search tool.

## Notes

- The examples in this directory are demonstrations of the server configuration
- For actual search execution, use the MCP server with a compatible MCP client (Claude Desktop, MCP Inspector, etc.)
- All examples require a valid BRAVE_API_KEY environment variable
