public:: true

# ICCV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:iccv",
  "@type": "Page",
  "vc:slug": "iccv",
  "title": "ICCV",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iccv",
  "@type": "Class",
  "label": "ICCV",
  "definition": "ICCV (International Conference on Computer Vision) is a biennial top-tier academic conference sponsored by IEEE that focuses on the full spectrum of computer vision research, from low-level image processing to high-level scene understanding and embodied intelligence. Held in odd-numbered years and alternating with CVPR in global prestige, ICCV features highly selective peer review and is associated with the Marr Prize for outstanding contributions to the field.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"},
      {"@id": "urn:ngm:class:neur-ips", "label": "NeurIPS"},
      {"@id": "urn:ngm:class:iclr", "label": "ICLR"},
      {"@id": "urn:ngm:class:icml", "label": "ICML"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:semantic-segmentation", "label": "Semantic Segmentation"},
      {"@id": "urn:ngm:class:image-classification", "label": "Image Classification"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:multimodal-ai-architecture-ai", "label": "Multimodal AI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ICCV (International Conference on Computer Vision) is a biennial IEEE-sponsored conference and one of computer vision's two premier venues, distinguished by the Marr Prize for outstanding contributions and acceptance rates that are among the lowest in the field.
- ### Relationships
  - ICCV pairs with [[CVPR]] as the two crown venues of [[Computer Vision]] research; the conferences alternate annually so the community has a top-tier venue every year. It is a sibling to [[NeurIPS]], [[ICML]], and [[ICLR]] in the broader machine learning conference landscape. Papers at ICCV consistently introduce new [[Benchmark Standard]]s and [[Evaluation Metric]]s across [[Object Detection]], [[Semantic Segmentation]], [[3D Reconstruction]], and [[Multimodal AI]].
- ### Content
  - ICCV was inaugurated in 1987 in London and has grown into one of the most selective scientific conferences in computer science, with acceptance rates historically below 25 percent despite submission volumes often exceeding 8,000 papers. The conference is held in locations across multiple continents in odd-numbered years, reflecting its genuinely international community and the IEEE Computer Society's governance model.

  - The Marr Prize, named after cognitive scientist David Marr whose computational theory of vision shaped the field, is awarded at each ICCV to the most innovative paper at the conference. Past winners have defined entire research sub-fields: optical flow estimation, human pose estimation, scene flow, and neural radiance field rendering have all received the Marr Prize, marking ICCV as a venue where paradigm-shifting work is especially recognised.

  - ICCV's programme spans recognition, detection, segmentation, tracking, stereo and depth estimation, video understanding, generative vision, medical and satellite imaging, and embodied AI. Workshops and tutorials co-located with the conference have incubated communities around autonomous driving perception, fairness in facial recognition, and vision-language grounding, topics that feed directly into standards work at bodies such as [[NIST]] and regulatory discussions under the [[EU AI Act Regulatory Instrument]].

  - In recent editions, ICCV has substantially increased its coverage of generative models. [[Diffusion Models]] and neural scene representations (NeRF, [[3D Gaussian Splatting]]) have been dominant themes, alongside papers on large vision-language models that bridge [[Computer Vision]] and [[Natural Language Processing]]. This reflects a broader convergence in AI research that ICCV, CVPR, and [[NeurIPS]] are jointly shaping.

  - Industrial presence at ICCV has grown proportionally with the commercial value of computer vision. Autonomous vehicle companies, medical imaging firms, and defence contractors sponsor workshops and recruit from the attendee pool. This creates a feedback loop where benchmark datasets — many introduced at ICCV — define performance targets for commercial products and subsequently inform [[AI Governance]] frameworks seeking quantitative thresholds for safe deployment.
