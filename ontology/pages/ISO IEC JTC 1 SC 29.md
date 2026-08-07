public:: true

# ISO/IEC JTC 1/SC 29
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c513ab192f7cc4b999e277165b585d53176149fa80b7193903fd3c78b9bc7971",
  "@type": "Page",
  "vc:slug": "iso-iec-jtc1-sc29",
  "title": "ISO/IEC JTC 1/SC 29",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards-organization",
      "vc:label": "Standards Organization"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-jtc-1",
      "vc:label": "ISO/IEC JTC 1"
    },
    {
      "@id": "urn:visionflow:linked:mpeg",
      "vc:label": "MPEG"
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
  "@id": "urn:ngm:class:iso-iec-jtc1-sc29",
  "@type": "Class",
  "label": "ISO/IEC JTC 1/SC 29",
  "definition": "ISO/IEC JTC 1/SC 29 is the joint ISO and IEC subcommittee for coding of audio, picture, multimedia, and hypermedia information — the home of the JPEG and MPEG families of standards. Its working groups have produced the compression and carriage formats that underpin digital imaging and video worldwide, from JPEG and JPEG 2000 for still images through MPEG-2, AVC, HEVC, and VVC for video to immersive and point-cloud coding, making it the primary international venue for standardising how visual media are represented, compressed, and transported.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:standards-organization",
    "label": "Standards Organization"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:iso-iec-jtc-1",
        "label": "ISO/IEC JTC 1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      },
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mpeg",
        "label": "MPEG"
      },
      {
        "@id": "urn:ngm:class:codec",
        "label": "Codec"
      },
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "ISO/IEC JTC 1/SC 29 is the joint ISO and IEC subcommittee for coding of audio, picture, multimedia, and hypermedia information — the home of the JPEG and MPEG families of standards. Its working groups have produced the compression and carriage formats that underpin digital imaging and video worldwide, from JPEG and JPEG 2000 for still images through MPEG-2, AVC, HEVC, and VVC for video to immersive and point-cloud coding, making it the primary international venue for standardising how visual media are represented, compressed, and transported."

- ### Semantic Classification
  - owl-class:: standards:IsoIecJtc1Sc29
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Standards Organization]]
  - part-of:: [[ISO IEC JTC 1]]
  - enables:: [[Video Compression]], [[Image Processing]]
  - related-to:: [[MPEG]]

- ### Content

  ## Definition

  **ISO/IEC JTC 1/SC 29** ("Coding of audio, picture, multimedia and hypermedia information") is the subcommittee of the joint ISO/IEC information-technology committee that standardises how audiovisual content is digitally represented. Formed in 1991, it institutionalised two of the most consequential working groups in computing history: JPEG (the Joint Photographic Experts Group, shared with ITU-T) and [[MPEG]] (the Moving Picture Experts Group), whose outputs define how virtually all photographs, video streams, and broadcast media are compressed and carried.

  Its still-image portfolio runs from the original JPEG standard (ISO/IEC 10918) through JPEG 2000, JPEG XR, lossless and high-throughput variants, to JPEG XL and format work on high-dynamic-range and light-field imagery. On the moving-picture side, MPEG-1 and MPEG-2 enabled Video CD, DVD, and digital television; MPEG-4 AVC/H.264 (jointly with ITU-T VCEG), HEVC/H.265, and VVC/H.266 successively halved bitrates for equivalent quality and now dominate internet video delivery. Beyond codecs, SC 29 standardises carriage and systems layers — the ISO base media file format underlying MP4 and CMAF, MPEG-2 transport streams, and DASH adaptive streaming — plus audio coding (MP3, AAC, MPEG-H) and newer work on point-cloud, immersive video, and AI-based media coding.

  As a subcommittee, SC 29 is a sibling of bodies such as SC 17 (identification cards), SC 27 (security techniques), and SC 42 (artificial intelligence) under [[ISO IEC JTC 1]]; its distinct competence is media coding. For image processing systems, SC 29 standards define the interchange substrate: the formats content arrives in, the compression artefacts algorithms must tolerate, and the conformance points products are tested against.

  ## Current Landscape

  SC 29's current programme reflects the shift toward immersive, machine-oriented and learning-based media. (Since a 2020 reorganisation, the historic MPEG committee was dissolved into working groups WG 2-8 under SC 29, with JPEG as WG 1.)

  - **JPEG AI** (ISO/IEC 6048), the first learning-based image-coding standard and a joint project with ITU-T SG 21, reached its Part 1 (Core Coding System) as a published International Standard in October 2024, reporting compression gains above 25% over the VVC intra anchor; JPEG AI version 2 entered its call-for-proposals cycle in 2025.
  - **JPEG Trust** (ISO/IEC 21617-1), addressing authenticity and provenance of generative-AI content in coordination with the C2PA, was published as an International Standard in July 2024.
  - **JPEG Pleno learning-based point cloud coding** (ISO/IEC 21794-6) reached FDIS in 2025 with the International Standard published that year, extending the plenoptic framework to AI-based point-cloud compression with a royalty-free baseline goal.
  - On the MPEG side, the **second edition of MPEG Immersive Video** (6DoF playback with motion parallax) and **V3C/V-PCC** (ISO/IEC 23090-5, fourth edition to FDIS) advanced in 2025-2026, alongside newer tracks on dynamic mesh compression, video/feature coding for machines and Gaussian-splat coding.
  - Codec economics still shape the field: royalty-bearing HEVC/VVC coexist with the Alliance for Open Media's royalty-free AV1. National mirror committees (in the UK, through BSI) coordinate participation, and SC 29's outputs remain among the most widely deployed standards ever published.

  **Sources**:
  - https://jtc1info.org/wp-content/uploads/2023/12/SC29-AI-Standards-Gary-J-Sullivan.pdf
  - https://jpeg.org/items/20250521_press.html
  - https://assets.iec.ch/further_informations/3403/ISO-IEC%20JTC%201_N17022_JTC%201-SC%2029%20Business%20Plan%202024.pdf?0218T00
  - https://records.sigmm.org/category/pub_standards/
