public:: true

# json-rpc
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9cf99620b37708af1e3bc507bcb62c64a043a7052e7bf39696f0ec0512fd54e2",
  "@type": "Page",
  "vc:slug": "json-rpc",
  "title": "json-rpc",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-rpc",
  "@type": "Class",
  "label": "JSON-RPC",
  "definition": "JSON-RPC is a lightweight, stateless, transport-agnostic remote procedure call (RPC) protocol that encodes method invocations and their responses as JSON objects. The JSON-RPC 2.0 specification, finalised in 2013, defines a minimal request envelope comprising a jsonrpc version field, a method name, an optional params argument (array or object), and a correlation id; the response carries either a result or a structured error object. The protocol operates over any byte-stream transport — HTTP, WebSocket, TCP, Unix domain sockets, or stdin/stdout — making it uniquely portable across networked and embedded contexts. It underpins foundational cross-domain infrastructure including the Ethereum node API, the Language Server Protocol, and the Model Context Protocol used for AI tool-calling.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:json-rpc-2-0",
      "label": "JSON-RPC 2.0"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      },
      {
        "@id": "urn:ngm:class:api-standard",
        "label": "API Standard"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:push-notification",
        "label": "Notification Message"
      },
      {
        "@id": "urn:ngm:class:batch-processing",
        "label": "Batch Request"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:network-transport",
        "label": "Network Transport"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:client-server-architecture",
        "label": "Client-Server Architecture"
      },
      {
        "@id": "urn:ngm:class:request-response-pattern",
        "label": "Request-Response Pattern"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:language-server-protocol",
        "label": "Language Server Protocol"
      },
      {
        "@id": "urn:ngm:class:model-context-protocol",
        "label": "Model Context Protocol"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graph-ql",
        "label": "GraphQL"
      },
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:soap",
        "label": "SOAP"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:inter-process-communication",
        "label": "Inter-Process Communication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-infrastructure",
        "label": "Blockchain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - JSON-RPC is a lightweight, stateless, transport-agnostic [[Remote Procedure Call]] protocol that encodes method invocations and their results as [[JSON]] objects. The JSON-RPC 2.0 specification (2013) defines a minimal envelope: a `jsonrpc` version field, a `method` string, an optional `params` argument (array or named object), and a correlation `id`. The server responds with either a `result` field on success or a structured `error` object carrying a numeric code and human-readable message. Critically, the protocol is decoupled from transport — it runs equally over [[HTTP]], [[WebSocket]], TCP, Unix domain sockets, and stdin/stdout pipes — making it a versatile foundation for both networked services and local process communication.

- ### Overview
  - JSON-RPC was designed to solve the same problem as [[XML-RPC]] and [[SOAP]] — expressing structured remote calls — but with minimal overhead by leveraging the ubiquity of [[JSON]] as a data interchange format. The 2.0 specification (backwardly incompatible with 1.0) added named parameters, batch requests, and a cleaner error model.
  - Why it matters:
    - **Minimal specification surface**: the full JSON-RPC 2.0 spec fits on a single web page, which reduces implementation complexity and interoperability friction.
    - **Transport independence**: unlike [[REST API]] (which is HTTP-centric) or [[gRPC]] (which requires HTTP/2), JSON-RPC is agnostic — this makes it equally useful for browser-to-server, node-to-node, and in-process IPC scenarios.
    - **Cross-domain adoption**: the same protocol powers [[Ethereum]] node APIs, [[Language Server Protocol]] IDE tooling, and [[Model Context Protocol]] AI agent infrastructure — a rare instance of a single wire format spanning blockchain, developer tooling, and AI.
  - The protocol operates in a [[Client-Server Architecture]]: a client sends a Request Object and awaits a Response Object. Requests without an `id` field are Notifications — fire-and-forget messages to which the server MUST NOT reply.

- ### Key Components
  - **Request Object**
    - `jsonrpc`: always the string `"2.0"` — mandatory version discriminator.
    - `method`: string naming the procedure to invoke (e.g. `eth_getBalance`, `initialize`, `tools/call`).
    - `params`: optional structured arguments — either a positional array `[...]` or a named-parameter object `{...}`.
    - `id`: integer, string, or null — used to correlate responses. Absent for Notifications.
  - **Response Object**
    - `jsonrpc`: `"2.0"`.
    - `result`: present on success — the procedure return value (any JSON type).
    - `error`: present on failure — an object `{code, message, data?}` where `code` is a signed integer (pre-defined system codes: -32700 Parse Error, -32600 Invalid Request, -32601 Method Not Found, -32602 Invalid Params, -32603 Internal Error).
    - `id`: echoes the request `id`; `null` if the request could not be parsed.
  - **Notification**
    - A Request Object with no `id`. The server processes it but MUST send no response. Used for push events in bidirectional transports like [[WebSocket]].
  - **Batch Request**
    - An array of Request Objects sent in a single transmission. The server processes all (possibly in parallel) and returns a corresponding array of Response Objects (omitting responses for Notifications). Enables [[Request-Response Pattern]] optimisation by reducing round-trips.
  - **Error Codes**
    - Reserved range -32768 to -32000 is reserved for pre-defined protocol errors. Application-defined errors MUST use codes outside this range.

