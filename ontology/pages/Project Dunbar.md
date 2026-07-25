public:: true

# Project Dunbar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c76f52af94288dab849f91dc03a05f0ce705920e053e7e6559368e62609cf97a",
  "@type": "Page",
  "vc:slug": "project-dunbar",
  "title": "Project Dunbar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
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
      "vc:value": "Project Dunbar"
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
  "@id": "urn:ngm:class:project-dunbar",
  "@type": "Class",
  "label": "Project Dunbar",
  "definition": "Project Dunbar was a multi-central-bank experiment exploring a shared platform for multiple central bank digital currencies to settle cross-border transactions directly.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank-digital-currency",
      "label": "Central Bank Digital Currency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:project-dunbar:27fb422282a0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c76f52af94288dab849f91dc03a05f0ce705920e053e7e6559368e62609cf97a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
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
  - Project Dunbar was a multi-central-bank experiment exploring a shared platform for multiple central bank digital currencies to settle cross-border transactions directly.

- ### Semantic Classification
  - owl-class:: metaverse:ProjectDunbar
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Central Bank Digital Currency]]
  - bridges-to:: [[Payment Network]], [[Stablecoin]]
  - requires:: [[Central Bank Digital Currency]]
  - enables:: [[Cross-Border Payments]]

- ### Content
  - Project Dunbar tested whether several central banks could issue digital currencies onto a common platform, allowing institutions to transact in multiple currencies without intermediary correspondent banks. The aim was to shorten settlement chains and reduce cost in cross-border payments.
  - The work examined governance and access models for a shared multi-CBDC ledger, including how to reconcile differing national rules on a single platform. It sits in the broader effort to modernise cross-border payment infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
