public:: true

# Overview of Machine Learning Techniques
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:245af8aa0bdbdadc70db2e13c655749fc4af27187d0883277372720b794797e5",
  "@type": "Page",
  "vc:slug": "overview-of-machine-learning-techniques",
  "title": "Overview of Machine Learning Techniques",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:presentation",
      "vc:label": "presentation"
    },
    {
      "@id": "urn:visionflow:linked:rlhf",
      "vc:label": "RLHF"
    },
    {
      "@id": "urn:visionflow:owl:class:diffusion-models",
      "vc:label": "Diffusion Models"
    },
    {
      "@id": "urn:visionflow:owl:class:direct-preference-optimization",
      "vc:label": "Direct Preference Optimization"
    },
    {
      "@id": "urn:visionflow:owl:class:generative-adversarial-networks",
      "vc:label": "Generative Adversarial Networks"
    },
    {
      "@id": "urn:visionflow:owl:class:proprietary-large-language-models",
      "vc:label": "Proprietary Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:state-space-and-other-approaches",
      "vc:label": "State Space and Other Approaches"
    },
    {
      "@id": "urn:visionflow:owl:class:transformers",
      "vc:label": "Transformers"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Overview of Machine Learning Techniques"
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
  "@id": "urn:ngm:class:overview-of-machine-learning-techniques",
  "@type": "Class",
  "label": "Overview of Machine Learning Techniques",
  "definition": "A structured survey of the principal paradigms and architectures in machine learning, spanning supervised methods (SVMs, decision trees, logistic regression), unsupervised clustering (k-means, KNN), and deep learning approaches (neural networks, transformers, diffusion models, GANs). The survey contextualises training paradigms including reinforcement learning from human feedback and direct preference optimisation, and positions large proprietary language models within the broader ML taxonomy.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:deep-learning",
      "label": "Deep Learning"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:transformers", "label": "Transformers"},
      {"@id": "urn:ngm:class:diffusion-models", "label": "Diffusion Models"},
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:direct-preference-optimization", "label": "Direct Preference Optimization"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:optimization-algorithms", "label": "Optimization Algorithms"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:overview-of-machine-learning-techniques:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:245af8aa0bdbdadc70db2e13c655749fc4af27187d0883277372720b794797e5"
  },
  "vc:resolutions": [
    {
      "raw": "[[presentation]]",
      "resolved": "urn:visionflow:linked:presentation",
      "kind": "StubLink"
    },
    {
      "raw": "[[RLHF]]",
      "resolved": "urn:visionflow:linked:rlhf",
      "kind": "StubLink"
    },
    {
      "raw": "[[Diffusion Models]]",
      "resolved": "urn:visionflow:owl:class:diffusion-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Direct Preference Optimization]]",
      "resolved": "urn:visionflow:owl:class:direct-preference-optimization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Adversarial Networks]]",
      "resolved": "urn:visionflow:owl:class:generative-adversarial-networks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proprietary Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:proprietary-large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Space and Other Approaches]]",
      "resolved": "urn:visionflow:owl:class:state-space-and-other-approaches",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformers]]",
      "resolved": "urn:visionflow:owl:class:transformers",
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
  - A structured survey of the principal paradigms and architectures in machine learning, spanning supervised methods (SVMs, decision trees, logistic regression), unsupervised clustering (k-means, KNN), and deep learning approaches (neural networks, transformers, diffusion models, GANs). The survey contextualises training paradigms including reinforcement learning from human feedback and direct preference optimisation, and positions large proprietary language models within the broader ML taxonomy.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:OverviewOfMachineLearningTechniques
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Transformers]], [[Diffusion Models]], [[Generative Adversarial Networks]], [[Reinforcement Learning]], [[Direct Preference Optimization]]
  - enables: [[Large Language Models]], [[Generative AI]]
  - uses: [[Optimization Algorithms]], [[Neural Network]]

