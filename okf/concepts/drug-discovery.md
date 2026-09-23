---
okf_version: "0.2"
type: Class
title: Drug Discovery
resource: urn:ngm:class:drug-discovery
domain: artificial-intelligence
description: Drug discovery is the multidisciplinary scientific process of identifying and validating novel therapeutic compounds that modulate disease-relevant biological targets, spanning target identification, hit discovery, lead optimisation, and preclinical candidate nomination. The modern discipline applies machine learning, deep learning, graph neural networks, and generative modelling to predict molecu
maturity: emerging
quality: 0.92
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:computational-biology
  - urn:ngm:class:biomedical-informatics
  - urn:ngm:class:computer-aided-drug-design
hasPart:
  - urn:ngm:class:target-identification
  - urn:ngm:class:virtual-screening
  - urn:ngm:class:lead-optimisation
  - urn:ngm:class:admet-prediction
  - urn:ngm:class:generative-molecular-design
  - urn:ngm:class:retrosynthesis
  - urn:ngm:class:biomarker-discovery
  - urn:ngm:class:high-throughput-screening
  - urn:ngm:class:molecular-dynamics-simulation
requires:
  - urn:ngm:class:cheminformatics
  - urn:ngm:class:structural-biology
  - urn:ngm:class:biomedical-data
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:multi-omics
  - urn:ngm:class:high-throughput-screening
enables:
  - urn:ngm:class:clinical-trials
  - urn:ngm:class:precision-medicine
  - urn:ngm:class:biomarker-discovery
  - urn:ngm:class:precision-medicine
  - urn:ngm:class:retrosynthesis
  - urn:ngm:class:repurposing
dependsOn:
  - urn:ngm:class:active-learning
  - urn:ngm:class:protein-structure-prediction
  - urn:ngm:class:deep-learning
  - urn:ngm:class:molecular-dynamics-simulation
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:computer-aided-drug-design
  - urn:ngm:class:structure-based-drug-design
  - urn:ngm:class:ligand-based-drug-design
  - urn:ngm:class:qsar-modelling
contrastsWith:
  - urn:ngm:class:traditional-high-throughput-screening
  - urn:ngm:class:phenotypic-screening
  - urn:ngm:class:empirical-medicinal-chemistry
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:generative-model
  - urn:ngm:class:transformer
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:active-learning
  - urn:ngm:class:molecular-dynamics-simulation
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:federated-learning
  - urn:ngm:class:causal-inference
  - urn:ngm:class:transfer-learning
supports:
  - urn:ngm:class:oncology
  - urn:ngm:class:infectious-disease-research
  - urn:ngm:class:rare-disease
  - urn:ngm:class:cns-drug-discovery
  - urn:ngm:class:antibody-design
standardizedBy:
  - urn:ngm:class:fda
  - urn:ngm:class:ema
  - urn:ngm:class:mhra
  - urn:ngm:class:ich
relatedTo:
  - urn:ngm:class:simulation
  - urn:ngm:class:genomics
  - urn:ngm:class:digital-twin
  - urn:ngm:class:proteomics
  - urn:ngm:class:multi-omics
  - urn:ngm:class:synthetic-biology
  - urn:ngm:class:systems-biology
  - urn:ngm:class:pharmacokinetics
  - urn:ngm:class:regulatory-compliance
---

# Drug Discovery

Drug discovery is the multidisciplinary scientific process of identifying and validating novel therapeutic compounds that modulate disease-relevant biological targets, spanning target identification, hit discovery, lead optimisation, and preclinical candidate nomination. The modern discipline applies machine learning, deep learning, graph neural networks, and generative modelling to predict molecular properties such as binding affinity, selectivity, and ADMET profiles — dramatically accelerating virtual screening and de novo molecular design. Structural biology tools including protein structure prediction (e.g. AlphaFold) underpin structure-based drug design by supplying accurate 3D target models at proteome scale. The field sits at the intersection of cheminformatics, structural biology, computational chemistry, and clinical informatics, with AI methods increasingly embedded throughout the entire development pipeline from target discovery through biomarker identification and patient stratification.
