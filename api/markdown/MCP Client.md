An MCP client is the component within an AI host application that establishes and maintains a connection to one or more Model Context Protocol servers. It negotiates capabilities, forwards tool, resource, and prompt requests from the language model, and relays results back into the model's context. Each client maintains a one-to-one session with a server, mediating the model's access to external systems.

### Content

- The client handles capability negotiation, request routing, and lifecycle management, isolating the host from server-specific transport details. A single host can instantiate multiple clients to compose many servers, giving a model unified access to diverse tools and data sources.

