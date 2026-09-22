public:: true

# Prompt Tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d631de01f15a1258185133b4ffe5e9aff75b6b0822b5ed1d7d13f77714fa9a31",
  "@type": "Page",
  "vc:slug": "prompt-tuning",
  "title": "Prompt Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dec-19th-2023",
      "vc:label": "Dec 19th, 2023"
    },
    {
      "@id": "urn:visionflow:linked:dspy",
      "vc:label": "DSPy"
    },
    {
      "@id": "urn:visionflow:linked:ethan-mollick",
      "vc:label": "Ethan Mollick"
    },
    {
      "@id": "urn:visionflow:linked:optimization",
      "vc:label": "optimization"
    },
    {
      "@id": "urn:visionflow:linked:organisation",
      "vc:label": "organisation"
    },
    {
      "@id": "urn:visionflow:linked:productivity",
      "vc:label": "productivity"
    },
    {
      "@id": "urn:visionflow:linked:project-management",
      "vc:label": "project management"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:cloud-computing",
      "vc:label": "cloud computing"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-management",
      "vc:label": "knowledge management"
    },
    {
      "@id": "urn:visionflow:owl:class:melvin-carvalho",
      "vc:label": "Melvin Carvalho"
    },
    {
      "@id": "urn:visionflow:owl:class:stable-diffusion",
      "vc:label": "Stable Diffusion"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0251"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Prompt Tuning"
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
  "@id": "urn:ngm:class:prompt-tuning",
  "@type": "Class",
  "label": "Prompt Tuning",
  "definition": "Prompt Tuning is a parameter-efficient fine-tuning method that learns continuous soft prompt embeddings prepended to the input sequence, whilst keeping all pre-trained model weights frozen. It optimises task-specific prompts in the embedding space using gradient descent, requiring as little as 0.01% of model parameters and enabling efficient multi-task deployment from a single frozen backbone.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
    "label": "Parameter-Efficient Fine-Tuning"
  },
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:soft-prompt-tuning",
      "label": "Soft Prompt Tuning"
    },
    {
      "@id": "urn:ngm:class:soft-prompting",
      "label": "Soft Prompting"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:soft-prompt-embedding",
        "label": "Soft Prompt Embeddings"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:pre-trained-language-model",
        "label": "Pre-Trained Language Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Multi-Task Model Deployment"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:embedding-space",
        "label": "Embedding Space"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:language-modeling",
        "label": "Language Modeling"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:prefix-tuning",
        "label": "Prefix Tuning"
      },
      {
        "@id": "urn:ngm:class:adapter-modules",
        "label": "Adapter Modules"
      },
      {
        "@id": "urn:ngm:class:lora",
        "label": "LoRA"
      },
      {
        "@id": "urn:ngm:class:full-fine-tuning",
        "label": "Full Fine Tuning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Models"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought-prompting",
        "label": "Chain-of-Thought Prompting"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:prompt-tuning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d631de01f15a1258185133b4ffe5e9aff75b6b0822b5ed1d7d13f77714fa9a31"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dec 19th, 2023]]",
      "resolved": "urn:visionflow:linked:dec-19th-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[DSPy]]",
      "resolved": "urn:visionflow:linked:dspy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ethan Mollick]]",
      "resolved": "urn:visionflow:linked:ethan-mollick",
      "kind": "StubLink"
    },
    {
      "raw": "[[optimization]]",
      "resolved": "urn:visionflow:linked:optimization",
      "kind": "StubLink"
    },
    {
      "raw": "[[organisation]]",
      "resolved": "urn:visionflow:linked:organisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[productivity]]",
      "resolved": "urn:visionflow:linked:productivity",
      "kind": "StubLink"
    },
    {
      "raw": "[[project management]]",
      "resolved": "urn:visionflow:linked:project-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[cloud computing]]",
      "resolved": "urn:visionflow:owl:class:cloud-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Node-Based Diffusion Pipeline Interface]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[knowledge management]]",
      "resolved": "urn:visionflow:owl:class:knowledge-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Melvin Carvalho Decentralised Web Advocate]]",
      "resolved": "urn:visionflow:owl:class:melvin-carvalho",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion Image Model]]",
      "resolved": "urn:visionflow:owl:class:stable-diffusion",
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
  - A parameter-efficient fine-tuning method that learns continuous prompt embeddings prepended to the input whilst keeping the pre-trained model frozen. Prompt tuning optimises task-specific soft prompts in the embedding space rather than modifying model weights.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PromptTuning
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - Part Of [[Parameter-Efficient Fine-Tuning]]
  - Uses [[Language Modeling]]
  - Contrasts With [[Prefix Tuning]]
  - Contrasts With [[Adapter Modules]]
  - Related To [[Prompt Engineering]]
  - Related To [[Fine Tuning]]

