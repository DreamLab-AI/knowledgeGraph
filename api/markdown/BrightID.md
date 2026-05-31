public:: true

# BrightID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b884387a5b29105e7756c74adc3f7f5dc023cbc84fe5d5d06804edc30944db2",
  "@type": "Page",
  "vc:slug": "bright-id",
  "title": "BrightID",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sybil-resistance",
      "vc:label": "Sybil Resistance"
    },
    {
      "@id": "urn:visionflow:linked:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:sybil-attack",
      "vc:label": "Sybil Attack"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BrightID"
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
  "@id": "urn:ngm:class:bright-id",
  "@type": "Class",
  "label": "BrightID",
  "definition": "A decentralised social identity network that aims to verify that each user is a unique person through analysis of a social connection graph.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bright-id:5932c86ff2e4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b884387a5b29105e7756c74adc3f7f5dc023cbc84fe5d5d06804edc30944db2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sybil Resistance]]",
      "resolved": "urn:visionflow:linked:sybil-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation System]]",
      "resolved": "urn:visionflow:linked:reputation-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sybil Attack]]",
      "resolved": "urn:visionflow:linked:sybil-attack",
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
  - A decentralised social identity network that aims to verify that each user is a unique person through analysis of a social connection graph.

- ### Semantic Classification
  - owl-class:: general:BrightID
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Digital Identity]], [[Sybil Attack]]
  - enables:: [[Sybil Resistance]], [[Reputation System]]

- ### Content
  - BrightID is a decentralised identity network that seeks to establish uniqueness of persons without collecting personal identifying information. It builds a graph of verified social connections and analyses its structure to detect duplicate or fabricated accounts.
  - The network is used by applications that need to limit each participant to a single identity, for example in distribution schemes and governance voting. It positions itself as a privacy-preserving approach to resisting Sybil attacks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
