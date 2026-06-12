public:: true

# Core Lightning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bf60ff705b140db3d7cf1a5420952add6ac0593a8acb285d31e1cd7775e2bc88",
  "@type": "Page",
  "vc:slug": "core-lightning",
  "title": "Core Lightning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Core Lightning"
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
  "@id": "urn:ngm:class:core-lightning",
  "@type": "Class",
  "label": "Core Lightning",
  "definition": "Core Lightning is an implementation of the Bitcoin Lightning Network protocol written in C and maintained by Blockstream.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
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
  "@id": "urn:visionflow:annotation:link-resolutions:core-lightning:cecc73bf9154",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bf60ff705b140db3d7cf1a5420952add6ac0593a8acb285d31e1cd7775e2bc88"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - Core Lightning is an implementation of the Bitcoin Lightning Network protocol written in C and maintained by Blockstream.

- ### Semantic Classification
  - owl-class:: blockchain:CoreLightning
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - Core Lightning, formerly named c-lightning, is a lightweight and modular Lightning node implementation developed by Blockstream. It supports a plugin architecture that lets operators extend node behaviour.
  - It conforms to the BOLT specifications, allowing it to interoperate with other implementations such as Eclair and LND when opening channels and routing payments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
