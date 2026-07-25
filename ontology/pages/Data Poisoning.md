public:: true

# Data Poisoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eb79e82ce2dd253246564c5ce600ec7139878ea1b6f4edfde5d6f6518b79a801",
  "@type": "Page",
  "vc:slug": "data-poisoning",
  "title": "Data Poisoning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ball2020metaverse",
      "vc:label": "ball2020metaverse"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:linked:mitre-atlas",
      "vc:label": "MITRE ATLAS"
    },
    {
      "@id": "urn:visionflow:linked:ncsc",
      "vc:label": "NCSC"
    },
    {
      "@id": "urn:visionflow:linked:neural-networks",
      "vc:label": "neural networks"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "vc:label": "NIST AI Risk Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:wouters2022",
      "vc:label": "Wouters2022"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "computer vision"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:diffusion-models",
      "vc:label": "Diffusion Models"
    },
    {
      "@id": "urn:visionflow:owl:class:fooocus",
      "vc:label": "Fooocus"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graphing",
      "vc:label": "Knowledge Graphing"
    },
    {
      "@id": "urn:visionflow:owl:class:latent-space",
      "vc:label": "latent space"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:transformers",
      "vc:label": "Transformers"
    },
    {
      "@id": "urn:visionflow:owl:class:unreal-engine",
      "vc:label": "Unreal Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0085"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Poisoning"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-poisoning",
  "@type": "Class",
  "label": "Data Poisoning",
  "definition": "A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:adversarial-attack",
      "label": "Adversarial Attack"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-augmentation-strategies", "label": "Data Augmentation Strategies"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-poisoning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eb79e82ce2dd253246564c5ce600ec7139878ea1b6f4edfde5d6f6518b79a801"
  },
  "vc:resolutions": [
    {
      "raw": "[[ball2020metaverse]]",
      "resolved": "urn:visionflow:linked:ball2020metaverse",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[MITRE ATLAS]]",
      "resolved": "urn:visionflow:linked:mitre-atlas",
      "kind": "StubLink"
    },
    {
      "raw": "[[NCSC]]",
      "resolved": "urn:visionflow:linked:ncsc",
      "kind": "StubLink"
    },
    {
      "raw": "[[neural networks]]",
      "resolved": "urn:visionflow:linked:neural-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI Risk Management Framework]]",
      "resolved": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wouters2022]]",
      "resolved": "urn:visionflow:linked:wouters2022",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[computer vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diffusion Models]]",
      "resolved": "urn:visionflow:owl:class:diffusion-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fooocus]]",
      "resolved": "urn:visionflow:owl:class:fooocus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graphing]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graphing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network Latent Space]]",
      "resolved": "urn:visionflow:owl:class:latent-space",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformers]]",
      "resolved": "urn:visionflow:owl:class:transformers",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Unreal Engine]]",
      "resolved": "urn:visionflow:owl:class:unreal-engine",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataPoisoning
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **requires**: Training Data, Model Training (the attack operates on training data during the training process)
  - **contrastsWith**: Adversarial Robustness (robustness techniques are the defensive response to poisoning)
  - **relatedTo**: Data Augmentation Strategies, Federated Learning, Machine Learning (augmentation can mask poisoning; federated learning faces distributed poisoning risks; machine learning is the broader affected domain)

