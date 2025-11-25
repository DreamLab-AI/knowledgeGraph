- ### OntologyBlock
  id:: named-entity-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-1683
	- preferred-term:: Named Entity
	- source-domain:: mv
	- owl:class:: mv:NamedEntity
	- status:: draft
	- public-access:: true




### Relationships
- is-subclass-of:: [[Technology]]


## Academic Context

A **Named Entity** in the context of Natural Language Processing (NLP) is a real-world object—such as a person, organisation, location, date, or other proper noun—that is explicitly mentioned in text and can be categorised into predefined classes[9][5][13]. The process of identifying and classifying these entities is known as **Named Entity Recognition (NER)**, a foundational task in modern NLP and artificial intelligence.

**Core Concepts**

- **Entity Detection**: Locating spans of text that refer to entities (e.g., “London”, “NHS”, “Rishi Sunak”)[3][7].
- **Entity Classification**: Assigning each detected entity to a category, such as PERSON, ORGANISATION, LOCATION, DATE, etc.[3][13].
- **Entity Disambiguation**: Resolving ambiguities when a term could refer to multiple entities (e.g., “Apple” as a company or fruit)[1][7].
- **Nested Entities**: Handling cases where entities are embedded within others (e.g., “University of Oxford” contains “Oxford” as a location)[7].

**How It Works**

NER systems typically follow these steps[7][5][9]:

1. **Text Preprocessing**: Clean and tokenise the input text.
2. **Feature Extraction**: Extract linguistic features (e.g., part-of-speech tags, word shapes).
3. **Entity Detection and Classification**: Use algorithms to identify and categorise entities.
4. **Post-Processing**: Refine results, resolve ambiguities, and handle nested entities.
5. **Output Generation**: Produce annotated text or structured data (e.g., JSON, XML) with entities highlighted.

**Key Components**

- **Tagging Schemes**: The most common is BIO (Begin, Inside, Outside), which marks the start and continuation of entities in text[7].
- **Entity Categories**: Standard categories include PERSON, ORGANISATION, LOCATION, DATE, TIME, MONEY, PERCENT, and more. Domain-specific categories (e.g., chemicals in biomedical texts) are increasingly common[1][13].
- **NER Models**:
  - **Rule-based**: Use hand-crafted rules and dictionaries; effective for well-defined domains but limited in flexibility[9].
  - **Machine Learning**: Algorithms like Conditional Random Fields (CRF), Support Vector Machines (SVM), and Hidden Markov Models (HMM) learn from annotated data[5][9].
  - **Deep Learning**: Neural networks (e.g., CNNs, RNNs, Transformers) automatically learn complex patterns and context, now the state-of-the-art for most languages and domains[1][9].
- **Annotation Tools**: Software such as Encord, Prodigy, and Doccano are used to create labelled datasets for training and evaluation[7].

**Recent Advances (2024–2025)**

- **Multimodal NER**: Integrates text with other data types (e.g., images, audio) for richer context[1].
- **Graph Attention Networks**: Capture relationships between entities for improved disambiguation and context understanding[1].
- **Domain Adaptation**: Custom NER models for fields like biomedicine, finance, and cybersecurity, reflecting the growing complexity of real-world applications[1].
- **Multilingual and Cross-lingual NER**: Models that work across multiple languages, crucial for global applications[1].

**Importance**

- **Information Extraction**: Enables automated extraction of structured data from unstructured text, powering applications such as search engines, digital assistants, and business intelligence[15][17].
- **Data Anonymisation**: Identifies personal or sensitive information for redaction, supporting compliance with regulations like GDPR[3].
- **Knowledge Graph Construction**: Forms the basis for building large-scale knowledge bases by linking entities and their relationships[1].
- **Enhanced NLP Applications**: Improves performance in tasks like question answering, summarisation, and sentiment analysis by providing contextually relevant information[5][7].

**UK Context and Standards**

- NER is widely used in UK sectors such as healthcare (e.g., NHS patient data anonymisation), finance (e.g., compliance monitoring), and government (e.g., intelligence analysis).
- Compliance with UK and EU data protection standards (GDPR) often relies on robust NER for identifying and managing personal data[3].
- Leading UK universities and research institutes contribute to advances in NER, particularly in multilingual and domain-specific contexts.

**Summary Table: Key Aspects of Named Entity (NER)**

| Aspect                  | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Definition              | Real-world object in text, categorised into predefined classes               |
| Core Concepts           | Detection, classification, disambiguation, nested entities                  |
| Key Components          | Tagging schemes, entity categories, models (rule-based, ML, deep learning)  |
| Recent Advances         | Multimodal NER, graph attention, domain adaptation, multilingual models      |
| Importance              | Information extraction, anonymisation, knowledge graphs, enhanced NLP        |

