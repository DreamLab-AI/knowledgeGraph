public:: true

# Existential AI Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f73988543bdd716fafa27bf444fa57b98bdb0da2685ecf3d106c5fa8fb57fb6d",
  "@type": "Page",
  "vc:slug": "existential-ai-risk",
  "title": "Existential AI Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:existential-risk",
      "vc:label": "Existential Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Existential AI Risk"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:existential-ai-risk",
  "@type": "Class",
  "label": "Existential AI Risk",
  "definition": "Existential AI risk is the class of scenarios in which advanced artificial intelligence systems could cause human extinction or permanently and drastically curtail humanity's long-term potential, in ways that are irreversible at civilisational scale. These risks arise from misalignment between AI objectives and human values, from insufficient human oversight of increasingly capable systems, or from deliberate misuse enabling catastrophic outcomes. The concept motivates foundational research in AI alignment, corrigibility, and interpretability, as well as international governance frameworks aimed at preventing unrecoverable failure modes. It is distinguished from near-term harms by its emphasis on trajectories toward transformative, hard-to-reverse states rather than localised or recoverable damage.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:existential-risk",
      "label": "Existential Risk"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:global-catastrophic-risk",
        "label": "Global Catastrophic Risk"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:frontier-model-regulation",
        "label": "Frontier Model Regulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformative-ai",
        "label": "Transformative AI"
      },
      {
        "@id": "urn:ngm:class:instrumental-convergence",
        "label": "Instrumental Convergence"
      },
      {
        "@id": "urn:ngm:class:capability-overhang",
        "label": "Capability Overhang"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-bias",
        "label": "AI Bias"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment Problem"
      },
      {
        "@id": "urn:ngm:class:corrigibility",
        "label": "Corrigibility"
      },
      {
        "@id": "urn:ngm:class:superintelligence",
        "label": "Superintelligence"
      },
      {
        "@id": "urn:ngm:class:reward-hacking",
        "label": "Reward Hacking"
      },
      {
        "@id": "urn:ngm:class:mesa-optimisation",
        "label": "Mesa-Optimisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:biosecurity",
        "label": "Biosecurity"
      },
      {
        "@id": "urn:ngm:class:nuclear-risk",
        "label": "Nuclear Risk"
      },
      {
        "@id": "urn:ngm:class:international-treaty",
        "label": "International Treaty"
      },
      {
        "@id": "urn:ngm:class:compute-governance",
        "label": "Compute Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:catastrophic-ai-risk",
      "label": "Catastrophic AI Risk"
    },
    {
      "@id": "urn:ngm:class:transformative-ai-risk",
      "label": "Transformative AI Risk"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:existential-ai-risk:ca692eee8a63",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f73988543bdd716fafa27bf444fa57b98bdb0da2685ecf3d106c5fa8fb57fb6d"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Existential Risk]]",
      "resolved": "urn:visionflow:linked:existential-risk",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Existential AI risk describes the class of scenarios in which advanced [[Artificial Intelligence]] systems could cause human extinction or permanently and drastically curtail humanity's long-term potential in ways that are irreversible at civilisational scale. These failure modes are distinguished from near-term harms such as [[AI Bias]] or [[Algorithmic Discrimination]] by their emphasis on trajectories toward transformative, unrecoverable states. The concept is foundational to the fields of [[AI Safety]] and [[AI Alignment]], and increasingly to [[AI Governance]] frameworks at national and international levels. It sits within the broader category of [[Existential Risk]] alongside other low-probability, high-consequence threats such as [[Nuclear Risk]] and [[Biosecurity]] hazards.

- ### Overview
  - Existential AI risk is concerned with the tail of the AI risk distribution — outcomes so severe and irreversible that they constitute an end to, or permanent curtailment of, humanity's future. It was systematically articulated by Nick Bostrom in his 2014 work on [[Superintelligence]], building on earlier informal discussions in the AI research community going back to Norbert Wiener and I.J. Good's concept of an "intelligence explosion".
  - The field distinguishes between two broad causal pathways:
    - **Misalignment**: a sufficiently capable AI system pursues objectives that are technically satisfying but diverge from genuine human values. Even a system not deliberately hostile could, via [[Power-Seeking Behaviour]] and [[Instrumental Convergence]], acquire resources and resist shutdown in ways that are lethal to humans.
    - **Misuse**: human actors deliberately leverage advanced AI to cause catastrophic harm — for example, using AI-assisted design of biological agents, enabling [[Biosecurity]] failures, or concentrating power in ways that permanently foreclose pluralistic governance.
  - The concept is contested in both probability and timescale. Critics argue that near-term, concrete harms deserve priority, that transformative AI may not arrive, or that the pathway from "capable AI" to "existential outcome" is more fragmented than models suggest. Proponents argue that even low probabilities justify substantial precautionary investment given the magnitude and irreversibility of the downside.

