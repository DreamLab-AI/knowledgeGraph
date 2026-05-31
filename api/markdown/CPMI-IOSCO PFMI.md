public:: true

# CPMI-IOSCO PFMI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:416c254d921875b2638a12f7c8376b60995345a73175a7918a485d5fdbaeca0d",
  "@type": "Page",
  "vc:slug": "cpmi-iosco-pfmi",
  "title": "CPMI-IOSCO PFMI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:swift-messaging",
      "vc:label": "SWIFT Messaging"
    },
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CPMI-IOSCO PFMI"
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
  "@id": "urn:ngm:class:cpmi-iosco-pfmi",
  "@type": "Class",
  "label": "CPMI-IOSCO PFMI",
  "definition": "The Principles for Financial Market Infrastructures are international standards published by the Committee on Payments and Market Infrastructures and the International Organization of Securities Commissions. They set requirements for the safety and efficiency of payment, clearing and settlement systems.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-system",
      "label": "Payment System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:swift-messaging",
        "label": "SWIFT Messaging"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cpmi-iosco-pfmi:01c485761e88",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:416c254d921875b2638a12f7c8376b60995345a73175a7918a485d5fdbaeca0d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SWIFT Messaging]]",
      "resolved": "urn:visionflow:linked:swift-messaging",
      "kind": "StubLink"
    },
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
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
  - The Principles for Financial Market Infrastructures are international standards published by the Committee on Payments and Market Infrastructures and the International Organization of Securities Commissions. They set requirements for the safety and efficiency of payment, clearing and settlement systems.

- ### Semantic Classification
  - owl-class:: finance:CPMIIOSCOPFMI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Payment System]]
  - bridges-to:: [[Central Bank]]
  - requires:: [[Payment System]]
  - enables:: [[SWIFT Messaging]]

- ### Content
  - Published in 2012, the PFMI cover systemically important financial market infrastructures including payment systems, central securities depositories, securities settlement systems, central counterparties and trade repositories. They address risk management areas such as credit, liquidity, settlement finality, governance and operational resilience.
  - Central banks and securities regulators apply the principles when overseeing market infrastructures, and the framework is also referenced in assessments of stablecoin and distributed ledger settlement arrangements. The standards aim to limit systemic risk arising from the failure of critical financial plumbing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
