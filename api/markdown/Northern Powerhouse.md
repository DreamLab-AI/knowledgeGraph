public:: true

# Northern Powerhouse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c6f41fce8f11f02876eb366d4a4828222b5dab253e3fef6ad933c8dad0f70702",
  "@type": "Page",
  "vc:slug": "northern-powerhouse",
  "title": "Northern Powerhouse",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-economy",
      "vc:label": "Digital Economy"
    },
    {
      "@id": "urn:visionflow:linked:manchester",
      "vc:label": "Manchester"
    },
    {
      "@id": "urn:visionflow:linked:leeds",
      "vc:label": "Leeds"
    },
    {
      "@id": "urn:visionflow:linked:sheffield",
      "vc:label": "Sheffield"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Northern Powerhouse"
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
  "@id": "urn:ngm:class:northern-powerhouse",
  "@type": "Class",
  "label": "Northern Powerhouse",
  "definition": "A United Kingdom government policy initiative aimed at boosting economic growth across the cities and regions of northern England.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:entity",
      "label": "Entity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:northern-powerhouse:28513c4615b3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c6f41fce8f11f02876eb366d4a4828222b5dab253e3fef6ad933c8dad0f70702"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Economy]]",
      "resolved": "urn:visionflow:linked:digital-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Manchester]]",
      "resolved": "urn:visionflow:linked:manchester",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Leeds]]",
      "resolved": "urn:visionflow:linked:leeds",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sheffield]]",
      "resolved": "urn:visionflow:linked:sheffield",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
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
  - A United Kingdom government policy initiative aimed at boosting economic growth across the cities and regions of northern England.

- ### Semantic Classification
  - owl-class:: governance:NorthernPowerhouse
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Manchester]], [[Leeds]], [[Sheffield]]
  - enables:: [[Digital Economy]]

- ### Content
  - The Northern Powerhouse is a policy initiative introduced by the United Kingdom government to rebalance the national economy by strengthening transport, investment, and innovation across northern England. It links major cities including Manchester, Leeds, Sheffield, and Newcastle.
  - The initiative aims to develop clusters in advanced manufacturing, digital technology, and research to raise productivity in the region.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
