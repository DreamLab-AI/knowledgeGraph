public:: true

# Standardized Formats
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:standardized-formats",
  "@type": "Page",
  "vc:slug": "standardized-formats",
  "title": "Standardized Formats",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:standardized-formats",
  "@type": "Class",
  "label": "Standardized Formats",
  "definition": "Standardized formats are openly specified, consistently structured file and data encodings, such as glTF for 3D assets, USD for scene description, or VRM for avatars, that allow content to be created in one tool and faithfully consumed in another. By fixing geometry, material, animation, and metadata conventions, they decouple content from any single application or platform. They are the precondition for portability, archival longevity, and interoperability across the metaverse content pipeline.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Standards and Interoperability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:avatar-portability", "label": "Avatar Portability"},
      {"@id": "urn:ngm:class:asset-archive", "label": "Asset Archive"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Standardized formats are openly specified, consistent data encodings for 3D assets, scenes, and avatars that fall under [[Supply-Chain Standards and Interoperability]], letting content move faithfully between tools and platforms.
- ### Content
  - By fixing conventions for geometry, materials, animation, and metadata, formats such as glTF, USD, and VRM decouple content from any one application. They are the technical precondition for [[Avatar Portability]] across virtual worlds and for durable [[Asset Archive]] storage, since openly documented encodings remain readable long after the originating software is retired.
