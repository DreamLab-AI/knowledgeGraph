public:: true

# Lossy Compression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af5b1cab707b00cf593d2de45bb621d7b86637c3ec1428e5a4e7efaeec8f7596",
  "@type": "Page",
  "vc:slug": "lossy-compression",
  "title": "Lossy Compression",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-compression",
      "vc:label": "Data Compression"
    },
    {
      "@id": "urn:visionflow:linked:lossless-compression",
      "vc:label": "Lossless Compression"
    },
    {
      "@id": "urn:visionflow:linked:adaptive-bitrate-streaming",
      "vc:label": "Adaptive Bitrate Streaming"
    },
    {
      "@id": "urn:visionflow:linked:audio-codec",
      "vc:label": "Audio Codec"
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
  "@id": "urn:ngm:class:lossy-compression",
  "@type": "Class",
  "label": "Lossy Compression",
  "definition": "Data compression that achieves high ratios by permanently discarding information judged perceptually or statistically less important, guided by rate-distortion theory and models of human vision and hearing; the basis of virtually all deployed image, audio and video coding — JPEG, MP3, AAC, Opus, H.264/HEVC/AV1 — where transform coding, quantisation and entropy coding together trade reconstruction fidelity against bitrate, in contrast to lossless methods that guarantee exact reconstruction.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-compression",
    "label": "Data Compression"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:adaptive-bitrate-streaming",
        "label": "Adaptive Bitrate Streaming"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
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
  - "Data compression that achieves high ratios by permanently discarding information judged perceptually or statistically less important, guided by rate-distortion theory and models of human vision and hearing; the basis of virtually all deployed image, audio and video coding — JPEG, MP3, AAC, Opus, H.264/HEVC/AV1 — where transform coding, quantisation and entropy coding together trade reconstruction fidelity against bitrate, in contrast to lossless methods that guarantee exact reconstruction."

- ### Semantic Classification
  - owl-class:: data:LossyCompression
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Data Compression]]
  - contrasts-with:: [[Lossless Compression]]
  - enables:: [[Adaptive Bitrate Streaming]]

- ### Content

  ## Definition

  **Lossy compression** reduces data size by throwing information away — irreversibly. Where [[Lossless Compression]] exploits only statistical redundancy and reconstructs the original bit-for-bit, lossy methods additionally exploit *irrelevance*: components of a signal that a human observer will not miss. The theoretical foundation is Shannon's rate-distortion theory, which characterises the minimum bitrate achievable for a given tolerated distortion; practical codecs approach this bound using perceptual models — the human eye's lower sensitivity to fine colour detail than to luminance, the ear's masking of quiet tones near loud ones — so that the discarded information is the least noticeable.

  The canonical pipeline has three stages. A transform (the discrete cosine transform in JPEG and most video codecs, modified DCT in audio, wavelets in JPEG 2000) concentrates signal energy into few coefficients. Quantisation — the only lossy step — coarsens those coefficients, discarding precision according to perceptual weighting and a quality setting. Entropy coding then packs the quantised symbols losslessly. Video codecs add temporal prediction: motion estimation finds how blocks move between frames so that only residuals need coding, which is why H.264, HEVC and AV1 achieve ratios of 100:1 and beyond. The fidelity-bitrate trade-off is continuous, which is what makes [[Adaptive Bitrate Streaming]] possible: the same content is encoded at several quality rungs and clients switch between them as bandwidth fluctuates.

  Lossy compression is appropriate for perceptual media consumed by humans; it is categorically wrong for executables, text, medical imagery used diagnostically, or any archival master, where lossless methods or no compression are mandated. Repeated lossy re-encoding compounds error — generation loss — which is why production workflows keep lossless or lightly compressed mezzanine files.

  ## Current Landscape

  Royalty questions and streaming economics drive codec evolution: AV1 (AOMedia, royalty-free) and HEVC/VVC (licensed) compete for video, AVIF and JPEG XL for images, while Opus dominates real-time audio and AAC persists in broadcast. Neural compression is the research frontier — learned image codecs surpass JPEG substantially at equal bitrate, and generative video codecs promise order-of-magnitude gains by synthesising plausible detail rather than transmitting it, raising fresh questions about fidelity versus hallucination. Standardisation bodies (JVET, AOMedia, MPEG) are actively studying learned tools for post-VVC generations, and the same rate-distortion machinery now underpins compression of neural network weights themselves for edge deployment.
