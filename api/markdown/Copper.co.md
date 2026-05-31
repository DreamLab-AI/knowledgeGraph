public:: true

# Copper.co
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b4ed806e24e823d582ab00a987544467f262c70884034dc5c9767a2deac1f74",
  "@type": "Page",
  "vc:slug": "copper-co",
  "title": "Copper.co",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    },
    {
      "@id": "urn:visionflow:linked:custody",
      "vc:label": "Custody"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Copper.co"
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
  "@id": "urn:ngm:class:copper-co",
  "@type": "Class",
  "label": "Copper.co",
  "definition": "Copper.co is a digital asset custody and infrastructure company serving institutional clients. It provides secure storage, settlement and prime services for cryptocurrencies.",
  "domain": "fintech",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:custody",
      "label": "Custody"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:copper-co:fd2a8b5e13ee",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6b4ed806e24e823d582ab00a987544467f262c70884034dc5c9767a2deac1f74"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody]]",
      "resolved": "urn:visionflow:linked:custody",
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
  - Copper.co is a digital asset custody and infrastructure company serving institutional clients. It provides secure storage, settlement and prime services for cryptocurrencies.

- ### Semantic Classification
  - owl-class:: fintech:Copperco
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Custody]]
  - bridges-to:: [[Financial Services]]
  - requires:: [[Cryptocurrency]]

- ### Content
  - Copper.co is a provider of digital asset custody and infrastructure aimed at institutional investors, offering secure storage of cryptocurrencies along with settlement and trading connectivity. Its technology focuses on protecting private keys while enabling clients to move and trade assets across venues.
  - The company's services include an off-exchange settlement system that lets institutions trade without leaving assets on exchanges. It operates in the regulated infrastructure layer between institutional clients and crypto markets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
