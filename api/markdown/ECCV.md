public:: true

# ECCV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eccv",
  "@type": "Page",
  "vc:slug": "eccv",
  "title": "ECCV",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eccv",
  "@type": "Class",
  "label": "ECCV",
  "definition": "ECCV, the European Conference on Computer Vision, is a biennial premier venue for research in computer vision and pattern recognition, held in alternating years with ICCV to provide the community with annual high-quality publication opportunities. Founded in 1990, it attracts thousands of submissions covering topics from low-level image processing and 3D reconstruction to high-level scene understanding and video analysis. ECCV proceedings published through Springer LNCS constitute one of the most-cited bodies of literature in artificial intelligence. Acceptance at ECCV carries high prestige, signalling rigorous peer review and methodological significance.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tutorial",
        "label": "Tutorial"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:academic-conference",
        "label": "Academic Conference"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:image-recognition",
        "label": "Image Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:benchmarks",
        "label": "Benchmarks"
      },
      {
        "@id": "urn:ngm:class:model-evaluation-results",
        "label": "Model Evaluation Results"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:semantic-segmentation",
        "label": "Semantic Segmentation"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      },
      {
        "@id": "urn:ngm:class:medical-image-analysis",
        "label": "Medical Image Analysis"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:neur-ips",
        "label": "NeurIPS"
      },
      {
        "@id": "urn:ngm:class:icml",
        "label": "ICML"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cvpr",
        "label": "CVPR"
      },
      {
        "@id": "urn:ngm:class:iccv",
        "label": "ICCV"
      },
      {
        "@id": "urn:ngm:class:iclr",
        "label": "ICLR"
      },
      {
        "@id": "urn:ngm:class:vision-language-model",
        "label": "Vision-Language Model"
      }
    ]
  },
  "sameAs": [],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - ECCV is the European Conference on Computer Vision, a biennial flagship venue for [[Computer Vision]] research whose proceedings represent foundational contributions to [[Deep Learning]]-driven visual understanding, [[Object Detection]], and [[Semantic Segmentation]].
- ### Relationships
  - ECCV operates as a peer venue to [[CVPR]] and [[ICCV]], together forming the triumvirate of elite computer vision conferences. Its accepted papers typically introduce or validate new [[Benchmarks]] and publish [[Model Evaluation Results]] that set state-of-the-art baselines adopted by the broader community. Methodological advances showcased at ECCV frequently rely on [[Convolutional Neural Network]] architectures and extend to tasks underpinning [[Semantic Segmentation]], [[Object Detection]], and pose estimation.
- ### Content
  - ECCV was established in 1990 in Antibes, France, with the explicit goal of creating a European counterpart to the American CVPR and the international ICCV. The conference rotates between European cities—Munich, Amsterdam, Glasgow, Tel Aviv, and others—with each edition reflecting the geography of its host institution's organising committee. The biennial cadence was designed to interleave with ICCV, ensuring the community has a top-tier venue every year.

  - Research topics at ECCV span the full spectrum of visual computing: image and video recognition, low-level processing and restoration, 3D scene reconstruction and novel view synthesis, medical image analysis, autonomous driving perception, generative visual models, and multimodal vision-language systems. In recent years transformer-based architectures have dominated proceedings, displacing convolution-centric papers that characterised the prior decade.

  - The conference benchmarking ecosystem is central to ECCV's influence. Challenge workshops co-located with the main conference—covering tasks such as object detection in the wild, person re-identification, and visual question answering—release new datasets and evaluation protocols that the community adopts as standard references. Results from these challenges are often the first public demonstrations of methods that later become industry standards.

  - Acceptance rates at ECCV typically range from 25–30%, enforced through double-blind review. The proceedings are published as volumes of Springer's Lecture Notes in Computer Science, making them widely accessible and highly indexed. Citation patterns show that landmark ECCV papers—including foundational work on deformable convolutional networks and feature pyramid networks—continue to accumulate thousands of citations years after publication.

  - ECCV's European identity has shaped certain editorial priorities, with a stronger historical representation of work on autonomous vehicles, medical imaging, and cultural heritage applications that reflect European research funding patterns through programmes such as Horizon Europe and ERC grants.
