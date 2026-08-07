public:: true

# Mipmap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ec78b127aac0836cfde2049dd8d640b450c17d042e2a61c33617e0b8a7834f6",
  "@type": "Page",
  "vc:slug": "mipmap",
  "title": "Mipmap",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:texture-map",
      "vc:label": "Texture Map"
    },
    {
      "@id": "urn:visionflow:linked:texture-mapping",
      "vc:label": "Texture Mapping"
    },
    {
      "@id": "urn:visionflow:linked:texture-compression",
      "vc:label": "Texture Compression"
    },
    {
      "@id": "urn:visionflow:linked:foveated-rendering",
      "vc:label": "Foveated Rendering"
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
  "@id": "urn:ngm:class:mipmap",
  "@type": "Class",
  "label": "Mipmap",
  "definition": "A precomputed pyramid of progressively half-resolution versions of a texture image, from full size down to a single texel, from which the graphics pipeline selects (and trilinearly blends between) the level whose texel density best matches the on-screen footprint of the surface being shaded; introduced by Lance Williams in 1983, mipmapping eliminates minification aliasing and shimmer, improves texture-cache coherence, and costs only one third more memory than the base image.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:texture-map",
    "label": "Texture Map"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:texture-compression",
        "label": "Texture Compression"
      }
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
  - "A precomputed pyramid of progressively half-resolution versions of a texture image, from full size down to a single texel, from which the graphics pipeline selects (and trilinearly blends between) the level whose texel density best matches the on-screen footprint of the surface being shaded; introduced by Lance Williams in 1983, mipmapping eliminates minification aliasing and shimmer, improves texture-cache coherence, and costs only one third more memory than the base image."

- ### Semantic Classification
  - owl-class:: spatial-computing:Mipmap
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Texture Map]]
  - part-of:: [[Texture Mapping]]
  - related-to:: [[Texture Compression]]
  - enables:: [[Foveated Rendering]]

- ### Content

  ## Definition

  A **mipmap** is a resolution pyramid built from a [[Texture Map]]: level 0 is the original image, and each successive level is a filtered half-resolution copy — 1024², 512², 256², and so on down to 1×1. The name derives from the Latin *multum in parvo* ("much in little"), coined by Lance Williams in his 1983 SIGGRAPH paper "Pyramidal Parametrics". During [[Texture Mapping]], the GPU computes how large one screen pixel is in texture space (the derivative of the texture coordinates) and samples the mip level whose texels most closely match that footprint, so a distant floor tile is read from a small pre-filtered image rather than skipping across the full-resolution one.

  Without mipmapping, minified textures alias badly: sampling a high-frequency texture below its Nyquist rate produces the crawling shimmer familiar from early 3D games. Correct filtering would require averaging all texels under each pixel's footprint every frame; the mipmap precomputes those averages once. Trilinear filtering interpolates between the two nearest levels to hide transitions, and anisotropic filtering samples multiple positions along the footprint's major axis to keep obliquely viewed surfaces sharp where plain mipmapping would over-blur.

  The pyramid costs exactly one third extra memory (the geometric series ¼ + 1/16 + ... = ⅓) and pays for itself in bandwidth: reading small mip levels for distant geometry keeps fetches within the texture cache. This bandwidth economy is what lets the technique serve [[Foveated Rendering]] — peripheral regions of a VR eye buffer can be shaded from coarser mip levels (via reduced shading rate or explicit level-of-detail bias) with no perceptible loss, concentrating fill-rate where the fovea looks.

  ## Technical Details

  The pipeline computes λ = log2(max(‖∂uv/∂x‖, ‖∂uv/∂y‖)·textureSize) per fragment quad and samples ⌊λ⌋ and ⌈λ⌉ for trilinear blending; a per-sampler LOD bias and min/max LOD clamps let engines trade sharpness against shimmer and control streaming. All modern APIs (Vulkan, Direct3D 12, Metal, WebGPU) treat mip chains as first-class subresources: levels can be rendered to individually, generated by compute or blit passes, and streamed independently — virtual (sparse) texturing pages in only the mip tiles a frame actually needs, which is how open-world engines and photogrammetry-heavy XR scenes fit multi-gigabyte texture sets into memory. Mipmaps compose directly with [[Texture Compression]]: block-compressed formats (BC1-7, ASTC, ETC2) store every level compressed, and correct pipelines generate mips before compression, in linear colour space, to avoid gamma-darkening artefacts. Care is needed for non-colour data — normal maps require renormalisation after downsampling, and roughness/normal co-filtering (for example Toksvig or LEAN mapping) prevents specular aliasing when geometric detail collapses into lower mip levels.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
