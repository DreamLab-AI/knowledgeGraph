public:: true

# Gold Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a90bca620cd68e88b6b6b03b9e4be111a5fcbcc51be911b1aff0d254fdc1ff60",
  "@type": "Page",
  "vc:slug": "gold-standard",
  "title": "Gold Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    },
    {
      "@id": "urn:visionflow:linked:money",
      "vc:label": "Money"
    },
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    },
    {
      "@id": "urn:visionflow:linked:inflation",
      "vc:label": "Inflation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gold Standard"
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
  "@id": "urn:ngm:class:gold-standard",
  "@type": "Class",
  "label": "Gold Standard",
  "definition": "A monetary system in which a currency's value is fixed to and convertible into a defined quantity of gold, constraining money supply to gold reserves.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monetary-policy",
      "label": "Monetary Policy"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:money",
        "label": "Money"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gold-standard:3574a97c9e60",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a90bca620cd68e88b6b6b03b9e4be111a5fcbcc51be911b1aff0d254fdc1ff60"
  },
  "vc:resolutions": [
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Money]]",
      "resolved": "urn:visionflow:linked:money",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inflation]]",
      "resolved": "urn:visionflow:linked:inflation",
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
  - A monetary system in which a currency's value is fixed to and convertible into a defined quantity of gold, constraining money supply to gold reserves.

- ### Semantic Classification
  - owl-class:: general:GoldStandard
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Monetary Policy]]
  - bridges-to:: [[Central Bank]], [[Inflation]]
  - requires:: [[Monetary Policy]]
  - enables:: [[Money]]

- ### Content
  - Under a gold standard, a unit of currency is defined as a fixed weight of gold and is in principle redeemable for that gold, tying the money supply to gold holdings. Variants operated in the nineteenth and early twentieth centuries and supported fixed exchange rates between participating countries.
  - The system imposed discipline on money creation but limited the ability of authorities to respond to economic shocks. Most countries abandoned gold convertibility during the twentieth century in favour of fiat currencies managed through discretionary monetary policy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
