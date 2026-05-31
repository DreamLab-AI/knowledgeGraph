public:: true

# Technical Expertise
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:technical-expertise",
  "@type": "Page",
  "vc:slug": "technical-expertise",
  "title": "Technical Expertise",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:technical-expertise",
  "@type": "Class",
  "label": "Technical Expertise",
  "definition": "Technical expertise is the specialised knowledge, skill, and practical judgement required to design, build, or operate within a complex technical domain. It is a prerequisite and a gating factor for advanced work, and its scarcity can both enable progress and act as a barrier to misuse. The level and distribution of expertise materially affects how quickly capabilities such as AI development or biotechnology proliferate.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-development", "label": "AI Development"},
      {"@id": "urn:ngm:class:bio-terror", "label": "Bio-Terror"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Technical expertise is the specialised knowledge and skill needed to operate in a complex domain, acting as both an enabler of [[AI Development]] and a barrier that limits who can misuse high-consequence capabilities such as those underlying [[Bio-Terror]].
- ### Content
  - Expertise combines formal knowledge, tacit skill acquired through practice, and access to tooling and infrastructure, which together determine who can realistically execute advanced technical work. In risk analysis, the expertise barrier is a key control: lowering it through automation or accessible tools can accelerate beneficial innovation while simultaneously broadening the population capable of causing harm. Policy debates around dual-use research therefore focus heavily on how expertise is distributed and whether AI tools meaningfully reduce required skill thresholds.
