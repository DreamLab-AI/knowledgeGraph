public:: true

# Server Push

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:server-push",
  "@type": "Page",
  "title": "Server Push",
  "vc:slug": "server-push",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:server-push",
  "@type": "Class",
  "label": "Server Push",
  "definition": "Server push is an HTTP/2 mechanism that allows a server to proactively send resources to a client before the client explicitly requests them, anticipating what a page will need next. It reduces round-trip latency by eliminating the request phase for predictable secondary resources such as stylesheets or scripts. The related technique of Server-Sent Events uses a similar unidirectional push model over a persistent connection to stream updates to a client.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:http2",
      "label": "Http2"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Server push is an HTTP/2 mechanism that allows a server to proactively send resources to a client before the client explicitly requests them, anticipating what a page will need next. It reduces round-trip latency by eliminating the request phase for predictable secondary resources such as stylesheets or scripts. The related technique of Server-Sent Events uses a similar unidirectional push model over a persistent connection to stream updates to a client.
- ### Relationships
	- subClassOf:: [[Http2]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
