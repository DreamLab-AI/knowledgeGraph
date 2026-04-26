iri:: http://narrativegoldmine.com/ontology#ModelControlProtocolsLikeMCP
uri:: urn:visionclaw:concept:artificial-intelligence:model-control-protocols-like-mcp
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:model-control-protocols-like-mcp
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Model Control Protocols like MCP
content-hash:: sha256-12-9f52ed6d3080
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Model Control Protocols like MCP is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelControlProtocolsLikeMCP
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - MCP standardises how AI applications connect to external services and tools. Rather than building custom integrations for each service, MCP provides:
			- Unified protocol for tool discovery and usage
			- Reduced integration complexity for developers
			- Better tool definitions maintained by service providers
			- Standardised authentication and security
		- MCP systems have two main components:
			- Servers: Provide tools and resources (maintained by service providers)
			- Clients/Hosts: Applications that consume MCP resources
		- This architecture shifts integration work from application developers to service providers, who can optimise their MCP servers for better AI interaction.
		- MCP encourages encapsulating entire workflows rather than exposing granular API endpoints. Instead of requiring multiple API calls to complete a task, MCP servers should provide single endpoints that handle complete business processes.
		- MCP servers can provide:
			- Tools for specific actions
			- Prompts for common use cases
			- Files and documents
			- Real-time data feeds
		- The discovery process allows agents to understand available resources dynamically, adapting their capabilities based on connected services.
  - [SLOP - Join the Revolution](https://i-love-slop.com/)
  - [agnt-gg/slop: The place for SLOP](https://github.com/agnt-gg/slop)
  - ![image.png](../assets/image_1741526343816_0.png)
  - https://github.com/NightTrek/Ollama-mcp

  - ## Model Context Protocol (MCP)
  - ### Purpose and Benefits
  - ### Architecture Components
  - ### Workflow Encapsulation
  - ### Practical Implementation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
