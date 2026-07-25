public:: true

# Virtual Try-On
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7cd914f40ec391703bffcda827d89a513dcdb1f3c37eb9e8422eb390d5f46ec1",
  "@type": "Page",
  "vc:slug": "virtual-try-on",
  "title": "Virtual Try-On",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:e-commerce",
      "vc:label": "E-Commerce"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Try-On"
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
  "@id": "urn:ngm:class:virtual-try-on",
  "@type": "Class",
  "label": "Virtual Try-On",
  "definition": "Virtual try-on is a computer vision and graphics technique that overlays clothing, accessories, or cosmetics onto an image or video of a person so they can preview how an item would look.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-try-on:22c709f6f01d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7cd914f40ec391703bffcda827d89a513dcdb1f3c37eb9e8422eb390d5f46ec1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[E-Commerce]]",
      "resolved": "urn:visionflow:linked:e-commerce",
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
  - Virtual try-on is a computer vision and graphics technique that overlays clothing, accessories, or cosmetics onto an image or video of a person so they can preview how an item would look.

- ### Semantic Classification
  - owl-class:: machine-learning:VirtualTryOn
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Vision]]
  - bridges-to:: [[E-Commerce]]
  - requires:: [[Computer Vision]], [[Image Generation]]

- ### Content
  - Virtual try-on systems estimate body or face geometry and then render a target garment or product onto the person, accounting for pose, shape, and occlusion. Recent methods use generative models to synthesise the result.
  - The technique is used in online retail to reduce returns and improve buyer confidence, and it is applied to clothing, eyewear, footwear, and cosmetics.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
