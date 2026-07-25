public:: true

# Contestability
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:contestability",
  "@type": "Page",
  "title": "Contestability",
  "vc:slug": "contestability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:contestability",
  "@type": "Class",
  "label": "Contestability",
  "definition": "Contestability is the property of a system or decision-making process that allows an affected party to challenge, question or seek review of an automated decision. It requires that the basis of a decision be sufficiently transparent to be examined, and that a mechanism exists for raising and resolving disputes. Contestability is a design and governance goal in AI accountability frameworks, complementing explainability and transparency by ensuring outcomes are not merely explained but also revisable.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:accountability",
      "label": "Accountability"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Contestability is the property of a system or decision-making process that allows an affected party to challenge, question or seek review of an automated decision.
  - It is a subclass of [[Accountability]].
- ### Content
  - Contestability is the property of a system or decision-making process that allows an affected party to challenge, question or seek review of an automated decision. It requires that the basis of a decision be sufficiently transparent to be examined, and that a mechanism exists for raising and resolving disputes. Contestability is a design and governance goal in AI accountability frameworks, complementing explainability and transparency by ensuring outcomes are not merely explained but also revisable.
