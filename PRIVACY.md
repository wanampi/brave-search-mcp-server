# Privacy Policy

## Overview

The Brave Search MCP Server is designed with user privacy as a core principle. This document outlines the privacy protections implemented in this server.

## Privacy Features

### 1. Do Not Track (DNT) Header

All requests to the Brave Search API include the `DNT: 1` header, signaling that the user does not wish to be tracked. This is a standard privacy header recognized by many web services.

### 2. Sensitive Data Sanitization

The server implements automatic sanitization of sensitive data in error messages and logs:

- **API Key Protection**: API keys are automatically redacted from all error messages with `[REDACTED-API-KEY]`
- **Query Parameter Masking**: Search queries that might contain personally identifiable information (PII) are masked as `[REDACTED]` in error logs
- **URL Sanitization**: All URLs in error messages are sanitized to prevent leaking sensitive search terms

### 3. User-Agent Transparency

All requests include a clear User-Agent header identifying the request source as:
```
@brave/brave-search-mcp-server/<version> (MCP Server)
```

This transparency allows services to recognize and appropriately handle requests from this MCP server.

### 4. HTTPS-Only Goggles

The server enforces HTTPS-only URLs for custom Goggles (search re-ranking definitions), preventing insecure transmission of search parameters.

## Data Handling

### What Data is Processed

- Search queries and parameters sent to the Brave Search API
- API responses from Brave Search
- Configuration data (API keys, server settings)

### What Data is NOT Collected

- No user tracking or profiling
- No logging of search queries beyond what is required for error handling
- No persistent storage of search history
- No sharing of data with third parties (beyond the Brave Search API itself)

### Error Reporting

When errors occur:
1. Error messages are sanitized before being thrown
2. API keys are removed from error text
3. Search queries in URLs are masked
4. Only essential debugging information is preserved

## Third-Party Services

This server communicates exclusively with:
- **Brave Search API** (`api.search.brave.com`) - for search functionality

Brave Search has its own privacy policy available at: https://search.brave.com/help/privacy-policy

## User Control

Users maintain full control over:
- Which searches are performed
- What data is sent to the Brave Search API
- When the server is active (via the MCP client)

## Security Best Practices

To maintain your privacy when using this server:

1. **Protect Your API Key**: Keep your Brave Search API key secure and never share it
2. **Use Environment Variables**: Store API keys in environment variables, not in code
3. **Review Search Queries**: Be mindful of sensitive information in search queries
4. **Regular Updates**: Keep the server updated to benefit from the latest privacy enhancements

## Updates to This Policy

Privacy improvements are continuously evaluated. Check the repository changelog for updates to privacy features.

## Questions or Concerns

For privacy-related questions or concerns, please open an issue in the GitHub repository:
https://github.com/brave/brave-search-mcp-server/issues
