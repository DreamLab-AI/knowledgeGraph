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
  "definition": "NeurIPS (Neural Information Processing Systems) is the premier annual international conference on machine learning, computational neuroscience, and artificial intelligence, held each December and governed by the NeurIPS Foundation. Founded in 1987 at the intersection of neuroscience and statistical learning theory, it has evolved into the most selective and impactful peer-reviewed publication venue in AI, shaping research agendas across deep learning, reinforcement learning, probabilistic modelling, generative AI, and AI ethics. Accepted papers undergo rigorous double-blind peer review and are freely available via the NeurIPS Proceedings archive, with acceptance rates typically below 26 percent in recent years. The conference serves as a primary mechanism for the global dissemination, validation, and agenda-setting of foundational machine learning research.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}],
  "sameAs": [
    {"@id": "urn:ngm:class:neural-information-processing-systems", "label": "Neural Information Processing Systems"},
    {"@id": "urn:ngm:class:neurips-conference", "label": "NeurIPS Conference"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"},
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation Benchmarks and Leaderboards"},
      {"@id": "urn:ngm:class:computational-neuroscience", "label": "Computational Neuroscience"},
      {"@id": "urn:ngm:class:ai-research", "label": "AI Research"},
      {"@id": "urn:ngm:class:academic-conference", "label": "Academic Conference"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:icml", "label": "ICML"},
      {"@id": "urn:ngm:class:iclr", "label": "ICLR"},
      {"@id": "urn:ngm:class:cvpr", "label": "CVPR"},
      {"@id": "urn:ngm:class:iccv", "label": "ICCV"},
      {"@id": "urn:ngm:class:aaai", "label": "AAAI"},
      {"@id": "urn:ngm:class:ijcai", "label": "IJCAI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:peer-review", "label": "Peer Review"},
      {"@id": "urn:ngm:class:open-access-research", "label": "Open Access Research"},
      {"@id": "urn:ngm:class:reproducibility", "label": "Reproducibility"},
      {"@id": "urn:ngm:class:research-dissemination", "label": "Research Dissemination"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:workshop", "label": "Workshop"},
      {"@id": "urn:ngm:class:tutorial", "label": "Tutorial"},
      {"@id": "urn:ngm:class:poster-session", "label": "Poster Session"},
      {"@id": "urn:ngm:class:competition", "label": "Competition"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
      {"@id": "urn:ngm:class:double-blind-review", "label": "Double-Blind Review"},
      {"@id": "urn:ngm:class:programme-committee", "label": "Programme Committee"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:fairness-in-machine-learning", "label": "Fairness in Machine Learning"},
      {"@id": "urn:ngm:class:open-science", "label": "Open Science"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:neuroscience", "label": "Neuroscience"},
      {"@id": "urn:ngm:class:statistics", "label": "Statistics"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"}
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - NeurIPS (Neural Information Processing Systems) is the world's most influential annual academic conference on [[Machine Learning]] and computational intelligence, where landmark research in [[Deep Learning]], [[Reinforcement Learning]], [[Generative AI]], and [[Probabilistic Modelling]] is first peer-reviewed and disseminated. Founded in 1987 at the confluence of [[Neuroscience]] and [[Statistics]], it has evolved into the single most selective publication venue in AI, functioning as both a research conference and a primary standard-setter for the global machine learning community. Papers accepted at NeurIPS undergo rigorous double-blind review and are freely accessible via the NeurIPS Proceedings archive, making it a central node in the global [[Open Science]] ecosystem.

- ### Overview
  - NeurIPS was established in 1987 to bridge [[Computational Neuroscience]] and machine learning, initially convened in Denver by researchers seeking interdisciplinary dialogue between neural systems biology and learning algorithms. Over three decades it transitioned from a specialised symposium to the dominant forum for applied and theoretical AI research.
  - The conference is governed by the NeurIPS Foundation, a non-profit that manages the annual programme committee, proceedings, workshop programme, and ethical-review processes. The Foundation issues calls for papers approximately six months before each December conference, conducts double-blind [[Peer Review]] across programme committee members drawn from the global academic and industrial research community, and publishes accepted work openly via the NeurIPS Proceedings website.
  - Acceptance rates fell progressively through the 2010s and stabilised in the 20–26 percent range as submission volumes grew exponentially, making selective acceptance a meaningful signal of research quality. The conference's influence is such that major technology companies, universities, and national AI strategies explicitly track NeurIPS publication counts as proxies for research excellence.
  - The 2012 AlexNet paper, presented in a NeurIPS workshop, is widely credited as catalysing the [[Deep Learning]] revolution. Subsequent NeurIPS main-track papers introduced the [[Variational Autoencoder]] (VAE), [[Generative Adversarial Network]] (GAN), [[word2vec]] embeddings, key components of [[AlphaGo]] training, and foundational [[Reinforcement Learning from Human Feedback]] (RLHF) techniques — illustrating the conference's role as the primary birthplace of modern AI paradigms.

- ### Key Components
  - **Main Track**
    - The principal peer-reviewed programme of full research papers. Authors submit via the OpenReview platform. Area chairs assign reviewers from the programme committee; papers receive written reviews followed by author rebuttals before final decisions. Accepted papers are presented as [[Poster Session]] posters; a small selection is also featured as oral or spotlight talks.
  - **Workshop Programme**
    - Dozens of focused [[Workshop]] events run alongside the main conference on the first and last days. Workshops are independently organised by community members and cover specialised sub-fields such as ML for health, [[AI Ethics]], [[Fairness in Machine Learning]], causal inference, and emerging methodologies. Workshops often serve as incubators for ideas that later become main-track papers.
  - **Tutorials**
    - Half-day or full-day [[Tutorial]] sessions delivered by leading researchers provide deep dives into established or rapidly evolving sub-fields. Topics span foundational methods (e.g., [[Gaussian Processes]]) to cutting-edge applications (e.g., [[Diffusion Models]], [[Large Language Models]]).
  - **Competitions and Datasets**
    - The NeurIPS competition track hosts ML challenges with novel datasets and evaluation frameworks, driving community progress on specific benchmarks. Past competitions introduced influential datasets in areas such as [[Computer Vision]], [[Reinforcement Learning]], and healthcare prediction. These directly feed [[Evaluation Benchmarks and Leaderboards]] infrastructure.
  - **Broader Impact and Ethics Review**
    - Since 2020, all submissions include a broader-impact statement assessed by reviewers. A separate ethics review board evaluates papers flagged for potential harm, making NeurIPS a significant institutional site for advancing [[Responsible AI]] practice.
  - **Social Events and Affinity Groups**
    - NeurIPS hosts affinity workshops and social events for under-represented communities in AI (e.g., Black in AI, LatinX in AI, Queer in AI), supporting diversity, equity, and inclusion in the global research community.

- ### Landmark Research Contributions
  - Several of the most-cited and most-consequential papers in modern AI were first published at NeurIPS:
    - **GANs (2014)** — Goodfellow et al. introduced [[Generative Adversarial Networks]], spawning an entire sub-field of [[Generative AI]].
    - **Variational Autoencoders (2013/2014)** — Kingma and Welling presented the [[Variational Autoencoder]], a foundational [[Latent Space Representation]] model.
    - **word2vec (2013)** — Mikolov et al. presented distributed [[Word Embeddings]] that became standard in [[Natural Language Processing]].
    - **AlexNet workshop (2012)** — Krizhevsky et al. demonstrated GPU-accelerated deep [[Convolutional Neural Networks]] dominating [[ImageNet]], starting the deep learning era.
    - **RLHF (2017)** — Christiano et al. introduced [[Reinforcement Learning from Human Feedback]], later foundational to [[Large Language Models]] alignment.
    - **Attention mechanisms** — Early formulations influencing [[Transformer Architecture]] appeared in NeurIPS proceedings.
    - **Neural Turing Machines, [[Neural Architecture Search]], [[Dropout Regularisation]], [[Batch Normalisation]]** variants — numerous foundational components trace back to NeurIPS papers.

- ### Applications and Use Cases
  - **Academic Research Agenda-Setting**: Researchers worldwide target NeurIPS as the primary venue for publishing foundational advances. Acceptance shapes tenure decisions, grant allocations, and university rankings in AI.
  - **Industry Research Benchmarking**: Technology companies such as Google DeepMind, Meta AI, Microsoft Research, and OpenAI use NeurIPS publication counts in research reports and use the conference to recruit talent and announce high-impact results.
  - **Dataset and [[Benchmark Standard]] Introduction**: NeurIPS competitions and papers introduce community-wide evaluation standards, including datasets that persist for years as canonical benchmarks in [[Computer Vision]], [[Reinforcement Learning]], and [[Natural Language Processing]].
  - **Policy and National AI Strategy**: Government agencies (e.g., UKRI, NSF, EU) cite NeurIPS acceptance rates and national publication counts in competitiveness assessments, influencing funding allocation for [[AI Research]].
  - **Open-Access Dissemination**: All accepted papers are freely downloadable, making NeurIPS proceedings a primary resource for practitioners, students, and policymakers in low-resource settings. This supports [[Open Science]] and [[Research Dissemination]] globally.
  - **Interdisciplinary Bridge**: The workshop programme enables ML researchers to engage with [[Neuroscience]], [[Cognitive Science]], [[Statistics]], physics, and social science, making NeurIPS a cross-domain connector across intellectual communities.

- ### Relationships
  - partOf:: [[Academic Conference]] ecosystem in AI
  - contrastsWith:: [[ICML]] (International Conference on Machine Learning — primary peer competitor)
  - contrastsWith:: [[ICLR]] (International Conference on Learning Representations — focus on representation learning)
  - contrastsWith:: [[CVPR]] (Computer Vision and Pattern Recognition — vision-focused)
  - contrastsWith:: [[ICCV]] (International Conference on Computer Vision)
  - contrastsWith:: [[AAAI]] (Association for the Advancement of Artificial Intelligence conference)
  - contrastsWith:: [[IJCAI]] (International Joint Conference on AI — broader AI scope)
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[Benchmark Standard]]
  - relatedTo:: [[Evaluation Benchmarks and Leaderboards]]
  - relatedTo:: [[Computational Neuroscience]]
  - relatedTo:: [[AI Research]]
  - enables:: [[AI Safety Research]]
  - enables:: [[Peer Review]]
  - enables:: [[Open Access Research]]
  - enables:: [[Reproducibility]]
  - enables:: [[Research Dissemination]]
  - hasPart:: [[Workshop]]
  - hasPart:: [[Tutorial]]
  - hasPart:: [[Poster Session]]
  - hasPart:: [[Competition]]
  - dependsOn:: [[High-Performance Computing]]
  - dependsOn:: [[Double-Blind Review]]
  - dependsOn:: [[Programme Committee]]
  - supports:: [[AI Ethics]]
  - supports:: [[Fairness in Machine Learning]]
  - supports:: [[Open Science]]
  - bridgesTo:: [[Neuroscience]]
  - bridgesTo:: [[Statistics]]
  - bridgesTo:: [[Cognitive Science]]

- ### Standards and Context
  - **Governance**: The NeurIPS Foundation is the governing non-profit. It appoints programme chairs annually and has developed formal processes for code-of-conduct enforcement, conflict-of-interest management, and ethics review.
  - **Review System**: NeurIPS pioneered the adoption of OpenReview for large-scale double-blind peer review in AI. The platform allows public visibility of reviews post-decision, increasing accountability.
  - **Broader Impact Criterion**: Introduced in 2020, this requirement for all submissions to address societal implications has influenced similar policies at ICML and ICLR, establishing a community norm for [[Responsible AI]] practice.
  - **Reproducibility**: NeurIPS introduced a checklist requiring authors to document code availability, experimental setup, and statistical methodology — advancing reproducibility standards across the [[Machine Learning]] community.
  - **Affiliation with Learned Societies**: NeurIPS is independent of ACM and IEEE (unlike CVPR and some other venues), managed exclusively by the Foundation, which gives it flexibility but also community-specific accountability structures.
  - **Proceedings**: Published as annual Advances in Neural Information Processing Systems volumes, openly accessible and indexed in major academic databases.

- ### Historical Milestones
  - **1987** — First Neural Information Processing Systems conference, Denver; bridging [[Neuroscience]] and learning algorithms.
  - **2012** — AlexNet workshop at NeurIPS; catalysed [[Deep Learning]] era.
  - **2014** — GANs paper published; [[Generative AI]] sub-field launched.
  - **2017** — RLHF paper; laid groundwork for [[Reinforcement Learning from Human Feedback]] used in modern LLMs.
  - **2018** — Conference renamed from NIPS to NeurIPS following community consultation.
  - **2019** — Lottery system introduced for non-author attendee registration as demand vastly exceeded venue capacity.
  - **2020** — Fully virtual format due to COVID-19; broader-impact review criterion introduced.
  - **2021-present** — Hybrid and in-person formats resume; ethics review board formalised; competition track expanded.

- ### Provenance
  - sources:: NeurIPS Foundation (neurips.cc); Advances in Neural Information Processing Systems proceedings; academic literature on conference impact metrics; established training-data knowledge of AI research community.
  - updated:: 2026-06-13
