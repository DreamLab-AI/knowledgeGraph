public:: true

# Push Notification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:push-notification",
  "@type": "Page",
  "vc:slug": "push-notification",
  "title": "Push Notification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:push-notification",
  "@type": "Class",
  "label": "Push Notification",
  "definition": "A push notification is a server-initiated message delivered to a client device or application without an explicit client request, enabling real-time alerts about events, state changes, or incoming communications. It relies on persistent connections or platform push services that maintain a delivery channel even when the application is backgrounded. It is a foundational primitive for presence, messaging, and event-driven user engagement.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:presence-indicator", "label": "Presence Indicator"},
      {"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A push notification is a server-initiated message delivered to clients without polling, enabling real-time alerts. It is required by [[Presence Indicator]] systems and frequently integrated with an [[Identity Provider]] to target authenticated users.
- ### Content
  - Delivery typically flows through platform services (APNs, FCM, Web Push) or persistent WebSocket/SSE channels. Key design concerns include token registration, delivery guarantees, throttling, and privacy of notification payloads, which may be encrypted end-to-end to prevent intermediaries from reading content.
