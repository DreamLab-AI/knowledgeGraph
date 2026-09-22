public:: true

# Project mBridge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d464eb8b27ca8ce76d1a84b6aa526eb140bb637262303a0da445a2ae77e961ec",
  "@type": "Page",
  "vc:slug": "project-m-bridge",
  "title": "Project mBridge",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:wholesale-cbdc",
      "vc:label": "Wholesale CBDC"
    },
    {
      "@id": "urn:visionflow:linked:atomic-settlement",
      "vc:label": "Atomic Settlement"
    },
    {
      "@id": "urn:visionflow:linked:bis",
      "vc:label": "BIS"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-settlement",
      "vc:label": "Cross-Border Settlement"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Project mBridge"
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
  "@id": "urn:ngm:class:project-m-bridge",
  "@type": "Class",
  "label": "Project mBridge",
  "definition": "A multi-central-bank initiative testing a shared distributed ledger platform for cross-border payments settled in central bank digital currencies.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-border-settlement",
      "label": "Cross-Border Settlement"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:wholesale-cbdc",
        "label": "Wholesale CBDC"
      },
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:project-m-bridge:451adef6cec8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d464eb8b27ca8ce76d1a84b6aa526eb140bb637262303a0da445a2ae77e961ec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Wholesale CBDC]]",
      "resolved": "urn:visionflow:linked:wholesale-cbdc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Atomic Settlement]]",
      "resolved": "urn:visionflow:linked:atomic-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BIS]]",
      "resolved": "urn:visionflow:linked:bis",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Settlement]]",
      "resolved": "urn:visionflow:linked:cross-border-settlement",
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
  - A multi-central-bank initiative testing a shared distributed ledger platform for cross-border payments settled in central bank digital currencies.

- ### Semantic Classification
  - owl-class:: blockchain:ProjectmBridge
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cross-Border Settlement]]
  - bridges-to:: [[BIS]], [[Cross-Border Payments]]
  - requires:: [[Wholesale CBDC]], [[Atomic Settlement]]

- ### Content
  - Project mBridge is a collaborative effort among several central banks to build a shared platform on which wholesale central bank digital currencies can be issued and exchanged for cross-border settlement. Participating institutions connect to a common ledger that records transfers between jurisdictions.
  - The design seeks to reduce the cost and delay of correspondent banking by allowing payment-versus-payment settlement directly between participants. The work has been carried out with support from the Bank for International Settlements innovation programme and addresses governance, legal, and operational questions raised by multi-currency settlement on a shared ledger.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
