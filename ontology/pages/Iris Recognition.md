public:: true

# Iris Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb4f14a677ca0a89b6bd63744864760e79b93471cffaeb686687ac4d5e2fbdd8",
  "@type": "Page",
  "vc:slug": "iris-recognition",
  "title": "Iris Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-identification",
      "vc:label": "Biometric Identification"
    },
    {
      "@id": "urn:visionflow:linked:face-recognition",
      "vc:label": "Face Recognition"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:worldcoin",
      "vc:label": "Worldcoin"
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
  "@id": "urn:ngm:class:iris-recognition",
  "@type": "Class",
  "label": "Iris Recognition",
  "definition": "Iris recognition is a biometric identification technique that authenticates individuals from the intricate, epigenetically random texture of the iris, which is stable from early childhood and differs even between genetically identical twins. Near-infrared imaging, iris segmentation and Gabor-wavelet encoding — pioneered by John Daugman — produce a compact IrisCode compared via Hamming distance, delivering among the lowest false-match rates of any biometric and powering border control, national identity schemes such as India's Aadhaar, and proof-of-personhood systems.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:biometric-identification",
    "label": "Biometric Identification"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:face-recognition",
        "label": "Face Recognition"
      },
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:worldcoin",
        "label": "Worldcoin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
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
  - "Iris recognition is a biometric identification technique that authenticates individuals from the intricate, epigenetically random texture of the iris, which is stable from early childhood and differs even between genetically identical twins. Near-infrared imaging, iris segmentation and Gabor-wavelet encoding — pioneered by John Daugman — produce a compact IrisCode compared via Hamming distance, delivering among the lowest false-match rates of any biometric and powering border control, national identity schemes such as India's Aadhaar, and proof-of-personhood systems."

- ### Semantic Classification
  - owl-class:: security:IrisRecognition
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Biometric Identification]]
  - uses:: [[Computer Vision]]
  - contrasts-with:: [[Face Recognition]]
  - bridges-to:: [[Worldcoin]]

- ### Content

  ## Definition

  **Iris recognition** identifies people by the texture of the iris — the coloured annulus of muscle surrounding the pupil. Iris patterns form through random morphogenesis in gestation, are essentially fixed from around one year of age, differ between a person's left and right eyes and between identical twins, and are protected behind the cornea, making them an unusually reliable biometric substrate. The canonical algorithm, developed by John Daugman at the University of Cambridge in the early 1990s, images the eye under near-infrared illumination (which reveals texture even in dark irises), segments the iris between pupillary and limbic boundaries, unwraps it into a normalised polar coordinate sheet (the rubber-sheet model), and applies 2D Gabor wavelet filters whose quantised phase responses form a 2,048-bit IrisCode.

  Matching reduces to computing a Hamming distance between IrisCodes (with masking bits for eyelids, lashes and reflections, and rotation compensation for head tilt). Because the bits of different people's codes behave like independent coin flips, impostor distances cluster tightly around 0.5, giving extraordinarily low false-match rates — Daugman's analyses report odds of a false match below one in a billion at conservative thresholds. This statistical decisiveness is why iris recognition scales to one-to-many searches over hundreds of millions of enrolees, where [[Face Recognition]] and fingerprints require heavier disambiguation; its trade-offs are capture ergonomics (subject cooperation, specialised NIR cameras) and vulnerability at acquisition rather than matching (presentation attacks with printed or displayed irises, countered by liveness detection).

  ## Current Landscape

  Deployed systems include the UAE's border-crossing watchlist (the first nationwide deployment), India's Aadhaar programme — the largest biometric system on Earth, using iris alongside fingerprints for over a billion residents — airport e-gates, and humanitarian cash-assistance registration by UNHCR. In the decentralised-identity world, [[Worldcoin]] (now World) uses custom "Orb" hardware to derive an iris-based uniqueness proof for its proof-of-personhood protocol, provoking regulatory scrutiny from data-protection authorities in the EU, Kenya and elsewhere over consent and biometric data handling — a reminder that the technique's precision cuts both ways for privacy. Research directions include deep-learning segmentation and matching, iris recognition at a distance and on the move, and post-mortem and infant iris stability; standards such as ISO/IEC 19794-6 and 29794-6 govern image quality and interchange.
