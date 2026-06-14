public:: true

# Read Receipts
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-read-receipts",
  "@type": "Page",
  "vc:slug": "read-receipts",
  "title": "Read Receipts",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:read-receipts",
  "@type": "Class",
  "label": "Read Receipts",
  "definition": "Read receipts are delivery-confirmation signals that indicate whether a message has been seen by its recipient, typically displayed as a checkmark, avatar, or timestamp. They provide senders with visibility into message consumption, reducing uncertainty in asynchronous communication. Their use in distributed collaboration can improve follow-up timing but must be balanced against recipient privacy expectations.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:message-accountability", "label": "Message Accountability"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:instant-messaging", "label": "Instant Messaging"},
      {"@id": "urn:ngm:class:typing-indicators", "label": "Typing Indicators"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Delivery-confirmation signals indicating that a message has been viewed by its recipient, reducing sender uncertainty and supporting timely follow-up in asynchronous distributed communication.
