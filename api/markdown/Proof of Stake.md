schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#ProofOfStake
legacy_uri:: urn:visionclaw:concept:blockchain:proof-of-stake
public:: true

# Proof of Stake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007",
  "@type": "Page",
  "vc:slug": "proof-of-stake",
  "title": "Proof of Stake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-based-consensus",
      "vc:label": "Proof-Based Consensus"
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
      "vc:value": "sha256-12-db214c5a19be"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#ProofOfStake"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0546"
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
      "vc:value": "Proof of Stake"
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
      "vc:value": "urn:visionclaw:concept:blockchain:proof-of-stake"
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
      "vc:value": "urn:visionclaw:concept:blockchain:proof-of-stake"
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
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:proof-of-stake",
  "@type": "OntologyClass",
  "label": "Proof of Stake",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:proof-based-consensus",
      "vc:label": "Proof-Based Consensus"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "complete",
  "vc:maturity": "established",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:proof-of-stake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof-Based Consensus]]",
      "resolved": "urn:visionflow:owl:class:proof-based-consensus",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking.

- ### Semantic Classification
  - owl-class:: blockchain:ProofOfStake
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Proof-Based Consensus]]

- ### Content
  Proof of Stake — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
