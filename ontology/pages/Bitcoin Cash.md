public:: true

# Bitcoin Cash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98b5f0cc79564bdf20dd7e0df96825a021f5e8a486aa1228e33d3270739d0218",
  "@type": "Page",
  "vc:slug": "bitcoin-cash",
  "title": "Bitcoin Cash",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mining",
      "vc:label": "Mining"
    },
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:https-bitcoincash-org",
      "vc:label": "https://bitcoincash.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitcoin Cash"
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
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-cash",
  "@type": "Class",
  "label": "Bitcoin Cash",
  "definition": "A cryptocurrency and blockchain created in 2017 as a hard fork of Bitcoin, with a larger block size intended to increase on-chain transaction throughput. It uses the same proof-of-work consensus model as Bitcoin.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitcoin-cash:b792ab9c8670",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98b5f0cc79564bdf20dd7e0df96825a021f5e8a486aa1228e33d3270739d0218"
  },
  "vc:resolutions": [
    {
      "raw": "[[Mining]]",
      "resolved": "urn:visionflow:linked:mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
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
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://bitcoincash.org/]]",
      "resolved": "urn:visionflow:linked:https-bitcoincash-org",
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
  - A cryptocurrency and blockchain created in 2017 as a hard fork of Bitcoin, with a larger block size intended to increase on-chain transaction throughput. It uses the same proof-of-work consensus model as Bitcoin.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinCash
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]], [[Bitcoin Network]]
  - requires:: [[Mining]], [[Hash Function]]
  - enables:: [[Payment Channel]]

- ### Content
  - Bitcoin Cash split from the Bitcoin chain in August 2017 over a disagreement about how to scale transaction capacity. It raised the maximum block size so that more transactions fit in each block, with the stated aim of lower fees and faster confirmation for everyday payments.
  - The network retained Bitcoin's proof-of-work design and unspent transaction output model, so mining hardware and wallet concepts carry over. It positions itself as a medium of exchange rather than primarily a store of value.

- ### Provenance
  - sources:: [[https://bitcoincash.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
