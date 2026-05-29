public:: true

# Financial Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bf4ff537182ecf513d68f4fd852ae74b288ea58e32a2d78af50189b37cbc02b7",
  "@type": "Page",
  "vc:slug": "financial-infrastructure",
  "title": "Financial Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9611"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Financial Infrastructure"
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
  "@id": "urn:ngm:class:financial-infrastructure",
  "@type": "Class",
  "label": "Financial Infrastructure",
  "definition": "Financial Infrastructure comprises the foundational systems, networks, and institutions that enable the creation, exchange, and settlement of financial value. It includes payment clearing networks, custody systems, blockchain settlement layers, lightning-speed payment channels, and the regulatory reporting frameworks that underpin both traditional and decentralised financial ecosystems.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    },
    {
      "@id": "urn:ngm:class:economic-layer",
      "label": "Economic Layer"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:financial-services", "label": "Financial Services"},
      {"@id": "urn:ngm:class:financial-instruments", "label": "Financial Instruments"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:economic-layer", "label": "Economic Layer"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-infrastructure:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bf4ff537182ecf513d68f4fd852ae74b288ea58e32a2d78af50189b37cbc02b7"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
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
  - Financial Infrastructure comprises the foundational systems, networks, and institutions that enable the creation, exchange, and settlement of financial value. It includes payment clearing networks, custody systems, blockchain settlement layers, lightning-speed payment channels, and the regulatory reporting frameworks that underpin both traditional and decentralised financial ecosystems.

- ### Semantic Classification
  - owl-class:: infrastructure:FinancialInfrastructure
  - owl-role:: concept

- ### Relationships
  - supports [[Financial Services]]
  - supports [[Financial Instruments]]
  - requires [[Blockchain Infrastructure]]
  - relatedTo [[Lightning Network]]
  - relatedTo [[Economic Layer]]

- ### Content

  ## Overview

  Financial Infrastructure represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
