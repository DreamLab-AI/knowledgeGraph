```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:cognitive-architecture",
  "title": "Cognitive Architecture",
  "vc:slug": "cognitive-architecture",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cognitive-architecture",
  "@type": "Class",
  "label": "Cognitive Architecture",
  "definition": "Cognitive Architecture is the overarching computational design that specifies how a reasoning agent perceives, represents, stores, and acts upon knowledge. In AI contexts it defines the interplay between symbolic reasoning, neural learning subsystems, memory stores, and planning mechanisms that together produce intelligent behaviour. Cognitive architectures such as ACT-R, SOAR, and neural-symbolic hybrids inform the design of agentic AI systems, autonomous robots, and adaptive human-computer interfaces.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:planning-and-scheduling", "label": "Planning and Scheduling"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:symbolic-reasoning", "label": "Symbolic Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
    ]
  }
}
```

## Cognitive Architecture

Cognitive Architecture is the overarching computational design that specifies how a reasoning agent perceives, represents, stores, and acts upon knowledge. In AI contexts it defines the interplay between symbolic reasoning, neural learning subsystems, memory stores, and planning mechanisms that together produce intelligent behaviour. Cognitive architectures such as ACT-R, SOAR, and neural-symbolic hybrids inform the design of agentic AI systems, autonomous robots, and adaptive human-computer interfaces.

### Relationships
  - hasPart [[Reasoning]]
  - hasPart [[Planning and Scheduling]]
  - enables [[Agentic AI]]
  - enables [[Symbolic Reasoning]]
  - relatedTo [[Knowledge Representation]]
