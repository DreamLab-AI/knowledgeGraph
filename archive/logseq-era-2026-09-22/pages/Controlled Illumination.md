public:: true

# Controlled Illumination

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:controlled-illumination", "@type":"Page", "title":"Controlled Illumination", "vc:slug":"controlled-illumination", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:controlled-illumination",
  "@type":"Class",
  "label":"Controlled Illumination",
  "definition":"Controlled illumination is the deliberate management of light source position, intensity, and spectrum during image capture so that resulting measurements are consistent and repeatable. It is used in camera calibration and optical calibration targets to remove ambient lighting variability that would otherwise bias corner or feature detection. Structured and patterned illumination variants are also used to actively encode depth or surface information into captured images.",
  "domain":"spatial-computing",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Controlled illumination is the deliberate management of light source position, intensity, and spectrum during image capture so that resulting measurements are consistent and repeatable. It is used in camera calibration and optical calibration targets to remove ambient lighting variability that would otherwise bias corner or feature detection. Structured and patterned illumination variants are also used to actively encode depth or surface information into captured images.
- ### Relationships
	- subClassOf:: [[Camera Calibration]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
