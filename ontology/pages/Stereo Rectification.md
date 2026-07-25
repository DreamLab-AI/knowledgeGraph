public:: true

# Stereo Rectification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:stereo-rectification",
  "@type": "Page",
  "title": "Stereo Rectification",
  "vc:slug": "stereo-rectification",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stereo-rectification",
  "@type": "Class",
  "label": "Stereo Rectification",
  "definition": "Stereo rectification is the process of transforming a pair of stereo camera images so that corresponding points lie on the same horizontal scan line, reducing the search for correspondences from a two-dimensional problem to a one-dimensional one along epipolar lines. It relies on the epipolar geometry of the camera pair, computed from calibration or estimated from matched features, to derive the reprojection homographies applied to each image. Rectified image pairs are the standard input to dense stereo matching algorithms used for depth estimation.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Stereo rectification is the process of transforming a pair of stereo camera images so that corresponding points lie on the same horizontal scan line, reducing the search for correspondences from a two-dimensional problem to a one-dimensional one along epipolar lines. It relies on the epipolar geometry of the camera pair, computed from calibration or estimated from matched features, to derive the reprojection homographies applied to each image. Rectified image pairs are the standard input to dense stereo matching algorithms used for depth estimation.
	- It is a [[Computer Vision]] concept.
- ### Relationships
	- subClassOf:: [[Computer Vision]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