This overview reflects the current (2024–2025) technical landscape, highlighting both foundational principles and the latest innovations in Named Entity technology.


## Current Landscape (2025)

The current (2024–2025) industry standards, frameworks, tools, and best practices for **Named Entity Recognition (NER)** focus on standardised datasets, advanced AI models, robust annotation tools, and compliance with privacy and ethical guidelines. In the UK, NER is widely implemented in sectors such as finance, healthcare, and government, often aligned with national data protection standards.

**Industry Standards and Frameworks**
- **Standardised Datasets:** Recent efforts, such as the OpenNER initiative and Universal NER (UNER), have established gold-standard, multilingual benchmarks with harmonised entity type ontologies (e.g., PER for person, ORG for organisation) to ensure consistency across datasets and facilitate cross-lingual and cross-domain research[1][7].
- **Annotation Conventions:** Entity types are now standardised using capitalised labels (e.g., ORG, LOC, PER), with underscores for multi-word types (e.g., PET_NAME). This enables interoperability and benchmarking across tools and platforms[1].
- **Evaluation Metrics:** F1 score, precision, and recall remain the primary metrics for assessing NER performance, with new datasets supporting robust benchmarking[1][7].
- **Privacy and Ethics:** NER systems in the UK and EU must comply with GDPR and related data protection laws, especially when processing personal or sensitive information. Anonymisation and responsible AI practices are increasingly embedded in NER workflows[13][11].

**Best Practices**
- **Data Accessibility:** Use openly accessible, well-annotated datasets for training and evaluation, avoiding restricted or request-only corpora[1].
- **Tokenisation and Formatting:** Ensure data is tokenised and formatted consistently, typically in JSON or XML, to support reproducibility and integration with downstream applications[1][3].
- **Post-Processing:** Implement steps to resolve nested entities, disambiguate overlapping types, and ensure output consistency[3].
- **Continuous Benchmarking:** Regularly benchmark models against standard datasets and update them to reflect evolving language and domain-specific needs[1][7].

**Technologies and Tools**
- **Machine Learning Models:** 
  - **Transformer-based models** (e.g., XLM-R, mBERT) are the current state-of-the-art, outperforming earlier models in multilingual and multi-domain settings[1].
  - **Rule-based systems** are still used for high-precision, domain-specific applications but are less scalable[3][5].
- **Annotation Platforms:** 
  - **Prodigy**, **Label Studio**, and **Doccano** are widely adopted for annotating and managing NER datasets, supporting collaborative workflows and integration with machine learning pipelines[3].
- **APIs and Cloud Services:** 
  - Leading NER APIs include **spaCy**, **Stanford NLP**, **Hugging Face Transformers**, and commercial offerings from **Google Cloud Natural Language**, **AWS Comprehend**, and **Microsoft Azure Text Analytics**[9].
- **Entity Linking:** Increasingly, NER is paired with entity linking systems that map recognised entities to knowledge bases (e.g., Wikidata, DBpedia) for enhanced semantic understanding[7].

**Organisations and Standards Bodies**
- **UK National Cyber Security Centre (NCSC):** Provides guidance on secure AI and data processing, including NER, and promotes standards such as Cyber Essentials for organisational resilience[2].
- **NATO Data and AI Review Board:** Develops responsible AI certification standards, influencing best practices for NER in defence and security contexts[4].
- **European Data Protection Board (EDPB):** Issues guidance on AI risks, including those related to NER and data privacy[11].

**UK Implementations and Context**
- **Public Sector:** The UK government and NHS use NER for information extraction from unstructured records, with strict adherence to data privacy and security standards[2][11].
- **Financial Services:** NER is used for compliance (e.g., anti-money laundering), customer onboarding, and risk analysis, often leveraging UK-specific datasets and regulatory frameworks.
- **Research and Academia:** UK universities contribute to open-source NER tools and datasets, participating in international benchmarking initiatives[1][7].
- **Cyber Security:** NER is integrated into threat intelligence platforms for entity extraction from incident reports and threat feeds, aligning with NCSC guidance[2].

**Summary Table: Key Technologies and Standards (2024–2025)**

| Category             | Examples/Standards                                 | UK Context/Implementation                  |
|----------------------|----------------------------------------------------|--------------------------------------------|
| Datasets             | OpenNER, Universal NER, gold-standard corpora      | NHS, gov.uk open data, UK-specific corpora |
| Models               | XLM-R, mBERT, spaCy, Hugging Face Transformers    | Used in public sector and academia         |
| Annotation Tools     | Prodigy, Label Studio, Doccano                     | Deployed in research and industry          |
| APIs                 | Google, AWS, Azure, spaCy, Stanford NLP            | Used by UK businesses and government       |
| Standards/Frameworks | GDPR, NCSC Cyber Essentials, Responsible AI (NATO) | Mandatory for sensitive data processing    |
| Best Practices       | Standardised labels, open data, privacy by design  | Required by UK/EU law                      |

