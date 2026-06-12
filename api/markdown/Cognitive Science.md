```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:cognitive-science",
  "title": "Cognitive Science",
  "vc:slug": "cognitive-science",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cognitive-science",
  "@type": "Class",
  "label": "Cognitive Science",
  "definition": "Cognitive Science is an interdisciplinary field studying the nature of mind, intelligence, and cognition, encompassing perception, memory, language, reasoning, and decision-making through contributions from psychology, neuroscience, linguistics, philosophy, and artificial intelligence. Its models of human cognition directly inform the design of AI systems, user interfaces, and human-computer interaction paradigms.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:cognitive-ai", "label": "Cognitive AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-architecture", "label": "Cognitive Architecture"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}
    ]
  }
}
```

## Cognitive Science

Cognitive Science is an interdisciplinary field studying the nature of mind, intelligence, and cognition through contributions from psychology, neuroscience, linguistics, philosophy, and artificial intelligence. Its computational models of perception, memory, and reasoning directly inform the design of AI systems, user interfaces, and human-computer interaction paradigms.

### Relationships

- **enables** [[Human Computer Interaction]] — cognitive models underpin HCI design principles
- **enables** [[Cognitive AI]] — cognitive science provides the theoretical basis for cognitive architectures in AI
- **relatedTo** [[Cognitive Architecture]] — formalised cognitive science theories instantiated as computational architectures
- **relatedTo** [[Artificial Intelligence]] — AI draws on and contributes back to cognitive science
- **supports** [[Machine Learning Discipline]] — cognitive learning theories inform ML algorithm design
