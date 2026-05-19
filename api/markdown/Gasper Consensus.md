schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#GasperConsensus
legacy_uri:: urn:visionclaw:concept:blockchain:gasper-consensus
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-a71c409934bc"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#GasperConsensus"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0554"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gasper Consensus"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:gasper-consensus"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:gasper-consensus"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:gasper-consensus",
  "@type": "OntologyClass",
  "label": "Gasper Consensus",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:hybrid-consensus",
      "vc:label": "Hybrid Consensus"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "complete",
  "vc:maturity": "established",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Ethereum's PoS consensus combining Casper FFG (finality gadget) with LMD GHOST (fork choice rule). Validators directly stake ether without delegation mechanism.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
