schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#TrustedExecutionPBFT
legacy_uri:: urn:visionclaw:concept:blockchain:trusted-execution-pbft
public:: true

# Trusted Execution PBFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a168d7ce2877fd6c2dcd928652f93fea2cf73dd6e802947a48bdfa1094dbf31",
  "@type": "Page",
  "vc:slug": "trusted-execution-pbft",
  "title": "Trusted Execution PBFT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "vc:label": "Practical Byzantine Fault Tolerance"
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
      "vc:value": "sha256-12-7f4b5c63d70b"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#TrustedExecutionPBFT"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0561"
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
      "vc:value": "Trusted Execution PBFT"
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
      "vc:value": "urn:visionclaw:concept:blockchain:trusted-execution-pbft"
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
      "vc:value": "urn:visionclaw:concept:blockchain:trusted-execution-pbft"
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
    "@id": "urn:visionflow:page:1a168d7ce2877fd6c2dcd928652f93fea2cf73dd6e802947a48bdfa1094dbf31@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:trusted-execution-pbft",
  "@type": "Class",
  "label": "Trusted Execution PBFT",
  "definition": "A parallel Byzantine Fault Tolerance protocol leveraging Trusted Execution Environments (TEEs), utilizing a Unique Sequential Identifier Generator (USIG) based on Intel Software Guard Extensions (SGX).",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
      "label": "Practical Byzantine Fault Tolerance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:trusted-execution-pbft:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a168d7ce2877fd6c2dcd928652f93fea2cf73dd6e802947a48bdfa1094dbf31"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Practical Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:1a168d7ce2877fd6c2dcd928652f93fea2cf73dd6e802947a48bdfa1094dbf31@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A parallel Byzantine Fault Tolerance protocol leveraging Trusted Execution Environments (TEEs), utilizing a Unique Sequential Identifier Generator (USIG) based on Intel Software Guard Extensions (SGX).

- ### Semantic Classification
  - owl-class:: blockchain:TrustedExecutionPBFT
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Practical Byzantine Fault Tolerance]]

- ### Content
  Trusted Execution PBFT — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
