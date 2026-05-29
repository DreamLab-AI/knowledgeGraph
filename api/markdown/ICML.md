public:: true

# ICML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:icml",
  "@type": "Page",
  "vc:slug": "icml",
  "title": "ICML",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:icml",
  "@type": "Class",
  "label": "ICML",
  "definition": "The International Conference on Machine Learning (ICML) is the premier annual academic conference for machine learning research, organised by the International Machine Learning Society (IMLS) since 1980. ICML serves as the primary venue for disseminating foundational and applied advances across supervised learning, unsupervised learning, reinforcement learning, deep learning, optimisation, and the theory of machine learning. Acceptance rates have fallen to roughly 26% as submission volumes have grown into the thousands annually, making it one of the most selective and impactful venues in AI research.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:research-methods", "label": "Research Methods"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:machine-learning-model", "label": "Machine Learning Model"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ICML (International Conference on Machine Learning) is the world's leading peer-reviewed venue for machine learning research, publishing foundational results in learning theory, deep learning, and applied ML annually since 1980.
- ### Relationships
  - ICML is a subclass of [[Research Methods]] as a primary dissemination mechanism for the field. It is directly related to [[Machine Learning]], [[Deep Learning]], [[Reinforcement Learning]], [[Neural Network]], [[AI Safety Research]], and [[Generative AI]]. ICML enables progress in [[Machine Learning Technique]], [[Benchmark Standard]], [[Transfer Learning]], and [[Federated Learning]] by serving as the venue where these techniques are first rigorously validated and published. It draws upon [[Optimization Algorithm]] and [[Machine Learning Model]] research as its core subject matter.
- ### Content
  - The International Conference on Machine Learning has been held annually since 1980, making it one of the longest-running dedicated venues for machine learning research. Organised by the International Machine Learning Society (IMLS), ICML has evolved from a small workshop format to a conference regularly attracting over 10,000 attendees and receiving upward of 11,000 paper submissions per year (as of 2023–2024). The conference proceedings are published as volumes of the Proceedings of Machine Learning Research (PMLR), a freely accessible open-access archive that has become the canonical citation source for ICML papers.

  - ICML's scope encompasses the full breadth of machine learning: supervised, unsupervised, and semi-supervised learning; reinforcement learning and its intersection with planning; probabilistic graphical models; kernel methods and Gaussian processes; deep learning architectures; optimisation theory and algorithms; fairness, accountability, and transparency in ML; and the application of ML to domains including healthcare, climate, natural language, and robotics. The conference has progressively broadened its programme to include workshops and tutorials that surface emerging research directions months ahead of the main track.

  - Landmark papers that appeared at ICML include early work on gradient boosting (Friedman, 1999), deep residual networks concepts, normalising flows, attention mechanisms applied to sequences, and foundational reinforcement learning results. The venue has historically complemented NeurIPS (which tends towards broader AI and neuroscience intersections) and ICLR (which emphasises representation learning and deep learning theory). Together these three conferences form the trifecta of elite ML publication venues.

  - The 2024 ICML conference (held in Vienna, Austria) received approximately 9,473 submissions with an acceptance rate near 26%, reflecting both the conference's selectivity and the explosive growth in global ML research output. Key themes in 2024 included large language model alignment, efficient fine-tuning methods (LoRA, adapters), diffusion models, and ML for scientific discovery. The conference increasingly integrates AI safety and interpretability tracks, reflecting the field's reckoning with societal consequences of deployed systems.

  - For practitioners and researchers, an ICML publication carries significant prestige and is used as a proxy for research quality by academic hiring committees, grant agencies, and industry research labs globally. The IMLS actively manages conflicts of interest through double-blind review and area chair structures, though debates about reviewer quality, replication crises, and publication bias in ML conferences — including ICML — have prompted ongoing methodological reform discussions within the community.
