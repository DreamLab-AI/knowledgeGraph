public:: true

# Temporal Entity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:temporal-entity",
  "@type": "Page",
  "vc:slug": "temporal-entity",
  "title": "Temporal Entity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:temporal-entity",
  "@type": "Class",
  "label": "Temporal Entity",
  "definition": "A temporal entity is an ontological category for anything that exists in or is defined by time, such as an instant, an interval, an event, or a process. In knowledge representation it serves as a shared superclass that anchors time-bearing concepts so they can be related by ordering, duration, and containment. The notion follows established time ontologies like the W3C OWL-Time vocabulary.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:entity", "label": "Entity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:process", "label": "Process"},
      {"@id": "urn:ngm:class:event", "label": "Event"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A temporal entity is anything situated in or defined by time, serving as the ontological superclass for time-bearing concepts such as [[Process]] and [[Event]].
- ### Content
  - In a formal ontology, temporal entities divide broadly into temporal instants, which mark points on a timeline, and temporal intervals, which have duration and can contain or precede one another. Treating events and processes as subclasses of temporal entity lets a reasoner apply uniform ordering, overlap, and duration relations across the model. The pattern mirrors the W3C OWL-Time ontology, which formalises Allen interval relations and links temporal positions to calendar and clock values.
