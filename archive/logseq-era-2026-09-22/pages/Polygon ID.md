public:: true

# Polygon ID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:95e531c91beb94f14ef7c49acf52a00a5af93887d919270c1c99eb827e32c1dd",
  "@type": "Page",
  "vc:slug": "polygon-id",
  "title": "Polygon ID",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:polygon",
      "vc:label": "Polygon"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identity",
      "vc:label": "Decentralized Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Polygon ID"
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
  "@id": "urn:ngm:class:polygon-id",
  "@type": "Class",
  "label": "Polygon ID",
  "definition": "A decentralised identity framework that uses zero-knowledge proofs to let users present verifiable credentials without revealing the underlying data.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identity",
      "label": "Decentralized Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:polygon-id:c90beb03b435",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:95e531c91beb94f14ef7c49acf52a00a5af93887d919270c1c99eb827e32c1dd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Polygon]]",
      "resolved": "urn:visionflow:linked:polygon",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Identity]]",
      "resolved": "urn:visionflow:linked:decentralized-identity",
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
  - A decentralised identity framework that uses zero-knowledge proofs to let users present verifiable credentials without revealing the underlying data.

- ### Semantic Classification
  - owl-class:: blockchain:PolygonID
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identity]]
  - bridges-to:: [[Polygon]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Identity Management]]

- ### Content
  - Polygon ID issues credentials that holders store and control, and lets them prove statements about those credentials using zero-knowledge proofs. A verifier can confirm a claim, such as being over a certain age, without seeing the full attribute.
  - The framework follows self-sovereign identity principles, keeping credential data with the user rather than a central database. On-chain components handle the registration and revocation needed to check that proofs remain valid.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
