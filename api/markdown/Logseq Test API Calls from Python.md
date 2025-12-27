id:: MV-0001

- ### OntologyBlock
  id:: Logseq Test API Calls from Python
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0001
  - preferred-term:: Logseq Python API Integration
  - source-domain:: bc
  - owl:class:: bc:LogseqPythonApiIntegration
  - status:: active

### HTTP Clients
- **requests**: Standard synchronous HTTP library for simple API calls
- **httpx**: Modern async-capable HTTP client for high-performance scenarios
- **gql**: GraphQL client library for structured query execution

### Logseq-Specific
- **logseq-api-py**: Community-maintained wrapper (experimental)
- Custom implementations using requests + GraphQL schemas

## API Endpoints

### Local Server
```
Base URL: http://localhost:12315
GraphQL: /api/graphql
REST: /api/v1/
```

### Common Operations
#### Query Blocks
```python
import requests

def query_blocks(query_string):
    url = "http://localhost:12315/api/graphql"
    headers = {"Authorization": f"Bearer {token}"}

    query = """
    query {
      blocks(query: "%s") {
        id
        content
        page { name }
      }
    }
    """ % query_string

    response = requests.post(url, json={"query": query}, headers=headers)
    return response.json()
```

#### Create Block
```python
def create_block(page_name, content, parent_id=None):
    url = "http://localhost:12315/api/v1/blocks"
    headers = {"Authorization": f"Bearer {token}"}

    payload = {
        "page": page_name,
        "content": content,
        "parent": parent_id
    }

    response = requests.post(url, json=payload, headers=headers)
    return response.json()
```

#### Traverse Graph
```python
def get_page_tree(page_name):
    url = "http://localhost:12315/api/graphql"
    headers = {"Authorization": f"Bearer {token}"}

    query = """
    query {
      page(name: "%s") {
        blocks {
          id
          content
          children {
            id
            content
          }
        }
      }
    }
    """ % page_name

    response = requests.post(url, json={"query": query}, headers=headers)
    return response.json()
```

## Error Handling Patterns

### Connection Management
```python
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

def get_session():
    session = requests.Session()
    retry = Retry(total=3, backoff_factor=0.3)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    return session
```

### Rate Limiting
```python
import time
from functools import wraps

def rate_limit(calls_per_second=5):
    interval = 1.0 / calls_per_second

    def decorator(func):
        last_called = [0.0]

        @wraps(func)
        def wrapper(*args, **kwargs):
            elapsed = time.time() - last_called[0]
            if elapsed < interval:
                time.sleep(interval - elapsed)
            result = func(*args, **kwargs)
            last_called[0] = time.time()
            return result
        return wrapper
    return decorator
```

## Authentication Methods

### Token-Based (Local)
1. Enable API server in Logseq settings
2. Generate API token
3. Include in Authorization header: `Bearer <token>`

### Environment Variables
```python
import os

LOGSEQ_API_TOKEN = os.getenv('LOGSEQ_API_TOKEN')
LOGSEQ_API_URL = os.getenv('LOGSEQ_API_URL', 'http://localhost:12315')
```

## Common Query Patterns

### Datalog Queries
```python
def advanced_query(datalog_query):
    """Execute advanced Datalog query against graph"""
    url = "http://localhost:12315/api/v1/query"
    headers = {"Authorization": f"Bearer {token}"}

    payload = {
        "query": datalog_query,
        "inputs": []
    }

    response = requests.post(url, json=payload, headers=headers)
    return response.json()
```

### Batch Operations
```python
async def batch_create_blocks(blocks_data):
    """Create multiple blocks concurrently"""
    import httpx
    import asyncio

    async with httpx.AsyncClient() as client:
        tasks = [
            client.post(
                f"{LOGSEQ_API_URL}/api/v1/blocks",
                json=block,
                headers={"Authorization": f"Bearer {token}"}
            )
            for block in blocks_data
        ]
        return await asyncio.gather(*tasks)
```

## UK Community Context

### Manchester Tech Hub
- Academic research automation workflows
- Integration with university knowledge bases
- Research paper citation tracking systems

### London Fintech
- Logseq as engineering documentation system
- API-driven knowledge capture from Slack/Confluence
- Automated daily standup summaries

## Use Cases

### Knowledge Graph Analytics
- Identify orphaned pages
- Calculate betweenness centrality of concepts
- Generate citation networks
- Track concept evolution over time

### Automation Workflows
- Daily journal template population
- Automated task migration
- Reference material syncing from Zotero
- Meeting notes from calendar integrations

### Content Migration
- Import from Notion, Obsidian, Roam
- Export to static site generators
- Backup to structured JSON/SQLite

## Performance Considerations

### Caching Strategies
```python
from functools import lru_cache

@lru_cache(maxsize=128)
def get_page_cached(page_name):
    return get_page_tree(page_name)
```

### Async Processing
- Use httpx for concurrent requests
- Implement connection pooling
- Batch similar operations
- Stream large result sets

## Limitations

- API server must be explicitly enabled
- Local-only by default (no cloud API yet)
- GraphQL schema not fully documented
- Limited support for plugin data access
- No official Python SDK (community implementations)

## Related Content: Logseq

## Demos in Logseq
	- [[Large language models]] [Mixture of Mutli-LoRA local LLM](https://github.com/uukuguy/multi_loras?tab=readme-ov-file#mixture-of-multi-loras)]
	- [[ComfyUI]] [[Autogen]] demo?
	- [[ComfyUI]] LoRA training demo?
	- [[Node based visual interfaces]] demo for NFT creation?
- docker web version [logseq/docs/docker-web-app-guide.md at master · logseq/logseq (github.com)](https://github.com/logseq/logseq/blob/master/docs/docker-web-app-guide.md)
- [Custom Prompt for OCR Image using ocr.space · debanjandhar12/logseq-chatgpt-plugin · Discussion #26 (github.com)](https://github.com/debanjandhar12/logseq-chatgpt-plugin/discussions/26)
- [ahonn/logseq-plugin-ai-assistant: A powerful tool that enhances your Logseq experience by allowing you to interact with AI models like OpenAI's gpt-3.5-turbo. (github.com)](https://github.com/ahonn/logseq-plugin-ai-assistant)
-
- # Plugin development
	- [LongarMD/logseq-plugin-gpt-generation (github.com)](https://github.com/LongarMD/logseq-plugin-gpt-generation)
	-
-
-


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

### Relationships
- is-subclass-of:: [[Blockchain]]
