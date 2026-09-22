public:: true

# Instant Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-instant-messaging",
  "@type": "Page",
  "vc:slug": "instant-messaging",
  "title": "Instant Messaging",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:instant-messaging",
  "@type": "Class",
  "label": "Instant Messaging",
  "definition": "Instant messaging is a form of real-time, text-based direct communication between two or more participants over a network. Messages are delivered with minimal latency, enabling synchronous or near-synchronous conversation without the formality of email. It serves as a foundational channel for informal coordination and rapid decision-making in distributed teams.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:group-chat-channel", "label": "Group Chat Channel"},
      {"@id": "urn:ngm:class:mentions-and-notifications", "label": "Mentions and Notifications"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A real-time, low-latency text communication channel enabling direct person-to-person or small-group messaging for rapid coordination in distributed teams.
