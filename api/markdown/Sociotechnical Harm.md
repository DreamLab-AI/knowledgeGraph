public:: true

# Sociotechnical Harm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sociotechnical-harm",
  "@type": "Page",
  "vc:slug": "sociotechnical-harm",
  "title": "Sociotechnical Harm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sociotechnical-harm",
  "@type": "Class",
  "label": "Sociotechnical Harm",
  "definition": "Sociotechnical harm is an adverse outcome that emerges from the interaction between a technical system and its social context rather than from a technical fault alone, such as representational harm, allocative discrimination, or erosion of public discourse. These harms are often diffuse, cumulative, and unevenly distributed across affected groups, making them hard to detect with conventional accuracy metrics. Identifying them requires attention to who is affected, how, and through what social mechanisms.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bias-in-large-language-models", "label": "Bias in Large Language Models"},
      {"@id": "urn:ngm:class:sociotechnical-system", "label": "Sociotechnical System"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sociotechnical harm is an adverse effect arising from the interaction of a technical system with its social setting, including representational and allocative harms, that falls within [[AI Governance and Ethics]] concern and is not reducible to a technical defect.
- ### Content
  - Such harms tend to be diffuse, cumulative, and unequally borne, escaping detection by accuracy-focused metrics. [[Bias in Large Language Models]] is a prominent subtype, where stereotyped or skewed outputs propagate into downstream decisions; analysing these effects requires mapping the broader [[Sociotechnical System]] to identify who is harmed and through which social mechanisms.
