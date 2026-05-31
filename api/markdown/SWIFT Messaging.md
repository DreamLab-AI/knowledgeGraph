public:: true

# SWIFT Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c94b378e886cce913123e2ca6b02faca2c74b148f95c3c59f54642e3fe7ec037",
  "@type": "Page",
  "vc:slug": "swift-messaging",
  "title": "SWIFT Messaging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:swift",
      "vc:label": "SWIFT"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "vc:label": "CPMI-IOSCO PFMI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SWIFT Messaging"
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
  "@id": "urn:ngm:class:swift-messaging",
  "@type": "Class",
  "label": "SWIFT Messaging",
  "definition": "SWIFT messaging is the standardised financial message exchange operated over the SWIFT network, used by banks to communicate payment and securities instructions. Messages follow formats such as the MT and ISO 20022 MX standards.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:swift",
      "label": "SWIFT"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:swift-messaging:48da57dfec41",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c94b378e886cce913123e2ca6b02faca2c74b148f95c3c59f54642e3fe7ec037"
  },
  "vc:resolutions": [
    {
      "raw": "[[SWIFT]]",
      "resolved": "urn:visionflow:linked:swift",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CPMI-IOSCO PFMI]]",
      "resolved": "urn:visionflow:linked:cpmi-iosco-pfmi",
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
  - SWIFT messaging is the standardised financial message exchange operated over the SWIFT network, used by banks to communicate payment and securities instructions. Messages follow formats such as the MT and ISO 20022 MX standards.

- ### Semantic Classification
  - owl-class:: finance:SWIFTMessaging
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[SWIFT]]
  - bridges-to:: [[CPMI-IOSCO PFMI]]
  - requires:: [[SWIFT]]
  - enables:: [[Payment System]]

- ### Content
  - SWIFT messaging lets financial institutions send structured instructions for payments, securities, treasury and trade over the cooperative's secure network. The legacy MT message types are being migrated to ISO 20022 based MX messages, which carry richer structured data.
  - SWIFT itself moves messages rather than funds, with settlement handled by correspondent banking relationships and payment systems. The network is a central element of cross-border financial communication and is subject to oversight and compliance requirements.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
