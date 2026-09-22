public:: true

# COCO WholeBody

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:coco-wholebody", "@type":"Page", "title":"COCO WholeBody", "vc:slug":"coco-wholebody", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:coco-wholebody",
  "@type":"Class",
  "label":"COCO WholeBody",
  "definition":"COCO WholeBody is an extension of the COCO dataset that adds dense whole-body keypoint annotations, covering the body, hands, feet, and face with 133 keypoints per person rather than the 17 body-only keypoints of the original COCO annotations. It is used to train and benchmark whole-body pose estimation models, including hand and facial landmark detectors used by tools such as DWPose. The extended annotation set enables downstream applications such as gesture recognition, sign-language interpretation, and fine-grained human motion capture from images.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:coco-dataset","label":"COCO Dataset"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:pose-estimation","label":"Pose Estimation"}
    ],
    "requires":[],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- COCO WholeBody is an extension of the COCO dataset that adds dense whole-body keypoint annotations, covering the body, hands, feet, and face with 133 keypoints per person rather than the 17 body-only keypoints of the original COCO annotations. It is used to train and benchmark whole-body pose estimation models, including hand and facial landmark detectors used by tools such as DWPose. The extended annotation set enables downstream applications such as gesture recognition, sign-language interpretation, and fine-grained human motion capture from images.
- ### Relationships
	- subClassOf:: [[COCO Dataset]]
	- enables:: [[Pose Estimation]]
