public:: true

# Custody Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5af2eeb12c0d58fb6091a9aa0385c90b5577d1c58d280d8b142d4a3298b5c476",
  "@type": "Page",
  "vc:slug": "custody-layer",
  "title": "Custody Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-layer",
      "vc:label": "Cryptographic Layer"
    },
    {
      "@id": "urn:visionflow:linked:identity-layer",
      "vc:label": "Identity Layer"
    },
    {
      "@id": "urn:visionflow:linked:settlement-layer",
      "vc:label": "Settlement Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:multi-signature",
      "vc:label": "Multi-Signature"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Custody Layer"
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
  "@id": "urn:ngm:class:custody-layer",
  "@type": "Class",
  "label": "Custody Layer",
  "definition": "The Custody Layer is the stratum that governs the safekeeping and authorised control of assets and the keys that command them. It sits above the Cryptographic and Identity strata it depends on and below the settlement and application activity that moves assets. It contains key storage, signing policies, and the authorisation rules for asset control.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Bc Token And Asset"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-layer",
        "label": "Cryptographic Layer"
      },
      {
        "@id": "urn:ngm:class:identity-layer",
        "label": "Identity Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:custody-layer:59f00dd3cd7d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5af2eeb12c0d58fb6091a9aa0385c90b5577d1c58d280d8b142d4a3298b5c476"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Layer]]",
      "resolved": "urn:visionflow:linked:cryptographic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Layer]]",
      "resolved": "urn:visionflow:linked:identity-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Settlement Layer]]",
      "resolved": "urn:visionflow:linked:settlement-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Signature]]",
      "resolved": "urn:visionflow:linked:multi-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Custody Layer is the stratum that governs the safekeeping and authorised control of assets and the keys that command them. It sits above the Cryptographic and Identity strata it depends on and below the settlement and application activity that moves assets. It contains key storage, signing policies, and the authorisation rules for asset control.

- ### Semantic Classification
  - owl-class:: custody:CustodyLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Multi-Signature]], [[Key Management]]
  - requires:: [[Cryptographic Layer]], [[Identity Layer]]
  - enables:: [[Settlement Layer]], [[Application Layer]]

- ### Content
  - The Custody Layer secures the assets a system holds and controls who may authorise their movement. Typical members include secure key storage such as hardware security modules, multi-party signing schemes, withdrawal and approval policies, and recovery procedures. It is concerned with safekeeping and authorised control, not with the transfers themselves.
  - It requires the Cryptographic Layer for the keys and signatures that prove control and the Identity Layer to bind that control to verified principals. It enables the Settlement Layer, which moves the assets it guards, and the Application Layer, which offers custody-dependent services.
  - The layer bridges to multi-signature schemes and key management, practices that distribute trust and reduce single points of failure. Controls defined here are decisive for protecting value against loss and theft.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
