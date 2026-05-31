public:: true

# AI Group Formation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-group-formation",
  "@type": "Page",
  "vc:slug": "ai-group-formation",
  "title": "AI Group Formation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-group-formation",
  "@type": "Class",
  "label": "AI Group Formation",
  "definition": "AI Group Formation is the automated assignment of participants into subgroups using models that optimize for criteria such as skill balance, topic affinity, social diversity, or learning objectives. In collaborative and meeting platforms it drives features like intelligent breakout-room allocation, replacing manual or random grouping. The technique combines clustering, optimization, and sometimes reinforcement learning over participant attributes and interaction signals.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:breakout-room", "label": "Breakout Room"},
      {"@id": "urn:ngm:class:educational-technology", "label": "Educational Technology"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - AI Group Formation automatically partitions participants into effective subgroups. It powers [[Breakout Room]] allocation in collaboration tools and is widely used in [[Educational Technology]] to balance teams.
- ### Content
  - The system encodes each participant as a feature vector covering skills, interests, prior interactions, and constraints, then solves a constrained clustering or assignment problem against an objective such as balanced expertise or maximal diversity. Quality depends on the richness of participant signals and on tunable objectives that match the facilitator's pedagogical or collaborative goals.
