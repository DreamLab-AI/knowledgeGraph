public:: true

# Media Forensics

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:media-forensics", "@type": "Page", "title": "Media Forensics", "vc:slug": "media-forensics", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:media-forensics",
  "@type": "Class",
  "label": "Media Forensics",
  "definition": "Media forensics is the analysis of images, audio and video to determine authenticity, detect manipulation and attribute provenance, using techniques ranging from pixel-level artefact analysis to learned deepfake classifiers. It examines compression artefacts, sensor noise patterns, lighting inconsistencies and model-specific generation fingerprints to distinguish genuine capture from synthetic or edited content. It underpins deepfake detection systems and broader media authenticity assessment.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-forensics",
      "label": "Digital Forensics"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:deepfake-detection",
        "label": "Deepfake Detection"
      },
      {
        "@id": "urn:ngm:class:media-authenticity",
        "label": "Media Authenticity"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-forensics",
        "label": "Digital Forensics"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Media forensics is the analysis of images, audio and video to determine authenticity, detect manipulation and attribute provenance, using techniques ranging from pixel-level artefact analysis to learned deepfake classifiers. It examines compression artefacts, sensor noise patterns, lighting inconsistencies and model-specific generation fingerprints to distinguish genuine capture from synthetic or edited content. It underpins deepfake detection systems and broader media authenticity assessment.
- ### Relationships
	- enables:: [[Deepfake Detection]]
	- enables:: [[Media Authenticity]]
	- partOf:: [[Digital Forensics]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
