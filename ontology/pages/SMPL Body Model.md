public:: true

# SMPL Body Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:smpl-body-model",
  "@type": "Page",
  "vc:slug": "smpl-body-model",
  "title": "SMPL Body Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:smpl-body-model",
  "@type": "Class",
  "label": "SMPL Body Model",
  "definition": "SMPL (Skinned Multi-Person Linear model) is a parametric 3D human body model that represents body shape and pose with a low-dimensional set of parameters driving a deformable triangle mesh. It separates identity-dependent shape blend shapes from pose-dependent corrective deformations, enabling realistic articulated bodies that fit motion capture and image data. It is a foundational representation in human pose and shape estimation pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"},
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The SMPL Body Model is a parametric, skinned 3D human mesh used widely in [[Computer Vision]] to represent body shape and articulated pose with a compact parameter set. It is a core target representation for [[Pose Estimation]] systems.
- ### Content
  - SMPL decomposes a body into identity shape blend shapes and pose-dependent corrective blend shapes applied via linear blend skinning over a fixed-topology mesh. This factorisation lets it be fitted to [[Motion Capture]] markers, depth scans, or monocular images, making it a standard intermediary for reconstructing and re-animating human bodies in graphics and vision research.
