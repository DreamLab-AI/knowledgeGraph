public:: true

# Avatar Wearable
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6cf73d6accc7a631c68605ba9859a98fc22afc0dbcb7c8c8fdc7fb78b5f146cf",
  "@type": "Page",
  "vc:slug": "avatar-wearable",
  "title": "Avatar Wearable",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Avatar Wearable"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:avatar-wearable",
  "@type": "Class",
  "label": "Avatar Wearable",
  "definition": "Digital clothing, accessories, and cosmetic items that can be equipped by avatars in virtual environments, often tradeable as digital assets or NFTs.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:digital-asset",
      "label": "Digital Asset"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:avatar-wearable:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6cf73d6accc7a631c68605ba9859a98fc22afc0dbcb7c8c8fdc7fb78b5f146cf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:owl:class:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Digital clothing, accessories, and cosmetic items that can be equipped by avatars in virtual environments, often tradeable as digital assets or NFTs.

- ### Semantic Classification
  - owl-class:: spatial-computing:AvatarWearable
  - owl-role:: Concept
  - belongs-to-domain:: [[Metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Asset]]
  - bridges-to:: [[Telecollaboration]]

- ### Content
  Avatar Wearable — content pending enrichment.

- ### Provenance
  - sources:: Metaverse Standards Forum
  - migration-date:: 2026-04-26T00:00:00Z
