public:: true

# Settlement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c8e21698f4fcf6ca2e243b4ca512a65c4409cc99ff64abed0e192028ac7ee212",
  "@type": "Page",
  "vc:slug": "settlement",
  "title": "Settlement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:atomic-settlement",
      "vc:label": "Atomic Settlement"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-settlement",
      "vc:label": "Cross-Border Settlement"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure-domain",
      "vc:label": "Financial Infrastructure Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Settlement"
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
  "@id": "urn:ngm:class:settlement",
  "@type": "Class",
  "label": "Settlement",
  "definition": "The final and irreversible transfer of an asset from one party to another that discharges the obligation arising from a trade or payment.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure-domain",
      "label": "Financial Infrastructure Domain"
    }
  ],
  "relations": {
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:settlement:a75c433ab2ae",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c8e21698f4fcf6ca2e243b4ca512a65c4409cc99ff64abed0e192028ac7ee212"
  },
  "vc:resolutions": [
    {
      "raw": "[[Atomic Settlement]]",
      "resolved": "urn:visionflow:linked:atomic-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Settlement]]",
      "resolved": "urn:visionflow:linked:cross-border-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure-domain",
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
  - The final and irreversible transfer of an asset from one party to another that discharges the obligation arising from a trade or payment.

- ### Semantic Classification
  - owl-class:: blockchain:Settlement
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Infrastructure Domain]]
  - bridges-to:: [[Payment System]], [[Cross-Border Settlement]]
  - enables:: [[Atomic Settlement]]

- ### Content
  - Settlement is the step at which ownership of an asset passes definitively to the recipient and the underlying obligation is extinguished. In traditional systems it may follow trade execution after a delay during which counterparty and operational risk persists.
  - On public ledgers settlement occurs when a transaction is included and confirmed, and finality is reached according to the consensus rules of the chain. This allows delivery and payment to be linked atomically, so that both legs of an exchange either complete together or not at all, reducing the settlement risk present in delayed systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
