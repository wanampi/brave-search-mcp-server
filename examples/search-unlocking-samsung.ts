#!/usr/bin/env node
/**
 * Example: Searching for "unlocking samsung" using Brave Search MCP Server
 * 
 * This example demonstrates how to use the brave_web_search tool to search
 * for information about unlocking Samsung devices.
 * 
 * Requirements:
 * - BRAVE_API_KEY environment variable must be set
 * 
 * Usage:
 *   npm run build
 *   npx tsx examples/search-unlocking-samsung.ts
 */

import createMcpServer from '../src/server.js';

async function main() {
  // Check for API key
  if (!process.env.BRAVE_API_KEY) {
    console.error('Error: BRAVE_API_KEY environment variable is required');
    console.error('Please set your Brave Search API key:');
    console.error('  export BRAVE_API_KEY=your_api_key_here');
    process.exit(1);
  }

  console.log('Brave Search MCP Server - Example: Unlocking Samsung');
  console.log('=' .repeat(60));
  console.log();

  // Create the MCP server instance
  const server = createMcpServer();

  // Simulate a tool call for web search
  const searchQuery = 'unlocking samsung';
  
  console.log(`Searching for: "${searchQuery}"`);
  console.log();

  try {
    // Note: This is a demonstration of the search query structure
    // In a real MCP environment, tools would be called through the MCP protocol
    console.log('Search parameters:');
    console.log(JSON.stringify({
      query: searchQuery,
      count: 10,
      safesearch: 'moderate',
      search_lang: 'en',
      country: 'US'
    }, null, 2));
    
    console.log();
    console.log('This example demonstrates the brave_web_search tool configuration.');
    console.log('To execute actual searches, use the MCP server with a compatible client');
    console.log('such as Claude Desktop or the MCP Inspector.');
    console.log();
    console.log('Available tools in this server:');
    
    // List available tools
    const tools = [
      '- brave_web_search: Comprehensive web search',
      '- brave_local_search: Local business search',
      '- brave_image_search: Image search',
      '- brave_video_search: Video search',
      '- brave_news_search: News search',
      '- brave_summarizer: AI-powered summarization'
    ];
    
    tools.forEach(tool => console.log(tool));
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
