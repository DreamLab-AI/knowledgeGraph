public:: true

# Omnichannel Routing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:omnichannel-routing",
  "@type": "Page",
  "vc:slug": "omnichannel-routing",
  "title": "Omnichannel Routing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:omnichannel-routing",
  "@type": "Class",
  "label": "Omnichannel Routing",
  "definition": "Omnichannel routing is the contact-centre capability that directs customer interactions arriving across multiple channels, such as voice, chat, email, and social, to the most appropriate agent or automated handler using a unified queue and context. It maintains a single view of each customer's history so conversations can move between channels without loss of context. It is central to consistent, efficient customer service operations.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:omnichannel", "label": "Omnichannel"},
      {"@id": "urn:ngm:class:call-centres", "label": "Call Centres"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Omnichannel routing directs interactions from many channels into a unified, context-aware queue and to the right handler. It is part of an [[Omnichannel]] strategy and is implemented in modern [[Call Centres]].
- ### Content
  - Routing engines apply skills-based, priority, and predictive rules, increasingly augmented by AI that classifies intent and forecasts queue load to balance service levels. By preserving a shared customer context across channels, it avoids repetition and enables seamless escalation from a bot to a human while maintaining conversation history.
