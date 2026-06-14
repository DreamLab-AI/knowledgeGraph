public:: true

# Optical Flow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optical-flow",
  "@type": "Page",
  "vc:slug": "optical-flow",
  "title": "Optical Flow",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optical-flow",
  "@type": "Class",
  "label": "Optical Flow",
  "definition": "Optical flow is the pattern of apparent motion of objects, surfaces, and edges in a visual scene between consecutive frames of video, caused by relative movement between the observer and the scene. It is computed as a dense or sparse 2D velocity field over the image plane and is used in computer vision for motion estimation, video interpolation, action recognition, and autonomous navigation. Classical algorithms (Horn-Schunck, Lucas-Kanade) and deep learning approaches (RAFT, FlowNet) constitute the main methodological lineages.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:motion-capture-technology", "label": "Motion Capture Technology"},
      {"@id": "urn:ngm:class:autonomous-driving-perception", "label": "Autonomous Driving Perception"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"},
      {"@id": "urn:ngm:class:video-stabilisation", "label": "Video Stabilisation"},
      {"@id": "urn:ngm:class:action-recognition", "label": "Action Recognition"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"},
      {"@id": "urn:ngm:class:image-pyramid", "label": "Image Pyramid"},
      {"@id": "urn:ngm:class:feature-matching", "label": "Feature Matching"},
      {"@id": "urn:ngm:class:brightness-constancy-constraint", "label": "Brightness Constancy Constraint"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consecutive-video-frames", "label": "Consecutive Video Frames"},
      {"@id": "urn:ngm:class:image-gradient", "label": "Image Gradient"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:dense-optical-flow", "label": "Dense Optical Flow"},
      {"@id": "urn:ngm:class:sparse-optical-flow", "label": "Sparse Optical Flow"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:video-understanding", "label": "Video Understanding"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:scene-flow", "label": "Scene Flow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stereo-vision", "label": "Stereo Vision"},
      {"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"},
      {"@id": "urn:ngm:class:image-segmentation", "label": "Image Segmentation"},
      {"@id": "urn:ngm:class:event-camera", "label": "Event Camera"},
      {"@id": "urn:ngm:class:video-compression", "label": "Video Compression"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:neural-radiance-field", "label": "Neural Radiance Field"},
      {"@id": "urn:ngm:class:generative-video-model", "label": "Generative Video Model"},
      {"@id": "urn:ngm:class:robotics-perception", "label": "Robotics Perception"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:motion-vector-field", "label": "Motion Vector Field"},
    {"@id": "urn:ngm:class:apparent-motion-field", "label": "Apparent Motion Field"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Optical flow is a computer vision technique that estimates the 2D velocity field of pixels between consecutive image frames, encoding the apparent motion of surfaces and objects in a scene. Dense optical flow assigns a motion vector to every pixel; sparse methods such as Lucas-Kanade track a selected set of feature points. The computed flow field is a foundational input for [[Motion Capture Technology]], [[Autonomous Driving Perception]], video stabilisation, and [[Differentiable Rendering]] pipelines requiring temporal consistency.

- ### Relationships
  - Optical flow is conceptually related to [[Stereo Vision]] — both solve a correspondence problem across images — and to [[Structure-from-Motion]], which aggregates frame-to-frame motion estimates to reconstruct 3D structure. Modern deep optical flow networks use [[Convolutional Neural Network]] architectures. The estimated motion fields enable [[Autonomous Driving Perception]] systems to reason about dynamic objects and support [[Motion Capture Technology]] by providing dense surface motion priors. [[Differentiable Rendering]] research uses optical flow supervision as a training signal.

- ### Content
  - The theoretical foundation of optical flow was established by Horn and Schunck (1981) and Lucas and Kanade (1981), who independently derived variational and feature-tracking formulations based on the brightness constancy constraint — the assumption that pixel intensity is preserved between frames. These classical methods remained the standard for two decades, supplemented by pyramid-based coarse-to-fine schemes (Anandan, 1989) and later by energy minimisation approaches that incorporated smoothness regularisation to handle occlusions and discontinuities.

  - Deep learning transformed optical flow estimation beginning with FlowNet (2015), the first end-to-end trained convolutional network for dense flow prediction. Subsequent architectures — SpyNet, PWC-Net, and RAFT (Recurrent All-Pairs Field Transforms, 2020) — achieved state-of-the-art performance by learning iterative refinement of dense correlation volumes. RAFT in particular established a new paradigm of computing all-pairs feature similarity and refining flow through recurrent update operators, achieving sub-pixel accuracy on benchmark datasets such as Sintel and KITTI.

  - Applications span autonomous vehicles (segmenting static background from moving objects), medical imaging (tracking cardiac wall motion), film post-production (motion vector extraction for re-timing and compositing), and video compression (where flow informs inter-frame prediction). In robotics, visual odometry systems use sparse optical flow to estimate camera ego-motion without external sensors. Video game engines have incorporated optical flow-based frame interpolation (DLSS Frame Generation, AMD FSR 3) to generate synthetic intermediate frames and increase perceived frame rates.

  - Between 2023 and 2025, optical flow has become a standard intermediate representation in generative video models such as Stable Video Diffusion and Sora, where consistent motion across frames is enforced using flow supervision or flow-warped attention. Event cameras — which detect per-pixel brightness changes asynchronously at microsecond resolution — have spurred a new class of event-based optical flow algorithms capable of handling extremely high-speed motion that frame-based cameras cannot capture. Integration of flow estimation into neural radiance field and 3D Gaussian Splatting pipelines has enabled dynamic scene reconstruction from monocular video.

