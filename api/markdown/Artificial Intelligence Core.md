public:: true

# Artificial Intelligence Core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:artificial-intelligence-core",
  "@type": "Page",
  "vc:slug": "artificial-intelligence-core",
  "title": "Artificial Intelligence Core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:artificial-intelligence-core",
  "@type": "Class",
  "label": "Artificial Intelligence Core",
  "definition": "Artificial Intelligence Core is the foundational upper class that anchors the core concepts and capabilities of artificial intelligence within the ontology, serving as the common ancestor for machine learning, agent systems, and related disciplines. It represents the essential body of theory and method by which machines perform tasks that normally require human intelligence, such as learning, reasoning, perception, and decision-making. As a structural root it organizes more specific AI subfields beneath a single semantic anchor.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Artificial Intelligence Core is a foundational anchor class for AI concepts in the ontology. It serves as a parent for subfields including [[Machine Learning Discipline]] and [[AI Agent System]], grouping the discipline's essential theory and methods.
- ### Content
  - As an upper-level structural class, it gathers the capabilities that define AI such as learning, reasoning, perception, planning, and decision-making, then refines them into specialized subclasses. Its role is organizational, providing a stable hierarchical root so that more concrete techniques and applications inherit a consistent semantic lineage.
