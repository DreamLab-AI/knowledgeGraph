- ### OntologyBlock
  id:: gpt-4-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0215
	- preferred-term:: GPT 4
	- source-domain:: ai
	- status:: draft
- definition:: A large-scale, multimodal transformer-based model that accepts image and text inputs and produces text outputs, exhibiting human-level performance on various professional and academic benchmarks.

## Characteristics

- **Multimodal Capabilities**: Processes both images and text
- **Human-Level Performance**: Matches or exceeds human performance on many benchmarks
- **Professional Competency**: Passes professional exams (bar exam, medical licensing)
- **Improved Safety**: Enhanced alignment through RLHF

## Academic Foundations

**Primary Source**: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774 (2023)

**Benchmark Performance**: Passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance.

**Estimated Scale**: Model card asserts training on 13 trillion tokens (though architecture details remain largely undisclosed).

## Technical Context

GPT-4 represents a major advancement in multimodal AI, capable of understanding both visual and textual information. It demonstrates significant improvements in factuality, steerability, and safety compared to GPT-3.5, whilst maintaining strong few-shot learning capabilities.

## Ontological Relationships

- **Broader Term**: Large Language Model, Multimodal Model
- **Related Terms**: GPT-3, Multimodal Learning, Vision-Language Model
- **Variants**: GPT-4 Turbo, GPT-4V (Vision)

## Usage Context

"GPT-4 passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT4))
(AnnotationAssertion rdfs:label :GPT4 "GPT-4"@en)
(AnnotationAssertion rdfs:comment :GPT4
  "Large-scale multimodal transformer model accepting image and text inputs, exhibiting human-level performance on benchmarks."@en)
(AnnotationAssertion :hasSource :GPT4
  "OpenAI, 'GPT-4 Technical Report', arXiv:2303.08774 (2023)"@en)

;; Taxonomic relationships
(SubClassOf :GPT4 :LargeLanguageModel)
(SubClassOf :GPT4 :MultimodalModel)
(SubClassOf :GPT4 :TransformerArchitecture)

;; Evolution
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :successorOf :GPT3))

;; Modalities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :TextInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :ImageInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :produces :TextOutput))

;; Alignment
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :trainedWith :RLHF))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :improves :Safety))

;; Capabilities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :HumanLevelPerformance))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :ProfessionalCompetency))

;; Variants
(SubClassOf :GPT4Turbo :GPT4)
(SubClassOf :GPT4Vision :GPT4)

