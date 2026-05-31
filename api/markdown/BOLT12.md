public:: true

# BOLT12
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a0a8eda769466ece1f5706c93fb838ffb89709ef73ece47b8eda5211b25dd2ae",
  "@type": "Page",
  "vc:slug": "bolt-12",
  "title": "BOLT12",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bolt",
      "vc:label": "BOLT"
    },
    {
      "@id": "urn:visionflow:linked:phoenix",
      "vc:label": "Phoenix"
    },
    {
      "@id": "urn:visionflow:linked:bolt-11",
      "vc:label": "BOLT11"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-12-offer-encoding-md",
      "vc:label": "https://github.com/lightning/bolts/blob/master/12-offer-encoding.md"
    },
    {
      "@id": "urn:visionflow:linked:https-bolt-12-org",
      "vc:label": "https://bolt12.org"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BOLT12"
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
  "@id": "urn:ngm:class:bolt-12",
  "@type": "Class",
  "label": "BOLT12",
  "definition": "BOLT12 is a Lightning Network specification that defines offers, a reusable payment request format that improves on single-use invoices. It supports recurring and static payment requests.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bolt",
      "label": "BOLT"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bolt",
        "label": "BOLT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:phoenix",
        "label": "Phoenix"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bolt-12:755ac6d85e17",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a0a8eda769466ece1f5706c93fb838ffb89709ef73ece47b8eda5211b25dd2ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[BOLT]]",
      "resolved": "urn:visionflow:linked:bolt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Phoenix]]",
      "resolved": "urn:visionflow:linked:phoenix",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BOLT11]]",
      "resolved": "urn:visionflow:linked:bolt-11",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/lightning/bolts/blob/master/12-offer-encoding.md]]",
      "resolved": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-12-offer-encoding-md",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://bolt12.org]]",
      "resolved": "urn:visionflow:linked:https-bolt-12-org",
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
  - BOLT12 is a Lightning Network specification that defines offers, a reusable payment request format that improves on single-use invoices. It supports recurring and static payment requests.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT12
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BOLT]]
  - bridges-to:: [[BOLT11]]
  - requires:: [[BOLT]]
  - enables:: [[Phoenix]]

- ### Content
  - BOLT12 introduces offers, which are reusable payment requests that a payer can fetch an invoice from at the time of payment. This avoids the single-use limitation of BOLT11 invoices and supports static codes for receiving payments.
  - The format also enables features such as recurring payments and improved privacy in how invoices are requested. It is supported by some Lightning implementations and wallets as the protocol adopts it.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts/blob/master/12-offer-encoding.md]], [[https://bolt12.org]]
  - migration-date:: 2026-05-29T00:00:00Z
