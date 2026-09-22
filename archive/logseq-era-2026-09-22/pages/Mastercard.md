public:: true

# Mastercard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:04f5fcbe4a2a8e3a90ebdda247391cd50a1df62af26c03cc23c57cb4ce0b7d03",
  "@type": "Page",
  "vc:slug": "mastercard",
  "title": "Mastercard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mastercard"
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
  "@id": "urn:ngm:class:mastercard",
  "@type": "Class",
  "label": "Mastercard",
  "definition": "Mastercard is a global payments technology company operating a card network that authorises, clears and settles transactions between issuing and acquiring banks.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-network",
      "label": "Payment Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mastercard:07863e7a6a21",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:04f5fcbe4a2a8e3a90ebdda247391cd50a1df62af26c03cc23c57cb4ce0b7d03"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - Mastercard is a global payments technology company operating a card network that authorises, clears and settles transactions between issuing and acquiring banks.

- ### Semantic Classification
  - owl-class:: metaverse:Mastercard
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Payment Network]]
  - bridges-to:: [[Central Bank Digital Currency]], [[Stablecoin]]
  - requires:: [[Payment Network]]
  - enables:: [[Cross-Border Payments]]

- ### Content
  - Mastercard runs a four-party scheme connecting cardholders, merchants, acquiring banks and issuing banks, routing authorisation and settlement messages across the network. It defines technical and operational rules that participants follow.
  - The company has piloted work around tokenisation, central bank digital currency interoperability and stablecoin settlement, positioning its rails alongside emerging digital money. This connects it to cross-border payment modernisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