;; Properties
(DataPropertyAssertion :isMultimodal :GPT4 "true"^^xsd:boolean)
(DataPropertyAssertion :contextLength :GPT4 "8192"^^xsd:integer)
(DataPropertyAssertion :barExamPercentile :GPT4 "90"^^xsd:integer)
(DataPropertyAssertion :estimatedTrainingTokens :GPT4 "13000000000000"^^xsd:integer)
(DataPropertyAssertion :developer :GPT4 "OpenAI"^^xsd:string)
```

## References

- OpenAI (2023). "GPT-4 Technical Report". arXiv:2303.08774

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: ai:GPT4
	- owl:role:: Concept
	- belongsToDomain:: [[ArtificialIntelligenceDomain]]
- ## About GPT 4
	- A large-scale, multimodal transformer-based model that accepts image and text inputs and produces text outputs, exhibiting human-level performance on various professional and academic benchmarks.

	 - ### Academic acceptance:

## Characteristics

- **Multimodal Capabilities**: Processes both images and text
- **Human-Level Performance**: Matches or exceeds human performance on many benchmarks
- **Professional Competency**: Passes professional exams (bar exam, medical licensing)
- **Improved Safety**: Enhanced alignment through RLHF

## Academic Foundations

**Primary Source**: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774 (2023)

**Benchmark Performance**: Passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance.

**Estimated Scale**: Model card asserts training on 13 trillion tokens (though architecture details remain largely undisclosed).

## Technical Context

GPT-4 represents a major advancement in multimodal AI, capable of understanding both visual and textual information. It demonstrates significant improvements in factuality, steerability, and safety compared to GPT-3.5, whilst maintaining strong few-shot learning capabilities.

## Ontological Relationships

- **Broader Term**: Large Language Model, Multimodal Model
- **Related Terms**: GPT-3, Multimodal Learning, Vision-Language Model
- **Variants**: GPT-4 Turbo, GPT-4V (Vision)

## Usage Context

"GPT-4 passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT4))
(AnnotationAssertion rdfs:label :GPT4 "GPT-4"@en)
(AnnotationAssertion rdfs:comment :GPT4
  "Large-scale multimodal transformer model accepting image and text inputs, exhibiting human-level performance on benchmarks."@en)
(AnnotationAssertion :hasSource :GPT4
  "OpenAI, 'GPT-4 Technical Report', arXiv:2303.08774 (2023)"@en)

;; Taxonomic relationships
(SubClassOf :GPT4 :LargeLanguageModel)
(SubClassOf :GPT4 :MultimodalModel)
(SubClassOf :GPT4 :TransformerArchitecture)

;; Evolution
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :successorOf :GPT3))

;; Modalities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :TextInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :ImageInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :produces :TextOutput))

;; Alignment
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :trainedWith :RLHF))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :improves :Safety))

;; Capabilities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :HumanLevelPerformance))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :ProfessionalCompetency))

;; Variants
(SubClassOf :GPT4Turbo :GPT4)
(SubClassOf :GPT4Vision :GPT4)

;; Properties
(DataPropertyAssertion :isMultimodal :GPT4 "true"^^xsd:boolean)
(DataPropertyAssertion :contextLength :GPT4 "8192"^^xsd:integer)
(DataPropertyAssertion :barExamPercentile :GPT4 "90"^^xsd:integer)
(DataPropertyAssertion :estimatedTrainingTokens :GPT4 "13000000000000"^^xsd:integer)
(DataPropertyAssertion :developer :GPT4 "OpenAI"^^xsd:string)
```

## References

- OpenAI (2023). "GPT-4 Technical Report". arXiv:2303.08774

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	-
	- ### Original Content
	  collapsed:: true
		- ```
# GPT-4
		  
		  **Term ID**: AI-0215
		  **Category**: Architecture
		  **Ontology Version**: 1.0
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  A large-scale, multimodal transformer-based model that accepts image and text inputs and produces text outputs, exhibiting human-level performance on various professional and academic benchmarks.
		  
		  ## Characteristics
		  
		  - **Multimodal Capabilities**: Processes both images and text
		  - **Human-Level Performance**: Matches or exceeds human performance on many benchmarks
		  - **Professional Competency**: Passes professional exams (bar exam, medical licensing)
		  - **Improved Safety**: Enhanced alignment through RLHF
		  
		  ## Academic Foundations
		  
		  **Primary Source**: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774 (2023)
		  
		  **Benchmark Performance**: Passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance.
		  
		  **Estimated Scale**: Model card asserts training on 13 trillion tokens (though architecture details remain largely undisclosed).
		  
		  ## Technical Context
		  
		  GPT-4 represents a major advancement in multimodal AI, capable of understanding both visual and textual information. It demonstrates significant improvements in factuality, steerability, and safety compared to GPT-3.5, whilst maintaining strong few-shot learning capabilities.
		  
		  ## Ontological Relationships
		  
		  - **Broader Term**: Large Language Model, Multimodal Model
		  - **Related Terms**: GPT-3, Multimodal Learning, Vision-Language Model
		  - **Variants**: GPT-4 Turbo, GPT-4V (Vision)
		  
		  ## Usage Context
		  
		  "GPT-4 passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance."
		  
		  ## OWL Functional Syntax
		  
		  ```clojure
		  (Declaration (Class :GPT4))
		  (AnnotationAssertion rdfs:label :GPT4 "GPT-4"@en)
		  (AnnotationAssertion rdfs:comment :GPT4
		    "Large-scale multimodal transformer model accepting image and text inputs, exhibiting human-level performance on benchmarks."@en)
		  (AnnotationAssertion :hasSource :GPT4
		    "OpenAI, 'GPT-4 Technical Report', arXiv:2303.08774 (2023)"@en)
		  
		  ;; Taxonomic relationships
		  (SubClassOf :GPT4 :LargeLanguageModel)
		  (SubClassOf :GPT4 :MultimodalModel)
		  (SubClassOf :GPT4 :TransformerArchitecture)
		  
		  ;; Evolution
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :successorOf :GPT3))
		  
		  ;; Modalities
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :accepts :TextInput))
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :accepts :ImageInput))
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :produces :TextOutput))
		  
		  ;; Alignment
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :trainedWith :RLHF))
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :improves :Safety))
		  
		  ;; Capabilities
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :demonstrates :HumanLevelPerformance))
		  (SubClassOf :GPT4
		    (ObjectSomeValuesFrom :demonstrates :ProfessionalCompetency))
		  
		  ;; Variants
		  (SubClassOf :GPT4Turbo :GPT4)
		  (SubClassOf :GPT4Vision :GPT4)
		  
		  ;; Properties
		  (DataPropertyAssertion :isMultimodal :GPT4 "true"^^xsd:boolean)
		  (DataPropertyAssertion :contextLength :GPT4 "8192"^^xsd:integer)
		  (DataPropertyAssertion :barExamPercentile :GPT4 "90"^^xsd:integer)
		  (DataPropertyAssertion :estimatedTrainingTokens :GPT4 "13000000000000"^^xsd:integer)
		  (DataPropertyAssertion :developer :GPT4 "OpenAI"^^xsd:string)
		  ```
		  
		  ## References
		  
		  - OpenAI (2023). "GPT-4 Technical Report". arXiv:2303.08774
		  
		  ---
		  
		  *Ontology Term managed by AI-Grounded Ontology Working Group*
		  *UK English Spelling Standards Applied*
		  
		  ```

