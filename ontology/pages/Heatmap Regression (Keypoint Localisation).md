public:: true

# Heatmap Regression (Keypoint Localisation)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4e833f80ff888946b09b991656338f054eeb90a377c805a1c2bd0ccef46b65c0",
  "@type": "Page",
  "vc:slug": "heatmap-regression",
  "title": "Heatmap Regression (Keypoint Localisation)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regression",
      "vc:label": "Regression"
    },
    {
      "@id": "urn:visionflow:linked:keypoint-detection",
      "vc:label": "Keypoint Detection"
    },
    {
      "@id": "urn:visionflow:linked:pose-estimation",
      "vc:label": "Pose Estimation"
    },
    {
      "@id": "urn:visionflow:linked:bounding-box-regression",
      "vc:label": "Bounding Box Regression"
    },
    {
      "@id": "urn:visionflow:linked:non-maximum-suppression",
      "vc:label": "Non Maximum Suppression"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:heatmap-regression",
  "@type": "Class",
  "label": "Heatmap Regression (Keypoint Localisation)",
  "definition": "A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (or a sub-pixel refinement) of each predicted heatmap. It is the dominant formulation for human pose estimation, facial landmark detection, and anatomical landmark localisation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:regression",
    "label": "Regression"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:keypoint-detection",
        "label": "Keypoint Detection"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bounding-box-regression",
        "label": "Bounding Box Regression"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:non-maximum-suppression",
        "label": "Non Maximum Suppression"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (or a sub-pixel refinement) of each predicted heatmap."

- ### Semantic Classification
  - owl-class:: machine-learning:HeatmapRegression
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Regression]]
  - part-of:: [[Keypoint Detection]]
  - contrasts-with:: [[Bounding Box Regression]]
  - related-to:: [[Non Maximum Suppression]]

- ### Content

  ## Definition

  **Heatmap regression** reformulates keypoint localisation as dense spatial prediction: rather than asking a network to emit `(x, y)` coordinates through fully connected layers, the network predicts one confidence map per landmark, and the keypoint is read off as the peak of that map. Ground truth is synthesised by placing an unnormalised 2D Gaussian at each annotated location, and training minimises a pixel-wise loss (typically mean squared error) between predicted and target maps.

  The formulation has two decisive advantages over direct coordinate regression. First, it preserves the translation-equivariant structure of a [[Convolutional Neural Network]] end to end — no flattening layer destroys spatial information — so localisation accuracy scales with feature-map resolution. Second, the Gaussian targets provide a smooth, tolerant supervision signal: nearby predictions receive partial credit, which stabilises optimisation and absorbs annotation noise. These properties made heatmap regression the standard head design in landmark architectures from Stacked Hourglass (2016) through HRNet (2019) to ViTPose (2022).

  It contrasts with [[Bounding Box Regression]], which regresses a small set of continuous box offsets per object: boxes localise extended regions coarsely, whilst heatmaps localise points precisely. Many detection-and-pose pipelines combine the two — a detector proposes person boxes, then a heatmap-based network localises joints within each crop (top-down pose estimation). Keypoint-style detectors such as CenterNet invert the relationship, using centre-point heatmaps to replace anchor boxes and dispense with [[Non Maximum Suppression]].

  ## Technical Details

  - **Target encoding**: ground truth `H_k(p) = exp(−‖p − μ_k‖² / 2σ²)` for landmark `k` at position `μ_k`; `σ` controls the tolerance radius and is a sensitive hyperparameter.
  - **Decoding**: naive argmax quantises to the output stride; sub-pixel schemes (quarter-offset shifts, DARK's Taylor-expansion decoding, soft-argmax integral regression) recover continuous coordinates.
  - **Losses**: MSE on maps is standard; focal-style variants (CornerNet, CenterNet) down-weight easy negatives for sparse peaks; Adaptive Wing loss targets the foreground–background imbalance in facial landmarking.
  - **Trade-offs**: memory and computation grow with map resolution; quantisation error bounds accuracy at low resolution; soft-argmax restores end-to-end differentiability at the cost of sensitivity to distractor peaks.
  - **Applications**: 2D/3D human pose estimation, facial and hand landmarks, anatomical landmarks in medical imaging, and centre/corner heatmaps in anchor-free object detection.

  ## Current Landscape

  - **Still the accuracy leader**: heatmap-based methods remain the top-performing top-down paradigm on COCO. Transformer-backbone ViTPose set 80.9 AP on COCO test-dev, and a November 2025 method (RSPose) reports 79.9 AP on COCO-val with ViTPose-H, so 2D-Gaussian MSE heatmaps are still the reference formulation for keypoint localisation.
  - **Coordinate-classification challengers**: SimCC and RTMPose (2023) reframe localisation as two 1D per-axis classification problems, reaching heatmap-competitive accuracy at lower FLOPs and mitigating quantisation error without high-resolution maps — the main efficiency-oriented alternative to 2D heatmaps for real-time and edge deployment.
  - **Sub-pixel and continuous decoding (2024)**: work such as NerPE (NeurIPS 2024) uses an implicit neural representation to regress confidence at arbitrary resolution, giving continuous sub-pixel localisation (e.g. +6.1 AP over HRNet at low input resolution) and decoupling accuracy from feature-map stride.
  - **Video and loss refinements**: motion-aware heatmap regression (IJCAI 2024) injects inter-frame motion into the Gaussian targets for video pose, and ranking-based losses (2025) better align heatmap training with the mAP evaluation metric than plain MSE.

  **Sources**:
  - https://arxiv.org/html/2212.04246v3
  - https://papers.nips.cc/paper_files/paper/2024/file/b90cb10d4dae058dd167388e76168c1b-Paper-Conference.pdf
  - https://arxiv.org/html/2511.13857v1

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
