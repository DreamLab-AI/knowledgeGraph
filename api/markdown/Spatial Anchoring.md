schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SpatialAnchoring
legacy_uri:: urn:visionclaw:concept:spatial-computing:spatial-anchoring
public:: true

# Spatial Anchoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5",
  "@type": "Page",
  "vc:slug": "spatial-anchoring",
  "title": "Spatial Anchoring",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:location-based-ar",
      "vc:label": "Location Based AR"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5a64ef26ad3b"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SpatialAnchoring"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10050"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Anchoring"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-anchoring"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-anchoring"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:spatial-anchoring",
  "@type": "Class",
  "label": "Spatial Anchoring",
  "definition": "A technique for locking virtual objects to specific physical locations using environmental mapping, enabling persistent placement of digital content that maintains consistent position and orientation relative to real-world surfaces across sessions and devices through SLAM-based tracking and cloud...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:location-based-ar",
        "label": "Location Based AR"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-anchoring:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Location Based AR]]",
      "resolved": "urn:visionflow:linked:location-based-ar",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3d04187f45b4f9d8663ceed027299bf561c3624a50026cb4e2073ce191e3dee5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A technique for locking virtual objects to specific physical locations using environmental mapping, enabling persistent placement of digital content that maintains consistent position and orientation relative to real-world surfaces across sessions and devices through SLAM-based tracking and cloud-synchronized anchor data.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAnchoring
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Spatial Computing]]
  - enables:: [[Location Based AR]]

- ### Content

  - #### Key Technologies
		- SLAM environmental mapping
		- Feature descriptor extraction
		- Cloud anchor synchronization
		- World map persistence
		- Multi-device coordinate sharing
  - #### Applications
		- AR gaming location-based experiences
		- Indoor navigation and wayfinding
		- Industrial training overlays
		- Architectural visualization
		- Multi-user collaborative AR

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