- public-access:: true
	- definition:: A large-scale, multimodal transformer-based model that accepts image and text inputs and produces text outputs, exhibiting human-level performance on various professional and academic benchmarks.



## Academic Context

- Brief contextual overview
  - GPT-4 represents a significant milestone in the evolution of large language models, marking a shift from unimodal text generation to multimodal reasoning and interaction.
  - The model’s architecture is rooted in the transformer paradigm, with notable enhancements in context handling, instruction following, and multimodal input processing.
  - Key developments and current state
    - GPT-4 was succeeded by GPT-4o and later by GPT-4.1 and GPT-5, each iteration improving on coding, instruction following, and long-context comprehension.
    - The model’s legacy persists in research and legacy systems, though it is no longer the default for most consumer-facing applications.
  - Academic foundations
    - The transformer architecture, introduced by Vaswani et al. (2017), underpins GPT-4’s design.
    - Subsequent research has focused on scaling, multimodal fusion, and reasoning capabilities.

## Current Landscape (2025)

- Industry adoption and implementations
  - Notable organisations and platforms
    - OpenAI, Microsoft, Google DeepMind, Anthropic, and Meta AI have all integrated GPT-4 and its successors into their products and services.
    - Microsoft Copilot Studio, for example, transitioned to GPT-4.1 as the default model for newly created agents in October 2025.
  - UK and North England examples where relevant
    - In Manchester, the University of Manchester’s AI research group has leveraged GPT-4 for natural language processing tasks in healthcare and education.
    - Leeds City Council has piloted GPT-4-powered chatbots for citizen services, enhancing accessibility and efficiency.
    - Newcastle University’s School of Computing Science has used GPT-4 in research projects focused on multimodal data analysis.
    - Sheffield Hallam University has integrated GPT-4 into its digital learning platforms, supporting students and staff with advanced AI tools.
- Technical capabilities and limitations
  - GPT-4 excels in handling complex, nuanced instructions and can process both text and images, making it suitable for a wide range of applications.
  - The model’s context window has been expanded to support up to 1 million tokens, allowing for more comprehensive and coherent long-form content generation.
  - Limitations include occasional inaccuracies in factual recall and the need for careful prompt engineering to achieve optimal results.
