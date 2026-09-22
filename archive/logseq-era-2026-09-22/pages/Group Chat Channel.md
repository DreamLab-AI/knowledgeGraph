public:: true

# Group Chat Channel
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-group-chat-channel",
  "@type": "Page",
  "vc:slug": "group-chat-channel",
  "title": "Group Chat Channel",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:group-chat-channel",
  "@type": "Class",
  "label": "Group Chat Channel",
  "definition": "A group chat channel is a persistent, named messaging space where multiple participants can send and receive messages collectively. Channels are typically organised by topic, project, or team, providing a shared context for ongoing conversation and record-keeping. They support both synchronous and asynchronous communication patterns within distributed organisations.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:instant-messaging",
        "label": "Instant Messaging"
      },
      {
        "@id": "urn:ngm:class:mentions-and-notifications",
        "label": "Mentions and Notifications"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A persistent, topic-scoped messaging space shared by multiple participants that supports both synchronous and asynchronous team communication.
