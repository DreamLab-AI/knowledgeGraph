public:: true

# Pseudonymity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d9758e6bff1e527de849b67b8c2c8e39827d222ea5905f4e972ed613cea040a0",
  "@type": "Page",
  "vc:slug": "pseudonymity",
  "title": "Pseudonymity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ring-signature",
      "vc:label": "Ring Signature"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identifier",
      "vc:label": "Decentralized Identifier"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Pseudonymity"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pseudonymity",
  "@type": "Class",
  "label": "Pseudonymity",
  "definition": "Pseudonymity is the state of acting under a persistent identifier that is not linked to one's real-world identity. It allows consistent reputation while concealing who a participant is.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy",
      "label": "Privacy"
    }
  ],
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pseudonymity:b9fa8619d0b8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d9758e6bff1e527de849b67b8c2c8e39827d222ea5905f4e972ed613cea040a0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ring Signature]]",
      "resolved": "urn:visionflow:linked:ring-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Identifier]]",
      "resolved": "urn:visionflow:linked:decentralized-identifier",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Pseudonymity is the state of acting under a persistent identifier that is not linked to one's real-world identity. It allows consistent reputation while concealing who a participant is.

- ### Semantic Classification
  - owl-class:: identity:Pseudonymity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Privacy]]
  - bridges-to:: [[Ring Signature]], [[Decentralized Identifier]]

- ### Content
  - Pseudonymity uses a stable but non-identifying name or address so that a participant's actions can be linked together over time without revealing their legal identity. It differs from full anonymity, where actions are not even linkable to a consistent persona.
  - In blockchain systems, addresses are pseudonymous because activity is publicly linked to an identifier yet not inherently tied to a person, though analysis can sometimes deanonymise users. Cryptographic techniques such as ring signatures and zero-knowledge proofs strengthen privacy beyond basic pseudonymity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