- Standards and frameworks
  - Industry standards for model evaluation, such as SWE-bench Verified and Scale’s MultiChallenge, have been adopted to benchmark GPT-4’s performance.
  - Frameworks for multimodal fusion and reasoning training have been developed to enhance the model’s capabilities.

## Research & Literature

- Key academic papers and sources
  - Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is All You Need. *Advances in Neural Information Processing Systems*, 30, 5998-6008. https://doi.org/10.48550/arXiv.1706.03762
  - Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language Models are Few-Shot Learners. *Advances in Neural Information Processing Systems*, 33, 1877-1901. https://doi.org/10.48550/arXiv.2005.14165
  - OpenAI. (2023). GPT-4 Technical Report. https://openai.com/research/gpt-4
- Ongoing research directions
  - Research is focused on improving multimodal fusion, enhancing reasoning capabilities, and developing more efficient and scalable architectures.
  - There is also a growing interest in ethical and societal implications, including bias mitigation and transparency in AI systems.

## UK Context

- British contributions and implementations
  - The UK has been at the forefront of AI research, with institutions like the Alan Turing Institute and the University of Cambridge contributing to the development and application of GPT-4.
  - British companies, such as DeepMind (a subsidiary of Alphabet), have played a significant role in advancing AI technologies.
- North England innovation hubs (if relevant)
  - Manchester, Leeds, Newcastle, and Sheffield have emerged as key innovation hubs, with universities and local authorities collaborating on AI projects.
  - The Northern Powerhouse initiative has supported the growth of AI and data science in the region, fostering a vibrant ecosystem of startups and research institutions.
- Regional case studies
  - Manchester’s AI research group has used GPT-4 to develop chatbots for mental health support, demonstrating the model’s potential in healthcare.
  - Leeds City Council’s chatbot pilot has improved citizen engagement and service delivery, showcasing the practical benefits of AI in local government.

## Future Directions

- Emerging trends and developments
  - The trend towards more multimodal and reasoning-capable models is expected to continue, with GPT-5 and beyond pushing the boundaries of what is possible.
  - There is a growing focus on ethical AI, with efforts to ensure that models are transparent, fair, and accountable.
- Anticipated challenges
  - Ensuring the reliability and accuracy of AI systems remains a significant challenge, particularly as models become more complex and are deployed in critical applications.
  - Addressing issues of bias and fairness is crucial to building trust and ensuring that AI benefits all segments of society.
- Research priorities
  - Research priorities include improving multimodal fusion, enhancing reasoning and planning capabilities, and developing more efficient and scalable architectures.
  - There is also a need for ongoing research into the ethical and societal implications of AI, including the impact on employment, privacy, and social equity.

## References

1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is All You Need. *Advances in Neural Information Processing Systems*, 30, 5998-6008. https://doi.org/10.48550/arXiv.1706.03762
2. Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language Models are Few-Shot Learners. *Advances in Neural Information Processing Systems*, 33, 1877-1901. https://doi.org/10.48550/arXiv.2005.14165
3. OpenAI. (2023). GPT-4 Technical Report. https://openai.com/research/gpt-4
4. Microsoft. (2025). What's new in Copilot Studio: October 2025. https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/whats-new-in-copilot-studio-october-2025/
5. Wikipedia. (2025). GPT-4. https://en.wikipedia.org/wiki/GPT-4
6. Originality.ai. (2025). GPT-4 Retired in 2025: Here's What You Need to Know. https://originality.ai/blog/gpt-4-retired-insights
7. Simon Willison. (2025). The surprise deprecation of GPT-4o for ChatGPT consumers. https://simonwillison.net/2025/Aug/8/surprise-deprecation-of-gpt-4o/
8. RisingStack. (2025). The State of OpenAI's GPT Models – Spring 2025. https://blog.risingstack.com/state-of-openai-gpt-models/
9. DataStudios. (2025). All ChatGPT models in 2025: complete report on GPT-4o, o3, o4 ... https://www.datastudios.org/post/all-chatgpt-models-in-2025-complete-report-on-gpt-4o-o3-o4-mini-4-1-and-their-real-capabilities


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
