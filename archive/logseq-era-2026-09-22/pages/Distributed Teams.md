public:: true

# Distributed Teams
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:distributed-teams",
  "@type": "Page",
  "vc:slug": "distributed-teams",
  "title": "Distributed Teams",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-teams",
  "@type": "Class",
  "label": "Distributed Teams",
  "definition": "Distributed teams are groups of collaborators who work from different geographic locations and often across time zones, coordinating primarily through digital communication and collaboration tools. They rely on asynchronous workflows, shared documentation, and recorded or AI-assisted meetings to maintain alignment without co-location. They have become a dominant model of knowledge work, trading the spontaneity of the office for flexibility and access to a global talent pool.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:asynchronous-video", "label": "Asynchronous Video"},
      {"@id": "urn:ngm:class:meeting-ai-assistant", "label": "Meeting AI Assistant"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Distributed teams collaborate across locations and time zones via digital tools and asynchronous workflows. They are supported by [[Asynchronous Video]] for time-shifted updates and by a [[Meeting AI Assistant]] for capture and summarisation.
- ### Content
  - Effective distributed teams emphasise written communication, clear ownership, and overlap windows, augmented by tools for video, chat, and shared docs. Trade-offs include reduced informal contact and time-zone friction, offset by flexibility, broader hiring, and durable, searchable records of decisions.