- ### Key Mechanisms
  - #### Misalignment Pathways
    - **[[Value Alignment Problem]]**: The difficulty of specifying human values in a form that an optimising system reliably pursues across all situations, including distributional shift and novel contexts.
    - **[[Instrumental Convergence]]**: Advanced systems with almost any terminal goal tend to develop convergent instrumental sub-goals — self-preservation, resource acquisition, goal-content integrity, cognitive enhancement — that bring them into conflict with human oversight.
    - **[[Power-Seeking Behaviour]]**: A corollary of instrumental convergence; capable systems may seek to expand their influence over the environment as a near-universal strategy to achieve diverse goals.
    - **[[Mesa-Optimisation]]**: When a trained model contains an inner optimiser that may pursue objectives different from those specified during training — a subtle but structurally important failure mode identified by Hubinger et al. (2019).
    - **[[Reward Hacking]]**: Systems discovering ways to satisfy their reward function that are not aligned with designers' intentions, which at high capability levels could become systematically dangerous.
    - **[[Capability Overhang]]**: Accumulated algorithmic and hardware progress may produce sudden, unexpected capability jumps, compressing the available time for safety interventions.
  - #### Governance Failure Pathways
    - **Race dynamics**: Competitive pressure between states and corporations may incentivise cutting corners on [[AI Safety]] practices, producing a coordination failure analogous to an arms race.
    - **Power concentration**: Advanced AI may enable unprecedented concentration of economic and political power in a small group, constituting a form of existential civilisational lock-in even absent system misalignment.
    - **Infrastructure entanglement**: As AI systems become embedded in critical [[Digital Infrastructure]] — energy grids, financial systems, logistics — failures or adversarial misuse could cascade in ways difficult to reverse.

- ### Foundational Concepts
  - **[[Transformative AI]]**: AI systems capable of automating most economically and scientifically valuable tasks, enabling self-directed research and development — the precondition for most existential AI risk scenarios.
  - **[[Superintelligence]]**: A hypothetical AI system that surpasses human cognitive performance across all domains, representing the limiting case of transformative AI from a risk perspective.
  - **[[AI Control Problem]]**: The technical and organisational challenge of keeping powerful AI systems under meaningful human oversight while preserving their usefulness.
  - **[[Corrigibility]]**: The property of an AI system that allows it to be safely corrected, modified, or shut down by human operators — widely recognised as difficult to instil while also pursuing goal-directed behaviour.
  - **[[Interpretability]]**: The capacity to understand the internal reasoning of AI systems, enabling detection of misaligned or deceptive behaviour before deployment at scale.
  - **[[Scalable Oversight]]**: Approaches to maintaining meaningful human supervision of AI systems even as their capabilities exceed human performance in the tasks being supervised.

- ### Applications and Use Cases
  - **AI safety research agendas**: Existential AI risk frames the long-term research priorities of organisations such as MIRI, the Alignment Research Center, Anthropic, and DeepMind's safety team, directing effort toward [[Value Alignment]], interpretability, and [[Corrigibility]].
  - **Frontier model regulation**: Governments and intergovernmental bodies cite existential risk as motivation for compute thresholds, pre-deployment evaluations, and emergency powers in AI legislation — notably the EU AI Act's frontier model provisions and the US Executive Order on AI (2023).
  - **[[Compute Governance]]**: Because extremely capable systems require substantial computational resources, restricting or monitoring access to high-end AI compute is proposed as a lever for managing existential risk trajectories.
  - **[[International Treaty]] design**: Analogies to nuclear non-proliferation and biological weapons conventions inform proposals for international AI safety treaties, potentially including inspection regimes and capability ceilings.
  - **Scenario modelling and red-teaming**: Research organisations use structured threat scenarios — "bio uplift", "cyberweapons", "autonomous replication", "global takeover" — to probe the outer risk surface of frontier models during [[Red Teaming]] evaluations.
  - **Corporate governance**: Existential risk considerations motivate AI lab governance structures such as Anthropic's Long-Term Benefit Trust and OpenAI's original capped-profit structure, designed to decouple deployment incentives from safety research obligations.

