public:: true

# Machine Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:411cc8f3aefb1d0684f2a17d9ceb9af18a3cd306df63bdba125acfd948f7ff07",
  "@type": "Page",
  "vc:slug": "machine-learning",
  "title": "Machine Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-making",
      "vc:label": "decision making"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:collaboration",
      "vc:label": "collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:latent-space",
      "vc:label": "latent space"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "machine learning"
    },
    {
      "@id": "urn:visionflow:owl:class:overview-of-machine-learning-techniques",
      "vc:label": "Overview of Machine Learning Techniques"
    },
    {
      "@id": "urn:visionflow:owl:class:telethrone",
      "vc:label": "Telethrone"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Machine Learning"
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
  "@id": "urn:ngm:class:machine-learning",
  "@type": "Class",
  "label": "Machine Learning",
  "definition": "Machine Learning is a concept in artificial intelligence.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    },
    {
      "@id": "urn:ngm:class:artificial-intelligence-core",
      "label": "Artificial Intelligence"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:machine-learning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:411cc8f3aefb1d0684f2a17d9ceb9af18a3cd306df63bdba125acfd948f7ff07"
  },
  "vc:resolutions": [
    {
      "raw": "[[decision making]]",
      "resolved": "urn:visionflow:linked:decision-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[collaboration]]",
      "resolved": "urn:visionflow:owl:class:collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[latent space]]",
      "resolved": "urn:visionflow:owl:class:latent-space",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[machine learning]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Overview of Machine Learning Techniques]]",
      "resolved": "urn:visionflow:owl:class:overview-of-machine-learning-techniques",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telethrone]]",
      "resolved": "urn:visionflow:owl:class:telethrone",
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
  - ### Primary Definition

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MachineLearning
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ### Primary Definition
  Machine learning (ML) is a process that enables computational systems to understand data and gain knowledge from experience without being explicitly programmed. Machine learning systems improve their performance through exposure to data and learn patterns to make predictions or decisions based on statistical patterns in the data.

  **Source**: ISO/IEC 22989:2022, Clause 3.1.8 - Authority Score: 0.95

  - ### **Realistic One-Shot Mesh-Based Human Head Avatars**
		- [ROME Avatars](https://samsunglabs.github.io/rome/) - *   ROME is a research platform designed to organise and visualise [[machine learning]] experiments.
  -   It enables the tracking and comparison of different experiments, making it easier to manage the experimental workflow.
  -   The platform offers capabilities for visualisation of experiment results, aiding in understanding and interpreting data.
  -   ROME supports customisable dashboards, allowing users to tailor the interface to their specific needs and preferences.
  -   It assists in identifying trends and patterns across multiple experiments, facilitating data-driven [[decision making]].
  -   The tool helps researchers reproduce experiments by capturing and managing relevant metadata.
  -   ROME integrates with popular [[machine learning]] frameworks, ensuring compatibility and ease of use.
  -   The platform aims to streamline the machine learning development process by simplifying experiment management and analysis.
  -   It provides features to [[collaboration]] with other researchers, making it easy to share results and insights.
  -   ROME supports the visualisation of data in different colours, enabling easier differentiation between different data points.

				- ### Fast GPU accelerated Machine Learning Analytics

  - ## Diffusion models from [[Overview of Machine Learning Techniques]]
		- {{embed ((661d5f76-bb78-4920-949e-76c3dbf66efe))}}
		- {{embed ((661d5f76-3ffa-4f10-9027-6f8e90601162))}}
  - {{embed ((66446c0e-93be-431d-93d4-1e5fa36848c5))}}
  - {{embed ((66408f9e-30e0-442b-9aba-9eb51e36a739))}}


  - #Public page
  - automatically published
  - Generative AI Resources:
  - [Generative AI course](https://www.cloudskillsboost.google/course_templates/536): A course that provides an introduction to generative AI and explores its applications.
  - [Little book of deep learning](https://fleuret.org/public/lbdl.pdf): A book that covers the basics of deep learning.
  - [Machine vision youtube series](https://www.youtube.com/playlist?list=PLd3hlSJsX_In7qup928HaHmilugBGctuF): A series of YouTube videos that focus on machine vision.
  - [Almost any machine learning free book](https://github.com/abhishekkrthakur/approachingalmost): A collection of machine learning books available for free.
  - [Introduction to Generative AI | Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/536): An introductory course on generative AI provided by Google Cloud Skills Boost.
  - [CS50's Introduction to Artificial Intelligence with Python | Harvard University](https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python/2023-05): A course offered by Harvard University that covers the fundamentals of artificial intelligence using Python.
  - [Generative AI is a tool in service of humanity (linkedin.com)](https://www.linkedin.com/learning/what-is-generative-ai/generative-ai-is-a-tool-in-service-of-humanity): A LinkedIn Learning course that explores the ethical implications of generative AI.
  - [Generative AI for Everyone
		- DeepLearning.AI](https://www.deeplearning.ai/courses/generative-ai-for-everyone/): A course that provides a comprehensive introduction to generative AI.
  - [Generative AI with Large Language Models | Coursera](https://www.coursera.org/learn/generative-ai-with-llms): A Coursera course that focuses on generative AI using large language models.
  - Statistics Resources:
  - [Statistics course](https://www.youtube.com/watch?v=KbB0FjPg0mw&list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo&index=1): A YouTube playlist that covers various topics in statistics.
  - AI and Deep Learning Resources:
  - https://www.manning.com/books/deep-learning-with-python-second-edition?
		- https://github.com/fchollet/deep-learning-with-python-notebooks
  - [EdX AI course](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/home): A course offered by Harvard University that provides an introduction to AI.
  - [Python Books](https://mksaad.wordpress.com/2019/04/03/open-source-python-programming-books-licensed-under-creative-commons/): A collection of open-source Python programming books.
  - [Automate the boring stuff](https://automatetheboringstuff.com/): A book that teaches how to automate tasks using Python.
  - [ChatGPT Prompt Engineering for Developers
		- DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/): A short course focused on prompt engineering for developers.
  - [Introduction to Responsible AI | Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/554): A course that explores the ethical considerations in AI development.
  - [Data Science: Machine Learning | Harvard University](https://pll.harvard.edu/course/data-science-machine-learning): A course offered by Harvard University that covers machine learning concepts.
  - [LangChain for LLM Application Development
		- DeepLearning.AI](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/): A short course that focuses on language chain for LLM application development.
  - Miscellaneous Resources:
  - RGB programming with Maxim course [Plan B Network](https://planb.network/courses/rgb)
  - [Pitching](https://fi.co/insight/how-to-master-the-startup-pitch-watch-these-founder-showcase-winning-pitch-videos): A resource that provides insights on mastering startup pitches.
  - [Age of BANI from Jamais Cascio](https://ageofbani.com/): A website that explores the concept of BANI (Braided, Asynchronous, Networked, and Indigenous) for understanding the future.
  - [Furkan SD tutorials](https://github.com/FurkanGozukara/Stable-Diffusion/tree/main/Tutorials): Tutorials by Furkan Gozukara focusing on Stable Diffusion.
  - touchdesigner community: A community dedicated to TouchDesigner, a visual development platform.
  - [Torin Blankensmith](https://www.torinblankensmith.com/): Website of Torin Blankensmith, a creative technologist.
  - [Torin Blankensmith YouTube](https://www.youtube.com/c/torinblankensmith): YouTube channel of Torin Blankensmith, featuring various creative and tech-related content.
  - [Latent space](https://huggingface.co/learn/nlp-course/chapter0/1?fw=pt): An educational resource that explains the concept of [[latent space]] in natural language processing.
  - [Embeddings explainer (MUST READ)](https://simonwillison.net/2023/Oct/23/embeddings/): An article explaining the concept of embeddings in machine learning.
  - [Ebooks and stuff](https://z-lib.io/): A website where you can find and download ebooks.
  - [AWS Skill Builder](https://explore.skillbuilder.aws/learn/course/external/view/elearning/17763/foundations-of-prompt-engineering): A course provided by AWS that focuses on the foundations of prompt engineering.
  - [Put your fingers to work: Chatting as a productivity tool (linkedin.com)](https://www.linkedin.com/learning/streamlining-your-work-with-microsoft-bing-chat/put-your-fingers-to-work-chatting-as-a-productivity-tool): A LinkedIn Learning course on using chat as a productivity tool.
  - [Microsoft Azure AI Fundamentals: Generative AI
		- Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/): A training course on generative AI provided by Microsoft Learn.
  - [AWS Skill Builder](https://explore.skillbuilder.aws/learn/public/learning_plan/view/1909/generative-ai-learning-plan-for-decision-makers): A learning plan provided by AWS that focuses on generative AI for decision-makers.
  - [Learn Prompting | Generative AI, Prompt Engineering, & Free Online Courses](https://learnprompting.org/): A website dedicated to learning about prompt engineering and generative AI.
  - [AI for Beginners (microsoft.github.io)](https://microsoft.github.io/AI-For-Beginners/)
  - [Prompt engineering - OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)
  - [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
  - [Why you need to know about artificial intelligence | LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-artificial-intelligence/why-you-need-to-know-about-artificial-intelligence)
  - [Generative AI is a tool in service of humanity | LinkedIn Learning](https://www.linkedin.com/learning/what-is-generative-ai/generative-ai-is-a-tool-in-service-of-humanity)
  - [Collections | Microsoft Learn](https://learn.microsoft.com/en-us/collections/20mirj4odnj6o)
  - [How finding and sharing information online has evolved | LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-the-evolution-of-thoughtful-online-search/how-finding-and-sharing-information-online-has-evolved)
  - [Streamlining Your Work with Copilot (formerly Bing Chat/Bing Chat Enterprise) | LinkedIn Learning](https://www.linkedin.com/learning/streamlining-your-work-with-microsoft-bing-chat)

  - ### AI Risks and Mitigations
		- The increasing integration of AI in various domains presents new security challenges:
			- **Malicious AI Models**: Instances of AI models with backdoors, such as those found on [Hugging Face](https://www.bleepingcomputer.com/news/security/malicious-ai-models-on-hugging-face-backdoor-users-machines/), demonstrate the need for vigilant security measures.
			- **Adversarial Machine Learning**: Understanding attacks and mitigations is crucial, as outlined in the NIST publication ["Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations"](https://csrc.nist.gov/pubs/ai/100/2/e2023/final).

  - ### Paradigms of Scientific Discovery
		- Bishop discusses the five paradigms of scientific discovery, drawing on the work of Jim Gray.
			- **Empirical Paradigm:** Observation and experimentation (e.g., a cave dweller dropping rocks).
			- **Theoretical Paradigm:** Describing nature through mathematical equations (e.g., Newton's laws, Maxwell's equations, Schrödinger's equation).
			- **Simulation Paradigm:** Using digital computers to solve complex equations (e.g., weather forecasting).
			- **Data-Intensive Paradigm:**  Utilising large datasets and machine learning (e.g., particle physics at CERN).
			- **Fifth Paradigm:** Training machine learning systems using simulation data to create emulators, which are much faster than traditional simulations.

  - # Machine Learning Techniques Overview

  - #### Layer 3: LLM and Generative ML Integration
		- Integrating AI and machine learning into the Metaverse can promote
		  supported creativity and augmented intelligence. By incorporating
		  generative ML technologies, users can ideate in simple immersive spaces
		  while instantly creating scenes that can be stylized using verbal
		  commands in real-time.
		- To create a more inclusive and accessible Metaverse, user experience
		  components like UI/UX design, AI assistants, and generative content
		  creation should be tailored to a wide range of users. The integration of
		  AI and machine learning technologies, such as GPT-4, can facilitate more
		  seamless interactions and creative content generation, fostering a more
		  engaging and immersive experience.


  - from here [xandie985/data-scientist-roadmap2024 (github.com)](https://github.com/xandie985/data-scientist-roadmap2024?tab=readme-ov-file)
  - Languages
  - TODO Python
  - DONE R
  - **Frameworks & Libraries:**
  - TODO Scikit-learn
  - TODO Numpy
  - TODO Pandas
  - TODO TensorFlow
  - TODO PyTorch
  - TODO XGBoost
  - TODO LightGBM
  - TODO **Keras** (High-level deep learning API)
  - TODO **Jax** (High-performance numerical computation)
  - TODO **CatBoost** (Gradient boosting framework)
  - TODO **StaMPS** (Scalable Modeling and Partitioning for Statistics)
  - **Cloud Platforms & Services:**
  - TODO Docker (Containerization platform)
  - TODO Learn any one of the following:
		- TODO GCP (Google Cloud Platform)
			- Cloud Storage
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:41]--[2024-04-19 Fri 12:26:42] =>  00:00:01
			  :END:
			- Compute Engine
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud SQL
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud Functions
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- BigQuery
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- AI Platform (includes Vertex AI)
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
		- TODO Azure (Microsoft Azure)
			- Blob Storage
			- Virtual Machines
			- SQL Database / Azure Database for PostgreSQL/MySQL
			- Azure Functions
			- Azure Synapse Analytics
			- Azure Machine Learning
		- DONE AWS (Amazon Web Services)
			- AWS S3
			- AWS EC2
			- AWS RDS
			- AWS Lambda
			- AWS Redshift
			- AWS SageMaker
  - TODO Kubeflow (Cloud-native machine learning platform)
  - TODO Kubernetes (Container orchestration platform)
  - **Data Tools & Libraries:**
  - TODO SQL (including OLAP & OLTP variations)
  - TODO Pandas
  - TODO Elasticsearch
  - TODO **Dask** (Parallel computing library for big data)
  - TODO **Spark** (Large-scale data processing framework)
  - TODO **Airbyte** (Open-source data integration platform)
  - **Web Development Frameworks:**
  - TODO FastAPI
  - TODO Uvicorn (likely mentioned in conjunction with FastAPI)
  - TODO **Streamlit** (Machine learning app development framework)
  - **Machine Learning Concepts:**
  - TODO Supervised Learning
		- TODO Regression
		- TODO Classification
  - TODO Unsupervised Learning
		- TODO Clustering
		- TODO Dimensionality Reduction
  - TODO Recommendation Systems
  - TODO Time Series Forecasting
  - TODO Natural Language Processing (NLP)
		- TODO Text Mining
		- TODO Natural Language Understanding (NLU)
			- TODO Sentiment Analysis
			- TODO Named Entity Recognition (NER)
			- TODO Question Answering (QA)
		- TODO Natural Language Generation (NLG)
  - TODO Deep Learning Techniques
		- TODO Convolutional Neural Networks (CNNs)
		- TODO Long Short-Term Memory networks (LSTMs)
		- TODO Generative AI
  - TODO Reinforcement Learning
  - TODO Bayesian Optimization
  - **DevOps & MLOps Tools:**
  - TODO Airflow (Workflow orchestration tool)
  - TODO MLFlow (Machine learning lifecycle management)
  - TODO **Prometheus** (Monitoring and alerting system)
  - TODO **Grafana** (Data visualization and analytics tool)
  - TODO **Git version control** (e.g., GitLab, GitHub)
  - **Data Visualization Tools:**
  - TODO Tableau
  - TODO Matplotlib (Python plotting library)
  - TODO Seaborn (Statistical data visualization library built on top of Matplotlib)
  - TODO Power BI (Microsoft business intelligence platform)
  - **Other:**
  - TODO ETL (Extract, Transform, Load) processes
  - TODO Optimisation algorithms (can be broader than just machine learning)
  - TODO Distributed training
  - TODO Curse of dimensionality
  - TODO Financial modeling
  - LLMs
  - TODO Lang-chain Agents
  - TODO Prompt engineering
  - TODO RAG
  - TODO Fine-tuning

  - ### **Realistic One-Shot Mesh-Based Human Head Avatars**
		- [ROME Avatars](https://samsunglabs.github.io/rome/) - *   ROME is a research platform designed to organise and visualise [[machine learning]] experiments.
  -   It enables the tracking and comparison of different experiments, making it easier to manage the experimental workflow.
  -   The platform offers capabilities for visualisation of experiment results, aiding in understanding and interpreting data.
  -   ROME supports customisable dashboards, allowing users to tailor the interface to their specific needs and preferences.
  -   It assists in identifying trends and patterns across multiple experiments, facilitating data-driven [[decision making]].
  -   The tool helps researchers reproduce experiments by capturing and managing relevant metadata.
  -   ROME integrates with popular [[machine learning]] frameworks, ensuring compatibility and ease of use.
  -   The platform aims to streamline the machine learning development process by simplifying experiment management and analysis.
  -   It provides features to [[collaboration]] with other researchers, making it easy to share results and insights.
  -   ROME supports the visualisation of data in different colours, enabling easier differentiation between different data points.

				- ### Fast GPU accelerated Machine Learning Analytics

  - ## Diffusion models from [[Overview of Machine Learning Techniques]]
		- {{embed ((661d5f76-bb78-4920-949e-76c3dbf66efe))}}
		- {{embed ((661d5f76-3ffa-4f10-9027-6f8e90601162))}}
  - {{embed ((66446c0e-93be-431d-93d4-1e5fa36848c5))}}
  - {{embed ((66408f9e-30e0-442b-9aba-9eb51e36a739))}}


  - #Public page
  - automatically published
  - Generative AI Resources:
  - [Generative AI course](https://www.cloudskillsboost.google/course_templates/536): A course that provides an introduction to generative AI and explores its applications.
  - [Little book of deep learning](https://fleuret.org/public/lbdl.pdf): A book that covers the basics of deep learning.
  - [Machine vision youtube series](https://www.youtube.com/playlist?list=PLd3hlSJsX_In7qup928HaHmilugBGctuF): A series of YouTube videos that focus on machine vision.
  - [Almost any machine learning free book](https://github.com/abhishekkrthakur/approachingalmost): A collection of machine learning books available for free.
  - [Introduction to Generative AI | Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/536): An introductory course on generative AI provided by Google Cloud Skills Boost.
  - [CS50's Introduction to Artificial Intelligence with Python | Harvard University](https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python/2023-05): A course offered by Harvard University that covers the fundamentals of artificial intelligence using Python.
  - [Generative AI is a tool in service of humanity (linkedin.com)](https://www.linkedin.com/learning/what-is-generative-ai/generative-ai-is-a-tool-in-service-of-humanity): A LinkedIn Learning course that explores the ethical implications of generative AI.
  - [Generative AI for Everyone
		- DeepLearning.AI](https://www.deeplearning.ai/courses/generative-ai-for-everyone/): A course that provides a comprehensive introduction to generative AI.
  - [Generative AI with Large Language Models | Coursera](https://www.coursera.org/learn/generative-ai-with-llms): A Coursera course that focuses on generative AI using large language models.
  - Statistics Resources:
  - [Statistics course](https://www.youtube.com/watch?v=KbB0FjPg0mw&list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo&index=1): A YouTube playlist that covers various topics in statistics.
  - AI and Deep Learning Resources:
  - https://www.manning.com/books/deep-learning-with-python-second-edition?
		- https://github.com/fchollet/deep-learning-with-python-notebooks
  - [EdX AI course](https://learning.edx.org/course/course-v1:HarvardX+CS50AI+1T2020/home): A course offered by Harvard University that provides an introduction to AI.
  - [Python Books](https://mksaad.wordpress.com/2019/04/03/open-source-python-programming-books-licensed-under-creative-commons/): A collection of open-source Python programming books.
  - [Automate the boring stuff](https://automatetheboringstuff.com/): A book that teaches how to automate tasks using Python.
  - [ChatGPT Prompt Engineering for Developers
		- DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/): A short course focused on prompt engineering for developers.
  - [Introduction to Responsible AI | Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/554): A course that explores the ethical considerations in AI development.
  - [Data Science: Machine Learning | Harvard University](https://pll.harvard.edu/course/data-science-machine-learning): A course offered by Harvard University that covers machine learning concepts.
  - [LangChain for LLM Application Development
		- DeepLearning.AI](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/): A short course that focuses on language chain for LLM application development.
  - Miscellaneous Resources:
  - RGB programming with Maxim course [Plan B Network](https://planb.network/courses/rgb)
  - [Pitching](https://fi.co/insight/how-to-master-the-startup-pitch-watch-these-founder-showcase-winning-pitch-videos): A resource that provides insights on mastering startup pitches.
  - [Age of BANI from Jamais Cascio](https://ageofbani.com/): A website that explores the concept of BANI (Braided, Asynchronous, Networked, and Indigenous) for understanding the future.
  - [Furkan SD tutorials](https://github.com/FurkanGozukara/Stable-Diffusion/tree/main/Tutorials): Tutorials by Furkan Gozukara focusing on Stable Diffusion.
  - touchdesigner community: A community dedicated to TouchDesigner, a visual development platform.
  - [Torin Blankensmith](https://www.torinblankensmith.com/): Website of Torin Blankensmith, a creative technologist.
  - [Torin Blankensmith YouTube](https://www.youtube.com/c/torinblankensmith): YouTube channel of Torin Blankensmith, featuring various creative and tech-related content.
  - [Latent space](https://huggingface.co/learn/nlp-course/chapter0/1?fw=pt): An educational resource that explains the concept of [[latent space]] in natural language processing.
  - [Embeddings explainer (MUST READ)](https://simonwillison.net/2023/Oct/23/embeddings/): An article explaining the concept of embeddings in machine learning.
  - [Ebooks and stuff](https://z-lib.io/): A website where you can find and download ebooks.
  - [AWS Skill Builder](https://explore.skillbuilder.aws/learn/course/external/view/elearning/17763/foundations-of-prompt-engineering): A course provided by AWS that focuses on the foundations of prompt engineering.
  - [Put your fingers to work: Chatting as a productivity tool (linkedin.com)](https://www.linkedin.com/learning/streamlining-your-work-with-microsoft-bing-chat/put-your-fingers-to-work-chatting-as-a-productivity-tool): A LinkedIn Learning course on using chat as a productivity tool.
  - [Microsoft Azure AI Fundamentals: Generative AI
		- Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/introduction-generative-ai/): A training course on generative AI provided by Microsoft Learn.
  - [AWS Skill Builder](https://explore.skillbuilder.aws/learn/public/learning_plan/view/1909/generative-ai-learning-plan-for-decision-makers): A learning plan provided by AWS that focuses on generative AI for decision-makers.
  - [Learn Prompting | Generative AI, Prompt Engineering, & Free Online Courses](https://learnprompting.org/): A website dedicated to learning about prompt engineering and generative AI.
  - [AI for Beginners (microsoft.github.io)](https://microsoft.github.io/AI-For-Beginners/)
  - [Prompt engineering - OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)
  - [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
  - [Why you need to know about artificial intelligence | LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-artificial-intelligence/why-you-need-to-know-about-artificial-intelligence)
  - [Generative AI is a tool in service of humanity | LinkedIn Learning](https://www.linkedin.com/learning/what-is-generative-ai/generative-ai-is-a-tool-in-service-of-humanity)
  - [Collections | Microsoft Learn](https://learn.microsoft.com/en-us/collections/20mirj4odnj6o)
  - [How finding and sharing information online has evolved | LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-the-evolution-of-thoughtful-online-search/how-finding-and-sharing-information-online-has-evolved)
  - [Streamlining Your Work with Copilot (formerly Bing Chat/Bing Chat Enterprise) | LinkedIn Learning](https://www.linkedin.com/learning/streamlining-your-work-with-microsoft-bing-chat)

  - ### AI Risks and Mitigations
		- The increasing integration of AI in various domains presents new security challenges:
			- **Malicious AI Models**: Instances of AI models with backdoors, such as those found on [Hugging Face](https://www.bleepingcomputer.com/news/security/malicious-ai-models-on-hugging-face-backdoor-users-machines/), demonstrate the need for vigilant security measures.
			- **Adversarial Machine Learning**: Understanding attacks and mitigations is crucial, as outlined in the NIST publication ["Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations"](https://csrc.nist.gov/pubs/ai/100/2/e2023/final).

  - ### Paradigms of Scientific Discovery
		- Bishop discusses the five paradigms of scientific discovery, drawing on the work of Jim Gray.
			- **Empirical Paradigm:** Observation and experimentation (e.g., a cave dweller dropping rocks).
			- **Theoretical Paradigm:** Describing nature through mathematical equations (e.g., Newton's laws, Maxwell's equations, Schrödinger's equation).
			- **Simulation Paradigm:** Using digital computers to solve complex equations (e.g., weather forecasting).
			- **Data-Intensive Paradigm:**  Utilising large datasets and machine learning (e.g., particle physics at CERN).
			- **Fifth Paradigm:** Training machine learning systems using simulation data to create emulators, which are much faster than traditional simulations.

  - # Machine Learning Techniques Overview

  - #### Layer 3: LLM and Generative ML Integration
		- Integrating AI and machine learning into the Metaverse can promote
		  supported creativity and augmented intelligence. By incorporating
		  generative ML technologies, users can ideate in simple immersive spaces
		  while instantly creating scenes that can be stylized using verbal
		  commands in real-time.
		- To create a more inclusive and accessible Metaverse, user experience
		  components like UI/UX design, AI assistants, and generative content
		  creation should be tailored to a wide range of users. The integration of
		  AI and machine learning technologies, such as GPT-4, can facilitate more
		  seamless interactions and creative content generation, fostering a more
		  engaging and immersive experience.


  - from here [xandie985/data-scientist-roadmap2024 (github.com)](https://github.com/xandie985/data-scientist-roadmap2024?tab=readme-ov-file)
  - Languages
  - TODO Python
  - DONE R
  - **Frameworks & Libraries:**
  - TODO Scikit-learn
  - TODO Numpy
  - TODO Pandas
  - TODO TensorFlow
  - TODO PyTorch
  - TODO XGBoost
  - TODO LightGBM
  - TODO **Keras** (High-level deep learning API)
  - TODO **Jax** (High-performance numerical computation)
  - TODO **CatBoost** (Gradient boosting framework)
  - TODO **StaMPS** (Scalable Modeling and Partitioning for Statistics)
  - **Cloud Platforms & Services:**
  - TODO Docker (Containerization platform)
  - TODO Learn any one of the following:
		- TODO GCP (Google Cloud Platform)
			- Cloud Storage
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:41]--[2024-04-19 Fri 12:26:42] =>  00:00:01
			  :END:
			- Compute Engine
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud SQL
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- Cloud Functions
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- BigQuery
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
			- AI Platform (includes Vertex AI)
			  :LOGBOOK:
			  CLOCK: [2024-04-19 Fri 12:26:42]--[2024-04-19 Fri 12:26:42] =>  00:00:00
			  :END:
		- TODO Azure (Microsoft Azure)
			- Blob Storage
			- Virtual Machines
			- SQL Database / Azure Database for PostgreSQL/MySQL
			- Azure Functions
			- Azure Synapse Analytics
			- Azure Machine Learning
		- DONE AWS (Amazon Web Services)
			- AWS S3
			- AWS EC2
			- AWS RDS
			- AWS Lambda
			- AWS Redshift
			- AWS SageMaker
  - TODO Kubeflow (Cloud-native machine learning platform)
  - TODO Kubernetes (Container orchestration platform)
  - **Data Tools & Libraries:**
  - TODO SQL (including OLAP & OLTP variations)
  - TODO Pandas
  - TODO Elasticsearch
  - TODO **Dask** (Parallel computing library for big data)
  - TODO **Spark** (Large-scale data processing framework)
  - TODO **Airbyte** (Open-source data integration platform)
  - **Web Development Frameworks:**
  - TODO FastAPI
  - TODO Uvicorn (likely mentioned in conjunction with FastAPI)
  - TODO **Streamlit** (Machine learning app development framework)
  - **Machine Learning Concepts:**
  - TODO Supervised Learning
		- TODO Regression
		- TODO Classification
  - TODO Unsupervised Learning
		- TODO Clustering
		- TODO Dimensionality Reduction
  - TODO Recommendation Systems
  - TODO Time Series Forecasting
  - TODO Natural Language Processing (NLP)
		- TODO Text Mining
		- TODO Natural Language Understanding (NLU)
			- TODO Sentiment Analysis
			- TODO Named Entity Recognition (NER)
			- TODO Question Answering (QA)
		- TODO Natural Language Generation (NLG)
  - TODO Deep Learning Techniques
		- TODO Convolutional Neural Networks (CNNs)
		- TODO Long Short-Term Memory networks (LSTMs)
		- TODO Generative AI
  - TODO Reinforcement Learning
  - TODO Bayesian Optimization
  - **DevOps & MLOps Tools:**
  - TODO Airflow (Workflow orchestration tool)
  - TODO MLFlow (Machine learning lifecycle management)
  - TODO **Prometheus** (Monitoring and alerting system)
  - TODO **Grafana** (Data visualization and analytics tool)
  - TODO **Git version control** (e.g., GitLab, GitHub)
  - **Data Visualization Tools:**
  - TODO Tableau
  - TODO Matplotlib (Python plotting library)
  - TODO Seaborn (Statistical data visualization library built on top of Matplotlib)
  - TODO Power BI (Microsoft business intelligence platform)
  - **Other:**
  - TODO ETL (Extract, Transform, Load) processes
  - TODO Optimisation algorithms (can be broader than just machine learning)
  - TODO Distributed training
  - TODO Curse of dimensionality
  - TODO Financial modeling
  - LLMs
  - TODO Lang-chain Agents
  - TODO Prompt engineering
  - TODO RAG
  - TODO Fine-tuning

  - ### **Realistic One-Shot Mesh-Based Human Head Avatars**
		- [ROME Avatars](https://samsunglabs.github.io/rome/) - *   ROME is a research platform designed to organise and visualise [[machine learning]] experiments.
  -   It enables the tracking and comparison of different experiments, making it easier to manage the experimental workflow.
  -   The platform offers capabilities for visualisation of experiment results, aiding in understanding and interpreting data.
  -   ROME supports customisable dashboards, allowing users to tailor the interface to their specific needs and preferences.
  -   It assists in identifying trends and patterns across multiple experiments, facilitating data-driven [[decision making]].
  -   The tool helps researchers reproduce experiments by capturing and managing relevant metadata.
  -   ROME integrates with popular [[machine learning]] frameworks, ensuring compatibility and ease of use.
  -   The platform aims to streamline the machine learning development process by simplifying experiment management and analysis.
  - The author notes the futility of seeking external validation, stating that you'll still be you regardless of success.
	  {{twitter https://twitter.com/cocktailpeanut/status/1765462787046686968}}
  - {{twitter https://twitter.com/blizaine/status/1765434684450742764?}}

  - ## Broader Implications for Cyber Security
			- **Adversarial Machine Learning**: Understanding attacks and mitigations is crucial, as outlined in the NIST publication ["Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations"](https://csrc.nist.gov/pubs/ai/100/2/e2023/final).

  - # University of Salford (1997-2022)
  - Over 25 years of expertise in immersive technologies, high performance compute, distributed systems, machine learning, and latterly generative AI.
		- world firsts -
			- Human eye gaze connection in collaborative mixed reality over distance
		- Brain scanning in proving treatment of fear of heights
		- Reconstruction of humans in real time from cameras
		- Nurse training, immersive education, digital twins
		- Telepresence, including [[Telethrone]]
		- Wavefield synthesis with immersive vision
		- 2002 VETS programme Heaton Park refurbishment visualisation rendered in Octave Multi-Modal lab 2013
		- ![image.png](assets/image_1707994463743_0.png){:width 600}

  - ## Hyperparameter Tuning ([LinkedIn Thread](https://www.linkedin.com/posts/maryammiradi_machinelearning-ai-datascience-activity-7179427786799861760-WFtN/))
  - Hyperparameter optimization plays a crucial role in determining the performance of a machine learning model. They are one the 3 components of training.

  - ## AI and Blender
  - The integration of AI and machine learning is rapidly transforming the 3D content creation landscape, and Blender is no exception. There are a number of projects and add-ons that are bringing the power of AI to Blender.

  - ## Hyperparameter Tuning ([LinkedIn Thread](https://www.linkedin.com/posts/maryammiradi_machinelearning-ai-datascience-activity-7179427786799861760-WFtN/))
  - 𝐇𝐲𝐩𝐞𝐫𝐩𝐚𝐫𝐚𝐦𝐞𝐭𝐞𝐫 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧: 𝟏𝟎 𝐓𝐨𝐩 𝐏𝐲𝐭𝐡𝐨𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬 𝐟𝐨𝐫 𝐒𝐞𝐜𝐫𝐞𝐭 𝐈𝐧𝐠𝐫𝐞𝐝𝐢𝐞𝐧𝐭 𝐢𝐧 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐒𝐮𝐜𝐜𝐞𝐬𝐬
  - Hyperparameter optimization plays a crucial role in determining the performance of a machine learning model. They are one the 3 components of training.
  - 𝟛 ℂ𝕠𝕞𝕡𝕠𝕟𝕖𝕟𝕥𝕤 𝕠𝕗 𝕄𝕠𝕕𝕖𝕝:
  - 1️⃣ Training data: Training data is what the algorithm leverages (think: instructions to build a model) to identify patterns
  - I found these 𝟏𝟎 𝐩𝐲𝐭𝐡𝐨𝐧 𝐥𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬 𝐟𝐨𝐫 𝐇𝐲𝐩𝐞𝐫𝐩𝐚𝐫𝐚𝐦𝐞𝐭𝐞𝐫 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧:
  - 📚 Optuna
  - You can tune estimators of almost any ML, DL package/framework, including Sklearn, PyTorch, TensorFlow, Keras, XGBoost, LightGBM, CatBoost, etc with a real-time Web Dashboard called optuna-dashboard.
  - 📚Hyperopt
  - Optimizing using Bayesian optimization, including conditional dimensions.
  - 📚 Scikit-learn
  - different searches such as GridSearchCV or HalvingGridSearchCV.
  - AutoML and a drop-in replacement for a scikit-learn estimator.

  - ## Quantization in Machine Learning Models
  - ![image.png](assets/image_1707150720702_0.png)

  - ## Microsoft AI for Science
  - Chris Bishop, is Microsoft Technical Fellow and Director of Microsoft Research AI for Science [Microsoft Research Podcast](https://www.microsoft.com/en-us/research/podcast/ai-frontiers-a-deep-dive-into-deep-learning-with-ashley-llorens-and-chris-bishop/)
			- **Empirical Paradigm:** Observation and experimentation (e.g., a cave dweller dropping rocks).
			- **Theoretical Paradigm:** Describing nature through mathematical equations (e.g., Newton's laws, Maxwell's equations, Schrödinger's equation).
			- **Simulation Paradigm:** Using digital computers to solve complex equations (e.g., weather forecasting).
			- **Data-Intensive Paradigm:**  Utilising large datasets and machine learning (e.g., particle physics at CERN).
			- **Fifth Paradigm:** Training machine learning systems using simulation data to create emulators, which are much faster than traditional simulations.
		- Factors include data availability (both experimental and synthetic), the potential for real-world impact at scale, and bottlenecks in existing processes.
		- Microsoft focuses on the molecular level, given the enormous space of potential molecules for drugs, materials, and more.

  - ## AI and Blender
  - The integration of AI and machine learning is rapidly transforming the 3D content creation landscape, and Blender is no exception. There are a number of projects and add-ons that are bringing the power of AI to Blender.

  - ## Quantization in Machine Learning Models
  - ![image.png](assets/image_1707150720702_0.png)

  - ## AI and Blender
  - The integration of AI and machine learning is rapidly transforming the 3D content creation landscape, and Blender is no exception. There are a number of projects and add-ons that are bringing the power of AI to Blender.

  - ## Quantization in Machine Learning Models
  - ![image.png](assets/image_1707150720702_0.png)

  - ## AI and Blender
  - The integration of AI and machine learning is rapidly transforming the 3D content creation landscape, and Blender is no exception. There are a number of projects and add-ons that are bringing the power of AI to Blender.

  ### Alternative Definitions
  1. **NIST AI 100-3**: A subset of AI that uses algorithms to learn patterns from data and improve performance on tasks without being explicitly programmed for every scenario. - Authority Score: 0.92
  2. **ISO/IEC 23053:2022**: Process of optimising model parameters through computational techniques and training data to improve performance on tasks. - Authority Score: 0.93

  ### Operational Characteristics
  - **Data-Driven Learning**: Performance improves through exposure to training data rather than explicit programming
  - **Pattern Recognition**: Identifies statistical patterns and relationships within datasets
  - **Generalisation**: Ability to apply learned patterns to new, unseen data
  - **Automated Improvement**: Self-optimises through iterative refinement during training process
  - **Task Performance**: Demonstrates measurable performance improvement on defined tasks over time

  ## Relationships

  ### Parent Classes
  - **ArtificialIntelligence**: ML is the predominant approach to creating modern AI systems
  - **ComputationalStatistics**: ML leverages statistical methods for learning from data

  ### Child Classes
  - **SupervisedLearning**: Learning from labelled training examples
  - **UnsupervisedLearning**: Discovering patterns in unlabelled data
  - **ReinforcementLearning**: Learning optimal behaviour through environmental feedback
  - **Semi-SupervisedLearning**: Combining labelled and unlabelled data
  - **SelfSupervisedLearning**: Generating supervision signal from data structure

  ### Alternative Definitions
  1. **NIST AI 100-3**: A subset of AI that uses algorithms to learn patterns from data and improve performance on tasks without being explicitly programmed for every scenario. - Authority Score: 0.92
  2. **ISO/IEC 23053:2022**: Process of optimising model parameters through computational techniques and training data to improve performance on tasks. - Authority Score: 0.93

  ### Operational Characteristics
  - **Data-Driven Learning**: Performance improves through exposure to training data rather than explicit programming
  - **Pattern Recognition**: Identifies statistical patterns and relationships within datasets
  - **Generalisation**: Ability to apply learned patterns to new, unseen data
  - **Automated Improvement**: Self-optimises through iterative refinement during training process
  - **Task Performance**: Demonstrates measurable performance improvement on defined tasks over time

  ## Relationships

  ### Parent Classes
  - **ArtificialIntelligence**: ML is the predominant approach to creating modern AI systems
  - **ComputationalStatistics**: ML leverages statistical methods for learning from data

  ### Child Classes
  - **SupervisedLearning**: Learning from labelled training examples
  - **UnsupervisedLearning**: Discovering patterns in unlabelled data
  - **ReinforcementLearning**: Learning optimal behaviour through environmental feedback
  - **Semi-SupervisedLearning**: Combining labelled and unlabelled data
  - **SelfSupervisedLearning**: Generating supervision signal from data structure

  #### Related Concepts
  - **TrainingData**: Dataset used to teach ML models
		  - **Model**: Mathematical construct resulting from ML training
		  - **Algorithm**: Computational procedure enabling ML
		  - **DeepLearning**: ML using multi-layer neural networks
		  - **NeuralNetwork**: Computational architecture for ML

		  ## Formal Ontology

		  <details>
		  <summary>Click to expand OntologyBlock</summary>

		  </details>

		  ## Implementation Patterns

		  ### Pattern 1: Supervised ML Workflow
		  ```python
		  # Standard supervised machine learning implementation
		  from sklearn.model_selection import train_test_split
		  from sklearn.preprocessing import StandardScaler
		  from sklearn.ensemble import RandomForestClassifier
		  from sklearn.metrics import accuracy_score

		  class SupervisedMLPipeline:
		      """Demonstrates ML learning from labelled data"""

		      def __init__(self):
		          self.model = RandomForestClassifier()
		          self.scaler = StandardScaler()
		          self.trained = False

		      def train(self, X_train, y_train):
		          """Learn patterns from training data"""
		          # Scale features
		          X_scaled = self.scaler.fit_transform(X_train)

		          # Train model - improves through exposure to data
		          self.model.fit(X_scaled, y_train)
		          self.trained = True

		          return self

		      def predict(self, X_new):
		          """Apply learned patterns to unseen data"""
		          if not self.trained:
		              raise ValueError("Model must be trained first")

		          X_scaled = self.scaler.transform(X_new)
		          return self.model.predict(X_scaled)

		      def evaluate(self, X_test, y_test):
		          """Measure performance on held-out data"""
		          predictions = self.predict(X_test)
		          return accuracy_score(y_test, predictions)
		  ```

		  ### Pattern 2: Neural Network ML
		  ```python
		  # Deep learning implementation demonstrating ML
		  import torch
		  import torch.nn as nn
		  import torch.optim as optim

		  class NeuralNetworkML(nn.Module):
		      """Neural network that learns from data"""

		      def __init__(self, input_size, hidden_size, output_size):
		          super().__init__()
		          self.network = nn.Sequential(
		              nn.Linear(input_size, hidden_size),
		              nn.ReLU(),
		              nn.Linear(hidden_size, output_size)
		          )
		          self.optimizer = optim.Adam(self.parameters())
		          self.criterion = nn.CrossEntropyLoss()

		      def forward(self, x):
		          return self.network(x)

		      def train_epoch(self, data_loader):
		          """Improve performance through exposure to data"""
		          total_loss = 0
		          for batch_x, batch_y in data_loader:
		              # Forward pass
		              predictions = self(batch_x)
		              loss = self.criterion(predictions, batch_y)

		              # Backward pass - learning happens here
		              self.optimizer.zero_grad()
		              loss.backward()
		              self.optimizer.step()

		              total_loss += loss.item()

		          return total_loss / len(data_loader)
		  ```

		  ## Use Cases

		  ### Use Case 1: Credit Risk Assessment
		  - **Scenario**: Financial institution assesses loan default risk using historical customer data
		  - **Implementation**: Supervised ML trains on past loan outcomes, learns patterns correlating customer features with default risk
		  - **Benefits**: Improved risk prediction, automated decision support, reduced manual assessment time
		  - **Standards**: ISO/IEC 23894:2023 (high-risk AI), EU AI Act Annex III (credit scoring)

		  ### Use Case 2: Medical Image Analysis
		  - **Scenario**: ML system detects abnormalities in medical imaging (X-rays, MRIs, CT scans)
		  - **Implementation**: Deep learning model trained on thousands of labelled medical images learns visual patterns of pathologies
		  - **Benefits**: Early disease detection, reduced radiologist workload, improved diagnostic consistency
		  - **Standards**: ISO/IEC 23053:2022 (ML framework), Medical Device Regulation (EU MDR)

		  ### Use Case 3: Predictive Maintenance
		  - **Scenario**: Manufacturing facility predicts equipment failures before they occur
		  - **Implementation**: ML analyzes sensor data, learns patterns preceding failures, forecasts maintenance needs
		  - **Benefits**: Reduced downtime, optimised maintenance schedules, extended equipment lifespan
		  - **Standards**: ISO/IEC 22989:2022 (ML concepts), Industry 4.0 standards

		  ## Technical Considerations

		  ### Performance
		  - **Training Time**: ML model training can require hours to weeks depending on data volume and model complexity
		  - **Inference Speed**: Real-time applications require optimised models for low-latency prediction
		  - **Resource Requirements**: Deep learning models require substantial computational resources (GPUs/TPUs)
		  - **Scalability**: Performance must scale with increasing data volumes and model complexity

		  ### Scalability
		  - **Data Scalability**: Ability to train on datasets ranging from thousands to billions of examples
		  - **Distributed Training**: Support for parallel training across multiple machines for large models
		  - **Online Learning**: Capability to update models incrementally with new data without full retraining

		  ### Security and Privacy
		  - **Training Data Privacy**: ML requires access to potentially sensitive training data, requiring privacy protections
		  - **Model Extraction Attacks**: Adversaries may attempt to steal proprietary ML models through query access
		  - **Poisoning Attacks**: Malicious actors may inject corrupted data to degrade model performance
		  - **Privacy-Preserving ML**: Techniques like federated learning, differential privacy, secure enclaves

		  ### Regulatory Compliance
		  - **Data Quality Requirements**: EU AI Act Article 10 mandates high-quality, representative training data
		  - **Bias Assessment**: ML systems subject to fairness testing and bias mitigation requirements
		  - **Documentation**: Technical documentation of ML training process, data sources, performance metrics
		  - **Human Oversight**: High-risk ML applications require human oversight mechanisms

		  ## Challenges and Solutions

		  ### Challenge: Overfitting to Training Data
		  - **Problem**: ML models may memorise training data rather than learning generalisable patterns, performing poorly on new data
		  - **Solution**: Use validation datasets, regularisation techniques, cross-validation, and early stopping to ensure generalisation
		  - **Standard Reference**: ISO/IEC 23053:2022, Section on model validation

		  ### Challenge: Data Quality and Bias
		  - **Problem**: ML models inherit and may amplify biases present in training data, leading to discriminatory outcomes
		  - **Solution**: Conduct data quality assessments, bias audits, use representative datasets, implement fairness constraints
		  - **Standard Reference**: ISO/IEC 23894:2023, data-related risks; NIST AI RMF, fairness characteristic

		  ### Challenge: Explainability and Transparency
		  - **Problem**: Complex ML models (especially deep neural networks) act as "black boxes", making decisions difficult to interpret
		  - **Solution**: Use interpretable models where appropriate, employ explainability techniques (SHAP, LIME), provide model cards
		  - **Standard Reference**: EU AI Act Article 13 (transparency); NIST AI RMF, explainability characteristic

		  ## Best Practices

		  1. **Data Quality Assurance**: Ensure training data is accurate, complete, representative, and properly labelled
		  2. **Train-Validation-Test Split**: Always maintain separate datasets for training, validation, and final testing
		  3. **Performance Monitoring**: Continuously monitor deployed ML models for performance degradation and drift
		  4. **Bias Assessment**: Regularly assess models for fairness across demographic groups and protected characteristics
		  5. **Version Control**: Maintain version control for datasets, model architectures, hyperparameters, and trained models
		  6. **Documentation**: Create comprehensive model cards documenting intended use, training data, performance, limitations
		  7. **Ethical Review**: Conduct ethical impact assessments before deploying ML in high-stakes domains

		  ## Standards Alignment

		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Defines ML as core AI concept (Clause 3.1.8)
		  - **ISO/IEC 23053:2022**: Framework for AI systems using machine learning - comprehensive ML lifecycle guidance
		  - **ISO/IEC 23894:2023**: Risk management for AI/ML systems including ML-specific risks
		  - **ISO/IEC 42001:2023**: Management system for AI/ML development and deployment

		  ### NIST AI RMF
		  - **Function**: MAP (understanding ML system context), MEASURE (ML performance metrics), MANAGE (ML risks)
		  - **Category**: MAP 1.1 (ML system context), MEASURE 2.1 (ML performance), MANAGE 1.1 (ML risk treatment)
		  - **Reference**: NIST AI RMF 1.0, throughout framework; NIST AI 100-3, ML terminology

		  ### EU AI Act
		  - **Article**: Article 10 - Data and data governance (ML training data requirements)
		  - **Risk Category**: ML systems in high-risk applications subject to stringent requirements
		  - **Requirements**: Data quality, representativeness, bias assessment, documentation, testing

		  ### OECD AI Principles
		  - **Principle**: Robust, secure and safe AI - ML systems must be reliable throughout lifecycle
		  - **Application**: ML training processes must align with transparency and accountability principles

		  ## Related Terms
		  - **Training Data** (AI-0021): Dataset used to train ML models
		  - **Supervised Learning** (AI-0011): ML paradigm using labelled training examples
		  - **Deep Learning** (AI-0003): ML using multi-layer neural networks
		  - **Model** (AI-0007): Output of ML training process
		  - **Algorithm** (AI-0005): Computational procedure enabling ML

  #### References
  ### Standards Documents
		  1. ISO/IEC 22989:2022 - Artificial intelligence concepts and terminology - https://www.iso.org/standard/74296.html
		  2. ISO/IEC 23053:2022 - Framework for Artificial Intelligence (AI) Systems Using Machine Learning (ML) - https://www.iso.org/standard/74438.html
		  3. ISO/IEC 23894:2023 - Guidance on Risk Management - https://www.iso.org/standard/77304.html
		  4. NIST AI 100-3 - The Language of Trustworthy AI: An In-Depth Glossary of Terms - https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-3ipd.pdf

		  ### Academic Papers
		  1. Mitchell, T. - "Machine Learning" - McGraw-Hill, 1997 (foundational textbook)
		  2. Goodfellow, I., Bengio, Y., Courville, A. - "Deep Learning" - MIT Press, 2016

		  ### Industry Reports
		  1. Gartner - "Hype Cycle for Artificial Intelligence 2024" - 2024
		  2. McKinsey Global Institute - "The State of AI in 2024" - 2024

		  ## Examples

		  ### Example 1: Image Classification ML System
		  ```yaml
		  image_classifier:
		    type: MachineLearning
		    paradigm: SupervisedLearning
		    task: ImageClassification
		    training_data:
		      source: ImageNet
		      samples: 1_400_000
		      labels: 1000_categories
		    model:
		      architecture: ResNet-50
		      parameters: 25_million
		      training_epochs: 90
		    performance:
		      top_1_accuracy: 0.76
		      top_5_accuracy: 0.93
		    features:
		      - learns_visual_patterns_from_examples
		      - generalises_to_unseen_images
		      - improves_with_more_training_data
		  ```

		  ### Example 2: Natural Language Processing ML
		  ```yaml
		  sentiment_analyser:
		    type: MachineLearning
		    paradigm: SupervisedLearning
		    task: SentimentClassification
		    training_data:
		      source: customer_reviews
		      samples: 50_000
		      labels: [positive, negative, neutral]
		    model:
		      architecture: BERT_fine_tuned
		      parameters: 110_million
		      training_time: 3_hours_on_GPU
		    performance:
		      accuracy: 0.89
		      f1_score: 0.87
		    features:
		      - learns_sentiment_patterns_from_text
		      - handles_unseen_vocabulary
		      - context_aware_classification
		  ```

  ## 2024-2025: Foundation Models and Transformer Dominance

  The period from 2024 through 2025 witnessed machine learning's evolution towards **foundation models** with growing emphasis on multimodal capabilities, transformers as the dominant architecture, and emerging federated learning patterns for privacy-preserving distributed training.

  ### Foundation Models Convergence

  Foundation models continued to dominate the ML landscape into 2024, reaching **performance convergence** where advanced models became increasingly interchangeable for many use cases. The focus shifted from parameter counts to **usability, trust, and interoperability**. Although over **90% of organisations** increased generative AI use in 2024, only **8% considered their initiatives mature**, highlighting the gap between adoption and production readiness.

  ### Transformer Architecture Supremacy

  **Transformers** (sequence-to-sequence models) emerged as the rising star of 2024 ML trends, using encoder-decoder architecture to transform input data sequences. Transformers fundamentally changed how computers understand and generate human language, with large language models like **GPT-4**, **Claude 3.5**, and **Gemini 2.0** utilising this technology as their foundation.

  ### Multimodal Vision Language Models

  Multimodal approaches drove major technological advancements in 2024-2025. Multimodal vision language models like **CLIP**, **DALL-E**, and **Sora** combined computer vision and language processing to understand images and text together. Foundation models for robotics proved potentially even more transformative than generative AI, enabling embodied intelligence across physical and digital domains.

  ### Federated Learning for Privacy

  **Federated learning** gained significant traction, training AI models on data without transmitting sensitive information. This approach enabled learning from distributed data kept privately on various devices, proving particularly valuable in **healthcare and finance** where data privacy is paramount. Federated learning addressed the growing regulatory requirements for data protection whilst enabling collaborative model training across institutional boundaries.

  ### Novel Training Techniques

  Recent ML advances encompassed novel training techniques including **self-supervised learning**, **federated learning**, and **deep reinforcement learning**. Self-supervised learning reduced dependence on labelled data by learning representations from the data structure itself, whilst deep reinforcement learning enabled agents to learn optimal policies through environmental interaction.

  ### Agentic AI Integration

  The second half of 2024 saw growing interest in **agentic AI** models capable of independent action, designed to autonomously handle tasks and manage workflows. This represented machine learning's evolution from passive prediction systems to active autonomous agents capable of multi-step reasoning and action.

		  ## Validation

		  ### ROBOT Checks
		  - [x] Class coherence
		  - [x] Property domain/range
		  - [x] Annotation completeness
		  - [x] Disjointness axioms (with RuleBasedAI)

		  ### SHACL Constraints
		  - [x] Data type correctness
		  - [x] Value range validation
		  - [x] Cardinality constraints (requires TrainingData)
		  - [x] Cross-reference integrity

		  ## Version History

		  | Version | Date | Changes | Contributor |
		  |---------|------|---------|-------------|
		  | 1.0 | 2025-10-27 | Initial definition from ISO/IEC 22989:2022 | Priority 1 Writer Agent |

		  ## VisioningLab Crosswalk

		  **VisioningLab Property**: ai:machineLearning
		  **URI Mapping**: http://www.visioninglab.com/ontology/ai#MachineLearning
		  **Transformation Notes**: Core ML concept mapping to VisioningLab AI ontology

		  ---

		  **Navigation**: [← Back to Index](../../README.md) | [Domain: ML](../../domains/MLDomain.md) | [Layer: Algorithmic](../../layers/AlgorithmicLayer.md)

		  **Authority Score**: 0.95 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST ✓ EU AI Act ✓ OECD

		  ```

  ## Academic Context

  - Machine learning represents a fundamental paradigm shift in computational systems, enabling algorithms to improve performance through data exposure rather than explicit programming[2][4]
  - Formally defined as a subset of artificial intelligence that uses statistical methods and computational techniques to identify patterns and optimise model parameters[1][3]
  - Distinguishes itself from traditional programming by allowing systems to adapt and modify behaviour based on experience with data, independent of programmer assumptions[4]
  - Grounded in statistical inference and symbolic logic, with modern implementations increasingly relying on statistical models rather than rule-based systems[4]

  - The intersection of machine learning with ontologies and knowledge representation has emerged as a particularly innovative research space[5]
  - Ontologies provide formal specifications of concepts, relationships, and properties that enable machines to process information with greater semantic expressiveness[2][3]
  - Machine learning systems utilise ontological frameworks to extract, code, and analyse structured and unstructured information more effectively[5]

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Machine learning has become embedded across consumer-facing systems including voice assistants (Siri, Alexa), autonomous vehicles (Tesla), and customer service platforms (Cogito)[4]
  - Applications span predictive analytics, precision medicine, and differential diagnosis in clinical settings[5]
  - Systems now routinely update their knowledge bases through experience with data, enabling continuous improvement without explicit reprogramming[4]

  - Technical capabilities and limitations
  - Machines can gather inputs, process them through statistical models, and synthesise information to generate hypotheses and classify knowledge[4]
  - Pattern recognition and generalisation capabilities allow learned patterns to apply to previously unseen data[1]
  - Performance improvements occur iteratively through training processes and exposure to training datasets[1]
  - Effectiveness depends significantly on data quality, quantity, and representativeness—systems struggle with vague or vacuous naming conventions and sparse datasets[1]

  - Standards and frameworks
  - ISO/IEC 22989:2022 provides formal definitions emphasising learning from experience without explicit programming
  - ISO/IEC 23053:2022 focuses on model parameter optimisation through computational techniques
  - NIST frameworks address machine learning lifecycle ontologies for capturing and structuring ML system information[6]

  ## Research & Literature

  - Key academic papers and sources
  - Doan, P. et al. (2003). Ontology Matching: A Machine Learning Approach. Proceedings of the International Semantic Web Conference. Demonstrates GLUE system using machine learning to create semantic mappings between ontologies, focusing on taxonomy correspondences[1]
  - Feilmayr, C. & Wöß, W. (2016). An analysis of ontologies and their success factors for application to business. Data & Knowledge Engineering, 101, 1-23. Refines ontology definitions emphasising formal, explicit specifications of shared conceptualisations with high semantic expressiveness[2]
  - Gruber, T. R. (1993). A translation approach to portable ontology specifications. Knowledge Acquisition, 5(2), 199-220. Foundational work distinguishing ontologies from taxonomies and establishing that ontologies require axioms constraining possible interpretations[2]

  - Ongoing research directions
  - Natural language processing integration with ontologies for extracting structured information from electronic health records and medical texts[5]
  - Word and node embedding algorithms supplementing NLP capabilities in clinical and research contexts[5]
  - Hybrid approaches combining ontological frameworks with machine learning for improved semantic understanding[5]
  - Experimental frameworks exploring AI-human co-evolution structures, though these remain nascent in academic discourse[2]

  ## UK Context

  - British contributions to machine learning research remain substantial, though the search results do not identify specific North England innovation hubs with particular relevance to machine learning ontologies
  - UK academic institutions contribute significantly to ontology research and knowledge representation frameworks
  - Clinical applications of machine learning with ontological support are being implemented across NHS systems for precision medicine and diagnostic support[5]

  ## Future Directions

  - Emerging trends and developments
  - Machines increasingly receiving "prebuilt knowledge" based on common sense and general knowledge repositories (OpenCyc, WordNet), enhancing diagnostic and analytical capabilities[4]
  - Greater ability to suggest medical diagnoses, analyse market trends, and perform complex customer service functions through improved ontological representations[4]
  - Continued convergence of semantic technologies with machine learning systems for more sophisticated information processing[5]

  - Anticipated challenges
  - Ontologies require continuous refinement as new evidence and data inputs modify understanding of domains—static ontologies become obsolete[4]
  - Balancing formal semantic expressiveness with computational efficiency remains an ongoing challenge[2]
  - Ensuring machine learning systems maintain interpretability and alignment with human understanding as complexity increases[5]

  - Research priorities
  - Developing robust frameworks for ontology maintenance and evolution within machine learning pipelines[4]
  - Advancing hybrid approaches that combine symbolic logic with statistical models for improved reasoning[4]
  - Establishing standardised practices for knowledge representation in clinical and enterprise machine learning applications[5]

  ## References

  1. Doan, P., Madhavan, J., Domingos, P., & Halevy, A. (2003). Ontology Matching: A Machine Learning Approach. In Proceedings of the International Semantic Web Conference. Available at: https://homes.cs.washington.edu/~pedrod/papers/hois.pdf

  2. Gruber, T. R. (1993). A translation approach to portable ontology specifications. Knowledge Acquisition, 5(2), 199-220.

  3. Feilmayr, C. & Wöß, W. (2016). An analysis of ontologies and their success factors for application to business. Data & Knowledge Engineering, 101, 1-23.

  4. Bowles, M. (2024). Taxonomy vs Ontology: Machine Learning Breakthroughs. Dataversity. Available at: https://www.dataversity.net/articles/taxonomy-vs-ontology-machine-learning-breakthroughs/

  5. Hripcsak, G. & Albers, D. J. (2020). Ontologies, Knowledge Representation, and Machine Learning for Clinical Research. Yearbook of Medical Informatics, 29(1), 159-162. DOI: 10.1055/s-0040-1701991

  6. National Institute of Standards and Technology (NIST). An Introduction to Machine Learning Lifecycle Ontology and its Applications. Available at: https://www.nist.gov/publications/introduction-machine-learning-lifecycle-ontology-and-its-applications


  <!-- Merged from MachineLearning.md: MetaverseDomain -->

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
