public:: true

# Tone Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:96640ed3bcd491132a4aab3cff644f639ff8bb8619c33ea95996e2675998ffe3",
  "@type": "Page",
  "vc:slug": "tone-mapping",
  "title": "Tone Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
    },
    {
      "@id": "urn:visionflow:linked:colour-grading",
      "vc:label": "Colour Grading"
    },
    {
      "@id": "urn:visionflow:linked:computational-photography",
      "vc:label": "Computational Photography"
    },
    {
      "@id": "urn:visionflow:linked:photorealism",
      "vc:label": "Photorealism"
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
  "@id": "urn:ngm:class:tone-mapping",
  "@type": "Class",
  "label": "Tone Mapping",
  "definition": "An image processing operation that compresses the high dynamic range of luminance values captured or rendered in a scene into the limited range a display or print medium can reproduce, while preserving perceived contrast, detail, and colour appearance. Tone mapping operators range from simple global curves such as Reinhard and filmic ACES transforms to local, content-adaptive methods, and are a standard final stage in real-time rendering pipelines, HDR photography, and cinematic colour workflows.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:image-processing",
    "label": "Image Processing"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:colour-grading",
        "label": "Colour Grading"
      },
      {
        "@id": "urn:ngm:class:computational-photography",
        "label": "Computational Photography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:photorealism",
        "label": "Photorealism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
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
  - "An image processing operation that compresses the high dynamic range of luminance values captured or rendered in a scene into the limited range a display or print medium can reproduce, while preserving perceived contrast, detail, and colour appearance. Tone mapping operators range from simple global curves such as Reinhard and filmic ACES transforms to local, content-adaptive methods, and are a standard final stage in real-time rendering pipelines, HDR photography, and cinematic colour workflows."

- ### Semantic Classification
  - owl-class:: spatial-computing:ToneMapping
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Image Processing]]
  - part-of:: [[Colour Grading]], [[Computational Photography]]
  - enables:: [[Photorealism]]

- ### Content

  ## Definition

  **Tone mapping** solves a mismatch of ranges: real scenes and physically based renderers produce luminance spanning many orders of magnitude, whereas a standard display reproduces perhaps three. A tone mapping operator (TMO) is the function that maps scene-referred radiance to display-referred values, ideally so that the picture *looks* the way the scene did — retaining highlight detail, shadow separation, and stable colour, rather than clipping to white or crushing to black.

  Operators divide into **global** and **local** families. Global operators apply one curve to every pixel: the Reinhard operator, exponential and logarithmic mappings, and the filmic "S-curves" (Hable/Uncharted 2, ACES RRT+ODT) that emulate the shoulder and toe response of photographic film. Local operators adapt the mapping to each pixel's neighbourhood — bilateral-filter base/detail decomposition, gradient-domain compression, or Durand-Dorsey style methods — recovering more local contrast at the risk of halo artefacts.

  In this graph, tone mapping sits inside [[Colour Grading]] and [[Computational Photography]] as the stage that makes HDR capture and physically based [[Rendering]] presentable, and it is one of the quiet enablers of [[Photorealism]]: a physically correct render viewed without a filmic transform reads as flat and synthetic.

  ## Technical Details

  - **Real-time pipelines**: modern game engines render into HDR (typically RGBA16F) buffers, apply auto-exposure (log-average luminance or histogram-based), then a filmic or ACES tonescale, followed by colour grading LUTs — usually fused into one post-process pass.
  - **ACES**: the Academy Color Encoding System standardises the scene-referred to display-referred transform (RRT + ODT), giving film, VFX, and increasingly games a shared, display-agnostic tonescale.
  - **HDR displays**: HDR10, Dolby Vision, and the PQ (SMPTE ST 2084) and HLG transfer functions shift rather than remove the problem — content must still be tone mapped between mastering luminance and each display's actual peak brightness.
  - **Inverse tone mapping**: expands legacy SDR content toward HDR ranges, and appears inside neural rendering pipelines where training photographs are display-referred.
  - **Perceptual metrics**: TMO quality is assessed with metrics such as TMQI and HDR-VDP, since simple PSNR does not capture appearance preservation.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
