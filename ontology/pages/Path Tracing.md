public:: true

# Path Tracing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:path-tracing", "@type":"Page", "title":"Path Tracing", "vc:slug":"path-tracing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:path-tracing",
  "@type":"Class",
  "label":"Path Tracing",
  "definition":"Path tracing is a physically based rendering algorithm that estimates the rendering equation by stochastically sampling complete light-transport paths from the camera through a scene to light sources. It uses Monte Carlo integration over recursive ray bounces to compute unbiased estimates of global illumination, including soft shadows, indirect lighting, and caustics. Image noise decreases as the square root of the number of samples, making convergence and denoising central practical concerns.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:physically-based-rendering","label":"Physically Based Rendering"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:physically-based-rendering","label":"Physically Based Rendering"}],
    "hasPart":[{"@id":"urn:ngm:class:ray-tracing","label":"Ray Tracing"},{"@id":"urn:ngm:class:importance-sampling","label":"Importance Sampling"}],
    "implements":[{"@id":"urn:ngm:class:monte-carlo-integration","label":"Monte Carlo Integration"},{"@id":"urn:ngm:class:global-illumination","label":"Global Illumination"}],
    "uses":[{"@id":"urn:ngm:class:gpu","label":"GPU"}],
    "enables":[{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"}],
    "contrastsWith":[{"@id":"urn:ngm:class:rasterization","label":"Rasterisation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
    "relatedTo":[{"@id":"urn:ngm:class:graphics-pipeline","label":"Graphics Pipeline"},{"@id":"urn:ngm:class:shader","label":"Shader"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Path tracing solves the rendering equation by tracing stochastic light paths and accumulating their contributions via [[Monte Carlo Integration]]. It is a form of [[Physically Based Rendering]] built atop [[Ray Tracing]] that naturally reproduces [[Global Illumination]].
- ### Overview
- Each pixel is estimated by averaging many random paths that bounce through the scene, capturing how light scatters off surfaces and volumes.
- Because the estimator is unbiased, the rendered image converges to the physically correct result as sample count grows, at the cost of stochastic noise at low sample counts.
- The algorithm unifies many lighting effects, such as soft shadows, colour bleeding, and reflections, that require separate special-case passes in [[Rasterisation]].
- ### Mechanisms
- Rays are cast from the camera; at each surface hit, a new direction is sampled according to the surface reflectance distribution.
- [[Importance Sampling]] biases sampling toward directions and lights that contribute most, reducing variance for the same sample budget.
- Russian roulette terminates low-energy paths probabilistically to keep estimates unbiased while bounding recursion depth.
- Denoising and temporal accumulation reconstruct clean frames from sparse samples, which is what enables interactive [[Real-Time Rendering]] on modern [[GPU]] hardware.
- ### Applications
- Offline film and visual-effects rendering where physical accuracy dominates.
- Architectural and product visualisation requiring believable indirect light.
- Real-time engines using hardware ray-tracing cores with aggressive denoising.
- Reference rendering used to validate faster approximate techniques in [[Computer Graphics]].
- ### Relationships
- partOf:: [[Physically Based Rendering]]
- hasPart:: [[Ray Tracing]]
- hasPart:: [[Importance Sampling]]
- implements:: [[Monte Carlo Integration]]
- implements:: [[Global Illumination]]
- uses:: [[GPU]]
- enables:: [[Real-Time Rendering]]
- contrastsWith:: [[Rasterisation]]
- bridgesTo:: [[Computer Graphics]]
- relatedTo:: [[Graphics Pipeline]]
- relatedTo:: [[Shader]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