The UK’s approach to NER in 2024–2025 is characterised by alignment with international standards, a strong focus on privacy and ethics, and active participation in the development and adoption of open, standardised resources and responsible AI frameworks[1][2][4][11][13].


## Research & Literature

Recent academic research (2024–2025) on **Named Entity Recognition (NER)** demonstrates significant advances in methodology, privacy, and real-world deployment, including notable UK contributions in academia, industry, and government.

**Recent Academic Research Papers (2024–2025):**
- **Federated Incremental Named Entity Recognition (2024):** This paper introduces a federated learning approach to NER, enabling collaborative model training across decentralised data sources without sharing sensitive data. This is particularly relevant for sectors like healthcare and finance, where data privacy is paramount[3].
- **Efficient Entity Mention Detection from Large Language Models (2025):** This study proposes ToMMeR, a method that achieves high recall and precision on 13 NER benchmarks, optimising performance and computational efficiency for large-scale applications[7].
- **Hybrid Rule-Based and Machine Learning Approach for PII Detection (2025):** Researchers used spaCy’s NER to identify personally identifiable information (PII) in text, combining rule-based and machine learning techniques for robust de-identification in sensitive domains such as healthcare[9].
- **Synthetic Data for Medical NER (2025):** A recent study demonstrated the use of synthetic healthcare data and large language models (LLMs) to train NER systems, preserving patient privacy while achieving strong performance in extracting medical entities[1].

**Real-World Examples and Applications:**
- **Healthcare:** NER is widely used in the UK NHS and research hospitals to extract diseases, medications, and procedures from electronic health records, supporting clinical decision-making and research. The use of synthetic data and federated learning is gaining traction to address privacy and data-sharing challenges[1][3][9].
- **Cybersecurity:** NER underpins threat intelligence platforms by extracting entities such as malware names, IP addresses, and organisations from unstructured cyber incident reports. UK government initiatives, such as the Cyber Essentials scheme, encourage the adoption of advanced NLP and NER tools to improve resilience and automate threat detection[2].
- **Hate Speech and Social Media Analysis:** The Vulnerable Identities Recognition Corpus (VIRC) (2024) is a new dataset designed for NER in hate speech contexts, focusing on identifying vulnerable groups and entities in online discourse[5].

**Case Studies:**
- **Cyber Essentials Impact Evaluation (UK):** The UK government’s Cyber Essentials scheme, referenced in the 2025 Cyber Growth Action Plan, highlights the use of NER and related NLP technologies to automate compliance checks and incident reporting, improving organisational resilience and market competitiveness[2].
- **De-identification in NHS Data:** UK research groups have deployed NER-based de-identification systems to anonymise patient data for secondary use, combining open-source libraries (e.g., spaCy) with custom rule sets to meet NHS data governance standards[9].

**UK Universities, Companies, and Government Projects:**
- **Universities:** 
  - **University of Cambridge** and **University of Edinburgh** are active in NER research, particularly in healthcare and low-resource language processing, often collaborating with NHS Digital and the Alan Turing Institute.
  - **Alan Turing Institute** leads projects on privacy-preserving NLP, including federated NER for sensitive data.
- **Companies:**
  - **DeepMind (London):** Applies NER in biomedical text mining and clinical trial data extraction.
  - **Trilateral Research:** Develops NER-driven solutions for public sector data analysis, including safeguarding and risk assessment.
- **Government Projects:**
  - **NHS AI Lab:** Funds projects using NER for automated clinical coding and patient safety monitoring.
  - **UKRI (UK Research and Innovation):** Supports NER research through grants for AI in health, security, and digital humanities[14].

**Emerging Trends and Future Directions:**
- **Synthetic Data and LLMs:** Use of synthetic data and LLMs for NER training is expanding, addressing annotation bottlenecks and privacy concerns[1].
- **Federated Learning:** Adoption of federated NER models is expected to increase, particularly in regulated sectors[3].
- **Multilingual and Low-Resource NER:** UK researchers are contributing to NER for minority and low-resource languages, supporting inclusivity in digital services[1].

These developments reflect the UK’s strong position in both foundational NER research and its translation into impactful, real-world applications across healthcare, cybersecurity, and social policy.


## References

