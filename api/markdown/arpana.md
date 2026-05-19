public:: true

# arpana
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063",
  "@type": "Page",
  "vc:slug": "arpana",
  "title": "arpana",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:crime-uk",
      "vc:label": "crime uk"
    },
    {
      "@id": "urn:visionflow:linked:law",
      "vc:label": "law"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "arpana"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arpana",
  "@type": "Class",
  "label": "arpana",
  "definition": "arpana is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:arpana:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063"
  },
  "vc:resolutions": [
    {
      "raw": "[[crime uk]]",
      "resolved": "urn:visionflow:linked:crime-uk",
      "kind": "StubLink"
    },
    {
      "raw": "[[law]]",
      "resolved": "urn:visionflow:linked:law",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - arpana is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Arpana
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [[law]]
  - [[crime uk]]
  - jurisditional practice for integraating crime scene reconstruction with court proceeding

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
