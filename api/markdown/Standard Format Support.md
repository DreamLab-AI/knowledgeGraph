public:: true

# Standard Format Support
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a50de7139514401b51f19fe90eb79968c2de474f62edba42191534352b2f1d91",
  "@type": "Page",
  "vc:slug": "standard-format-support",
  "title": "Standard Format Support",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-platform-asset-exchange",
      "vc:label": "Cross Platform Asset Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:data-interoperability",
      "vc:label": "Data Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10068"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Standard Format Support"
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
  "@id": "urn:ngm:class:standard-format-support",
  "@type": "Class",
  "label": "Standard Format Support",
  "definition": "Implementation of standardized data formats enabling interoperability across metaverse platforms, including 3D asset formats like glTF (ISO/IEC 12113:2022), Universal Scene Description and 3D Tiles for seamless exchange of geometry, materials, animations, and scene descriptions between diverse sy...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-asset-exchange",
        "label": "Cross-Platform Asset Exchange"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-interoperability",
        "label": "Data Interoperability"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:standard-format-support:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a50de7139514401b51f19fe90eb79968c2de474f62edba42191534352b2f1d91"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross Platform Asset Exchange]]",
      "resolved": "urn:visionflow:linked:cross-platform-asset-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Interoperability]]",
      "resolved": "urn:visionflow:owl:class:data-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Implementation of standardized data formats enabling interoperability across metaverse platforms, including 3D asset formats like glTF (ISO/IEC 12113:2022), Universal Scene Description (USD), and 3D Tiles for seamless exchange of geometry, materials, animations, and scene descriptions between diverse systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:StandardFormatSupport
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Interoperability]]
  - enables:: [[Cross Platform Asset Exchange]]

- ### Content

  - #### Key Formats
		- glTF for efficient 3D transmission
		- USD for scene organization
		- 3D Tiles for massive dataset streaming
		- PhysX for physics properties
		- FBX for animation exchange
  - #### Standardization Efforts
		- Metaverse Standards Forum coordination
		- Khronos Group format development
		- ISO/IEC formal standardization
		- W3C web format specifications
		- Industry consortium alignment

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
