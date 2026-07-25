public:: true

# Message Reactions
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-message-reactions",
  "@type": "Page",
  "vc:slug": "message-reactions",
  "title": "Message Reactions",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:message-reactions",
  "@type": "Class",
  "label": "Message Reactions",
  "definition": "Message reactions are lightweight emoji or icon-based acknowledgements that participants attach to individual messages without composing a reply. They convey sentiment, agreement, or status in a low-friction manner that reduces notification noise. In distributed teams, reactions serve as asynchronous micro-feedback signals that keep conversation threads concise.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:instant-messaging", "label": "Instant Messaging"},
      {"@id": "urn:ngm:class:read-receipts", "label": "Read Receipts"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Lightweight emoji-based acknowledgements attached to individual messages that provide low-friction, asynchronous feedback without generating additional message threads.
