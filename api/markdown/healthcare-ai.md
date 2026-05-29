- ### Definition
  - Healthcare AI is the systematic application of machine learning, natural language processing, computer vision, and large language models to clinical and operational problems in healthcare—including diagnostic imaging analysis, clinical decision support, drug discovery, genomic interpretation, and patient outcome prediction. The field operates under stringent regulatory oversight (FDA, MHRA, MDR) requiring prospective clinical validation, post-market surveillance, and clear human-AI workflow integration to ensure patient safety. Fairness, explainability, and bias auditing are central concerns given the high-stakes nature of clinical decisions.

- ### Semantic Classification
  - owl-class:: healthcare-ai:Healthcare AI
  - owl-role:: Concept

- ### Relationships
  - uses [[Medical Imaging]]
  - uses [[Deep Learning]]
  - enables [[Clinical Decision Support]]
  - enables [[Drug Discovery]]
  - relatedTo [[Radiology AI]]
  - relatedTo [[Pathology AI]]

- ### Content
  Healthcare AI spans the full clinical and operational spectrum. In diagnostics, Medical Imaging AI systems apply convolutional neural networks and vision transformers to radiology (CT, MRI, X-ray), Pathology AI to whole-slide histology images, and ophthalmology AI to retinal fundus photographs, in each case detecting pathology at sensitivities that complement specialist review. Radiology AI is the most commercially mature segment, with FDA-cleared products for pulmonary nodule detection, intracranial haemorrhage triage, and diabetic retinopathy screening.

  Clinical Decision Support systems embed AI at the point of care: NLP models extract structured information from clinical notes, LLMs assist with discharge summary drafting and prior authorisation, and risk stratification models predict sepsis onset, readmission risk, and medication adverse events from electronic health record streams. Drug Discovery AI uses deep learning for protein structure prediction (AlphaFold), molecular generation, and clinical trial cohort matching, compressing timelines across the discovery-to-development pipeline.

  Regulatory pathways differ by jurisdiction: in the US, the FDA regulates AI/ML-based software as a medical device (SaMD) under the De Novo or 510(k) process; the EU MDR (Medical Device Regulation 2017/745) and IVDR apply in Europe. Both frameworks increasingly require real-world performance monitoring post-deployment. Bias auditing is essential because training datasets drawn from specific health systems may not represent the demographic diversity of deployment populations, risking differential performance across subgroups.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z