public:: true

# Motion Estimation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:motion-estimation", "@type":"Page", "title":"Motion Estimation", "vc:slug":"motion-estimation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:motion-estimation",
  "@type":"Class",
  "label":"Motion Estimation",
  "definition":"Motion estimation is the process of determining motion vectors that describe how regions of one video frame map to corresponding regions in another, capturing the apparent movement of objects and the camera between frames. It is the computational heart of inter-frame video compression, where predicting a block from a previously coded frame removes temporal redundancy. The same techniques underpin optical-flow analysis and frame interpolation in computer vision.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:video-compression","label":"Video Compression"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:video-compression","label":"Video Compression"}],
    "hasPart":[{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}],
    "uses":[{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"},{"@id":"urn:ngm:class:optical-flow","label":"Optical Flow"}],
    "enables":[{"@id":"urn:ngm:class:video-compression","label":"Video Compression"},{"@id":"urn:ngm:class:bitrate","label":"Bitrate"}],
    "supports":[{"@id":"urn:ngm:class:video-codec","label":"Video Codec"},{"@id":"urn:ngm:class:hevc","label":"HEVC"}],
    "requires":[{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}],
    "implements":[{"@id":"urn:ngm:class:lossy-compression","label":"Lossy Compression"}],
    "relatedTo":[{"@id":"urn:ngm:class:optical-flow","label":"Optical Flow"},{"@id":"urn:ngm:class:codec","label":"Codec"},{"@id":"urn:ngm:class:entropy-coding","label":"Entropy Coding"}],
    "contrastsWith":[{"@id":"urn:ngm:class:image-compression","label":"Image Compression"}],
    "bridgesTo":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Motion Estimation is a [[Video Compression]] technique that computes motion vectors relating regions across frames, closely tied to [[Optical Flow]] and feeding a [[Video Codec]] through [[Signal Processing]].
- By predicting a block from a previously coded reference frame, it removes temporal redundancy and lowers [[Bitrate]].
- ### Overview
- Successive frames of natural video are highly similar; most change between them is the displacement of objects and the camera. Motion estimation quantifies that displacement so a codec can transmit only the small residual difference rather than a whole new frame.
- The classic approach is block matching: the encoder searches a reference frame for the region that best matches each block of the current frame, recording the offset as a motion vector. The decoder uses the same vectors to reconstruct the predicted frame, to which the residual is added.
- Search strategy trades quality against computation, ranging from exhaustive full search to fast heuristics such as diamond and hexagon search. Subpixel refinement and overlapped block compensation further improve prediction accuracy.
- ### Mechanisms
- Block matching minimises a cost such as sum of absolute differences between a candidate block and its reference.
- Motion vectors encode horizontal and vertical displacement, often to subpixel precision via interpolation.
- Hierarchical and predictive search reduce the candidate space using results from coarser scales or neighbouring blocks.
- Motion compensation reconstructs predicted frames so that only the residual must be coded.
- Bidirectional prediction references both past and future frames to handle occlusion and reveal.
- ### Applications
- Inter-frame coding in [[HEVC]], H.264, AV1, and other [[Video Codec]] standards.
- Streaming and broadcast pipelines that must minimise [[Bitrate]] at a target quality.
- Frame-rate conversion and video stabilisation that interpolate intermediate frames.
- Computer-vision tasks such as tracking and [[Optical Flow]] estimation, increasingly via [[Machine Learning]].
- ### Relationships
- partOf:: [[Video Compression]]
- hasPart:: [[Signal Processing]]
- uses:: [[Signal Processing]]
- uses:: [[Optical Flow]]
- enables:: [[Video Compression]]
- enables:: [[Bitrate]]
- supports:: [[Video Codec]]
- supports:: [[HEVC]]
- requires:: [[Signal Processing]]
- implements:: [[Lossy Compression]]
- relatedTo:: [[Optical Flow]]
- relatedTo:: [[Codec]]
- relatedTo:: [[Entropy Coding]]
- contrastsWith:: [[Image Compression]]
- bridgesTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