- ### Transport Bindings
  - **HTTP/HTTPS**: most common deployment — a POST to a single endpoint with Content-Type `application/json`. Stateless; each request is an independent HTTP call. Used by [[Ethereum]] node providers (Infura, Alchemy, QuickNode) and many REST-adjacent APIs.
  - **WebSocket**: enables bidirectional, multiplexed communication — the server can push Notifications without a client poll. Used in [[Language Server Protocol]] stdio mode, [[Model Context Protocol]] SSE transport, and [[Ethereum]] subscription extensions (`eth_subscribe`).
  - **stdio (stdin/stdout)**: used by the [[Language Server Protocol]] to communicate between an editor host process and a language server sub-process. The [[Model Context Protocol]] also supports this transport for local agent-tool communication.
  - **TCP / Unix sockets**: used in embedded systems, local daemons, and high-throughput node-to-node paths.
  - **IPC via Named Pipes**: common on Windows for local language servers and development tooling.

- ### Applications and Use Cases
  - **Ethereum and EVM Blockchain Nodes**
    - JSON-RPC is the canonical interface between client applications ([[Wallet]], [[Decentralised Application]], development tools) and [[Ethereum]] execution-layer nodes such as Geth, Erigon, and Nethermind.
    - Key namespaces: `eth_` (balance queries, transaction submission, log filtering, block inspection), `net_` (peer count, network ID), `web3_` (client version, SHA3 utilities), `personal_` (deprecated key management), `debug_` and `trace_` (advanced node introspection for MEV and analytics).
    - EVM-compatible chains (Polygon, Arbitrum, Optimism, Base, Avalanche C-Chain) all expose the same `eth_` namespace, making JSON-RPC a universal [[Blockchain Infrastructure]] interface.
    - The `eth_subscribe` / `eth_unsubscribe` pair extends JSON-RPC over [[WebSocket]] for real-time event streaming (new blocks, pending transactions, log events).
  - **Language Server Protocol (LSP)**
    - The [[Language Server Protocol]], standardised by Microsoft and adopted by VS Code, Neovim, Emacs, and hundreds of editors, uses JSON-RPC 2.0 as its wire format over stdio or TCP.
    - LSP defines domain-specific methods: `initialize`, `textDocument/completion`, `textDocument/hover`, `textDocument/definition`, `workspace/symbol`. These are JSON-RPC method calls with structured params/result schemas defined by LSP TypeScript interfaces.
    - This makes JSON-RPC the backbone of IDE intelligence features for virtually every programming language with a language server (Rust Analyzer, clangd, Pyright, TypeScript Language Service, etc.).
  - **Model Context Protocol (MCP)**
    - [[Model Context Protocol]] (Anthropic, 2024) uses JSON-RPC 2.0 as the message envelope between AI host applications and tool/resource servers. MCP methods include `initialize`, `tools/list`, `tools/call`, `resources/read`, `prompts/get`.
    - This makes JSON-RPC a foundational layer for [[AI Agent]] [[Tool Use]] and [[Function Calling]] infrastructure.
    - MCP transports include stdio (local tool servers) and SSE over HTTP (remote servers), both carrying JSON-RPC payloads.
  - **Embedded Systems and IoT**
    - JSON-RPC is used for microcontroller firmware management (e.g. OpenOCD debugger interface) and in protocols like [[JRPC over BLE]] for Bluetooth Low Energy device control.
  - **Database and Middleware APIs**
    - Databases such as CouchDB, Solr, and several graph databases expose administrative or query APIs over JSON-RPC. [[Elasticsearch]] historically used JSON over HTTP in a JSON-RPC-adjacent style.
  - **Inter-Service Communication in Microservices**
    - Some [[Microservices]] architectures favour JSON-RPC over [[REST API]] for internal service calls where action-oriented semantics (method names) are more natural than resource-oriented URL design.

