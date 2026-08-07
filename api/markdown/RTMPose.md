public:: true

# RTMPose
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6465b9c5dfede162674a29ac999e4a0e8eae7a0b22dea43415e764d73eddc8ad",
  "@type": "Page",
  "vc:slug": "rtmpose",
  "title": "RTMPose",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:pose-estimation", "vc:label": "Pose Estimation"},
    {"@id": "urn:visionflow:linked:dwpose", "vc:label": "DWPose"},
    {"@id": "urn:visionflow:linked:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:linked:computer-vision", "vc:label": "Computer Vision"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rtmpose",
  "@type": "Class",
  "label": "RTMPose",
  "definition": "A family of real-time multi-person pose estimation models from OpenMMLab's MMPose project (Jiang et al., 2023) that pairs a lightweight CSPNeXt convolutional backbone with a SimCC coordinate-classification head, treating keypoint localisation as classification over discretised horizontal and vertical bins rather than heatmap regression. RTMPose achieves strong COCO accuracy at real-time speeds on CPU, GPU, and mobile targets, and serves as the teacher and architectural basis for distilled variants such as DWPose.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:pose-estimation",
    "label": "Pose Estimation"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dwpose", "label": "DWPose"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A family of real-time multi-person pose estimation models from OpenMMLab's MMPose project (Jiang et al., 2023) that pairs a lightweight CSPNeXt convolutional backbone with a SimCC coordinate-classification head, treating keypoint localisation as classification over discretised horizontal and vertical bins rather than heatmap regression. RTMPose achieves strong COCO accuracy at real-time speeds on CPU, GPU, and mobile targets, and serves as the teacher and architectural basis for distilled variants such as DWPose."

- ### Semantic Classification
  - owl-class:: machine-learning:RTMPose
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Pose Estimation]]
  - uses:: [[Convolutional Neural Network]]
  - enables:: [[DWPose]]
  - related-to:: [[Computer Vision]]

- ### Content

  ## Definition

  **RTMPose** ("Real-Time Models for Pose estimation") is a top-down [[Pose Estimation]] framework released by OpenMMLab in 2023 (Jiang et al., arXiv:2303.07399) with an explicit industrial brief: close the gap between academic accuracy and deployable latency. A person detector first crops each subject; RTMPose then localises keypoints within each crop. Its distinguishing choice is the **SimCC** head, which discretises the x and y axes into sub-pixel bins and predicts two 1-D classification distributions per keypoint instead of a 2-D heatmap — removing the costly upsampling decoder, reducing quantisation error, and making the whole network a compact feed-forward [[Convolutional Neural Network]].

  The backbone is **CSPNeXt**, a CSP-style architecture tuned for the accuracy-latency frontier, offered in t/s/m/l/x scales. Training folds in modern recipes — heavy data augmentation, exponential moving averages, and self-distillation — so that even the small variants remain competitive: the paper reports roughly 75.8 AP on COCO for RTMPose-m at over 400 FPS on an NVIDIA GTX 1660 Ti and 70+ FPS on a desktop CPU, with mobile builds running in tens of milliseconds via ncnn. Deployment paths through ONNX, TensorRT, and OpenVINO are first-class citizens of the release.

  RTMPose's wider influence in this graph runs through [[DWPose]], which applies two-stage knowledge distillation to RTMPose teachers to produce state-of-the-art whole-body (133-keypoint) estimators; DWPose in turn became the default skeleton extractor in ControlNet-style conditioning pipelines for image and video generation. RTMPose variants also anchor real-time skeletal tracking in AR/VR avatar systems, sports analytics, and human-robot interaction, where per-frame latency budgets rule out heavier heatmap models.

  ## Technical Details

  - **Paradigm**: top-down, two-stage (detector + single-person pose network); pairs naturally with RTMDet detectors.
  - **Head**: SimCC coordinate classification — per-keypoint 1-D logits over discretised x and y with sub-pixel bin width, trained with soft-label KL divergence.
  - **Backbone**: CSPNeXt (t/s/m/l/x); GAU (gated attention unit) refinement in the neck for larger variants.
  - **Benchmarks**: COCO AP from ~68.5 (RTMPose-t) to ~78+ (RTMPose-x, extra data); whole-body and 26-keypoint "body8" checkpoints available.
  - **Deployment**: exports to ONNX Runtime, TensorRT, ncnn, and OpenVINO; official pipelines in MMPose and the rtmlib lightweight runtime.
  - **Successors**: RTMW extends the recipe to whole-body keypoints; DWPose distils RTMPose for higher accuracy at equal cost.
