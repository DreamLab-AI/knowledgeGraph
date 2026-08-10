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
  "definition": "The International Conference on Machine Learning (ICML) is the premier annual academic conference for machine learning research, organised by the International Machine Learning Society (IMLS) since 1980. ICML serves as the primary venue for disseminating foundational and applied advances across supervised learning, unsupervised learning, reinforcement learning, deep learning, optimisation, and the theory of machine learning. Proceedings are published through the open-access Proceedings of Machine Learning Research (PMLR), making ICML papers freely available and widely cited. Together with NeurIPS and ICLR, ICML forms the trifecta of elite machine learning publication venues that shape research directions and career trajectories across academia and industry globally.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      },
      {
        "@id": "urn:ngm:class:neur-ips",
        "label": "NeurIPS"
      },
      {
        "@id": "urn:ngm:class:iclr",
        "label": "ICLR"
      },
      {
        "@id": "urn:ngm:class:academic-conference",
        "label": "Academic Conference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning-research",
        "label": "Machine Learning Research"
      },
      {
        "@id": "urn:ngm:class:benchmark-standard",
        "label": "Benchmark Standard"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:optimisation-algorithm",
        "label": "Optimization Algorithm"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:double-blind-review",
        "label": "Double-Blind Review"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning Community"
      },
      {
        "@id": "urn:ngm:class:journal-of-machine-learning-research",
        "label": "Proceedings of Machine Learning Research"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:neur-ips",
        "label": "NeurIPS"
      },
      {
        "@id": "urn:ngm:class:iclr",
        "label": "ICLR"
      },
      {
        "@id": "urn:ngm:class:aaai",
        "label": "AAAI"
      },
      {
        "@id": "urn:ngm:class:cvpr",
        "label": "CVPR"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "International Machine Learning Society"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:international-conference-on-machine-learning",
      "label": "International Conference on Machine Learning"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **International Conference on Machine Learning** (ICML) is the world's foremost peer-reviewed annual venue for [[Machine Learning]] research, established in 1980 and governed by the [[International Machine Learning Society]] (IMLS). ICML disseminates foundational and applied advances across the full spectrum of learning theory and practice, from [[Supervised Learning]] and [[Unsupervised Learning]] through [[Reinforcement Learning]], [[Deep Learning]], probabilistic methods, and optimisation theory. Its proceedings are archived in [[Proceedings of Machine Learning Research]] (PMLR), an open-access series that has become the canonical citation source for the field.

- ### Overview
  - ICML occupies a unique position in the AI research ecosystem as the oldest and most theoretically rigorous of the three dominant machine learning conferences — alongside [[NeurIPS]] and [[ICLR]]. While NeurIPS has broader scope encompassing neuroscience and AI systems, and ICLR emphasises representation and deep learning, ICML maintains a strong commitment to the mathematical foundations of learning.
  - The conference operates under double-blind peer review, with an area chair structure overseen by programme chairs appointed by the IMLS. Submission volumes have grown dramatically over the decades, from hundreds of papers in the 1990s to tens of thousands of submissions by the mid-2020s, driving significant programme committee scaling challenges.
  - An accepted ICML paper carries substantial prestige: it functions as a signal of research quality recognised by academic hiring committees at leading universities, grant-funding bodies, and industrial research laboratories worldwide including Google DeepMind, Meta FAIR, Microsoft Research, and OpenAI.
  - ICML proceedings are freely accessible online through PMLR under open-access licences, making the corpus widely available and contributing to the conference's citation impact across the global research community.

- ### Key Components
  - **Main Track** — the core peer-reviewed programme with oral presentations and poster sessions covering all areas of machine learning research; organised by topic areas (e.g. theory, optimisation, deep learning, reinforcement learning, probabilistic methods)
  - **Workshops** — single- or multi-day satellite events exploring emerging topics, inter-disciplinary intersections, and specialised sub-communities; often the first public venue for nascent research directions including [[Federated Learning]], [[AI Safety Research]], and [[Causal Inference]]
  - **Tutorials** — structured educational sessions delivered by domain experts, covering both foundational methods and state-of-the-art developments; valuable for researchers entering new sub-fields
  - **Invited Talks** — keynotes from distinguished researchers and practitioners, often signalling community priorities and consensus perspectives on the field's trajectory
  - **Competition Tracks** — benchmark challenges (increasingly common from the 2010s onwards) that drive progress on well-defined [[Benchmark Standard]] tasks and enable rigorous empirical comparisons
  - **[[Proceedings of Machine Learning Research]] (PMLR)** — the official open-access publication series hosting all accepted papers; volumes are citable with stable DOI-like identifiers
  - **Area Chairs and Programme Committee** — the reviewing infrastructure organising thousands of reviews per cycle; managed under conflict-of-interest policies to preserve double-blind integrity

- ### Research Coverage
  - ICML's scope spans the theoretical and empirical dimensions of machine learning:
  - **[[Learning Theory]]** — PAC learning, VC dimension, generalisation bounds, statistical learning theory, online learning, bandit algorithms
  - **[[Supervised Learning]]** — classification, regression, structured prediction, sequence-to-sequence models, [[Gradient Boosting]], kernel methods
  - **[[Unsupervised Learning]]** — clustering, density estimation, representation learning, [[Dimensionality Reduction]], generative models
  - **[[Deep Learning]]** — architecture design ([[Neural Network]], convolutional nets, transformers, attention mechanisms), training dynamics, [[Normalising Flows]], diffusion models
  - **[[Reinforcement Learning]]** — policy gradient methods, model-based RL, multi-agent RL, offline RL, exploration strategies
  - **[[Optimisation Algorithm]]** — convex and non-convex optimisation, stochastic gradient descent variants, second-order methods, distributed optimisation
  - **[[Probabilistic Graphical Model]]** — Bayesian networks, variational inference, [[Gaussian Process]], Monte Carlo methods
  - **[[Federated Learning]]** — privacy-preserving distributed training, differential privacy, secure aggregation
  - **[[Transfer Learning]]** and [[Meta-Learning]] — few-shot learning, domain adaptation, pre-training paradigms
  - **[[AI Safety Research]]** and Alignment — interpretability, robustness, fairness, accountability, transparency
  - **ML for Science** — applications to biology, chemistry, climate, physics, and materials science

- ### Applications and Use Cases
  - **Academic Research Dissemination** — ICML is the primary publication venue for machine learning researchers at universities and research institutes; an accepted paper is a career milestone for PhD students and faculty
  - **Industry Research Benchmarking** — industrial laboratories use ICML acceptance as an external validation signal; many landmark techniques first published at ICML have been productised (e.g. [[Gradient Boosting]] variants used across enterprise ML pipelines)
  - **Curriculum Development** — ICML proceedings serve as a primary reference corpus for graduate-level machine learning curricula worldwide; tutorials and workshop materials are widely reused in teaching
  - **Open-Source Ecosystem** — ICML papers frequently accompany public code releases, accelerating [[Transfer Learning]] of research innovations into practice via repositories on GitHub and Hugging Face
  - **Networking and Collaboration** — the annual gathering concentrates the global ML research community, enabling cross-institutional collaborations, student recruitment, and formation of working groups that influence standards bodies
  - **Policy and Governance Input** — ICML research on [[AI Governance]], fairness, bias, and robustness increasingly informs regulatory discussions with bodies such as NIST, the EU AI Office, and national AI strategies
  - **Emerging Area Incubation** — ICML workshops have historically incubated directions that later became major sub-fields (e.g. reinforcement learning from human feedback, diffusion-based generative models, graph neural networks)

- ### Relationships
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Neural Network]]
  - relatedTo:: [[AI Safety Research]]
  - relatedTo:: [[Generative AI]]
  - relatedTo:: [[NeurIPS]]
  - relatedTo:: [[ICLR]]
  - enables:: [[Machine Learning Research]]
  - enables:: [[Benchmark Standard]]
  - enables:: [[Transfer Learning]]
  - enables:: [[Federated Learning]]
  - enables:: [[Peer Review]]
  - uses:: [[Optimisation Algorithm]]
  - uses:: [[Machine Learning Model]]
  - uses:: [[Double-Blind Review]]
  - partOf:: [[Machine Learning Community]]
  - partOf:: [[Proceedings of Machine Learning Research]]
  - hasPart:: [[Workshop]]
  - hasPart:: [[Tutorial]]
  - hasPart:: [[Paper Submission]]
  - contrastsWith:: [[NeurIPS]]
  - contrastsWith:: [[ICLR]]
  - contrastsWith:: [[AAAI]]
  - contrastsWith:: [[CVPR]]
  - standardizedBy:: [[International Machine Learning Society]]
  - bridgesTo:: [[AI Governance]]
  - bridgesTo:: [[Robotics]]
  - bridgesTo:: [[Natural Language Processing]]

