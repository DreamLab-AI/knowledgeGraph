public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9dcd0de3098c627d1a0f5e284a3847cfa2023c8018d7df995751d0a9eee93d7",
  "@type": "Page",
  "vc:slug": "sc-content-and-assets",
  "title": "Content and Assets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:sc-content-and-assets",
  "label": "Content and Assets",
  "definition": "Taxonomy hub for all content types and digital assets within the spatial computing domain, encompassing 3D models, avatars, NFTs, textures, rendering pipelines, and the digital asset lifecycle from creation through distribution. This category unifies the asset-creation and asset-management concerns that underpin immersive experiences.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing-paradigm",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:3-d-asset", "label": "3D Asset"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:digital-content-creation", "label": "Digital Content Creation"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:digital-asset-management", "label": "Digital Asset Management"},
      {"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"},
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-entertainment", "label": "Immersive Entertainment"}
    ]
  },
  "qualityScore": 0.8,
  "maturity": "established"
}
```
