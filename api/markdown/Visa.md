public:: true

# Visa
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:70e94d64df199dd26757ad052fb9f3488886a5fea47808964de9c21c485269f6",
  "@type": "Page",
  "vc:slug": "visa",
  "title": "Visa",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:settlement",
      "vc:label": "Settlement"
    },
    {
      "@id": "urn:visionflow:linked:payment-network",
      "vc:label": "Payment Network"
    },
    {
      "@id": "urn:visionflow:linked:https-www-visa-com",
      "vc:label": "https://www.visa.com"
    },
    {
      "@id": "urn:visionflow:linked:https-usa-visa-com-about-visa-html",
      "vc:label": "https://usa.visa.com/about-visa.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Visa"
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
  "@id": "urn:ngm:class:visa",
  "@type": "Class",
  "label": "Visa",
  "definition": "Visa is a multinational payment technology company that operates one of the largest electronic payment networks, connecting cardholders, merchants, and banks. It is headquartered in the United States.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-network",
      "label": "Payment Network"
    }
  ],
  "relations": {
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
  "@id": "urn:visionflow:annotation:link-resolutions:visa:e759968ca927",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:70e94d64df199dd26757ad052fb9f3488886a5fea47808964de9c21c485269f6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Settlement]]",
      "resolved": "urn:visionflow:linked:settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Network]]",
      "resolved": "urn:visionflow:linked:payment-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.visa.com]]",
      "resolved": "urn:visionflow:linked:https-www-visa-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://usa.visa.com/about-visa.html]]",
      "resolved": "urn:visionflow:linked:https-usa-visa-com-about-visa-html",
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
  - Visa is a multinational payment technology company that operates one of the largest electronic payment networks, connecting cardholders, merchants, and banks. It is headquartered in the United States.

- ### Semantic Classification
  - owl-class:: general:Visa
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Payment Network]]
  - bridges-to:: [[Settlement]]
  - enables:: [[Payment System]]

- ### Content
  - Visa runs a payment network that authorises, clears, and settles card transactions between banks that issue cards and banks that serve merchants. The company itself does not issue cards but provides the network and standards.
  - Visa processes a large volume of transactions globally and has explored digital currency and settlement initiatives. Its network connects financial institutions and supports payment products built on top of it.

- ### Provenance
  - sources:: [[https://www.visa.com]], [[https://usa.visa.com/about-visa.html]]
  - migration-date:: 2026-05-29T00:00:00Z
