public:: true

# Stacker News
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9036a98b781be8af16d342791283353a03a6096a8adaee66dbe67cbf752582a8",
  "@type": "Page",
  "vc:slug": "stacker-news",
  "title": "Stacker News",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:community",
      "vc:label": "community"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Stacker News"
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
  "@id": "urn:ngm:class:stacker-news",
  "@type": "Class",
  "label": "Stacker News",
  "definition": "Stacker News is an online community platform where users post and curate content and reward contributions with bitcoin payments over the Lightning Network.",
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
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community",
        "label": "community"
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
  "@id": "urn:visionflow:annotation:link-resolutions:stacker-news:2ebffeb86319",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9036a98b781be8af16d342791283353a03a6096a8adaee66dbe67cbf752582a8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[community]]",
      "resolved": "urn:visionflow:linked:community",
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
  - Stacker News is an online community platform where users post and curate content and reward contributions with bitcoin payments over the Lightning Network.

- ### Semantic Classification
  - owl-class:: blockchain:StackerNews
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[community]]
  - requires:: [[Lightning Network]], [[Bitcoin Proof-of-Work Protocol]]
  - enables:: [[community]]

- ### Content
  - Stacker News is a link-aggregation and discussion site in the style of forums such as Hacker News, but it uses bitcoin Lightning payments rather than conventional voting to rank and reward posts and comments.
  - Users pay small amounts of bitcoin to post and tip, which the platform treats as a spam-resistance mechanism and as a way to direct value to contributors whose content is well received.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
