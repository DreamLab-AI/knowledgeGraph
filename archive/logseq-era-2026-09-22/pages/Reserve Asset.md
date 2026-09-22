public:: true

# Reserve Asset
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5bf9e28e76cff27367ebafa33d2c4d38765a705ab8e571be3c8d6575e1ca61f2",
  "@type": "Page",
  "vc:slug": "reserve-asset",
  "title": "Reserve Asset",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Reserve Asset"
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
  "@id": "urn:ngm:class:reserve-asset",
  "@type": "Class",
  "label": "Reserve Asset",
  "definition": "An asset held to back a liability or to provide a store of value, such as the holdings that back a stablecoin or the foreign currency reserves held by a central bank. Its purpose is to ensure that claims can be met.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
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
  "@id": "urn:visionflow:annotation:link-resolutions:reserve-asset:943fb43714bb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5bf9e28e76cff27367ebafa33d2c4d38765a705ab8e571be3c8d6575e1ca61f2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
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
  - An asset held to back a liability or to provide a store of value, such as the holdings that back a stablecoin or the foreign currency reserves held by a central bank. Its purpose is to ensure that claims can be met.

- ### Semantic Classification
  - owl-class:: finance:ReserveAsset
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[Monetary Policy]]
  - enables:: [[Stablecoin]]

- ### Content
  - In the context of stablecoins, reserve assets are the cash, short-term government securities, or other holdings that back issued tokens so that they can be redeemed at the pegged value. The composition and transparency of reserves affect confidence in the token.
  - More broadly, reserve assets include the foreign currencies, gold, and special drawing rights that central banks hold to support their currencies and meet international obligations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