- ### Historical Context
  - ICML was established in 1980, predating the broader deep learning era by decades; early editions were small workshops focused on symbolic and statistical learning methods
  - The conference was formally institutionalised under the IMLS, which provides organisational continuity and appoints programme chairs for each annual edition
  - Landmark papers appearing at ICML include foundational work on [[Gradient Boosting]] (Friedman, 1999), support vector machine extensions, conditional random fields, normalising flows, and numerous reinforcement learning algorithms
  - The 1990s and 2000s saw ICML as a primarily theoretical venue; the 2010s brought a major empirical and deep learning turn as GPU-accelerated [[Neural Network]] research exploded
  - Attendance grew from hundreds to thousands and ultimately tens of thousands of registrants over the 2010s–2020s, necessitating hybrid and virtual format experiments (notably during COVID-19 in 2020–2021)
  - The 2024 edition was held in Vienna, Austria; prior editions have been hosted across North America, Europe, and Asia, reflecting the globalisation of the [[Machine Learning Community]]

- ### Conference Comparison
  - **ICML vs [[NeurIPS]]** — NeurIPS (Neural Information Processing Systems) is broader in scope, encompassing neuroscience, AI systems, and societal impact alongside core ML; ICML maintains stronger emphasis on mathematical foundations and learning theory
  - **ICML vs [[ICLR]]** — ICLR (International Conference on Learning Representations) was founded in 2013 with a specific focus on deep learning and representation learning; ICML predates it by three decades and covers a wider methodological range
  - **ICML vs [[AAAI]]** — AAAI covers the full spectrum of artificial intelligence including knowledge representation, planning, and robotics; ICML is narrower but deeper within the machine learning subdomain
  - **ICML vs [[CVPR]]** — CVPR (Conference on Computer Vision and Pattern Recognition) focuses specifically on [[Computer Vision]]; ICML's ML techniques underpin many CVPR methods but the venues serve distinct communities