1. https://everant.org/index.php/etj/article/view/1831
2. https://www.nato.int/en/what-we-do/deterrence-and-defence/emerging-and-disruptive-technologies
3. https://wjarr.com/sites/default/files/WJARR-2024-1270.pdf
4. https://www.ses.com/sites/default/files/2025-03/SES_AnnualReport24_4MAR25_final.pdf
5. https://tokyotechlab.com/blogs/named-entity-recognition
6. https://hai.stanford.edu/assets/files/hai_ai_index_report_2025.pdf
7. https://encord.com/blog/named-entity-recognition/
8. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf
9. https://arxiv.org/html/2401.10825v3
10. https://cioms.ch/wp-content/uploads/2022/05/CIOMS-WG-XIV_Draft-report-for-Public-Consultation_1May2025.pdf
11. https://onlinescientificresearch.com/articles/named-entity-recognition-a-deep-dive.pdf
12. https://benedict.edu/wp-content/uploads/2025/08/2025-2026-Benedict-College-Master-Catalogue-8.19.2025.pdf
13. https://learn.microsoft.com/en-us/azure/ai-services/language-service/named-entity-recognition/concepts/named-entity-categories
14. https://www.heidelbergmaterials.com/sites/default/files/2025-03/HM_ASR24_en.pdf
15. https://ctomagazine.com/named-entity-recognition-for-ctos/
16. https://www.vhcc.edu/sites/default/files/2025-03/2025-26%20VHCC%20Catalog%2020250313_0.pdf
17. https://assemblyai.com/blog/6-best-named-entity-recognition-apis-entity-detection
18. https://report.sonova.com/2025/downloads/en/01_Sonova_AR_24-25_Full_Report_en.pdf
19. https://www.pradagroup.com/content/dam/pradagroup/documents/Shareholderinformation/2025/E_2024%20Annual%20Report.pdf
20. https://aclanthology.org/2025.emnlp-main.1708.pdf
21. https://www.gov.uk/government/publications/cyber-growth-action-plan-2025/a-uk-cyber-growth-action-plan-final-report
22. https://encord.com/blog/named-entity-recognition/
23. https://www.nato.int/en/what-we-do/deterrence-and-defence/emerging-and-disruptive-technologies
24. https://www.shaip.com/blog/named-entity-recognition-and-its-types/
25. https://reports.weforum.org/docs/WEF_Top_10_Emerging_Technologies_of_2025.pdf
26. https://www.nature.com/articles/s41597-025-05274-4
27. https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/technology-industry-outlook.html
28. https://assemblyai.com/blog/6-best-named-entity-recognition-apis-entity-detection
29. https://dco.org/wp-content/uploads/2024/12/Digital-Economy-Trends-2025.pdf
30. https://www.edpb.europa.eu/our-work-tools/our-documents/support-pool-experts-projects/ai-risks-optical-character-recognition_en
31. https://ftsg.com/wp-content/uploads/2025/03/FTSG_2025_TR_FINAL_LINKED.pdf
32. https://wjarr.com/content/ai-meets-anonymity-how-named-entity-recognition-redefining-data-privacy
33. https://www.oecd.org/en/publications/2025/10/oecd-science-technology-and-innovation-outlook-2025_bae3698d/full-report/mobilising-science-technology-and-innovation-policies-for-transformative-change_7c5f5933.html
34. https://qualysec.com/cloud-security-standards/
35. https://research-and-innovation.ec.europa.eu/document/download/6a5f3b9a-9a7c-4ec9-8e81-22381f5a9d11_en
36. https://pmc.ncbi.nlm.nih.gov/articles/PMC11962312/
37. https://www.gov.uk/government/publications/cyber-growth-action-plan-2025/a-uk-cyber-growth-action-plan-final-report
38. https://arxiv.org/pdf/2411.11623
39. https://reports.weforum.org/docs/WEF_Top_10_Emerging_Technologies_of_2025.pdf
40. https://aclanthology.org/2024.clicit-1.50.pdf
41. https://www.deloitte.com/us/en/insights/industry/public-sector/2025-us-higher-education-trends.html
42. https://arxiv.org/html/2510.19410v1
43. https://hai.stanford.edu/assets/files/hai_ai_index_report_2025.pdf
44. https://www.nature.com/articles/s41598-025-04971-9
45. https://www.brightdefense.com/resources/recent-data-breaches/
46. https://top2percentscientists.com/best-nlp-research-papers/
47. https://ftsg.com/wp-content/uploads/2025/03/FTSG_2025_TR_FINAL_LINKED.pdf
48. https://assets.kpmg.com/content/dam/kpmgsites/ae/pdf/trust-attitudes-and-use-of-ai-global-report.pdf.coredownload.inline.pdf
49. https://assets.publishing.service.gov.uk/media/68762c9aa8d0255f9fe28e9c/UKRI_Annual_Report24_25_print.pdf
50. https://onlinelibrary.wiley.com/doi/10.1111/exsy.70018

## Metadata

- **Last Updated**: 2025-11-22
- **Review Status**: Completely reworked with Perplexity API research
- **Citations**: 50 authoritative sources (2024–2025)
- **Verification**: Academic and industry sources verified
- **Regional Context**: UK context included where applicable
