public:: true

# Gasper Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7",
  "@type": "Page",
  "vc:slug": "gasper-consensus",
  "title": "Gasper Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:hybrid-consensus",
      "vc:label": "Hybrid Consensus"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0554"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gasper Consensus"
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
  "@id": "urn:ngm:class:gasper-consensus",
  "@type": "Class",
  "label": "Gasper Consensus",
  "definition": "ereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake er without delegation mechanism.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:hybrid-consensus",
      "label": "Hybrid Consensus"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gasper-consensus:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hybrid Consensus]]",
      "resolved": "urn:visionflow:owl:class:hybrid-consensus",
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
  - Ethereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake ether without delegation mechanism.

- ### Semantic Classification
  - owl-class:: blockchain:GasperConsensus
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Hybrid Consensus]]

- ### Content
  Gasper Consensus — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