- ### Standards and Context
  - **Governed by**: [[International Machine Learning Society]] (IMLS), a non-profit organisation of machine learning researchers
  - **Publication series**: [[Proceedings of Machine Learning Research]] (PMLR) — open access, ISSN 2640-3498
  - **Review process**: double-blind peer review with area chairs, programme chairs, and reviewer bidding systems; ongoing reforms to address reviewer incentive misalignments
  - **Ethics review**: since the early 2020s, ICML has incorporated a broader impact / ethics statement requirement for submissions, paralleling NeurIPS's similar initiative
  - **Open review norms**: unlike ICLR (which uses fully public OpenReview), ICML has historically kept reviews confidential; community debate on transparency continues
  - **Code and reproducibility**: ICML increasingly encourages or requires code submissions and reproducibility checklists to address the ML replication crisis

- ### Current Landscape (2026)
  - ICML 2026, the 43rd edition, runs 6-11 July 2026 at the COEX Convention and Exhibition Center in Gangnam, Seoul, marking the conference's first time in South Korea (Expo/tutorials 6 July, main conference 7-9 July, workshops 10-11 July).
  - Submissions hit a record 23,918 with 6,352 papers accepted (26.6% acceptance), roughly doubling the 12,107 submissions and 3,260 acceptances of ICML 2025 (Vancouver, 13-19 July 2025) and continuing a steep decade-long climb from about 1,037 submissions in 2015.
  - A peer-review integrity crisis dominated the 2026 cycle: program chairs embedded hidden PDF watermarks drawn from a roughly 170,000-phrase dictionary to detect LLM-generated reviews, flagging around 795 reviews (about 1%) and desk-rejecting 497 papers (about 2% of submissions) tied to 398 reciprocal reviewers who breached rules they had agreed to.
  - ICML introduced a formal two-policy framework for LLM use in reviewing: Policy A (conservative, no LLM use) and Policy B (permissive, LLMs may aid comprehension and polish prose but not judge quality or draft the review), with reviewers assigned a policy and prompt injection by authors triggering automatic desk rejection.
  - New authorship and transparency rules took effect: LLMs are barred from being listed as authors, and for all accepted papers ICML now publishes the originally submitted version alongside the camera-ready plus anonymised reviews, meta-reviews and rebuttals; rejected authors may opt in to the same disclosure.
  - Governance reforms include making in-person attendance optional for authors of accepted papers (virtual registration suffices for proceedings-only inclusion), a cap limiting any person to reciprocal-reviewer duty on at most two of their own submissions, and a voluntary author self-ranking scheme to help triage papers needing extra scrutiny.
  - ICML piloted Google's experimental Paper Assistant Tool (PAT) over a limited 14-22 January 2026 window to help authors improve submissions, signalling a move toward sanctioned, auditable AI assistance even as unsanctioned LLM use remains the central open challenge for scaling peer review.

- ### References
  - 1. ICML (2026). ICML 2026 Call for Papers (43rd International Conference on Machine Learning, Seoul). https://icml.cc/Conferences/2026/CallForPapers
  - 2. ICML (2026). ICML 2026 Policy for LLM use in Reviewing. https://icml.cc/Conferences/2026/LLM-Policy
  - 3. ICML Blog (2026). Announcing the ICML 2026 Awards / registration and desk-rejection update. https://blog.icml.cc/category/icml-2026/
  - 4. TechTimes (2026). ICML 2026 Opens in Seoul: Agentic AI Tops Record Year as Peer Review Strains. https://www.techtimes.com/articles/319684/20260704/icml-2026-opens-monday-seoul-agentic-ai-tops-record-year-peer-review-strains.htm
  - 5. Wikipedia (2026). International Conference on Machine Learning (submission/acceptance statistics and locations). https://en.wikipedia.org/wiki/International_Conference_on_Machine_Learning

- ### Provenance
  - sources:: International Machine Learning Society (imls.cc); Proceedings of Machine Learning Research (PMLR); ICML conference proceedings 1980–2024
  - updated:: 2026-06-13
