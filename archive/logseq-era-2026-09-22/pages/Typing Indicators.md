public:: true

# Typing Indicators
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-typing-indicators",
  "@type": "Page",
  "vc:slug": "typing-indicators",
  "title": "Typing Indicators",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:typing-indicators",
  "@type": "Class",
  "label": "Typing Indicators",
  "definition": "Typing indicators are real-time signals that inform participants when another user is actively composing a message in a shared conversation thread. They create a sense of conversational presence and reduce the likelihood of duplicate or crossed messages in synchronous exchanges. As a social cue, they contribute to turn-taking norms similar to those in face-to-face dialogue.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:presence",
        "label": "Conversational Presence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:instant-messaging",
        "label": "Instant Messaging"
      },
      {
        "@id": "urn:ngm:class:read-receipts",
        "label": "Read Receipts"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Real-time signals indicating that a participant is actively composing a message, conveying conversational presence and facilitating natural turn-taking in distributed chat environments.
