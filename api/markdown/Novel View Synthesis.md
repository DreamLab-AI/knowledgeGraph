public:: true

# Novel View Synthesis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:novel-view-synthesis",
  "@type": "Page",
  "vc:slug": "novel-view-synthesis",
  "title": "Novel View Synthesis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:novel-view-synthesis",
  "@type": "Class",
  "label": "Novel View Synthesis",
  "definition": "Novel view synthesis (NVS) is a computer vision and computer graphics task that involves generating photorealistic images of a scene from camera viewpoints not present in the original set of captured images, given a collection of reference photographs and their corresponding camera poses. The task requires learning an implicit or explicit representation of the scene's geometry and appearance that supports free-viewpoint rendering with high fidelity. It is a foundational capability for immersive media, telepresence, and spatial computing applications, and has been dramatically advanced by neural scene representations such as Neural Radiance Fields and 3D Gaussian Splatting.",
  "domain": "graphics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision-task", "label": "Computer Vision Task"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:neural-radiance-field", "label": "Neural Radiance Field"},
      {"@id": "urn:ngm:class:3-d-gaussian-splatting", "label": "3D Gaussian Splatting"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:volumetric-capture", "label": "Volumetric Capture"},
      {"@id": "urn:ngm:class:virtual-reality-telepresence", "label": "Virtual Reality Telepresence"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Novel View Synthesis]] is the computational problem of rendering photorealistic images from arbitrary camera positions given only a sparse or dense set of reference photographs, requiring the system to infer the full 3D scene geometry and appearance in order to synthesise viewpoints never directly observed.

- ### Relationships
  - [[Novel View Synthesis]] is a subclass of [[Computer Vision Task]] and draws on [[Differentiable Rendering]] to optimise scene representations end-to-end from image supervision. Its most influential instantiations use [[Neural Radiance Field]] (NeRF) and [[3D Gaussian Splatting]] representations. Accurate [[Camera Calibration]] and [[Depth Estimation]] are prerequisites for high-quality NVS pipelines. The capability directly enables [[Volumetric Capture]] for immersive media and [[Virtual Reality Telepresence]], and it relates closely to [[Neural Rendering]] and [[Photogrammetry]] in the broader ecosystem of 3D scene understanding.

- ### Content
  - View interpolation and image-based rendering techniques date to the 1990s (light-field rendering, Lumigraph, view morphing), but these methods required dense multi-camera capture rigs and produced blurry results with sparse inputs. The 2020 NeRF paper by Mildenhall et al. marked a paradigm shift: by representing a scene as a continuous volumetric function encoded in a multi-layer perceptron (MLP) and using volume rendering to synthesise images from any viewpoint, NeRF achieved photorealistic NVS from as few as 100 photographs. The technique sparked an explosion of follow-on work addressing training speed, scene dynamics, and editability.

  - Modern NVS systems combine three core components: a scene representation (implicit neural field, explicit voxel grid, or primitive-based such as 3D Gaussians), a differentiable renderer that projects the representation into pixel values along camera rays, and an optimisation procedure that minimises the difference between rendered and reference images. 3D Gaussian Splatting (2023) replaced the MLP scene representation with millions of 3D Gaussians, each carrying position, covariance, opacity, and spherical harmonic colour coefficients, enabling real-time rendering on consumer GPUs while preserving photo-realistic quality. Generalised NVS models (e.g. ZeroNVS, Zero123) extend the paradigm to single-image-to-3D inference using diffusion model priors.

  - Novel view synthesis has direct applications in: film visual effects (virtual camera moves through on-set captures); e-commerce product visualisation (360-degree views from sparse smartphone photos); XR and metaverse content creation (converting 2D photographs into immersive 3D scenes); autonomous driving (generating training data from rare viewpoints); and telepresence (free-viewpoint video conferencing). The ability to synthesise photorealistic views from sparse captures dramatically reduces the cost and complexity of 3D content production.

  - In 2024–2025, real-time 3D Gaussian Splatting achieves interactive frame rates on laptop GPUs and mobile hardware via techniques such as 2D Gaussian Splatting and compact Gaussian representations. Feed-forward reconstruction models (Splatt3R, MASt3R, DUSt3R) can produce a 3D scene from uncalibrated images in seconds without per-scene optimisation, enabling deployment in consumer applications. Video NVS — synthesising novel viewpoints from video streams of dynamic scenes with moving subjects — remains an active research frontier with companies such as Luma AI, Metahuman, and Wonder Dynamics integrating these capabilities into creative production pipelines.