- ### OntologyBlock
  id:: continued-pre-training-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0248
	- preferred-term:: Continued Pre-Training
	- source-domain:: ai
	- owl:class:: ai:ContinuedPreTraining
	- status:: approved
	- public-access:: true
	- definition:: An intermediate training phase where a pre-trained model undergoes additional pre-training on domain-specific or task-relevant data before fine-tuning. This technique bridges general pre-training and task-specific fine-tuning, adapting model knowledge to particular domains whilst maintaining broad capabilities.
	- source:: [[AWS SageMaker CPT Documentation]], [[Google Cloud AI Platform]], [[AMD ROCm Multilingual CPT Playbook]], [[Raschka 2025 LLM Training Paradigms]]
	- maturity:: mature
	- #### Relationships
- is-subclass-of:: [[ai:ModelArchitecture]]
	  id:: continued-pre-training-relationships
	  collapsed:: true
		- is-subclass-of:: [[PreTraining]]

## Continued Pre Training

Continued Pre Training refers to an intermediate training phase where a pre-trained model undergoes additional pre-training on domain-specific or task-relevant data before fine-tuning. this technique bridges general pre-training and task-specific fine-tuning, adapting model knowledge to particular domains whilst maintaining broad capabilities.

- Industry adoption and implementations
	- Major cloud platforms such as Amazon SageMaker and Google Cloud offer CPT capabilities, allowing organisations to adapt pre-trained models to specific domains or languages
	- Notable organisations include AWS, Google, and AMD, which have published practical playbooks and technical frameworks for implementing CPT
- UK and North England examples where relevant
	- UK-based research institutions and tech companies are increasingly adopting CPT for domain-specific applications, particularly in healthcare, finance, and legal sectors
	- North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield are home to several startups and academic groups exploring CPT for regional language adaptation and domain-specific use cases
- Technical capabilities and limitations
	- CPT enables rapid domain adaptation and improved performance on specialized tasks without the need for extensive task-specific fine-tuning
	- However, the technique requires careful data selection and preprocessing to avoid overfitting and ensure the model retains its general capabilities
- Standards and frameworks
	- Training and validation datasets for CPT should be diverse, representative, clean, and scaled appropriately to the target domain
	- Common data formats include JSONL files following the Converse format, with each line containing a JSON object representing a conversation or text entry

## Technical Details

- **Id**: continued-pre-training-ontology
- **Collapsed**: true
- **Source Domain**: ai
- **Status**: draft
- **Public Access**: true

## Research & Literature

- Key academic papers and sources
	- Behrouz, A., & Mirrokni, V. (2025). Introducing Nested Learning: A new ML paradigm for continual learning. Google Research Blog. https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/
	- Raschka, S. (2025). New LLM Pre-training and Post-training Paradigms. Ahead of AI. https://magazine.sebastianraschka.com/p/new-llm-pre-training-and-post-training
	- AMD ROCm Blog. (2025). Continued Pretraining: A Practical Playbook for Language-Specific LLM Adaptation. https://rocm.blogs.amd.com/artificial-intelligence/multilingual-continued-pretraining/README.html
	- Emergent Mind. (2025). Continued Pre-Training (CPT) Overview. https://www.emergentmind.com/topics/continued-pre-training-cpt
	- Amazon SageMaker AI. (2025). Continued pre-training (CPT). https://docs.aws.amazon.com/sagemaker/latest/dg/nova-cpt.html
- Ongoing research directions
	- Exploring the use of CPT for multi-modal tasks and low-resource languages
	- Investigating the impact of different data selection and preprocessing techniques on model performance
	- Developing new methods to mitigate catastrophic forgetting and improve scaling behaviour

## UK Context

- British contributions and implementations
	- UK researchers and institutions are actively contributing to the development and application of CPT, particularly in the areas of healthcare, finance, and legal technology
	- Collaborative projects between academia and industry are driving innovation in domain-specific and language-specific model adaptation
- North England innovation hubs (if relevant)
	- Manchester, Leeds, Newcastle, and Sheffield are emerging as key centres for AI and machine learning research, with several startups and academic groups focusing on CPT for regional language adaptation and domain-specific use cases
	- Local innovation hubs are fostering collaboration between researchers, industry partners, and policymakers to advance the adoption of CPT in the region
- Regional case studies
	- A recent project in Manchester used CPT to adapt a pre-trained model for medical text analysis, significantly improving performance on domain-specific tasks
	- In Leeds, a startup leveraged CPT to develop a multilingual chatbot for customer service, demonstrating the technique's effectiveness in low-resource language settings

## Future Directions

- Emerging trends and developments
	- Increased focus on multi-modal and cross-lingual CPT, enabling models to adapt to a wider range of domains and languages
	- Development of more efficient and scalable CPT frameworks, reducing the computational and data requirements for domain adaptation
- Anticipated challenges
	- Ensuring the quality and diversity of training data to avoid overfitting and maintain general capabilities
	- Addressing the issue of catastrophic forgetting and developing robust methods to preserve previously learned knowledge
- Research priorities
	- Investigating the impact of different data selection and preprocessing techniques on model performance
	- Exploring the use of CPT for emerging applications such as speech recognition, multi-modal learning, and low-resource language adaptation

## References

1. Behrouz, A., & Mirrokni, V. (2025). Introducing Nested Learning: A new ML paradigm for continual learning. Google Research Blog. https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/
2. Raschka, S. (2025). New LLM Pre-training and Post-training Paradigms. Ahead of AI. https://magazine.sebastianraschka.com/p/new-llm-pre-training-and-post-training
3. AMD ROCm Blog. (2025). Continued Pretraining: A Practical Playbook for Language-Specific LLM Adaptation. https://rocm.blogs.amd.com/artificial-intelligence/multilingual-continued-pretraining/README.html
4. Emergent Mind. (2025). Continued Pre-Training (CPT) Overview. https://www.emergentmind.com/topics/continued-pre-training-cpt
5. Amazon SageMaker AI. (2025). Continued pre-training (CPT). https://docs.aws.amazon.com/sagemaker/latest/dg/nova-cpt.html

## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
