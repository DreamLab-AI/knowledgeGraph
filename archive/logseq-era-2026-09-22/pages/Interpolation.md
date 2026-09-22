public:: true

# Interpolation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:interpolation", "@type":"Page", "title":"Interpolation", "vc:slug":"interpolation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:interpolation",
  "@type":"Class",
  "label":"Interpolation",
  "definition":"Interpolation is the construction of new data points within the range of a discrete set of known points, producing a continuous function that passes through or near the samples. Methods range from simple linear and nearest-neighbour schemes to higher-order polynomial, spline and barycentric formulations, each trading smoothness against computational cost and overshoot. In spatial computing and graphics it underpins resampling, shading, animation between keyframes, and the reconstruction of continuous fields from sparse measurements.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}],
    "hasPart":[{"@id":"urn:ngm:class:linear-interpolation","label":"Linear Interpolation"},{"@id":"urn:ngm:class:spline","label":"Spline"}],
    "uses":[{"@id":"urn:ngm:class:sampling","label":"Sampling"},{"@id":"urn:ngm:class:approximation","label":"Approximation"}],
    "requires":[{"@id":"urn:ngm:class:numerical-analysis","label":"Numerical Analysis"}],
    "enables":[{"@id":"urn:ngm:class:keyframe-animation","label":"Keyframe Animation"},{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}],
    "supports":[{"@id":"urn:ngm:class:rendering","label":"Rendering"},{"@id":"urn:ngm:class:animation","label":"Animation"}],
    "implements":[{"@id":"urn:ngm:class:curve-fitting","label":"Curve Fitting"}],
    "relatedTo":[{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"},{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"},{"@id":"urn:ngm:class:shader","label":"Shader"}],
    "contrastsWith":[{"@id":"urn:ngm:class:extrapolation","label":"Extrapolation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:rasterization","label":"Rasterization"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Interpolation]] estimates unknown values that lie between known sample points, yielding a continuous reconstruction of an underlying function. It is a foundational [[Numerical Methods]] technique.
- Schemes range from nearest-neighbour and [[Linear Interpolation]] through polynomial and [[Spline]] formulations, each balancing smoothness against cost.
- In graphics it drives [[Keyframe Animation]], [[Texture Mapping]] and per-fragment shading inside a [[Shader]].
- More broadly it links [[Sampling]] theory to practical [[Signal Processing]] and field reconstruction.
- ### Overview
- Interpolation answers a recurring question: given measurements at discrete locations, what value should be assigned to a location in between? The answer depends on assumptions about how the underlying quantity behaves.
- The simplest assumption, piecewise-constant behaviour, yields nearest-neighbour interpolation. Assuming local linearity gives linear interpolation; assuming smooth curvature leads to cubic and spline methods.
- Higher-order methods reduce visible artefacts but can introduce overshoot near sharp transitions, a tension formalised by phenomena such as Runge's oscillation.
- In spatial computing, interpolation operates across one, two, three and four dimensions, including bilinear and trilinear sampling of textures and volumes, and temporal blending across animation frames.
- ### Mechanisms
- Linear and bilinear: weighted averages of neighbouring samples, fast and ubiquitous on graphics hardware.
- Polynomial: a single polynomial of degree n-1 through n points, accurate locally but unstable globally at high degree.
- Spline: piecewise low-degree polynomials joined with continuity constraints, giving smooth curves without global instability.
- Barycentric and inverse-distance: weighting schemes for irregular or scattered samples across surfaces and meshes.
- Hermite and Catmull-Rom: tangent-aware schemes favoured for smooth animation paths.
- Hardware filtering: GPUs implement bilinear and trilinear interpolation natively during texture lookup.
- ### Applications
- Resampling images and volumes when scaling, rotating or reprojecting spatial data.
- Smoothing motion between keyframes in animation rigs and skeletal systems.
- Reconstructing continuous fields from sparse sensor readings in mapping and simulation.
- Shading surfaces by interpolating vertex attributes across rasterised primitives.
- Generating intermediate frames and smooth camera trajectories in real-time engines.
- Filling gaps in time series and geospatial datasets prior to analysis.
- ### Relationships
- partOf:: [[Numerical Methods]]
- hasPart:: [[Linear Interpolation]]
- hasPart:: [[Spline]]
- uses:: [[Sampling]]
- uses:: [[Approximation]]
- requires:: [[Numerical Analysis]]
- enables:: [[Keyframe Animation]]
- enables:: [[Texture Mapping]]
- supports:: [[Rendering]]
- supports:: [[Animation]]
- implements:: [[Curve Fitting]]
- relatedTo:: [[Signal Processing]]
- relatedTo:: [[Computer Graphics]]
- relatedTo:: [[Shader]]
- contrastsWith:: [[Extrapolation]]
- bridgesTo:: [[Rasterization]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
