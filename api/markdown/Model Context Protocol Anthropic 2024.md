The Model Context Protocol (MCP) is an open standard introduced by Anthropic in 2024 that defines a uniform JSON-RPC interface for connecting large language model applications to external tools, data sources, and prompts. It standardises how AI agents discover and invoke capabilities exposed by MCP servers, decoupling model hosts from integrations. It has been broadly adopted as a common plug-in layer for agentic systems.

### Content

- MCP defines servers that advertise tools, resources, and prompts, and clients (model hosts) that negotiate and invoke them over a transport-agnostic protocol. By providing one interface for many integrations, it reduces bespoke connector work and lets the same tool server be reused across different agent runtimes.

