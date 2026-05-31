public:: true

# Webhook
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:webhook",
  "@type": "Page",
  "vc:slug": "webhook",
  "title": "Webhook",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:webhook",
  "@type": "Class",
  "label": "Webhook",
  "definition": "A webhook is an event-driven integration mechanism in which a server sends an HTTP request to a pre-registered URL when a specified event occurs, pushing data to consumers instead of requiring them to poll. It enables loosely coupled, near-real-time communication between web services and is a standard pattern for notifications, CI triggers, and payment events. Reliability concerns are addressed through retries, idempotency keys, and signature verification.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communications"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"}, {"@id": "urn:ngm:class:presence-indicator", "label": "Presence Indicator"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A webhook delivers event notifications via outbound HTTP callbacks, a push-based integration pattern often fronted by an [[API Gateway]] and used to drive real-time features such as a [[Presence Indicator]].
- ### Content
  - The provider registers a consumer endpoint and POSTs a payload on each event; robust implementations sign payloads (e.g. HMAC), retry with exponential backoff on failure, and expect consumers to respond quickly and deduplicate by event ID. Webhooks trade the simplicity of polling for lower latency and load, at the cost of requiring publicly reachable, secured receiver endpoints.