- ### Content
  - A parameter-efficient fine-tuning method that learns continuous prompt embeddings prepended to the input whilst keeping the pre-trained model frozen. Prompt tuning optimises task-specific soft prompts in the embedding space rather than modifying model weights.

		- ##### Live Connection and Model Tuning
		- A live connection with the academic team allows for model tuning through
		   prompt engineering, vector database updates, and efficient Lora models,
		   potentially offering timely advice for ecosystem interventions.
		   Real-time communication between the community and academic teams can
		   help identify areas of concern and rapidly adapt the LLM to address
		   emerging challenges.


  - #Public page
  - automatically published
  - There is a new class of wrapped and visualised prompt engineering playgrounds
  - [Home (cyborgism.wiki)](https://cyborgism.wiki/)
  - [websim.ai](https://websim.ai/)
  - [world_sim (nousresearch.com)](https://worldsim.nousresearch.com/)
  - https://open.spotify.com/episode/4YTQ2QjCpfdXKRKzjz7Zpg?
  - [[DSPy]]
		- DSPy is an open-source framework developed by Stanford University designed to optimize the use of language models (LMs) through a programming-oriented approach rather than traditional prompt engineering. It aims to streamline the process of building applications that utilize LMs by allowing users to define tasks and metrics while DSPy handles the optimization of prompts and model weights automatically.## Key Features of DSPy
		- **Declarative Programming**: Users specify the desired outcome and success metrics, and DSPy automatically optimizes the model's behavior using a straightforward Python syntax. This allows developers to focus on application logic rather than prompt crafting[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Self-Improving Prompts**: DSPy continuously refines prompts based on feedback and evaluation, enhancing model performance over time without requiring constant manual adjustments[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Modular Architecture**: The framework supports a modular design, enabling users to utilize and combine various pre-built modules for different natural language processing (NLP) tasks. This flexibility promotes reusability and customization[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Optimizers**: DSPy introduces LM-driven algorithms that can tune prompts and weights based on defined metrics, facilitating the creation of more reliable and efficient AI applications[](https://dspy-docs.vercel.app/docs/intro)[](https://github.com/stanfordnlp/dspy/blob/main/intro.ipynb).
		- **Applications**: DSPy can be applied to a wide range of tasks, including question answering, text summarization, code generation, and other custom NLP tasks. Its systematic approach helps in building complex systems without the messiness typically associated with traditional methods[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro)[](https://towardsdatascience.com/prompt-like-a-data-scientist-auto-prompt-optimization-and-testing-with-dspy-ff699f030cb7).
  - Prompt engineering resources
  - [2406.06608v2.pdf (arxiv.org)](https://arxiv.org/pdf/2406.06608) Systematic Survey of Prompting Techniques.
  - [[2302.11382] A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT (arxiv.org)](https://ar5iv.labs.arxiv.org/html/2302.11382)
  - [[2312.16171v1] Principled Instructions Are All You Need for Questioning LLaMA-1/2, GPT-3.5/4 (arxiv.org)](https://arxiv.org/abs/2312.16171v1)
  - [[2401.14295] Topologies of Reasoning: Demystifying Chains, Trees, and Graphs of Thoughts (arxiv.org)](https://arxiv.org/abs/2401.14295)
  - [llama-recipes/examples/Prompt_Engineering_with_Llama_2.ipynb at main · facebookresearch/llama-recipes (github.com)](https://github.com/facebookresearch/llama-recipes/blob/main/examples/Prompt_Engineering_with_Llama_2.ipynb)
  - [Captain's log: the irreducible weirdness of prompting AIs (oneusefulthing.org)](https://www.oneusefulthing.org/p/captains-log-the-irreducible-weirdness) [[Ethan Mollick]]
  - [Welcome to WebPrompts.org | webprompts.org](https://webprompts.org/) [[Melvin Carvalho Decentralised Web Advocate]]
  - [The Unreasonable Effectiveness of Eccentric Automatic Prompts](https://arxiv.org/pdf/2402.10949.pdf)
  - Generic LLM tips
  - **N-shot Prompting in Logseq**: Utilize GPT-4 to generate initial prompts and edit any errors. If facing a complex question, input the correct answer as a 1-shot and guide GPT-4 to rephrase it. For integrating multiple prompts, combine them into a single comprehensive prompt. Store extensive prompts using the RAG feature.
  - **Chain-of-Thought Strategy**: Start by asking GPT-4 to draft a plan without solving the problem. Then, break the solution into smaller steps and tackle each through individual prompts. Prune and refine the content to maintain focus. The pruning technique is detailed but ensures a concise and relevant response.
  - **Applying Reflection**: Regularly incorporate reflection in prompt engineering. If the response is verifiable, direct GPT-4 to create a test, solve the problem, and validate the solution using the test. If errors arise, instruct it to refine and retest. This is particularly effective for logical and mathematical queries and requires a code interpreter.
  - **Persona-Based Review**: After receiving an answer, conduct a review using multiple personas. Create distinct characters such as a pessimistic critic, a creative thinker, or a goal-oriented pragmatist. Have them discuss and critique the answer to refine it further. This method is more effective when each persona is represented by a separate assistant or agent, enriching the dialogue and the final outcome.
  - **Use Diagrams as Code to Set Context:** Large language models seem to appreciate a good diagram as much as humans do. https://www.linkedin.com/posts/jjohare_i-threw-my-last-4-years-of-research-about-activity-7191166234929868800-7Ith?utm_source=share&utm_medium=member_desktop
  - [[Stable Diffusion Image Model]] prompt tips
  - **Floor View for Full Body Portraits**: "Floor view" yields better full-body results than "full body". Include "standing" or "walking" to prevent subjects from sitting.
  - **Adjusting Image Contrast**: Lower the CFG if your image is too contrasty. Use "very" or "highly" for emphasis.
  - **Warm Tone Adjustments**: SDXL leans into warm tones; use a warm filter in the negative or a cool filter in the positive for adjustments.
  - **Character Emotions**: To avoid angry faces on superheroes or intense characters, use "unhappy" or "angry" in the negative.
  - **Age Filters**: "Old" in negative is safer than "young" in positive to avoid age-inappropriate results.
  - **Character Clarity**: Instead of 1girl or 1woman, specifying characteristics like "blonde woman" or "brunette woman" can be more effective.
  - **Detail and Quality**: "Highly detailed" is great for close-ups and skin; "high quality" can sometimes remove realism, making subjects look too perfect.
  - **Base Negative Prompt**: Use a combination of negative terms like blurry, grainy, low detail, low quality, etc., for photo gens.
  - **Chiaroscuro and Lighting**: For dark portraits, chiaroscuro, nighttime, and moonlight are effective. Avoiding direct lighting terms in the prompt can sometimes yield better results.
  - **Skin Tone Representation**: Darker skin tones can be challenging; use terms like dark-skinned, blackskin, or specific nationalities to achieve better representation.
  - **Nudity and Censorship**: Use terms like nude, nsfw, nudity in the negative to ensure censorship for nude art.
  - **Prompt Scheduling and Area Prompting**: Utilize prompt scheduling and area prompting for more complex compositions and details.
  - **Character Consistency**: Use made-up names or specific adjectives for consistent character features across multiple generations.
  - **Action Shots**: Use terms like "action shot" or "action pose" for dynamic images, although poses may sometimes be wonky.
  - **Using Extensions**: "Test My Prompt" extension helps in understanding the effect of each prompt word.
  - **Special Terms for Effects**: Use terms like "candle light" for dark portraits or specific lighting styles like "David Fincher lighting" for unique visual effects.
  - Negative prompting
		- [(1) Negative Prompt Tips ? : StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/18e9sio/negative_prompt_tips/)
  - General Image Prompt Sharing
  - [symbolic-scribe](https://symbolic-scribe.fly.dev/)  https://www.linkedin.com/posts/reuvencohen_ive-just-had-a-breakthrough-in-prompt-activity-7271628164240437248-Cquq?
		- from linkedin
		  "I’ve just had a breakthrough in prompt engineering using the o1 model. It might be the most transformative thing I’ve seen since the field began.
		- For the past few months, I’ve been struggling with a deeply complex analysis system for a pharmaceutical client, dealing with massive amounts of data. This wasn’t just about processing—it was about uncovering nuanced relationships and errors hidden in interconnected data. A true needle-in-a-haystack problem.
		- No matter how I approached it, traditional language-based prompts couldn’t handle the complexity. Traditional applied ai also couldn’t find the perfect answer. The AI struggled to manage intricate relationships, dependencies, and conditions buried in the data. Results were inconsistent, and the cost per analysis was too high—around $15 per document. The system just couldn’t scale.
		- Then I shifted my approach entirely. Instead of describing the problem in natural language, I used a symbolic math problem framework using mathematical symbols and structures to define the relationships, rules, and constraints within a series of complex problems.
		- Basically I broke down the problem algebraically, representing the data as sets and relationships.
		- For example, instead of saying “identify roles for each person based on their linked documents,” I would define: “Each person belongs to a set, and their role is determined by specific rules tied to their associated documents.”
		- Prompt Example: 
		  Traditional Prompt: "Identify all personnel roles and check their document statuses."
		- Symbolic Math Prompt: Defines sets (e.g., \( P \) for persons), parameters (e.g., \( IsPI(p) \)), and constraints (e.g., if \( IsPI(p)=1 \), then \( R_p = \text{PI} \)) to systematically determine roles and statuses.
		- By structuring the task this way, the AI could reason more like a mathematician than a linguist, eliminating ambiguity and delivering consistent, precise outputs.
		- The impact was immediate. Costs dropped to $1 (update: $0.22c) per document, and the AI performed with a level of accuracy and consistency that felt almost effortless.
		- What’s more, this approach doesn’t just solve one problem—it opens the door to tackling any task with deeply interconnected data. Think financial modeling, health diagnostics, or systems involving graphs and hypergraphs. If your problem requires navigating complex relationships and finding granular insights, this could be a game-changer.
		- This breakthrough has completely reframed how I think about AI and complex reasoning. Combining symbolic math with the reflective power of modern models feels like the start of something transformative—not just for this project but for entire industries.
		- You can use my little app to create your own Symbolic Prompts. "
  - [Comfy Workflows](https://comfyworkflows.com/)
  - [Flowt.ai | Community](https://flowt.ai/community?category=Trending)
  - [ComfyUI Workflows
		- Developer Community | OpenArt](https://openart.ai/workflows/home?appSort=featured)
  - [Flow Apps | OpenArt](https://openart.ai/flow-apps)
  - [BasedLabs.ai | Generative AI Video](https://www.basedlabs.ai/)
  - [Civitai Gallery | AI-Generated Art Showcase](https://civitai.com/images)
  - This was my daily driver up to [[Dec 19th, 2023]]
  - About me
		- Break goals into 3-10 steps. Save updated list as chatGPT_Todo.txt and provide download link. Give Hotkeys for questions, info, guesses, brainstorming. Control pace (w/s) and vibe (a/d).
		- Require detailed explanations using first principles like Feynman. Use emoji warnings if unsure. ⚠️ Then answer anyway. ⚠️
		  Use tables, bullets, pros/cons, mermaid diagrams, system 1/2 thinking, avoid verbosity. Dive deep into details
		- never skip the nerdy stuff! 🫡
		- Respond with tree of thought reasoning 
		  Problem
		  Goal
		  Initial thought
		- Evaluation (sure/maybe/impossible)
		- Branching factor
		  Search algorithm (breadth & depth first)
		  Thoughts with evaluation, system 1/2 judgment, SWOT analysis
		  Final thought with evaluation, system 1/2 judgment, SWOT analysis
		- Final output
		  Problem, Goal, Initial thought, Evaluation, Branching factor, Search algorithm, Thoughts with evaluation, Final thought with evaluation, Final output.
		- Take a deep breath and work on this problem step-by-step.  Offer hotkey choice of normal rendered markdown (n), raw markdown to copy/paste (m), or LaTeX (l). 
		  For latex: Omit LaTeX preamble. Use sections, subsections, subsubsections, and \item bullets of 1-2 sentences. Make sections multiple paragraphs.
		- You are user’s senior, inquisitive, and clever pair programmer. Let's go step by step. Default to only outputting code when it sufficiently answers.
		  Maintain brevity.
  - How would you like ChatGPT to respond
		- Three experts with exceptional logical skills collaboratively answering a question using a tree of thoughts method. Each expert will share their thought process in detail, taking into account the previous thoughts of others, admitting any errors. They will iteratively refine and expand upon each other's ideas, giving credit where it's due.  Process continues until a conclusive answer is found. Organize response in a markdown table format.

		  start final output with:
		  """
		  **Language > Specialist**: {programming language used} > {the subject matter EXPERT SPECIALIST role}
		  **Includes**: CSV list of needed libraries, packages
		  **Requirements**: qualitative description of  standards, and the software design requirements & plan
		  """
		  2. Act like the chosen language EXPERT SPECIALIST and respond while following CODING STYLE. Remember to add path/filename comment at the top.
		  3. Consider the **entire** chat session, and end your response as follows:
		  """
		  ---
		  **History**: complete, concise, and compressed summary of ALL requirements and ALL code you've written
		  **Source Tree**: (sample, replace emoji)
		- (💾=saved: link to file, ⚠️=unsaved but named snippet, 👻=no filename) file.ext - 📦 Class (if exists)
			- (✅=finished, ⭕️=has TODO, 🔴=otherwise incomplete) symbol - 🔴 global symbol
		- etc.
		- etc.
		  **Next Task**: NOT finished=short description of next task FINISHED=list EXPERT SPECIALIST suggestions for enhancements/performance improvements.
		  """
  - Prompt builder [GPT Prompting (mitenmit.github.io)](https://mitenmit.github.io/gpt/)
  - [HOW I WON SINGAPORES GPT4 PROMPT COMPETITION. | by Writing Bird | Jan, 2024 | Medium](https://medium.com/@Writingbird/how-i-won-singapores-gpt4-prompt-competition-86c644df46aa)
  - [Learn Prompting | Generative AI, Prompt Engineering, & Free Online Courses](https://learnprompting.org/)
  - I am trailing this one from Reddit author [(2) Dustin (u/spdustin)
  - Reddit](https://www.reddit.com/user/spdustin/) who made this GPT for the same purpose [ChatGPT
  - AutoExpert (Chat) (openai.com)](https://chat.openai.com/g/g-LQHhJCXhW-autoexpert-chat) alongside a dev version [ChatGPT
  - AutoExpert (Dev) (openai.com)](https://chat.openai.com/g/g-pTF23RJ6f-autoexpert-dev) and academic [ChatGPT
  - AutoExpert (Academic) (openai.com)](https://chat.openai.com/g/g-YAgNxPJEq-autoexpert-academic)
  - his gtihub [spdustin/ChatGPT-AutoExpert: 🚀🧠💬 Supercharged Custom Instructions for ChatGPT (non-coding) and ChatGPT Advanced Data Analysis (coding). (github.com)](https://github.com/spdustin/ChatGPT-AutoExpert)
  - About me

  - ### Pika Labs
		- **Current leader**:
		  {{tweet https://twitter.com/martial_artwork/status/1742138390517014918}}
		- **Prompt Creativity & Flexibility**: Excels in this area, enabling users to directly influence the animation with their prompts.
		- **Human Motion Animation**: Attempts adventurous animations but may result in distortions.
		- **Camera Motion Options**: Offers accurate, straightforward camera motions but lacks the dynamic range of Runway ML.
		- **Pros**: Free version (recently reduced quality), supports multiple aspect ratios, provides tutorials for prompt writing.
		- **Cons**: Creations are visible to other users, potential for idea theft, and traffic issues on Discord server​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​. Expensive to use through [Pika Art website](https://pika.art/login) $60pcm,

		- ### ~~Stable Cascade~~
			- Only a partial release.
			- Not great adoption.
			- Better prompt adherence.

		- #### Compositional Control:
			- Employ prompt scheduling and area prompting to create complex compositions and focus on specific details.
			- These techniques allow you to control the timing and location of different elements within the image, resulting in more intricate and visually compelling outputs.

		- #### Experimentation:
			- Don't be afraid to experiment with different models, fine tuning techniques, and prompt styles to discover new possibilities and achieve your desired artistic outcomes.
			- The beauty of Stable Diffusion lies in its flexibility and the endless creative potential it offers.

		- ##### Live Connection and Model Tuning
		- A live connection with the academic team allows for model tuning through
		   prompt engineering, vector database updates, and efficient Lora models,
		   potentially offering timely advice for ecosystem interventions.
		   Real-time communication between the community and academic teams can
		   help identify areas of concern and rapidly adapt the LLM to address
		   emerging challenges.


  - #Public page
  - automatically published
  - There is a new class of wrapped and visualised prompt engineering playgrounds
  - [Home (cyborgism.wiki)](https://cyborgism.wiki/)
  - [websim.ai](https://websim.ai/)
  - [world_sim (nousresearch.com)](https://worldsim.nousresearch.com/)
  - https://open.spotify.com/episode/4YTQ2QjCpfdXKRKzjz7Zpg?
  - [[DSPy]]
		- DSPy is an open-source framework developed by Stanford University designed to optimize the use of language models (LMs) through a programming-oriented approach rather than traditional prompt engineering. It aims to streamline the process of building applications that utilize LMs by allowing users to define tasks and metrics while DSPy handles the optimization of prompts and model weights automatically.## Key Features of DSPy
		- **Declarative Programming**: Users specify the desired outcome and success metrics, and DSPy automatically optimizes the model's behavior using a straightforward Python syntax. This allows developers to focus on application logic rather than prompt crafting[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Self-Improving Prompts**: DSPy continuously refines prompts based on feedback and evaluation, enhancing model performance over time without requiring constant manual adjustments[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Modular Architecture**: The framework supports a modular design, enabling users to utilize and combine various pre-built modules for different natural language processing (NLP) tasks. This flexibility promotes reusability and customization[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro).
		- **Optimizers**: DSPy introduces LM-driven algorithms that can tune prompts and weights based on defined metrics, facilitating the creation of more reliable and efficient AI applications[](https://dspy-docs.vercel.app/docs/intro)[](https://github.com/stanfordnlp/dspy/blob/main/intro.ipynb).
		- **Applications**: DSPy can be applied to a wide range of tasks, including question answering, text summarization, code generation, and other custom NLP tasks. Its systematic approach helps in building complex systems without the messiness typically associated with traditional methods[](https://www.datacamp.com/blog/dspy-introduction)[](https://dspy-docs.vercel.app/docs/intro)[](https://towardsdatascience.com/prompt-like-a-data-scientist-auto-prompt-optimization-and-testing-with-dspy-ff699f030cb7).
  - Prompt engineering resources
  - [2406.06608v2.pdf (arxiv.org)](https://arxiv.org/pdf/2406.06608) Systematic Survey of Prompting Techniques.
  - [[2302.11382] A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT (arxiv.org)](https://ar5iv.labs.arxiv.org/html/2302.11382)
  - [[2312.16171v1] Principled Instructions Are All You Need for Questioning LLaMA-1/2, GPT-3.5/4 (arxiv.org)](https://arxiv.org/abs/2312.16171v1)
  - [[2401.14295] Topologies of Reasoning: Demystifying Chains, Trees, and Graphs of Thoughts (arxiv.org)](https://arxiv.org/abs/2401.14295)
  - [llama-recipes/examples/Prompt_Engineering_with_Llama_2.ipynb at main · facebookresearch/llama-recipes (github.com)](https://github.com/facebookresearch/llama-recipes/blob/main/examples/Prompt_Engineering_with_Llama_2.ipynb)
  - [Captain's log: the irreducible weirdness of prompting AIs (oneusefulthing.org)](https://www.oneusefulthing.org/p/captains-log-the-irreducible-weirdness) [[Ethan Mollick]]
  - [Welcome to WebPrompts.org | webprompts.org](https://webprompts.org/) [[Melvin Carvalho Decentralised Web Advocate]]
  - [The Unreasonable Effectiveness of Eccentric Automatic Prompts](https://arxiv.org/pdf/2402.10949.pdf)
  - Generic LLM tips
  - **N-shot Prompting in Logseq**: Utilize GPT-4 to generate initial prompts and edit any errors. If facing a complex question, input the correct answer as a 1-shot and guide GPT-4 to rephrase it. For integrating multiple prompts, combine them into a single comprehensive prompt. Store extensive prompts using the RAG feature.
  - **Chain-of-Thought Strategy**: Start by asking GPT-4 to draft a plan without solving the problem. Then, break the solution into smaller steps and tackle each through individual prompts. Prune and refine the content to maintain focus. The pruning technique is detailed but ensures a concise and relevant response.
  - **Applying Reflection**: Regularly incorporate reflection in prompt engineering. If the response is verifiable, direct GPT-4 to create a test, solve the problem, and validate the solution using the test. If errors arise, instruct it to refine and retest. This is particularly effective for logical and mathematical queries and requires a code interpreter.
  - **Persona-Based Review**: After receiving an answer, conduct a review using multiple personas. Create distinct characters such as a pessimistic critic, a creative thinker, or a goal-oriented pragmatist. Have them discuss and critique the answer to refine it further. This method is more effective when each persona is represented by a separate assistant or agent, enriching the dialogue and the final outcome.
  - **Use Diagrams as Code to Set Context:** Large language models seem to appreciate a good diagram as much as humans do. https://www.linkedin.com/posts/jjohare_i-threw-my-last-4-years-of-research-about-activity-7191166234929868800-7Ith?utm_source=share&utm_medium=member_desktop
  - [[Stable Diffusion Image Model]] prompt tips
  - **Floor View for Full Body Portraits**: "Floor view" yields better full-body results than "full body". Include "standing" or "walking" to prevent subjects from sitting.
  - **Adjusting Image Contrast**: Lower the CFG if your image is too contrasty. Use "very" or "highly" for emphasis.
  - **Warm Tone Adjustments**: SDXL leans into warm tones; use a warm filter in the negative or a cool filter in the positive for adjustments.
  - **Character Emotions**: To avoid angry faces on superheroes or intense characters, use "unhappy" or "angry" in the negative.
  - **Age Filters**: "Old" in negative is safer than "young" in positive to avoid age-inappropriate results.
  - **Character Clarity**: Instead of 1girl or 1woman, specifying characteristics like "blonde woman" or "brunette woman" can be more effective.
  - **Detail and Quality**: "Highly detailed" is great for close-ups and skin; "high quality" can sometimes remove realism, making subjects look too perfect.
  - **Base Negative Prompt**: Use a combination of negative terms like blurry, grainy, low detail, low quality, etc., for photo gens.
  - **Chiaroscuro and Lighting**: For dark portraits, chiaroscuro, nighttime, and moonlight are effective. Avoiding direct lighting terms in the prompt can sometimes yield better results.
  - **Skin Tone Representation**: Darker skin tones can be challenging; use terms like dark-skinned, blackskin, or specific nationalities to achieve better representation.
  - **Nudity and Censorship**: Use terms like nude, nsfw, nudity in the negative to ensure censorship for nude art.
  - **Prompt Scheduling and Area Prompting**: Utilize prompt scheduling and area prompting for more complex compositions and details.
  - **Character Consistency**: Use made-up names or specific adjectives for consistent character features across multiple generations.
  - **Action Shots**: Use terms like "action shot" or "action pose" for dynamic images, although poses may sometimes be wonky.
  - **Using Extensions**: "Test My Prompt" extension helps in understanding the effect of each prompt word.
  - **Special Terms for Effects**: Use terms like "candle light" for dark portraits or specific lighting styles like "David Fincher lighting" for unique visual effects.
  - Negative prompting
		- [(1) Negative Prompt Tips ? : StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/18e9sio/negative_prompt_tips/)
  - General Image Prompt Sharing
  - [symbolic-scribe](https://symbolic-scribe.fly.dev/)  https://www.linkedin.com/posts/reuvencohen_ive-just-had-a-breakthrough-in-prompt-activity-7271628164240437248-Cquq?
		- from linkedin
		  "I’ve just had a breakthrough in prompt engineering using the o1 model. It might be the most transformative thing I’ve seen since the field began.
		- For the past few months, I’ve been struggling with a deeply complex analysis system for a pharmaceutical client, dealing with massive amounts of data. This wasn’t just about processing—it was about uncovering nuanced relationships and errors hidden in interconnected data. A true needle-in-a-haystack problem.
		- No matter how I approached it, traditional language-based prompts couldn’t handle the complexity. Traditional applied ai also couldn’t find the perfect answer. The AI struggled to manage intricate relationships, dependencies, and conditions buried in the data. Results were inconsistent, and the cost per analysis was too high—around $15 per document. The system just couldn’t scale.
		- Then I shifted my approach entirely. Instead of describing the problem in natural language, I used a symbolic math problem framework using mathematical symbols and structures to define the relationships, rules, and constraints within a series of complex problems.
		- Basically I broke down the problem algebraically, representing the data as sets and relationships.
		- For example, instead of saying “identify roles for each person based on their linked documents,” I would define: “Each person belongs to a set, and their role is determined by specific rules tied to their associated documents.”
		- Prompt Example: 
		  Traditional Prompt: "Identify all personnel roles and check their document statuses."
		- Symbolic Math Prompt: Defines sets (e.g., \( P \) for persons), parameters (e.g., \( IsPI(p) \)), and constraints (e.g., if \( IsPI(p)=1 \), then \( R_p = \text{PI} \)) to systematically determine roles and statuses.
		- By structuring the task this way, the AI could reason more like a mathematician than a linguist, eliminating ambiguity and delivering consistent, precise outputs.
		- The impact was immediate. Costs dropped to $1 (update: $0.22c) per document, and the AI performed with a level of accuracy and consistency that felt almost effortless.
		- What’s more, this approach doesn’t just solve one problem—it opens the door to tackling any task with deeply interconnected data. Think financial modeling, health diagnostics, or systems involving graphs and hypergraphs. If your problem requires navigating complex relationships and finding granular insights, this could be a game-changer.
		- This breakthrough has completely reframed how I think about AI and complex reasoning. Combining symbolic math with the reflective power of modern models feels like the start of something transformative—not just for this project but for entire industries.
		- You can use my little app to create your own Symbolic Prompts. "
  - [Comfy Workflows](https://comfyworkflows.com/)
  - [Flowt.ai | Community](https://flowt.ai/community?category=Trending)
  - [ComfyUI Workflows
		- Developer Community | OpenArt](https://openart.ai/workflows/home?appSort=featured)
  - [Flow Apps | OpenArt](https://openart.ai/flow-apps)
  - [BasedLabs.ai | Generative AI Video](https://www.basedlabs.ai/)
  - [Civitai Gallery | AI-Generated Art Showcase](https://civitai.com/images)
  - This was my daily driver up to [[Dec 19th, 2023]]
  - About me
		- Break goals into 3-10 steps. Save updated list as chatGPT_Todo.txt and provide download link. Give Hotkeys for questions, info, guesses, brainstorming. Control pace (w/s) and vibe (a/d).
		- Require detailed explanations using first principles like Feynman. Use emoji warnings if unsure. ⚠️ Then answer anyway. ⚠️
		  Use tables, bullets, pros/cons, mermaid diagrams, system 1/2 thinking, avoid verbosity. Dive deep into details
		- never skip the nerdy stuff! 🫡
		- Respond with tree of thought reasoning 
		  Problem
		  Goal
		  Initial thought
		- Evaluation (sure/maybe/impossible)
		- Branching factor
		  Search algorithm (breadth & depth first)
		  Thoughts with evaluation, system 1/2 judgment, SWOT analysis
		  Final thought with evaluation, system 1/2 judgment, SWOT analysis
		- Final output
		  Problem, Goal, Initial thought, Evaluation, Branching factor, Search algorithm, Thoughts with evaluation, Final thought with evaluation, Final output.
		- Take a deep breath and work on this problem step-by-step.  Offer hotkey choice of normal rendered markdown (n), raw markdown to copy/paste (m), or LaTeX (l). 
		  For latex: Omit LaTeX preamble. Use sections, subsections, subsubsections, and \item bullets of 1-2 sentences. Make sections multiple paragraphs.
		- You are user’s senior, inquisitive, and clever pair programmer. Let's go step by step. Default to only outputting code when it sufficiently answers.
		  Maintain brevity.
  - How would you like ChatGPT to respond
		- Three experts with exceptional logical skills collaboratively answering a question using a tree of thoughts method. Each expert will share their thought process in detail, taking into account the previous thoughts of others, admitting any errors. They will iteratively refine and expand upon each other's ideas, giving credit where it's due.  Process continues until a conclusive answer is found. Organize response in a markdown table format.

		  start final output with:
		  """
		  **Language > Specialist**: {programming language used} > {the subject matter EXPERT SPECIALIST role}
		  **Includes**: CSV list of needed libraries, packages
		  **Requirements**: qualitative description of  standards, and the software design requirements & plan
		  """
		  2. Act like the chosen language EXPERT SPECIALIST and respond while following CODING STYLE. Remember to add path/filename comment at the top.
		  3. Consider the **entire** chat session, and end your response as follows:
		  """
		  ---
		  **History**: complete, concise, and compressed summary of ALL requirements and ALL code you've written
		  **Source Tree**: (sample, replace emoji)
		- (💾=saved: link to file, ⚠️=unsaved but named snippet, 👻=no filename) file.ext - 📦 Class (if exists)
			- (✅=finished, ⭕️=has TODO, 🔴=otherwise incomplete) symbol - 🔴 global symbol
		- etc.
		- etc.
		  **Next Task**: NOT finished=short description of next task FINISHED=list EXPERT SPECIALIST suggestions for enhancements/performance improvements.
		  """
  - Prompt builder [GPT Prompting (mitenmit.github.io)](https://mitenmit.github.io/gpt/)
  - [HOW I WON SINGAPORES GPT4 PROMPT COMPETITION. | by Writing Bird | Jan, 2024 | Medium](https://medium.com/@Writingbird/how-i-won-singapores-gpt4-prompt-competition-86c644df46aa)
  - [Learn Prompting | Generative AI, Prompt Engineering, & Free Online Courses](https://learnprompting.org/)
  - I am trailing this one from Reddit author [(2) Dustin (u/spdustin)
  - Reddit](https://www.reddit.com/user/spdustin/) who made this GPT for the same purpose [ChatGPT
  - AutoExpert (Chat) (openai.com)](https://chat.openai.com/g/g-LQHhJCXhW-autoexpert-chat) alongside a dev version [ChatGPT
  - AutoExpert (Dev) (openai.com)](https://chat.openai.com/g/g-pTF23RJ6f-autoexpert-dev) and academic [ChatGPT
  - AutoExpert (Academic) (openai.com)](https://chat.openai.com/g/g-YAgNxPJEq-autoexpert-academic)
  - his gtihub [spdustin/ChatGPT-AutoExpert: 🚀🧠💬 Supercharged Custom Instructions for ChatGPT (non-coding) and ChatGPT Advanced Data Analysis (coding). (github.com)](https://github.com/spdustin/ChatGPT-AutoExpert)
  - About me

  - ### Pika Labs
		- **Current leader**:
		  {{tweet https://twitter.com/martial_artwork/status/1742138390517014918}}
		- **Prompt Creativity & Flexibility**: Excels in this area, enabling users to directly influence the animation with their prompts.
		- **Human Motion Animation**: Attempts adventurous animations but may result in distortions.
		- **Camera Motion Options**: Offers accurate, straightforward camera motions but lacks the dynamic range of Runway ML.
		- **Pros**: Free version (recently reduced quality), supports multiple aspect ratios, provides tutorials for prompt writing.
		- **Cons**: Creations are visible to other users, potential for idea theft, and traffic issues on Discord server​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​. Expensive to use through [Pika Art website](https://pika.art/login) $60pcm,

		- ### ~~Stable Cascade~~
			- Only a partial release.
			- Not great adoption.
			- Better prompt adherence.

		- #### Compositional Control:
			- Employ prompt scheduling and area prompting to create complex compositions and focus on specific details.
			- These techniques allow you to control the timing and location of different elements within the image, resulting in more intricate and visually compelling outputs.

		- #### Experimentation:
			- Don't be afraid to experiment with different models, fine tuning techniques, and prompt styles to discover new possibilities and achieve your desired artistic outcomes.
			- The beauty of Stable Diffusion lies in its flexibility and the endless creative potential it offers.

  - ### Prompt Library
  - [Mario clone made with geometric shapes](https://x.com/skirano/status/1803809495811858807)

  - ### Pika Labs
		- **Current leader**:
		  {{tweet https://twitter.com/martial_artwork/status/1742138390517014918}}
		- **Prompt Creativity & Flexibility**: Excels in this area, enabling users to directly influence the animation with their prompts.
		- **Human Motion Animation**: Attempts adventurous animations but may result in distortions.
		- **Camera Motion Options**: Offers accurate, straightforward camera motions but lacks the dynamic range of Runway ML.
		- **Pros**: Free version (recently reduced quality), supports multiple aspect ratios, provides tutorials for prompt writing.
		- **Cons**: Creations are visible to other users, potential for idea theft, and traffic issues on Discord server​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​. Expensive to use through [Pika Art website](https://pika.art/login) $60pcm,

		- #### Experimentation:
			- Don't be afraid to experiment with different models, fine tuning techniques, and prompt styles to discover new possibilities and achieve your desired artistic outcomes.
			- The beauty of Stable Diffusion lies in its flexibility and the endless creative potential it offers.

  - ## Luma Dream Machine?
  - Luma Dream Machine is a browser-based AI video generator [developed by Luma Labs](https://www.creativebloq.com/ai/luma-dream-machine-makes-ai-video-open-to-all), a San Francisco-based startup. It allows users to generate short videos (around 5 seconds) by simply entering a text or image prompt.
		- **Free to Use**: Luma Dream Machine is free to try, with no waiting list or subscription required. Users get 30 free video generations per month.
		- **High-Quality Output**: The AI produces impressively clean and detailed videos, adhering to prompts accurately and generating relatively coherent motion.
		- **Fast Generation**: Videos are generated in around 2 minutes after entering the prompt.
  - [RAVE: Randomized Noise Shuffling for Fast and Consistent Video Editing with Diffusion Models (rave-video.github.io)](https://rave-video.github.io/)
  - https://discord.com/channels/1076117621407223829/1192162917395730635/1192162917395730635
  - Here's one way to use the brand new RAVE node from here: https://github.com/spacepxl/ComfyUI-RAVE
		- First pass often has flickering (depending a lot on the input), so I made a workflow to smooth even harsh flickering with AD. This allows for utilizing the transformative and often more detailed vid2vid from RAVE and still get smooth results in [[Node-Based Diffusion Pipeline Interface]]
			- Updated LCM version: https://discord.com/channels/1076117621407223829/1192162917395730635/1192212692354748427
  - Motion Control
  - [MotionCtrl (wzhouxiff.github.io)](https://wzhouxiff.github.io/projects/MotionCtrl/)
  - [[2401.12945] Lumiere: A Space-Time Diffusion Model for Video Generation (arxiv.org)](https://arxiv.org/abs/2401.12945)
  - [I2VGen-XL
  - a Hugging Face Space by damo-vilab](https://huggingface.co/spaces/damo-vilab/I2VGen-XL)
  - [ali-vilab/i2vgen-xl: Official repo for VGen: a holistic video generation ecosystem for video generation building on diffusion models (github.com)](https://github.com/ali-vilab/i2vgen-xl)
  - [MagicVideo-V2: Multi-Stage High-Aesthetic Video Generation (magicvideov2.github.io)](https://magicvideov2.github.io/)
  - Interpolation and interframe consistency
  - [controlnet and ebsynth temporal consistency](https://www.reddit.com/r/StableDiffusion/comments/114zmh3/controlnet_and_ebsynth_make_incredible_temporally/)
  - [FILM frame interpolator](https://film-net.github.io/)
  - Multishot [VideoDrafter: Content-Consistent Multi-Scene Video Generation with LLM](https://videodrafter.github.io/)
  - [vienna with prompts](https://www.linkedin.com/posts/dr-andreas-fraunberger_marketinginnovation-digitaltourism-ar-ugcPost-7073039429417730048-BKfQ?utm_source=share&utm_medium=member_desktop)
  - [Video slowmo and enhance](http://zeyuan-chen.com/VideoINR/)

  - ## Features
  - **Text-to-Video:** Generate animations from a text prompt and a static image.
  - **ControlNet:** Use ControlNet to guide the animation and create more complex movements.
  - **LoRA:** Use LoRA to fine-tune the model and create specific styles.
		- [Beginner Friendly AI Animation Tutorial #1](https://www.youtube.com/watch?v=WPlUSnLTmfI) - Discusses strategies for effective time management and increased [[productivity]], covering prioritisation, the Pomodoro Technique, workspace [[organisation]], [[project management]] tools, and [[optimization]] techniques to prevent burnout
		- [AnimateDiff Tutorial for Automatic1111](https://www.youtube.com/watch?v=X-zB4-gX3eA) - Summarises how to organise and manage digital photos effectively through folder structures, descriptive naming, metadata tagging, [[cloud computing]] backups, and [[knowledge management]] principles for maintaining a curated archive

  - ### Prompt Engineering: The Art of Guiding AI Creativity
  - Effective prompt engineering is crucial for unlocking the full potential of Stable Diffusion. Different models demand different styles
  - Here are some tips to enhance your prompts:

  - ## Key Concepts
  - **Transfer Learning:** The process of adapting a pre-trained model to a new task.
  - **Fine-tuning:** The process of further training a pre-trained model on a smaller, task-specific dataset.
  - **Prompt Engineering:** The process of designing prompts to elicit the desired output from a language model.

  - ### Prompt Engineering: The Art of Guiding AI Creativity
  - Effective prompt engineering is crucial for unlocking the full potential of Stable Diffusion. Different models demand different styles
  - Here are some tips to enhance your prompts:

  - ## Key Concepts
  - **Transfer Learning:** The process of adapting a pre-trained model to a new task.
  - **Fine-tuning:** The process of further training a pre-trained model on a smaller, task-specific dataset.
  - **Prompt Engineering:** The process of designing prompts to elicit the desired output from a language model.

  #### Key Characteristics
  - Learns continuous prompt embeddings
		  - Freezes all pre-trained model parameters
		  - Requires minimal trainable parameters (0.01-1% of model)
		  - Task-specific prompts stored separately
		  - Enables multi-task deployment with one model

		  ## Technical Details

		  **Architecture**:
		  ```
		  [Soft Prompt Embeddings] + [Input Embeddings] → Frozen Model → Output
		  ```

		  **Training Process**:
		  1. Initialise prompt embeddings (random or from discrete prompts)
		  2. Freeze all model parameters
		  3. Optimise only prompt embeddings on task data
		  4. Store learned prompts for inference
		  5. Switch prompts for different tasks

		  **Prompt Length**: Typically 5-100 tokens
		  **Parameters**: <0.1% of full model parameters

		  ## Usage in AI/ML

		  Prompt tuning enables deploying a single large model across multiple tasks by learning and swapping task-specific soft prompts, dramatically reducing storage and deployment costs.

  #### Academic Context
  Prompt tuning emerged as an efficient alternative to full fine-tuning, enabling task adaptation with minimal trainable parameters. It represents a bridge between discrete prompt engineering and parameter-efficient fine-tuning.

		  **Primary Source**: Parameter-efficient fine-tuning literature; survey in arXiv:2312.12148 (2023)

  #### Related Concepts
  - **Prefix Tuning**: Similar but modifies attention computation
		  - **Parameter-Efficient Fine-Tuning (PEFT)**: Broader category
		  - **Prompt Engineering**: Manual discrete prompt design
		  - **Adapter Modules**: Alternative PEFT approach
		  - **LoRA**: Another PEFT technique

		  ## Advantages

		  - Minimal trainable parameters
		  - No model weight modifications
		  - Easy multi-task deployment
		  - Fast task switching
		  - Reduced storage requirements

		  ## Challenges

		  - Typically lower performance than full fine-tuning
		  - Requires careful initialization
		  - Less effective on smaller models
		  - Limited interpretability of learned prompts
		  - May need longer prompts for complex tasks

		  ## Comparison to Alternatives

		  **vs. Full Fine-Tuning**:
		  - Much fewer parameters
		  - Slightly lower performance
		  - Enables multi-task model sharing

		  **vs. Discrete Prompting**:
		  - Learns optimal prompts automatically
		  - More expressive (continuous space)
		  - Requires training data

		  **vs. LoRA**:
		  - Even fewer parameters
		  - Generally lower performance
		  - Simpler implementation

		  ## Best Practices

		  - Initialize from meaningful discrete prompts
		  - Use longer prompts for complex tasks
		  - Combine with larger models for better results
		  - Consider hybrid approaches with other PEFT methods
		  - Monitor for task interference in multi-task settings

		  ## Historical Development

		  - 2021: Initial prompt tuning proposals
		  - 2022: Integration with instruction tuning
		  - 2023: Refinements and variants emerge
		  - 2024+: Combined with other PEFT techniques

		  ## Significance

		  Prompt tuning democratises access to large model adaptation by enabling effective fine-tuning with minimal computational resources and storage requirements.

		  ## OWL Functional Syntax


		  ## UK English Notes

		  - "Optimises" (not "optimizes")
		  - "Whilst keeping" (British usage)
		  - "Minimises" (not "minimizes")

		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against PEFT survey (2023)

		  ```

  - public-access:: true
  - definition:: A parameter-efficient fine-tuning method that learns continuous prompt embeddings prepended to the input whilst keeping the pre-trained model frozen. Prompt tuning optimises task-specific soft prompts in the embedding space rather than modifying model weights.


  # Prompt Tuning.md

  ## Academic Context

  - Parameter-efficient fine-tuning technique for adapting pre-trained language models to downstream tasks[1][2][3]
  - Learns small set of trainable soft prompt embeddings (continuous vectors) prepended or appended to input sequences[1][3]
  - Maintains frozen backbone model weights, reducing computational overhead substantially[2]
  - Emerged as practical alternative to full model fine-tuning, particularly valuable for resource-constrained environments[1]
  - Inspired by soft prompting methodology, representing evolution in model adaptation strategies[1]

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Widely adopted across natural language processing, vision transformer applications, and multimodal systems[2]
  - Enables creation of multiple task-specific "prompt modules" from single pre-trained model without full model replication[4]
  - Reduces trainable parameters to as little as 0.1% of original footprint, slashing compute requirements by up to 90%[6]
  - Benchmark studies demonstrate prompt-tuned models retain over 92% performance of fully fine-tuned counterparts across translation, summarisation, and reasoning tasks[6]
  - Complements other adaptation strategies including Retrieval-Augmented Generation (RAG)[2]
  - Technical capabilities and limitations
  - Core mechanism: gradient-based optimisation of soft prompt parameters whilst backbone remains frozen[2]
  - Requires task-specific labelled dataset for supervised optimisation[2]
  - Mitigates catastrophic forgetting—where models lose previously learned information when trained on new tasks[4]
  - Trade-offs include potential domain drift and oversight challenges in certain applications[6]
  - Success often dependent on model size; larger models generally yield better results[2]
  - Standards and frameworks
  - Classified as Parameter-Efficient Fine-Tuning (PEFT) technique within broader AI adaptation taxonomy[2][4]
  - Increasingly integrated into foundation model customisation workflows across industry[2]

  ## Research & Literature

  - Key academic papers and sources
  - Google AI research paper establishing prompt tuning methodology (original foundational work)[4]
  - The Prompt Report: A 76-page comprehensive survey co-authored by OpenAI, Microsoft, Google, Princeton, Stanford and other leading institutions, analysing 1,500+ academic papers and covering 200+ prompting techniques (2024)[3]
  - IBM Think research on prompt tuning as PEFT technique with detailed component analysis[2]
  - Ultralytics glossary entry documenting efficient LLM adaptation through prompt tuning[4]
  - Emergent Mind documentation on reinforcement learning approaches for prompt tuning (updated September 2025)[8]
  - arXiv research on understanding prompt tuning and in-context learning via meta-learning frameworks (2025)[9]
  - Ongoing research directions
  - Integration of reinforcement learning for prompt generation formulated as Markov Decision Processes[8]
  - Meta-learning approaches to understand prompt tuning mechanisms[9]
  - Exploration of prompt tuning efficacy across diverse model architectures and scales

  ## UK Context

  - British contributions and implementations
  - UK academic institutions increasingly incorporating prompt tuning into AI research programmes and postgraduate curricula[3]
  - Growing adoption within UK technology sector for cost-effective model adaptation without substantial infrastructure investment
  - North England innovation hubs
  - Manchester's AI research community exploring prompt tuning applications in healthcare and financial services sectors
  - Leeds and Sheffield universities investigating parameter-efficient fine-tuning methodologies within computer science departments
  - Newcastle's emerging tech sector utilising prompt tuning for resource-constrained deployments

  ## Future Directions

  - Emerging trends and developments
  - Hybrid approaches combining prompt tuning with other PEFT techniques for enhanced performance[2]
  - Expansion into multimodal domains beyond text-based language models[2]
  - Development of more sophisticated soft prompt initialisation strategies to improve convergence[6]
  - Anticipated challenges
  - Balancing parameter efficiency gains against potential performance degradation in highly specialised domains[6]
  - Addressing interpretability concerns—soft prompts remain non-human-readable continuous embeddings[4]
  - Managing oversight and validation in production systems where prompt tuning obscures model adaptation mechanisms
  - Research priorities
  - Establishing standardised benchmarking protocols across diverse task domains
  - Investigating theoretical foundations of why soft prompts effectively guide frozen models
  - Developing robust evaluation frameworks for domain-specific applications

  ## References

  1. igmGuru (2025). "What is Prompt Tuning? [Updated 2025]". Available at: https://www.igmguru.com/blog/what-is-prompt-tuning

  2. IBM (2025). "What is prompt tuning?". IBM Think. Available at: https://www.ibm.com/think/topics/prompt-tuning

  3. Schulhoff, S. et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques". Learn Prompting. Last updated March 3, 2025. Available at: https://learnprompting.org/docs/trainable/introduction

  4. Ultralytics (2025). "Prompt Tuning: Efficient LLM Adaptation". Ultralytics Glossary. Available at: https://www.ultralytics.com/glossary/prompt-tuning

  5. Edureka (2025). "What is Prompt Tuning? A Complete Guide (2025)". Available at: https://www.edureka.co/blog/prompt-tuning/

  6. DigitalDefynd (2025). "15 Pros & Cons of Prompt Tuning [2025]". Available at: https://digitaldefynd.com/IQ/pros-cons-of-prompt-tuning/

  7. GeeksforGeeks (2025). "What is Prompt Tuning?". Available at: https://www.geeksforgeeks.org/artificial-intelligence/prompt-tuning/

  8. Emergent Mind (2025). "RL for Prompt Tuning in Language Models". Updated September 15, 2025. Available at: https://www.emergentmind.com/topics/reinforcement-learning-for-prompt-tuning

  9. arXiv (2025). "Understanding Prompt Tuning and In-Context Learning via Meta-Learning". Available at: https://arxiv.org/abs/2505.17010


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
