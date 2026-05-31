public:: true

# Correspondent Banking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:64687a445a7dbf34424eb38bf98240aa5541208248dccc8251c963e7ec5d7697",
  "@type": "Page",
  "vc:slug": "correspondent-banking",
  "title": "Correspondent Banking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    },
    {
      "@id": "urn:visionflow:linked:swift",
      "vc:label": "SWIFT"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Correspondent Banking"
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
  "@id": "urn:ngm:class:correspondent-banking",
  "@type": "Class",
  "label": "Correspondent Banking",
  "definition": "An arrangement in which one bank provides services, particularly cross-border payments and settlement, on behalf of another bank that lacks a direct presence in a given market or currency.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-border-payments",
      "label": "Cross-Border Payments"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
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
  "@id": "urn:visionflow:annotation:link-resolutions:correspondent-banking:849f6e58f465",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:64687a445a7dbf34424eb38bf98240aa5541208248dccc8251c963e7ec5d7697"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SWIFT]]",
      "resolved": "urn:visionflow:linked:swift",
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
  - An arrangement in which one bank provides services, particularly cross-border payments and settlement, on behalf of another bank that lacks a direct presence in a given market or currency.

- ### Semantic Classification
  - owl-class:: general:CorrespondentBanking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cross-Border Payments]]
  - bridges-to:: [[SWIFT]]
  - enables:: [[Cross-Border Payments]]

- ### Content
  - Correspondent banking lets a bank serve customers in currencies or jurisdictions where it has no branch by holding accounts with, and routing transactions through, a partner bank. This network of relationships underpins much of the world's cross-border payment infrastructure.
  - Messages coordinating these transfers commonly travel over networks such as SWIFT, while value moves through chains of intermediary accounts. The model can be slow and costly and carries compliance burdens, which has motivated interest in alternative payment rails.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
