public:: true

# Fraud Proof
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fa20ffa366794235d20db4bb31437191085e689d5327581be1c98e74e9da3a80",
  "@type": "Page",
  "vc:slug": "fraud-proof",
  "title": "Fraud Proof",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-availability",
      "vc:label": "Data Availability"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Fraud Proof"
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
  "@id": "urn:ngm:class:fraud-proof",
  "@type": "Class",
  "label": "Fraud Proof",
  "definition": "A succinct piece of evidence demonstrating that a proposed off-chain state transition was invalid, used by optimistic rollups to challenge incorrect results.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-2-networks",
      "label": "Layer 2 Networks"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fraud-proof:cc00536d0ad6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fa20ffa366794235d20db4bb31437191085e689d5327581be1c98e74e9da3a80"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Availability]]",
      "resolved": "urn:visionflow:linked:data-availability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
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
  - A succinct piece of evidence demonstrating that a proposed off-chain state transition was invalid, used by optimistic rollups to challenge incorrect results.

- ### Semantic Classification
  - owl-class:: blockchain:FraudProof
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Data Availability]]
  - enables:: [[Scalability]]

- ### Content
  - A fraud proof allows any observer to show that a published state transition does not follow the protocol rules. If the proof is accepted on the base chain, the invalid state is rejected and the dishonest party is penalised.
  - This mechanism underpins optimistic rollups, which assume posted results are correct unless challenged within a dispute window. It depends on transaction data being available so challengers can reconstruct and re-check the disputed step.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
