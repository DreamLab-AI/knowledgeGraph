public:: true

# BIP-341 Taproot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b60948e206197d5e503e27e52b2672865f2224dbb9b3624bbea3958de25e14c1",
  "@type": "Page",
  "vc:slug": "bip-341-taproot",
  "title": "BIP-341 Taproot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BIP-341 Taproot"
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
  "@id": "urn:ngm:class:bip-341-taproot",
  "@type": "Class",
  "label": "BIP-341 Taproot",
  "definition": "A Bitcoin Improvement Proposal defining Taproot, an upgrade introducing a new output type using Schnorr signatures and Merkle-branch script commitments. It improves privacy and flexibility of Bitcoin transactions.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bip-341-taproot:18b0987e77dd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b60948e206197d5e503e27e52b2672865f2224dbb9b3624bbea3958de25e14c1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A Bitcoin Improvement Proposal defining Taproot, an upgrade introducing a new output type using Schnorr signatures and Merkle-branch script commitments. It improves privacy and flexibility of Bitcoin transactions.

- ### Semantic Classification
  - owl-class:: standards:BIP341Taproot
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - A Bitcoin Improvement Proposal defining Taproot, an upgrade introducing a new output type using Schnorr signatures and Merkle-branch script commitments. It improves privacy and flexibility of Bitcoin transactions.
  - Topic area: Bitcoin Taproot.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
