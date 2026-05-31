public:: true

# Bitmain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c2c28820550c2fe927c6ef42a6c498a941fb0cda7985c711cb00eaf9665b4ba2",
  "@type": "Page",
  "vc:slug": "bitmain",
  "title": "Bitmain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:ant-pool",
      "vc:label": "AntPool"
    },
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bitmain-com",
      "vc:label": "https://www.bitmain.com"
    },
    {
      "@id": "urn:visionflow:linked:https-shop-bitmain-com",
      "vc:label": "https://shop.bitmain.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitmain"
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
  "@id": "urn:ngm:class:bitmain",
  "@type": "Class",
  "label": "Bitmain",
  "definition": "Bitmain is a Chinese company that designs and manufactures application-specific integrated circuit mining hardware, best known for its Antminer product line. It also operates mining services.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asic",
      "label": "ASIC"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ant-pool",
        "label": "AntPool"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitmain:433635da6670",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c2c28820550c2fe927c6ef42a6c498a941fb0cda7985c711cb00eaf9665b4ba2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AntPool]]",
      "resolved": "urn:visionflow:linked:ant-pool",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ASIC]]",
      "resolved": "urn:visionflow:linked:asic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.bitmain.com]]",
      "resolved": "urn:visionflow:linked:https-www-bitmain-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://shop.bitmain.com]]",
      "resolved": "urn:visionflow:linked:https-shop-bitmain-com",
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
  - Bitmain is a Chinese company that designs and manufactures application-specific integrated circuit mining hardware, best known for its Antminer product line. It also operates mining services.

- ### Semantic Classification
  - owl-class:: blockchain:Bitmain
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[ASIC]]
  - bridges-to:: [[Hardware]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[AntPool]]

- ### Content
  - Bitmain develops ASIC chips optimised for the SHA-256 hashing used in Bitcoin mining and sells them in its Antminer machines. Its hardware has been widely used by miners and mining operations.
  - The company has been a significant supplier in the mining hardware market and is associated with the AntPool mining pool. Its product cycles track improvements in chip efficiency that affect mining economics.

- ### Provenance
  - sources:: [[https://www.bitmain.com]], [[https://shop.bitmain.com]]
  - migration-date:: 2026-05-29T00:00:00Z
