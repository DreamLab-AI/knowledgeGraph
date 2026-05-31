public:: true

# Stdio Transport
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stdio-transport",
  "@type": "Page",
  "vc:slug": "stdio-transport",
  "title": "Stdio Transport",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stdio-transport",
  "@type": "Class",
  "label": "Stdio Transport",
  "definition": "Stdio transport is a communication mechanism in which a client and server exchange messages over the standard input and standard output streams of a locally spawned process. It is one of the primary transports defined by the Model Context Protocol, where the host launches the server as a subprocess and frames JSON-RPC messages through stdin/stdout. It suits local, single-machine integrations because it requires no network sockets and inherits the operating system's process isolation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:model-control-protocols-like-mcp", "label": "Model Control Protocols Like MCP"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Stdio transport carries [[Model Context Protocol]] messages over a child process's standard input and output streams, framing JSON-RPC requests without any network layer.
- ### Content
  - The host application spawns the server executable and writes newline-delimited or length-prefixed JSON-RPC payloads to its stdin while reading responses from stdout, reserving stderr for logging. Because both endpoints run on the same machine under the same user, stdio transport avoids the authentication and TLS overhead of remote transports, making it the default choice for local tools and editor integrations. Its main limitations are that it cannot span hosts and that one process pair is bound for the session lifetime.
