public:: true

# Image Compression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:07078452ff6af27b8ac67621aba7ea7efe0ac5c463014ed2cdc78b11d5995604",
  "@type": "Page",
  "vc:slug": "image-compression",
  "title": "Image Compression",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-compression",
      "vc:label": "Data Compression"
    },
    {
      "@id": "urn:visionflow:linked:entropy-coding",
      "vc:label": "Entropy Coding"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
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
  "@id": "urn:ngm:class:image-compression",
  "@type": "Class",
  "label": "Image Compression",
  "definition": "The process of encoding digital images with fewer bits by exploiting spatial redundancy, statistical structure, and the limits of human visual perception. Lossless methods (PNG, lossless WebP) permit exact reconstruction, while lossy methods (JPEG, HEIC, AVIF, JPEG XL) discard perceptually insignificant detail through transform coding, quantisation, and entropy coding to achieve far higher ratios, trading fidelity against file size for storage and transmission.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-compression",
    "label": "Data Compression"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:entropy-coding",
        "label": "Entropy Coding"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:discrete-cosine-transform",
        "label": "Discrete Cosine Transform"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      },
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
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
  - "The process of encoding digital images with fewer bits by exploiting spatial redundancy, statistical structure, and the limits of human visual perception. Lossless methods (PNG, lossless WebP) permit exact reconstruction, while lossy methods (JPEG, HEIC, AVIF, JPEG XL) discard perceptually insignificant detail through transform coding, quantisation, and entropy coding to achieve far higher ratios, trading fidelity against file size for storage and transmission."

- ### Semantic Classification
  - owl-class:: data:ImageCompression
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Data Compression]]
  - uses:: [[Entropy Coding]]
  - uses:: [[Quantisation]]
  - related-to:: [[Image Processing]]

- ### Content

  ## Definition

  **Image compression** reduces the number of bits needed to represent a digital image. An uncompressed 12-megapixel photograph occupies roughly 36 MB at 8 bits per channel; compression exploits three sources of reducible information: **spatial redundancy** (neighbouring pixels are highly correlated), **statistical redundancy** (symbol distributions are far from uniform, which [[Entropy Coding]] converts into shorter codes), and **perceptual irrelevance** (the human visual system is far less sensitive to fine chrominance detail and high-frequency texture than to luminance structure).

  The classical lossy pipeline, exemplified by JPEG (1992), is transform coding: convert RGB to a luma/chroma colour space and subsample chroma; partition into blocks and apply the [[Discrete Cosine Transform]] to concentrate energy into few coefficients; apply [[Quantisation]] — the sole lossy step — scaled by perceptual weighting; then entropy-code the result with Huffman or arithmetic coding. Successors changed the ingredients while keeping the architecture: JPEG 2000 used wavelets; WebP, HEIC, and AVIF reuse intra-frame tools from the VP8, HEVC, and AV1 video codecs respectively; JPEG XL combines a modern DCT path with a lossless mode and bit-exact recompression of legacy JPEGs. Lossless formats (PNG, lossless WebP/JPEG XL) instead combine spatial prediction with dictionary or entropy coding, achieving around 2–3:1 on photographs versus 10–50:1 for perceptually transparent lossy coding.

  Image compression contrasts with [[Video Compression]] chiefly in what redundancy is available: video adds the temporal dimension, removed through motion estimation and inter-frame prediction, whereas a still image coder has only spatial and statistical structure to work with — which is why modern still formats are essentially a video codec's intra frame.

  ## Current Landscape

  - **Web formats**: JPEG remains ubiquitous; WebP has near-universal browser support; AVIF offers roughly 30–50% smaller files than JPEG at equivalent quality and is now supported in all major browsers; JPEG XL, technically strong, has fragmented support after Chrome's removal but Apple platform adoption revived it.
  - **Quality measurement**: PSNR and SSIM are giving way to perceptual metrics (MS-SSIM, butteraugli, LPIPS) that better track human judgements, which matters because codecs are tuned against their evaluation metric.
  - **Learned compression**: neural codecs using variational autoencoders with hyperpriors (Ballé et al.) and, more recently, diffusion-based decoders exceed classical codecs in rate–distortion terms; standardisation is underway in JPEG AI. Trade-offs remain decode cost and non-deterministic detail synthesis.
  - **Systems context**: responsive image pipelines (srcset, CDN transcoding) routinely store one master and derive per-device variants, making the codec choice an infrastructure decision as much as a format one.
