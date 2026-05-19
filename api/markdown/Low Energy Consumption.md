public:: true

# Low Energy Consumption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:37be8ac994f26f057f693f2f32327408af55c3e690f7f8c95716ad4a15888244",
  "@type": "Page",
  "vc:slug": "low-energy-consumption",
  "title": "Low Energy Consumption",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0564"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Low Energy Consumption"
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
  "@id": "urn:ngm:class:low-energy-consumption",
  "@type": "Class",
  "label": "Low Energy Consumption",
  "definition": "Energy consumption level characteristic of PoS and BFT mechanisms requiring minimal computational resources (less than PoW).",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    },
    {
      "@id": "urn:ngm:class:blockchain-energy-consumption",
      "label": "Blockchain Energy Consumption"
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
  "@id": "urn:visionflow:annotation:link-resolutions:low-energy-consumption:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:37be8ac994f26f057f693f2f32327408af55c3e690f7f8c95716ad4a15888244"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Energy consumption level characteristic of PoS and BFT mechanisms requiring minimal computational resources (99% less than PoW).

- ### Semantic Classification
  - owl-class:: blockchain:LowEnergyConsumption
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Low Energy Consumption — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
