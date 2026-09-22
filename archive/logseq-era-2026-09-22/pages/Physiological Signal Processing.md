public:: true

# Physiological Signal Processing

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:physiological-signal-processing", "@type": "Page", "title": "Physiological Signal Processing", "vc:slug": "physiological-signal-processing", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:physiological-signal-processing",
  "@type": "Class",
  "label": "Physiological Signal Processing",
  "definition": "Physiological signal processing is the acquisition, filtering and feature extraction of biological signals, such as heart rate, galvanic skin response, EEG or respiration, to infer a person's internal physiological or affective state. It combines digital signal processing techniques with domain-specific artefact removal, since biosignals are typically low-amplitude and prone to motion and electrical noise. It is a core input stage for affective computing systems that infer emotion or stress from bodily signals.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-signal-processing",
      "label": "Digital Signal Processing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      }
    ],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:affective-computing",
        "label": "Affective Computing"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [],
    "supports": []
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
	- Physiological signal processing is the acquisition, filtering and feature extraction of biological signals, such as heart rate, galvanic skin response, EEG or respiration, to infer a person's internal physiological or affective state. It combines digital signal processing techniques with domain-specific artefact removal, since biosignals are typically low-amplitude and prone to motion and electrical noise. It is a core input stage for affective computing systems that infer emotion or stress from bodily signals.
- ### Relationships
	- uses:: [[Digital Signal Processing]]
	- partOf:: [[Affective Computing]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