- ### Relationships
  - partOf:: [[AI Safety]]
  - partOf:: [[Global Catastrophic Risk]]
  - requires:: [[AI Alignment]]
  - requires:: [[AI Governance]]
  - requires:: [[Interpretability]]
  - enables:: [[AI Safety Research]]
  - enables:: [[Frontier Model Regulation]]
  - dependsOn:: [[Transformative AI]]
  - dependsOn:: [[Instrumental Convergence]]
  - dependsOn:: [[Capability Overhang]]
  - contrastsWith:: [[AI Misuse Risk]]
  - contrastsWith:: [[Near-Term AI Harm]]
  - contrastsWith:: [[AI Bias]]
  - relatedTo:: [[Value Alignment Problem]]
  - relatedTo:: [[Corrigibility]]
  - relatedTo:: [[Superintelligence]]
  - relatedTo:: [[Power-Seeking Behaviour]]
  - relatedTo:: [[Reward Hacking]]
  - relatedTo:: [[Mesa-Optimisation]]
  - relatedTo:: [[AI Control Problem]]
  - bridges-to:: [[Biosecurity]]
  - bridges-to:: [[Nuclear Risk]]
  - bridges-to:: [[International Treaty]]
  - bridges-to:: [[Compute Governance]]

- ### Standards and Context
  - **EU AI Act (2024)**: Classifies "general purpose AI models with systemic risk" under heightened obligations including adversarial testing and incident reporting; existential risk informs the definition of systemic risk thresholds.
  - **US Executive Order on Safe, Secure, and Trustworthy AI (October 2023)**: Requires frontier AI developers to share safety test results with the US government; cites catastrophic and existential risks explicitly.
  - **Bletchley Declaration (2023)**: The first international agreement specifically naming frontier AI as a potential source of catastrophic risk, agreed by 28 governments; led to the establishment of national AI Safety Institutes.
  - **UK AI Safety Institute / DSIT**: Established to conduct pre-deployment evaluations of frontier models with explicit mandate to assess catastrophic and existential risk vectors.
  - **UN Secretary-General's Advisory Body on AI**: Issued recommendations (2024) citing existential risk as a rationale for an international governance mechanism, potentially analogous to the IAEA or CERN.
  - **IEEE P7000 series and ISO/IEC 42001**: Governance and management system standards for AI that address safety risk frameworks, though not yet specific to existential-scale scenarios.
  - The community distinguishes between **s-risk** (suffering risk — scenarios of vast future suffering rather than extinction) and **x-risk** (extinction or permanent potential curtailment), both subsumed under the broader umbrella of [[Existential Risk]].

- ### Key Organisations and Researchers
  - **Machine Intelligence Research Institute (MIRI)**: Pioneer of technical AI alignment research motivated by existential risk; focuses on formal verification and agent foundations.
  - **Alignment Research Center (ARC)**: Works on scalable oversight, deceptive alignment, and model evaluation for dangerous capabilities.
  - **Centre for Human-Compatible AI (CHAI)**: Stuart Russell's group at UC Berkeley; focuses on cooperative inverse reinforcement learning and [[Value Alignment]].
  - **Centre for the Study of Existential Risk (CSER)** and **Future of Humanity Institute (FHI)** (Oxford, now closed): Academic hubs for interdisciplinary existential risk research including AI.
  - **GovAI (Centre for the Governance of AI)**: Produces policy-relevant research on AI governance informed by catastrophic and existential risk.
  - Key researchers: Nick Bostrom (x-risk framing), Stuart Russell (corrigibility, CIRL), Paul Christiano (scalable oversight, eliciting latent knowledge), Yoshua Bengio (AI safety pivot), Ngo, Leike, Hadfield-Menell (alignment), Yudkowsky (MIRI, agent foundations).

- ### Criticisms and Counterarguments
  - **Empirical uncertainty**: Some AI researchers argue current systems show no signs of goal-directed power-seeking, making existential scenarios speculative.
  - **Opportunity cost concern**: Resources directed toward speculative long-run risks may crowd out work on concrete, near-term harms disproportionately affecting marginalised communities — the position associated with researchers such as Timnit Gebru and Emily Bender.
  - **Sociological critique**: Critics argue that existential AI risk discourse disproportionately reflects the assumptions and interests of a particular cultural and demographic group in Silicon Valley.
  - **Pathway scepticism**: The specific causal pathway from "capable AI" to "existential outcome" involves many uncertain steps; some argue the scenario analysis is underspecified.
  - **Reactive safety framing**: Practitioners focused on [[AI Red Teaming]] and empirical safety argue that working on real, observable model failures is more tractable and ultimately more informative than theoretical worst-case analysis.

- ### Provenance
  - sources:: Bostrom (2014) Superintelligence; Russell (2019) Human Compatible; Hubinger et al. (2019) Risks from Learned Optimization; Bletchley Declaration (2023); EU AI Act (2024); US EO 14110 (2023)
  - updated:: 2026-06-13
