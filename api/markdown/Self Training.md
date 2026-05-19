public:: true

# Self Training
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:148248ed43246b07c02cf28b1d102974bb625c8cb0db5035739c845215c8d488",
  "@type": "Page",
  "vc:slug": "self-training",
  "title": "Self Training",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:education-and-ai",
      "vc:label": "Education and AI"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0281"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Self Training"
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
  "@id": "urn:ngm:class:self-training",
  "@type": "Class",
  "label": "Self Training",
  "definition": "A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:semi-supervised-learning",
      "label": "Semi-Supervised Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:self-training:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:148248ed43246b07c02cf28b1d102974bb625c8cb0db5035739c845215c8d488"
  },
  "vc:resolutions": [
    {
      "raw": "[[Education and AI]]",
      "resolved": "urn:visionflow:owl:class:education-and-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
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
  - A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SelfTraining
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.

		- ### Characteristics of Deep Agents
			- Deep agents distinguish themselves through:
				- Extended runtime (minutes to hours or days)
				- Comprehensive planning and re-planning
				- High-value, substantial outputs
				- Self-correction and iteration capabilities
				- Significant computational resource usage

  - ### Self-Improvement of GPT Models
		- **GPT-4 Can Improve Itself**: Featuring Reflexion, HuggingGPT, Bard Upgrade, and more ([YouTube Video](https://youtu.be/5SgJKZLBrmg)).

  - # Distilled Rust Advice
  - **Refactor main.rs into separate layers:**
		- ```
		  // Refactor main function to use dependency injection and minimize hard dependencies.
		  fn refactor_main_to_minimize_dependencies() {
		   // Move database initialization, middleware configuration, and HTTP server setup to separate modules.
		   // Inject database and middleware dependencies into your app as services.
		  }
		  ```
  - **Define traits for repository pattern:**
		- ```
		  // Create domain-specific traits for repositories.
		  pub trait AuthorRepository {
		   fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError>;
		   // Define other repository methods here, e.g., find, findAll, etc.
		  }
		  ```
  - **Encapsulate dependencies in adapters (avoid leaking 3rd party libraries):**
		- ```
		  // Wrap external database connection pool.
		  struct Sqlite {
		   pool: sqlx::SqlitePool,
		  }

		  impl AuthorRepository for Sqlite {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Manage transactions, handle errors, and abstract them from the domain.
		   }
		  }
		  ```
  - **Testability improvements with mocks:**
		- ```
		  // Create mock implementations of the repository for testing.
		  #[derive(Clone)]
		  struct MockAuthorRepository {
		   result: Arc<Mutex<Result<Author, CreateAuthorError>>>,
		  }

		  impl AuthorRepository for MockAuthorRepository {
		   async fn create_author(&self, _: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Return pre-configured mock results for testing.
		   }
		  }
		  ```
  - **Decouple domain from transport (HTTP) layer:**
		- ```
		  // Convert HTTP request body to domain model.
		  impl CreateAuthorHttpRequestBody {
		   fn into_domain(self) -> Result<CreateAuthorRequest, AuthorNameEmptyError> {
		       let name = AuthorName::new(&self.name)?;
		       Ok(CreateAuthorRequest::new(name))
		   }
		  }
		  ```
  - **Create a service layer for complex domain logic:**
		- ```
		  pub trait AuthorService {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError>;
		  }

		  struct Service<R: AuthorRepository> {
		   repo: R,
		  }

		  impl<R: AuthorRepository> AuthorService for Service<R> {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Handle business logic, metrics, notifications, etc.
		   }
		  }
		  ```
  - **Set up bootstrapping logic in main.rs:**
		- ```
		  // Main function should focus only on bootstrapping services and starting the server.
		  #[tokio::main]
		  async fn main() -> anyhow::Result<()> {
		   let config = Config::from_env()?;
		   let sqlite = Sqlite::new(&config.database_url).await?;
		   let author_service = Service::new(sqlite);
		   let http_server = HttpServer::new(author_service, config.server_port).await?;
		   http_server.run().await
		  }
		  ```
  - **Define async repository methods and handle error scenarios:**
		- ```
		  pub trait AuthorRepository: Send + Sync {
		   async fn find(&self, id: &Uuid) -> Result<Option<Author>, CreateAuthorError>;
		   async fn find_all(&self) -> Result<Vec<Author>, CreateAuthorError>;
		  }
		  ```

  - ## Human flourishing and expression
		- **Celebrating Human Diversity: Now to Later**
			- AI understanding and adapting to human experiences and identities.
		- **AI supported creativity: Soon to Next**
			- AI assisting and leading in art, music, and literature creation.
		- **Equity: Now to Next**
			- Democratizing resources and [[Education and AI]] globally.
		- **Self Guided Learning for Children: Next to Later**
			- Playful, memorable AI education experiences for children, globally.
		- **The age of the productive tinker: Later**
			- AI revolutionizing industries with specialized gadgets and applications.

		- ### Cloud AI versus On-Premise Models
			- DONE Cloud services offer simplicity and scale, whereas self-hosted models (e.g. running Stable Diffusion locally or deploying your own LLM) give you full control over data and costs.

		- ### Characteristics of Deep Agents
			- Deep agents distinguish themselves through:
				- Extended runtime (minutes to hours or days)
				- Comprehensive planning and re-planning
				- High-value, substantial outputs
				- Self-correction and iteration capabilities
				- Significant computational resource usage

  - ### Self-Improvement of GPT Models
		- **GPT-4 Can Improve Itself**: Featuring Reflexion, HuggingGPT, Bard Upgrade, and more ([YouTube Video](https://youtu.be/5SgJKZLBrmg)).

  - # Distilled Rust Advice
  - **Refactor main.rs into separate layers:**
		- ```
		  // Refactor main function to use dependency injection and minimize hard dependencies.
		  fn refactor_main_to_minimize_dependencies() {
		   // Move database initialization, middleware configuration, and HTTP server setup to separate modules.
		   // Inject database and middleware dependencies into your app as services.
		  }
		  ```
  - **Define traits for repository pattern:**
		- ```
		  // Create domain-specific traits for repositories.
		  pub trait AuthorRepository {
		   fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError>;
		   // Define other repository methods here, e.g., find, findAll, etc.
		  }
		  ```
  - **Encapsulate dependencies in adapters (avoid leaking 3rd party libraries):**
		- ```
		  // Wrap external database connection pool.
		  struct Sqlite {
		   pool: sqlx::SqlitePool,
		  }

		  impl AuthorRepository for Sqlite {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Manage transactions, handle errors, and abstract them from the domain.
		   }
		  }
		  ```
  - **Testability improvements with mocks:**
		- ```
		  // Create mock implementations of the repository for testing.
		  #[derive(Clone)]
		  struct MockAuthorRepository {
		   result: Arc<Mutex<Result<Author, CreateAuthorError>>>,
		  }

		  impl AuthorRepository for MockAuthorRepository {
		   async fn create_author(&self, _: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Return pre-configured mock results for testing.
		   }
		  }
		  ```
  - **Decouple domain from transport (HTTP) layer:**
		- ```
		  // Convert HTTP request body to domain model.
		  impl CreateAuthorHttpRequestBody {
		   fn into_domain(self) -> Result<CreateAuthorRequest, AuthorNameEmptyError> {
		       let name = AuthorName::new(&self.name)?;
		       Ok(CreateAuthorRequest::new(name))
		   }
		  }
		  ```
  - **Create a service layer for complex domain logic:**
		- ```
		  pub trait AuthorService {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError>;
		  }

		  struct Service<R: AuthorRepository> {
		   repo: R,
		  }

		  impl<R: AuthorRepository> AuthorService for Service<R> {
		   async fn create_author(&self, req: &CreateAuthorRequest) -> Result<Author, CreateAuthorError> {
		       // Handle business logic, metrics, notifications, etc.
		   }
		  }
		  ```
  - **Set up bootstrapping logic in main.rs:**
		- ```
		  // Main function should focus only on bootstrapping services and starting the server.
		  #[tokio::main]
		  async fn main() -> anyhow::Result<()> {
		   let config = Config::from_env()?;
		   let sqlite = Sqlite::new(&config.database_url).await?;
		   let author_service = Service::new(sqlite);
		   let http_server = HttpServer::new(author_service, config.server_port).await?;
		   http_server.run().await
		  }
		  ```
  - **Define async repository methods and handle error scenarios:**
		- ```
		  pub trait AuthorRepository: Send + Sync {
		   async fn find(&self, id: &Uuid) -> Result<Option<Author>, CreateAuthorError>;
		   async fn find_all(&self) -> Result<Vec<Author>, CreateAuthorError>;
		  }
		  ```

  - ## Human flourishing and expression
		- **Celebrating Human Diversity: Now to Later**
			- AI understanding and adapting to human experiences and identities.
		- **AI supported creativity: Soon to Next**
			- AI assisting and leading in art, music, and literature creation.
		- **Equity: Now to Next**
			- Democratizing resources and [[Education and AI]] globally.
		- **Self Guided Learning for Children: Next to Later**
			- Playful, memorable AI education experiences for children, globally.
		- **The age of the productive tinker: Later**
			- AI revolutionizing industries with specialized gadgets and applications.

		- ### Cloud AI versus On-Premise Models
			- DONE Cloud services offer simplicity and scale, whereas self-hosted models (e.g. running Stable Diffusion locally or deploying your own LLM) give you full control over data and costs.

  - ### Self-Improvement of GPT Models
		- **GPT-4 Can Improve Itself**: Featuring Reflexion, HuggingGPT, Bard Upgrade, and more ([YouTube Video](https://youtu.be/5SgJKZLBrmg)).

  - ## Human flourishing and expression
		- **Self Guided Learning for Children: Next to Later**
			- Playful, memorable AI education experiences for children, globally.
		- **The age of the productive tinker: Later**
			- AI revolutionizing industries with specialized gadgets and applications.

		- ### Cloud AI versus On-Premise Models
			- DONE Cloud services offer simplicity and scale, whereas self-hosted models (e.g. running Stable Diffusion locally or deploying your own LLM) give you full control over data and costs.

		- ### Planning and Execution
				- Extended runtime (minutes to hours or days)
				- Comprehensive planning and re-planning
				- High-value, substantial outputs
				- Self-correction and iteration capabilities
				- Significant computational resource usage

  - ## **Future Trends of AI in Call Centers**

  The future of AI in call centers is likely to be shaped by the following trends:

  * **Increased automation:** AI will continue to automate more tasks, freeing up human agents to focus on more complex and strategic activities3. This includes the increasing use of process automation, which is expected to be the most prominent application of AI in contact centers 24.  
  * **Hyper-personalization:** AI will enable even more personalized customer interactions, tailoring support and offers to individual needs and preferences25.  
  * **Enhanced self-service options:** AI-powered chatbots and virtual assistants will become more sophisticated, providing customers with more comprehensive self-service options25.  
  * **Advanced analytics:** AI will provide deeper insights into customer behavior and call center performance, enabling data-driven decision-making3. This includes the use of voice authentication and speech analytics to enhance security and improve customer understanding 24.  
  * **Generative AI integration:** Generative AI will be used to create more human-like interactions and automate tasks like summarizing conversations and generating reports26.  
  * **Addressing data scarcity:** AI-powered contact center solutions will help overcome the challenge of limited data analysis by enabling the examination of a larger proportion of customer interactions26.  
  * **Robotic Process Automation (RPA):** RPA will continue to play a significant role in automating routine tasks and streamlining workflows in call centers27.  
  * **AI Predictive Auto Dialing:** AI will be used to optimize dialing strategies and improve contact rates in outbound call centers27.

  - ## **August 2024**
  - 1 Aug, S*AM 2: Segment Anything in Images and Videos,* [https://arxiv.org/abs/2408.00714](https://substack.com/redirect/f9108c66-74c8-4629-a1f0-91d3fc48be11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *POA: Pre-training Once for Models of All Sizes,* [https://arxiv.org/abs/2408.01031](https://substack.com/redirect/a7980e91-473d-41d0-a3a4-388c7d228783?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *RAGEval: Scenario Specific RAG Evaluation Dataset Generation Framework,* [https://arxiv.org/abs/2408.01262](https://substack.com/redirect/36908db5-a36d-41f3-88a7-415386a07f9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *A Survey of Mamba,* [https://arxiv.org/abs/2408.01129](https://substack.com/redirect/dfc99042-7b05-4a46-99ca-cb9da6847308?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Aug, *MiniCPM-V: A GPT-4V Level MLLM on Your Phone,* [https://arxiv.org/abs/2408.01800](https://substack.com/redirect/f2d6df02-2c99-47d9-a587-20f57b8f2b79?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *RAG Foundry: A Framework for Enhancing LLMs for Retrieval Augmented Generation,* [https://arxiv.org/abs/2408.02545](https://substack.com/redirect/f0ca6040-7e8c-472c-94eb-795a6d46fcfc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *BioMamba: A Pre-trained Biomedical Language Representation Model Leveraging Mamba,* [https://arxiv.org/abs/2408.02600](https://substack.com/redirect/a94dd61e-184b-4375-88b9-5eb5d6874d3e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *EXAONE 3.0 7.8B Instruction Tuned Language Model,* [https://arxiv.org/abs/2408.03541](https://substack.com/redirect/7bcf15be-bdb1-4292-85fc-cf0d96a220ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *1.5-Pints Technical Report: Pretraining in Days, Not Months -- Your Language Model Thrives on Quality Data,* [https://arxiv.org/abs/2408.03506](https://substack.com/redirect/0a7d20ca-bee1-4a6e-bdf0-add0dc036f33?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Conversational Prompt Engineering,* [https://arxiv.org/abs/2408.04560](https://substack.com/redirect/a6861968-ad21-4151-8433-7b692f6f01c5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Trans-Tokenization and Cross-lingual Vocabulary Transfers: Language Adaptation of LLMs for Low-Resource NLP,* [https://arxiv.org/abs/2408.04303](https://substack.com/redirect/8f6d35b4-563a-4e08-99fe-47ec7f80caff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Aug, *The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery,* [https://arxiv.org/abs/2408.06292](https://substack.com/redirect/5aa3f2f5-78a5-418c-9e3a-124d14f04a00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Aug, *Hermes 3 Technical Report,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Aug, *Customizing Language Models with Instance-wise LoRA for Sequential Recommendation,* [https://arxiv.org/abs/2408.10159](https://substack.com/redirect/ee75cbc3-c061-4151-9b5d-b5f88635c5ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug*, Enhancing Robustness in Large Language Models: Prompting for Mitigating the Impact of Irrelevant Information,* [https://arxiv.org/abs/2408.10615](https://substack.com/redirect/ea396dc0-0a9f-4f30-8acd-d48c770b6b84?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug, *To Code, or Not To Code? Exploring Impact of Code in Pre-training,* [https://arxiv.org/abs/2408.10914](https://substack.com/redirect/a736b6e3-1c73-4c59-9bf6-5da614014ece?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Aug ,* LLM Pruning and Distillation in Practice: The Minitron Approach, *[https://arxiv.org/abs/2408.11796](https://substack.com/redirect/0dd4085f-2153-4593-98f4-423faaff6d27?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Jamba-1.5: Hybrid Transformer-Mamba Models at Scale,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Controllable Text Generation for Large Language Models: A Survey,* [https://arxiv.org/abs/2408.12599](https://substack.com/redirect/6e4408c3-5faf-4a9d-b45c-aa2da38ed656?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Aug, *Multi-Layer Transformers Gradient Can be Approximated in Almost Linear Time,* [https://arxiv.org/abs/2408.13233](https://substack.com/redirect/5e036add-9e91-4eb6-b2c3-0a04dddc108d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *A Practitioner's Guide to Continual Multimodal Pretraining,* [https://arxiv.org/abs/2408.14471](https://substack.com/redirect/8c09403f-f600-492e-91d8-544a0385901f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *Building and better understanding vision-language models: insights and future directions,* [https://arxiv.org/abs/2408.12637](https://substack.com/redirect/94cf7b23-443c-42f4-b7f4-116bc19a0ebb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *CURLoRA: Stable LLM Continual Fine-Tuning and Catastrophic Forgetting Mitigation,* [https://arxiv.org/abs/2408.14572](https://substack.com/redirect/2cd9eff1-1efb-4800-b61e-af64b4dd932a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Aug, *The Mamba in the Llama: Distilling and Accelerating Hybrid Models,* [https://arxiv.org/abs/2408.15237](https://substack.com/redirect/bfd4ba78-fe7a-406f-adc9-41f3de52fe11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Aug, *ReMamba: Equip Mamba with Effective Long-Sequence Modeling,* [https://arxiv.org/abs/2408.15496](https://substack.com/redirect/d2da6482-73df-4cb7-a0aa-915673460ccd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Aug, *Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling,* [https://arxiv.org/abs/2408.16737](https://substack.com/redirect/a5cb8ada-f6d8-4e2b-9e74-dbdf42c6e4aa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Aug, *LongRecipe: Recipe for Efficient Long Context Generalization in Large Languge Models,* [https://arxiv.org/abs/2409.00509](https://substack.com/redirect/b42dfc08-770d-4b31-82ce-ece859db7016?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **Future Trends of AI in Call Centers**

  The future of AI in call centers is likely to be shaped by the following trends:

  * **Increased automation:** AI will continue to automate more tasks, freeing up human agents to focus on more complex and strategic activities3. This includes the increasing use of process automation, which is expected to be the most prominent application of AI in contact centers 24.  
  * **Hyper-personalization:** AI will enable even more personalized customer interactions, tailoring support and offers to individual needs and preferences25.  
  * **Enhanced self-service options:** AI-powered chatbots and virtual assistants will become more sophisticated, providing customers with more comprehensive self-service options25.  
  * **Advanced analytics:** AI will provide deeper insights into customer behavior and call center performance, enabling data-driven decision-making3. This includes the use of voice authentication and speech analytics to enhance security and improve customer understanding 24.  
  * **Generative AI integration:** Generative AI will be used to create more human-like interactions and automate tasks like summarizing conversations and generating reports26.  
  * **Addressing data scarcity:** AI-powered contact center solutions will help overcome the challenge of limited data analysis by enabling the examination of a larger proportion of customer interactions26.  
  * **Robotic Process Automation (RPA):** RPA will continue to play a significant role in automating routine tasks and streamlining workflows in call centers27.  
  * **AI Predictive Auto Dialing:** AI will be used to optimize dialing strategies and improve contact rates in outbound call centers27.

  - ## **August 2024**
  - 1 Aug, S*AM 2: Segment Anything in Images and Videos,* [https://arxiv.org/abs/2408.00714](https://substack.com/redirect/f9108c66-74c8-4629-a1f0-91d3fc48be11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *POA: Pre-training Once for Models of All Sizes,* [https://arxiv.org/abs/2408.01031](https://substack.com/redirect/a7980e91-473d-41d0-a3a4-388c7d228783?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *RAGEval: Scenario Specific RAG Evaluation Dataset Generation Framework,* [https://arxiv.org/abs/2408.01262](https://substack.com/redirect/36908db5-a36d-41f3-88a7-415386a07f9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *A Survey of Mamba,* [https://arxiv.org/abs/2408.01129](https://substack.com/redirect/dfc99042-7b05-4a46-99ca-cb9da6847308?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Aug, *MiniCPM-V: A GPT-4V Level MLLM on Your Phone,* [https://arxiv.org/abs/2408.01800](https://substack.com/redirect/f2d6df02-2c99-47d9-a587-20f57b8f2b79?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *RAG Foundry: A Framework for Enhancing LLMs for Retrieval Augmented Generation,* [https://arxiv.org/abs/2408.02545](https://substack.com/redirect/f0ca6040-7e8c-472c-94eb-795a6d46fcfc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *BioMamba: A Pre-trained Biomedical Language Representation Model Leveraging Mamba,* [https://arxiv.org/abs/2408.02600](https://substack.com/redirect/a94dd61e-184b-4375-88b9-5eb5d6874d3e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *EXAONE 3.0 7.8B Instruction Tuned Language Model,* [https://arxiv.org/abs/2408.03541](https://substack.com/redirect/7bcf15be-bdb1-4292-85fc-cf0d96a220ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *1.5-Pints Technical Report: Pretraining in Days, Not Months -- Your Language Model Thrives on Quality Data,* [https://arxiv.org/abs/2408.03506](https://substack.com/redirect/0a7d20ca-bee1-4a6e-bdf0-add0dc036f33?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Conversational Prompt Engineering,* [https://arxiv.org/abs/2408.04560](https://substack.com/redirect/a6861968-ad21-4151-8433-7b692f6f01c5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Trans-Tokenization and Cross-lingual Vocabulary Transfers: Language Adaptation of LLMs for Low-Resource NLP,* [https://arxiv.org/abs/2408.04303](https://substack.com/redirect/8f6d35b4-563a-4e08-99fe-47ec7f80caff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Aug, *The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery,* [https://arxiv.org/abs/2408.06292](https://substack.com/redirect/5aa3f2f5-78a5-418c-9e3a-124d14f04a00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Aug, *Hermes 3 Technical Report,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Aug, *Customizing Language Models with Instance-wise LoRA for Sequential Recommendation,* [https://arxiv.org/abs/2408.10159](https://substack.com/redirect/ee75cbc3-c061-4151-9b5d-b5f88635c5ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug*, Enhancing Robustness in Large Language Models: Prompting for Mitigating the Impact of Irrelevant Information,* [https://arxiv.org/abs/2408.10615](https://substack.com/redirect/ea396dc0-0a9f-4f30-8acd-d48c770b6b84?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug, *To Code, or Not To Code? Exploring Impact of Code in Pre-training,* [https://arxiv.org/abs/2408.10914](https://substack.com/redirect/a736b6e3-1c73-4c59-9bf6-5da614014ece?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Aug ,* LLM Pruning and Distillation in Practice: The Minitron Approach, *[https://arxiv.org/abs/2408.11796](https://substack.com/redirect/0dd4085f-2153-4593-98f4-423faaff6d27?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Jamba-1.5: Hybrid Transformer-Mamba Models at Scale,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Controllable Text Generation for Large Language Models: A Survey,* [https://arxiv.org/abs/2408.12599](https://substack.com/redirect/6e4408c3-5faf-4a9d-b45c-aa2da38ed656?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Aug, *Multi-Layer Transformers Gradient Can be Approximated in Almost Linear Time,* [https://arxiv.org/abs/2408.13233](https://substack.com/redirect/5e036add-9e91-4eb6-b2c3-0a04dddc108d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *A Practitioner's Guide to Continual Multimodal Pretraining,* [https://arxiv.org/abs/2408.14471](https://substack.com/redirect/8c09403f-f600-492e-91d8-544a0385901f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *Building and better understanding vision-language models: insights and future directions,* [https://arxiv.org/abs/2408.12637](https://substack.com/redirect/94cf7b23-443c-42f4-b7f4-116bc19a0ebb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *CURLoRA: Stable LLM Continual Fine-Tuning and Catastrophic Forgetting Mitigation,* [https://arxiv.org/abs/2408.14572](https://substack.com/redirect/2cd9eff1-1efb-4800-b61e-af64b4dd932a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Aug, *The Mamba in the Llama: Distilling and Accelerating Hybrid Models,* [https://arxiv.org/abs/2408.15237](https://substack.com/redirect/bfd4ba78-fe7a-406f-adc9-41f3de52fe11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Aug, *ReMamba: Equip Mamba with Effective Long-Sequence Modeling,* [https://arxiv.org/abs/2408.15496](https://substack.com/redirect/d2da6482-73df-4cb7-a0aa-915673460ccd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Aug, *Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling,* [https://arxiv.org/abs/2408.16737](https://substack.com/redirect/a5cb8ada-f6d8-4e2b-9e74-dbdf42c6e4aa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Aug, *LongRecipe: Recipe for Efficient Long Context Generalization in Large Languge Models,* [https://arxiv.org/abs/2409.00509](https://substack.com/redirect/b42dfc08-770d-4b31-82ce-ece859db7016?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **Jul 2024**
  - 1 Jul, *LLM See, LLM Do: Guiding Data Generation to Target Non-Differentiable Objectives*, [https://arxiv.org/abs/2407.01490](https://substack.com/redirect/2fd6a88b-7382-4731-a298-421c755e3870?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Searching for Best Practices in Retrieval-Augmented Generation*, [https://arxiv.org/abs/2407.01219](https://substack.com/redirect/080de8ff-79c7-48f6-89ce-2bc502b10a91?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Let the Expert Stick to His Last: Expert-Specialized Fine-Tuning for Sparse Architectural Large Language Models*, [https://arxiv.org/abs/2407.01906](https://substack.com/redirect/dcb9cacb-9cb9-47e2-a3c5-2f0b5445bc9d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion*, [https://arxiv.org/abs/2407.01392](https://substack.com/redirect/3cfab629-a36a-4ce1-b1ff-c6cb8b514efc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Eliminating Position Bias of Language Models: A Mechanistic Approach*, [https://arxiv.org/abs/2407.01100](https://substack.com/redirect/836df518-f78b-4f25-9f84-0ea349f49a9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *JMInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention*, [https://arxiv.org/abs/2407.02490](https://substack.com/redirect/7e7f09c9-8930-4a52-8b88-e07da23475d4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *TokenPacker: Efficient Visual Projector for Multimodal LLM*, [https://arxiv.org/abs/2407.02392](https://substack.com/redirect/08a522a0-43cd-4f1a-828e-c6ccb3241810?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *Reasoning in Large Language Models: A Geometric Perspective*, [https://arxiv.org/abs/2407.02678](https://substack.com/redirect/ef28f920-895f-4a85-af62-7e8ee6b0b5d6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *RankRAG: Unifying Context Ranking with Retrieval-Augmented Generation in LLMs*, [https://arxiv.org/abs/2407.02485](https://substack.com/redirect/68de2d14-60b3-438b-b250-338e4c6e4ffc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jul, *AgentInstruct: Toward Generative Teaching with Agentic Flows*, [https://arxiv.org/abs/2407.03502](https://substack.com/redirect/147a9e57-bb91-4b75-81fa-f77c71156192?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jul, *HEMM: Holistic Evaluation of Multimodal Foundation Models*, [https://arxiv.org/abs/2407.03418](https://substack.com/redirect/0d2ec668-fb31-47bc-8a5e-c85f9ab60942?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jul, *Mixture of A Million Experts*, [https://arxiv.org/abs/2407.04153](https://substack.com/redirect/484eeb9f-e814-4eaf-9580-00e25f1d107b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jul, *Learning to (Learn at Test Time): RNNs with Expressive Hidden States*, [https://arxiv.org/abs/2407.04620](https://substack.com/redirect/dfe98848-f037-4712-a04b-bf92177a984b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jul, *Vision Language Models Are Blind*, [https://arxiv.org/abs/2407.06581](https://substack.com/redirect/71adece7-a665-4762-a0d2-a50f978d8b00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jul, *Self-Recognition in Language Models*, [https://arxiv.org/abs/2407.06946](https://substack.com/redirect/5a96e7af-b32c-4f83-ba7d-67d598684b6e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jul, *Inference Performance Optimization for Large Language Models on CPUs*, [https://arxiv.org/abs/2407.07304](https://substack.com/redirect/71e30c17-fc00-4d9a-b647-a26aed446ae4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jul, *Gradient Boosting Reinforcement Learning*, [https://arxiv.org/abs/2407.08250](https://substack.com/redirect/6df1b840-869b-4b04-a938-be80024f5c13?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jul, *FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision*, [https://arxiv.org/abs/2407.08608](https://substack.com/redirect/e1822754-60e9-4ba4-9f70-9243d0d1cb99?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *SpreadsheetLLM: Encoding Spreadsheets for Large Language Models*, [https://arxiv.org/abs/2407.09025](https://substack.com/redirect/d1835a20-e58e-4a7d-b2ec-d9b06a308ffa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *New Desiderata for Direct Preference Optimization*, [https://arxiv.org/abs/2407.09072](https://substack.com/redirect/0b92a067-0d0c-47a1-a535-5a3616a2ecc4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *Context Embeddings for Efficient Answer Generation in RAG*, [https://arxiv.org/abs/2407.09252](https://substack.com/redirect/46067b2e-5d0d-4b8f-a605-405c4c4334e2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *Qwen2 Technical Report*, [https://arxiv.org/abs/2407.10671](https://substack.com/redirect/eacd3eda-9be7-4b1d-8d45-400c9d4fb36f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *The Good, The Bad, and The Greedy: Evaluation of LLMs Should Not Ignore Non-Determinism*, [https://arxiv.org/abs/2407.10457](https://substack.com/redirect/0ca630c7-5615-4670-b9be-bc363f5004b9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *From GaLore to WeLore: How Low-Rank Weights Non-uniformly Emerge from Low-Rank Gradients*, [https://arxiv.org/abs/2407.11239](https://substack.com/redirect/2cca313f-dc95-4fbc-ba3f-d640835eb533?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *GoldFinch: High Performance RWKV/Transformer Hybrid with Linear Pre-Fill and Extreme KV-Cache Compression*, [https://arxiv.org/abs/2407.12077](https://substack.com/redirect/3887df3e-2996-4565-82c6-c8cf7fc6269d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *Scaling Diffusion Transformers to 16 Billion Parameters*, [https://arxiv.org/abs/2407.11633](https://substack.com/redirect/3188c3fc-4325-458d-bfe9-cab7e1c32fd0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *NeedleBench: Can LLMs Do Retrieval and Reasoning in 1 Million Context Window?*, [https://arxiv.org/abs/2407.11963](https://substack.com/redirect/67ac222f-8592-42d1-b3da-b73c9842672e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *Patch-Level Training for Large Language Models*, [https://arxiv.org/abs/2407.12665](https://substack.com/redirect/268f8f5c-dca6-442f-ab46-384a0f71b0cd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *LMMs-Eval: Reality Check on the Evaluation of Large Multimodal Models*, [https://arxiv.org/abs/2407.12772](https://substack.com/redirect/8752b807-c023-4812-98cb-d2ace7616cf5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *A Survey of Prompt Engineering Methods in Large Language Models for Different NLP Tasks*, [https://arxiv.org/abs/2407.12994](https://substack.com/redirect/d33d2168-d276-43d8-acf7-8de1ca542646?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *Spectra: A Comprehensive Study of Ternary, Quantized, and FP16 Language Models*, [https://arxiv.org/abs/2407.12327](https://substack.com/redirect/b19629e8-34af-4ff0-aca5-99a20cf98369?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Attention Overflow: Language Model Input Blur during Long-Context Missing Items Recommendation*, [https://arxiv.org/abs/2407.13481](https://substack.com/redirect/e118401d-8cd6-4433-9e41-6ddf11456838?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Weak-to-Strong Reasoning*, [https://arxiv.org/abs/2407.13647](https://substack.com/redirect/de908ec6-7ea1-4131-9e64-b2938c2ab984?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Understanding Reference Policies in Direct Preference Optimization*, [https://arxiv.org/abs/2407.13709](https://substack.com/redirect/0abb42d9-a35c-42f8-a032-b2784e2997f6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Scaling Laws with Vocabulary: Larger Models Deserve Larger Vocabularies*, [https://arxiv.org/abs/2407.13623](https://substack.com/redirect/dbde33b1-b9ea-4cd9-89a5-b195fa2916b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *BOND: Aligning LLMs with Best-of-N Distillation*, [https://arxiv.org/abs/2407.14622](https://substack.com/redirect/81f45ec1-ec9c-4a52-8f62-1e40fa02cc5e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *Compact Language Models via Pruning and Knowledge Distillation*, [https://arxiv.org/abs/2407.14679](https://substack.com/redirect/f21dd1a7-0f5c-4936-9f9e-2c00b5b2c765?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *LazyLLM: Dynamic Token Pruning for Efficient Long Context LLM Inference*, [https://arxiv.org/abs/2407.14057](https://substack.com/redirect/84a1612c-c70e-4d7d-9656-e5d06dacae70?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jul, *Mini-Sequence Transformer: Optimizing Intermediate Memory for Long Sequences Training*, [https://arxiv.org/abs/2407.15892](https://substack.com/redirect/8e7a64b0-0cda-4ee2-87ed-a12d225d57ea?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jul, *DDK: Distilling Domain Knowledge for Efficient Large Language Models*, [https://arxiv.org/abs/2407.16154](https://substack.com/redirect/f5272a99-d15d-4a9c-9be3-8d404a8dfcf6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Generation Constraint Scaling Can Mitigate Hallucination*, [https://arxiv.org/abs/2407.16908](https://substack.com/redirect/97607b59-cb58-4a87-895b-6d8ae55a994f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach*, [https://arxiv.org/abs/2407.16833](https://substack.com/redirect/f03df3c9-2186-49b6-94c9-b303931dd2eb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Course-Correction: Safety Alignment Using Synthetic Preferences*, [https://arxiv.org/abs/2407.16637](https://substack.com/redirect/6a54128e-eee2-44a4-ab63-7cf3f2e57925?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jul, *Data Mixture Inference: What do BPE Tokenizers Reveal about their Training Data?*, [https://arxiv.org/abs/2407.16607](https://substack.com/redirect/edeceea6-d9f4-40b2-a14c-e407521d512a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jul, *Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge*, [https://arxiv.org/abs/2407.19594](https://substack.com/redirect/4b22ca22-ecde-4486-9bae-8b24411f2111?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jul, *Improving Retrieval Augmented Language Model with Self-Reasoning*, [https://arxiv.org/abs/2407.19813](https://substack.com/redirect/d2524387-2d9c-49a2-8d7c-5d02e2b18ab4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jul, *Apple Intelligence Foundation Language Models*, [https://arxiv.org/abs/2407.21075](https://substack.com/redirect/034daf6f-a410-4183-985b-60f649fd9784?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Jul, *ThinK: Thinner Key Cache by Query-Driven Pruning*, [https://arxiv.org/abs/2407.21018](https://substack.com/redirect/5b5af585-7537-4189-9218-dca69f7c3bf1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jul, *The Llama 3 Herd of Models*, [https://arxiv.org/abs/2407.21783](https://substack.com/redirect/b0f741ee-b18b-42b2-b528-bc97462db587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jul, *Gemma 2: Improving Open Language Models at a Practical Size*, [https://arxiv.org/abs/2408.00118](https://substack.com/redirect/59ebdaf0-d2fe-4958-9505-1295639d8528?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **June 2024**
  - 2 Jun, *Show, Don't Tell: Aligning Language Models with Demonstrated Feedback*, [https://arxiv.org/abs/2406.00888](https://substack.com/redirect/e9f5bcc2-a5fd-4771-9618-f91606c3857f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *Skywork-MoE: A Deep Dive into Training Techniques for Mixture-of-Experts Language Models*, [https://arxiv.org/abs/2406.06563](https://substack.com/redirect/6eb782e0-7345-4271-8104-472d1783d2e6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *OLoRA: Orthonormal Low-Rank Adaptation of Large Language Models*, [https://arxiv.org/abs/2406.01775](https://substack.com/redirect/587a7280-4b61-445b-a72c-f1b5d038100b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *The Geometry of Categorical and Hierarchical Concepts in Large Language Models*, [https://arxiv.org/abs/2406.01506](https://substack.com/redirect/a986036f-ca86-4a4a-aeef-53fc6ff3da77?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *Towards Scalable Automated Alignment of LLMs: A Survey*, [https://arxiv.org/abs/2406.01252](https://substack.com/redirect/f2faba08-70cd-4535-b783-f43588e8c323?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jun, *Scalable MatMul-free Language Modeling*, [https://arxiv.org/abs/2406.02528](https://substack.com/redirect/0499aa92-2e24-4e96-b27c-2839185a4d8f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jun, *Block Transformer: Global-to-Local Language Modeling for Fast Inference*, [https://arxiv.org/abs/2406.02657](https://substack.com/redirect/4d3ee96b-7ee4-43ca-b682-f78789a6aaa7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models*, [https://arxiv.org/abs/2406.04271](https://substack.com/redirect/40a8c64c-ecb5-43db-80de-16d3b732ba90?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *The Prompt Report: A Systematic Survey of Prompting Techniques*, [https://arxiv.org/abs/2406.06608](https://substack.com/redirect/5e07252a-2fe2-4565-a82f-115327caaaf2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Transformers Need Glasses! Information Over-Squashing in Language Tasks*, [https://arxiv.org/abs/2406.04267](https://substack.com/redirect/62598196-fbef-43fa-b559-f4cbc332928c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Are We Done with MMLU?*, [https://arxiv.org/abs/2406.04127](https://substack.com/redirect/0042574d-86f1-4ee0-8712-b939ad3db01d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Step-aware Preference Optimization: Aligning Preference with Denoising Performance at Each Step*, [https://arxiv.org/abs/2406.04314](https://substack.com/redirect/b1ec70b6-1852-499e-922d-d0fb53a2ed15?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *Boosting Large-scale Parallel Training Efficiency with C4: A Communication-Driven Approach*, [https://arxiv.org/abs/2406.04594](https://substack.com/redirect/8d0dc753-c379-41c9-b51d-abc3b3e526e5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *CRAG -- Comprehensive RAG Benchmark*, [https://arxiv.org/abs/2406.04744](https://substack.com/redirect/fc03c3a8-4b4d-4dcb-b829-ec049a22ced1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild*, [https://arxiv.org/abs/2406.04770](https://substack.com/redirect/8e89c55a-39b8-46bf-adcf-c40931cbadb3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *Mixture-of-Agents Enhances Large Language Model Capabilities*, [https://arxiv.org/abs/2406.04692](https://substack.com/redirect/682798ac-335a-40dd-ad58-0054e98b32a0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *BERTs are Generative In-Context Learners*, [https://arxiv.org/abs/2406.04823](https://substack.com/redirect/eb7c305d-02dd-4205-b0ff-d1b8cf1d866f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *3D-GRAND: A Million-Scale Dataset for 3D-LLMs with Better Grounding and Less Hallucination*, [https://arxiv.org/abs/2406.05132](https://substack.com/redirect/f5a8d752-69e6-4ff8-9e5e-643c804cd8e7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jun, *Creativity Has Left the Chat: The Price of Debiasing Language Models*, [https://arxiv.org/abs/2406.05587](https://substack.com/redirect/77146882-2b7a-4f43-9fbd-b98a46e4387b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Autoregressive Model Beats Diffusion: Llama for Scalable Image Generation*, [https://arxiv.org/abs/2406.06525](https://substack.com/redirect/43936148-1bb4-48cf-a50e-21085699a285?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Margin-aware Preference Optimization for Aligning Diffusion Models Without Reference*, [https://arxiv.org/abs/2406.06424](https://substack.com/redirect/4256d872-ae41-44c5-84a1-0c3f2b9bdba2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Husky: A Unified, Open-Source Language Agent for Multi-Step Reasoning*, [https://arxiv.org/abs/2406.06469](https://substack.com/redirect/cfd33125-8a3a-404f-a40b-8e4ef2ba9338?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Turbo Sparse: Achieving LLM SOTA Performance with Minimal Activated Parameters*, [https://arxiv.org/abs/2406.05955](https://substack.com/redirect/65737152-6e65-4f71-bed9-ef684ede240c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Self-Tuning: Instructing LLMs to Effectively Acquire New Knowledge through Self-Teaching*, [https://arxiv.org/abs/2406.06326](https://substack.com/redirect/dc5634d1-1a37-43ea-b6bf-21f7b62aa425?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *An Image is Worth 32 Tokens for Reconstruction and Generation*, [https://arxiv.org/abs/2406.07550](https://substack.com/redirect/e3c753f9-cc8d-4251-9ea1-921d8c3fbcd9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *TextGrad: Automatic "Differentiation" via Text*, [https://arxiv.org/abs/2406.07496](https://substack.com/redirect/2304b8a4-d698-4364-8c2a-620353292eb6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Simple and Effective Masked Diffusion Language Models*, [https://arxiv.org/abs/2406.07524](https://substack.com/redirect/c10e95b8-37e3-42ad-b72c-413abb1f581b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Never Miss A Beat: An Efficient Recipe for Context Window Extension of Large Language Models with Consistent "Middle" Enhancement*, [https://arxiv.org/abs/2406.07138](https://substack.com/redirect/eb16a1d4-ef25-4125-b2ce-c572ea08d759?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling*, [https://arxiv.org/abs/2406.07522](https://substack.com/redirect/cde9c6ce-2768-4a4f-903a-213c443cedf3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Magpie: Alignment Data Synthesis from Scratch by Prompting Aligned LLMs with Nothing*, [https://arxiv.org/abs/2406.08464](https://substack.com/redirect/22a31068-f2d0-404f-8eb5-dbe1f0d1081d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *What If We Recaption Billions of Web Images with LLaMA-3?*, [https://arxiv.org/abs/2406.08478](https://substack.com/redirect/dd33481a-7c47-4376-9874-1fa155a1b8c1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Large Language Model Unlearning via Embedding-Corrupted Prompts*, [https://arxiv.org/abs/2406.07933](https://substack.com/redirect/f57585f0-8c30-4c6c-87e9-02ff2b234454?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Large Language Models Must Be Taught to Know What They Don't Know*, [https://arxiv.org/abs/2406.08391](https://substack.com/redirect/2473dd81-4f73-45df-82eb-bfb323d84aa3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *An Empirical Study of Mamba-based Language Models*, [https://arxiv.org/abs/2406.07887](https://substack.com/redirect/22fff2cf-aebf-4356-a180-3d4764a00317?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Discovering Preference Optimization Algorithms with and for Large Language Models*, [https://arxiv.org/abs/2406.08414](https://substack.com/redirect/b0ed64fa-29e1-4111-a03b-ab31b8e67310?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *Transformers Meet Neural Algorithmic Reasoners*, [https://arxiv.org/abs/2406.09308](https://substack.com/redirect/46173fda-7004-43f2-a255-83ad4807fd7a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *MLKV: Multi-Layer Key-Value Heads for Memory Efficient Transformer Decoding*, [https://arxiv.org/abs/2406.09297](https://substack.com/redirect/195d8e93-36d5-4037-bb1c-91242858c938?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *An Image is Worth More Than 16x16 Patches: Exploring Transformers on Individual Pixels*, [https://arxiv.org/abs/2406.09415](https://substack.com/redirect/597c0730-90e8-4d01-81b7-91c261f76dd3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *FouRA: Fourier Low Rank Adaptation*, [https://arxiv.org/abs/2406.08798](https://substack.com/redirect/5fc9066f-6759-41b0-b64a-480a861f9823?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Bootstrapping Language Models with DPO Implicit Rewards*, [https://arxiv.org/abs/2406.09760](https://substack.com/redirect/a7c39b55-53d5-4ac0-ab2e-29f2d4fe3a62?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Be like a Goldfish, Don't Memorize! Mitigating Memorization in Generative LLMs*, [https://arxiv.org/abs/2406.10209](https://substack.com/redirect/8e2bf065-883d-459e-a849-538dd1b8a907?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs*, [https://arxiv.org/abs/2406.10216](https://substack.com/redirect/ff0b2d72-a41e-4ee5-afec-5082257daf69?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jun, *THEANINE: Revisiting Memory Management in Long-term Conversations with Timeline-augmented Response Generation*, [https://arxiv.org/abs/2406.10996](https://substack.com/redirect/2a7babdc-dcbd-418e-ab51-ac241ebf6657?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Task Me Anything*, [https://arxiv.org/abs/2406.11775](https://substack.com/redirect/0c190f0d-4136-4fdb-9f87-e8c9e443c211?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *How Do Large Language Models Acquire Factual Knowledge During Pretraining?*, [https://arxiv.org/abs/2406.11813](https://substack.com/redirect/a8f8ae1d-cc22-4d15-a3fc-f50268a991d6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *mDPO: Conditional Preference Optimization for Multimodal Large Language Models*, [https://arxiv.org/abs/2406.11839](https://substack.com/redirect/05cf60c0-3c7d-4e70-a44c-ad39204b5008?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Nemotron-4 340B Technical Report*, [https://arxiv.org/abs/2406.11704](https://substack.com/redirect/e89cb194-fbf4-40ea-be72-6888d98c7f20?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *DataComp-LM: In Search of the Next Generation of Training Sets for Language Models*, [https://arxiv.org/abs/2406.11794](https://substack.com/redirect/a58c6304-6cec-4ec5-a4ed-30da7aa4e865?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Tokenization Falling Short: The Curse of Tokenization*, [https://arxiv.org/abs/2406.11687](https://substack.com/redirect/fd01315f-bd2c-4299-8b77-a29e60d6abd4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *DeepSeek-Coder-V2: Breaking the Barrier of Closed-Source Models in Code Intelligence*, [https://arxiv.org/abs/2406.11931](https://substack.com/redirect/eb88705f-574a-40b7-b57f-6c754679c061?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Unveiling Encoder-Free Vision-Language Models*, [https://arxiv.org/abs/2406.11832](https://substack.com/redirect/22bdc3b8-c13d-4991-b9bb-fa081fdb82d3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Iterative Length-Regularized Direct Preference Optimization: A Case Study on Improving 7B Language Models to GPT-4 Level*, [https://arxiv.org/abs/2406.11817](https://substack.com/redirect/afe584f5-7792-4d5c-8abc-aa1aa6a8ffa9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *HARE: HumAn pRiors, a key to small language model Efficiency*, [https://arxiv.org/abs/2406.11410](https://substack.com/redirect/2540534a-369f-4c11-909b-e58c148fdfab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Measuring memorization in RLHF for code completion*, [https://arxiv.org/abs/2406.11715](https://substack.com/redirect/61c33d89-6e3f-4f21-8b05-f03be439a6dd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts*, [https://arxiv.org/abs/2406.12034](https://substack.com/redirect/20acf033-f09f-4e59-a5d8-0f52166a59e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jun, *From RAGs to Rich Parameters: Probing How Language Models Utilize External Knowledge Over Parametric Information for Factual Queries*, [https://arxiv.org/abs/2406.12824](https://substack.com/redirect/8aec63af-ddd6-4bf8-a4e8-bfc481202df9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jun, *Judging the Judges: Evaluating Alignment and Vulnerabilities in LLMs-as-Judges*, [https://arxiv.org/abs/2406.12624](https://substack.com/redirect/54c74154-6118-4b6f-b194-0f1052cc159e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jun, *Can Long-Context Language Models Subsume Retrieval, RAG, SQL, and More?*, [https://arxiv.org/abs/2406.13121](https://substack.com/redirect/f8b25a5d-719b-4ac8-b716-23cd6edd5e2d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Jun, *Instruction Pre-Training: Language Models are Supervised Multitask Learners*, [https://arxiv.org/abs/2406.14491](https://substack.com/redirect/39831f46-9107-4a8c-b62d-eeaf56c6cb63?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Jun, *Can LLMs Learn by Teaching? A Preliminary Study*, [https://arxiv.org/abs/2406.14629](https://substack.com/redirect/e73e0790-96ea-49fa-a6af-68b85aadefc2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *A Tale of Trust and Accuracy: Base vs. Instruct LLMs in RAG Systems*, [https://arxiv.org/abs/2406.14972](https://substack.com/redirect/33664c47-aa2e-49af-8725-cf72cd11e13f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *LongRAG: Enhancing Retrieval-Augmented Generation with Long-context LLMs*, [https://arxiv.org/abs/2406.15319](https://substack.com/redirect/bff23d51-7c62-4929-aa35-a980f4fbad82?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *MoA: Mixture of Sparse Attention for Automatic Large Language Model Compression*, [https://arxiv.org/abs/2406.14909](https://substack.com/redirect/35768c1c-7852-4be9-abd9-f86db1a54fff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *Efficient Continual Pre-training by Mitigating the Stability Gap*, [https://arxiv.org/abs/2406.14833](https://substack.com/redirect/539aa684-092f-4114-a1c0-ae72add460a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers*, [https://arxiv.org/abs/2406.16747](https://substack.com/redirect/65c023bd-1d3d-4821-a8bc-24133440cd71?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *WARP: On the Benefits of Weight Averaged Rewarded Policies*, [https://arxiv.org/abs/2406.16768](https://substack.com/redirect/f513a5fd-2f30-469a-8ba0-4a616546a57d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *Adam-mini: Use Fewer Learning Rates To Gain More*, [https://arxiv.org/abs/2406.16793](https://substack.com/redirect/054e02fa-36d1-4433-86e1-7b2c153c16d2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale*, [https://arxiv.org/abs/2406.17557](https://substack.com/redirect/9c9cc982-643e-4614-b6c1-88bf9f542f2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *LongIns: A Challenging Long-context Instruction-based Exam for LLMs*, [https://arxiv.org/abs/2406.17588](https://substack.com/redirect/ae2700c1-4869-4834-8608-7cd5c4580f3f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *Following Length Constraints in Instructions*, [https://arxiv.org/abs/2406.17744](https://substack.com/redirect/fec907c2-3c9b-4341-a88d-55c37640722c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *A Closer Look into Mixture-of-Experts in Large Language Models*, [https://arxiv.org/abs/2406.18219](https://substack.com/redirect/90be2123-599b-41c8-bbdd-bc1955b73a51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *RouteLLM: Learning to Route LLMs with Preference Data*, [https://arxiv.org/abs/2406.18665](https://substack.com/redirect/908747d7-e5f3-4864-951a-5a27f6e4ac48?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs*, [https://arxiv.org/abs/2406.18629](https://substack.com/redirect/7a473686-2b3c-4ea0-aa74-c914eb9652bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *Dataset Size Recovery from LoRA Weights*, [https://arxiv.org/abs/2406.19395](https://substack.com/redirect/dbc97b8c-c395-4eeb-9331-cbe054ed9c8e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data*, [https://arxiv.org/abs/2406.19292](https://substack.com/redirect/67e9900c-0729-4da3-90b1-b6240bd7f21a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *Changing Answer Order Can Decrease MMLU Accuracy*, [https://arxiv.org/abs/2406.19470](https://substack.com/redirect/53f73e9b-bac1-457a-9616-6ac445adb589?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *Direct Preference Knowledge Distillation for Large Language Models*, [https://arxiv.org/abs/2406.19774](https://substack.com/redirect/bcb3f081-90e0-4458-8211-1f0cd1805ff8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *LLM Critics Help Catch LLM Bugs*, [https://arxiv.org/abs/2407.00215](https://substack.com/redirect/f65f67fe-7998-49c4-9262-68c7a1bd6d3a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *Scaling Synthetic Data Creation with 1,000,000,000 Personas*, [https://arxiv.org/abs/2406.20094](https://substack.com/redirect/f54eb3e8-fbba-4d4c-a0a7-009b0a7cd7c6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **Future Trends of AI in Call Centers**

  The future of AI in call centers is likely to be shaped by the following trends:

  * **Increased automation:** AI will continue to automate more tasks, freeing up human agents to focus on more complex and strategic activities3. This includes the increasing use of process automation, which is expected to be the most prominent application of AI in contact centers 24.  
  * **Hyper-personalization:** AI will enable even more personalized customer interactions, tailoring support and offers to individual needs and preferences25.  
  * **Enhanced self-service options:** AI-powered chatbots and virtual assistants will become more sophisticated, providing customers with more comprehensive self-service options25.  
  * **Advanced analytics:** AI will provide deeper insights into customer behavior and call center performance, enabling data-driven decision-making3. This includes the use of voice authentication and speech analytics to enhance security and improve customer understanding 24.  
  * **Generative AI integration:** Generative AI will be used to create more human-like interactions and automate tasks like summarizing conversations and generating reports26.  
  * **Addressing data scarcity:** AI-powered contact center solutions will help overcome the challenge of limited data analysis by enabling the examination of a larger proportion of customer interactions26.  
  * **Robotic Process Automation (RPA):** RPA will continue to play a significant role in automating routine tasks and streamlining workflows in call centers27.  
  * **AI Predictive Auto Dialing:** AI will be used to optimize dialing strategies and improve contact rates in outbound call centers27.

  - ## **August 2024**
  - 1 Aug, S*AM 2: Segment Anything in Images and Videos,* [https://arxiv.org/abs/2408.00714](https://substack.com/redirect/f9108c66-74c8-4629-a1f0-91d3fc48be11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *POA: Pre-training Once for Models of All Sizes,* [https://arxiv.org/abs/2408.01031](https://substack.com/redirect/a7980e91-473d-41d0-a3a4-388c7d228783?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *RAGEval: Scenario Specific RAG Evaluation Dataset Generation Framework,* [https://arxiv.org/abs/2408.01262](https://substack.com/redirect/36908db5-a36d-41f3-88a7-415386a07f9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Aug, *A Survey of Mamba,* [https://arxiv.org/abs/2408.01129](https://substack.com/redirect/dfc99042-7b05-4a46-99ca-cb9da6847308?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Aug, *MiniCPM-V: A GPT-4V Level MLLM on Your Phone,* [https://arxiv.org/abs/2408.01800](https://substack.com/redirect/f2d6df02-2c99-47d9-a587-20f57b8f2b79?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *RAG Foundry: A Framework for Enhancing LLMs for Retrieval Augmented Generation,* [https://arxiv.org/abs/2408.02545](https://substack.com/redirect/f0ca6040-7e8c-472c-94eb-795a6d46fcfc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *BioMamba: A Pre-trained Biomedical Language Representation Model Leveraging Mamba,* [https://arxiv.org/abs/2408.02600](https://substack.com/redirect/a94dd61e-184b-4375-88b9-5eb5d6874d3e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Aug, *Self-Taught Evaluators,* [https://arxiv.org/abs/2408.02666](https://substack.com/redirect/267ef5b5-84df-4e5c-acf4-8ff80cd13d1b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *EXAONE 3.0 7.8B Instruction Tuned Language Model,* [https://arxiv.org/abs/2408.03541](https://substack.com/redirect/7bcf15be-bdb1-4292-85fc-cf0d96a220ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Aug, *1.5-Pints Technical Report: Pretraining in Days, Not Months -- Your Language Model Thrives on Quality Data,* [https://arxiv.org/abs/2408.03506](https://substack.com/redirect/0a7d20ca-bee1-4a6e-bdf0-add0dc036f33?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Conversational Prompt Engineering,* [https://arxiv.org/abs/2408.04560](https://substack.com/redirect/a6861968-ad21-4151-8433-7b692f6f01c5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Aug, *Trans-Tokenization and Cross-lingual Vocabulary Transfers: Language Adaptation of LLMs for Low-Resource NLP,* [https://arxiv.org/abs/2408.04303](https://substack.com/redirect/8f6d35b4-563a-4e08-99fe-47ec7f80caff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Aug, *The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery,* [https://arxiv.org/abs/2408.06292](https://substack.com/redirect/5aa3f2f5-78a5-418c-9e3a-124d14f04a00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Aug, *Hermes 3 Technical Report,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Aug, *Customizing Language Models with Instance-wise LoRA for Sequential Recommendation,* [https://arxiv.org/abs/2408.10159](https://substack.com/redirect/ee75cbc3-c061-4151-9b5d-b5f88635c5ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug*, Enhancing Robustness in Large Language Models: Prompting for Mitigating the Impact of Irrelevant Information,* [https://arxiv.org/abs/2408.10615](https://substack.com/redirect/ea396dc0-0a9f-4f30-8acd-d48c770b6b84?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Aug, *To Code, or Not To Code? Exploring Impact of Code in Pre-training,* [https://arxiv.org/abs/2408.10914](https://substack.com/redirect/a736b6e3-1c73-4c59-9bf6-5da614014ece?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Aug ,* LLM Pruning and Distillation in Practice: The Minitron Approach, *[https://arxiv.org/abs/2408.11796](https://substack.com/redirect/0dd4085f-2153-4593-98f4-423faaff6d27?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Jamba-1.5: Hybrid Transformer-Mamba Models at Scale,* [https://arxiv.org/abs/2408.12570](https://substack.com/redirect/7d8a39c8-da09-4f34-8206-93e415297c1f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Aug, *Controllable Text Generation for Large Language Models: A Survey,* [https://arxiv.org/abs/2408.12599](https://substack.com/redirect/6e4408c3-5faf-4a9d-b45c-aa2da38ed656?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Aug, *Multi-Layer Transformers Gradient Can be Approximated in Almost Linear Time,* [https://arxiv.org/abs/2408.13233](https://substack.com/redirect/5e036add-9e91-4eb6-b2c3-0a04dddc108d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *A Practitioner's Guide to Continual Multimodal Pretraining,* [https://arxiv.org/abs/2408.14471](https://substack.com/redirect/8c09403f-f600-492e-91d8-544a0385901f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *Building and better understanding vision-language models: insights and future directions,* [https://arxiv.org/abs/2408.12637](https://substack.com/redirect/94cf7b23-443c-42f4-b7f4-116bc19a0ebb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Aug, *CURLoRA: Stable LLM Continual Fine-Tuning and Catastrophic Forgetting Mitigation,* [https://arxiv.org/abs/2408.14572](https://substack.com/redirect/2cd9eff1-1efb-4800-b61e-af64b4dd932a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Aug, *The Mamba in the Llama: Distilling and Accelerating Hybrid Models,* [https://arxiv.org/abs/2408.15237](https://substack.com/redirect/bfd4ba78-fe7a-406f-adc9-41f3de52fe11?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Aug, *ReMamba: Equip Mamba with Effective Long-Sequence Modeling,* [https://arxiv.org/abs/2408.15496](https://substack.com/redirect/d2da6482-73df-4cb7-a0aa-915673460ccd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Aug, *Smaller, Weaker, Yet Better: Training LLM Reasoners via Compute-Optimal Sampling,* [https://arxiv.org/abs/2408.16737](https://substack.com/redirect/a5cb8ada-f6d8-4e2b-9e74-dbdf42c6e4aa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Aug, *LongRecipe: Recipe for Efficient Long Context Generalization in Large Languge Models,* [https://arxiv.org/abs/2409.00509](https://substack.com/redirect/b42dfc08-770d-4b31-82ce-ece859db7016?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **Jul 2024**
  - 1 Jul, *LLM See, LLM Do: Guiding Data Generation to Target Non-Differentiable Objectives*, [https://arxiv.org/abs/2407.01490](https://substack.com/redirect/2fd6a88b-7382-4731-a298-421c755e3870?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Searching for Best Practices in Retrieval-Augmented Generation*, [https://arxiv.org/abs/2407.01219](https://substack.com/redirect/080de8ff-79c7-48f6-89ce-2bc502b10a91?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Let the Expert Stick to His Last: Expert-Specialized Fine-Tuning for Sparse Architectural Large Language Models*, [https://arxiv.org/abs/2407.01906](https://substack.com/redirect/dcb9cacb-9cb9-47e2-a3c5-2f0b5445bc9d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion*, [https://arxiv.org/abs/2407.01392](https://substack.com/redirect/3cfab629-a36a-4ce1-b1ff-c6cb8b514efc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Jul, *Eliminating Position Bias of Language Models: A Mechanistic Approach*, [https://arxiv.org/abs/2407.01100](https://substack.com/redirect/836df518-f78b-4f25-9f84-0ea349f49a9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *JMInference 1.0: Accelerating Pre-filling for Long-Context LLMs via Dynamic Sparse Attention*, [https://arxiv.org/abs/2407.02490](https://substack.com/redirect/7e7f09c9-8930-4a52-8b88-e07da23475d4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *TokenPacker: Efficient Visual Projector for Multimodal LLM*, [https://arxiv.org/abs/2407.02392](https://substack.com/redirect/08a522a0-43cd-4f1a-828e-c6ccb3241810?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *Reasoning in Large Language Models: A Geometric Perspective*, [https://arxiv.org/abs/2407.02678](https://substack.com/redirect/ef28f920-895f-4a85-af62-7e8ee6b0b5d6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jul, *RankRAG: Unifying Context Ranking with Retrieval-Augmented Generation in LLMs*, [https://arxiv.org/abs/2407.02485](https://substack.com/redirect/68de2d14-60b3-438b-b250-338e4c6e4ffc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jul, *AgentInstruct: Toward Generative Teaching with Agentic Flows*, [https://arxiv.org/abs/2407.03502](https://substack.com/redirect/147a9e57-bb91-4b75-81fa-f77c71156192?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jul, *HEMM: Holistic Evaluation of Multimodal Foundation Models*, [https://arxiv.org/abs/2407.03418](https://substack.com/redirect/0d2ec668-fb31-47bc-8a5e-c85f9ab60942?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jul, *Mixture of A Million Experts*, [https://arxiv.org/abs/2407.04153](https://substack.com/redirect/484eeb9f-e814-4eaf-9580-00e25f1d107b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jul, *Learning to (Learn at Test Time): RNNs with Expressive Hidden States*, [https://arxiv.org/abs/2407.04620](https://substack.com/redirect/dfe98848-f037-4712-a04b-bf92177a984b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jul, *Vision Language Models Are Blind*, [https://arxiv.org/abs/2407.06581](https://substack.com/redirect/71adece7-a665-4762-a0d2-a50f978d8b00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jul, *Self-Recognition in Language Models*, [https://arxiv.org/abs/2407.06946](https://substack.com/redirect/5a96e7af-b32c-4f83-ba7d-67d598684b6e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jul, *Inference Performance Optimization for Large Language Models on CPUs*, [https://arxiv.org/abs/2407.07304](https://substack.com/redirect/71e30c17-fc00-4d9a-b647-a26aed446ae4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jul, *Gradient Boosting Reinforcement Learning*, [https://arxiv.org/abs/2407.08250](https://substack.com/redirect/6df1b840-869b-4b04-a938-be80024f5c13?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jul, *FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision*, [https://arxiv.org/abs/2407.08608](https://substack.com/redirect/e1822754-60e9-4ba4-9f70-9243d0d1cb99?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *SpreadsheetLLM: Encoding Spreadsheets for Large Language Models*, [https://arxiv.org/abs/2407.09025](https://substack.com/redirect/d1835a20-e58e-4a7d-b2ec-d9b06a308ffa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *New Desiderata for Direct Preference Optimization*, [https://arxiv.org/abs/2407.09072](https://substack.com/redirect/0b92a067-0d0c-47a1-a535-5a3616a2ecc4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jul, *Context Embeddings for Efficient Answer Generation in RAG*, [https://arxiv.org/abs/2407.09252](https://substack.com/redirect/46067b2e-5d0d-4b8f-a605-405c4c4334e2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *Qwen2 Technical Report*, [https://arxiv.org/abs/2407.10671](https://substack.com/redirect/eacd3eda-9be7-4b1d-8d45-400c9d4fb36f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *The Good, The Bad, and The Greedy: Evaluation of LLMs Should Not Ignore Non-Determinism*, [https://arxiv.org/abs/2407.10457](https://substack.com/redirect/0ca630c7-5615-4670-b9be-bc363f5004b9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Jul, *From GaLore to WeLore: How Low-Rank Weights Non-uniformly Emerge from Low-Rank Gradients*, [https://arxiv.org/abs/2407.11239](https://substack.com/redirect/2cca313f-dc95-4fbc-ba3f-d640835eb533?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *GoldFinch: High Performance RWKV/Transformer Hybrid with Linear Pre-Fill and Extreme KV-Cache Compression*, [https://arxiv.org/abs/2407.12077](https://substack.com/redirect/3887df3e-2996-4565-82c6-c8cf7fc6269d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *Scaling Diffusion Transformers to 16 Billion Parameters*, [https://arxiv.org/abs/2407.11633](https://substack.com/redirect/3188c3fc-4325-458d-bfe9-cab7e1c32fd0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jul, *NeedleBench: Can LLMs Do Retrieval and Reasoning in 1 Million Context Window?*, [https://arxiv.org/abs/2407.11963](https://substack.com/redirect/67ac222f-8592-42d1-b3da-b73c9842672e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *Patch-Level Training for Large Language Models*, [https://arxiv.org/abs/2407.12665](https://substack.com/redirect/268f8f5c-dca6-442f-ab46-384a0f71b0cd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *LMMs-Eval: Reality Check on the Evaluation of Large Multimodal Models*, [https://arxiv.org/abs/2407.12772](https://substack.com/redirect/8752b807-c023-4812-98cb-d2ace7616cf5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *A Survey of Prompt Engineering Methods in Large Language Models for Different NLP Tasks*, [https://arxiv.org/abs/2407.12994](https://substack.com/redirect/d33d2168-d276-43d8-acf7-8de1ca542646?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jul, *Spectra: A Comprehensive Study of Ternary, Quantized, and FP16 Language Models*, [https://arxiv.org/abs/2407.12327](https://substack.com/redirect/b19629e8-34af-4ff0-aca5-99a20cf98369?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Attention Overflow: Language Model Input Blur during Long-Context Missing Items Recommendation*, [https://arxiv.org/abs/2407.13481](https://substack.com/redirect/e118401d-8cd6-4433-9e41-6ddf11456838?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Weak-to-Strong Reasoning*, [https://arxiv.org/abs/2407.13647](https://substack.com/redirect/de908ec6-7ea1-4131-9e64-b2938c2ab984?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Understanding Reference Policies in Direct Preference Optimization*, [https://arxiv.org/abs/2407.13709](https://substack.com/redirect/0abb42d9-a35c-42f8-a032-b2784e2997f6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jul, *Scaling Laws with Vocabulary: Larger Models Deserve Larger Vocabularies*, [https://arxiv.org/abs/2407.13623](https://substack.com/redirect/dbde33b1-b9ea-4cd9-89a5-b195fa2916b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *BOND: Aligning LLMs with Best-of-N Distillation*, [https://arxiv.org/abs/2407.14622](https://substack.com/redirect/81f45ec1-ec9c-4a52-8f62-1e40fa02cc5e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *Compact Language Models via Pruning and Knowledge Distillation*, [https://arxiv.org/abs/2407.14679](https://substack.com/redirect/f21dd1a7-0f5c-4936-9f9e-2c00b5b2c765?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jul, *LazyLLM: Dynamic Token Pruning for Efficient Long Context LLM Inference*, [https://arxiv.org/abs/2407.14057](https://substack.com/redirect/84a1612c-c70e-4d7d-9656-e5d06dacae70?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jul, *Mini-Sequence Transformer: Optimizing Intermediate Memory for Long Sequences Training*, [https://arxiv.org/abs/2407.15892](https://substack.com/redirect/8e7a64b0-0cda-4ee2-87ed-a12d225d57ea?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jul, *DDK: Distilling Domain Knowledge for Efficient Large Language Models*, [https://arxiv.org/abs/2407.16154](https://substack.com/redirect/f5272a99-d15d-4a9c-9be3-8d404a8dfcf6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Generation Constraint Scaling Can Mitigate Hallucination*, [https://arxiv.org/abs/2407.16908](https://substack.com/redirect/97607b59-cb58-4a87-895b-6d8ae55a994f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach*, [https://arxiv.org/abs/2407.16833](https://substack.com/redirect/f03df3c9-2186-49b6-94c9-b303931dd2eb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Jul, *Course-Correction: Safety Alignment Using Synthetic Preferences*, [https://arxiv.org/abs/2407.16637](https://substack.com/redirect/6a54128e-eee2-44a4-ab63-7cf3f2e57925?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jul, *Data Mixture Inference: What do BPE Tokenizers Reveal about their Training Data?*, [https://arxiv.org/abs/2407.16607](https://substack.com/redirect/edeceea6-d9f4-40b2-a14c-e407521d512a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jul, *Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge*, [https://arxiv.org/abs/2407.19594](https://substack.com/redirect/4b22ca22-ecde-4486-9bae-8b24411f2111?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jul, *Improving Retrieval Augmented Language Model with Self-Reasoning*, [https://arxiv.org/abs/2407.19813](https://substack.com/redirect/d2524387-2d9c-49a2-8d7c-5d02e2b18ab4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jul, *Apple Intelligence Foundation Language Models*, [https://arxiv.org/abs/2407.21075](https://substack.com/redirect/034daf6f-a410-4183-985b-60f649fd9784?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Jul, *ThinK: Thinner Key Cache by Query-Driven Pruning*, [https://arxiv.org/abs/2407.21018](https://substack.com/redirect/5b5af585-7537-4189-9218-dca69f7c3bf1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jul, *The Llama 3 Herd of Models*, [https://arxiv.org/abs/2407.21783](https://substack.com/redirect/b0f741ee-b18b-42b2-b528-bc97462db587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jul, *Gemma 2: Improving Open Language Models at a Practical Size*, [https://arxiv.org/abs/2408.00118](https://substack.com/redirect/59ebdaf0-d2fe-4958-9505-1295639d8528?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **June 2024**
  - 2 Jun, *Show, Don't Tell: Aligning Language Models with Demonstrated Feedback*, [https://arxiv.org/abs/2406.00888](https://substack.com/redirect/e9f5bcc2-a5fd-4771-9618-f91606c3857f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *Skywork-MoE: A Deep Dive into Training Techniques for Mixture-of-Experts Language Models*, [https://arxiv.org/abs/2406.06563](https://substack.com/redirect/6eb782e0-7345-4271-8104-472d1783d2e6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *OLoRA: Orthonormal Low-Rank Adaptation of Large Language Models*, [https://arxiv.org/abs/2406.01775](https://substack.com/redirect/587a7280-4b61-445b-a72c-f1b5d038100b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *The Geometry of Categorical and Hierarchical Concepts in Large Language Models*, [https://arxiv.org/abs/2406.01506](https://substack.com/redirect/a986036f-ca86-4a4a-aeef-53fc6ff3da77?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jun, *Towards Scalable Automated Alignment of LLMs: A Survey*, [https://arxiv.org/abs/2406.01252](https://substack.com/redirect/f2faba08-70cd-4535-b783-f43588e8c323?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jun, *Scalable MatMul-free Language Modeling*, [https://arxiv.org/abs/2406.02528](https://substack.com/redirect/0499aa92-2e24-4e96-b27c-2839185a4d8f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jun, *Block Transformer: Global-to-Local Language Modeling for Fast Inference*, [https://arxiv.org/abs/2406.02657](https://substack.com/redirect/4d3ee96b-7ee4-43ca-b682-f78789a6aaa7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models*, [https://arxiv.org/abs/2406.04271](https://substack.com/redirect/40a8c64c-ecb5-43db-80de-16d3b732ba90?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *The Prompt Report: A Systematic Survey of Prompting Techniques*, [https://arxiv.org/abs/2406.06608](https://substack.com/redirect/5e07252a-2fe2-4565-a82f-115327caaaf2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Transformers Need Glasses! Information Over-Squashing in Language Tasks*, [https://arxiv.org/abs/2406.04267](https://substack.com/redirect/62598196-fbef-43fa-b559-f4cbc332928c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Are We Done with MMLU?*, [https://arxiv.org/abs/2406.04127](https://substack.com/redirect/0042574d-86f1-4ee0-8712-b939ad3db01d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Jun, *Step-aware Preference Optimization: Aligning Preference with Denoising Performance at Each Step*, [https://arxiv.org/abs/2406.04314](https://substack.com/redirect/b1ec70b6-1852-499e-922d-d0fb53a2ed15?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *Boosting Large-scale Parallel Training Efficiency with C4: A Communication-Driven Approach*, [https://arxiv.org/abs/2406.04594](https://substack.com/redirect/8d0dc753-c379-41c9-b51d-abc3b3e526e5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *CRAG -- Comprehensive RAG Benchmark*, [https://arxiv.org/abs/2406.04744](https://substack.com/redirect/fc03c3a8-4b4d-4dcb-b829-ec049a22ced1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild*, [https://arxiv.org/abs/2406.04770](https://substack.com/redirect/8e89c55a-39b8-46bf-adcf-c40931cbadb3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *Mixture-of-Agents Enhances Large Language Model Capabilities*, [https://arxiv.org/abs/2406.04692](https://substack.com/redirect/682798ac-335a-40dd-ad58-0054e98b32a0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *BERTs are Generative In-Context Learners*, [https://arxiv.org/abs/2406.04823](https://substack.com/redirect/eb7c305d-02dd-4205-b0ff-d1b8cf1d866f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jun, *3D-GRAND: A Million-Scale Dataset for 3D-LLMs with Better Grounding and Less Hallucination*, [https://arxiv.org/abs/2406.05132](https://substack.com/redirect/f5a8d752-69e6-4ff8-9e5e-643c804cd8e7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jun, *Creativity Has Left the Chat: The Price of Debiasing Language Models*, [https://arxiv.org/abs/2406.05587](https://substack.com/redirect/77146882-2b7a-4f43-9fbd-b98a46e4387b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Autoregressive Model Beats Diffusion: Llama for Scalable Image Generation*, [https://arxiv.org/abs/2406.06525](https://substack.com/redirect/43936148-1bb4-48cf-a50e-21085699a285?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Margin-aware Preference Optimization for Aligning Diffusion Models Without Reference*, [https://arxiv.org/abs/2406.06424](https://substack.com/redirect/4256d872-ae41-44c5-84a1-0c3f2b9bdba2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Husky: A Unified, Open-Source Language Agent for Multi-Step Reasoning*, [https://arxiv.org/abs/2406.06469](https://substack.com/redirect/cfd33125-8a3a-404f-a40b-8e4ef2ba9338?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Turbo Sparse: Achieving LLM SOTA Performance with Minimal Activated Parameters*, [https://arxiv.org/abs/2406.05955](https://substack.com/redirect/65737152-6e65-4f71-bed9-ef684ede240c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jun, *Self-Tuning: Instructing LLMs to Effectively Acquire New Knowledge through Self-Teaching*, [https://arxiv.org/abs/2406.06326](https://substack.com/redirect/dc5634d1-1a37-43ea-b6bf-21f7b62aa425?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *An Image is Worth 32 Tokens for Reconstruction and Generation*, [https://arxiv.org/abs/2406.07550](https://substack.com/redirect/e3c753f9-cc8d-4251-9ea1-921d8c3fbcd9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *TextGrad: Automatic "Differentiation" via Text*, [https://arxiv.org/abs/2406.07496](https://substack.com/redirect/2304b8a4-d698-4364-8c2a-620353292eb6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Simple and Effective Masked Diffusion Language Models*, [https://arxiv.org/abs/2406.07524](https://substack.com/redirect/c10e95b8-37e3-42ad-b72c-413abb1f581b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Never Miss A Beat: An Efficient Recipe for Context Window Extension of Large Language Models with Consistent "Middle" Enhancement*, [https://arxiv.org/abs/2406.07138](https://substack.com/redirect/eb16a1d4-ef25-4125-b2ce-c572ea08d759?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jun, *Samba: Simple Hybrid State Space Models for Efficient Unlimited Context Language Modeling*, [https://arxiv.org/abs/2406.07522](https://substack.com/redirect/cde9c6ce-2768-4a4f-903a-213c443cedf3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Magpie: Alignment Data Synthesis from Scratch by Prompting Aligned LLMs with Nothing*, [https://arxiv.org/abs/2406.08464](https://substack.com/redirect/22a31068-f2d0-404f-8eb5-dbe1f0d1081d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *What If We Recaption Billions of Web Images with LLaMA-3?*, [https://arxiv.org/abs/2406.08478](https://substack.com/redirect/dd33481a-7c47-4376-9874-1fa155a1b8c1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Large Language Model Unlearning via Embedding-Corrupted Prompts*, [https://arxiv.org/abs/2406.07933](https://substack.com/redirect/f57585f0-8c30-4c6c-87e9-02ff2b234454?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Large Language Models Must Be Taught to Know What They Don't Know*, [https://arxiv.org/abs/2406.08391](https://substack.com/redirect/2473dd81-4f73-45df-82eb-bfb323d84aa3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *An Empirical Study of Mamba-based Language Models*, [https://arxiv.org/abs/2406.07887](https://substack.com/redirect/22fff2cf-aebf-4356-a180-3d4764a00317?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jun, *Discovering Preference Optimization Algorithms with and for Large Language Models*, [https://arxiv.org/abs/2406.08414](https://substack.com/redirect/b0ed64fa-29e1-4111-a03b-ab31b8e67310?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *Transformers Meet Neural Algorithmic Reasoners*, [https://arxiv.org/abs/2406.09308](https://substack.com/redirect/46173fda-7004-43f2-a255-83ad4807fd7a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *MLKV: Multi-Layer Key-Value Heads for Memory Efficient Transformer Decoding*, [https://arxiv.org/abs/2406.09297](https://substack.com/redirect/195d8e93-36d5-4037-bb1c-91242858c938?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *An Image is Worth More Than 16x16 Patches: Exploring Transformers on Individual Pixels*, [https://arxiv.org/abs/2406.09415](https://substack.com/redirect/597c0730-90e8-4d01-81b7-91c261f76dd3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Jun, *FouRA: Fourier Low Rank Adaptation*, [https://arxiv.org/abs/2406.08798](https://substack.com/redirect/5fc9066f-6759-41b0-b64a-480a861f9823?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Bootstrapping Language Models with DPO Implicit Rewards*, [https://arxiv.org/abs/2406.09760](https://substack.com/redirect/a7c39b55-53d5-4ac0-ab2e-29f2d4fe3a62?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Be like a Goldfish, Don't Memorize! Mitigating Memorization in Generative LLMs*, [https://arxiv.org/abs/2406.10209](https://substack.com/redirect/8e2bf065-883d-459e-a849-538dd1b8a907?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Jun, *Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs*, [https://arxiv.org/abs/2406.10216](https://substack.com/redirect/ff0b2d72-a41e-4ee5-afec-5082257daf69?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jun, *THEANINE: Revisiting Memory Management in Long-term Conversations with Timeline-augmented Response Generation*, [https://arxiv.org/abs/2406.10996](https://substack.com/redirect/2a7babdc-dcbd-418e-ab51-ac241ebf6657?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Task Me Anything*, [https://arxiv.org/abs/2406.11775](https://substack.com/redirect/0c190f0d-4136-4fdb-9f87-e8c9e443c211?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *How Do Large Language Models Acquire Factual Knowledge During Pretraining?*, [https://arxiv.org/abs/2406.11813](https://substack.com/redirect/a8f8ae1d-cc22-4d15-a3fc-f50268a991d6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *mDPO: Conditional Preference Optimization for Multimodal Large Language Models*, [https://arxiv.org/abs/2406.11839](https://substack.com/redirect/05cf60c0-3c7d-4e70-a44c-ad39204b5008?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Nemotron-4 340B Technical Report*, [https://arxiv.org/abs/2406.11704](https://substack.com/redirect/e89cb194-fbf4-40ea-be72-6888d98c7f20?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *DataComp-LM: In Search of the Next Generation of Training Sets for Language Models*, [https://arxiv.org/abs/2406.11794](https://substack.com/redirect/a58c6304-6cec-4ec5-a4ed-30da7aa4e865?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Tokenization Falling Short: The Curse of Tokenization*, [https://arxiv.org/abs/2406.11687](https://substack.com/redirect/fd01315f-bd2c-4299-8b77-a29e60d6abd4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *DeepSeek-Coder-V2: Breaking the Barrier of Closed-Source Models in Code Intelligence*, [https://arxiv.org/abs/2406.11931](https://substack.com/redirect/eb88705f-574a-40b7-b57f-6c754679c061?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Unveiling Encoder-Free Vision-Language Models*, [https://arxiv.org/abs/2406.11832](https://substack.com/redirect/22bdc3b8-c13d-4991-b9bb-fa081fdb82d3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Iterative Length-Regularized Direct Preference Optimization: A Case Study on Improving 7B Language Models to GPT-4 Level*, [https://arxiv.org/abs/2406.11817](https://substack.com/redirect/afe584f5-7792-4d5c-8abc-aa1aa6a8ffa9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *HARE: HumAn pRiors, a key to small language model Efficiency*, [https://arxiv.org/abs/2406.11410](https://substack.com/redirect/2540534a-369f-4c11-909b-e58c148fdfab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Measuring memorization in RLHF for code completion*, [https://arxiv.org/abs/2406.11715](https://substack.com/redirect/61c33d89-6e3f-4f21-8b05-f03be439a6dd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jun, *Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts*, [https://arxiv.org/abs/2406.12034](https://substack.com/redirect/20acf033-f09f-4e59-a5d8-0f52166a59e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jun, *From RAGs to Rich Parameters: Probing How Language Models Utilize External Knowledge Over Parametric Information for Factual Queries*, [https://arxiv.org/abs/2406.12824](https://substack.com/redirect/8aec63af-ddd6-4bf8-a4e8-bfc481202df9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jun, *Judging the Judges: Evaluating Alignment and Vulnerabilities in LLMs-as-Judges*, [https://arxiv.org/abs/2406.12624](https://substack.com/redirect/54c74154-6118-4b6f-b194-0f1052cc159e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jun, *Can Long-Context Language Models Subsume Retrieval, RAG, SQL, and More?*, [https://arxiv.org/abs/2406.13121](https://substack.com/redirect/f8b25a5d-719b-4ac8-b716-23cd6edd5e2d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Jun, *Instruction Pre-Training: Language Models are Supervised Multitask Learners*, [https://arxiv.org/abs/2406.14491](https://substack.com/redirect/39831f46-9107-4a8c-b62d-eeaf56c6cb63?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Jun, *Can LLMs Learn by Teaching? A Preliminary Study*, [https://arxiv.org/abs/2406.14629](https://substack.com/redirect/e73e0790-96ea-49fa-a6af-68b85aadefc2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *A Tale of Trust and Accuracy: Base vs. Instruct LLMs in RAG Systems*, [https://arxiv.org/abs/2406.14972](https://substack.com/redirect/33664c47-aa2e-49af-8725-cf72cd11e13f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *LongRAG: Enhancing Retrieval-Augmented Generation with Long-context LLMs*, [https://arxiv.org/abs/2406.15319](https://substack.com/redirect/bff23d51-7c62-4929-aa35-a980f4fbad82?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *MoA: Mixture of Sparse Attention for Automatic Large Language Model Compression*, [https://arxiv.org/abs/2406.14909](https://substack.com/redirect/35768c1c-7852-4be9-abd9-f86db1a54fff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Jun, *Efficient Continual Pre-training by Mitigating the Stability Gap*, [https://arxiv.org/abs/2406.14833](https://substack.com/redirect/539aa684-092f-4114-a1c0-ae72add460a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *Sparser is Faster and Less is More: Efficient Sparse Attention for Long-Range Transformers*, [https://arxiv.org/abs/2406.16747](https://substack.com/redirect/65c023bd-1d3d-4821-a8bc-24133440cd71?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *WARP: On the Benefits of Weight Averaged Rewarded Policies*, [https://arxiv.org/abs/2406.16768](https://substack.com/redirect/f513a5fd-2f30-469a-8ba0-4a616546a57d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jun, *Adam-mini: Use Fewer Learning Rates To Gain More*, [https://arxiv.org/abs/2406.16793](https://substack.com/redirect/054e02fa-36d1-4433-86e1-7b2c153c16d2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale*, [https://arxiv.org/abs/2406.17557](https://substack.com/redirect/9c9cc982-643e-4614-b6c1-88bf9f542f2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *LongIns: A Challenging Long-context Instruction-based Exam for LLMs*, [https://arxiv.org/abs/2406.17588](https://substack.com/redirect/ae2700c1-4869-4834-8608-7cd5c4580f3f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jun, *Following Length Constraints in Instructions*, [https://arxiv.org/abs/2406.17744](https://substack.com/redirect/fec907c2-3c9b-4341-a88d-55c37640722c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *A Closer Look into Mixture-of-Experts in Large Language Models*, [https://arxiv.org/abs/2406.18219](https://substack.com/redirect/90be2123-599b-41c8-bbdd-bc1955b73a51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *RouteLLM: Learning to Route LLMs with Preference Data*, [https://arxiv.org/abs/2406.18665](https://substack.com/redirect/908747d7-e5f3-4864-951a-5a27f6e4ac48?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jun, *Step-DPO: Step-wise Preference Optimization for Long-chain Reasoning of LLMs*, [https://arxiv.org/abs/2406.18629](https://substack.com/redirect/7a473686-2b3c-4ea0-aa74-c914eb9652bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *Dataset Size Recovery from LoRA Weights*, [https://arxiv.org/abs/2406.19395](https://substack.com/redirect/dbc97b8c-c395-4eeb-9331-cbe054ed9c8e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *From Artificial Needles to Real Haystacks: Improving Retrieval Capabilities in LLMs by Finetuning on Synthetic Data*, [https://arxiv.org/abs/2406.19292](https://substack.com/redirect/67e9900c-0729-4da3-90b1-b6240bd7f21a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Jun, *Changing Answer Order Can Decrease MMLU Accuracy*, [https://arxiv.org/abs/2406.19470](https://substack.com/redirect/53f73e9b-bac1-457a-9616-6ac445adb589?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *Direct Preference Knowledge Distillation for Large Language Models*, [https://arxiv.org/abs/2406.19774](https://substack.com/redirect/bcb3f081-90e0-4458-8211-1f0cd1805ff8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *LLM Critics Help Catch LLM Bugs*, [https://arxiv.org/abs/2407.00215](https://substack.com/redirect/f65f67fe-7998-49c4-9262-68c7a1bd6d3a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Jun, *Scaling Synthetic Data Creation with 1,000,000,000 Personas*, [https://arxiv.org/abs/2406.20094](https://substack.com/redirect/f54eb3e8-fbba-4d4c-a0a7-009b0a7cd7c6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **Future Trends of AI in Call Centers**

  The future of AI in call centers is likely to be shaped by the following trends:

  * **Increased automation:** AI will continue to automate more tasks, freeing up human agents to focus on more complex and strategic activities3. This includes the increasing use of process automation, which is expected to be the most prominent application of AI in contact centers 24.  
  * **Hyper-personalization:** AI will enable even more personalized customer interactions, tailoring support and offers to individual needs and preferences25.  
  * **Enhanced self-service options:** AI-powered chatbots and virtual assistants will become more sophisticated, providing customers with more comprehensive self-service options25.  
  * **Advanced analytics:** AI will provide deeper insights into customer behavior and call center performance, enabling data-driven decision-making3. This includes the use of voice authentication and speech analytics to enhance security and improve customer understanding 24.  
  * **Generative AI integration:** Generative AI will be used to create more human-like interactions and automate tasks like summarizing conversations and generating reports26.  
  * **Addressing data scarcity:** AI-powered contact center solutions will help overcome the challenge of limited data analysis by enabling the examination of a larger proportion of customer interactions26.  
  * **Robotic Process Automation (RPA):** RPA will continue to play a significant role in automating routine tasks and streamlining workflows in call centers27.  
  * **AI Predictive Auto Dialing:** AI will be used to optimize dialing strategies and improve contact rates in outbound call centers27.

  #### Key Characteristics
  - Uses model's own predictions
		  - Iterative improvement
		  - Semi-supervised learning
		  - Leverages unlabelled data
		  - Requires confidence thresholding
		  - Can amplify biases if not careful

  #### Academic Context
  Self-training demonstrates that models can bootstrap their own performance by leveraging confident predictions on unlabelled data, reducing reliance on expensive labelling.

  #### Related Concepts
  - **Semi-Supervised Learning**: Broader paradigm
		  - **Pseudo-Labelling**: Related technique
		  - **Co-Training**: Multi-view variant

		  ## UK English Notes

		  - "Labelled/unlabelled" (not "labeled/unlabeled")

		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against semi-supervised learning literature

		  ```

  - public-access:: true
  - definition:: A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.



  ## Academic Context

  - Self-training is a **semi-supervised learning** technique where a model iteratively improves by training on its own high-confidence predictions on unlabelled data.
  - This approach leverages the model’s own predictions as *pseudo-labels*, enabling learning from large volumes of unlabelled data.
  - It builds on foundational concepts in machine learning, combining elements of supervised and unsupervised learning to reduce reliance on costly labelled datasets.
  - The academic foundation of self-training lies in iterative refinement, where the model alternates between predicting labels for unlabelled data and retraining on these predictions to improve accuracy.
  - This method dates back decades but has seen renewed interest with advances in deep learning architectures and increased availability of unlabelled data.
  - It is closely related to, but distinct from, self-supervised learning, which generates supervisory signals from the data itself without explicit pseudo-labels[1][2][6].

  ## Current Landscape (2025)

  - Self-training is widely adopted in industry for tasks where labelled data is scarce but unlabelled data is abundant, such as natural language processing, computer vision, and speech recognition.
  - Notable platforms and organisations employing self-training include Google, Microsoft, and various AI startups focusing on scalable semi-supervised solutions.
  - The technique is often integrated with other learning paradigms, including self-supervised and continual learning, to enhance model robustness and adaptability[4][6].
  - In the UK, particularly in North England, self-training methods are increasingly used in AI research hubs and industry collaborations.
  - Cities like Manchester and Leeds host AI innovation centres applying self-training to healthcare diagnostics, financial modelling, and smart city initiatives.
  - Newcastle and Sheffield contribute through academic research and partnerships with tech companies exploring semi-supervised learning for industrial automation and environmental monitoring.
  - Technical capabilities:
  - Self-training can significantly reduce the need for manual labelling but is sensitive to error propagation if the model’s initial predictions are poor.
  - Recent advances focus on confidence calibration and selective pseudo-labelling to mitigate confirmation bias.
  - Standards and frameworks for semi-supervised learning, including self-training, are evolving, with increasing emphasis on reproducibility, fairness, and transparency in AI systems.

  ## Research & Literature

  - Key academic papers:
  - Amini, M.-R., et al. (2025). *Self-Training: A Survey*. arXiv preprint arXiv:2202.12040v6.  
    DOI: 10.48550/arXiv.2202.12040  
    - This comprehensive survey details algorithms, theoretical foundations, and practical applications of self-training, updated as recently as February 2025[6].
  - Other foundational works explore the interplay between self-training and self-supervised learning, highlighting their complementary roles in modern AI[1][2].
  - Ongoing research directions include:
  - Enhancing robustness to noisy pseudo-labels.
  - Combining self-training with nested and continual learning paradigms to avoid catastrophic forgetting[4].
  - Applying self-training in multi-modal and low-resource settings.

  ## UK Context

  - The UK has a vibrant AI research ecosystem contributing to semi-supervised learning advancements.
  - Universities in Manchester, Leeds, Newcastle, and Sheffield actively publish on self-training techniques, often in collaboration with local industry.
  - Manchester’s AI research groups focus on healthcare applications, leveraging self-training to improve diagnostic models with limited labelled data.
  - Leeds and Newcastle contribute to financial and environmental AI solutions, respectively, using semi-supervised approaches to harness unlabelled datasets.
  - Regional innovation hubs foster start-ups and spin-offs applying self-training in real-world scenarios, supported by UK government AI initiatives and funding programmes.
  - The North England AI community is known for pragmatic, application-driven research, often balancing academic rigour with industrial relevance—because who said machine learning can’t be a bit down-to-earth?

  ## Future Directions

  - Emerging trends:
  - Integration of self-training with self-supervised and continual learning to create more adaptive, lifelong learning systems.
  - Development of more sophisticated confidence estimation and pseudo-label selection mechanisms to reduce error amplification.
  - Expansion into new domains such as autonomous systems, personalised education, and climate modelling.
  - Anticipated challenges:
  - Managing bias and fairness when models generate their own training labels.
  - Ensuring transparency and interpretability in iterative self-training processes.
  - Scaling self-training methods efficiently for very large datasets without prohibitive computational costs.
  - Research priorities include:
  - Theoretical analysis of convergence and error bounds in self-training.
  - Cross-disciplinary approaches combining machine learning with cognitive science insights.
  - Strengthening UK and North England’s leadership in responsible AI through robust semi-supervised learning frameworks.

  ## References

  1. NIST AI Glossary (2025). *Self-supervised learning*. Computer Security Resource Center.  
  2. Jing, L., & Tian, Y. (2022). *Self-supervised learning: A survey*. IEEE Transactions on Pattern Analysis and Machine Intelligence.  
  3. Amini, M.-R., et al. (2025). *Self-Training: A Survey*. arXiv preprint arXiv:2202.12040v6. DOI: 10.48550/arXiv.2202.12040  
  4. Behrouz, A., & Mirrokni, V. (2025). *Introducing Nested Learning: A new ML paradigm for continual learning*. Google Research Blog.  
  5. Lumenalta (2025). *5 types of machine learning*.  
  6. IBM (2025). *What Is Self-Supervised Learning?* IBM Think.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