- ### Content
  - #Public page
  - automatically published
  - It's not intelligent. It's just machine learning which is statistics.
  - Artificial intelligence is a marketing term, but it's supported in literature as the high level term.
  - [That's OK!](https://simonwillison.net/2024/Jan/7/call-it-ai/)
  - I'm mainly going to use AI from here in.
  - ![1706985611136.gif](../assets/1706985611136_1707078214092_0.gif)
  - # Machine Learning Techniques Overview
		- **Concept**: Techniques where models learn from labeled data.
		- **Explain**: Like teaching a child with clear examples and answers.
		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)
		- ##### 2️⃣ Naive Bayes
		- **Description**: Probabilistic classifier based on Bayes' Theorem.
		- **Explain**: Like guessing the likelihood of something happening based on past events.
		- **Paper**: [An Empirical Study of the Naïve Bayes Classifier](https://sites.cc.gatech.edu/home/isbell/classes/reading/papers/Rish.pdf)
		- ##### 3️⃣ Linear Regression
		- **Description**: Models linear relationships between variables.
		- **Explain**: Like predicting your height based on your age.
		- **Medium Post:** [A short into to Linear Regression](https://medium.com/pew-research-center-decoded/a-short-intro-to-linear-regression-analysis-using-survey-data-ff39468f8afb)
		- ##### 4️⃣ Logistic Regression
		- **Description**: Used for binary classification problems.
		- **Explain**: Like deciding if something is true or false.
		- **Paper**: [Logistic regression in data analysis: An overview](https://www.researchgate.net/profile/Maher-Maalouf-2/publication/283211221_IJDATS_Logistic_Regression_Rare_Events/data/562e0fb508ae518e34827577/IJDATS-Logistic-Regression-Rare-Events.pdf)
		- ##### 5️⃣ Decision Trees
		- **Description**: Tree-like model for decisions and consequences.
		- **Explain**: Like a flowchart to make decisions, but using numbers (weights)
		- **Paper**: [Study and Analysis of Decision Tree Based Classification Algorithms](https://www.researchgate.net/profile/Purvi-Prajapati/publication/330138092_Study_and_Analysis_of_Decision_Tree_Based_Classification_Algorithms/links/5d2c4a91458515c11c3166b3/Study-and-Analysis-of-Decision-Tree-Based-Classification-Algorithms.pdf)
		- ##### 6️⃣ Random Forest
		- **Description**: Ensemble of decision trees for improved accuracy.
		- **Explain**: Like consulting a group of experts instead of just one.
		- **Paper**: [Understanding Random Forests: From Theory to Practice](https://arxiv.org/abs/1407.7502)
		- **Concept**: Techniques where models learn from unlabeled data.
		- **Explain Like I'm New**: Learning without direct guidance, like exploring a new city without a map.
		- ##### 1️⃣ K-Means Clustering
		- **Description**: Partitions data into k distinct clusters.
		- **Explain Like I'm New**: Like organizing similar things into different groups.
		- **Paper**: [K-means clustering algorithms: A comprehensive review, variants, and advances](https://www.sciencedirect.com/science/article/pii/S0020025522014633?)
		- ##### 2️⃣ K-Nearest Neighbors (KNN)
		- **Description**: Classifies cases based on similarity measures.
		- **Explain Like I'm New**: Like making friends based on common interests.
		- **Paper**: [Comparative performance analysis of K-nearest neighbour (KNN)](https://www.nature.com/articles/s41598-022-10358-x)
		- **Concept**: Advanced algorithms inspired by the structure of the human brain.
		- **Explain**: Like building a brain in a computer to solve complex problems.
		- **Description**: Consists of layers of interconnected nodes which just tweak numbers
		- **Explain**: Like a network of brain cells working together to think and learn.
		- **Paper**: [Neural networks: An overview of early research, current frameworks and new challenges](https://www.sciencedirect.com/science/article/pii/S0925231216305550?)
		- {{video https://www.youtube.com/watch?v=aircAruvnKk&}}
		- **Description**: Involves training large neural networks.
		- **Explain**: Larger scale engineering of neural nets, to solve much harder problems.
		- **Paper**: [Deep Learning: A Comprehensive Overview on Techniques, Taxonomy, and Applications](https://link.springer.com/article/10.1007/s42979-021-00815-1)
		- **Fine tuning and alignment**
			- **Description**: Two neural networks trained in an adversarial process.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)
			- **Description:** *DPO dramatically simplifies the whole thing.
			- **Explain:** Removes the reward function, and so the human in the loop.
			- **Paper:** [Direct Preference Optimization: Your Language Model is Secretly a Reward Model (arxiv.org)](https://arxiv.org/abs/2305.18290?)
		- **In operation:  [[Proprietary Large Language Models]]:**
			- **Description**: Two neural networks trained in an adversarial process.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)
			- **Description**: Advanced models that 'diffuse' data to create new, synthetic outputs, using efficient [[Transformers]]
			- **Explain**: Imagine starting with a noisy, random pattern and gradually shaping it into a clear picture.
			- **Paper**: [Diffusion Models: A Comprehensive Survey of Methods and Applications](https://arxiv.org/abs/2311.10242)  *(Note: This covers the lot including:)*
			- **Description:** Circa 2017, introduced self-attention mechanism to capture dependencies between different words in a sequence.
			- **Explain:** Examines the interdependencies across a wider view of words / tokens
			- **Paper:** [Attention Is All You Need (arxiv.org)](https://arxiv.org/abs/1706.03762) **(underpinned recent advances)**
			- Not the only game in town [[State Space and Other Approaches]] and [others](https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari)
		- <iframe src="https://bbycroft.net/llm" style="width: 100%; height: 600px"></iframe>
  - Next [[presentation]] slide [[Proprietary Large Language Models]]

  - ## AI or ML or what?
  - ## Supervised Learning
  - ## Unsupervised Learning
  - ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- #### 1️⃣ Neural Networks
		- #### 2️⃣ Deep Learning
		- #### 3️⃣ Reinforcement Learning from Human Feedback [[RLHF]]
		- #### 4️⃣ Direct Preference Optimisation [[Direct Preference Optimization]]
		- #### 5️⃣ Generative Adversarial Networks [[Generative Adversarial Networks]]
		- #### 6️⃣ [[Diffusion Models]] (Generative Models)
		- #### 7️⃣ 🟢 [[Transformers]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
