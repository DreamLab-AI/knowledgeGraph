public:: true

# JSON-RPC 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:json-rpc-2-0",
  "@type": "Page",
  "vc:slug": "json-rpc-2-0",
  "title": "JSON-RPC 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-rpc-2-0",
  "@type": "Class",
  "label": "JSON-RPC 2.0",
  "definition": "JSON-RPC 2.0 is a lightweight, transport-agnostic remote procedure call protocol that encodes method invocations and responses as JSON objects. It defines request, response, notification and batch message structures along with a standard error object, while leaving the transport layer unspecified. Its simplicity has made it the wire format for many blockchain node APIs and AI tool-invocation protocols.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - JSON-RPC 2.0 is the lightweight RPC encoding that the [[Model Context Protocol]] builds upon, and which underpins the request/response framing used by AI [[Function Calling]] integrations.
- ### Content
  - A request specifies a method name, structured parameters and an id; the server returns a result or a typed error keyed to that id, with notifications omitting the id for fire-and-forget calls. Because it is transport-neutral, JSON-RPC runs over HTTP, WebSockets or stdio, which is why it was adopted as the message layer for tooling and node interfaces alike.
