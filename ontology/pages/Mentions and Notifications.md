public:: true

# Mentions and Notifications
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-mentions-and-notifications",
  "@type": "Page",
  "vc:slug": "mentions-and-notifications",
  "title": "Mentions and Notifications",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mentions-and-notifications",
  "@type": "Class",
  "label": "Mentions and Notifications",
  "definition": "Mentions and notifications are mechanisms that direct a participant's attention to specific messages, tasks, or events by referencing their identity with an @-symbol or equivalent trigger. They bridge asynchronous communication gaps by alerting individuals even when they are not actively monitoring a channel. Effective notification design balances urgency with focus protection to avoid alert fatigue in distributed teams.",
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
        "@id": "urn:ngm:class:attention",
        "label": "Attention Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:group-chat-channel",
        "label": "Group Chat Channel"
      },
      {
        "@id": "urn:ngm:class:instant-messaging",
        "label": "Instant Messaging"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Attention-directing mechanisms using @-references and push alerts that ensure relevant participants are notified of messages or events requiring their awareness.
