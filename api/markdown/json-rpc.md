- ### Definition
  - JSON-RPC is a lightweight, stateless, transport-agnostic remote procedure call protocol that encodes method invocations and their results as JSON objects, defined by the JSON-RPC 2.0 specification. A request object carries a method name, an optional params field, and an id for correlation; the response carries either a result or an error object. It is the canonical API protocol for Ethereum and EVM-compatible nodes (via eth_ and net_ namespaces), and serves as the wire format underlying the Language Server Protocol and the Model Context Protocol used in AI tool-calling infrastructure.

- ### Semantic Classification
  - owl-class:: json-rpc:JSON-RPC
  - owl-role:: Concept

- ### Relationships
  - enables [[Tool Use]]
  - enables [[Function Calling]]
  - relatedTo [[REST API]]
  - relatedTo [[Smart Contract]]
  - uses [[Blockchain Infrastructure]]

- ### Content
  - JSON-RPC 2.0, specified by an open community standard document, defines a minimal envelope for remote procedure calls: every request is a JSON object with jsonrpc: "2.0", a method string, a params array or object, and an integer or string id. The server replies with either a result field on success or an error field containing a numeric code and message on failure. Notifications — requests without an id — are one-way fire-and-forget messages. The protocol is transport-agnostic: implementations run over HTTP, WebSocket, Unix domain sockets, TCP, and stdin/stdout pipes.
  - In the Ethereum ecosystem, JSON-RPC is the standard interface between client applications (wallets, dApps, development tools) and Ethereum nodes (Geth, Erigon, Nethermind). The eth namespace exposes methods such as eth_getBalance, eth_call (for simulating smart contract calls), eth_sendRawTransaction, and eth_getLogs; the net and web3 namespaces provide peer and node metadata. Providers such as Infura, Alchemy, and QuickNode serve Ethereum JSON-RPC at scale as managed services.
  - In the AI domain, the Language Server Protocol (LSP) adopted JSON-RPC as its wire format, making it the basis for IDE intelligence features such as code completion and go-to-definition. More recently, Anthropic's Model Context Protocol (MCP) uses JSON-RPC 2.0 as the message envelope between AI models and tool servers, enabling structured function calling, resource access, and prompt injection through a standardised channel. This dual use in blockchain and AI tooling makes JSON-RPC a cross-domain infrastructure primitive.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z