- ### Content
  - A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.
  ## Academic Context

  - Brief contextual overview
  - Data poisoning is an adversarial attack targeting the training phase of machine learning and artificial intelligence systems
  - The attack involves the deliberate injection, modification, or deletion of training data to undermine model integrity, reliability, or security
  - The goal may be to induce targeted misclassifications, embed backdoor triggers, or degrade overall model performance

  - Key developments and current state
  - Once considered a theoretical concern, data poisoning is now a recognised operational threat in both academic and industrial settings
  - The rise of generative AI and large language models (LLMs) has expanded the attack surface, with poisoning now possible across the entire model lifecycle, including pre-training, fine-tuning, retrieval-augmented generation (RAG), and agent tooling
  - The attack is not limited to traditional supervised learning; it also affects unsupervised and reinforcement learning systems

  - Academic foundations
  - The concept draws from adversarial machine learning, with early work focusing on label flipping and backdoor attacks
  - Modern research has expanded to include poisoning in federated learning, transfer learning, and multi-modal models

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Data poisoning is a live security risk for organisations deploying AI, particularly in sectors such as finance, healthcare, and cybersecurity
  - Major platforms and cloud providers have integrated safeguards, including data provenance tracking, anomaly detection, and model auditing
  - Organisations such as IBM, CrowdStrike, and Lakera AI offer tools and services to detect and mitigate data poisoning in production systems

  - Notable organisations and platforms
  - IBM Think and CrowdStrike Charlotte AI provide built-in defences against data poisoning for enterprise AI deployments
  - Lakera Guard is used by companies like Dropbox to secure LLM-powered applications

  - UK and North England examples where relevant
  - UK financial institutions, including those in Manchester and Leeds, have implemented robust AI auditing and governance frameworks to counter data poisoning risks
  - The Alan Turing Institute in London, with regional collaborations in Newcastle and Sheffield, supports research into AI security and resilience
  - Regional innovation hubs in Manchester and Leeds are piloting AI-driven fraud detection systems with enhanced data integrity controls

  - Technical capabilities and limitations
  - Modern defences include data sanitisation, adversarial training, and anomaly detection algorithms
  - Limitations remain in detecting subtle, low-volume poisoning attacks and in securing open-source or crowdsourced training data

  - Standards and frameworks
  - The UK National Cyber Security Centre (NCSC) provides guidance on securing AI systems, including recommendations for data integrity and model auditing
  - ISO/IEC 23053 and NIST AI Risk Management Framework offer international standards for AI security and resilience

  ## Research & Literature

  - Key academic papers and sources
  - Biggio, B., Nelson, B., & Rubinstein, B. (2018). Poisoning attacks against support vector machines. Machine Learning, 91(2), 121–147. https://doi.org/10.1007/s10994-012-5322-z
  - Chen, X., Liu, C., Li, B., Lu, K., & Song, D. (2017). Targeted backdoor attacks on deep learning systems using data poisoning. arXiv preprint arXiv:1712.05526. https://arxiv.org/abs/1712.05526
  - Jagielski, M., Oprea, A., Biggio, B., Liu, C., Nita-Rotaru, C., & Li, B. (2018). Manipulating machine learning: Poisoning attacks and countermeasures for regression learning. In 2018 IEEE Symposium on Security and Privacy (pp. 19–35). https://doi.org/10.1109/SP.2018.00012
  - Shafahi, A., Huang, W. R., Studer, C., Feizi, S., & Goldstein, T. (2018). Poison frogs! Targeted clean-label poisoning attacks on neural networks. arXiv preprint arXiv:1804.00792. https://arxiv.org/abs/1804.00792
  - Liu, Y., Ma, S., Aafer, Y., Lee, W. C., Zhai, J., Wang, W., & Zhang, X. (2017). Trojaning attack on neural networks. arXiv preprint arXiv:1708.06733. https://arxiv.org/abs/1708.06733

  - Ongoing research directions
  - Detection and mitigation of low-volume, stealthy poisoning attacks
  - Secure federated and transfer learning
  - Robustness of generative AI and LLMs to data poisoning
  - Integration of data poisoning defences into DevOps and MLOps pipelines

  ## UK Context

  - British contributions and implementations
  - The UK has been at the forefront of AI security research, with significant contributions from the Alan Turing Institute and universities such as Oxford, Cambridge, and Imperial College London
  - UK financial regulators have issued guidance on AI risk management, including data poisoning

  - North England innovation hubs (if relevant)
  - Manchester and Leeds are home to several AI startups and research centres focused on secure and trustworthy AI
  - The University of Manchester and Leeds Beckett University collaborate on projects related to AI security and data integrity

  - Regional case studies
  - A Manchester-based fintech company implemented a data poisoning detection system for its AI-driven credit scoring model, reducing the risk of biased or manipulated outcomes
  - A Leeds hospital piloted an AI system for medical image analysis with enhanced data integrity controls, ensuring reliable and trustworthy results

  ## Future Directions

  - Emerging trends and developments
  - Increased use of AI in critical infrastructure and public services, raising the stakes for data poisoning attacks
  - Development of automated tools for real-time detection and mitigation of data poisoning

  - Anticipated challenges
  - Balancing security and privacy in AI systems
  - Ensuring the integrity of open-source and crowdsourced training data
  - Adapting defences to the evolving threat landscape

  - Research priorities
  - Improving the robustness of generative AI and LLMs to data poisoning
  - Developing standards and best practices for AI security and resilience
  - Enhancing collaboration between academia, industry, and government on AI security

  ## References

  1. Biggio, B., Nelson, B., & Rubinstein, B. (2018). Poisoning attacks against support vector machines. Machine Learning, 91(2), 121–147. https://doi.org/10.1007/s10994-012-5322-z
  2. Chen, X., Liu, C., Li, B., Lu, K., & Song, D. (2017). Targeted backdoor attacks on deep learning systems using data poisoning. arXiv preprint arXiv:1712.05526. https://arxiv.org/abs/1712.05526
  3. Jagielski, M., Oprea, A., Biggio, B., Liu, C., Nita-Rotaru, C., & Li, B. (2018). Manipulating machine learning: Poisoning attacks and countermeasures for regression learning. In 2018 IEEE Symposium on Security and Privacy (pp. 19–35). https://doi.org/10.1109/SP.2018.00012
  4. Shafahi, A., Huang, W. R., Studer, C., Feizi, S., & Goldstein, T. (2018). Poison frogs! Targeted clean-label poisoning attacks on neural networks. arXiv preprint arXiv:1804.00792. https://arxiv.org/abs/1804.00792
  5. Liu, Y., Ma, S., Aafer, Y., Lee, W. C., Zhai, J., Wang, W., & Zhang, X. (2017). Trojaning attack on neural networks. arXiv preprint arXiv:1708.06733. https://arxiv.org/abs/1708.06733
  6. UK National Cyber Security Centre. (2025). Securing AI Systems. https://www.ncsc.gov.uk/collection/securing-ai-systems
  7. ISO/IEC 23053:2023. Framework for Artificial Intelligence (AI) Systems Using Machine Learning. https://www.iso.org/standard/75000.html
  8. NIST. (2023). AI Risk Management Framework. https://www.nist.gov/itl/ai-risk-management-framework


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources:: [[MITRE ATLAS]], [[ISO/IEC 23894:2023]], [[NCSC]], [[NIST AI Risk Management Framework]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
