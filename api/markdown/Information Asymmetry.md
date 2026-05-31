public:: true

# Information Asymmetry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:information-asymmetry",
  "@type": "Page",
  "vc:slug": "information-asymmetry",
  "title": "Information Asymmetry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-asymmetry",
  "@type": "Class",
  "label": "Information Asymmetry",
  "definition": "Information asymmetry is a condition in which one party to a transaction or interaction possesses more or better information than another, distorting decisions and market outcomes. It gives rise to adverse selection and moral hazard, and motivates institutions such as signalling, screening, disclosure rules, and reputation systems. It is a foundational concept in microeconomics and is increasingly relevant to AI systems whose training data and outputs can encode hidden biases.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:economics", "label": "Economics"},
      {"@id": "urn:ngm:class:bias-in-large-language-models", "label": "Bias in Large Language Models"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Information asymmetry describes unequal access to relevant information between parties, a core problem in [[Economics]] that produces adverse selection and moral hazard. Analogous opacity in model behaviour relates to [[Bias in Large Language Models]].
- ### Content
  - Markets address asymmetry through warranties, certification, disclosure mandates, and intermediaries that aggregate information. In AI, the inability to inspect what a model has learned creates a comparable gap between developers, deployers, and users.
