An MCP server is a program that exposes tools, resources, and prompts to AI applications through the Model Context Protocol. It advertises its capabilities during connection negotiation and executes requests forwarded by an MCP client, returning structured results for the model to consume. Servers encapsulate access to external systems such as databases, APIs, file systems, and developer tooling.

### Content

- Servers declare capabilities at connection time and respond to typed requests over a transport such as stdio or HTTP/SSE. By standardising the integration boundary, MCP servers let any compliant host reuse the same connector, fostering an ecosystem of interoperable, composable AI integrations.