- ### Comparison with Related Protocols
  - **vs [[REST API]]**: REST is resource-oriented (nouns in URLs, HTTP verbs as actions), stateless, and HTTP-native. JSON-RPC is action-oriented (method names), transport-agnostic, and more compact for complex multi-action interfaces. REST has better HTTP cache semantics; JSON-RPC has a tighter contract for RPC use cases.
  - **vs [[gRPC]]**: gRPC uses Protocol Buffers (binary, schema-first), requires HTTP/2, and provides streaming, strong typing, and code generation. JSON-RPC uses human-readable JSON, works over any transport, and requires no code generation — simpler but less efficient for high-throughput internal services.
  - **vs [[GraphQL]]**: GraphQL is query-oriented with a type system, introspection, and a single flexible endpoint. JSON-RPC is procedure-oriented with discrete named methods. GraphQL excels for read-heavy data APIs; JSON-RPC suits action-heavy or heterogeneous method surfaces.
  - **vs [[XML-RPC]]**: JSON-RPC's direct predecessor — same RPC semantics, XML payload instead of JSON. JSON-RPC is strictly more compact and more natural to work with in browser and Node.js environments.
  - **vs [[SOAP]]**: SOAP carries method calls in an XML envelope with WSDL-described interfaces. JSON-RPC is orders of magnitude simpler, lacks built-in WS-Security, transactions, or ACID guarantees, but is far easier to implement.
  - **vs [[Message Passing]] / async queues**: JSON-RPC is primarily synchronous request-response (with optional Notifications). It is not a message broker or queue; it does not provide delivery guarantees, routing, or fan-out semantics.

- ### Relationships
  - partOf:: [[Remote Procedure Call]]
  - partOf:: [[API Standard]]
  - hasPart:: [[Request Object]]
  - hasPart:: [[Response Object]]
  - hasPart:: [[Notification Message]]
  - hasPart:: [[Batch Request]]
  - requires:: [[JSON]]
  - requires:: [[Network Transport]]
  - enables:: [[Tool Use]]
  - enables:: [[Function Calling]]
  - enables:: [[Distributed Computing]]
  - implements:: [[Client-Server Architecture]]
  - implements:: [[Request-Response Pattern]]
  - uses:: [[WebSocket]]
  - uses:: [[HTTP]]
  - supports:: [[Language Server Protocol]]
  - supports:: [[Model Context Protocol]]
  - supports:: [[Ethereum]]
  - contrastsWith:: [[REST API]]
  - contrastsWith:: [[GraphQL]]
  - contrastsWith:: [[gRPC]]
  - contrastsWith:: [[SOAP]]
  - relatedTo:: [[Smart Contract]]
  - relatedTo:: [[Microservices]]
  - relatedTo:: [[Message Passing]]
  - relatedTo:: [[Inter-Process Communication]]
  - bridges-to:: [[Blockchain Infrastructure]]
  - bridges-to:: [[AI Infrastructure]]

- ### Standards and Context
  - **JSON-RPC 2.0 Specification**: community-maintained open standard, first published 2010, stable since 2013. Available at jsonrpc.org. No formal ISO/IETF RFC exists — the spec is a community document maintained by the JSON-RPC Working Group.
  - **JSON-RPC 1.0**: original version, positional params only, less defined error model. Effectively superseded by 2.0.
  - **JSON (RFC 8259 / ECMA-404)**: the underlying data format. JSON-RPC inherits JSON's type system (null, boolean, number, string, array, object) and encoding rules.
  - **LSP Specification**: the [[Language Server Protocol]] specification (Microsoft) defines its own JSON-RPC method schemas on top of base JSON-RPC 2.0 transport semantics.
  - **MCP Specification**: [[Model Context Protocol]] specification (Anthropic, 2024) defines its schema layer atop JSON-RPC 2.0, adding lifecycle management, capability negotiation, and tool/resource/prompt primitives.
  - **Ethereum JSON-RPC API**: the Ethereum execution-layer client API is defined in the Ethereum Improvement Proposal process (EIPs) and the Engine API specification (for post-Merge consensus-layer communication between execution and beacon clients).
  - No formal standardisation body (ISO, IETF, W3C) has published a JSON-RPC RFC. This community-standard status has not impeded adoption but does mean the spec is not versioned via the usual IETF process.

- ### Security Considerations
  - JSON-RPC carries no built-in authentication or authorisation mechanisms — these must be provided by the transport layer (HTTPS, mTLS, API keys in headers, JWT bearer tokens).
  - **Injection risks**: `method` and `params` fields must be validated server-side; unsanitised use in dynamic dispatch can enable method injection or privilege escalation.
  - **Denial of service via batch requests**: a malicious client can send very large batch arrays. Servers should enforce batch size limits.
  - **Information leakage in error objects**: detailed `error.data` fields may expose stack traces or internal state; production servers should sanitise error responses.
  - **Replay attacks**: stateless HTTP transport is vulnerable to replay unless tokens or nonces are applied at the application layer.
  - In the [[Ethereum]] context, the JSON-RPC endpoint is a high-value target — node operators should restrict `personal_` and `debug_` namespace access via firewall rules or authentication middleware.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
