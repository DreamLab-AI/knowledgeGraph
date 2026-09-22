public:: true

# Creative Commons
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:creative-commons",
  "@type": "Page",
  "vc:slug": "creative-commons",
  "title": "Creative Commons",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:creative-commons",
  "@type": "Class",
  "label": "Creative Commons",
  "definition": "Creative Commons is a family of standardised public copyright licences that let creators grant defined reuse, attribution, and sharing permissions to the public. The licences (e.g. CC BY, CC BY-SA, CC0) provide machine-readable and human-readable terms that promote legal reuse of content. They are widely used to license training data, open educational resources, and open media corpora.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:training-data", "label": "Training Data"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Creative Commons is a suite of public licences that standardise the permissions creators grant for reuse and redistribution of their work. CC licences are a common legal basis for assembling [[Training Data]] corpora.
- ### Content
  - Each licence combines modular conditions—attribution, share-alike, non-commercial, no-derivatives—expressed in legal, human-readable, and machine-readable layers. The licences enable interoperable open content ecosystems, though questions of compatibility, attribution at scale, and the licensing of AI training inputs remain active concerns.
