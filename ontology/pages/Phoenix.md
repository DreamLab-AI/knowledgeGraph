public:: true

# Phoenix
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4fe25c8675d860c69cbac7102a60267e5e662b6074a676b62d262265fc3a2a9e",
  "@type": "Page",
  "vc:slug": "phoenix",
  "title": "Phoenix",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning",
      "vc:label": "Lightning"
    },
    {
      "@id": "urn:visionflow:linked:bolt-12",
      "vc:label": "BOLT12"
    },
    {
      "@id": "urn:visionflow:linked:lightning-service-provider",
      "vc:label": "Lightning Service Provider"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    },
    {
      "@id": "urn:visionflow:linked:https-phoenix-acinq-co",
      "vc:label": "https://phoenix.acinq.co"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-acinq-phoenix",
      "vc:label": "https://github.com/ACINQ/phoenix"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Phoenix"
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
  "@id": "urn:ngm:class:phoenix",
  "@type": "Class",
  "label": "Phoenix",
  "definition": "Phoenix is a self-custodial Bitcoin Lightning wallet developed by ACINQ that manages channels automatically on behalf of the user. It is available as a mobile application.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:wallet",
      "label": "Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning",
        "label": "Lightning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bolt-12",
        "label": "BOLT12"
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
  "@id": "urn:visionflow:annotation:link-resolutions:phoenix:03a8f0dd8edb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4fe25c8675d860c69cbac7102a60267e5e662b6074a676b62d262265fc3a2a9e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning]]",
      "resolved": "urn:visionflow:linked:lightning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BOLT12]]",
      "resolved": "urn:visionflow:linked:bolt-12",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lightning Service Provider]]",
      "resolved": "urn:visionflow:linked:lightning-service-provider",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://phoenix.acinq.co]]",
      "resolved": "urn:visionflow:linked:https-phoenix-acinq-co",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/ACINQ/phoenix]]",
      "resolved": "urn:visionflow:linked:https-github-com-acinq-phoenix",
      "kind": "StubLink"
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
  - Phoenix is a self-custodial Bitcoin Lightning wallet developed by ACINQ that manages channels automatically on behalf of the user. It is available as a mobile application.

- ### Semantic Classification
  - owl-class:: blockchain:Phoenix
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Wallet]]
  - bridges-to:: [[Lightning Service Provider]]
  - requires:: [[Lightning]]
  - enables:: [[BOLT12]]

- ### Content
  - Phoenix is a Lightning wallet that handles channel management for the user, opening and adjusting channels as needed so that payments work without manual configuration. Users hold their own keys, keeping the wallet self-custodial.
  - The wallet is built by ACINQ, which also develops a Lightning implementation, and it supports newer features of the protocol. It targets ease of use for people sending and receiving Lightning payments on a phone.

- ### Provenance
  - sources:: [[https://phoenix.acinq.co]], [[https://github.com/ACINQ/phoenix]]
  - migration-date:: 2026-05-29T00:00:00Z
