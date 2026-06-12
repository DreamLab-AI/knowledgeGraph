public:: true

# Optical Character Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:26f90a86d5aba314db04ff2fc3e228821f4b1acdb54f659ba3e4dcd80167dab0",
  "@type": "Page",
  "vc:slug": "optical-character-recognition",
  "title": "Optical Character Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:legal-research",
      "vc:label": "Legal Research"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Optical Character Recognition"
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
  "@id": "urn:ngm:class:optical-character-recognition",
  "@type": "Class",
  "label": "Optical Character Recognition",
  "definition": "Optical character recognition converts images of printed or handwritten text into machine-readable character data, enabling search, editing and downstream processing of documents.",
  "domain": "metaverse",
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:legal-research",
        "label": "Legal Research"
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
  "@id": "urn:visionflow:annotation:link-resolutions:optical-character-recognition:7c24e2360c7f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:26f90a86d5aba314db04ff2fc3e228821f4b1acdb54f659ba3e4dcd80167dab0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Legal Research]]",
      "resolved": "urn:visionflow:linked:legal-research",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - Optical character recognition converts images of printed or handwritten text into machine-readable character data, enabling search, editing and downstream processing of documents.

- ### Semantic Classification
  - owl-class:: metaverse:OpticalCharacterRecognition
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Vision]]
  - bridges-to:: [[Deep Learning]], [[Machine Learning Discipline]]
  - requires:: [[Computer Vision]]
  - enables:: [[Legal Research]]

- ### Content
  - Optical character recognition locates text regions, segments characters or lines and classifies them into symbols, increasingly using deep neural networks that read whole sequences end to end. Layout analysis recovers structure such as columns and tables.
  - It turns scanned archives, forms and signage into searchable text feeding tasks such as legal research and document automation. The pipeline rests on computer vision and machine learning components.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
