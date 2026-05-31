public:: true

# Holographic Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94a025ea4f813303847aa93ac454245fba45a7d12a9af4cd6ee011ab381c8322",
  "@type": "Page",
  "vc:slug": "holographic-display",
  "title": "Holographic Display",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:holography",
      "vc:label": "Holography"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:display-technology",
      "vc:label": "Display Technology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Holographic Display"
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
  "@id": "urn:ngm:class:holographic-display",
  "@type": "Class",
  "label": "Holographic Display",
  "definition": "A display technology that reconstructs the wavefront of light to present three-dimensional images viewable without special eyewear. It relies on diffraction and interference to recreate depth cues such as parallax and accommodation.",
  "domain": "display-technology",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:display-technology",
      "label": "Display Technology"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:holography",
        "label": "Holography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:holographic-display:51c26b8afd40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94a025ea4f813303847aa93ac454245fba45a7d12a9af4cd6ee011ab381c8322"
  },
  "vc:resolutions": [
    {
      "raw": "[[Holography]]",
      "resolved": "urn:visionflow:linked:holography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Display Technology]]",
      "resolved": "urn:visionflow:linked:display-technology",
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
  - A display technology that reconstructs the wavefront of light to present three-dimensional images viewable without special eyewear. It relies on diffraction and interference to recreate depth cues such as parallax and accommodation.

- ### Semantic Classification
  - owl-class:: display-technology:HolographicDisplay
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Display Technology]]
  - bridges-to:: [[Computer Graphics]]
  - requires:: [[Holography]]
  - enables:: [[Spatial Computing]]

- ### Content
  - Holographic displays differ from stereoscopic or autostereoscopic screens because they reproduce the physical light field rather than presenting two flat offset images. This allows the eye to focus at different depths within the scene, reducing the vergence-accommodation conflict that affects many head-mounted displays.
  - Practical implementations use spatial light modulators to shape coherent light, and they place heavy demands on computation and bandwidth because the interference pattern encoding a scene contains far more information than a conventional raster image.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
