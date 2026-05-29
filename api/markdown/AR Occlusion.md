public:: true

# AR Occlusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ar-occlusion",
  "@type": "Page",
  "vc:slug": "ar-occlusion",
  "title": "AR Occlusion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ar-occlusion",
  "@type": "Class",
  "label": "AR Occlusion",
  "definition": "AR occlusion is the computational technique by which virtual objects rendered in an augmented reality scene are correctly hidden or partially hidden by real-world geometry that physically lies in front of them from the viewer's perspective. Achieving occlusion requires real-time estimation of the depth structure of the physical scene, typically via depth sensors or monocular depth estimation neural networks, so that the rendering pipeline can apply correct depth ordering between real and virtual content. Without occlusion, virtual objects appear to float unconvincingly in front of all physical surfaces regardless of their spatial relationship.",
  "domain": "spatial",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:scene-understanding", "label": "Scene Understanding"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:occlusion-rendering", "label": "Occlusion Rendering"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[AR Occlusion]] is the technique of correctly compositing virtual content behind real-world objects in an [[Augmented Reality]] scene, resolving the depth relationship between physical and digital geometry. It depends on [[Depth Estimation]] of the live camera feed—either from active depth sensors such as LiDAR or from [[Computer Vision]] neural networks inferring depth from RGB imagery—to generate a depth mask that the rendering pipeline uses to occlude virtual geometry. Without occlusion, the perceptual coherence of mixed-reality scenes is broken, undermining the sense of virtual objects occupying physical space.

- ### Relationships
  - AR occlusion uses [[Depth Estimation]] and [[Scene Understanding]] to determine real-world geometry, and [[Computer Vision]] techniques to process the sensor data in real time. It enables convincing [[Real-Time Rendering]] of composited scenes and complements [[Spatial Mapping]] by leveraging the same geometric representation of the environment. It is closely related to [[Occlusion Rendering]] as a general graphics concept and is a central challenge of all [[Mixed Reality]] platforms.

- ### Content
  - Occlusion has been a recognised challenge in AR since the field's formation in the early 1990s, articulated in foundational work by Milgram and Kishino's Reality-Virtuality Continuum (1994). Early AR systems lacked real-time depth sensing capability and typically rendered virtual content as always-visible overlays, an approach that degraded plausibility for any scenario where real objects should visually intersect virtual ones. Research interest intensified as mobile AR platforms proliferated, creating consumer-facing expectations for visual coherence.

  - Technically, AR occlusion pipelines consist of three phases: depth acquisition (LiDAR scan, structured light, or neural depth estimation), mesh or point cloud reconstruction of the scene, and depth-buffer-aware rendering that tests each virtual pixel against the reconstructed scene depth. On-device LiDAR, available on Apple's iPad Pro and iPhone 12 Pro series, enables high-accuracy occlusion at interactive framerates. Neural monocular depth estimation—using architectures such as DPT or MiDaS—trades some accuracy for compatibility with camera-only devices.

  - ARKit (Apple) introduced People Occlusion in 2019, enabling real-time occlusion of virtual content by detected human bodies without LiDAR, using a segmentation neural network running on the Neural Engine. ARCore's Depth API similarly provides depth-based occlusion for Android devices. These platform capabilities have brought occlusion from a research feature to a baseline expectation for production AR applications in entertainment, retail, and industrial use cases.

  - By 2024–2025, the combination of LiDAR-equipped devices and improved neural depth networks has made AR occlusion achievable on a wide range of hardware. Remaining challenges include dynamic scene objects whose geometry changes faster than depth estimation can track, and transparent or reflective surfaces that confound depth sensors. Research into real-time neural radiance field approaches (NeRF-based) for scene reconstruction offers a path toward higher-fidelity occlusion for complex scenes.