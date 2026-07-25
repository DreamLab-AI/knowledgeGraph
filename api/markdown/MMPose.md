public:: true

# MMPose

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mmpose", "@type":"Page", "title":"MMPose", "vc:slug":"mmpose", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mmpose",
  "@type": "Class",
  "label": "MMPose",
  "definition": "MMPose is an open-source pose estimation toolbox, part of the OpenMMLab project, providing reference implementations, pretrained models and training pipelines for 2D and 3D human and animal pose estimation. It supports a wide range of architectures, including top-down and bottom-up keypoint detectors, and is widely used as a backbone library by downstream research and production systems that require whole-body or hand keypoint estimation, such as DWPose. Its modular configuration system allows researchers to swap backbones, datasets and training schedules without rewriting pipeline code.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:pose-estimation",
      "label": "Pose Estimation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dwpose",
        "label": "DWPose"
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
	- MMPose is an open-source pose estimation toolbox, part of the OpenMMLab project, providing reference implementations, pretrained models and training pipelines for 2D and 3D human and animal pose estimation. It supports a wide range of architectures, including top-down and bottom-up keypoint detectors, and is widely used as a backbone library by downstream research and production systems that require whole-body or hand keypoint estimation, such as DWPose. Its modular configuration system allows researchers to swap backbones, datasets and training schedules without rewriting pipeline code.
- ### Relationships
	- partOf:: [[Pose Estimation]]
	- relatedTo:: [[DWPose]]
