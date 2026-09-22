public:: true

# Payment Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0915fc92aca02c58873302973fa6c2a7f7943832a70831c92823a2f7928c525",
  "@type": "Page",
  "vc:slug": "payment-protocol",
  "title": "Payment Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-protocols",
      "vc:label": "Cryptographic Protocols"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-payment-system",
      "vc:label": "https://en.wikipedia.org/wiki/Payment_system"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bis-org-cpmi",
      "vc:label": "https://www.bis.org/cpmi/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Payment Protocol"
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
  "@id": "urn:ngm:class:payment-protocol",
  "@type": "Class",
  "label": "Payment Protocol",
  "definition": "A payment protocol is a defined set of rules and message formats governing how value transfer is initiated, authorised and settled between parties.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocols",
      "label": "Communication Protocols"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-protocols",
        "label": "Cryptographic Protocols"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:payment-protocol:5b9a3b221eec",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f0915fc92aca02c58873302973fa6c2a7f7943832a70831c92823a2f7928c525"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Protocols]]",
      "resolved": "urn:visionflow:linked:cryptographic-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Payment_system]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-payment-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.bis.org/cpmi/]]",
      "resolved": "urn:visionflow:linked:https-www-bis-org-cpmi",
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
  - A payment protocol is a defined set of rules and message formats governing how value transfer is initiated, authorised and settled between parties.

- ### Semantic Classification
  - owl-class:: distributed-systems:PaymentProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocols]]
  - bridges-to:: [[Cryptocurrency]]
  - requires:: [[Cryptographic Protocols]]
  - enables:: [[Stablecoin]]

- ### Content
  - Payment protocols specify the sequence of messages, data structures and validation rules used to move funds. They cover authorisation, clearing and settlement, and define how parties confirm and record transactions.
  - Protocols range from established interbank standards to blockchain-based mechanisms. Cryptographic techniques are used to authenticate participants and protect the integrity of payment instructions.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Payment_system]], [[https://www.bis.org/cpmi/]]
  - migration-date:: 2026-05-29T00:00:00Z
