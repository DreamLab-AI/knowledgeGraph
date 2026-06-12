public:: true

# NeurIPS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:neur-ips",
  "@type": "Page",
  "vc:slug": "neur-ips",
  "title": "NeurIPS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:neur-ips",
  "@type": "Class",
  "label": "NeurIPS",
  "definition": "NeurIPS (Neural Information Processing Systems) is the premier annual machine learning and computational neuroscience research conference, held each December and publishing its proceedings through the NeurIPS Foundation. Founded in 1987, it is consistently ranked among the most selective and impactful venues in artificial intelligence, attracting tens of thousands of attendees and shaping research agendas across deep learning, reinforcement learning, probabilistic modelling, and AI ethics. Acceptance of a NeurIPS paper signals high-quality, peer-reviewed contributions that frequently define the state of the art.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation benchmarks and leaderboards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:machine-learning-discipline-framework", "label": "Machine Learning Framework"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:icml", "label": "ICML"},
      {"@id": "urn:ngm:class:iclr", "label": "ICLR"},
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"},
      {"@id": "urn:ngm:class:iccv", "label": "ICCV"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - NeurIPS is the world's most influential annual academic conference on machine learning and neural computation, where landmark papers in deep learning, reinforcement learning, and probabilistic AI are first presented.

- ### Relationships
  - NeurIPS is a subclass of [[AI Research Area]] and serves as the primary dissemination venue for advances in [[Machine Learning Discipline]], [[Deep Learning]], and [[Neural Network]] architecture. It sits alongside [[ICML]], [[ICLR]], [[CVPR]], and [[ICCV]] as one of the elite ML publication venues, and papers accepted there frequently introduce [[Benchmark Standard]] datasets and evaluation protocols tracked by [[Evaluation benchmarks and leaderboards]]. Large-scale experiments submitted to NeurIPS routinely depend on [[High-Performance Computing]] infrastructure.

- ### Content
  - The Neural Information Processing Systems conference was first held in Denver in 1987, originally at the intersection of neuroscience and machine learning. Over the following three decades it evolved into the dominant forum for statistical machine learning, and the 2012 AlexNet paper — though submitted to a NeurIPS workshop — catalysed the deep learning revolution that subsequently made the main conference the most competitive venue in AI, with acceptance rates falling below 20 % by the 2020s.

  - NeurIPS proceedings are freely available online through the NeurIPS Foundation's website. Accepted papers undergo double-blind peer review by programme committee members drawn from the global research community. The conference hosts an extensive workshop programme alongside the main track, allowing early-stage work, interdisciplinary bridges, and specialised sub-communities (e.g., ML for science, RL, fairness) to self-organise around focused themes.

  - Landmark works first presented at NeurIPS include the variational autoencoder (VAE), generative adversarial networks (GANs), word2vec, AlphaGo value-function training insights, RLHF-based language model tuning, and numerous foundational reinforcement learning algorithms. The conference's influence on industry is substantial: major technology companies treat NeurIPS publication counts as a proxy for research excellence, and many accepted papers are released simultaneously with production code, datasets, or model weights.

  - The rapid growth of machine learning in the 2010s caused NeurIPS attendance to balloon from hundreds to over fifteen thousand registrants, prompting a lottery system for non-author attendees and satellite viewing events worldwide. The conference also established a code-of-conduct process, a broader-impact review criterion (requiring authors to consider societal implications), and an ethics review board for papers raising particular concerns, making it an important site for the institutionalisation of [[AI Ethics]] norms.

  - Geographically NeurIPS rotates among North American cities (Vancouver, New Orleans, Montreal, San Diego) with occasional expansion to hybrid formats. Its proceedings serve as a de facto benchmark for national AI investment strategies: governments cite NeurIPS publication counts in competitiveness assessments, and universities use acceptance rates to evaluate faculty productivity in machine learning departments worldwide.
