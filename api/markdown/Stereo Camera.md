schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#StereoCamera
legacy_uri:: urn:visionclaw:concept:robotics:stereo-camera
public:: true

# Stereo Camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6",
  "@type": "Page",
  "vc:slug": "stereo-camera",
  "title": "Stereo Camera",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-0d652e31d661"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#StereoCamera"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0161"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stereo Camera"
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
      "vc:value": "urn:visionclaw:concept:robotics:stereo-camera"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:stereo-camera"
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
    "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:stereo-camera",
  "@type": "Class",
  "label": "Stereo Camera",
  "definition": "Stereo camera uses two lenses to capture images for 3D depth estimation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:camera",
      "label": "Camera"
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
  "@id": "urn:visionflow:annotation:link-resolutions:stereo-camera:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:owl:class:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Stereo camera uses two lenses to capture images for 3D depth estimation.

- ### Semantic Classification
  - owl-class:: robotics:StereoCamera
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Camera]]

- ### Content
  Stereo Camera — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
