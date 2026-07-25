public:: true

# Text Generation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:351a23b4b129a9a0fbd982a7a8993f45cddd2d34759bd0500d7ef1b109240a99",
  "@type": "Page",
  "vc:slug": "text-generation",
  "title": "Text Generation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automation",
      "vc:label": "automation"
    },
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:neural-networks",
      "vc:label": "neural networks"
    },
    {
      "@id": "urn:visionflow:linked:organisation",
      "vc:label": "organisation"
    },
    {
      "@id": "urn:visionflow:linked:vercel",
      "vc:label": "Vercel"
    },
    {
      "@id": "urn:visionflow:owl:class:accessibility",
      "vc:label": "Accessibility"
    },
    {
      "@id": "urn:visionflow:owl:class:agent-frameworks",
      "vc:label": "Agent Frameworks"
    },
    {
      "@id": "urn:visionflow:owl:class:agents",
      "vc:label": "agents"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:chat-gpt",
      "vc:label": "ChatGPT"
    },
    {
      "@id": "urn:visionflow:owl:class:checkpoints",
      "vc:label": "Checkpoints"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:death-of-the-internet",
      "vc:label": "Death of the Internet"
    },
    {
      "@id": "urn:visionflow:owl:class:deepfakes-and-fraudulent-content",
      "vc:label": "Deepfakes and fraudulent content"
    },
    {
      "@id": "urn:visionflow:owl:class:google",
      "vc:label": "Google"
    },
    {
      "@id": "urn:visionflow:owl:class:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:owl:class:gpt-engineer",
      "vc:label": "GPT Engineer"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graphing",
      "vc:label": "Knowledge Graphing"
    },
    {
      "@id": "urn:visionflow:owl:class:language-modeling",
      "vc:label": "Language Modeling"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:latent-space",
      "vc:label": "latent space"
    },
    {
      "@id": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "vc:label": "LoRA DoRA etc"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:microsoft-copilot",
      "vc:label": "Microsoft Copilot"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:nvidia-omniverse",
      "vc:label": "NVIDIA Omniverse"
    },
    {
      "@id": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "vc:label": "Open Webui and Pipelines"
    },
    {
      "@id": "urn:visionflow:owl:class:player-two",
      "vc:label": "PlayerTwo"
    },
    {
      "@id": "urn:visionflow:owl:class:product-design",
      "vc:label": "Product Design"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time",
      "vc:label": "Real Time"
    },
    {
      "@id": "urn:visionflow:owl:class:should",
      "vc:label": "SHOULD"
    },
    {
      "@id": "urn:visionflow:owl:class:social-contract-and-jobs",
      "vc:label": "Social contract and jobs"
    },
    {
      "@id": "urn:visionflow:owl:class:speech-and-voice",
      "vc:label": "Speech and Voice"
    },
    {
      "@id": "urn:visionflow:owl:class:stable-diffusion",
      "vc:label": "Stable Diffusion"
    },
    {
      "@id": "urn:visionflow:owl:class:translation",
      "vc:label": "Translation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0374"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Text Generation"
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
  "@id": "urn:ngm:class:text-generation",
  "@type": "Class",
  "label": "Text Generation",
  "definition": "Text Generation is the NLP task of producing coherent, contextually appropriate natural language text using neural language models, including applications such as story generation, article writing, code generation, and creative content production. Modern text generation employs transformer-based language models with autoregressive or sequence-to-sequence architectures, controllable generation techniques, and prompt engineering to produce human-quality text across diverse domains and styles.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:language-modeling",
    "label": "Language Modeling"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Networks"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      },
      {
        "@id": "urn:ngm:class:text-summarisation",
        "label": "Summarisation"
      },
      {
        "@id": "urn:ngm:class:translation",
        "label": "Translation"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:autoregressive-generation",
        "label": "Autoregressive Generation"
      },
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:language-modeling",
        "label": "Language Modeling"
      },
      {
        "@id": "urn:ngm:class:neural-network-latent-space",
        "label": "Latent Space"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:speech-and-voice",
        "label": "Speech and Voice"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:agent-frameworks",
        "label": "Agent Frameworks"
      },
      {
        "@id": "urn:ngm:class:knowledge-graphing",
        "label": "Knowledge Graphing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT"
      },
      {
        "@id": "urn:ngm:class:deepfakes-and-fraudulent-content",
        "label": "Deepfakes and fraudulent content"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:natural-language-generation",
      "label": "Natural Language Generation"
    },
    {
      "@id": "urn:ngm:class:language-generation",
      "label": "Language Generation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:text-generation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:351a23b4b129a9a0fbd982a7a8993f45cddd2d34759bd0500d7ef1b109240a99"
  },
  "vc:resolutions": [
    {
      "raw": "[[automation]]",
      "resolved": "urn:visionflow:linked:automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Large Language Model]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[neural networks]]",
      "resolved": "urn:visionflow:linked:neural-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[organisation]]",
      "resolved": "urn:visionflow:linked:organisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Vercel]]",
      "resolved": "urn:visionflow:linked:vercel",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessibility]]",
      "resolved": "urn:visionflow:owl:class:accessibility",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agent Frameworks]]",
      "resolved": "urn:visionflow:owl:class:agent-frameworks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[agents]]",
      "resolved": "urn:visionflow:owl:class:agents",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[artificial intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Instruction-Following Conversational AI System]]",
      "resolved": "urn:visionflow:owl:class:chat-gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Checkpoints]]",
      "resolved": "urn:visionflow:owl:class:checkpoints",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Node-Based Diffusion Pipeline Interface]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Death of the Internet]]",
      "resolved": "urn:visionflow:owl:class:death-of-the-internet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deepfakes and fraudulent content]]",
      "resolved": "urn:visionflow:owl:class:deepfakes-and-fraudulent-content",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Google AI Technology Corporation]]",
      "resolved": "urn:visionflow:owl:class:google",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:owl:class:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPT Engineer]]",
      "resolved": "urn:visionflow:owl:class:gpt-engineer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graphing]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graphing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Language Modeling]]",
      "resolved": "urn:visionflow:owl:class:language-modeling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network Latent Space]]",
      "resolved": "urn:visionflow:owl:class:latent-space",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LoRA DoRA etc]]",
      "resolved": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microsoft Copilot]]",
      "resolved": "urn:visionflow:owl:class:microsoft-copilot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NVIDIA Omniverse Platform]]",
      "resolved": "urn:visionflow:owl:class:nvidia-omniverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Webui and Pipelines]]",
      "resolved": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PlayerTwo]]",
      "resolved": "urn:visionflow:owl:class:player-two",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Product Design]]",
      "resolved": "urn:visionflow:owl:class:product-design",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real Time]]",
      "resolved": "urn:visionflow:owl:class:real-time",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RFC 2119 SHOULD Normative Keyword]]",
      "resolved": "urn:visionflow:owl:class:should",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Employment Social Contract Under Automation]]",
      "resolved": "urn:visionflow:owl:class:social-contract-and-jobs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech and Voice]]",
      "resolved": "urn:visionflow:owl:class:speech-and-voice",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion Image Model]]",
      "resolved": "urn:visionflow:owl:class:stable-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Translation]]",
      "resolved": "urn:visionflow:owl:class:translation",
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
  - Text Generation is the NLP task of producing coherent, contextually appropriate natural language text using neural language models, including applications such as story generation, article writing, code generation, and creative content production. Modern text generation employs transformer-based language models (GPT, T5, BLOOM) with autoregressive or sequence-to-sequence architectures, controllable generation techniques, and prompt engineering to produce human-quality text across diverse domains and styles.

- ### Semantic Classification
  - owl-class:: spatial-computing:TextGeneration
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Transformer]]
  - enables [[Natural Language Processing]]
  - enables [[Generative AI]]
  - uses [[Sampling]]
  - uses [[Prompt Engineering]]

- ### Content
  - Text Generation is the NLP task of producing coherent, contextually appropriate natural language text using neural language models, including applications such as story generation, article writing, code generation, and creative content production. Modern text generation employs transformer-based language models (GPT, T5, BLOOM) with autoregressive or sequence-to-sequence architectures, controllable generation techniques, and prompt engineering to produce human-quality text across diverse domains and styles.

  - ### [Luma AI Genie](https://lumalabs.ai/genie?view=create) - Luma Genie is a tool that allows users to create realistic 3D models from text or image prompts using [[neural networks]] technology.
  - Users can describe the desired 3D model with a text prompt, specifying details like shape, colour, and texture.
  - Alternatively, users can upload an image to guide the 3D model generation.
  - The generated 3D models can be downloaded in various formats for use in different applications.
  - Genie aims to simplify the process of 3D content creation, making it more accessible to users of all skill levels.
  - It appears to be still under development, with the website showcasing examples and possibilities.
  - The technology uses neural radiance fields to generate high-quality, realistic 3D models.
  - Users can organise and share their created models through the Luma platform.
		- <iframe src="https://lumalabs.ai/luma-web-library" style="width: 100%; height: 600px"></iframe>

  - ### **ComfyTextures**
		- [ComfyTextures GitHub](https://github.com/AlexanderDzhoganov/ComfyTextures) - - ComfyTextures is a collection of free, high-quality textures designed for use in 3D rendering and other creative projects.
  - The textures are organised into logical categories such as wood, metal, fabric, and stone, making it easier to find the desired material.
  - Each texture comes with various maps (diffuse, normal, roughness, specular, height) to facilitate realistic material creation in different rendering engines.
  - The textures are generally provided in a tileable format allowing for seamless repetition across surfaces.
  - The repository is actively maintained, with additions and updates being made regularly, enhancing the available resource base.
  - The textures can be downloaded and used for both commercial and non-commercial purposes under a specified licence.
  - The repository aims to provide a valuable resource for artists and developers seeking readily accessible and customisable textures.
  - Many textures include variations in colour and detail allowing for greater control over the final appearance.

  - ### **Imagine 3D Software**
		- [Imagine 3D](https://captures.lumalabs.ai/imagine) - Luma Labs Imagine allows users to create realistic 3D models from text descriptions, streamlining the design workflow.
  - It offers an intuitive interface to easily generate, edit and visualise 3D assets.
  - Users can control the colour, texture, and shape of the generated 3D models using natural language processing.
  - The tool enables users to iterate quickly on design ideas by making adjustments to the text prompt and regenerating the model.
  - Imagine facilitates the creation of customised 3D models for various applications, including gaming, product visualisation and animation.
  - It allows users to organise and manage generated models within a centralised workspace.
  - The platform encourages experimentation with different prompts to explore the creative potential of [[artificial intelligence]]-powered 3D generation.
  - Imagine simplifies 3D content creation, democratising access to 3D modelling for non-experts.

  - ### **GET3D by Toronto AI Lab**
		- [GET3D GitHub](https://nv-tlabs.github.io/GET3D/) - GET3D is a generative model that creates high-quality 3D shapes with explicit textures, removing the need for time-consuming 3D modelling.
  - It uses a novel texture generation method directly on 3D volumes, resulting in detailed and realistic surface colour.
  - The model is trained on unlabelled 2D images using a differentiable rendering pipeline, meaning no 3D supervision is required.
  - The generated 3D shapes are mesh-free, represented as neural radiance fields, making them easy to manipulate and edit.
  - GET3D allows users to efficiently generate diverse and high-quality 3D assets, accelerating content creation workflows.
  - The system offers control over object categories during generation, allowing users to specify the type of 3D shape produced.
  - The generated assets are compatible with standard rendering pipelines and can be readily integrated into existing 3D scenes.
  - The research demonstrates significant improvements in 3D shape quality and texture detail compared to previous generative models.
  - This technology could be used for rapid prototyping, game development, and creation of virtual environments.
  - GET3D aims to democratise 3D content creation by simplifying the process and reducing reliance on expert 3D modellers.

  - ### **Dream Fields for Text-Guided 3D Object Generation**
		- [Dream Fields](https://ajayj.com/dreamfields) - * Dreamfields is a technique for visualising and organising thoughts and ideas, similar to mind mapping but with a focus on colours and spatial arrangement.
  - The system utilises a canvas (physical or digital) where ideas are represented as colourful nodes, allowing for visual categorisation and intuitive connections.
  - Unlike traditional mind maps, Dreamfields encourages free-form arrangement and avoids rigid hierarchical structures, promoting flexible thinking.
  - The colour coding allows for the association of different themes, priorities, or categories to individual ideas, aiding in overall organisation.
  - The spatial arrangement of nodes on the canvas can reflect relationships, importance, or chronological order of the ideas, providing another layer of meaning.
  - Dreamfields is presented as a tool for brainstorming, problem-solving, and project planning, enabling users to explore and connect concepts in a non-linear way.
  - The method is suggested to be particularly useful for visual learners and individuals who benefit from a more fluid and intuitive approach to [[organisation]].
  - Dreamfields encourages ongoing reflection and iteration, allowing the canvas to evolve and adapt as thinking develops.

  - ### Research
		- **[Phi-3 and Phi-4](https://msdynamicsworld.com/story/new-microsoft-dynamics-365-and-power-platform-features-2024-release-wave-1-plan)**: Powerful language models compact enough to run on a smartphone.
  - Amazon
  - Amazon is making a significant push in AI with its new "Nova" models, a revamped "Alexa Plus," and next-generation AI chips.

		- ### Physically Based Textures from BIM (Revit)
			- ![Screenshot 2025-07-24 173949.png](assets/blender-bim-pbr-texture-cube.png)

		- ### Evolution from Chat to Complex Systems
			- Context engineering emerged as AI systems evolved beyond simple chat interfaces to incorporate:
				- Function calling and tool use
				- Retrieval augmented generation (RAG) systems
				- Multi-agent workflows
				- External API integrations
				- The principle of "garbage in, garbage out" becomes critical when managing complex information flows. Pre-processing and cleaning data before it enters the context window significantly improves output quality.

  - ### Text-to-Speech
		- Text-to-speech (TTS) technology can be used to convert written text into spoken audio. This can be used to create podcasts from blog posts, articles, or other written content.

  - ### Project Details
  - **Technology and Process**
		- Utilizing highly-efficient energy generation equipment, the project transforms methane, a natural landfill byproduct, into electricity.
		- This electricity is used for several on-site applications, notably for powering data centers.
  - **Environmental and Economic Impacts**
		- The initiative aims to reduce greenhouse gas emissions.
		- It also generates revenue, which supports Viridi's investment in constructing a state-of-the-art Renewable Natural Gas (RNG) facility at the landfill.
		- The RNG facility, expected to be fully operational by the second half of 2024, will produce the equivalent of three million gallons of gasoline annually.

  - ### [Stable Diffusion in Blender](https://github.com/neph1/blender-stable-diffusion-render)
		- A Blender addon for using Stable Diffusion to render texture bakes for objects.

  - ### [Dream Textures](https://github.com/carson-katri/dream-textures)
		- A Blender addon for applying textures with text prompts.

  - ## Prerequisites
		- Before beginning, ensure you have:
			- A modern web browser for testing your wallet.
			- A text editor or IDE (e.g., Visual Studio Code, Sublime Text) for writing and editing code.
			- Access to the internet to fetch resources and documentation from the Cashew GitHub repository.

			- ### New AI Model Releases
				- **GPT4-x-Alpaca-13B-Native-4bit-128g**: Technical discussions on the new model and its capabilities ([GitHub Discussion](https://github.com/oobabooga/text-generation-webui/discussions/727)).

  - # Unsorted Links
  - A bunch more GPTs [nerority/Advanced-GPTs: Showcase of my custom GPTs, featuring advanced workflows and operational logic. (github.com)](https://github.com/nerority/Advanced-GPTs)
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Create Your Own ChatGPT ChatBOT With ALL Your Business Content](https://customgpt.ai/)
  - [GPTZero Case Study (Exploring False Positives)](https://gonzoknows.com/posts/GPTZero-Case-Study/%22)
  - [Has ChatGPT or me been hacked? Ive never had these conversations..](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)
  - [Introducing ChatGPT](https://openai.com/blog/chatgpt)
  - [March | 2023 | Ars Technica](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%7D%7Barticle)
  - [Mintplex-Labs/anything-llm: Open-source ChatGPT equivalent experience for both open and close source LLMs, embedders, and vector databases. Supports unlimited documents, threads, and concurrent users and management all in a very clean UI.](https://github.com/Mintplex-Labs/anything-llm)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%7D%7BAnonymous)
  - [RadioGPT: 'World’s first' AI-driven radio station is here](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - [Scientists begin building AI for scientific discovery using tech behind ChatGPT](https://techxplore.com/news/2023-10-scientists-ai-scientific-discovery-tech.html)
  - [State of GPT | BRK216HFS](https://www.youtube.com/watch?v=bZQun8Y4L2A%22%3E)
  - [THE DECODER](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant/%7D%7BVoice)
  - [TheBloke/starchat-beta-GPTQ · Hugging Face](https://huggingface.co/TheBloke/starchat-beta-GPTQ)
  - [Using openai chat gpt to write stable diffusion prompts%22](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%22)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is ChatGPT? | OpenAI Help Center](https://help.openai.com/en/articles/6783457-chatgpt-general-faq%7D%7Bexplicit)
  - [Yhyu13/30B-Lazarus-gptq-4bit at main](https://huggingface.co/Yhyu13/30B-Lazarus-gptq-4bit/tree/main)
  - [Zain Kahn on LinkedIn: 1,000+ AI tools were released in March. ChatGPT is just the tip of the… | 345 comments](https://www.linkedin.com/posts/zainkahn_1000-ai-tools-were-released-in-march-activity-7048285306101358592-4wAA?amp%3Butm_medium=member_android%22%2F%3E)
  - [mckaywrigley/chatbot-ui: An open source ChatGPT UI.](https://github.com/mckaywrigley/chatbot-ui)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)
  - [ztjhz/BetterChatGPT](https://github.com/ztjhz/BetterChatGPT)
  - [#215 – Wojciech Zaremba: OpenAI Codex, GPT-3, Robotics, and the Future of AI](https://open.spotify.com/episode/6pIHwP4wxd9xYZAxvMS6I2?dl_branch=1&si=d41LWZ6CSWmbucGf-AasPQ)
  - [#367 – Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI](https://open.spotify.com/episode/6rAOusZcsuNtCv8mefmwND?nd=1&si=3a17aef004df4982)
  - [3D-GPT generates 3D worlds in Blender](https://the-decoder.com/3d-gpt-generates-3d-worlds-in-blender)
  - [6 Ways ChatGPT Code Interpreter Is Already Being Used](https://www.youtube.com/watch?v=1MM2nqVw8h8)
  - [Can GPT-3 AI write comedy?](https://robmanuelfuckyeah.substack.com/p/someone-needs-to-stop-me-playing)
  - [Carlos E. Perez on Twitter / X](https://twitter.com/IntuitMachine/status/1608690077139599360%7D%7Bchatgpt)
  - [ChatGPT political compass](https://www.gptoverflow.link/question/1519492600837443584/chatgpt-political-compass%7D%7Bpolitical)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Developer combines Stable Diffusion, Whisper and GPT-3 for a futuristic design assistant](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant)
  - [George Hotz: Tiny Corp, Twitter, AI Safety, Self-Driving, GPT, AGI & God | Lex Fridman Podcast #387](https://youtu.be/dNrTrx42DGQ?si=V6VtK4zWgeHbS8CP)
  - [Introducing GPT-Furr, Cat-GPT’s meowst sassy, all-knowing system.](https://www.cat-gpt.com/)
  - [Microsoft just announced a SURPRISE media event taking place tomorrow](https://www.windowscentral.com/microsoft/microsoft-surprise-event-chatgpt-openai-bing-2023)
  - [Narrative Manipulation: Convincing Chat GPT to Write a Python Program to Eradicate Humanity](https://zacdenham.com/blog/narrative-manipulation-convincing-gpt-chat-to-write-a-python-program-to-eradicate-humanity)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%22)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%7D%7BAnonymous)
  - [Prompt injection attacks against GPT-3](https://simonwillison.net/2022/Sep/12/prompt-injection)
  - [Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI | Lex Fridman Podcast #367](https://m.youtube.com/watch?feature=youtu.be%7D%7BSam&v=L_Guz73e6fw%5C)
  - [Stack Overflow bans ChatGPT as 'substantially harmful'](https://www.theregister.com/2022/12/05/stack_overflow_bans_chatgpt)
  - [Stephen Wolfram Answers Live Questions About ChatGPT](https://youtu.be/zLnhg9kir3Q%7D%7BStephen)
  - [Using openai chat gpt to write stable diffusion prompts%22](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%22)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is Auto-GPT? | Blog](https://stablecog.com/blog/what-is-auto-gpt)
  - [You can now run a GPT-3-level AI model on your laptop, phone, and Raspberry Pi](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%22)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)

  - # Advice on AI coding
  - **Choose Tools Strategically:** Not all AI coding tools are created equal. Select the right tool for the job, considering the project's scope and complexity:
  - **Complex Applications:** Cursor, Windsurf, or more established IDE integrations (see below) are often better suited for larger, more intricate projects.
  - **Micro-SaaS:** Bolt/Lovable are optimised for smaller, Software-as-a-Service applications.
  - **Mobile Applications:** Replit remains a good choice, alongside framework-specific tools.
  - **UI Design:** Consider using 'vo' or similar specialised tools for user interface design.
  - **General Coding Assistance & IDE Integration:**
		- **GitHub Copilot:** A widely used and powerful AI pair programmer that integrates directly into your IDE (VS Code, JetBrains IDEs, etc.).
		- **GitHub Copilot Agents:** Extend Copilot's capabilities with specialised agents for tasks like code review, debugging, and test generation.
		- **Aider:** A command-line tool that helps you write and edit code using GPT models. Good for making changes to existing codebases, particularly for refactoring and adding features.
		- **Roo**: Provides code generation and chat capabilities within your IDE.
		- **Cline:** Good for command line interfacing, and code assistance.
  - **Context is Paramount:** Always provide comprehensive context about your project. AI tools cannot "guess" your intentions. Use Markdown (.md) documents to detail:
  - **Product Requirements Document (PRD):** Clearly outlines the purpose, features, and functionality of the application.
  - **Technical Stack Document:** Specifies the programming languages, frameworks, libraries, and databases to be used.
  - **File Structure:** Defines the organisation of directories and files within the project.
  - **Frontend Guidelines:** Describes coding standards, styling conventions, and component structure for the user interface.
  - **Backend Structure:** Outlines the architecture, API endpoints, data models, and business logic for the server-side code.
  - **Use CodeGuide (or Similar):** Consider using CodeGuide or a similar tool to help generate and manage these AI-specific coding documents. This ensures compatibility across various AI tools and helps maintain a single source of truth.
  - **Incremental Development:** Avoid overly broad prompts like "build me an AirBNB clone." Instead, break down the project into manageable steps:
  - **Page by Page:** Develop the application one page at a time.
  - **Component by Component:** Within each page, build individual components sequentially.
  - **Limited Task Execution:** AI models typically perform best with a maximum of 3 concurrent tasks *per request*. Be mindful of this limitation, and break down larger tasks accordingly. Tools like Aider and Copilot Agents can help manage this complexity.
  - **Select AI-Friendly Technologies:** Certain technology stacks are better understood by current AI models:
  - **Web Applications:**
		- **React (with NextJS or ViteJS):** Provides excellent performance and is well-supported by AI tools.
		- **Python (with frameworks like Django or Flask):** Widely used and well-understood by AI models.
  - **Mobile Applications:**
		- **React Native:** A good choice for cross-platform development.
		- **SwiftUI (especially with Claude):** Works well, particularly with Claude models.
  - **Avoid Older Technologies**: Unless absolutely necessary, as AI model support may be limited.
  - **Utilise Starter Kits:** Save time and reduce token usage by starting with pre-built templates or boilerplates:
  - **Example:** The "CodeGuide NextJS Starter Kit" can provide a solid foundation.
  - **Benefit:** Accelerates workflow and provides a structured starting point. Most frameworks have readily available starter kits.
  - **Define Rules Within Your Tools:** Many AI coding tools allow project-specific rules:
  - **Examples:** .cursorrules (often "project rules"), .windsurfrules, or similar configuration files within your IDE or tool. Copilot and other IDE-integrated tools often have settings for coding style and preferences.
  - **Purpose:** Constrain the AI, preventing deviations from your guidelines and coding standards.
  - **Coding Standards**: Enforce coding standards using linters (e.g., ESLint for JavaScript, Pylint for Python) and integrate their configuration with your AI tools where possible.
  - **Employ a Multi-Tool Approach:** No single tool handles the entire workflow seamlessly. Combine tools:
  - **Research:** Perplexity.
  - **Brainstorming:** ChatGPT (voice features can be helpful).
  - **Documentation:** CodeGuide, or tools integrated within your IDE.
  - **Data Scraping:** Firecrawl, or libraries within your chosen language (e.g., Beautiful Soup in Python).
  - **Code Generation/Assembly/Refactoring:** Your chosen AI coding tool (Cursor, Windsurf, GitHub Copilot, Aider, Roo, Cline, etc.). Choose based on your workflow and project needs.
  - **Patience and Persistence:** Working with AI requires a specific mindset.
  - **Prompt Engineering:** Crafting effective prompts is crucial. Experiment with different phrasing and levels of detail.
  - **Expect Errors:** AI models are not perfect. Be prepared for errors.
  - **Iterative Refinement:** Stay focused, learn from mistakes, and iteratively refine your prompts and approach.
  - **Debugging**: Provide the AI with the full code and error message for assistance. Leverage Copilot Agents for debugging tasks.
  - **Version Control**
  - Use Git for version control.
  - Commit frequently with clear messages.
  - AI can help generate commit messages (Copilot, Aider, and others offer this).
  - **Testing**
  - Write unit and integration tests.
  - AI can assist in generating test cases (Copilot Agents are particularly useful here). Tools like Aider can help refactor code to improve testability.
  - [[Agent Frameworks]]

  - # Random Links
  - https://twitter.com/tldraw/status/1782443204710674571
  - {{twitter https://twitter.com/tldraw/status/1782443204710674571}}
  - [Paper page Design2Code: How Far Are We From Automating Front-End Engineering? (huggingface.co)](https://huggingface.co/papers/2403.03163)
  - [Generative AI Powered Assistant - Amazon Q - AWS](https://aws.amazon.com/q/)  Amazons!
  - [antworks.ai](https://antworks.ai/)
  - [OpenBMB/ChatDev: Create Customized Software using Natural Language Idea (through LLM-powered Multi-Agent Collaboration) (github.com)](https://github.com/OpenBMB/ChatDev)
  - [Programming AIs worry me • Buttondown:](https://buttondown.email/hillelwayne/archive/programming-ais-worry-me/)
  - [Home | Tabby (tabbyml.com)](https://tabby.tabbyml.com/)
  - The text discusses the concerns around using AI to generate code, specifically around the idea of proofreading the code. The author describes an experience with using voice-to-text where they found it difficult to proofread the text for errors. The text argues that using AI to generate code changes the work from writing code to proofreading code, and that this is a problem.
  - [Stop whining blog post](https://about.sourcegraph.com/blog/cheating-is-all-you-need)
  - [blog post on LLMs for code](https://evanthebouncy.github.io/program-synthesis-minimal/generation-with-llm/)
  - [Engshell shell LLM extension](https://github.com/emcf/engshell/tree/main)
  - [Github assist](https://useadrenaline.com/app)
  - [Locally run 13B coding optimised model](https://huggingface.co/ehartford/alpaca1337-13b-4bit/tree/main)
  - [Programming AIs worry me • Buttondown (other)](https://buttondown.email/hillelwayne/archive/programming-ais-worry-me/) The article discusses the ethical implications of using machine learning algorithms to generate art. While some see this as a powerful way to create new and interesting works of art, others worry about the potential for misuse and abuse of these technologies.
  - [GPT synthesizer](https://github.com/RoboCoachTechnologies/GPT-Synthesizer)
  - [Colab to get codey](https://www.techspot.com/news/98792-google-colab-soon-get-ai-code-generation-chatbot.html)
  - [Build prompts using coding keywords, paper](https://arxiv.org/abs/2305.06599v3)
  - [Continue for VSCode](https://github.com/continuedev/continue)
  - [Phind technical answers and pair programmer with vscode plugin](https://www.phind.com/)
  - [Starchat beta 4bit](https://huggingface.co/TheBloke/starchat-beta-GPTQ)
  - [Sweep github pull requests to code system](https://github.com/sweepai/sweep)
  - [Cursor.so coding with gpt interface](https://cursor.so)
  - [Code llama 2](https://ai.meta.com/blog/code-llama-large-language-model-coding/)
  - [Long llama](https://github.com/CStanKonrad/long_llama/blob/main/instruction_fine_tuning/LongLLamaCode7BInstruct.md)
  - [Open interpreter](https://openinterpreter.com/)
  - [Open interpreter and autogen local tutorial](https://www.youtube.com/watch?v=DXrpqsjNKbo)
  - [open interpreter github](https://github.com/KillianLucas/open-interpreter)
  - [codingbuddy](https://codebuddy.ca/)
  - [deepseek 34b q4 AWQ](https://huggingface.co/TheBloke/deepseek-coder-33B-instruct-AWQ)
  - [[Vercel]] provides front-end [[Infrastructure]] to allow developers to build fast, dynamic websites and applications efficiently at global scale. Its open source Next.js framework powers many leading AI products' user interfaces.
  - Vercel's new vZero product allows developers to visually iterate on UIs with AI assistance.
  - [Demo/Tutorial: v0 by Vercel AI Code Generation (youtube.com)](https://www.youtube.com/watch?v=gi5nnOqzHeQ)
  - AI code auto-completion tools like [[Microsoft Copilot]] have shown the potential for AI to enhance software development. The latest [[Microsoft Copilot]] leverages [[Instruction-Following Conversational AI System]] 4 and is extremely good.
  - AI will likely be incorporated into most software products going forward to enhance capabilities and engagement. Some experiences are better suited to standalone interfaces rather than cramming functionality into chatbots.
  - Effective use of AI tools requires developing specialized skills around prompting, understanding system capabilities and limitations, and framing problems appropriately. Different AI systems have strengths in different domains.
  - Software development will transition towards more hybrid human-AI teams, with less focus on writing code line-by-line. AI can provide significant productivity gains by automating rote tasks.
  - There are open questions around whether to expose functionality through general chatbot interfaces vs company-specific products. There are strategic and technical considerations favouring bespoke solutions.
  - Open source software tends to improve quickly over time and should not be underestimated. However, regulations could potentially suppress open source AI progress.
  - [gptengineer.app](https://gptengineer.app/) is a commercial offering built on [[GPT Engineer]]
  - [Understand a codebase in github with GPT](https://useadrenaline.com/app)
  - [Sourcegraph | Code AI platform](https://sourcegraph.com/)
  - [Bito AI
  - Become a 10X Dev with Bito
  - Bito](https://bito.ai/)
  - [Phind](https://www.phind.com/search?home=true)

			- ### Audio & Voice Generation
				- *Task:* Create voiceovers, audio content like podcasts, or clone voices for various applications.
				- **ElevenLabs**
					- *Description:* High-quality text-to-speech and voice cloning AI. Offers a library of voices (Community Voices), can create a synthetic version of your own voice, and provide audio narration for websites (Audio Native). Used for audiobooks, podcasts, voiceovers.
					- *Cost:* Free tier available. Paid plans based on character usage, starting around $5 USD/month.
					- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ElevenLabs](https://elevenlabs.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
				- **PlayHT**
					- *Description:* AI text-to-voice generator with a large library of voices and languages. Suitable for creating audiobooks, podcasts, and voiceovers.
					- *Cost:* Free plan available. Paid plans based on word count/features, starting around $30 USD/month (billed annually).
					- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[PlayHT](https://play.ht/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- ##### VRChat
			- none of this makes money yet
				- [#1394: Discussion about VRChat Layoffs & Paths to Profitability with Four Community Members – Voices of VR Podcast](https://voicesofvr.com/1394-discussion-about-vrchat-layoffs-paths-to-profitability-with-four-community-members/)
			- This text is from wikipedia and will be updated when we have a chance totry VRChat properly. It’s much loved already by the Bitcoin community.
			- “VRChat’s gameplay is similar to that of games such as Second Life andHabbo Hotel. Players can create their own instanced worlds in which theycan interact with each other through virtual avatars. A softwaredevelopment kit for Unity released alongside the game gives players theability to create or import character models to be used in the platform,as well as build their own worlds.
			- Player models are capable of supporting "audio lip sync, eye trackingand blinking, and complete range of motion.
			- VRChat is also capable of running in "desktop mode" without a VRheadset, which is controlled using either a mouse and keyboard, or agamepad. Some content has limitations in desktop mode, such as theinability to freely move an avatar’s limbs, or perform interactions thatrequire more than one hand.
			- In 2020, a new visual programming language was introduced known as"Udon", which uses a node graph system. While still considered alphasoftware, it became usable on publicly-accessible worlds beginning inApril 2020. A third-party compiler known as "UdonSharp" was developed toallow world scripts to be written in C sharp.”

		- ##### Vircadia
			- The applications and platforms detailed above have their benefits, butfor the application stack in the next section of the book Vircadia hasbeen chosen. The following text is from their website, and is aplaceholder which gives some idea. This section will be written outcompletely to reflect our use of the product to support emerging market users.
			- Vircadia is open-source software which enables you to create and sharevirtual worlds as virtual reality (VR) and desktop experiences. You cancreate and host your own virtual world, explore other worlds, meet andconnect with other users, attend or host live VR events, and much more.
			- The Vircadia metaverse provides built-in social features, includingavatar interactions, spatialized audio, and interactive physics.Additionally, you have the ability to import any 3D object into yourvirtual environment. No matter where you go in Vircadia, you will alwaysbe able to interact with your environment, engage with your friends, andlisten to conversations just like you would in real life.

  - # Foundation Models
  - Foundation models are large-scale, pre-trained models that can be adapted to a wide range of downstream tasks. They are trained on massive datasets of text and code and can be used for a variety of natural language processing (NLP) tasks, such as text generation, summarization, and question answering.

  - ### Animation: Breathing Life into Digital Characters
		- Bringing digital characters to life requires compelling animation. This section explores projects and resources focused on achieving realistic and expressive character movement.
			- * [Animatable Gaussians (GitHub Repository)](https://github.com/lizhe00/AnimatableGaussians/tree/master): Code for "Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling," presented at CVPR 2024.
			  * [3D Gaussian Blendshapes](https://gapszju.github.io/GaussianBlendshape/): Exploration of the use of 3D Gaussian Blendshapes for head avatar animation.
			  * [Eggnog](https://www.eggnog.ai/infinite): A platform for creating infinite AI videos.
			  * [Efficient Portrait Animation (LivePortrait)](https://liveportrait.github.io/): A project focused on efficient portrait animation with stitching and retargeting control.
			    * [Note by Daniele](https://primal.net/e/note1jcmsj7ls2fnueeqmg8t6cn4a7zpg53wxwgtmv47hpvurw40y8fdq4ylfc9): A note on LivePortrait by Daniele.
			    * [ComfyUI Nodes for LivePortrait (GitHub Repository)](https://github.com/kijai/ComfyUI-LivePortraitKJ?tab=readme-ov-file): ComfyUI nodes designed for LivePortrait.
			  * [CLARA2 (GitHub Repository)](https://github.com/0xMatthew/CLARA2): A 3D-rendered AI agent designed to present PowerPoint presentations.
			  * [Consistent Character API (Replicate)](https://replicate.com/fofr/consistent-character): An API for running fofr's consistent character model.
			  * [Joystick-Controlled Character Manipulation (Twitter)](https://x.com/JungleSilicon/status/1798457212291150189): A concept for manipulating character features using a joystick.
			  * [Volucap Authentic Digital Avatars](https://volucap.com/): A company specialising in creating authentic digital avatars.
			  * [Openpose Controlnets (Civitai Article)](https://civitai.com/articles/157/openpose-controlnets-v11-using-poses-and-generating-new-ones): An article explaining how to use and generate poses with Openpose Controlnets V1.1.
			  * [AI Modelling Agency (Creative Bloq Article)](https://www.creativebloq.com/news/ai-model-agency): An article discussing the emergence of AI modelling agencies.
			  * [Free VRChat Avatars & 3D Assets (VRCMods)](https://vrcmods.com/): A collection of free VRChat avatars and 3D assets.
			  * [AniTalker](https://x-lance.github.io/AniTalker/): A project focused on animating talking heads.
			  * [VLOGGER](https://enriccorona.github.io/vlogger/): A project related to creating virtual vloggers.
			  * [StoryDiffusion](https://storydiffusion.github.io/): A project exploring consistent self-attention for long-range image and video generation.
			  * [SoccerNet Game State Reconstruction (GitHub Repository)](https://github.com/SoccerNet/sn-gamestate): A project focusing on athlete tracking and identification on a minimap.
			  * [Ukraine's AI Avatar for Consular Affairs (Reddit Post)](https://www.reddit.com/r/singularity/comments/1chhgd3/ukraines_ministry_of_foreign_affairs_annonced/): A discussion on Ukraine's use of an AI avatar for consular updates.
			  * [Animating Images with Viggle AI (YouTube Tutorial)](https://www.youtube.com/watch?v=jMVTljPXVVo&t=75s): A tutorial on animating images using Viggle AI.
			  * [PhysAvatar (Hugging Face Paper)](https://huggingface.co/papers/2404.04421): Research on learning the physics of dressed 3D avatars from visual observations.
			  * [Vid2Avatar](https://moygcc.github.io/vid2avatar/): A project focused on reconstructing 3D avatars from videos.
			  * [Human Tracking and SLAM Capture (YouTube Video)](https://youtu.be/u9Z8CK561_Y?t=2057): A demonstration of human tracking and SLAM capture technology.
			  * [ComfyUI Character Turntable with SV3D (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1bme62y/comfyui_creating_a_character_turntable_with_sv3d/): A discussion on creating character turntables using ComfyUI and SV3D.
			  * [Animating Characters for Free (LinkedIn Post)](https://www.linkedin.com/posts/jacques-alomo_animate-any-character-now-for-free-activity-7177666734957420544-N7v9/?utm_source=share&utm_medium=member_android): A post highlighting methods for animating characters for free.
			  * [Midjourney Character Reference Feature (Medium Article)](https://degennfts.medium.com/new-midjourney-feature-character-reference-oppenheimer-example-906750d53d3f): An article exploring Midjourney's Character Reference feature.
			  * [Full-Character Consistency with SDXL (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1azn5lq/an_attempt_at_full-character_consistancy_sdxl/): A discussion on achieving full-character consistency using SDXL.
			  * [Create Bot Emotions (Miku.gg Documentation)](https://docs.miku.gg/guides/bots/create-bot-emotions/): Documentation on creating bot emotions within the Miku.gg platform.
			  * [Consistent Emotions on a Character with ComfyUI (Reddit User)](https://www.reddit.com/user/iwantofftheride00/): A Reddit user's plans to publish a method for achieving consistent emotions on a character using ComfyUI.
			  * [BakedAvatar](https://buaavrcg.github.io/BakedAvatar/): A project focused on avatar creation.
			  * [Dreamtalk (GitHub Repository)](https://github.com/ali-vilab/dreamtalk): The official implementation of Dreamtalk, focusing on expressive talking head generation.
			  * [CharTurnerBeta LoRA (Civitai)](https://civitai.com/models/7252/charturnerbeta-lora-experimental): A LoRA for multi-direction consistency in Stable Diffusion character generation.
			  * [VividTalk](https://humanaigc.github.io/vivid-talk/): A project focused on one-shot audio-driven talking head generation.
			  * **Gaussian-Based Avatars (Hugging Face Papers):**
			    * [Relightable Gaussian Codec Avatars](https://huggingface.co/papers/2312.03704): Research on using Gaussian codecs for avatar representation.
			    * [Gaussian Head Avatar](https://huggingface.co/papers/2312.03029): Research on creating high-fidelity head avatars using dynamic Gaussians.
			  * [NLW Education Discord Projects (Discord Channel)](https://discord.com/channels/1181054284528373761/1181055410950647838): A Discord channel discussing projects related to ElevenLabs and character/avatar creation.
			  * [D-ID AI Video Mobile App](https://www.d-id.com/creative-reality-studio-mobile-app/): A mobile app for creating AI videos.
			  * [GAIA (Microsoft)](https://microsoft.github.io/GAIA/): A project from Microsoft exploring advanced avatar technologies.

			  This meticulously curated collection offers a comprehensive overview of the dynamic field of digital human and avatar creation. Explore, learn, and contribute to the ongoing evolution of this exciting frontier!

			  **Note:** Some links may lead to projects or resources that are still under development or experimental. Remember to review any licensing information before using code or assets from these projects.

  - ### Logseq
		- **Logseq**: is very similar to Obsidian, but self hosted and open source. It works on top of plain text files stored in a local system. It supports markdown and Org-mode formatting and allows for hierarchical and networked note-taking. It can be connected to it's mobile app via github.
		- Integration to [[Large Language Models]] can be OpenAI or local.
			- Compare notion, obsidian, and logseq, using a simply markdown table with coloured dots
		- [ChatGPT Logseq Summarizer (openai.com)](https://chat.openai.com/g/g-3ooWV51Sb-logseq-summarizer)
		- ![Screenshot 2024-01-06 120253.png](assets/Screenshot_2024-01-06_120253_1706020225813_0.png)
		- ![Screenshot 2024-01-18 103043.png](assets/Screenshot_2024-01-18_103043_1706020238116_0.png)
		- ![Screenshot 2024-01-18 102807.png](assets/Screenshot_2024-01-18_102807_1706020247381_0.png)

  - ### Key LLM Papers

	  **GPT-1 (2018):** This paper introduces the first version of Generative Pre-trained Transformer (GPT), a generative model trained on a massive dataset of text. It demonstrates the ability of LLMs to generate coherent and grammatically correct text, paving the way for future advancements.

	  **GPT-2 (2019):** This paper presents a significantly larger GPT model with improved capabilities. It showcases the ability of LLMs to perform various language tasks, including text summarization, question answering, and even code generation.

	  **GPT-3 (2020):** This paper introduces GPT-3, a truly massive LLM with billions of parameters. It demonstrates impressive capabilities in diverse tasks, showcasing the emergence of general-purpose language abilities.

	  **GPT-4 (2023):** This paper introduces the latest iteration of GPT, featuring multi-modal capabilities and advanced reasoning abilities. It further pushes the boundaries of what LLMs can achieve, demonstrating impressive performance in a wide range of tasks.

	  **Llama-2 (2023):** This paper introduces Llama-2, a large language model designed with a focus on efficiency and accessibility. It offers a more resource-friendly alternative to other LLMs, making it more accessible for research and development.

	  **Tools (2023):** This paper introduces the "Tools" paradigm for LLMs, allowing them to interact with external tools and resources. It enables LLMs to perform more complex tasks by leveraging the power of external tools, expanding their capabilities significantly.

	  **Gemini-Pro-1.5 (2023):** This paper introduces Gemini-Pro-1.5, a large language model developed by Google. It showcases impressive capabilities in various tasks, including code generation, creative writing, and reasoning. It's a strong contender in the race for developing advanced LLMs.

			- #### Generative Models for Molecule Design
				- Generative models based on diffusion and flow-matching approaches enable fine-grained control over the generation of molecules with specific properties. ProteinDT and MoleculeSTM are examples of text-conditioned generative models that allow users to provide natural language prompts to generate molecules with desired properties.
				- RF Diffusion, a diffusion model built on the RoseTTAFold backbone, offers powerful functionalities for protein engineering. It enables unconditional generation of novel proteins, binder design for high affinity and specificity, partial diffusion for refining existing structures, motif scaffolding for combining functional motifs, symmetric generation of protein complexes, and fold conditioning for generating proteins with specific tertiary structures.
				- Complementary models like Ligand and PNN (Protein MPNN) are essential for designing amino acid sequences that fold into the desired 3D structures generated by RF Diffusion.

  - ## Some software choices
		- It is possible at this stage to put more flesh on the bones through example software stack choices. Such specificity likely introduces overlaps, technical challenges, and contradictions, but has been generated in the main by GenAI based on the wider corpus of text and demonstrates the direction of travel well.


  - #Public page automatically published
  - proprietary
  - OpenAI's Sora model represents a notable advancement in AI video generation. It demonstrates the ability to generate videos up to one minute in 1080p resolution and produce high-resolution images. Sora's flexibility in handling various aspect ratios and resolutions indicates its adaptability in content creation. Its development leverages insights from prior research, including Vision Transformers and advanced training methodologies.
  - {{video https://www.youtube.com/watch?v=GqsCMPWaYac}}
  - **Introduction to Sora**
		- A groundbreaking AI video generation model by OpenAI, Sora is designed to transform text instructions into realistic and imaginative video scenes, marking a significant advancement in creative AI technologies.
  - **Technical Overview**
		- **Advanced Diffusion Model**
			- Employs a sophisticated diffusion process that starts from static noise and incrementally refines to generate high-resolution videos, showcasing an unparalleled leap in video realism and complexity.
		- **Transformer Architecture**
			- Leverages the Transformer model's capabilities for deep understanding and generation of content, adapted here to interpret and create complex visual narratives, ensuring dynamic and coherent video storytelling.
			- [twitter link to the render loading below](https://twitter.com/sainingxie/status/1758433676105310543)
			  {{twitter https://twitter.com/sainingxie/status/1758433676105310543}}
			- [twitter link to the render loading below](https://twitter.com/thatguybg/status/1759935959792312461)
			  {{twitter https://twitter.com/thatguybg/status/1759935959792312461}}
			- **Patch-Based Data Representation**
				- Innovatively represents videos and images as collections of smaller data units, akin to language model tokens, enabling precise and granular control over video generation and editing.
  - {{twitter https://twitter.com/drjimfan/status/1758355737066299692?s=46}}
  - **Creative and Professional Applications**
		- Opens up endless possibilities for filmmakers, advertisers, educators, and content creators to produce cinema-quality visuals, educational materials, and immersive experiences effortlessly.
  - **Democratization of Video Production**
		- Simplifies the video creation process, enabling individuals and small teams to produce content that rivals big studio outputs.
  - **Enhancement of Creative Expression**
		- Allows creators to bring intricate visions and stories to life through simple text prompts, expanding visual storytelling horizons.
  - **Technical Insights**
		- Designed to scale language model capabilities to visual data, converting videos into patches for efficient processing and diverse video/image handling.
		- Features a video compression network for temporal and spatial video compression, operating within a [[Neural Network Latent Space]].
		- Uses a diffusion transformer architecture, effectively scaling video generation and improving sample quality with increased compute.
  - **Innovative Features**
		- Works with videos at native sizes to offer sampling flexibility and improve composition and framing.
		- Leverages descriptive captioning technique, enhancing video fidelity and quality from text prompts.
		- Can animate still images and extend videos, including seamless interpolation between two videos, showcasing versatility.
  - **Emerging Capabilities**
		- Exhibits capabilities like 3D consistency, long-range coherence, object permanence, and world interaction simulation.
		- Suggests potential as a tool for simulating physical and digital environments, aiding in the development of capable simulators.
		- Videos can serve as a basis for constructing detailed 3D scenes using techniques like Neural Radiance Fields (NeRFs), potentially revolutionizing 3D content creation and interaction.
		- Rapid prototyping and realization of 3D environments and narratives enhance VR and AR immersion and interactivity.
		- Enables generation of characters, objects, and worlds through text and voice prompts, making 3D content creation more intuitive and accessible.
		- Already being used to create 360 spherical video.
  - **Research and Discussion**
		- [Video generation models as world simulators (openai.com)](https://openai.com/research/video-generation-models-as-world-simulators) research paper highlights Sora's technical foundation and its role in simulating the physical world.
		- Discussions emphasize Sora's potential in democratizing video creation and the need for granular output control for artistic purposes.
  - [Google DeepMind on X: "Introducing Veo: our most capable generative video model. 🎥 It can create high-quality, 1080p clips that can go beyond 60 seconds. From photorealism to surrealism and animation, it can tackle a range of cinematic styles. 🧵 #GoogleIO https://t.co/6zEuYRAHpH" / X (twitter.com)](https://twitter.com/GoogleDeepMind/status/1790435824598716704)
  - {{twitter https://twitter.com/GoogleDeepMind/status/1790435824598716704}}

  - ### [VideoPoet – Google Research](https://sites.research.google/videopoet/)
		- **Overview:** Google's text to video, linked to Bard, but not yet available.


  - #Public page automatically published
  - {{video https://www.youtube.com/watch?v=xCDAjpZJWYw}}
  - [NVIDIA/NeMo: NeMo: a toolkit for conversational AI (github.com)](https://github.com/NVIDIA/NeMo)
  - [Canary
		- NVIDIA NeMo](https://nvidia.github.io/NeMo/blogs/2024/2024-02-canary/)
  - ![H200-NeMo-performance](https://github.com/sbhavani/TransformerEngine/raw/main/docs/examples/H200-NeMo-performance.png)
  - [NeMo/tutorials/tts/FastPitch_Adapter_Finetuning.ipynb at main · NVIDIA/NeMo (github.com)](https://github.com/NVIDIA/NeMo/blob/main/tutorials/tts/FastPitch_Adapter_Finetuning.ipynb)
  - [ElevenLabs Audio Native](https://elevenlabs.io/blog/audio-native/)
  - [OpenAI whisper local deploy](https://github.com/openai/whisper)
  - [realtime transciber](https://github.com/davabase/transcriber_app/)
  - [high performance CPP](https://github.com/ggerganov/whisper.cpp)
  - [30% quantised optimisation](https://medium.com/@daniel-klitzke/quantizing-openais-whisper-with-the-huggingface-optimum-library-30-faster-inference-64-36d9815190e0)
  - [Brillbits OpenAI whisper demo with mic](https://www.youtube.com/watch?v=nwPaRSlDSaY)
  - [Cleanvoice audio denoise](https://cleanvoice.ai/)
  - [Cloud voice change app](https://voice.ai/)
  - [downloadable voice generation systems](https://github.com/neonbjb/tortoise-tts)
  - [Language AI open libraries](https://txt.cohere.ai/introducing-sandbox-coheres-experimental-open-source-initiative/)
  - [Language practice](https://huggingface.co/spaces/JavaFXpert/Chat-GPT-LangChain)
  - [MUGEN multi modal from facebook](https://mugen-org.github.io/)
  - [Oneshot speach to text](https://atosystem.github.io/blogs/speechclip)
  - [Record and cleanup pro audio with commodity hardware](https://podcastle.ai/)
  - [Respeecher](https://variety.com/2022/digital/news/james-earl-jones-darth-vader-retiring-star-wars-ai-1235382827/)
  - [Voice AI voices](https://voice.ai/)
  - [Voice controlled assisted creation](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant/)
  - [Voice to text, Lopp](https://blog.lopp.net/open-source-transcription-software-comparisons/)
  - [whisper transcriber](https://github.com/modal-labs/modal-examples/tree/main/misc/whisper_pod_transcriber)
  - [Wolfram alpha voice chatbot integration](https://huggingface.co/spaces/JavaFXpert/Chat-GPT-LangChain)
  - [Microsoft Vall-E voice synthesis](https://valle-demo.github.io/)
  - [Uberduck text to speech (plus own voice)](https://app.uberduck.ai/)
  - [Eleven labs language and text to speech](https://beta.elevenlabs.io/)
  - [Uberduck open source text to speech](https://uberduck.ai/)
  - [numen voice control system in linux](https://numenvoice.com)
  - [Inworld (steam game plugin AI system) for voice chat and answer](https://www.youtube.com/watch?v=DnF4WzM5LPU)
  - [Bark text to speech from google labs](https://github.com/suno-ai/bark)
  - https://github.com/TensorSpeech/TensorFlowTTS
  very configurable from what I see
  - [VoiceVox engine](https://www.youtube.com/watch?v=TGZV831VTpc)
  - [coqui-ai TTS
  - very good samples](https://github.com/coqui-ai/TTS)
  - https://github.com/neonbjb/tortoise-tts
  - https://github.com/CorentinJ/Real-Time-Voice-Cloning
  - custom voices? looks neat
  - https://github.com/rhasspy/larynx - very low-spec compatible, acceptable quality
  - [Voice cloning local](https://git.ecker.tech/mrq/ai-voice-cloning)
  - [Meta voicebox](https://ai.facebook.com/blog/voicebox-generative-ai-model-speech/)
  - The Reddit post discusses the different open source voice cloning projects available, including Coqui, Tortoise, and Bark. The advantages and disadvantages of each project are briefly outlined, with ElevenLabs being noted as the best but not open source, while Tortoise is suggested as the closest open source alternative. Other tools for speech to speech and singing conversion, such as so-vits/diff-svc/rvc, are also mentioned. The post suggests that the quality of open source voice cloning projects is improving, and that there may be more options available in the future. https://www.reddit.com/r/MachineLearning/comments/133hanr/d_what_are_the_differences_between_the_major_open/
  - The Retrieval-based Voice Conversion WebUI is a simple and useful voice conversion (voice changer) framework based on the VITS algorithm. It can use a small amount of voice data and still achieve good results. It incorporates a top-1 retrieval method to replace the source feature with the training set feature to avoid voice leakage, and it is easy to use with a simple web interface. It also features model fusion to change voice characteristics and the ability to integrate with the UVR5 model to quickly separate vocals and accompaniment. The project requires the installation of PyTorch and its core dependencies, and other pre-models are also needed for inference and training. The repository provides a guide to environment setup and usage, as well as links to relevant resources and contributors. https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
  - The article discusses different open-source voice cloning projects and their advantages and disadvantages. The projects mentioned include Coqui, Tortoise, and Bark, with the author highlighting Coqui's unlocked platform, while Tortoise and Bark are newer transformer-based projects that can clone much more effectively with much less training and are restricted to prevent custom voice cloning. The author suggests that the ElevenLabs is currently the best voice cloning solution available, but it is not open source and can be expensive. The article also includes comments from other Reddit users, who suggest other open source options and provide additional insights into each option's strengths and weaknesses. https://www.reddit.com/r/MachineLearning/comments/133hanr/d_what_are_the_differences_between_the_major_open/
  - The article provides instructions on how to use OpenAI's ChatGPT chatbot on an Android device using the Tasker app. The process involves importing a ChatGPT profile into Tasker, obtaining an API key from OpenAI, and setting up home screen shortcuts. The article also notes that ChatGPT can be run through Google Assistant with voice commands. The author suggests that while ChatGPT may not necessarily be better than Google Assistant, it can perform tasks that Google Assistant may not be capable of. https://www.howtogeek.com/882019/how-to-use-chatgpt-like-google-assistant-on-android/
  - The Voice Assistant is an AI-powered chatbot that uses several APIs to understand natural language commands and provide helpful responses. It features a wide range of capabilities, including answering general knowledge questions, providing recommendations, performing productivity tasks, and entertaining users. The Voice Assistant was built using ChatGPT, Whisper API, Gradio, and Microsoft's SpVoice TTS API, and it can be accessed through a web-based interface. The installation process involves cloning the repository and installing the required Python packages. Contributions to the project are welcome. https://github.com/DonGuillotine/chatGPT_whisper_AI_voice_assistant
  - The Retrieval-based Voice Conversion WebUI is a voice conversion framework that uses a top-1 retrieval algorithm to eliminate voice leakage. It is capable of quickly training even on relatively poor GPUs and can achieve good results even with just 10 minutes of low noise voice data. It has a user-friendly web interface and the ability to use a model fusion system to change voice timbre. The setup recommends using Poetry and downloading the necessary pre-trained models from their Hugging Face space. It also includes additional files such as ffmpeg and ffprobe that may need to be downloaded. The WebUI can be initiated using the command "python infer-web.py" and Windows users can run the "go-web.bat" file. The project also acknowledges the contributions of related tools and libraries such as Gradio, HIFIGAN, and ContentVec. https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
  - VoicePen is a tool that uses AI to convert audio or video files into blog posts and transcriptions in minutes. The service includes a transcription and SRT file generated by a top speech-to-text model, an English blog post that pulls out key topics from the audio, and the ability to convert audio in 96 different languages. Use cases include repurposing podcasts, webinars, and tutorial videos. Monthly plans are available, with options for one-time conversions. Testimonials praise the accuracy and speed of VoicePen's service. https://voicepen.ai
  - Krisp is a software application designed to improve the productivity of online meetings by using AI-powered voice clarity and a meeting assistant to cancel background noise, echo, and accent localization. It works on both Mac and Windows platforms and processes only the user's voice on their device, unlike other solutions that transmit voice over the internet. Krisp offers a free forever plan with no credit card required and is trusted by global brands. The insights gathered from calls can be viewed by the user to improve their communication skills over time. Krisp has received recognition from various prestigious awards such as America's Most Promising AI Companies and has been awarded for its quality of support and ease of use. Krisp also offers SDK for developers, pricing and plans, and use cases such as contact centers and enterprise. The company prioritizes customers' privacy, security and offers accessible support, including video tutorials and a help center. By accepting all cookies, users consent to the storing of cookies on their device to enhance site navigation, analyze site usage and assist in the company's marketing efforts. https://krisp.ai/
  - Cleanvoice AI is an artificial intelligence platform that assists users in editing their podcasts or audio recordings. The platform offers various features such as filler sound removal, mouth sound removal, stutter removal, and Deadair remover to make the audio recording more professional. Cleanvoice AI is multilingual and can detect filler sounds in multiple languages, including accents from various countries. The platform also allows for manual editing with assistance and offers tools like podcast mixing and background noise remover. Users can try Cleanvoice AI for free for 30 minutes without providing credit card details. However, users must accept the platform's cookie policy to use the service. https://cleanvoice.ai/
  - The article discusses the potential of Central Intelligent Agents (CIAs) and the role of large language models (LLMs) and other next-generation AI technologies in enabling them. It highlights the need for businesses to have a cross-functional team, ethical guidelines, and clear objectives in deploying their own CIA. The article also suggests steps to build a solid foundation for deploying a CIA, assess organizational readiness, assemble a cross-functional team, define objectives, develop the CIA components and evaluate its performance while continuing to learn and adapt. The author discusses the potential of AI tools and voice assistants in transforming the way businesses interact with their customers and suggests that the advent of advanced AI technologies has revolutionized the shift of businesses towards a more personalized and ethically responsible approach to engaging with their customers. Finally, the article ends by highlighting the importance of experimenting through crisis and providing expert guidance tailored to specific business needs. https://www.linkedin.com/pulse/central-intelligent-agent-enabling-next-generation-james-poulter?
  - [TensorSpeech/TensorFlowTTS: :stuck_out_tongue_closed_eyes: TensorFlowTTS: Real-Time State-of-the-art Speech Synthesis for Tensorflow 2 (supported including English, French, Korean, Chinese, German and Easy to adapt for other languages)](https://github.com/TensorSpeech/TensorFlowTTS) [[Translation]] [[Accessibility]] [[Speech and Voice]] [[Speech and Voice]]
  - [Variety](https://variety.com/2022/digital/news/james-earl-jones-darth-vader-retiring-star-wars-ai-1235382827/%7D%7BRespeecher%7D) [[Speech and Voice]] [[Employment Social Contract Under Automation]]
  - [transcriptionstream/transcriptionstream: turnkey self-hosted offline transcription and diarization service with llm summary (github.com)](https://github.com/transcriptionstream/transcriptionstream) [[Speech and Voice]] transcription locally [[RFC 2119 SHOULD Normative Keyword]]
  - [Tincans - Gazelle v0.2](https://tincans.ai/slm3) [[Speech and Voice]] fast speech engine [[RFC 2119 SHOULD Normative Keyword]]
  - [[Speech and Voice]] [Open Voice (myshell.ai)](https://research.myshell.ai/open-voice) cloning MIT license
  - [EndlessDreams: Voice directed real-time videos at 1280x1024 : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1c8oea6/endlessdreams_voice_directed_realtime_videos_at/) [[Speech and Voice]] [[Speech and Voice]] [[Product Design]] [[Real Time]]
  - https://demo.hume.ai/? [[Speech and Voice]] [[Large Language Models]] empathetic voice to voice
  - [[Speech and Voice]] [metavoiceio/metavoice-src: AI for human-level speech intelligence (github.com)](https://github.com/metavoiceio/metavoice-src) check for [[PlayerTwo]]
  - [NeMo/tutorials/tts/NeMo_TTS_Primer.ipynb at main · NVIDIA/NeMo (github.com)](https://github.com/NVIDIA/NeMo/blob/main/tutorials/tts/NeMo_TTS_Primer.ipynb) [[NVIDIA Omniverse Platform]] [[Speech and Voice]] primer and demo.

  - ### Birme image resizer
		- [2 hour tutorial](https://www.youtube.com/watch?v=Bdl-jWR3Ukc&t=34)
		- [inject your face into any model (dreambooth)](https://www.youtube.com/watch?v=s25hcW4zq4M)
		- [Guide for dreambooth](https://github.com/nitrosocke/dreambooth-training-guide)
		- [Shivram](https://github.com/ShivamShrirao/diffusers/tree/main/examples/dreambooth)
		- [Progen photorealism Miro guide](https://miro.com/app/board/uXjVPzJyAtU=/)
		- [rare dreambooth tokens](https://github.com/2kpr/dreambooth-tokens)
		- [Multi subject tokens](https://medium.com/@yushantripleseven/using-captions-with-dreambooth-joepenna-dreambooth-716f5b9e9866)
		- [tag editor](https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor)
		- [SDXL dreambooth](https://medium.com/@yushantripleseven/dreambooth-training-sdxl-using-kohya-ss-windows-7d2491460608)
		- [Lora guide](https://civitai.com/articles/1771)
		- [stable swarm distributed comfyui](https://github.com/Stability-AI/StableSwarmUI)
		- [Textual inversion](https://www.reddit.com/r/StableDiffusion/comments/10gs4s2/new_expert_tutorial_for_textual_inversion_text/)
		- [Img2Img guide from reddit for face mapping](https://www.reddit.com/r/StableDiffusion/comments/xgurs3/testing_img2img_batch_processing_i_convert_this/)
		- [textual inversion cheaper training](https://github.com/rinongal/textual_inversion)
		- [CIO blog post](https://danieljeffries.substack.com/p/the-turning-point-for-truly-open?sd=pf)
		- [google stable diffusion](https://www.youtube.com/watch?v=lHcPtbZ0Mnc)
		- [Cross attention replace named items](https://github.com/bloc97/CrossAttentionControl)
		- [256 x faster speedup](https://the-decoder.com/stable-diffusion-could-soon-generate-images-much-faster/)
		- [VoltaML acceleration](https://github.com/VoltaML/voltaML-fast-stable-diffusion)
		- [Depth map into blender from SD2](https://www.youtube.com/watch?v=AeDngG9kQNI)
		- [midjourney tweaks](https://www.reddit.com/r/StableDiffusion/comments/z622mp/trained_midjourney_embedding_on_stable_diffusion/)
		- [and another](https://civitai.com/models/1253/anthro)
		- [Updates Pastebin](https://rentry.org/sdupdates3)
		- [Game development using SD](https://www.heroo.ai/)
		- [Wildcard manager using ChatGPT](https://github.com/mattjaybe/sd-wildcards)
		- [Depth2Img for text](https://www.reddit.com/r/StableDiffusion/comments/10c9kg8/depth2img_works_well_for_text_inputs/)
		- [train chat GPT to write prompts](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts)
		- [non destructive image manipulation using seeds](https://www.reddit.com/r/StableDiffusion/comments/10no6tp/non_destructive_image_variation_in_text2image/)
		- [Instruct pix2pix](https://www.reddit.com/r/StableDiffusion/comments/10l74sl/instruct_pix2pix_is_amazing_inpaintingimg2img/)
		- [reddit post](https://www.reddit.com/r/StableDiffusion/comments/10tjzmf/instructpix2pix_is_built_straight_into_the/)
		- [Attention heatmap for prompts (youtube)](https://www.youtube.com/watch?v=XiKyEKJrTLQ)
		- [enormous link roundup](https://rentry.org/RentrySD/)
		- [Prompt master variations management](https://github.com/hoblin/prompt-master)
		- [panoramic world builder](https://huggingface.co/congazverse/worldBuilder)
		- [GitHub AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin: A user-friendly plug-in that makes it easy to generate stable diffusion images inside Photoshop using Automatic1111-sd-webui as a backend.](https://github.com/abdullahalfaraj/auto-photoshop-stablediffusion-plugin)
		- [GitHub ashawkey/stable-dreamfusion: A pytorch implementation of text-to-3D dreamfusion, powered by stable diffusion.](https://github.com/ashawkey/stable-dreamfusion)
		- [Fine tune stable diffusion](https://github.com/nitrosocke/dreambooth-training-guide/blob/main/readme.md#how-to-fine-tune-stable-diffusion-20)
		- [GitHub Sanster/lama-cleaner: Image inpainting tool powered by SOTA AI Model. Remove any unwanted object, defect, people from your pictures or erase and replace(powered by stable diffusion) any thing on your pictures.](https://github.com/sanster/lama-cleaner)
		- [holovolo immersive volumetric VR180 videos and photos, and 3D stable diffusion, for Quest and WebVR](https://holovolo.tv)
		- [The Illustrated Stable Diffusion Jay Alammar Visualizing machine learning one concept at a time.](https://jalammar.github.io/illustrated-stable-diffusion/)
		- [reddit educational links](https://www.reddit.com/r/StableDiffusion/comments/116ki29/comment/j97jac3/)
		- [Negative prompt hack tip](https://www.reddit.com/r/StableDiffusion/comments/11pcsxe/just_discovered_a_useful_trick_for_getting_good/)
		- [Modify images with text](https://github.com/justinpinkney/stable-diffusion/blob/main/notebooks/imagic.ipynb)
		- [Photorealism](https://www.reddit.com/r/StableDiffusion/comments/11u2p0u/lazy_guide_to_photorealistic_images/)
		- [sdtools image v 1.6](https://www.reddit.com/r/StableDiffusion/comments/127gck9/sdtools_v16/)
		- [Character plugin](https://github.com/alexv0iceh/AutoChar)
  - [[Checkpoints]]
		- [Stability specific tools](https://sdtools.org/)
		- Arible Prompt Database https://www.arible.co/prompts
		- [[Guide] Make your own Loras, easy and free | Stable Diffusion Other | Civitai: You don't need to download anything, this is a guide with online tools. Click "Show more" below.](https://civitai.com/models/22530)
		- [sdxl lora training](https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-And-Use-Kohya-GUI-And-Do-Ultra-Realistic-SDXL-Training-Tutorial.md)
		- [dylora scripts](https://github.com/facebookresearch/dadaptation/issues/24)
		- [kohya fork with scripts](https://github.com/bmaltais/kohya_ss#about-sdxl-training)
		- [lora of loras (compressed sets)](https://huggingface.co/FFusion/400GB-LoraXL/tree/main)
		- [chart of print size aspect ratios](https://www.reddit.com/r/StableDiffusion/comments/10wqv7r/when_it_comes_to_printing_converting_resolutions/)
		- [SDXL native text lora](https://civitai.com/models/176555/harrlogos-xl-finally-custom-text-generation-in-sd)
		- [SDXL lcm motion lora](https://huggingface.co/latent-consistency/lcm-lora-sdxl)
		- SDXL universal negative prompt
			- text, watermark, low-quality, signature, moiré pattern, downsampling, aliasing, distorted, blurry, glossy, blur, jpeg artifacts, compression artifacts, poorly drawn, low-resolution, bad, distortion, twisted, excessive, exaggerated pose, exaggerated limbs, grainy, symmetrical, duplicate, error, pattern, beginner, pixelated, fake, hyper, glitch, overexposed, high-contrast, bad-contrast
		- [SDXL prodigy training guide](https://civitai.com/articles/1022)
		- [Lora training interface for windows](https://github.com/bmaltais/kohya_ss)
		- [Refined model](https://civitai.com/models/8392/refined)
		- [Fine tuning with captioning and other fine tuning tricks, followfox](https://substack.com/profile/110613456-followfoxai)
		- [Negative embedding textual inversion for hands etc](https://huggingface.co/datasets/Nerfgun3/bad_prompt)
		- [GitHub kpthedev/ez-text2video: Easily run text-to-video diffusion with customized video length, fps, and dimensions on 4GB video cards, as well as on CPU.](https://github.com/kpthedev/ez-text2video)
		- [Gligen grounding capability for sd1.5](https://gligen.github.io/)
		- [This repository contains a ComfyUI Extension for Automated Text Generation. The extension provides nodes which can be used to automate the text generation process. The goal is to build a node-based Automated Text Generation AGI. This extension should ultimately combine all of the features of the existing text generation tools into one tool.](https://github.com/xXAdonesXx/NodeGPT)
		- [[R] Text-to-image Diffusion Models in Generative AI: A Survey: r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/12ehcez/r_texttoimage_diffusion_models_in_generative_ai_a/)
		- [Tutorial: Creating a Consistent Character as a Textual Inversion Embedding](https://github.com/BelieveDiffusion/tutorials/discussions/3)
		- [Segment anything webui](https://www.reddit.com/r/StableDiffusion/comments/12hkdy8/sd_webui_segment_everything/)
		- [segment anything training](https://github.com/NielsRogge/Transformers-Tutorials/tree/master/SAM)
		- [Nvidia stable diffusion segment through clip](https://github.com/NVlabs/ODISE)
		- [Overriding iphone footage with SD characters using controlnet](https://www.reddit.com/r/StableDiffusion/comments/12lg8mn/override_more_experiments_overriding_the_original/)
		- [Interactive photo manipulation GAN](https://huggingface.co/papers/2305.10973)
		- [3d plugin for Automatic1111](https://github.com/jtydhr88/sd-webui-3d-editor)
		- [Face replace plugin for automatic](https://github.com/Gourieff/sd-webui-roop-nsfw)

  - ## Renderings from Plan Drawings
		- **Vectorworks AI Visualizer** ([FAQ](https://forum.vectorworks.net/index.php?/articles.html/articles/faqs/ai-visualizer/))
			- Works inside Vectorworks 2024+, using your active file or view plus a text prompt.
			- Ideal for quick concept iterations (materials, lighting variations).
			- Note: not CAD-accurate rendering but excellent for inspirational visuals.
		- **Veras AI for Vectorworks** ([EvolveLAB announcement](https://www.evolvelab.io/post/announcing-veras-ai-for-vectorworks))
			- Plugin that uses your 3D model or 2D viewport as a base.
			- Photorealistic or stylised renders in seconds with prompt-driven material and ambience overrides.
		- **Mainstream Text-to-Image Generators**
			- Export plan or massing views as PNG/JPG and feed into Midjourney, Stable Diffusion (with ControlNet) or DALL·E 3 for high-res concept images.
			- Best for early-stage mood boards rather than precise layouts.

  - ### [Luma AI Genie](https://lumalabs.ai/genie?view=create) - Luma Genie is a tool that allows users to create realistic 3D models from text or image prompts using [[neural networks]] technology.
  - Users can describe the desired 3D model with a text prompt, specifying details like shape, colour, and texture.
  - Alternatively, users can upload an image to guide the 3D model generation.
  - The generated 3D models can be downloaded in various formats for use in different applications.
  - Genie aims to simplify the process of 3D content creation, making it more accessible to users of all skill levels.
  - It appears to be still under development, with the website showcasing examples and possibilities.
  - The technology uses neural radiance fields to generate high-quality, realistic 3D models.
  - Users can organise and share their created models through the Luma platform.
		- <iframe src="https://lumalabs.ai/luma-web-library" style="width: 100%; height: 600px"></iframe>

  - ### **ComfyTextures**
		- [ComfyTextures GitHub](https://github.com/AlexanderDzhoganov/ComfyTextures) - - ComfyTextures is a collection of free, high-quality textures designed for use in 3D rendering and other creative projects.
  - The textures are organised into logical categories such as wood, metal, fabric, and stone, making it easier to find the desired material.
  - Each texture comes with various maps (diffuse, normal, roughness, specular, height) to facilitate realistic material creation in different rendering engines.
  - The textures are generally provided in a tileable format allowing for seamless repetition across surfaces.
  - The repository is actively maintained, with additions and updates being made regularly, enhancing the available resource base.
  - The textures can be downloaded and used for both commercial and non-commercial purposes under a specified licence.
  - The repository aims to provide a valuable resource for artists and developers seeking readily accessible and customisable textures.
  - Many textures include variations in colour and detail allowing for greater control over the final appearance.

  - ### **Imagine 3D Software**
		- [Imagine 3D](https://captures.lumalabs.ai/imagine) - Luma Labs Imagine allows users to create realistic 3D models from text descriptions, streamlining the design workflow.
  - It offers an intuitive interface to easily generate, edit and visualise 3D assets.
  - Users can control the colour, texture, and shape of the generated 3D models using natural language processing.
  - The tool enables users to iterate quickly on design ideas by making adjustments to the text prompt and regenerating the model.
  - Imagine facilitates the creation of customised 3D models for various applications, including gaming, product visualisation and animation.
  - It allows users to organise and manage generated models within a centralised workspace.
  - The platform encourages experimentation with different prompts to explore the creative potential of [[artificial intelligence]]-powered 3D generation.
  - Imagine simplifies 3D content creation, democratising access to 3D modelling for non-experts.

  - ### **GET3D by Toronto AI Lab**
		- [GET3D GitHub](https://nv-tlabs.github.io/GET3D/) - GET3D is a generative model that creates high-quality 3D shapes with explicit textures, removing the need for time-consuming 3D modelling.
  - It uses a novel texture generation method directly on 3D volumes, resulting in detailed and realistic surface colour.
  - The model is trained on unlabelled 2D images using a differentiable rendering pipeline, meaning no 3D supervision is required.
  - The generated 3D shapes are mesh-free, represented as neural radiance fields, making them easy to manipulate and edit.
  - GET3D allows users to efficiently generate diverse and high-quality 3D assets, accelerating content creation workflows.
  - The system offers control over object categories during generation, allowing users to specify the type of 3D shape produced.
  - The generated assets are compatible with standard rendering pipelines and can be readily integrated into existing 3D scenes.
  - The research demonstrates significant improvements in 3D shape quality and texture detail compared to previous generative models.
  - This technology could be used for rapid prototyping, game development, and creation of virtual environments.
  - GET3D aims to democratise 3D content creation by simplifying the process and reducing reliance on expert 3D modellers.

  - ### **Dream Fields for Text-Guided 3D Object Generation**
		- [Dream Fields](https://ajayj.com/dreamfields) - * Dreamfields is a technique for visualising and organising thoughts and ideas, similar to mind mapping but with a focus on colours and spatial arrangement.
  - The system utilises a canvas (physical or digital) where ideas are represented as colourful nodes, allowing for visual categorisation and intuitive connections.
  - Unlike traditional mind maps, Dreamfields encourages free-form arrangement and avoids rigid hierarchical structures, promoting flexible thinking.
  - The colour coding allows for the association of different themes, priorities, or categories to individual ideas, aiding in overall organisation.
  - The spatial arrangement of nodes on the canvas can reflect relationships, importance, or chronological order of the ideas, providing another layer of meaning.
  - Dreamfields is presented as a tool for brainstorming, problem-solving, and project planning, enabling users to explore and connect concepts in a non-linear way.
  - The method is suggested to be particularly useful for visual learners and individuals who benefit from a more fluid and intuitive approach to [[organisation]].
  - Dreamfields encourages ongoing reflection and iteration, allowing the canvas to evolve and adapt as thinking develops.

  - ### Research
		- **[Phi-3 and Phi-4](https://msdynamicsworld.com/story/new-microsoft-dynamics-365-and-power-platform-features-2024-release-wave-1-plan)**: Powerful language models compact enough to run on a smartphone.
  - Amazon
  - Amazon is making a significant push in AI with its new "Nova" models, a revamped "Alexa Plus," and next-generation AI chips.

		- ### Physically Based Textures from BIM (Revit)
			- ![Screenshot 2025-07-24 173949.png](assets/blender-bim-pbr-texture-cube.png)

		- ### Evolution from Chat to Complex Systems
			- Context engineering emerged as AI systems evolved beyond simple chat interfaces to incorporate:
				- Function calling and tool use
				- Retrieval augmented generation (RAG) systems
				- Multi-agent workflows
				- External API integrations
				- The principle of "garbage in, garbage out" becomes critical when managing complex information flows. Pre-processing and cleaning data before it enters the context window significantly improves output quality.

  - ### Text-to-Speech
		- Text-to-speech (TTS) technology can be used to convert written text into spoken audio. This can be used to create podcasts from blog posts, articles, or other written content.

  - ### Project Details
  - **Technology and Process**
		- Utilizing highly-efficient energy generation equipment, the project transforms methane, a natural landfill byproduct, into electricity.
		- This electricity is used for several on-site applications, notably for powering data centers.
  - **Environmental and Economic Impacts**
		- The initiative aims to reduce greenhouse gas emissions.
		- It also generates revenue, which supports Viridi's investment in constructing a state-of-the-art Renewable Natural Gas (RNG) facility at the landfill.
		- The RNG facility, expected to be fully operational by the second half of 2024, will produce the equivalent of three million gallons of gasoline annually.

  - ### [Stable Diffusion in Blender](https://github.com/neph1/blender-stable-diffusion-render)
		- A Blender addon for using Stable Diffusion to render texture bakes for objects.

  - ### [Dream Textures](https://github.com/carson-katri/dream-textures)
		- A Blender addon for applying textures with text prompts.

  - ## Prerequisites
		- Before beginning, ensure you have:
			- A modern web browser for testing your wallet.
			- A text editor or IDE (e.g., Visual Studio Code, Sublime Text) for writing and editing code.
			- Access to the internet to fetch resources and documentation from the Cashew GitHub repository.

			- ### New AI Model Releases
				- **GPT4-x-Alpaca-13B-Native-4bit-128g**: Technical discussions on the new model and its capabilities ([GitHub Discussion](https://github.com/oobabooga/text-generation-webui/discussions/727)).

  - # Unsorted Links
  - A bunch more GPTs [nerority/Advanced-GPTs: Showcase of my custom GPTs, featuring advanced workflows and operational logic. (github.com)](https://github.com/nerority/Advanced-GPTs)
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Create Your Own ChatGPT ChatBOT With ALL Your Business Content](https://customgpt.ai/)
  - [GPTZero Case Study (Exploring False Positives)](https://gonzoknows.com/posts/GPTZero-Case-Study/%22)
  - [Has ChatGPT or me been hacked? Ive never had these conversations..](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)
  - [Introducing ChatGPT](https://openai.com/blog/chatgpt)
  - [March | 2023 | Ars Technica](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%7D%7Barticle)
  - [Mintplex-Labs/anything-llm: Open-source ChatGPT equivalent experience for both open and close source LLMs, embedders, and vector databases. Supports unlimited documents, threads, and concurrent users and management all in a very clean UI.](https://github.com/Mintplex-Labs/anything-llm)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%7D%7BAnonymous)
  - [RadioGPT: 'World’s first' AI-driven radio station is here](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - [Scientists begin building AI for scientific discovery using tech behind ChatGPT](https://techxplore.com/news/2023-10-scientists-ai-scientific-discovery-tech.html)
  - [State of GPT | BRK216HFS](https://www.youtube.com/watch?v=bZQun8Y4L2A%22%3E)
  - [THE DECODER](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant/%7D%7BVoice)
  - [TheBloke/starchat-beta-GPTQ · Hugging Face](https://huggingface.co/TheBloke/starchat-beta-GPTQ)
  - [Using openai chat gpt to write stable diffusion prompts%22](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%22)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is ChatGPT? | OpenAI Help Center](https://help.openai.com/en/articles/6783457-chatgpt-general-faq%7D%7Bexplicit)
  - [Yhyu13/30B-Lazarus-gptq-4bit at main](https://huggingface.co/Yhyu13/30B-Lazarus-gptq-4bit/tree/main)
  - [Zain Kahn on LinkedIn: 1,000+ AI tools were released in March. ChatGPT is just the tip of the… | 345 comments](https://www.linkedin.com/posts/zainkahn_1000-ai-tools-were-released-in-march-activity-7048285306101358592-4wAA?amp%3Butm_medium=member_android%22%2F%3E)
  - [mckaywrigley/chatbot-ui: An open source ChatGPT UI.](https://github.com/mckaywrigley/chatbot-ui)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)
  - [ztjhz/BetterChatGPT](https://github.com/ztjhz/BetterChatGPT)
  - [#215 – Wojciech Zaremba: OpenAI Codex, GPT-3, Robotics, and the Future of AI](https://open.spotify.com/episode/6pIHwP4wxd9xYZAxvMS6I2?dl_branch=1&si=d41LWZ6CSWmbucGf-AasPQ)
  - [#367 – Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI](https://open.spotify.com/episode/6rAOusZcsuNtCv8mefmwND?nd=1&si=3a17aef004df4982)
  - [3D-GPT generates 3D worlds in Blender](https://the-decoder.com/3d-gpt-generates-3d-worlds-in-blender)
  - [6 Ways ChatGPT Code Interpreter Is Already Being Used](https://www.youtube.com/watch?v=1MM2nqVw8h8)
  - [Can GPT-3 AI write comedy?](https://robmanuelfuckyeah.substack.com/p/someone-needs-to-stop-me-playing)
  - [Carlos E. Perez on Twitter / X](https://twitter.com/IntuitMachine/status/1608690077139599360%7D%7Bchatgpt)
  - [ChatGPT political compass](https://www.gptoverflow.link/question/1519492600837443584/chatgpt-political-compass%7D%7Bpolitical)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Developer combines Stable Diffusion, Whisper and GPT-3 for a futuristic design assistant](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant)
  - [George Hotz: Tiny Corp, Twitter, AI Safety, Self-Driving, GPT, AGI & God | Lex Fridman Podcast #387](https://youtu.be/dNrTrx42DGQ?si=V6VtK4zWgeHbS8CP)
  - [Introducing GPT-Furr, Cat-GPT’s meowst sassy, all-knowing system.](https://www.cat-gpt.com/)
  - [Microsoft just announced a SURPRISE media event taking place tomorrow](https://www.windowscentral.com/microsoft/microsoft-surprise-event-chatgpt-openai-bing-2023)
  - [Narrative Manipulation: Convincing Chat GPT to Write a Python Program to Eradicate Humanity](https://zacdenham.com/blog/narrative-manipulation-convincing-gpt-chat-to-write-a-python-program-to-eradicate-humanity)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%22)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%7D%7BAnonymous)
  - [Prompt injection attacks against GPT-3](https://simonwillison.net/2022/Sep/12/prompt-injection)
  - [Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI | Lex Fridman Podcast #367](https://m.youtube.com/watch?feature=youtu.be%7D%7BSam&v=L_Guz73e6fw%5C)
  - [Stack Overflow bans ChatGPT as 'substantially harmful'](https://www.theregister.com/2022/12/05/stack_overflow_bans_chatgpt)
  - [Stephen Wolfram Answers Live Questions About ChatGPT](https://youtu.be/zLnhg9kir3Q%7D%7BStephen)
  - [Using openai chat gpt to write stable diffusion prompts%22](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%22)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is Auto-GPT? | Blog](https://stablecog.com/blog/what-is-auto-gpt)
  - [You can now run a GPT-3-level AI model on your laptop, phone, and Raspberry Pi](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%22)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)

  - # Advice on AI coding
  - **Choose Tools Strategically:** Not all AI coding tools are created equal. Select the right tool for the job, considering the project's scope and complexity:
  - **Complex Applications:** Cursor, Windsurf, or more established IDE integrations (see below) are often better suited for larger, more intricate projects.
  - **Micro-SaaS:** Bolt/Lovable are optimised for smaller, Software-as-a-Service applications.
  - **Mobile Applications:** Replit remains a good choice, alongside framework-specific tools.
  - **UI Design:** Consider using 'vo' or similar specialised tools for user interface design.
  - **General Coding Assistance & IDE Integration:**
		- **GitHub Copilot:** A widely used and powerful AI pair programmer that integrates directly into your IDE (VS Code, JetBrains IDEs, etc.).
		- **GitHub Copilot Agents:** Extend Copilot's capabilities with specialised agents for tasks like code review, debugging, and test generation.
		- **Aider:** A command-line tool that helps you write and edit code using GPT models. Good for making changes to existing codebases, particularly for refactoring and adding features.
		- **Roo**: Provides code generation and chat capabilities within your IDE.
		- **Cline:** Good for command line interfacing, and code assistance.
  - **Context is Paramount:** Always provide comprehensive context about your project. AI tools cannot "guess" your intentions. Use Markdown (.md) documents to detail:
  - **Product Requirements Document (PRD):** Clearly outlines the purpose, features, and functionality of the application.
  - **Technical Stack Document:** Specifies the programming languages, frameworks, libraries, and databases to be used.
  - **File Structure:** Defines the organisation of directories and files within the project.
  - **Frontend Guidelines:** Describes coding standards, styling conventions, and component structure for the user interface.
  - **Backend Structure:** Outlines the architecture, API endpoints, data models, and business logic for the server-side code.
  - **Use CodeGuide (or Similar):** Consider using CodeGuide or a similar tool to help generate and manage these AI-specific coding documents. This ensures compatibility across various AI tools and helps maintain a single source of truth.
  - **Incremental Development:** Avoid overly broad prompts like "build me an AirBNB clone." Instead, break down the project into manageable steps:
  - **Page by Page:** Develop the application one page at a time.
  - **Component by Component:** Within each page, build individual components sequentially.
  - **Limited Task Execution:** AI models typically perform best with a maximum of 3 concurrent tasks *per request*. Be mindful of this limitation, and break down larger tasks accordingly. Tools like Aider and Copilot Agents can help manage this complexity.
  - **Select AI-Friendly Technologies:** Certain technology stacks are better understood by current AI models:
  - **Web Applications:**
		- **React (with NextJS or ViteJS):** Provides excellent performance and is well-supported by AI tools.
		- **Python (with frameworks like Django or Flask):** Widely used and well-understood by AI models.
  - **Mobile Applications:**
		- **React Native:** A good choice for cross-platform development.
		- **SwiftUI (especially with Claude):** Works well, particularly with Claude models.
  - **Avoid Older Technologies**: Unless absolutely necessary, as AI model support may be limited.
  - **Utilise Starter Kits:** Save time and reduce token usage by starting with pre-built templates or boilerplates:
  - **Example:** The "CodeGuide NextJS Starter Kit" can provide a solid foundation.
  - **Benefit:** Accelerates workflow and provides a structured starting point. Most frameworks have readily available starter kits.
  - **Define Rules Within Your Tools:** Many AI coding tools allow project-specific rules:
  - **Examples:** .cursorrules (often "project rules"), .windsurfrules, or similar configuration files within your IDE or tool. Copilot and other IDE-integrated tools often have settings for coding style and preferences.
  - **Purpose:** Constrain the AI, preventing deviations from your guidelines and coding standards.
  - **Coding Standards**: Enforce coding standards using linters (e.g., ESLint for JavaScript, Pylint for Python) and integrate their configuration with your AI tools where possible.
  - **Employ a Multi-Tool Approach:** No single tool handles the entire workflow seamlessly. Combine tools:
  - **Research:** Perplexity.
  - **Brainstorming:** ChatGPT (voice features can be helpful).
  - **Documentation:** CodeGuide, or tools integrated within your IDE.
  - **Data Scraping:** Firecrawl, or libraries within your chosen language (e.g., Beautiful Soup in Python).
  - **Code Generation/Assembly/Refactoring:** Your chosen AI coding tool (Cursor, Windsurf, GitHub Copilot, Aider, Roo, Cline, etc.). Choose based on your workflow and project needs.
  - **Patience and Persistence:** Working with AI requires a specific mindset.
  - **Prompt Engineering:** Crafting effective prompts is crucial. Experiment with different phrasing and levels of detail.
  - **Expect Errors:** AI models are not perfect. Be prepared for errors.
  - **Iterative Refinement:** Stay focused, learn from mistakes, and iteratively refine your prompts and approach.
  - **Debugging**: Provide the AI with the full code and error message for assistance. Leverage Copilot Agents for debugging tasks.
  - **Version Control**
  - Use Git for version control.
  - Commit frequently with clear messages.
  - AI can help generate commit messages (Copilot, Aider, and others offer this).
  - **Testing**
  - Write unit and integration tests.
  - AI can assist in generating test cases (Copilot Agents are particularly useful here). Tools like Aider can help refactor code to improve testability.
  - [[Agent Frameworks]]

  - # Random Links
  - https://twitter.com/tldraw/status/1782443204710674571
  - {{twitter https://twitter.com/tldraw/status/1782443204710674571}}
  - [Paper page Design2Code: How Far Are We From Automating Front-End Engineering? (huggingface.co)](https://huggingface.co/papers/2403.03163)
  - [Generative AI Powered Assistant - Amazon Q - AWS](https://aws.amazon.com/q/)  Amazons!
  - [antworks.ai](https://antworks.ai/)
  - [OpenBMB/ChatDev: Create Customized Software using Natural Language Idea (through LLM-powered Multi-Agent Collaboration) (github.com)](https://github.com/OpenBMB/ChatDev)
  - [Programming AIs worry me • Buttondown:](https://buttondown.email/hillelwayne/archive/programming-ais-worry-me/)
  - [Home | Tabby (tabbyml.com)](https://tabby.tabbyml.com/)
  - The text discusses the concerns around using AI to generate code, specifically around the idea of proofreading the code. The author describes an experience with using voice-to-text where they found it difficult to proofread the text for errors. The text argues that using AI to generate code changes the work from writing code to proofreading code, and that this is a problem.
  - [Stop whining blog post](https://about.sourcegraph.com/blog/cheating-is-all-you-need)
  - [blog post on LLMs for code](https://evanthebouncy.github.io/program-synthesis-minimal/generation-with-llm/)
  - [Engshell shell LLM extension](https://github.com/emcf/engshell/tree/main)
  - [Github assist](https://useadrenaline.com/app)
  - [Locally run 13B coding optimised model](https://huggingface.co/ehartford/alpaca1337-13b-4bit/tree/main)
  - [Programming AIs worry me • Buttondown (other)](https://buttondown.email/hillelwayne/archive/programming-ais-worry-me/) The article discusses the ethical implications of using machine learning algorithms to generate art. While some see this as a powerful way to create new and interesting works of art, others worry about the potential for misuse and abuse of these technologies.
  - [GPT synthesizer](https://github.com/RoboCoachTechnologies/GPT-Synthesizer)
  - [Colab to get codey](https://www.techspot.com/news/98792-google-colab-soon-get-ai-code-generation-chatbot.html)
  - [Build prompts using coding keywords, paper](https://arxiv.org/abs/2305.06599v3)
  - [Continue for VSCode](https://github.com/continuedev/continue)
  - [Phind technical answers and pair programmer with vscode plugin](https://www.phind.com/)
  - [Starchat beta 4bit](https://huggingface.co/TheBloke/starchat-beta-GPTQ)
  - [Sweep github pull requests to code system](https://github.com/sweepai/sweep)
  - [Cursor.so coding with gpt interface](https://cursor.so)
  - [Code llama 2](https://ai.meta.com/blog/code-llama-large-language-model-coding/)
  - [Long llama](https://github.com/CStanKonrad/long_llama/blob/main/instruction_fine_tuning/LongLLamaCode7BInstruct.md)
  - [Open interpreter](https://openinterpreter.com/)
  - [Open interpreter and autogen local tutorial](https://www.youtube.com/watch?v=DXrpqsjNKbo)
  - [open interpreter github](https://github.com/KillianLucas/open-interpreter)
  - [codingbuddy](https://codebuddy.ca/)
  - [deepseek 34b q4 AWQ](https://huggingface.co/TheBloke/deepseek-coder-33B-instruct-AWQ)
  - [[Vercel]] provides front-end [[Infrastructure]] to allow developers to build fast, dynamic websites and applications efficiently at global scale. Its open source Next.js framework powers many leading AI products' user interfaces.
  - Vercel's new vZero product allows developers to visually iterate on UIs with AI assistance.
  - [Demo/Tutorial: v0 by Vercel AI Code Generation (youtube.com)](https://www.youtube.com/watch?v=gi5nnOqzHeQ)
  - AI code auto-completion tools like [[Microsoft Copilot]] have shown the potential for AI to enhance software development. The latest [[Microsoft Copilot]] leverages [[Instruction-Following Conversational AI System]] 4 and is extremely good.
  - AI will likely be incorporated into most software products going forward to enhance capabilities and engagement. Some experiences are better suited to standalone interfaces rather than cramming functionality into chatbots.
  - Effective use of AI tools requires developing specialized skills around prompting, understanding system capabilities and limitations, and framing problems appropriately. Different AI systems have strengths in different domains.
  - Software development will transition towards more hybrid human-AI teams, with less focus on writing code line-by-line. AI can provide significant productivity gains by automating rote tasks.
  - There are open questions around whether to expose functionality through general chatbot interfaces vs company-specific products. There are strategic and technical considerations favouring bespoke solutions.
  - Open source software tends to improve quickly over time and should not be underestimated. However, regulations could potentially suppress open source AI progress.
  - [gptengineer.app](https://gptengineer.app/) is a commercial offering built on [[GPT Engineer]]
  - [Understand a codebase in github with GPT](https://useadrenaline.com/app)
  - [Sourcegraph | Code AI platform](https://sourcegraph.com/)
  - [Bito AI
  - Become a 10X Dev with Bito
  - Bito](https://bito.ai/)
  - [Phind](https://www.phind.com/search?home=true)

			- ### Audio & Voice Generation
				- *Task:* Create voiceovers, audio content like podcasts, or clone voices for various applications.
				- **ElevenLabs**
					- *Description:* High-quality text-to-speech and voice cloning AI. Offers a library of voices (Community Voices), can create a synthetic version of your own voice, and provide audio narration for websites (Audio Native). Used for audiobooks, podcasts, voiceovers.
					- *Cost:* Free tier available. Paid plans based on character usage, starting around $5 USD/month.
					- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ElevenLabs](https://elevenlabs.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
				- **PlayHT**
					- *Description:* AI text-to-voice generator with a large library of voices and languages. Suitable for creating audiobooks, podcasts, and voiceovers.
					- *Cost:* Free plan available. Paid plans based on word count/features, starting around $30 USD/month (billed annually).
					- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[PlayHT](https://play.ht/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- ##### VRChat
			- none of this makes money yet
				- [#1394: Discussion about VRChat Layoffs & Paths to Profitability with Four Community Members – Voices of VR Podcast](https://voicesofvr.com/1394-discussion-about-vrchat-layoffs-paths-to-profitability-with-four-community-members/)
			- This text is from wikipedia and will be updated when we have a chance totry VRChat properly. It’s much loved already by the Bitcoin community.
			- “VRChat’s gameplay is similar to that of games such as Second Life andHabbo Hotel. Players can create their own instanced worlds in which theycan interact with each other through virtual avatars. A softwaredevelopment kit for Unity released alongside the game gives players theability to create or import character models to be used in the platform,as well as build their own worlds.
			- Player models are capable of supporting "audio lip sync, eye trackingand blinking, and complete range of motion.
			- VRChat is also capable of running in "desktop mode" without a VRheadset, which is controlled using either a mouse and keyboard, or agamepad. Some content has limitations in desktop mode, such as theinability to freely move an avatar’s limbs, or perform interactions thatrequire more than one hand.
			- In 2020, a new visual programming language was introduced known as"Udon", which uses a node graph system. While still considered alphasoftware, it became usable on publicly-accessible worlds beginning inApril 2020. A third-party compiler known as "UdonSharp" was developed toallow world scripts to be written in C sharp.”

		- ##### Vircadia
			- The applications and platforms detailed above have their benefits, butfor the application stack in the next section of the book Vircadia hasbeen chosen. The following text is from their website, and is aplaceholder which gives some idea. This section will be written outcompletely to reflect our use of the product to support emerging market users.
			- Vircadia is open-source software which enables you to create and sharevirtual worlds as virtual reality (VR) and desktop experiences. You cancreate and host your own virtual world, explore other worlds, meet andconnect with other users, attend or host live VR events, and much more.
			- The Vircadia metaverse provides built-in social features, includingavatar interactions, spatialized audio, and interactive physics.Additionally, you have the ability to import any 3D object into yourvirtual environment. No matter where you go in Vircadia, you will alwaysbe able to interact with your environment, engage with your friends, andlisten to conversations just like you would in real life.

  - # Foundation Models
  - Foundation models are large-scale, pre-trained models that can be adapted to a wide range of downstream tasks. They are trained on massive datasets of text and code and can be used for a variety of natural language processing (NLP) tasks, such as text generation, summarization, and question answering.

  - ### Animation: Breathing Life into Digital Characters
		- Bringing digital characters to life requires compelling animation. This section explores projects and resources focused on achieving realistic and expressive character movement.
			- * [Animatable Gaussians (GitHub Repository)](https://github.com/lizhe00/AnimatableGaussians/tree/master): Code for "Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling," presented at CVPR 2024.
			  * [3D Gaussian Blendshapes](https://gapszju.github.io/GaussianBlendshape/): Exploration of the use of 3D Gaussian Blendshapes for head avatar animation.
			  * [Eggnog](https://www.eggnog.ai/infinite): A platform for creating infinite AI videos.
			  * [Efficient Portrait Animation (LivePortrait)](https://liveportrait.github.io/): A project focused on efficient portrait animation with stitching and retargeting control.
			    * [Note by Daniele](https://primal.net/e/note1jcmsj7ls2fnueeqmg8t6cn4a7zpg53wxwgtmv47hpvurw40y8fdq4ylfc9): A note on LivePortrait by Daniele.
			    * [ComfyUI Nodes for LivePortrait (GitHub Repository)](https://github.com/kijai/ComfyUI-LivePortraitKJ?tab=readme-ov-file): ComfyUI nodes designed for LivePortrait.
			  * [CLARA2 (GitHub Repository)](https://github.com/0xMatthew/CLARA2): A 3D-rendered AI agent designed to present PowerPoint presentations.
			  * [Consistent Character API (Replicate)](https://replicate.com/fofr/consistent-character): An API for running fofr's consistent character model.
			  * [Joystick-Controlled Character Manipulation (Twitter)](https://x.com/JungleSilicon/status/1798457212291150189): A concept for manipulating character features using a joystick.
			  * [Volucap Authentic Digital Avatars](https://volucap.com/): A company specialising in creating authentic digital avatars.
			  * [Openpose Controlnets (Civitai Article)](https://civitai.com/articles/157/openpose-controlnets-v11-using-poses-and-generating-new-ones): An article explaining how to use and generate poses with Openpose Controlnets V1.1.
			  * [AI Modelling Agency (Creative Bloq Article)](https://www.creativebloq.com/news/ai-model-agency): An article discussing the emergence of AI modelling agencies.
			  * [Free VRChat Avatars & 3D Assets (VRCMods)](https://vrcmods.com/): A collection of free VRChat avatars and 3D assets.
			  * [AniTalker](https://x-lance.github.io/AniTalker/): A project focused on animating talking heads.
			  * [VLOGGER](https://enriccorona.github.io/vlogger/): A project related to creating virtual vloggers.
			  * [StoryDiffusion](https://storydiffusion.github.io/): A project exploring consistent self-attention for long-range image and video generation.
			  * [SoccerNet Game State Reconstruction (GitHub Repository)](https://github.com/SoccerNet/sn-gamestate): A project focusing on athlete tracking and identification on a minimap.
			  * [Ukraine's AI Avatar for Consular Affairs (Reddit Post)](https://www.reddit.com/r/singularity/comments/1chhgd3/ukraines_ministry_of_foreign_affairs_annonced/): A discussion on Ukraine's use of an AI avatar for consular updates.
			  * [Animating Images with Viggle AI (YouTube Tutorial)](https://www.youtube.com/watch?v=jMVTljPXVVo&t=75s): A tutorial on animating images using Viggle AI.
			  * [PhysAvatar (Hugging Face Paper)](https://huggingface.co/papers/2404.04421): Research on learning the physics of dressed 3D avatars from visual observations.
			  * [Vid2Avatar](https://moygcc.github.io/vid2avatar/): A project focused on reconstructing 3D avatars from videos.
			  * [Human Tracking and SLAM Capture (YouTube Video)](https://youtu.be/u9Z8CK561_Y?t=2057): A demonstration of human tracking and SLAM capture technology.
			  * [ComfyUI Character Turntable with SV3D (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1bme62y/comfyui_creating_a_character_turntable_with_sv3d/): A discussion on creating character turntables using ComfyUI and SV3D.
			  * [Animating Characters for Free (LinkedIn Post)](https://www.linkedin.com/posts/jacques-alomo_animate-any-character-now-for-free-activity-7177666734957420544-N7v9/?utm_source=share&utm_medium=member_android): A post highlighting methods for animating characters for free.
			  * [Midjourney Character Reference Feature (Medium Article)](https://degennfts.medium.com/new-midjourney-feature-character-reference-oppenheimer-example-906750d53d3f): An article exploring Midjourney's Character Reference feature.
			  * [Full-Character Consistency with SDXL (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1azn5lq/an_attempt_at_full-character_consistancy_sdxl/): A discussion on achieving full-character consistency using SDXL.
			  * [Create Bot Emotions (Miku.gg Documentation)](https://docs.miku.gg/guides/bots/create-bot-emotions/): Documentation on creating bot emotions within the Miku.gg platform.
			  * [Consistent Emotions on a Character with ComfyUI (Reddit User)](https://www.reddit.com/user/iwantofftheride00/): A Reddit user's plans to publish a method for achieving consistent emotions on a character using ComfyUI.
			  * [BakedAvatar](https://buaavrcg.github.io/BakedAvatar/): A project focused on avatar creation.
			  * [Dreamtalk (GitHub Repository)](https://github.com/ali-vilab/dreamtalk): The official implementation of Dreamtalk, focusing on expressive talking head generation.
			  * [CharTurnerBeta LoRA (Civitai)](https://civitai.com/models/7252/charturnerbeta-lora-experimental): A LoRA for multi-direction consistency in Stable Diffusion character generation.
			  * [VividTalk](https://humanaigc.github.io/vivid-talk/): A project focused on one-shot audio-driven talking head generation.
			  * **Gaussian-Based Avatars (Hugging Face Papers):**
			    * [Relightable Gaussian Codec Avatars](https://huggingface.co/papers/2312.03704): Research on using Gaussian codecs for avatar representation.
			    * [Gaussian Head Avatar](https://huggingface.co/papers/2312.03029): Research on creating high-fidelity head avatars using dynamic Gaussians.
			  * [NLW Education Discord Projects (Discord Channel)](https://discord.com/channels/1181054284528373761/1181055410950647838): A Discord channel discussing projects related to ElevenLabs and character/avatar creation.
			  * [D-ID AI Video Mobile App](https://www.d-id.com/creative-reality-studio-mobile-app/): A mobile app for creating AI videos.
			  * [GAIA (Microsoft)](https://microsoft.github.io/GAIA/): A project from Microsoft exploring advanced avatar technologies.

			  This meticulously curated collection offers a comprehensive overview of the dynamic field of digital human and avatar creation. Explore, learn, and contribute to the ongoing evolution of this exciting frontier!

			  **Note:** Some links may lead to projects or resources that are still under development or experimental. Remember to review any licensing information before using code or assets from these projects.

  - ### Logseq
		- **Logseq**: is very similar to Obsidian, but self hosted and open source. It works on top of plain text files stored in a local system. It supports markdown and Org-mode formatting and allows for hierarchical and networked note-taking. It can be connected to it's mobile app via github.
		- Integration to [[Large Language Models]] can be OpenAI or local.
			- Compare notion, obsidian, and logseq, using a simply markdown table with coloured dots
		- [ChatGPT Logseq Summarizer (openai.com)](https://chat.openai.com/g/g-3ooWV51Sb-logseq-summarizer)
		- ![Screenshot 2024-01-06 120253.png](assets/Screenshot_2024-01-06_120253_1706020225813_0.png)
		- ![Screenshot 2024-01-18 103043.png](assets/Screenshot_2024-01-18_103043_1706020238116_0.png)
		- ![Screenshot 2024-01-18 102807.png](assets/Screenshot_2024-01-18_102807_1706020247381_0.png)

  - ### Key LLM Papers

	  **GPT-1 (2018):** This paper introduces the first version of Generative Pre-trained Transformer (GPT), a generative model trained on a massive dataset of text. It demonstrates the ability of LLMs to generate coherent and grammatically correct text, paving the way for future advancements.

	  **GPT-2 (2019):** This paper presents a significantly larger GPT model with improved capabilities. It showcases the ability of LLMs to perform various language tasks, including text summarization, question answering, and even code generation.

	  **GPT-3 (2020):** This paper introduces GPT-3, a truly massive LLM with billions of parameters. It demonstrates impressive capabilities in diverse tasks, showcasing the emergence of general-purpose language abilities.

	  **GPT-4 (2023):** This paper introduces the latest iteration of GPT, featuring multi-modal capabilities and advanced reasoning abilities. It further pushes the boundaries of what LLMs can achieve, demonstrating impressive performance in a wide range of tasks.

	  **Llama-2 (2023):** This paper introduces Llama-2, a large language model designed with a focus on efficiency and accessibility. It offers a more resource-friendly alternative to other LLMs, making it more accessible for research and development.

	  **Tools (2023):** This paper introduces the "Tools" paradigm for LLMs, allowing them to interact with external tools and resources. It enables LLMs to perform more complex tasks by leveraging the power of external tools, expanding their capabilities significantly.

	  **Gemini-Pro-1.5 (2023):** This paper introduces Gemini-Pro-1.5, a large language model developed by Google. It showcases impressive capabilities in various tasks, including code generation, creative writing, and reasoning. It's a strong contender in the race for developing advanced LLMs.

			- #### Generative Models for Molecule Design
				- Generative models based on diffusion and flow-matching approaches enable fine-grained control over the generation of molecules with specific properties. ProteinDT and MoleculeSTM are examples of text-conditioned generative models that allow users to provide natural language prompts to generate molecules with desired properties.
				- RF Diffusion, a diffusion model built on the RoseTTAFold backbone, offers powerful functionalities for protein engineering. It enables unconditional generation of novel proteins, binder design for high affinity and specificity, partial diffusion for refining existing structures, motif scaffolding for combining functional motifs, symmetric generation of protein complexes, and fold conditioning for generating proteins with specific tertiary structures.
				- Complementary models like Ligand and PNN (Protein MPNN) are essential for designing amino acid sequences that fold into the desired 3D structures generated by RF Diffusion.

  - ## Some software choices
		- It is possible at this stage to put more flesh on the bones through example software stack choices. Such specificity likely introduces overlaps, technical challenges, and contradictions, but has been generated in the main by GenAI based on the wider corpus of text and demonstrates the direction of travel well.


  - #Public page automatically published
  - proprietary
  - OpenAI's Sora model represents a notable advancement in AI video generation. It demonstrates the ability to generate videos up to one minute in 1080p resolution and produce high-resolution images. Sora's flexibility in handling various aspect ratios and resolutions indicates its adaptability in content creation. Its development leverages insights from prior research, including Vision Transformers and advanced training methodologies.
  - {{video https://www.youtube.com/watch?v=GqsCMPWaYac}}
  - **Introduction to Sora**
		- A groundbreaking AI video generation model by OpenAI, Sora is designed to transform text instructions into realistic and imaginative video scenes, marking a significant advancement in creative AI technologies.
  - **Technical Overview**
		- **Advanced Diffusion Model**
			- Employs a sophisticated diffusion process that starts from static noise and incrementally refines to generate high-resolution videos, showcasing an unparalleled leap in video realism and complexity.
		- **Transformer Architecture**
			- Leverages the Transformer model's capabilities for deep understanding and generation of content, adapted here to interpret and create complex visual narratives, ensuring dynamic and coherent video storytelling.
			- [twitter link to the render loading below](https://twitter.com/sainingxie/status/1758433676105310543)
			  {{twitter https://twitter.com/sainingxie/status/1758433676105310543}}
			- [twitter link to the render loading below](https://twitter.com/thatguybg/status/1759935959792312461)
			  {{twitter https://twitter.com/thatguybg/status/1759935959792312461}}
			- **Patch-Based Data Representation**
				- Innovatively represents videos and images as collections of smaller data units, akin to language model tokens, enabling precise and granular control over video generation and editing.
  - {{twitter https://twitter.com/drjimfan/status/1758355737066299692?s=46}}
  - **Creative and Professional Applications**
		- Opens up endless possibilities for filmmakers, advertisers, educators, and content creators to produce cinema-quality visuals, educational materials, and immersive experiences effortlessly.
  - **Democratization of Video Production**
		- Simplifies the video creation process, enabling individuals and small teams to produce content that rivals big studio outputs.
  - **Enhancement of Creative Expression**
		- Allows creators to bring intricate visions and stories to life through simple text prompts, expanding visual storytelling horizons.
  - **Technical Insights**
		- Designed to scale language model capabilities to visual data, converting videos into patches for efficient processing and diverse video/image handling.
		- Features a video compression network for temporal and spatial video compression, operating within a [[Neural Network Latent Space]].
		- Uses a diffusion transformer architecture, effectively scaling video generation and improving sample quality with increased compute.
  - **Innovative Features**
		- Works with videos at native sizes to offer sampling flexibility and improve composition and framing.
		- Leverages descriptive captioning technique, enhancing video fidelity and quality from text prompts.
		- Can animate still images and extend videos, including seamless interpolation between two videos, showcasing versatility.
  - **Emerging Capabilities**
		- Exhibits capabilities like 3D consistency, long-range coherence, object permanence, and world interaction simulation.
		- Suggests potential as a tool for simulating physical and digital environments, aiding in the development of capable simulators.
		- Videos can serve as a basis for constructing detailed 3D scenes using techniques like Neural Radiance Fields (NeRFs), potentially revolutionizing 3D content creation and interaction.
		- Rapid prototyping and realization of 3D environments and narratives enhance VR and AR immersion and interactivity.
		- Enables generation of characters, objects, and worlds through text and voice prompts, making 3D content creation more intuitive and accessible.
		- Already being used to create 360 spherical video.
  - **Research and Discussion**
		- [Video generation models as world simulators (openai.com)](https://openai.com/research/video-generation-models-as-world-simulators) research paper highlights Sora's technical foundation and its role in simulating the physical world.
		- Discussions emphasize Sora's potential in democratizing video creation and the need for granular output control for artistic purposes.
  - [Google DeepMind on X: "Introducing Veo: our most capable generative video model. 🎥 It can create high-quality, 1080p clips that can go beyond 60 seconds. From photorealism to surrealism and animation, it can tackle a range of cinematic styles. 🧵 #GoogleIO https://t.co/6zEuYRAHpH" / X (twitter.com)](https://twitter.com/GoogleDeepMind/status/1790435824598716704)
  - {{twitter https://twitter.com/GoogleDeepMind/status/1790435824598716704}}

  - ### [VideoPoet – Google Research](https://sites.research.google/videopoet/)
		- **Overview:** Google's text to video, linked to Bard, but not yet available.


  - #Public page automatically published
  - {{video https://www.youtube.com/watch?v=xCDAjpZJWYw}}
  - [NVIDIA/NeMo: NeMo: a toolkit for conversational AI (github.com)](https://github.com/NVIDIA/NeMo)
  - [Canary
		- NVIDIA NeMo](https://nvidia.github.io/NeMo/blogs/2024/2024-02-canary/)
  - ![H200-NeMo-performance](https://github.com/sbhavani/TransformerEngine/raw/main/docs/examples/H200-NeMo-performance.png)
  - [NeMo/tutorials/tts/FastPitch_Adapter_Finetuning.ipynb at main · NVIDIA/NeMo (github.com)](https://github.com/NVIDIA/NeMo/blob/main/tutorials/tts/FastPitch_Adapter_Finetuning.ipynb)
  - [ElevenLabs Audio Native](https://elevenlabs.io/blog/audio-native/)
  - [OpenAI whisper local deploy](https://github.com/openai/whisper)
  - [realtime transciber](https://github.com/davabase/transcriber_app/)
  - [high performance CPP](https://github.com/ggerganov/whisper.cpp)
  - [30% quantised optimisation](https://medium.com/@daniel-klitzke/quantizing-openais-whisper-with-the-huggingface-optimum-library-30-faster-inference-64-36d9815190e0)
  - [Brillbits OpenAI whisper demo with mic](https://www.youtube.com/watch?v=nwPaRSlDSaY)
  - [Cleanvoice audio denoise](https://cleanvoice.ai/)
  - [Cloud voice change app](https://voice.ai/)
  - [downloadable voice generation systems](https://github.com/neonbjb/tortoise-tts)
  - [Language AI open libraries](https://txt.cohere.ai/introducing-sandbox-coheres-experimental-open-source-initiative/)
  - [Language practice](https://huggingface.co/spaces/JavaFXpert/Chat-GPT-LangChain)
  - [MUGEN multi modal from facebook](https://mugen-org.github.io/)
  - [Oneshot speach to text](https://atosystem.github.io/blogs/speechclip)
  - [Record and cleanup pro audio with commodity hardware](https://podcastle.ai/)
  - [Respeecher](https://variety.com/2022/digital/news/james-earl-jones-darth-vader-retiring-star-wars-ai-1235382827/)
  - [Voice AI voices](https://voice.ai/)
  - [Voice controlled assisted creation](https://the-decoder.com/developer-combines-stable-diffusion-whisper-and-gpt-3-for-a-futuristic-design-assistant/)
  - [Voice to text, Lopp](https://blog.lopp.net/open-source-transcription-software-comparisons/)
  - [whisper transcriber](https://github.com/modal-labs/modal-examples/tree/main/misc/whisper_pod_transcriber)
  - [Wolfram alpha voice chatbot integration](https://huggingface.co/spaces/JavaFXpert/Chat-GPT-LangChain)
  - [Microsoft Vall-E voice synthesis](https://valle-demo.github.io/)
  - [Uberduck text to speech (plus own voice)](https://app.uberduck.ai/)
  - [Eleven labs language and text to speech](https://beta.elevenlabs.io/)
  - [Uberduck open source text to speech](https://uberduck.ai/)
  - [numen voice control system in linux](https://numenvoice.com)
  - [Inworld (steam game plugin AI system) for voice chat and answer](https://www.youtube.com/watch?v=DnF4WzM5LPU)
  - [Bark text to speech from google labs](https://github.com/suno-ai/bark)
  - https://github.com/TensorSpeech/TensorFlowTTS
  very configurable from what I see
  - [VoiceVox engine](https://www.youtube.com/watch?v=TGZV831VTpc)
  - [coqui-ai TTS
  - very good samples](https://github.com/coqui-ai/TTS)
  - https://github.com/neonbjb/tortoise-tts
  - https://github.com/CorentinJ/Real-Time-Voice-Cloning
  - custom voices? looks neat
  - https://github.com/rhasspy/larynx - very low-spec compatible, acceptable quality
  - [Voice cloning local](https://git.ecker.tech/mrq/ai-voice-cloning)
  - [Meta voicebox](https://ai.facebook.com/blog/voicebox-generative-ai-model-speech/)
  - The Reddit post discusses the different open source voice cloning projects available, including Coqui, Tortoise, and Bark. The advantages and disadvantages of each project are briefly outlined, with ElevenLabs being noted as the best but not open source, while Tortoise is suggested as the closest open source alternative. Other tools for speech to speech and singing conversion, such as so-vits/diff-svc/rvc, are also mentioned. The post suggests that the quality of open source voice cloning projects is improving, and that there may be more options available in the future. https://www.reddit.com/r/MachineLearning/comments/133hanr/d_what_are_the_differences_between_the_major_open/
  - The Retrieval-based Voice Conversion WebUI is a simple and useful voice conversion (voice changer) framework based on the VITS algorithm. It can use a small amount of voice data and still achieve good results. It incorporates a top-1 retrieval method to replace the source feature with the training set feature to avoid voice leakage, and it is easy to use with a simple web interface. It also features model fusion to change voice characteristics and the ability to integrate with the UVR5 model to quickly separate vocals and accompaniment. The project requires the installation of PyTorch and its core dependencies, and other pre-models are also needed for inference and training. The repository provides a guide to environment setup and usage, as well as links to relevant resources and contributors. https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
  - The article discusses different open-source voice cloning projects and their advantages and disadvantages. The projects mentioned include Coqui, Tortoise, and Bark, with the author highlighting Coqui's unlocked platform, while Tortoise and Bark are newer transformer-based projects that can clone much more effectively with much less training and are restricted to prevent custom voice cloning. The author suggests that the ElevenLabs is currently the best voice cloning solution available, but it is not open source and can be expensive. The article also includes comments from other Reddit users, who suggest other open source options and provide additional insights into each option's strengths and weaknesses. https://www.reddit.com/r/MachineLearning/comments/133hanr/d_what_are_the_differences_between_the_major_open/
  - The article provides instructions on how to use OpenAI's ChatGPT chatbot on an Android device using the Tasker app. The process involves importing a ChatGPT profile into Tasker, obtaining an API key from OpenAI, and setting up home screen shortcuts. The article also notes that ChatGPT can be run through Google Assistant with voice commands. The author suggests that while ChatGPT may not necessarily be better than Google Assistant, it can perform tasks that Google Assistant may not be capable of. https://www.howtogeek.com/882019/how-to-use-chatgpt-like-google-assistant-on-android/
  - The Voice Assistant is an AI-powered chatbot that uses several APIs to understand natural language commands and provide helpful responses. It features a wide range of capabilities, including answering general knowledge questions, providing recommendations, performing productivity tasks, and entertaining users. The Voice Assistant was built using ChatGPT, Whisper API, Gradio, and Microsoft's SpVoice TTS API, and it can be accessed through a web-based interface. The installation process involves cloning the repository and installing the required Python packages. Contributions to the project are welcome. https://github.com/DonGuillotine/chatGPT_whisper_AI_voice_assistant
  - The Retrieval-based Voice Conversion WebUI is a voice conversion framework that uses a top-1 retrieval algorithm to eliminate voice leakage. It is capable of quickly training even on relatively poor GPUs and can achieve good results even with just 10 minutes of low noise voice data. It has a user-friendly web interface and the ability to use a model fusion system to change voice timbre. The setup recommends using Poetry and downloading the necessary pre-trained models from their Hugging Face space. It also includes additional files such as ffmpeg and ffprobe that may need to be downloaded. The WebUI can be initiated using the command "python infer-web.py" and Windows users can run the "go-web.bat" file. The project also acknowledges the contributions of related tools and libraries such as Gradio, HIFIGAN, and ContentVec. https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI
  - VoicePen is a tool that uses AI to convert audio or video files into blog posts and transcriptions in minutes. The service includes a transcription and SRT file generated by a top speech-to-text model, an English blog post that pulls out key topics from the audio, and the ability to convert audio in 96 different languages. Use cases include repurposing podcasts, webinars, and tutorial videos. Monthly plans are available, with options for one-time conversions. Testimonials praise the accuracy and speed of VoicePen's service. https://voicepen.ai
  - Krisp is a software application designed to improve the productivity of online meetings by using AI-powered voice clarity and a meeting assistant to cancel background noise, echo, and accent localization. It works on both Mac and Windows platforms and processes only the user's voice on their device, unlike other solutions that transmit voice over the internet. Krisp offers a free forever plan with no credit card required and is trusted by global brands. The insights gathered from calls can be viewed by the user to improve their communication skills over time. Krisp has received recognition from various prestigious awards such as America's Most Promising AI Companies and has been awarded for its quality of support and ease of use. Krisp also offers SDK for developers, pricing and plans, and use cases such as contact centers and enterprise. The company prioritizes customers' privacy, security and offers accessible support, including video tutorials and a help center. By accepting all cookies, users consent to the storing of cookies on their device to enhance site navigation, analyze site usage and assist in the company's marketing efforts. https://krisp.ai/
  - Cleanvoice AI is an artificial intelligence platform that assists users in editing their podcasts or audio recordings. The platform offers various features such as filler sound removal, mouth sound removal, stutter removal, and Deadair remover to make the audio recording more professional. Cleanvoice AI is multilingual and can detect filler sounds in multiple languages, including accents from various countries. The platform also allows for manual editing with assistance and offers tools like podcast mixing and background noise remover. Users can try Cleanvoice AI for free for 30 minutes without providing credit card details. However, users must accept the platform's cookie policy to use the service. https://cleanvoice.ai/
  - The article discusses the potential of Central Intelligent Agents (CIAs) and the role of large language models (LLMs) and other next-generation AI technologies in enabling them. It highlights the need for businesses to have a cross-functional team, ethical guidelines, and clear objectives in deploying their own CIA. The article also suggests steps to build a solid foundation for deploying a CIA, assess organizational readiness, assemble a cross-functional team, define objectives, develop the CIA components and evaluate its performance while continuing to learn and adapt. The author discusses the potential of AI tools and voice assistants in transforming the way businesses interact with their customers and suggests that the advent of advanced AI technologies has revolutionized the shift of businesses towards a more personalized and ethically responsible approach to engaging with their customers. Finally, the article ends by highlighting the importance of experimenting through crisis and providing expert guidance tailored to specific business needs. https://www.linkedin.com/pulse/central-intelligent-agent-enabling-next-generation-james-poulter?
  - [TensorSpeech/TensorFlowTTS: :stuck_out_tongue_closed_eyes: TensorFlowTTS: Real-Time State-of-the-art Speech Synthesis for Tensorflow 2 (supported including English, French, Korean, Chinese, German and Easy to adapt for other languages)](https://github.com/TensorSpeech/TensorFlowTTS) [[Translation]] [[Accessibility]] [[Speech and Voice]] [[Speech and Voice]]
  - [Variety](https://variety.com/2022/digital/news/james-earl-jones-darth-vader-retiring-star-wars-ai-1235382827/%7D%7BRespeecher%7D) [[Speech and Voice]] [[Employment Social Contract Under Automation]]
  - [transcriptionstream/transcriptionstream: turnkey self-hosted offline transcription and diarization service with llm summary (github.com)](https://github.com/transcriptionstream/transcriptionstream) [[Speech and Voice]] transcription locally [[RFC 2119 SHOULD Normative Keyword]]
  - [Tincans - Gazelle v0.2](https://tincans.ai/slm3) [[Speech and Voice]] fast speech engine [[RFC 2119 SHOULD Normative Keyword]]
  - [[Speech and Voice]] [Open Voice (myshell.ai)](https://research.myshell.ai/open-voice) cloning MIT license
  - [EndlessDreams: Voice directed real-time videos at 1280x1024 : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1c8oea6/endlessdreams_voice_directed_realtime_videos_at/) [[Speech and Voice]] [[Speech and Voice]] [[Product Design]] [[Real Time]]
  - https://demo.hume.ai/? [[Speech and Voice]] [[Large Language Models]] empathetic voice to voice
  - [[Speech and Voice]] [metavoiceio/metavoice-src: AI for human-level speech intelligence (github.com)](https://github.com/metavoiceio/metavoice-src) check for [[PlayerTwo]]
  - [NeMo/tutorials/tts/NeMo_TTS_Primer.ipynb at main · NVIDIA/NeMo (github.com)](https://github.com/NVIDIA/NeMo/blob/main/tutorials/tts/NeMo_TTS_Primer.ipynb) [[NVIDIA Omniverse Platform]] [[Speech and Voice]] primer and demo.

  - ### Birme image resizer
		- [2 hour tutorial](https://www.youtube.com/watch?v=Bdl-jWR3Ukc&t=34)
		- [inject your face into any model (dreambooth)](https://www.youtube.com/watch?v=s25hcW4zq4M)
		- [Guide for dreambooth](https://github.com/nitrosocke/dreambooth-training-guide)
		- [Shivram](https://github.com/ShivamShrirao/diffusers/tree/main/examples/dreambooth)
		- [Progen photorealism Miro guide](https://miro.com/app/board/uXjVPzJyAtU=/)
		- [rare dreambooth tokens](https://github.com/2kpr/dreambooth-tokens)
		- [Multi subject tokens](https://medium.com/@yushantripleseven/using-captions-with-dreambooth-joepenna-dreambooth-716f5b9e9866)
		- [tag editor](https://github.com/toshiaki1729/stable-diffusion-webui-dataset-tag-editor)
		- [SDXL dreambooth](https://medium.com/@yushantripleseven/dreambooth-training-sdxl-using-kohya-ss-windows-7d2491460608)
		- [Lora guide](https://civitai.com/articles/1771)
		- [stable swarm distributed comfyui](https://github.com/Stability-AI/StableSwarmUI)
		- [Textual inversion](https://www.reddit.com/r/StableDiffusion/comments/10gs4s2/new_expert_tutorial_for_textual_inversion_text/)
		- [Img2Img guide from reddit for face mapping](https://www.reddit.com/r/StableDiffusion/comments/xgurs3/testing_img2img_batch_processing_i_convert_this/)
		- [textual inversion cheaper training](https://github.com/rinongal/textual_inversion)
		- [CIO blog post](https://danieljeffries.substack.com/p/the-turning-point-for-truly-open?sd=pf)
		- [google stable diffusion](https://www.youtube.com/watch?v=lHcPtbZ0Mnc)
		- [Cross attention replace named items](https://github.com/bloc97/CrossAttentionControl)
		- [256 x faster speedup](https://the-decoder.com/stable-diffusion-could-soon-generate-images-much-faster/)
		- [VoltaML acceleration](https://github.com/VoltaML/voltaML-fast-stable-diffusion)
		- [Depth map into blender from SD2](https://www.youtube.com/watch?v=AeDngG9kQNI)
		- [midjourney tweaks](https://www.reddit.com/r/StableDiffusion/comments/z622mp/trained_midjourney_embedding_on_stable_diffusion/)
		- [and another](https://civitai.com/models/1253/anthro)
		- [Updates Pastebin](https://rentry.org/sdupdates3)
		- [Game development using SD](https://www.heroo.ai/)
		- [Wildcard manager using ChatGPT](https://github.com/mattjaybe/sd-wildcards)
		- [Depth2Img for text](https://www.reddit.com/r/StableDiffusion/comments/10c9kg8/depth2img_works_well_for_text_inputs/)
		- [train chat GPT to write prompts](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts)
		- [non destructive image manipulation using seeds](https://www.reddit.com/r/StableDiffusion/comments/10no6tp/non_destructive_image_variation_in_text2image/)
		- [Instruct pix2pix](https://www.reddit.com/r/StableDiffusion/comments/10l74sl/instruct_pix2pix_is_amazing_inpaintingimg2img/)
		- [reddit post](https://www.reddit.com/r/StableDiffusion/comments/10tjzmf/instructpix2pix_is_built_straight_into_the/)
		- [Attention heatmap for prompts (youtube)](https://www.youtube.com/watch?v=XiKyEKJrTLQ)
		- [enormous link roundup](https://rentry.org/RentrySD/)
		- [Prompt master variations management](https://github.com/hoblin/prompt-master)
		- [panoramic world builder](https://huggingface.co/congazverse/worldBuilder)
		- [GitHub AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin: A user-friendly plug-in that makes it easy to generate stable diffusion images inside Photoshop using Automatic1111-sd-webui as a backend.](https://github.com/abdullahalfaraj/auto-photoshop-stablediffusion-plugin)
		- [GitHub ashawkey/stable-dreamfusion: A pytorch implementation of text-to-3D dreamfusion, powered by stable diffusion.](https://github.com/ashawkey/stable-dreamfusion)
		- [Fine tune stable diffusion](https://github.com/nitrosocke/dreambooth-training-guide/blob/main/readme.md#how-to-fine-tune-stable-diffusion-20)
		- [GitHub Sanster/lama-cleaner: Image inpainting tool powered by SOTA AI Model. Remove any unwanted object, defect, people from your pictures or erase and replace(powered by stable diffusion) any thing on your pictures.](https://github.com/sanster/lama-cleaner)
		- [holovolo immersive volumetric VR180 videos and photos, and 3D stable diffusion, for Quest and WebVR](https://holovolo.tv)
		- [The Illustrated Stable Diffusion Jay Alammar Visualizing machine learning one concept at a time.](https://jalammar.github.io/illustrated-stable-diffusion/)
		- [reddit educational links](https://www.reddit.com/r/StableDiffusion/comments/116ki29/comment/j97jac3/)
		- [Negative prompt hack tip](https://www.reddit.com/r/StableDiffusion/comments/11pcsxe/just_discovered_a_useful_trick_for_getting_good/)
		- [Modify images with text](https://github.com/justinpinkney/stable-diffusion/blob/main/notebooks/imagic.ipynb)
		- [Photorealism](https://www.reddit.com/r/StableDiffusion/comments/11u2p0u/lazy_guide_to_photorealistic_images/)
		- [sdtools image v 1.6](https://www.reddit.com/r/StableDiffusion/comments/127gck9/sdtools_v16/)
		- [Character plugin](https://github.com/alexv0iceh/AutoChar)
  - [[Checkpoints]]
		- [Stability specific tools](https://sdtools.org/)
		- Arible Prompt Database https://www.arible.co/prompts
		- [[Guide] Make your own Loras, easy and free | Stable Diffusion Other | Civitai: You don't need to download anything, this is a guide with online tools. Click "Show more" below.](https://civitai.com/models/22530)
		- [sdxl lora training](https://github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Install-And-Use-Kohya-GUI-And-Do-Ultra-Realistic-SDXL-Training-Tutorial.md)
		- [dylora scripts](https://github.com/facebookresearch/dadaptation/issues/24)
		- [kohya fork with scripts](https://github.com/bmaltais/kohya_ss#about-sdxl-training)
		- [lora of loras (compressed sets)](https://huggingface.co/FFusion/400GB-LoraXL/tree/main)
		- [chart of print size aspect ratios](https://www.reddit.com/r/StableDiffusion/comments/10wqv7r/when_it_comes_to_printing_converting_resolutions/)
		- [SDXL native text lora](https://civitai.com/models/176555/harrlogos-xl-finally-custom-text-generation-in-sd)
		- [SDXL lcm motion lora](https://huggingface.co/latent-consistency/lcm-lora-sdxl)
		- SDXL universal negative prompt
			- text, watermark, low-quality, signature, moiré pattern, downsampling, aliasing, distorted, blurry, glossy, blur, jpeg artifacts, compression artifacts, poorly drawn, low-resolution, bad, distortion, twisted, excessive, exaggerated pose, exaggerated limbs, grainy, symmetrical, duplicate, error, pattern, beginner, pixelated, fake, hyper, glitch, overexposed, high-contrast, bad-contrast
		- [SDXL prodigy training guide](https://civitai.com/articles/1022)
		- [Lora training interface for windows](https://github.com/bmaltais/kohya_ss)
		- [Refined model](https://civitai.com/models/8392/refined)
		- [Fine tuning with captioning and other fine tuning tricks, followfox](https://substack.com/profile/110613456-followfoxai)
		- [Negative embedding textual inversion for hands etc](https://huggingface.co/datasets/Nerfgun3/bad_prompt)
		- [GitHub kpthedev/ez-text2video: Easily run text-to-video diffusion with customized video length, fps, and dimensions on 4GB video cards, as well as on CPU.](https://github.com/kpthedev/ez-text2video)
		- [Gligen grounding capability for sd1.5](https://gligen.github.io/)
		- [This repository contains a ComfyUI Extension for Automated Text Generation. The extension provides nodes which can be used to automate the text generation process. The goal is to build a node-based Automated Text Generation AGI. This extension should ultimately combine all of the features of the existing text generation tools into one tool.](https://github.com/xXAdonesXx/NodeGPT)
		- [[R] Text-to-image Diffusion Models in Generative AI: A Survey: r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/12ehcez/r_texttoimage_diffusion_models_in_generative_ai_a/)
		- [Tutorial: Creating a Consistent Character as a Textual Inversion Embedding](https://github.com/BelieveDiffusion/tutorials/discussions/3)
		- [Segment anything webui](https://www.reddit.com/r/StableDiffusion/comments/12hkdy8/sd_webui_segment_everything/)
		- [segment anything training](https://github.com/NielsRogge/Transformers-Tutorials/tree/master/SAM)
		- [Nvidia stable diffusion segment through clip](https://github.com/NVlabs/ODISE)
		- [Overriding iphone footage with SD characters using controlnet](https://www.reddit.com/r/StableDiffusion/comments/12lg8mn/override_more_experiments_overriding_the_original/)
		- [Interactive photo manipulation GAN](https://huggingface.co/papers/2305.10973)
		- [3d plugin for Automatic1111](https://github.com/jtydhr88/sd-webui-3d-editor)
		- [Face replace plugin for automatic](https://github.com/Gourieff/sd-webui-roop-nsfw)

  - ## Renderings from Plan Drawings
		- **Vectorworks AI Visualizer** ([FAQ](https://forum.vectorworks.net/index.php?/articles.html/articles/faqs/ai-visualizer/))
			- Works inside Vectorworks 2024+, using your active file or view plus a text prompt.
			- Ideal for quick concept iterations (materials, lighting variations).
			- Note: not CAD-accurate rendering but excellent for inspirational visuals.
		- **Veras AI for Vectorworks** ([EvolveLAB announcement](https://www.evolvelab.io/post/announcing-veras-ai-for-vectorworks))
			- Plugin that uses your 3D model or 2D viewport as a base.
			- Photorealistic or stylised renders in seconds with prompt-driven material and ambience overrides.
		- **Mainstream Text-to-Image Generators**
			- Export plan or massing views as PNG/JPG and feed into Midjourney, Stable Diffusion (with ControlNet) or DALL·E 3 for high-res concept images.
			- Best for early-stage mood boards rather than precise layouts.

  - ### **ComfyTextures**
		- [ComfyTextures GitHub](https://github.com/AlexanderDzhoganov/ComfyTextures) - - ComfyTextures is a collection of free, high-quality textures designed for use in 3D rendering and other creative projects.
  - The textures are organised into logical categories such as wood, metal, fabric, and stone, making it easier to find the desired material.
  - Each texture comes with various maps (diffuse, normal, roughness, specular, height) to facilitate realistic material creation in different rendering engines.
  - The textures are generally provided in a tileable format allowing for seamless repetition across surfaces.
  - The repository is actively maintained, with additions and updates being made regularly, enhancing the available resource base.
  - The textures can be downloaded and used for both commercial and non-commercial purposes under a specified licence.
  - The repository aims to provide a valuable resource for artists and developers seeking readily accessible and customisable textures.
  - Many textures include variations in colour and detail allowing for greater control over the final appearance.

  - ### **Imagine 3D Software**
		- [Imagine 3D](https://captures.lumalabs.ai/imagine) - Luma Labs Imagine allows users to create realistic 3D models from text descriptions, streamlining the design workflow.
  - It offers an intuitive interface to easily generate, edit and visualise 3D assets.
  - Users can control the colour, texture, and shape of the generated 3D models using natural language processing.
  - The tool enables users to iterate quickly on design ideas by making adjustments to the text prompt and regenerating the model.
  - Imagine facilitates the creation of customised 3D models for various applications, including gaming, product visualisation and animation.
  - The platform encourages experimentation with different prompts to explore the creative potential of [[artificial intelligence]]-powered 3D generation.
  - This technology could be used for rapid prototyping, game development, and creation of virtual environments.
  - GET3D aims to democratise 3D content creation by simplifying the process and reducing reliance on expert 3D modellers.

		- ### Physically Based Textures from BIM (Revit)
			- ![Screenshot 2025-07-24 173949.png](assets/blender-bim-pbr-texture-cube.png)

		- ### Evolution from Chat to Complex Systems
			- Context engineering emerged as AI systems evolved beyond simple chat interfaces to incorporate:
				- Function calling and tool use
				- Retrieval augmented generation (RAG) systems
				- Multi-agent workflows
				- External API integrations
				- The principle of "garbage in, garbage out" becomes critical when managing complex information flows. Pre-processing and cleaning data before it enters the context window significantly improves output quality.

  - ### Text-to-Speech
		- Text-to-speech (TTS) technology can be used to convert written text into spoken audio. This can be used to create podcasts from blog posts, articles, or other written content.

  - ### Project Details
  - **Technology and Process**
		- Utilizing highly-efficient energy generation equipment, the project transforms methane, a natural landfill byproduct, into electricity.
		- This electricity is used for several on-site applications, notably for powering data centers.
  - **Environmental and Economic Impacts**
		- Many U.S. landfills lack proper methane management systems.
		- Recent studies suggest that landfill methane emissions might be significantly higher than previously estimated.
  - **Challenges in Traditional Energy Projects**
		- Traditional grid-connected landfill energy projects face high costs and long lead times.
		- Over 70% of the U.S.'s approximately 2,600 municipal landfills lack a viable use for the methane they produce.

  - ### [Stable Diffusion in Blender](https://github.com/neph1/blender-stable-diffusion-render)
		- A Blender addon for using Stable Diffusion to render texture bakes for objects.

  - ### [Dream Textures](https://github.com/carson-katri/dream-textures)
		- A Blender addon for applying textures with text prompts.

			- ### New AI Model Releases
				- **GPT4-x-Alpaca-13B-Native-4bit-128g**: Technical discussions on the new model and its capabilities ([GitHub Discussion](https://github.com/oobabooga/text-generation-webui/discussions/727)).

		- ##### Vircadia
			- The applications and platforms detailed above have their benefits, butfor the application stack in the next section of the book Vircadia hasbeen chosen. The following text is from their website, and is aplaceholder which gives some idea. This section will be written outcompletely to reflect our use of the product to support emerging market users.
			- Vircadia is open-source software which enables you to create and sharevirtual worlds as virtual reality (VR) and desktop experiences. You cancreate and host your own virtual world, explore other worlds, meet andconnect with other users, attend or host live VR events, and much more.
			- The Vircadia metaverse provides built-in social features, includingavatar interactions, spatialized audio, and interactive physics.Additionally, you have the ability to import any 3D object into yourvirtual environment. No matter where you go in Vircadia, you will alwaysbe able to interact with your environment, engage with your friends, andlisten to conversations just like you would in real life.

		- ## **LM Studio**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Link:** [Msty App](https://msty.app)

  - ### Logseq
		- ![Screenshot 2024-01-06 120253.png](assets/Screenshot_2024-01-06_120253_1706020225813_0.png)
		- ![Screenshot 2024-01-18 103043.png](assets/Screenshot_2024-01-18_103043_1706020238116_0.png)
		- ![Screenshot 2024-01-18 102807.png](assets/Screenshot_2024-01-18_102807_1706020247381_0.png)
  - [AI-Powered Search: Embedding-Based Retrieval and Retrieval-Augmented Generation (RAG) | by Daniel Tunkelang | Apr, 2024 | Medium](https://dtunkelang.medium.com/ai-powered-search-embedding-based-retrieval-and-retrieval-augmented-generation-rag-cabeaba26a8b)
  - [AutoRAG documentation (marker-inc-korea.github.io)](https://marker-inc-korea.github.io/AutoRAG/index.html)
  - [llmware-ai/llmware: Providing enterprise-grade LLM-based development framework, tools, and fine-tuned models. (github.com)](https://github.com/llmware-ai/llmware) [[Large Language Models]] [[Infrastructure]] [[Knowledge Graphing]]
  - [turbopuffer](https://turbopuffer.com/) [[Knowledge Graphing]] serverless vector database
  - Using [[agents]] over [[Knowledge Graphing]] [Forget RAG: Embrace agent design for a more intelligent grounded ChatGPT! | by James Nguyen | Nov, 2023 | Medium](https://james-tn.medium.com/forget-rag-embrace-agent-design-for-a-more-intelligent-grounded-chatgpt-6c562d903c61)
  - [[Instruction-Following Conversational AI System]] threatens the [[Knowledge Graphing]] model with better capabilities [Chat GPT 4 Turbo for Tech Leaders | Medium](https://medium.com/@sivaad/openai-devday-for-executives-will-gpt-4-turbo-kill-traditional-rag-c82748c8feb9)
  - [CLI tool](https://www.reddit.com/r/ChatGPTCoding/comments/183qetc/made_a_small_cli_tool_to_create_openai_assistants/) to deploy a [[GPT]] model from a directory of data [[Knowledge Graphing]]
  - [VECTORDB](http://vectordb.com) open source [[Knowledge Graphing]] database
  - https://nux.ai/guides/chaining-rag-systems [[Knowledge Graphing]]
		- [SOTA Triples Extraction (sciphi.ai)](https://kg.sciphi.ai/)
		- [SciPhi/Triplex · Hugging Face](https://huggingface.co/SciPhi/Triplex)
  - [win4r/GraphRAG4OpenWebUI: GraphRAG4OpenWebUI integrates Microsoft's GraphRAG technology into Open WebUI, providing a versatile information retrieval API. It combines local, global, and web searches for advanced Q&A systems and search engines. This tool simplifies graph-based retrieval integration in open web environments. (github.com)](https://github.com/win4r/GraphRAG4OpenWebUI) [[Open Webui and Pipelines]] [[Knowledge Graphing]] [[Knowledge Graphing]]
  - Elicit search around [[Knowledge Graphing]]
		- [https://elicit.com/notebook/c4b29508-b134-429d-bda3-88a3b947375f](https://elicit.com/notebook/c4b29508-b134-429d-bda3-88a3b947375f)
		- For instance, this old and simple system
		- [https://elicit.com/notebook/c4b29508-b134-429d-bda3-88a3b947375f#17e74118b78497a92f941b07a460dd99](https://elicit.com/notebook/c4b29508-b134-429d-bda3-88a3b947375f#17e74118b78497a92f941b07a460dd99)

  - ### F o u n d a t i o n a l   C o n c e p t s

	  **GPT-1 (2018):** This paper introduces the first version of Generative Pre-trained Transformer (GPT), a generative model trained on a massive dataset of text. It demonstrates the ability of LLMs to generate coherent and grammatically correct text, paving the way for future advancements.

	  **GPT-2 (2019):** This paper presents a significantly larger GPT model with improved capabilities. It showcases the ability of LLMs to perform various language tasks, including text summarization, question answering, and even code generation.

	  **GPT-3 (2020):** This paper introduces GPT-3, a truly massive LLM with billions of parameters. It demonstrates impressive capabilities in diverse tasks, showcasing the emergence of general-purpose language abilities.

	  **GPT-4 (2023):** This paper introduces the latest iteration of GPT, featuring multi-modal capabilities and advanced reasoning abilities. It further pushes the boundaries of what LLMs can achieve, demonstrating impressive performance in a wide range of tasks.

	  **Llama-2 (2023):** This paper introduces Llama-2, a large language model designed with a focus on efficiency and accessibility. It offers a more resource-friendly alternative to other LLMs, making it more accessible for research and development.

	  **Tools (2023):** This paper introduces the "Tools" paradigm for LLMs, allowing them to interact with external tools and resources. It enables LLMs to perform more complex tasks by leveraging the power of external tools, expanding their capabilities significantly.

	  **Gemini-Pro-1.5 (2023):** This paper introduces Gemini-Pro-1.5, a large language model developed by Google. It showcases impressive capabilities in various tasks, including code generation, creative writing, and reasoning. It's a strong contender in the race for developing advanced LLMs.

  - # Agents in Biological Research
  - AI agents have the potential to transform biological research by automating tasks such as literature review, hypothesis generation, experimental design, and data analysis. Companies like Future House are developing AI agents that can identify potential drug targets and design experiments, significantly accelerating the process of discovery. These agents, powered by large language models (LLMs) and other AI technologies, can review thousands of research papers, develop targets or hypotheses to test, and even drive autonomous labs.
  - As these AI agents become more capable, they may play a crucial role in guiding research and helping humans navigate the complex landscape of biological data and interactions. The convergence of AI agents with specific tools for designing molecules, proteins, and nucleic acids could lead to rapid progress in solving challenging problems in biology and medicine.
		- [Google DeepMind and Isomorphic Labs introduce AlphaFold 3 AI model (blog.google)](https://blog.google/technology/ai/google-deepmind-isomorphic-alphafold-3-ai-model/) [[Google AI Technology Corporation]]

  - ## Some software choices
		- It is possible at this stage to put more flesh on the bones through example software stack choices. Such specificity likely introduces overlaps, technical challenges, and contradictions, but has been generated in the main by GenAI based on the wider corpus of text and demonstrates the direction of travel well.

  - ### [VideoPoet – Google Research](https://sites.research.google/videopoet/)
		- **Overview:** Google's text to video, linked to Bard, but not yet available.
			- https://www.instagram.com/reel/C6fQz81oDMS/

  - ### **Text2Mesh**

  -   The code is organised in a modular fashion, allowing for easy customisation and extension of the system.

  -   The repository contains detailed instructions on how to set up the environment, download necessary models, and run the text-to-mesh pipeline.

  -   Users can adjust parameters to control the style, complexity, and colour of the generated 3D meshes.

  -   The project highlights the potential of [[automation]] to simplify 3D content creation and make it more accessible to a wider audience.

  - ### Text-to-Speech
		- Text-to-speech (TTS) technology can be used to convert written text into spoken audio. This can be used to create podcasts from blog posts, articles, or other written content.

  - ### [Dream Textures](https://github.com/carson-katri/dream-textures)
		- A Blender addon for applying textures with text prompts.
  - [[Stable Diffusion Image Model]]

  - ## Some software choices
		- It is possible at this stage to put more flesh on the bones through example software stack choices. Such specificity likely introduces overlaps, technical challenges, and contradictions, but has been generated in the main by GenAI based on the wider corpus of text and demonstrates the direction of travel well.

  - # Overview


  - Imagine being able to verbally command a virtual design software to create specific CAD primitives or modify existing models. Additionally, the ability to add text annotations or descriptions directly within the virtual space can facilitate collaboration and communication among users.
  - Furthermore, as corporate metaverse like [[NVIDIA Omniverse Platform]] expands, the shared virtual spaces will become increasingly complex and vast, accommodating a multitude of digital twin models. This means that users will be able to explore and interact with realistic replicas of real-world objects and environments, such as buildings, vehicles, or even entire cities.
  - By incorporating voice and text input functionalities, developers can empower users to manipulate and navigate these digital twin models more intuitively. Whether it's adjusting the dimensions of a virtual prototype or performing intricate measurements, the metaverse's ability to recognize and respond to voice and text commands will revolutionize the way we design, simulate, and experience virtual environments.
  - [Table Of Contents — bd_warehouse "0.1.0" # Uncomment this for the next release? documentation (bd-warehouse.readthedocs.io)](https://bd-warehouse.readthedocs.io/en/latest/)
  - [Latest General topics

  - ## Some software choices
		- It is possible at this stage to put more flesh on the bones through example software stack choices. Such specificity likely introduces overlaps, technical challenges, and contradictions, but has been generated in the main by GenAI based on the wider corpus of text and demonstrates the direction of travel well.

  - ## Text to Multiview and Texturing

  - ### Multi-Modal Large Language Models (LLMs)
  - **Introduction:**
		- [[Large Language Models]] are adept at generating coherent text sequences, predicting word probabilities and co-occurrences.

  - ## **April 2024**
  - 1 Apr, *Do Language Models Plan Ahead for Future Tokens?*, [https://arxiv.org/abs/2404.00859](https://substack.com/redirect/674dfd1a-800a-4cfd-9e67-e7d8bdf45570?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Bigger is not Always Better: Scaling Properties of Latent Diffusion Models*, [https://arxiv.org/abs/2404.01367](https://substack.com/redirect/a09d2339-253e-4b9c-893a-5e458139c2bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *The Fine Line: Navigating Large Language Model Pretraining with Down-streaming Capability Analysis*, [https://arxiv.org/abs/2404.01204](https://substack.com/redirect/656ad167-f982-44b3-a45e-4bba6155f068?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Diffusion-RWKV: Scaling RWKV-Like Architectures for Diffusion Models*, [https://arxiv.org/abs/2404.04478](https://substack.com/redirect/e1260dcf-e6e8-4499-a23b-cd165a9044ff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Mixture-of-Depths: Dynamically Allocating Compute in Transformer-Based Language Models*, [https://arxiv.org/abs/2404.02258](https://substack.com/redirect/3abf27d6-c45c-4105-badc-39912c1e33ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Long-context LLMs Struggle with Long In-context Learning*, [https://arxiv.org/abs/2404.02060](https://substack.com/redirect/e312eee6-b991-416c-9863-9bfb6a6a8df2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Emergent Abilities in Reduced-Scale Generative Language Models*, [https://arxiv.org/abs/2404.02204](https://substack.com/redirect/52532fa9-285a-4c0e-8bde-1591eb953e2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *On the Scalability of Diffusion-based Text-to-Image Generation*, [https://arxiv.org/abs/2404.02883](https://substack.com/redirect/db89b6ae-15d5-493b-87e9-554fce1cb840?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *BAdam: A Memory Efficient Full Parameter Training Method for Large Language Models*, [https://arxiv.org/abs/2404.02827](https://substack.com/redirect/a6eeedc6-5257-494b-8bd4-f1f8102110e8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *Cross-Attention Makes Inference Cumbersome in Text-to-Image Diffusion Models*, [https://arxiv.org/abs/2404.02747](https://substack.com/redirect/ea27317e-f84c-4a88-bd7d-e42e7d45bcb2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Direct Nash Optimization: Teaching Language Models to Self-Improve with General Preferences*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Training LLMs over Neurally Compressed Text*, [https://arxiv.org/abs/2404.03626](https://substack.com/redirect/873f7c27-d879-40e1-9020-451aae9e187e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *CantTalkAboutThis: Aligning Language Models to Stay on Topic in Dialogues*, [https://arxiv.org/abs/2404.03820](https://substack.com/redirect/1b840346-40c1-4538-8c45-8acc3eea6905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *ReFT: Representation Finetuning for Language Models*, [https://arxiv.org/abs/2404.03592](https://substack.com/redirect/24f64667-d62c-46db-97ab-26d09d7f3770?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data*, [https://arxiv.org/abs/2404.03862](https://substack.com/redirect/78a6ad55-4c02-470e-a1fa-94a32fa1cac9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Sigma: Siamese Mamba Network for Multi-Modal Semantic Segmentation*, [https://arxiv.org/abs/2404.04256](https://substack.com/redirect/6716e58a-8ae7-4375-8034-746d87f35906?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *AutoCodeRover: Autonomous Program Improvement*, [https://arxiv.org/abs/2404.05427](https://substack.com/redirect/6c5eaf40-07b9-459b-9d9f-460f05ae39a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence*, [https://arxiv.org/abs/2404.05892](https://substack.com/redirect/961ef83e-bc7b-406d-8cc5-65d09baca8fe?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *CodecLM: Aligning Language Models with Tailored Synthetic Data*, [https://arxiv.org/abs/2404.05875](https://substack.com/redirect/15058c05-b607-4c42-b9f3-e2085ad7a880?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *MiniCPM: Unveiling the Potential of Small Language Models with Scalable Training Strategies*, [https://arxiv.org/abs/2404.06395](https://substack.com/redirect/ab6771aa-fc59-47f8-ba6e-70313a8e853a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *Elephants Never Forget: Memorization and Learning of Tabular Data in Large Language Models*, [https://arxiv.org/abs/2404.06209](https://substack.com/redirect/24f21c50-8eef-4da2-a5a0-b5474403ef9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *LLM2Vec: Large Language Models Are Secretly Powerful Text Encoders*, [https://arxiv.org/abs/2404.05961](https://substack.com/redirect/82d98b9c-870b-4a38-b09d-0e01cf8de874?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Adapting LLaMA Decoder to Vision Transformer*, [https://arxiv.org/abs/2404.06773](https://substack.com/redirect/dea6e17b-7459-438c-98f7-cb449bcc2236?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Leave No Context Behind: Efficient Infinite Context Transformers with Infini-attention*, [https://arxiv.org/abs/2404.07143](https://substack.com/redirect/1e26e5f6-4ec1-41dc-bd68-660b99bec89b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *LLoCO: Learning Long Contexts Offline*, [https://arxiv.org/abs/2404.07979](https://substack.com/redirect/3eb559bb-67bf-4b82-9408-8a05504794d8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *JetMoE: Reaching Llama2 Performance with 0.1M Dollars*, [https://arxiv.org/abs/2404.07413](https://substack.com/redirect/e3e6ab16-dcf2-43cb-a765-54a34ee0db51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Best Practices and Lessons Learned on Synthetic Data for Language Models*, [https://arxiv.org/abs/2404.07503](https://substack.com/redirect/632edc85-5cd6-44da-b4f5-98d184559eab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Rho-1: Not All Tokens Are What You Need*, [https://arxiv.org/abs/2404.07965](https://substack.com/redirect/0bbc0f80-b388-4a1a-a410-177be37676fb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Pre-training Small Base LMs with Fewer Tokens*, [https://arxiv.org/abs/2404.08634](https://substack.com/redirect/2c319b6e-2323-4041-a54b-5a02b67eb625?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Dataset Reset Policy Optimization for RLHF*, [https://arxiv.org/abs/2404.08495](https://substack.com/redirect/04c8e8b1-1332-4388-b9e3-a9356c1cc5b0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Apr, *LLM In-Context Recall is Prompt Dependent*, [https://arxiv.org/abs/2404.08865](https://substack.com/redirect/69e70412-c86e-4e2f-a70b-300e876ca039?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *State Space Model for New-Generation Network Alternative to Transformers: A Survey*, [https://arxiv.org/abs/2404.09516](https://substack.com/redirect/1d2cdfb1-78ec-4193-9f85-a62eed7476b5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Chinchilla Scaling: A Replication Attempt*, [https://arxiv.org/abs/2404.10102](https://substack.com/redirect/3992d9c8-d8cd-465c-a6a6-7fbde19dd0fd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Learn Your Reference Model for Real Good Alignment*, [https://arxiv.org/abs/2404.09656](https://substack.com/redirect/662f3085-f8e2-4c6a-98f7-d6fcc2442f89?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study*, [https://arxiv.org/abs/2404.10719](https://substack.com/redirect/602dc6c8-6650-4de6-a778-22f5706b0df6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Scaling (Down) CLIP: A Comprehensive Analysis of Data, Architecture, and Training Strategies*, [https://arxiv.org/abs/2404.08197](https://substack.com/redirect/d1da519e-dcfc-4e4d-b28d-26bf125626e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *How Faithful Are RAG Models? Quantifying the Tug-of-War Between RAG and LLMs' Internal Prior*, [https://arxiv.org/abs/2404.10198](https://substack.com/redirect/ed0924d9-5786-4774-ab6d-4ff7e388e0ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Apr, *A Survey on Retrieval-Augmented Text Generation for Large Language Models*, [https://arxiv.org/abs/2404.10981](https://substack.com/redirect/9857b8f9-d1af-44e6-af6b-83d43bf17476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *When LLMs are Unfit Use FastFit: Fast and Effective Text Classification with Many Classes*, [https://arxiv.org/abs/2404.12365](https://substack.com/redirect/d3b56899-524d-4a86-b884-e1644b5ebb36?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
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
  - 4 Nov, *"Give Me BF16 or Give Me Death"? Accuracy-Performance Trade-Offs in LLM Quantization*, [https://arxiv.org/abs/2411.02355](https://substack.com/redirect/5d83fef8-ae25-4356-815e-160975bf792b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *Parameter-Efficient Fine-Tuning of Large Language Models for Unit Test Generation: An Empirical Study*, [https://arxiv.org/abs/2411.02462](https://substack.com/redirect/7778c822-74f0-41ec-a2f7-cad21e8c40a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Nov, *HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems*, [https://arxiv.org/abs/2411.02959](https://substack.com/redirect/d759a229-793c-44ef-9510-05a1f9924bdc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Both Text and Images Leaked! A Systematic Analysis of Multimodal LLM Data Contamination*, [https://arxiv.org/abs/2411.03823](https://substack.com/redirect/3c24948f-b3d3-4af6-955a-e4b75d065797?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding*, [https://arxiv.org/abs/2411.04282](https://substack.com/redirect/3c921cb4-e59c-495c-8297-7782441c41e9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Number Cookbook: Number Understanding of Language Models and How to Improve It*, [https://arxiv.org/abs/2411.03766](https://substack.com/redirect/c9b2910c-ab97-4c33-bab2-705f02c8a2b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Mixture-of-Transformers: A Sparse and Scalable Architecture for Multi-Modal Foundation Models*, [https://arxiv.org/abs/2411.04996](https://substack.com/redirect/d6843086-7122-49ef-9604-5f6deb075c93?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *BitNet a4.8: 4-bit Activations for 1-bit LLMs*, [https://arxiv.org/abs/2411.04965](https://substack.com/redirect/6777d927-412f-4ff2-b334-c5d8381638cc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Scaling Laws for Precision*, [https://arxiv.org/abs/2411.04330](https://substack.com/redirect/f3c15ba7-cbf0-4962-a87a-99263612278b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Energy Efficient Protein Language Models: Leveraging Small Language Models with LoRA for Controllable Protein Generation*, [https://arxiv.org/abs/2411.05966](https://substack.com/redirect/4da9a386-3dbd-48fe-b1ec-4cfaeb276927?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Balancing Pipeline Parallelism with Vocabulary Parallelism*, [https://arxiv.org/abs/2411.05288](https://substack.com/redirect/353d44d7-41ff-4867-90a7-37ec001ce5d1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Nov, *Toward Optimal Search and Retrieval for RAG*, [https://arxiv.org/abs/2411.07396](https://substack.com/redirect/4f8f08ab-ffe5-42ec-ab52-dd65d8e9db52?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Large Language Models Can Self-Improve in Long-context Reasoning*, [https://arxiv.org/abs/2411.08147](https://substack.com/redirect/73b810b2-20e1-44b7-9066-92129876da55?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Stronger Models are NOT Stronger Teachers for Instruction Tuning*, [https://arxiv.org/abs/2411.07133](https://substack.com/redirect/4018c81d-0e93-4f04-b7e6-74b077492eae?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Direct Preference Optimization Using Sparse Feature-Level Constraints*, [https://arxiv.org/abs/2411.07618](https://substack.com/redirect/15e16eae-dc79-4d86-9bcf-3593d4f2636e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Nov, *Cut Your Losses in Large-Vocabulary Language Models*, [https://arxiv.org/abs/2411.09009](https://substack.com/redirect/86b4d912-bba7-4d87-804e-b9004e58283f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Nov, *Does Prompt Formatting Have Any Impact on LLM Performance?*, [https://arxiv.org/abs/2411.10541](https://substack.com/redirect/f0b9adaa-3c37-44a2-8c20-4945afcc9aef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SymDPO: Boosting In-Context Learning of Large Multimodal Models with Symbol Demonstration Direct Preference Optimization*, [https://arxiv.org/abs/2411.11909](https://substack.com/redirect/79bc2538-af6e-4c8c-b2bd-d284627da587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SageAttention2 Technical Report: Accurate 4 Bit Attention for Plug-and-play Inference Acceleration*, [https://arxiv.org/abs/2411.10958](https://substack.com/redirect/b687e920-1423-4298-bf17-16b90c7a157d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Nov, *Bi-Mamba: Towards Accurate 1-Bit State Space Models*, [https://arxiv.org/abs/2411.11843](https://substack.com/redirect/b258e20d-7feb-40a2-aad7-d91c6e79659f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Nov, RedPajama: an Open Dataset for Training Large Language Models, [https://arxiv.org/abs/2411.12372](https://substack.com/redirect/23068f08-5213-4a2f-84d8-bba03a496967?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Hymba: A Hybrid-head Architecture for Small Language Models*, [https://arxiv.org/abs/2411.13676](https://substack.com/redirect/9b518545-f769-488b-b9a9-3778977b1ba7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Loss-to-Loss Prediction: Scaling Laws for All Datasets*, [https://arxiv.org/abs/2411.12925](https://substack.com/redirect/a2bf33a3-a6b3-4009-a62f-117b95c8ddeb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *When Precision Meets Position: BFloat16 Breaks Down RoPE in Long-Context Training*, [https://arxiv.org/abs/2411.13476](https://substack.com/redirect/c59fefd8-7501-4433-a0c7-8d570d59237a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## Text to Multiview and Texturing

  - ## **November 2024**
  - 1 Nov, *Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations*, [https://arxiv.org/abs/2411.00640](https://substack.com/redirect/54f7c841-4f1b-40c5-b813-6d6eec518212?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Adapting While Learning: Grounding LLMs for Scientific Problems with Intelligent Tool Usage Adaptation*, [https://arxiv.org/abs/2411.00412](https://substack.com/redirect/826f004c-b9a1-4f81-bbe2-8a41a128cfd3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Multi-expert Prompting Improves Reliability, Safety, and Usefulness of Large Language Models*, [https://arxiv.org/abs/2411.00492](https://substack.com/redirect/6c3b5229-1e78-4e6c-b9e5-2707d00ba778?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Nov, S*ample-Efficient Alignment for LLMs*, [https://arxiv.org/abs/2411.01493](https://substack.com/redirect/240651cf-8138-4af1-a1d1-af31433b77ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov 2024, *A Comprehensive Survey of Small Language Models in the Era of Large Language Models: Techniques, Enhancements, Applications, Collaboration with LLMs, and Trustworthiness*, [https://arxiv.org/abs/2411.03350](https://substack.com/redirect/f32e1ad1-a406-4198-b9ab-aa4b2c0f431b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *"Give Me BF16 or Give Me Death"? Accuracy-Performance Trade-Offs in LLM Quantization*, [https://arxiv.org/abs/2411.02355](https://substack.com/redirect/5d83fef8-ae25-4356-815e-160975bf792b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *Parameter-Efficient Fine-Tuning of Large Language Models for Unit Test Generation: An Empirical Study*, [https://arxiv.org/abs/2411.02462](https://substack.com/redirect/7778c822-74f0-41ec-a2f7-cad21e8c40a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Nov, *HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems*, [https://arxiv.org/abs/2411.02959](https://substack.com/redirect/d759a229-793c-44ef-9510-05a1f9924bdc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Both Text and Images Leaked! A Systematic Analysis of Multimodal LLM Data Contamination*, [https://arxiv.org/abs/2411.03823](https://substack.com/redirect/3c24948f-b3d3-4af6-955a-e4b75d065797?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding*, [https://arxiv.org/abs/2411.04282](https://substack.com/redirect/3c921cb4-e59c-495c-8297-7782441c41e9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Number Cookbook: Number Understanding of Language Models and How to Improve It*, [https://arxiv.org/abs/2411.03766](https://substack.com/redirect/c9b2910c-ab97-4c33-bab2-705f02c8a2b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Mixture-of-Transformers: A Sparse and Scalable Architecture for Multi-Modal Foundation Models*, [https://arxiv.org/abs/2411.04996](https://substack.com/redirect/d6843086-7122-49ef-9604-5f6deb075c93?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *BitNet a4.8: 4-bit Activations for 1-bit LLMs*, [https://arxiv.org/abs/2411.04965](https://substack.com/redirect/6777d927-412f-4ff2-b334-c5d8381638cc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Scaling Laws for Precision*, [https://arxiv.org/abs/2411.04330](https://substack.com/redirect/f3c15ba7-cbf0-4962-a87a-99263612278b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Energy Efficient Protein Language Models: Leveraging Small Language Models with LoRA for Controllable Protein Generation*, [https://arxiv.org/abs/2411.05966](https://substack.com/redirect/4da9a386-3dbd-48fe-b1ec-4cfaeb276927?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Balancing Pipeline Parallelism with Vocabulary Parallelism*, [https://arxiv.org/abs/2411.05288](https://substack.com/redirect/353d44d7-41ff-4867-90a7-37ec001ce5d1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Nov, *Toward Optimal Search and Retrieval for RAG*, [https://arxiv.org/abs/2411.07396](https://substack.com/redirect/4f8f08ab-ffe5-42ec-ab52-dd65d8e9db52?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Large Language Models Can Self-Improve in Long-context Reasoning*, [https://arxiv.org/abs/2411.08147](https://substack.com/redirect/73b810b2-20e1-44b7-9066-92129876da55?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Stronger Models are NOT Stronger Teachers for Instruction Tuning*, [https://arxiv.org/abs/2411.07133](https://substack.com/redirect/4018c81d-0e93-4f04-b7e6-74b077492eae?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Direct Preference Optimization Using Sparse Feature-Level Constraints*, [https://arxiv.org/abs/2411.07618](https://substack.com/redirect/15e16eae-dc79-4d86-9bcf-3593d4f2636e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Nov, *Cut Your Losses in Large-Vocabulary Language Models*, [https://arxiv.org/abs/2411.09009](https://substack.com/redirect/86b4d912-bba7-4d87-804e-b9004e58283f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Nov, *Does Prompt Formatting Have Any Impact on LLM Performance?*, [https://arxiv.org/abs/2411.10541](https://substack.com/redirect/f0b9adaa-3c37-44a2-8c20-4945afcc9aef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SymDPO: Boosting In-Context Learning of Large Multimodal Models with Symbol Demonstration Direct Preference Optimization*, [https://arxiv.org/abs/2411.11909](https://substack.com/redirect/79bc2538-af6e-4c8c-b2bd-d284627da587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SageAttention2 Technical Report: Accurate 4 Bit Attention for Plug-and-play Inference Acceleration*, [https://arxiv.org/abs/2411.10958](https://substack.com/redirect/b687e920-1423-4298-bf17-16b90c7a157d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Nov, *Bi-Mamba: Towards Accurate 1-Bit State Space Models*, [https://arxiv.org/abs/2411.11843](https://substack.com/redirect/b258e20d-7feb-40a2-aad7-d91c6e79659f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Nov, RedPajama: an Open Dataset for Training Large Language Models, [https://arxiv.org/abs/2411.12372](https://substack.com/redirect/23068f08-5213-4a2f-84d8-bba03a496967?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Hymba: A Hybrid-head Architecture for Small Language Models*, [https://arxiv.org/abs/2411.13676](https://substack.com/redirect/9b518545-f769-488b-b9a9-3778977b1ba7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Loss-to-Loss Prediction: Scaling Laws for All Datasets*, [https://arxiv.org/abs/2411.12925](https://substack.com/redirect/a2bf33a3-a6b3-4009-a62f-117b95c8ddeb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *When Precision Meets Position: BFloat16 Breaks Down RoPE in Long-Context Training*, [https://arxiv.org/abs/2411.13476](https://substack.com/redirect/c59fefd8-7501-4433-a0c7-8d570d59237a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **April 2024**
  - 1 Apr, *Do Language Models Plan Ahead for Future Tokens?*, [https://arxiv.org/abs/2404.00859](https://substack.com/redirect/674dfd1a-800a-4cfd-9e67-e7d8bdf45570?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Bigger is not Always Better: Scaling Properties of Latent Diffusion Models*, [https://arxiv.org/abs/2404.01367](https://substack.com/redirect/a09d2339-253e-4b9c-893a-5e458139c2bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *The Fine Line: Navigating Large Language Model Pretraining with Down-streaming Capability Analysis*, [https://arxiv.org/abs/2404.01204](https://substack.com/redirect/656ad167-f982-44b3-a45e-4bba6155f068?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Diffusion-RWKV: Scaling RWKV-Like Architectures for Diffusion Models*, [https://arxiv.org/abs/2404.04478](https://substack.com/redirect/e1260dcf-e6e8-4499-a23b-cd165a9044ff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Mixture-of-Depths: Dynamically Allocating Compute in Transformer-Based Language Models*, [https://arxiv.org/abs/2404.02258](https://substack.com/redirect/3abf27d6-c45c-4105-badc-39912c1e33ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Long-context LLMs Struggle with Long In-context Learning*, [https://arxiv.org/abs/2404.02060](https://substack.com/redirect/e312eee6-b991-416c-9863-9bfb6a6a8df2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Emergent Abilities in Reduced-Scale Generative Language Models*, [https://arxiv.org/abs/2404.02204](https://substack.com/redirect/52532fa9-285a-4c0e-8bde-1591eb953e2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *On the Scalability of Diffusion-based Text-to-Image Generation*, [https://arxiv.org/abs/2404.02883](https://substack.com/redirect/db89b6ae-15d5-493b-87e9-554fce1cb840?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *BAdam: A Memory Efficient Full Parameter Training Method for Large Language Models*, [https://arxiv.org/abs/2404.02827](https://substack.com/redirect/a6eeedc6-5257-494b-8bd4-f1f8102110e8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *Cross-Attention Makes Inference Cumbersome in Text-to-Image Diffusion Models*, [https://arxiv.org/abs/2404.02747](https://substack.com/redirect/ea27317e-f84c-4a88-bd7d-e42e7d45bcb2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Direct Nash Optimization: Teaching Language Models to Self-Improve with General Preferences*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Training LLMs over Neurally Compressed Text*, [https://arxiv.org/abs/2404.03626](https://substack.com/redirect/873f7c27-d879-40e1-9020-451aae9e187e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *CantTalkAboutThis: Aligning Language Models to Stay on Topic in Dialogues*, [https://arxiv.org/abs/2404.03820](https://substack.com/redirect/1b840346-40c1-4538-8c45-8acc3eea6905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *ReFT: Representation Finetuning for Language Models*, [https://arxiv.org/abs/2404.03592](https://substack.com/redirect/24f64667-d62c-46db-97ab-26d09d7f3770?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data*, [https://arxiv.org/abs/2404.03862](https://substack.com/redirect/78a6ad55-4c02-470e-a1fa-94a32fa1cac9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Sigma: Siamese Mamba Network for Multi-Modal Semantic Segmentation*, [https://arxiv.org/abs/2404.04256](https://substack.com/redirect/6716e58a-8ae7-4375-8034-746d87f35906?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *AutoCodeRover: Autonomous Program Improvement*, [https://arxiv.org/abs/2404.05427](https://substack.com/redirect/6c5eaf40-07b9-459b-9d9f-460f05ae39a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence*, [https://arxiv.org/abs/2404.05892](https://substack.com/redirect/961ef83e-bc7b-406d-8cc5-65d09baca8fe?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *CodecLM: Aligning Language Models with Tailored Synthetic Data*, [https://arxiv.org/abs/2404.05875](https://substack.com/redirect/15058c05-b607-4c42-b9f3-e2085ad7a880?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *MiniCPM: Unveiling the Potential of Small Language Models with Scalable Training Strategies*, [https://arxiv.org/abs/2404.06395](https://substack.com/redirect/ab6771aa-fc59-47f8-ba6e-70313a8e853a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *Elephants Never Forget: Memorization and Learning of Tabular Data in Large Language Models*, [https://arxiv.org/abs/2404.06209](https://substack.com/redirect/24f21c50-8eef-4da2-a5a0-b5474403ef9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *LLM2Vec: Large Language Models Are Secretly Powerful Text Encoders*, [https://arxiv.org/abs/2404.05961](https://substack.com/redirect/82d98b9c-870b-4a38-b09d-0e01cf8de874?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Adapting LLaMA Decoder to Vision Transformer*, [https://arxiv.org/abs/2404.06773](https://substack.com/redirect/dea6e17b-7459-438c-98f7-cb449bcc2236?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Leave No Context Behind: Efficient Infinite Context Transformers with Infini-attention*, [https://arxiv.org/abs/2404.07143](https://substack.com/redirect/1e26e5f6-4ec1-41dc-bd68-660b99bec89b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *LLoCO: Learning Long Contexts Offline*, [https://arxiv.org/abs/2404.07979](https://substack.com/redirect/3eb559bb-67bf-4b82-9408-8a05504794d8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *JetMoE: Reaching Llama2 Performance with 0.1M Dollars*, [https://arxiv.org/abs/2404.07413](https://substack.com/redirect/e3e6ab16-dcf2-43cb-a765-54a34ee0db51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Best Practices and Lessons Learned on Synthetic Data for Language Models*, [https://arxiv.org/abs/2404.07503](https://substack.com/redirect/632edc85-5cd6-44da-b4f5-98d184559eab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Rho-1: Not All Tokens Are What You Need*, [https://arxiv.org/abs/2404.07965](https://substack.com/redirect/0bbc0f80-b388-4a1a-a410-177be37676fb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Pre-training Small Base LMs with Fewer Tokens*, [https://arxiv.org/abs/2404.08634](https://substack.com/redirect/2c319b6e-2323-4041-a54b-5a02b67eb625?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Dataset Reset Policy Optimization for RLHF*, [https://arxiv.org/abs/2404.08495](https://substack.com/redirect/04c8e8b1-1332-4388-b9e3-a9356c1cc5b0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Apr, *LLM In-Context Recall is Prompt Dependent*, [https://arxiv.org/abs/2404.08865](https://substack.com/redirect/69e70412-c86e-4e2f-a70b-300e876ca039?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *State Space Model for New-Generation Network Alternative to Transformers: A Survey*, [https://arxiv.org/abs/2404.09516](https://substack.com/redirect/1d2cdfb1-78ec-4193-9f85-a62eed7476b5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Chinchilla Scaling: A Replication Attempt*, [https://arxiv.org/abs/2404.10102](https://substack.com/redirect/3992d9c8-d8cd-465c-a6a6-7fbde19dd0fd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Learn Your Reference Model for Real Good Alignment*, [https://arxiv.org/abs/2404.09656](https://substack.com/redirect/662f3085-f8e2-4c6a-98f7-d6fcc2442f89?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study*, [https://arxiv.org/abs/2404.10719](https://substack.com/redirect/602dc6c8-6650-4de6-a778-22f5706b0df6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Scaling (Down) CLIP: A Comprehensive Analysis of Data, Architecture, and Training Strategies*, [https://arxiv.org/abs/2404.08197](https://substack.com/redirect/d1da519e-dcfc-4e4d-b28d-26bf125626e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *How Faithful Are RAG Models? Quantifying the Tug-of-War Between RAG and LLMs' Internal Prior*, [https://arxiv.org/abs/2404.10198](https://substack.com/redirect/ed0924d9-5786-4774-ab6d-4ff7e388e0ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Apr, *A Survey on Retrieval-Augmented Text Generation for Large Language Models*, [https://arxiv.org/abs/2404.10981](https://substack.com/redirect/9857b8f9-d1af-44e6-af6b-83d43bf17476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *When LLMs are Unfit Use FastFit: Fast and Effective Text Classification with Many Classes*, [https://arxiv.org/abs/2404.12365](https://substack.com/redirect/d3b56899-524d-4a86-b884-e1644b5ebb36?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
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

  - ## Emerging use cases (AI holding text)

  - ## Luma Dream Machine?
  - Luma Dream Machine is a browser-based AI video generator [developed by Luma Labs](https://www.creativebloq.com/ai/luma-dream-machine-makes-ai-video-open-to-all), a San Francisco-based startup. It allows users to generate short videos (around 5 seconds) by simply entering a text or image prompt.
		- **Free to Use**: Luma Dream Machine is free to try, with no waiting list or subscription required. Users get 30 free video generations per month.
		- **High-Quality Output**: The AI produces impressively clean and detailed videos, adhering to prompts accurately and generating relatively coherent motion.
		- **Fast Generation**: Videos are generated in around 2 minutes after entering the prompt.
		- **Consistent Subjects**: Characters and subjects appear consistent throughout the video, capable of expressing emotion better than many previous AI video models.
		- Difficulty with complex scenes or full-body shots
		- Text in videos may appear garbled
		- Anatomical issues like extra limbs or heads
  - **Meta's Approach: Foundational World Modeling** Meta (formerly Facebook) is taking a distinct approach, focusing on the underlying world modeling needed for video encoding and generation. This emphasis on understanding the principles of physics and object interactions could contribute to  more realistic AI-generated videos.
  - **Technical Capabilities and Limitations**
		- **Capabilities** Current AI video generators demonstrate proficiency in producing high-resolution images and videos. They are capable of style adaptation, simulating complex scenes with multiple elements, and handling variations in aspect ratio and resolution.
		- **Limitations**  Despite their strengths, these models still struggle to accurately simulate physics and lack a complete understanding of cause and effect. Occasional errors regarding object permanence highlight the existing gap between pattern recognition and a comprehensive understanding of the world.
  - **Ethical and Creative Considerations**
		- **Potential Impacts**  Advancements in AI video generation raise questions about the future of creative professions and the ethical implications of AI-generated content. Balancing technological innovation with safeguarding the integrity of human creativity is an important consideration.

  - ## Texturing

  - ## Text to Multiview and Texturing

  - ## **November 2024**
  - 1 Nov, *Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations*, [https://arxiv.org/abs/2411.00640](https://substack.com/redirect/54f7c841-4f1b-40c5-b813-6d6eec518212?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Adapting While Learning: Grounding LLMs for Scientific Problems with Intelligent Tool Usage Adaptation*, [https://arxiv.org/abs/2411.00412](https://substack.com/redirect/826f004c-b9a1-4f81-bbe2-8a41a128cfd3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Multi-expert Prompting Improves Reliability, Safety, and Usefulness of Large Language Models*, [https://arxiv.org/abs/2411.00492](https://substack.com/redirect/6c3b5229-1e78-4e6c-b9e5-2707d00ba778?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Nov, S*ample-Efficient Alignment for LLMs*, [https://arxiv.org/abs/2411.01493](https://substack.com/redirect/240651cf-8138-4af1-a1d1-af31433b77ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov 2024, *A Comprehensive Survey of Small Language Models in the Era of Large Language Models: Techniques, Enhancements, Applications, Collaboration with LLMs, and Trustworthiness*, [https://arxiv.org/abs/2411.03350](https://substack.com/redirect/f32e1ad1-a406-4198-b9ab-aa4b2c0f431b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *"Give Me BF16 or Give Me Death"? Accuracy-Performance Trade-Offs in LLM Quantization*, [https://arxiv.org/abs/2411.02355](https://substack.com/redirect/5d83fef8-ae25-4356-815e-160975bf792b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *Parameter-Efficient Fine-Tuning of Large Language Models for Unit Test Generation: An Empirical Study*, [https://arxiv.org/abs/2411.02462](https://substack.com/redirect/7778c822-74f0-41ec-a2f7-cad21e8c40a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Nov, *HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems*, [https://arxiv.org/abs/2411.02959](https://substack.com/redirect/d759a229-793c-44ef-9510-05a1f9924bdc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Both Text and Images Leaked! A Systematic Analysis of Multimodal LLM Data Contamination*, [https://arxiv.org/abs/2411.03823](https://substack.com/redirect/3c24948f-b3d3-4af6-955a-e4b75d065797?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding*, [https://arxiv.org/abs/2411.04282](https://substack.com/redirect/3c921cb4-e59c-495c-8297-7782441c41e9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Number Cookbook: Number Understanding of Language Models and How to Improve It*, [https://arxiv.org/abs/2411.03766](https://substack.com/redirect/c9b2910c-ab97-4c33-bab2-705f02c8a2b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Mixture-of-Transformers: A Sparse and Scalable Architecture for Multi-Modal Foundation Models*, [https://arxiv.org/abs/2411.04996](https://substack.com/redirect/d6843086-7122-49ef-9604-5f6deb075c93?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *BitNet a4.8: 4-bit Activations for 1-bit LLMs*, [https://arxiv.org/abs/2411.04965](https://substack.com/redirect/6777d927-412f-4ff2-b334-c5d8381638cc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Scaling Laws for Precision*, [https://arxiv.org/abs/2411.04330](https://substack.com/redirect/f3c15ba7-cbf0-4962-a87a-99263612278b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Energy Efficient Protein Language Models: Leveraging Small Language Models with LoRA for Controllable Protein Generation*, [https://arxiv.org/abs/2411.05966](https://substack.com/redirect/4da9a386-3dbd-48fe-b1ec-4cfaeb276927?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Balancing Pipeline Parallelism with Vocabulary Parallelism*, [https://arxiv.org/abs/2411.05288](https://substack.com/redirect/353d44d7-41ff-4867-90a7-37ec001ce5d1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Nov, *Toward Optimal Search and Retrieval for RAG*, [https://arxiv.org/abs/2411.07396](https://substack.com/redirect/4f8f08ab-ffe5-42ec-ab52-dd65d8e9db52?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Large Language Models Can Self-Improve in Long-context Reasoning*, [https://arxiv.org/abs/2411.08147](https://substack.com/redirect/73b810b2-20e1-44b7-9066-92129876da55?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Stronger Models are NOT Stronger Teachers for Instruction Tuning*, [https://arxiv.org/abs/2411.07133](https://substack.com/redirect/4018c81d-0e93-4f04-b7e6-74b077492eae?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Direct Preference Optimization Using Sparse Feature-Level Constraints*, [https://arxiv.org/abs/2411.07618](https://substack.com/redirect/15e16eae-dc79-4d86-9bcf-3593d4f2636e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Nov, *Cut Your Losses in Large-Vocabulary Language Models*, [https://arxiv.org/abs/2411.09009](https://substack.com/redirect/86b4d912-bba7-4d87-804e-b9004e58283f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Nov, *Does Prompt Formatting Have Any Impact on LLM Performance?*, [https://arxiv.org/abs/2411.10541](https://substack.com/redirect/f0b9adaa-3c37-44a2-8c20-4945afcc9aef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SymDPO: Boosting In-Context Learning of Large Multimodal Models with Symbol Demonstration Direct Preference Optimization*, [https://arxiv.org/abs/2411.11909](https://substack.com/redirect/79bc2538-af6e-4c8c-b2bd-d284627da587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SageAttention2 Technical Report: Accurate 4 Bit Attention for Plug-and-play Inference Acceleration*, [https://arxiv.org/abs/2411.10958](https://substack.com/redirect/b687e920-1423-4298-bf17-16b90c7a157d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Nov, *Bi-Mamba: Towards Accurate 1-Bit State Space Models*, [https://arxiv.org/abs/2411.11843](https://substack.com/redirect/b258e20d-7feb-40a2-aad7-d91c6e79659f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Nov, RedPajama: an Open Dataset for Training Large Language Models, [https://arxiv.org/abs/2411.12372](https://substack.com/redirect/23068f08-5213-4a2f-84d8-bba03a496967?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Hymba: A Hybrid-head Architecture for Small Language Models*, [https://arxiv.org/abs/2411.13676](https://substack.com/redirect/9b518545-f769-488b-b9a9-3778977b1ba7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Loss-to-Loss Prediction: Scaling Laws for All Datasets*, [https://arxiv.org/abs/2411.12925](https://substack.com/redirect/a2bf33a3-a6b3-4009-a62f-117b95c8ddeb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *When Precision Meets Position: BFloat16 Breaks Down RoPE in Long-Context Training*, [https://arxiv.org/abs/2411.13476](https://substack.com/redirect/c59fefd8-7501-4433-a0c7-8d570d59237a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *Multimodal Autoregressive Pre-training of Large Vision Encoders*, [https://arxiv.org/abs/2411.14402](https://substack.com/redirect/214aff7f-57e7-4a36-802f-fd9e5ff27b2b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *Natural Language Reinforcement Learning*, [https://arxiv.org/abs/2411.14251](https://substack.com/redirect/ebb1e570-1551-4f82-ac75-ec519d09c549?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Nov, *Large Multi-modal Models Can Interpret Features in Large Multi-modal Models*, [https://arxiv.org/abs/2411.14982](https://substack.com/redirect/cee124a0-f5d7-4b2b-a2b9-c0ece30c7e97?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Nov, *MME-Survey: A Comprehensive Survey on Evaluation of Multimodal LLMs*, [https://arxiv.org/abs/2411.15296](https://substack.com/redirect/5ef61ef4-1460-4246-b979-268f89302f0b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Nov, *TÜLU 3: Pushing Frontiers in Open Language Model Post-Training*, [https://arxiv.org/abs/2411.15124](https://substack.com/redirect/451fdd95-ec0e-40df-9736-c2870291a5df?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Nov, *LLMs Do Not Think Step-by-step In Implicit Reasoning*, [https://arxiv.org/abs/2411.15862](https://substack.com/redirect/f1b5067f-492d-4a1b-b703-2617da241d25?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **April 2024**
  - 1 Apr, *Do Language Models Plan Ahead for Future Tokens?*, [https://arxiv.org/abs/2404.00859](https://substack.com/redirect/674dfd1a-800a-4cfd-9e67-e7d8bdf45570?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Bigger is not Always Better: Scaling Properties of Latent Diffusion Models*, [https://arxiv.org/abs/2404.01367](https://substack.com/redirect/a09d2339-253e-4b9c-893a-5e458139c2bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *The Fine Line: Navigating Large Language Model Pretraining with Down-streaming Capability Analysis*, [https://arxiv.org/abs/2404.01204](https://substack.com/redirect/656ad167-f982-44b3-a45e-4bba6155f068?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Diffusion-RWKV: Scaling RWKV-Like Architectures for Diffusion Models*, [https://arxiv.org/abs/2404.04478](https://substack.com/redirect/e1260dcf-e6e8-4499-a23b-cd165a9044ff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Mixture-of-Depths: Dynamically Allocating Compute in Transformer-Based Language Models*, [https://arxiv.org/abs/2404.02258](https://substack.com/redirect/3abf27d6-c45c-4105-badc-39912c1e33ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Long-context LLMs Struggle with Long In-context Learning*, [https://arxiv.org/abs/2404.02060](https://substack.com/redirect/e312eee6-b991-416c-9863-9bfb6a6a8df2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Emergent Abilities in Reduced-Scale Generative Language Models*, [https://arxiv.org/abs/2404.02204](https://substack.com/redirect/52532fa9-285a-4c0e-8bde-1591eb953e2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *On the Scalability of Diffusion-based Text-to-Image Generation*, [https://arxiv.org/abs/2404.02883](https://substack.com/redirect/db89b6ae-15d5-493b-87e9-554fce1cb840?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *BAdam: A Memory Efficient Full Parameter Training Method for Large Language Models*, [https://arxiv.org/abs/2404.02827](https://substack.com/redirect/a6eeedc6-5257-494b-8bd4-f1f8102110e8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *Cross-Attention Makes Inference Cumbersome in Text-to-Image Diffusion Models*, [https://arxiv.org/abs/2404.02747](https://substack.com/redirect/ea27317e-f84c-4a88-bd7d-e42e7d45bcb2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Direct Nash Optimization: Teaching Language Models to Self-Improve with General Preferences*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Training LLMs over Neurally Compressed Text*, [https://arxiv.org/abs/2404.03626](https://substack.com/redirect/873f7c27-d879-40e1-9020-451aae9e187e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *CantTalkAboutThis: Aligning Language Models to Stay on Topic in Dialogues*, [https://arxiv.org/abs/2404.03820](https://substack.com/redirect/1b840346-40c1-4538-8c45-8acc3eea6905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *ReFT: Representation Finetuning for Language Models*, [https://arxiv.org/abs/2404.03592](https://substack.com/redirect/24f64667-d62c-46db-97ab-26d09d7f3770?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data*, [https://arxiv.org/abs/2404.03862](https://substack.com/redirect/78a6ad55-4c02-470e-a1fa-94a32fa1cac9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Sigma: Siamese Mamba Network for Multi-Modal Semantic Segmentation*, [https://arxiv.org/abs/2404.04256](https://substack.com/redirect/6716e58a-8ae7-4375-8034-746d87f35906?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *AutoCodeRover: Autonomous Program Improvement*, [https://arxiv.org/abs/2404.05427](https://substack.com/redirect/6c5eaf40-07b9-459b-9d9f-460f05ae39a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence*, [https://arxiv.org/abs/2404.05892](https://substack.com/redirect/961ef83e-bc7b-406d-8cc5-65d09baca8fe?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *CodecLM: Aligning Language Models with Tailored Synthetic Data*, [https://arxiv.org/abs/2404.05875](https://substack.com/redirect/15058c05-b607-4c42-b9f3-e2085ad7a880?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *MiniCPM: Unveiling the Potential of Small Language Models with Scalable Training Strategies*, [https://arxiv.org/abs/2404.06395](https://substack.com/redirect/ab6771aa-fc59-47f8-ba6e-70313a8e853a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *Elephants Never Forget: Memorization and Learning of Tabular Data in Large Language Models*, [https://arxiv.org/abs/2404.06209](https://substack.com/redirect/24f21c50-8eef-4da2-a5a0-b5474403ef9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *LLM2Vec: Large Language Models Are Secretly Powerful Text Encoders*, [https://arxiv.org/abs/2404.05961](https://substack.com/redirect/82d98b9c-870b-4a38-b09d-0e01cf8de874?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Adapting LLaMA Decoder to Vision Transformer*, [https://arxiv.org/abs/2404.06773](https://substack.com/redirect/dea6e17b-7459-438c-98f7-cb449bcc2236?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Leave No Context Behind: Efficient Infinite Context Transformers with Infini-attention*, [https://arxiv.org/abs/2404.07143](https://substack.com/redirect/1e26e5f6-4ec1-41dc-bd68-660b99bec89b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *LLoCO: Learning Long Contexts Offline*, [https://arxiv.org/abs/2404.07979](https://substack.com/redirect/3eb559bb-67bf-4b82-9408-8a05504794d8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *JetMoE: Reaching Llama2 Performance with 0.1M Dollars*, [https://arxiv.org/abs/2404.07413](https://substack.com/redirect/e3e6ab16-dcf2-43cb-a765-54a34ee0db51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Best Practices and Lessons Learned on Synthetic Data for Language Models*, [https://arxiv.org/abs/2404.07503](https://substack.com/redirect/632edc85-5cd6-44da-b4f5-98d184559eab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Rho-1: Not All Tokens Are What You Need*, [https://arxiv.org/abs/2404.07965](https://substack.com/redirect/0bbc0f80-b388-4a1a-a410-177be37676fb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Pre-training Small Base LMs with Fewer Tokens*, [https://arxiv.org/abs/2404.08634](https://substack.com/redirect/2c319b6e-2323-4041-a54b-5a02b67eb625?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Dataset Reset Policy Optimization for RLHF*, [https://arxiv.org/abs/2404.08495](https://substack.com/redirect/04c8e8b1-1332-4388-b9e3-a9356c1cc5b0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Apr, *LLM In-Context Recall is Prompt Dependent*, [https://arxiv.org/abs/2404.08865](https://substack.com/redirect/69e70412-c86e-4e2f-a70b-300e876ca039?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *State Space Model for New-Generation Network Alternative to Transformers: A Survey*, [https://arxiv.org/abs/2404.09516](https://substack.com/redirect/1d2cdfb1-78ec-4193-9f85-a62eed7476b5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Chinchilla Scaling: A Replication Attempt*, [https://arxiv.org/abs/2404.10102](https://substack.com/redirect/3992d9c8-d8cd-465c-a6a6-7fbde19dd0fd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Learn Your Reference Model for Real Good Alignment*, [https://arxiv.org/abs/2404.09656](https://substack.com/redirect/662f3085-f8e2-4c6a-98f7-d6fcc2442f89?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study*, [https://arxiv.org/abs/2404.10719](https://substack.com/redirect/602dc6c8-6650-4de6-a778-22f5706b0df6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Scaling (Down) CLIP: A Comprehensive Analysis of Data, Architecture, and Training Strategies*, [https://arxiv.org/abs/2404.08197](https://substack.com/redirect/d1da519e-dcfc-4e4d-b28d-26bf125626e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *How Faithful Are RAG Models? Quantifying the Tug-of-War Between RAG and LLMs' Internal Prior*, [https://arxiv.org/abs/2404.10198](https://substack.com/redirect/ed0924d9-5786-4774-ab6d-4ff7e388e0ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Apr, *A Survey on Retrieval-Augmented Text Generation for Large Language Models*, [https://arxiv.org/abs/2404.10981](https://substack.com/redirect/9857b8f9-d1af-44e6-af6b-83d43bf17476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *When LLMs are Unfit Use FastFit: Fast and Effective Text Classification with Many Classes*, [https://arxiv.org/abs/2404.12365](https://substack.com/redirect/d3b56899-524d-4a86-b884-e1644b5ebb36?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *Toward Self-Improvement of LLMs via Imagination, Searching, and Criticizing*, [https://arxiv.org/abs/2404.12253](https://substack.com/redirect/bd2dc2c2-6813-42c6-b8d9-038c2680ed7d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *OpenBezoar: Small, Cost-Effective and Open Models Trained on Mixes of Instruction Data*, [https://arxiv.org/abs/2404.12195](https://substack.com/redirect/2204e7d7-1170-42d7-aaa9-ca9cd694a940?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Apr, *The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions*, [https://arxiv.org/abs/2404.13208](https://substack.com/redirect/f48d6944-eb56-4db7-bc3a-e8612e066776?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *How Good Are Low-bit Quantized LLaMA3 Models? An Empirical Study*, [https://arxiv.org/abs/2404.14047](https://substack.com/redirect/a4fbc1f5-38c2-469a-961d-991bc6bb12bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone*, [https://arxiv.org/abs/2404.14219](https://substack.com/redirect/3950d2ed-0a07-4041-ae24-a0ae41b951b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *OpenELM: An Efficient Language Model Family with Open-source Training and Inference Framework*, [https://arxiv.org/abs/2404.14619](https://substack.com/redirect/8d85605d-dcef-4eea-92c1-1a176ded516b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *A Survey on Self-Evolution of Large Language Models*, [https://arxiv.org/abs/2404.14662](https://substack.com/redirect/b309b37a-4f29-483a-ac03-9baa441d2dc8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *Multi-Head Mixture-of-Experts*, [https://arxiv.org/abs/2404.15045](https://substack.com/redirect/c4fcb7a0-0368-4ed4-af5c-4cf18f32ca58?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *NExT: Teaching Large Language Models to Reason about Code Execution*, [https://arxiv.org/abs/2404.14662](https://substack.com/redirect/b309b37a-4f29-483a-ac03-9baa441d2dc8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *Graph Machine Learning in the Era of Large Language Models (LLMs)*, [https://arxiv.org/abs/2404.14928](https://substack.com/redirect/bf83e10a-8a6a-4ddc-b4f7-ec0414c93d27?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Apr, *Retrieval Head Mechanistically Explains Long-Context Factuality*, [https://arxiv.org/abs/2404.15574](https://substack.com/redirect/1d55f31c-d63c-4eeb-a742-4475874a71fa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Apr, *Layer Skip: Enabling Early Exit Inference and Self-Speculative Decoding*, [https://arxiv.org/abs/2404.16710](https://substack.com/redirect/88c327a5-c85d-40e3-9e0f-cfea3d2d45d7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Apr, *Make Your LLM Fully Utilize the Context*, [https://arxiv.org/abs/2404.16811](https://substack.com/redirect/8f97c6e7-6429-4845-b3f5-138bffffbe5a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Apr, *LoRA Land: 310 Fine-tuned LLMs that Rival GPT-4, A Technical Report*, [https://arxiv.org/abs/2405.00732](https://substack.com/redirect/a2e9594d-b621-47f2-935a-188c4573451a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *Better & Faster Large Language Models via Multi-token Prediction*, [https://arxiv.org/abs/2404.19737](https://substack.com/redirect/1840a07d-bb38-460e-a984-2ab218bbc418?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *RAG and RAU: A Survey on Retrieval-Augmented Language Model in Natural Language Processing*, [https://arxiv.org/abs/2404.19543](https://substack.com/redirect/050292b6-0565-4320-9ac0-f724d8fe7c6a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *A Primer on the Inner Workings of Transformer-based Language Models*, [https://arxiv.org/abs/2405.00208](https://substack.com/redirect/ef974363-87cb-43cf-95d8-943e567bb180?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *When to Retrieve: Teaching LLMs to Utilize Information Retrieval Effectively*, [https://arxiv.org/abs/2404.19705](https://substack.com/redirect/17c0916d-1b71-4e46-9ac9-4442f68772b7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *KAN: Kolmogorov–Arnold Networks*, [https://arxiv.org/abs/2404.19756](https://substack.com/redirect/f372cf13-200c-47b8-a7dc-57f70ca72476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ### Evaluation
  - Comparison and Detection
  - **LLM QA Evaluation on Wikipedia**: An insightful comparison of different LLMs' performance on QA tasks using Wikipedia as a benchmark. [LLM QA Evaluation Wikipedia](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - *This study offers a comparative analysis highlighting the strengths and weaknesses of open-source vs closed-source LLMs in handling QA tasks, providing valuable insights for both developers and users.*
  - **LLM Zoo**: A collection of various LLMs to explore and compare their capabilities. [LLMZoo GitHub](https://github.com/FreedomIntelligence/LLMZoo)
  - *A unique repository that provides access to a wide range of LLMs, facilitating exploration, comparison, and understanding of different models' functionalities and performance.*
  - **Can AI-Generated Text be Reliably Detected?**: Addresses the critical question of distinguishing between human and AI-generated text. [AI-Generated Text Detection Study](https://arxiv.org/abs/2303.11156)
  - *This paper delves into the challenges and methodologies involved in detecting AI-generated text, offering insights into the reliability of current detection techniques.*

  - ## Introduction to Large Language Models
  - Large Language Models (LLMs) like OpenAI's GPT series have revolutionized the field of artificial intelligence, offering unprecedented capabilities in natural language understanding and generation. These models are trained on vast amounts of text data, enabling them to perform a wide range of language-based tasks, from writing and translation to answering questions and generating code.
  - [This is a jargon free primer](https://www.understandingai.org/p/large-language-models-explained-with)

  - ## Mental health [[Employment Social Contract Under Automation]]
  - [Fraudulent studies are undermining the reliability of systematic reviews – a study of the prevalence of problematic images in preclinical studies of depression | bioRxiv](https://www.biorxiv.org/content/10.1101/2024.02.13.580196v1) [[Death of the Internet]] [[Deepfakes and fraudulent content]]
  - [Jonathan Haidt Wants You to Take Away Your Kid’s Phone | The New Yorker](https://www.newyorker.com/news/the-new-yorker-interview/jonathan-haidt-wants-you-to-take-away-your-kids-phone)
		- Jonathan Haidt, a social psychologist and the author of the book "The Anxious Generation: How the Great Rewiring of Childhood is Causing an Epidemic of Mental Illness". The main points covered in the interview are:
			- Haidt argues that a whole generation has been damaged by growing up with unrestricted access to social media and an overprotected childhood, leading to a sharp increase in anxiety, depression, and self-harm among teenagers, especially girls, starting around 2012.
			- He attributes this to the rapid adoption of smartphones and social media platforms between 2010 and 2015, which radically changed childhood by replacing real-life interactions and play with excessive screen time and exposure to harmful online content.
			- Haidt presents evidence from correlational and experimental studies to support his claim that social media use causes mental health issues, while acknowledging the need for more research.
			- He argues that the benefits of social media are outweighed by its negative impact on child development, as it deprives children of essential real-life experiences, such as play, adventure, and healthy risk-taking.
			- Haidt advocates for changing social norms and implementing restrictions on social media use, such as banning phones in schools and limiting access to social media platforms for children under 16, rather than an outright ban on technology.
		- <iframe src="https://jonathanhaidt.com/anxious-generation/" style="width: 100%; height: 600px"></iframe>

  - ## Emerging use cases (AI holding text)

  - ## Style transfer for humans
  - Multiple techniques tested with the same [[LoRA DoRA etc]] for [comparison](https://discord.com/channels/1076117621407223829/1198416106554130552/1198416106554130552)
  - [ActAnywhere](https://actanywhere.github.io/)
  - [AI-Enhanced Creator (beehiiv.com)](https://nejcsusec.beehiiv.com/)
  - AnimateAnyone for [[Node-Based Diffusion Pipeline Interface]] [MrForExample/ComfyUI-AnimateAnyone-Evolved: Improved AnimateAnyone implementation that allows you to use the opse image sequence and reference image to generate stylized video (github.com)](https://github.com/MrForExample/ComfyUI-AnimateAnyone-Evolved)
  - [CG Renders to AI ANIMATION
  - NIKE video — MOONWALKERS PICTURE](https://www.moonwalkerspicture.com/newslounge/cg-renders-to-ai-workflow-vol-02-anim)
  - Motion Control
  - [MotionCtrl (wzhouxiff.github.io)](https://wzhouxiff.github.io/projects/MotionCtrl/)
  - [[2401.12945] Lumiere: A Space-Time Diffusion Model for Video Generation (arxiv.org)](https://arxiv.org/abs/2401.12945)
  - [I2VGen-XL
  - a Hugging Face Space by damo-vilab](https://huggingface.co/spaces/damo-vilab/I2VGen-XL)
  - [ali-vilab/i2vgen-xl: Official repo for VGen: a holistic video generation ecosystem for video generation building on diffusion models (github.com)](https://github.com/ali-vilab/i2vgen-xl)
  - [MagicVideo-V2: Multi-Stage High-Aesthetic Video Generation (magicvideov2.github.io)](https://magicvideov2.github.io/)
  - Interpolation and interframe consistency
  - [controlnet and ebsynth temporal consistency](https://www.reddit.com/r/StableDiffusion/comments/114zmh3/controlnet_and_ebsynth_make_incredible_temporally/)
  - [Motion-Conditioned Diffusion Model for Controllable Video Synthesis](https://tsaishien-chen.github.io/MCDiff/)
  - [Interframe consistency is now here](https://twitter.com/cut_pow/status/1576748659051749377)
  - [Interpolation between two frames](https://film-net.github.io/)
  - [FILM frame interpolator](https://film-net.github.io/)
  - [ProPainter for Video Inpainting (shangchenzhou.com)](https://shangchenzhou.com/projects/ProPainter/)
  - [zengyh1900/Awesome-Image-Inpainting: A curated list of image inpainting and video inpainting papers and resources (github.com)](https://github.com/zengyh1900/Awesome-Image-Inpainting)
  - [Runway AI video editing](https://www.youtube.com/c/RunwayML)
  - Gen2 examples
  - Multishot [VideoDrafter: Content-Consistent Multi-Scene Video Generation with LLM](https://videodrafter.github.io/)
  - [vienna with prompts](https://www.linkedin.com/posts/dr-andreas-fraunberger_marketinginnovation-digitaltourism-ar-ugcPost-7073039429417730048-BKfQ?utm_source=share&utm_medium=member_desktop)
  - [Video slowmo and enhance](http://zeyuan-chen.com/VideoINR/)
  - [deforum stable diffusion video](https://github.com/HelixNGC7293/DeforumStableDiffusionLocal)
  - [Phenaki](https://phenaki.video/)
  - Collaborative video pipeline
  - [Magicvideo (faster)](https://magicvideo.github.io/)
  - [Production ready re aging](https://studios.disneyresearch.com/2022/11/30/production-ready-face-re-aging-for-visual-effects/)
  - [distilled models for 25fps](https://arxiv.org/abs/2202.00512)
  - [Stable warpfusion](https://www.linkedin.com/posts/rainisto_stablediffusion-musicvideo-remix-activity-7018207241522614272-YT1y?utm_source=share&utm_medium=member_desktop)
  - [Video talking heads from text service](https://www.synthesia.io/)
  - [Tune a video](https://tuneavideo.github.io/)
  - [Vidyo: Generates videos for social networks from longer videos.](https://vidyo.ai/)
  - [Stylegan-T video transformer from google](https://sites.google.com/view/stylegan-t)
  - [Houdini](https://github.com/proceduralit/StableDiffusion_Houdini)
  - [Dream Mix video to video remix](https://dreamix-video-editing.github.io/)
  - [RIFE frame interpolation](https://github.com/megvii-research/ECCV2022-RIFE)
  - [example github for sd](https://github.com/vladmandic/rife)
  - [Synthesia corporate video generation](https://www.youtube.com/watch?v=4uzzD9sD-PI)
  - [pix2pixHD nextframe google colab](https://colab.research.google.com/github/dvschultz/ml-art-colabs/blob/master/Pix2PixHD_Next_Frame_Prediction.ipynb)
  - [minecraft demo codebase](https://github.com/TSFSean/InvokeAI-DiffusionCraftAI)
  - [animation from mixamo](https://www.reddit.com/r/StableDiffusion/comments/zecyc7/mixamo_animations_stable_diffusion_v2_depth2img/)
  - [Intel enhance photorealism in realtime](https://github.com/isl-org/PhotorealismEnhancement)
  - custom SD video to video script
  - [Testing a custom video2video script I'm working on. (These used RealisticVision1.4 & ControlNet) : r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/comments/11iviep/testing_a_custom_video2video_script_im_working_on/)
  - [consistency tools for character tooning](https://www.reddit.com/r/StableDiffusion/comments/11okvc8/how_about_another_joke_murraaaay/)
  - Alibaba system
  - [website](https://videocomposer.github.io/)
  - [github](https://github.com/damo-vilab/videocomposer)
  - [model cards](https://huggingface.co/damo-vilab/MS-Image2Video)
  - [9 new tools](https://twitter.com/mreflow/status/1637957302073565184)
  - [Automatic1111 plugin](https://www.reddit.com/r/StableDiffusion/comments/11w0ba9/modelscope_17b_text2video_model_is_now_available/)
  - [Next frame prediction with controlnet](https://www.reddit.com/r/StableDiffusion/comments/11f8i0g/next_frame_prediction_with_controlnet/)
  - [Will smith eating spaghetti](https://www.reddit.com/r/StableDiffusion/comments/1244h2c/will_smith_eating_spaghetti/)
  - [Transform Video to Animation in Stable Diffusion | How to Install + BEST Consistency Settings: Learn how to use AI to create animations from real videos. We'll use Stable Diffusion and other tools for maximum consistencyProject Files:https://bit.ly/3...](https://www.youtube.com/watch?v=sVmi2Yp43c0&t=22)
  - [How to Use ModelScope text2video with Automatic1111’s Stable Diffusion Web UI | kombitz: Enable the Extension Click on the Extension tab and then click on Install from URL. Enter https://github.com/deforum-art/sd-webui-modelscope-text2video in the URL box and click on Install. Click on Installed and click on Apply and restart UI. Go to your stable-diffusion-webui/models folder and create a folder called ModelScope and then create a folder called t2v under ModelScope. This is your models folder for text2video.](https://www.kombitz.com/2023/03/28/how-to-use-modelscope-text2video-with-automatic1111s-stable-diffusion-web-ui/)
  - This article provides instructions on how to use ModelScope's text2video feature with Automatic1111's Stable Diffusion Web UI.
  - [latent consistency pipeline](https://www.reddit.com/r/StableDiffusion/comments/17fvxrq/60_frame_video_generated_in_646_seconds/)
  - [GitHub
  - Picsart-AI-Research/Text2Video-Zero: Text-to-Image Diffusion Models are Zero-Shot Video Generators: Text-to-Image Diffusion Models are Zero-Shot Video Generators
  - GitHub
  - Picsart-AI-Research/Text2Video-Zero: Text-to-Image Diffusion Models are Zero-Shot Video Generators](https://github.com/Picsart-AI-Research/Text2Video-Zero)
  - The Picsart-AI-Research/Text2Video-Zero repository contains code for a text-to-image diffusion model that can be used to generate videos from text input. The model is a zero-shot video generator, meaning that it does not require any training data in order to generate videos.
  - [LVDM for long video creation](https://yingqinghe.github.io/LVDM/)
  - [The Text2Room algorithm generates textured 3D meshes from a given text prompt by leveraging pre-trained 2D text-to-image models. The core idea is to select camera poses that will result in a seamless, textured 3D mesh. The algorithm iteratively fuses scene frames with the existing geometry to create the final mesh. Evaluation shows that the algorithm is able to generate room-scale 3D geometry with compelling textures from only text as input.](https://lukashoel.github.io/text-to-room/)
  - [The VMesh system models a scene with a triangular mesh and a sparse volume for efficient view synthesis. It is trained on multi-view images of an object to create a contiguous representation of the object's surface and volume. This representation is then used to generate a simplified triangular mesh and a sparse volume, which can be stored and rendered efficiently. The system is designed for real-time applications and can render at 2K 60FPS on common consumer devices.](https://bennyguo.github.io/vmesh/)
  - [LLM guided video generation paper](https://arxiv.org/abs/2309.15091)
  - [LVM video gen using LLM paper](https://arxiv.org/pdf/2309.17444.pdf)
  - [Temporal stable automatic plugin](https://www.reddit.com/r/StableDiffusion/comments/12sd4bi/results_from_latest_version_of_temporal_stable/)
  - [We present a method for high-resolution video synthesis using latent diffusion models (LDMs). Our approach first pre-trains an LDM on images, then introduces a temporal dimension to the latent space diffusion model and fine-tunes it on encoded image sequences (i.e. videos). We focus on two real-world applications: simulation of in-the-wild driving data and creative content creation with text-to-video modeling. Our method achieves state-of-the-art performance on real driving videos of 512 x 1024 resolution. Additionally, our approach can leverage off-the-shelf pre-trained image LDMs, turning the publicly available, state-of-the-art text-to-image LDM Stable Diffusion into an efficient and expressive text-to-video model.](https://buff.ly/41FgQrb)
  - [This script allows for the automation of video stylization using StableDiffusion and ControlNet.](https://github.com/volotat/SD-CN-Animation)
  - [Really easy videos in A1111](https://www.reddit.com/r/StableDiffusion/comments/12otdo0/the_secret_to_really_easy_videos_in_a1111_easier/)
  - [Dancer 4 keyframes, low noise, controlnet approach](https://www.reddit.com/r/StableDiffusion/comments/12nwpdx/dancer_4_keyframes_guide_and_source_files_for/)
  - [Flicker free video workflow paper (good!)](https://anonymous-31415926.github.io/)
  - [Pika labs](https://twitter.com/pika_labs)
  - [Realtime lip-sync API](https://getsynchronicity.io/)
  - [ms image to video on huggingface](https://huggingface.co/spaces/fffiloni/MS-Image2Video)
  - [model to video blender modules](https://github.com/tin2tin/Generative_AI)
  - [videocomposer in python 3.9](https://github.com/mindspore-lab/mindone/tree/master/examples/videocomposer)
  - [motionagent image to video](https://github.com/modelscope/motionagent)
  - [Animatediff comfy workflows on discord](https://discord.com/channels/1076117621407223829/1149372684220768367)
  - [fluid animation youtube](https://www.youtube.com/watch?v=ak_az6ZNYFM)
  - [Controlnet tutorial](https://www.youtube.com/watch?v=WHxIrY2wLQE)
  - [LCM loras for fast inferencing](https://huggingface.co/collections/latent-consistency/latent-consistency-models-loras-654cdd24e111e16f0865fba6)
  - Animatediff is a new animation software that provides a range of tools and features for creating high-quality animations. It offers a user-friendly interface and supports various animation techniques, such as 2D, 3D, stop motion, and more. With Animatediff, users can easily bring their ideas to life and express their creativity through unique and captivating animations. Whether you're a professional animator or a beginner, Animatediff offers a comprehensive set of features to help you create stunning animations in a fast and efficient manner. title:: Animatediff and Stablevideo
  - Youtube tutorials
  - [IF_Animator ComfyUI workflow LCM+Animatediff+IPA+CN (youtube.com)](https://www.youtube.com/watch?v=FE2KmCEv19E)
  - [[Part 2] Tips and Tricks
		- AnimateDiff ControlNet Animation in ComfyUI
		- YouTube](https://www.youtube.com/watch?v=aysg2vFFO9g)
  - [TianxingWu/FreeInit: FreeInit: Bridging Initialization Gap in Video Diffusion Models (github.com)](https://github.com/TianxingWu/FreeInit)
  - [CiaraStrawberry/svd-temporal-controlnet (github.com)](https://github.com/CiaraStrawberry/svd-temporal-controlnet)
  - [ProjectNUWA/DragNUWA (github.com)](https://github.com/ProjectNUWA/DragNUWA)

  - ## Texturing

  - ## Text to Multiview and Texturing

  - ## Text to 3D

  - ## **November 2024**
  - 1 Nov, *Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations*, [https://arxiv.org/abs/2411.00640](https://substack.com/redirect/54f7c841-4f1b-40c5-b813-6d6eec518212?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Adapting While Learning: Grounding LLMs for Scientific Problems with Intelligent Tool Usage Adaptation*, [https://arxiv.org/abs/2411.00412](https://substack.com/redirect/826f004c-b9a1-4f81-bbe2-8a41a128cfd3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Nov 2024, *Multi-expert Prompting Improves Reliability, Safety, and Usefulness of Large Language Models*, [https://arxiv.org/abs/2411.00492](https://substack.com/redirect/6c3b5229-1e78-4e6c-b9e5-2707d00ba778?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Nov, S*ample-Efficient Alignment for LLMs*, [https://arxiv.org/abs/2411.01493](https://substack.com/redirect/240651cf-8138-4af1-a1d1-af31433b77ef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov 2024, *A Comprehensive Survey of Small Language Models in the Era of Large Language Models: Techniques, Enhancements, Applications, Collaboration with LLMs, and Trustworthiness*, [https://arxiv.org/abs/2411.03350](https://substack.com/redirect/f32e1ad1-a406-4198-b9ab-aa4b2c0f431b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *"Give Me BF16 or Give Me Death"? Accuracy-Performance Trade-Offs in LLM Quantization*, [https://arxiv.org/abs/2411.02355](https://substack.com/redirect/5d83fef8-ae25-4356-815e-160975bf792b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Nov, *Parameter-Efficient Fine-Tuning of Large Language Models for Unit Test Generation: An Empirical Study*, [https://arxiv.org/abs/2411.02462](https://substack.com/redirect/7778c822-74f0-41ec-a2f7-cad21e8c40a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Nov, *HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems*, [https://arxiv.org/abs/2411.02959](https://substack.com/redirect/d759a229-793c-44ef-9510-05a1f9924bdc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Both Text and Images Leaked! A Systematic Analysis of Multimodal LLM Data Contamination*, [https://arxiv.org/abs/2411.03823](https://substack.com/redirect/3c24948f-b3d3-4af6-955a-e4b75d065797?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Language Models are Hidden Reasoners: Unlocking Latent Reasoning Capabilities via Self-Rewarding*, [https://arxiv.org/abs/2411.04282](https://substack.com/redirect/3c921cb4-e59c-495c-8297-7782441c41e9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Nov, *Number Cookbook: Number Understanding of Language Models and How to Improve It*, [https://arxiv.org/abs/2411.03766](https://substack.com/redirect/c9b2910c-ab97-4c33-bab2-705f02c8a2b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Mixture-of-Transformers: A Sparse and Scalable Architecture for Multi-Modal Foundation Models*, [https://arxiv.org/abs/2411.04996](https://substack.com/redirect/d6843086-7122-49ef-9604-5f6deb075c93?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *BitNet a4.8: 4-bit Activations for 1-bit LLMs*, [https://arxiv.org/abs/2411.04965](https://substack.com/redirect/6777d927-412f-4ff2-b334-c5d8381638cc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Nov, *Scaling Laws for Precision*, [https://arxiv.org/abs/2411.04330](https://substack.com/redirect/f3c15ba7-cbf0-4962-a87a-99263612278b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Energy Efficient Protein Language Models: Leveraging Small Language Models with LoRA for Controllable Protein Generation*, [https://arxiv.org/abs/2411.05966](https://substack.com/redirect/4da9a386-3dbd-48fe-b1ec-4cfaeb276927?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Nov, *Balancing Pipeline Parallelism with Vocabulary Parallelism*, [https://arxiv.org/abs/2411.05288](https://substack.com/redirect/353d44d7-41ff-4867-90a7-37ec001ce5d1?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Nov, *Toward Optimal Search and Retrieval for RAG*, [https://arxiv.org/abs/2411.07396](https://substack.com/redirect/4f8f08ab-ffe5-42ec-ab52-dd65d8e9db52?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Large Language Models Can Self-Improve in Long-context Reasoning*, [https://arxiv.org/abs/2411.08147](https://substack.com/redirect/73b810b2-20e1-44b7-9066-92129876da55?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Stronger Models are NOT Stronger Teachers for Instruction Tuning*, [https://arxiv.org/abs/2411.07133](https://substack.com/redirect/4018c81d-0e93-4f04-b7e6-74b077492eae?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Nov, *Direct Preference Optimization Using Sparse Feature-Level Constraints*, [https://arxiv.org/abs/2411.07618](https://substack.com/redirect/15e16eae-dc79-4d86-9bcf-3593d4f2636e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Nov, *Cut Your Losses in Large-Vocabulary Language Models*, [https://arxiv.org/abs/2411.09009](https://substack.com/redirect/86b4d912-bba7-4d87-804e-b9004e58283f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Nov, *Does Prompt Formatting Have Any Impact on LLM Performance?*, [https://arxiv.org/abs/2411.10541](https://substack.com/redirect/f0b9adaa-3c37-44a2-8c20-4945afcc9aef?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SymDPO: Boosting In-Context Learning of Large Multimodal Models with Symbol Demonstration Direct Preference Optimization*, [https://arxiv.org/abs/2411.11909](https://substack.com/redirect/79bc2538-af6e-4c8c-b2bd-d284627da587?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Nov, *SageAttention2 Technical Report: Accurate 4 Bit Attention for Plug-and-play Inference Acceleration*, [https://arxiv.org/abs/2411.10958](https://substack.com/redirect/b687e920-1423-4298-bf17-16b90c7a157d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Nov, *Bi-Mamba: Towards Accurate 1-Bit State Space Models*, [https://arxiv.org/abs/2411.11843](https://substack.com/redirect/b258e20d-7feb-40a2-aad7-d91c6e79659f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Nov, RedPajama: an Open Dataset for Training Large Language Models, [https://arxiv.org/abs/2411.12372](https://substack.com/redirect/23068f08-5213-4a2f-84d8-bba03a496967?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Hymba: A Hybrid-head Architecture for Small Language Models*, [https://arxiv.org/abs/2411.13676](https://substack.com/redirect/9b518545-f769-488b-b9a9-3778977b1ba7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Nov, *Loss-to-Loss Prediction: Scaling Laws for All Datasets*, [https://arxiv.org/abs/2411.12925](https://substack.com/redirect/a2bf33a3-a6b3-4009-a62f-117b95c8ddeb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *When Precision Meets Position: BFloat16 Breaks Down RoPE in Long-Context Training*, [https://arxiv.org/abs/2411.13476](https://substack.com/redirect/c59fefd8-7501-4433-a0c7-8d570d59237a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *Multimodal Autoregressive Pre-training of Large Vision Encoders*, [https://arxiv.org/abs/2411.14402](https://substack.com/redirect/214aff7f-57e7-4a36-802f-fd9e5ff27b2b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Nov, *Natural Language Reinforcement Learning*, [https://arxiv.org/abs/2411.14251](https://substack.com/redirect/ebb1e570-1551-4f82-ac75-ec519d09c549?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Nov, *Large Multi-modal Models Can Interpret Features in Large Multi-modal Models*, [https://arxiv.org/abs/2411.14982](https://substack.com/redirect/cee124a0-f5d7-4b2b-a2b9-c0ece30c7e97?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Nov, *MME-Survey: A Comprehensive Survey on Evaluation of Multimodal LLMs*, [https://arxiv.org/abs/2411.15296](https://substack.com/redirect/5ef61ef4-1460-4246-b979-268f89302f0b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Nov, *TÜLU 3: Pushing Frontiers in Open Language Model Post-Training*, [https://arxiv.org/abs/2411.15124](https://substack.com/redirect/451fdd95-ec0e-40df-9736-c2870291a5df?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Nov, *LLMs Do Not Think Step-by-step In Implicit Reasoning*, [https://arxiv.org/abs/2411.15862](https://substack.com/redirect/f1b5067f-492d-4a1b-b703-2617da241d25?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ## **April 2024**
  - 1 Apr, *Do Language Models Plan Ahead for Future Tokens?*, [https://arxiv.org/abs/2404.00859](https://substack.com/redirect/674dfd1a-800a-4cfd-9e67-e7d8bdf45570?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Bigger is not Always Better: Scaling Properties of Latent Diffusion Models*, [https://arxiv.org/abs/2404.01367](https://substack.com/redirect/a09d2339-253e-4b9c-893a-5e458139c2bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *The Fine Line: Navigating Large Language Model Pretraining with Down-streaming Capability Analysis*, [https://arxiv.org/abs/2404.01204](https://substack.com/redirect/656ad167-f982-44b3-a45e-4bba6155f068?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Apr, *Diffusion-RWKV: Scaling RWKV-Like Architectures for Diffusion Models*, [https://arxiv.org/abs/2404.04478](https://substack.com/redirect/e1260dcf-e6e8-4499-a23b-cd165a9044ff?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Mixture-of-Depths: Dynamically Allocating Compute in Transformer-Based Language Models*, [https://arxiv.org/abs/2404.02258](https://substack.com/redirect/3abf27d6-c45c-4105-badc-39912c1e33ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Long-context LLMs Struggle with Long In-context Learning*, [https://arxiv.org/abs/2404.02060](https://substack.com/redirect/e312eee6-b991-416c-9863-9bfb6a6a8df2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Emergent Abilities in Reduced-Scale Generative Language Models*, [https://arxiv.org/abs/2404.02204](https://substack.com/redirect/52532fa9-285a-4c0e-8bde-1591eb953e2a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Apr, *Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *On the Scalability of Diffusion-based Text-to-Image Generation*, [https://arxiv.org/abs/2404.02883](https://substack.com/redirect/db89b6ae-15d5-493b-87e9-554fce1cb840?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *BAdam: A Memory Efficient Full Parameter Training Method for Large Language Models*, [https://arxiv.org/abs/2404.02827](https://substack.com/redirect/a6eeedc6-5257-494b-8bd4-f1f8102110e8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Apr, *Cross-Attention Makes Inference Cumbersome in Text-to-Image Diffusion Models*, [https://arxiv.org/abs/2404.02747](https://substack.com/redirect/ea27317e-f84c-4a88-bd7d-e42e7d45bcb2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Direct Nash Optimization: Teaching Language Models to Self-Improve with General Preferences*, [https://arxiv.org/abs/2404.02151](https://substack.com/redirect/02b51392-a673-443e-acb7-8dae9dad43bf?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *Training LLMs over Neurally Compressed Text*, [https://arxiv.org/abs/2404.03626](https://substack.com/redirect/873f7c27-d879-40e1-9020-451aae9e187e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Apr, *CantTalkAboutThis: Aligning Language Models to Stay on Topic in Dialogues*, [https://arxiv.org/abs/2404.03820](https://substack.com/redirect/1b840346-40c1-4538-8c45-8acc3eea6905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *ReFT: Representation Finetuning for Language Models*, [https://arxiv.org/abs/2404.03592](https://substack.com/redirect/24f64667-d62c-46db-97ab-26d09d7f3770?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data*, [https://arxiv.org/abs/2404.03862](https://substack.com/redirect/78a6ad55-4c02-470e-a1fa-94a32fa1cac9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Apr, *Sigma: Siamese Mamba Network for Multi-Modal Semantic Segmentation*, [https://arxiv.org/abs/2404.04256](https://substack.com/redirect/6716e58a-8ae7-4375-8034-746d87f35906?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *AutoCodeRover: Autonomous Program Improvement*, [https://arxiv.org/abs/2404.05427](https://substack.com/redirect/6c5eaf40-07b9-459b-9d9f-460f05ae39a6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence*, [https://arxiv.org/abs/2404.05892](https://substack.com/redirect/961ef83e-bc7b-406d-8cc5-65d09baca8fe?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Apr, *CodecLM: Aligning Language Models with Tailored Synthetic Data*, [https://arxiv.org/abs/2404.05875](https://substack.com/redirect/15058c05-b607-4c42-b9f3-e2085ad7a880?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *MiniCPM: Unveiling the Potential of Small Language Models with Scalable Training Strategies*, [https://arxiv.org/abs/2404.06395](https://substack.com/redirect/ab6771aa-fc59-47f8-ba6e-70313a8e853a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *Elephants Never Forget: Memorization and Learning of Tabular Data in Large Language Models*, [https://arxiv.org/abs/2404.06209](https://substack.com/redirect/24f21c50-8eef-4da2-a5a0-b5474403ef9e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Apr, *LLM2Vec: Large Language Models Are Secretly Powerful Text Encoders*, [https://arxiv.org/abs/2404.05961](https://substack.com/redirect/82d98b9c-870b-4a38-b09d-0e01cf8de874?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Adapting LLaMA Decoder to Vision Transformer*, [https://arxiv.org/abs/2404.06773](https://substack.com/redirect/dea6e17b-7459-438c-98f7-cb449bcc2236?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Apr, *Leave No Context Behind: Efficient Infinite Context Transformers with Infini-attention*, [https://arxiv.org/abs/2404.07143](https://substack.com/redirect/1e26e5f6-4ec1-41dc-bd68-660b99bec89b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *LLoCO: Learning Long Contexts Offline*, [https://arxiv.org/abs/2404.07979](https://substack.com/redirect/3eb559bb-67bf-4b82-9408-8a05504794d8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *JetMoE: Reaching Llama2 Performance with 0.1M Dollars*, [https://arxiv.org/abs/2404.07413](https://substack.com/redirect/e3e6ab16-dcf2-43cb-a765-54a34ee0db51?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Best Practices and Lessons Learned on Synthetic Data for Language Models*, [https://arxiv.org/abs/2404.07503](https://substack.com/redirect/632edc85-5cd6-44da-b4f5-98d184559eab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Apr, *Rho-1: Not All Tokens Are What You Need*, [https://arxiv.org/abs/2404.07965](https://substack.com/redirect/0bbc0f80-b388-4a1a-a410-177be37676fb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Pre-training Small Base LMs with Fewer Tokens*, [https://arxiv.org/abs/2404.08634](https://substack.com/redirect/2c319b6e-2323-4041-a54b-5a02b67eb625?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Apr, *Dataset Reset Policy Optimization for RLHF*, [https://arxiv.org/abs/2404.08495](https://substack.com/redirect/04c8e8b1-1332-4388-b9e3-a9356c1cc5b0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Apr, *LLM In-Context Recall is Prompt Dependent*, [https://arxiv.org/abs/2404.08865](https://substack.com/redirect/69e70412-c86e-4e2f-a70b-300e876ca039?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *State Space Model for New-Generation Network Alternative to Transformers: A Survey*, [https://arxiv.org/abs/2404.09516](https://substack.com/redirect/1d2cdfb1-78ec-4193-9f85-a62eed7476b5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Chinchilla Scaling: A Replication Attempt*, [https://arxiv.org/abs/2404.10102](https://substack.com/redirect/3992d9c8-d8cd-465c-a6a6-7fbde19dd0fd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Apr, *Learn Your Reference Model for Real Good Alignment*, [https://arxiv.org/abs/2404.09656](https://substack.com/redirect/662f3085-f8e2-4c6a-98f7-d6fcc2442f89?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study*, [https://arxiv.org/abs/2404.10719](https://substack.com/redirect/602dc6c8-6650-4de6-a778-22f5706b0df6?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *Scaling (Down) CLIP: A Comprehensive Analysis of Data, Architecture, and Training Strategies*, [https://arxiv.org/abs/2404.08197](https://substack.com/redirect/d1da519e-dcfc-4e4d-b28d-26bf125626e4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Apr, *How Faithful Are RAG Models? Quantifying the Tug-of-War Between RAG and LLMs' Internal Prior*, [https://arxiv.org/abs/2404.10198](https://substack.com/redirect/ed0924d9-5786-4774-ab6d-4ff7e388e0ab?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Apr, *A Survey on Retrieval-Augmented Text Generation for Large Language Models*, [https://arxiv.org/abs/2404.10981](https://substack.com/redirect/9857b8f9-d1af-44e6-af6b-83d43bf17476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *When LLMs are Unfit Use FastFit: Fast and Effective Text Classification with Many Classes*, [https://arxiv.org/abs/2404.12365](https://substack.com/redirect/d3b56899-524d-4a86-b884-e1644b5ebb36?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *Toward Self-Improvement of LLMs via Imagination, Searching, and Criticizing*, [https://arxiv.org/abs/2404.12253](https://substack.com/redirect/bd2dc2c2-6813-42c6-b8d9-038c2680ed7d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Apr, *OpenBezoar: Small, Cost-Effective and Open Models Trained on Mixes of Instruction Data*, [https://arxiv.org/abs/2404.12195](https://substack.com/redirect/2204e7d7-1170-42d7-aaa9-ca9cd694a940?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Apr, *The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions*, [https://arxiv.org/abs/2404.13208](https://substack.com/redirect/f48d6944-eb56-4db7-bc3a-e8612e066776?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *How Good Are Low-bit Quantized LLaMA3 Models? An Empirical Study*, [https://arxiv.org/abs/2404.14047](https://substack.com/redirect/a4fbc1f5-38c2-469a-961d-991bc6bb12bb?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone*, [https://arxiv.org/abs/2404.14219](https://substack.com/redirect/3950d2ed-0a07-4041-ae24-a0ae41b951b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *OpenELM: An Efficient Language Model Family with Open-source Training and Inference Framework*, [https://arxiv.org/abs/2404.14619](https://substack.com/redirect/8d85605d-dcef-4eea-92c1-1a176ded516b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Apr, *A Survey on Self-Evolution of Large Language Models*, [https://arxiv.org/abs/2404.14662](https://substack.com/redirect/b309b37a-4f29-483a-ac03-9baa441d2dc8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *Multi-Head Mixture-of-Experts*, [https://arxiv.org/abs/2404.15045](https://substack.com/redirect/c4fcb7a0-0368-4ed4-af5c-4cf18f32ca58?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *NExT: Teaching Large Language Models to Reason about Code Execution*, [https://arxiv.org/abs/2404.14662](https://substack.com/redirect/b309b37a-4f29-483a-ac03-9baa441d2dc8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 23 Apr, *Graph Machine Learning in the Era of Large Language Models (LLMs)*, [https://arxiv.org/abs/2404.14928](https://substack.com/redirect/bf83e10a-8a6a-4ddc-b4f7-ec0414c93d27?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Apr, *Retrieval Head Mechanistically Explains Long-Context Factuality*, [https://arxiv.org/abs/2404.15574](https://substack.com/redirect/1d55f31c-d63c-4eeb-a742-4475874a71fa?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Apr, *Layer Skip: Enabling Early Exit Inference and Self-Speculative Decoding*, [https://arxiv.org/abs/2404.16710](https://substack.com/redirect/88c327a5-c85d-40e3-9e0f-cfea3d2d45d7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Apr, *Make Your LLM Fully Utilize the Context*, [https://arxiv.org/abs/2404.16811](https://substack.com/redirect/8f97c6e7-6429-4845-b3f5-138bffffbe5a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Apr, *LoRA Land: 310 Fine-tuned LLMs that Rival GPT-4, A Technical Report*, [https://arxiv.org/abs/2405.00732](https://substack.com/redirect/a2e9594d-b621-47f2-935a-188c4573451a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *Better & Faster Large Language Models via Multi-token Prediction*, [https://arxiv.org/abs/2404.19737](https://substack.com/redirect/1840a07d-bb38-460e-a984-2ab218bbc418?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *RAG and RAU: A Survey on Retrieval-Augmented Language Model in Natural Language Processing*, [https://arxiv.org/abs/2404.19543](https://substack.com/redirect/050292b6-0565-4320-9ac0-f724d8fe7c6a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *A Primer on the Inner Workings of Transformer-based Language Models*, [https://arxiv.org/abs/2405.00208](https://substack.com/redirect/ef974363-87cb-43cf-95d8-943e567bb180?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *When to Retrieve: Teaching LLMs to Utilize Information Retrieval Effectively*, [https://arxiv.org/abs/2404.19705](https://substack.com/redirect/17c0916d-1b71-4e46-9ac9-4442f68772b7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 30 Apr, *KAN: Kolmogorov–Arnold Networks*, [https://arxiv.org/abs/2404.19756](https://substack.com/redirect/f372cf13-200c-47b8-a7dc-57f70ca72476?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)

  - ### Evaluation
  - Comparison and Detection
  - **LLM QA Evaluation on Wikipedia**: An insightful comparison of different LLMs' performance on QA tasks using Wikipedia as a benchmark. [LLM QA Evaluation Wikipedia](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - *This study offers a comparative analysis highlighting the strengths and weaknesses of open-source vs closed-source LLMs in handling QA tasks, providing valuable insights for both developers and users.*
  - **LLM Zoo**: A collection of various LLMs to explore and compare their capabilities. [LLMZoo GitHub](https://github.com/FreedomIntelligence/LLMZoo)
  - *A unique repository that provides access to a wide range of LLMs, facilitating exploration, comparison, and understanding of different models' functionalities and performance.*
  - **Can AI-Generated Text be Reliably Detected?**: Addresses the critical question of distinguishing between human and AI-generated text. [AI-Generated Text Detection Study](https://arxiv.org/abs/2303.11156)
  - *This paper delves into the challenges and methodologies involved in detecting AI-generated text, offering insights into the reliability of current detection techniques.*

  - ## Introduction to Large Language Models
  - Large Language Models (LLMs) like OpenAI's GPT series have revolutionized the field of artificial intelligence, offering unprecedented capabilities in natural language understanding and generation. These models are trained on vast amounts of text data, enabling them to perform a wide range of language-based tasks, from writing and translation to answering questions and generating code.
  - [This is a jargon free primer](https://www.understandingai.org/p/large-language-models-explained-with)

  - ## Mental health [[Employment Social Contract Under Automation]]
  - [Fraudulent studies are undermining the reliability of systematic reviews – a study of the prevalence of problematic images in preclinical studies of depression | bioRxiv](https://www.biorxiv.org/content/10.1101/2024.02.13.580196v1) [[Death of the Internet]] [[Deepfakes and fraudulent content]]
  - [Jonathan Haidt Wants You to Take Away Your Kid’s Phone | The New Yorker](https://www.newyorker.com/news/the-new-yorker-interview/jonathan-haidt-wants-you-to-take-away-your-kids-phone)
		- Jonathan Haidt, a social psychologist and the author of the book "The Anxious Generation: How the Great Rewiring of Childhood is Causing an Epidemic of Mental Illness". The main points covered in the interview are:
			- Haidt argues that a whole generation has been damaged by growing up with unrestricted access to social media and an overprotected childhood, leading to a sharp increase in anxiety, depression, and self-harm among teenagers, especially girls, starting around 2012.
			- He attributes this to the rapid adoption of smartphones and social media platforms between 2010 and 2015, which radically changed childhood by replacing real-life interactions and play with excessive screen time and exposure to harmful online content.
			- Haidt presents evidence from correlational and experimental studies to support his claim that social media use causes mental health issues, while acknowledging the need for more research.
			- He argues that the benefits of social media are outweighed by its negative impact on child development, as it deprives children of essential real-life experiences, such as play, adventure, and healthy risk-taking.
			- Haidt advocates for changing social norms and implementing restrictions on social media use, such as banning phones in schools and limiting access to social media platforms for children under 16, rather than an outright ban on technology.
		- <iframe src="https://jonathanhaidt.com/anxious-generation/" style="width: 100%; height: 600px"></iframe>

  - ## Emerging use cases (AI holding text)

  - ## Style transfer for humans
  - Multiple techniques tested with the same [[LoRA DoRA etc]] for [comparison](https://discord.com/channels/1076117621407223829/1198416106554130552/1198416106554130552)
  - [ActAnywhere](https://actanywhere.github.io/)
  - [AI-Enhanced Creator (beehiiv.com)](https://nejcsusec.beehiiv.com/)
  - AnimateAnyone for [[Node-Based Diffusion Pipeline Interface]] [MrForExample/ComfyUI-AnimateAnyone-Evolved: Improved AnimateAnyone implementation that allows you to use the opse image sequence and reference image to generate stylized video (github.com)](https://github.com/MrForExample/ComfyUI-AnimateAnyone-Evolved)
  - [CG Renders to AI ANIMATION
  - NIKE video — MOONWALKERS PICTURE](https://www.moonwalkerspicture.com/newslounge/cg-renders-to-ai-workflow-vol-02-anim)
  - Motion Control
  - [MotionCtrl (wzhouxiff.github.io)](https://wzhouxiff.github.io/projects/MotionCtrl/)
  - [[2401.12945] Lumiere: A Space-Time Diffusion Model for Video Generation (arxiv.org)](https://arxiv.org/abs/2401.12945)
  - [I2VGen-XL
  - a Hugging Face Space by damo-vilab](https://huggingface.co/spaces/damo-vilab/I2VGen-XL)
  - [ali-vilab/i2vgen-xl: Official repo for VGen: a holistic video generation ecosystem for video generation building on diffusion models (github.com)](https://github.com/ali-vilab/i2vgen-xl)
  - [MagicVideo-V2: Multi-Stage High-Aesthetic Video Generation (magicvideov2.github.io)](https://magicvideov2.github.io/)
  - Interpolation and interframe consistency
  - [controlnet and ebsynth temporal consistency](https://www.reddit.com/r/StableDiffusion/comments/114zmh3/controlnet_and_ebsynth_make_incredible_temporally/)
  - [Motion-Conditioned Diffusion Model for Controllable Video Synthesis](https://tsaishien-chen.github.io/MCDiff/)
  - [Interframe consistency is now here](https://twitter.com/cut_pow/status/1576748659051749377)
  - [Interpolation between two frames](https://film-net.github.io/)
  - [FILM frame interpolator](https://film-net.github.io/)
  - [ProPainter for Video Inpainting (shangchenzhou.com)](https://shangchenzhou.com/projects/ProPainter/)
  - [zengyh1900/Awesome-Image-Inpainting: A curated list of image inpainting and video inpainting papers and resources (github.com)](https://github.com/zengyh1900/Awesome-Image-Inpainting)
  - [Runway AI video editing](https://www.youtube.com/c/RunwayML)
  - Gen2 examples
  - Multishot [VideoDrafter: Content-Consistent Multi-Scene Video Generation with LLM](https://videodrafter.github.io/)
  - [vienna with prompts](https://www.linkedin.com/posts/dr-andreas-fraunberger_marketinginnovation-digitaltourism-ar-ugcPost-7073039429417730048-BKfQ?utm_source=share&utm_medium=member_desktop)
  - [Video slowmo and enhance](http://zeyuan-chen.com/VideoINR/)
  - [deforum stable diffusion video](https://github.com/HelixNGC7293/DeforumStableDiffusionLocal)
  - [Phenaki](https://phenaki.video/)
  - Collaborative video pipeline
  - [Magicvideo (faster)](https://magicvideo.github.io/)
  - [Production ready re aging](https://studios.disneyresearch.com/2022/11/30/production-ready-face-re-aging-for-visual-effects/)
  - [distilled models for 25fps](https://arxiv.org/abs/2202.00512)
  - [Stable warpfusion](https://www.linkedin.com/posts/rainisto_stablediffusion-musicvideo-remix-activity-7018207241522614272-YT1y?utm_source=share&utm_medium=member_desktop)
  - [Video talking heads from text service](https://www.synthesia.io/)
  - [Tune a video](https://tuneavideo.github.io/)
  - [Vidyo: Generates videos for social networks from longer videos.](https://vidyo.ai/)
  - [Stylegan-T video transformer from google](https://sites.google.com/view/stylegan-t)
  - [Houdini](https://github.com/proceduralit/StableDiffusion_Houdini)
  - [Dream Mix video to video remix](https://dreamix-video-editing.github.io/)
  - [RIFE frame interpolation](https://github.com/megvii-research/ECCV2022-RIFE)
  - [example github for sd](https://github.com/vladmandic/rife)
  - [Synthesia corporate video generation](https://www.youtube.com/watch?v=4uzzD9sD-PI)
  - [pix2pixHD nextframe google colab](https://colab.research.google.com/github/dvschultz/ml-art-colabs/blob/master/Pix2PixHD_Next_Frame_Prediction.ipynb)
  - [minecraft demo codebase](https://github.com/TSFSean/InvokeAI-DiffusionCraftAI)
  - [animation from mixamo](https://www.reddit.com/r/StableDiffusion/comments/zecyc7/mixamo_animations_stable_diffusion_v2_depth2img/)
  - [Intel enhance photorealism in realtime](https://github.com/isl-org/PhotorealismEnhancement)
  - custom SD video to video script
  - [Testing a custom video2video script I'm working on. (These used RealisticVision1.4 & ControlNet) : r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/comments/11iviep/testing_a_custom_video2video_script_im_working_on/)
  - [consistency tools for character tooning](https://www.reddit.com/r/StableDiffusion/comments/11okvc8/how_about_another_joke_murraaaay/)
  - Alibaba system
  - [website](https://videocomposer.github.io/)
  - [github](https://github.com/damo-vilab/videocomposer)
  - [model cards](https://huggingface.co/damo-vilab/MS-Image2Video)
  - [9 new tools](https://twitter.com/mreflow/status/1637957302073565184)
  - [Automatic1111 plugin](https://www.reddit.com/r/StableDiffusion/comments/11w0ba9/modelscope_17b_text2video_model_is_now_available/)
  - [Next frame prediction with controlnet](https://www.reddit.com/r/StableDiffusion/comments/11f8i0g/next_frame_prediction_with_controlnet/)
  - [Will smith eating spaghetti](https://www.reddit.com/r/StableDiffusion/comments/1244h2c/will_smith_eating_spaghetti/)
  - [Transform Video to Animation in Stable Diffusion | How to Install + BEST Consistency Settings: Learn how to use AI to create animations from real videos. We'll use Stable Diffusion and other tools for maximum consistencyProject Files:https://bit.ly/3...](https://www.youtube.com/watch?v=sVmi2Yp43c0&t=22)
  - [How to Use ModelScope text2video with Automatic1111’s Stable Diffusion Web UI | kombitz: Enable the Extension Click on the Extension tab and then click on Install from URL. Enter https://github.com/deforum-art/sd-webui-modelscope-text2video in the URL box and click on Install. Click on Installed and click on Apply and restart UI. Go to your stable-diffusion-webui/models folder and create a folder called ModelScope and then create a folder called t2v under ModelScope. This is your models folder for text2video.](https://www.kombitz.com/2023/03/28/how-to-use-modelscope-text2video-with-automatic1111s-stable-diffusion-web-ui/)
  - This article provides instructions on how to use ModelScope's text2video feature with Automatic1111's Stable Diffusion Web UI.
  - [latent consistency pipeline](https://www.reddit.com/r/StableDiffusion/comments/17fvxrq/60_frame_video_generated_in_646_seconds/)
  - [GitHub
  - Picsart-AI-Research/Text2Video-Zero: Text-to-Image Diffusion Models are Zero-Shot Video Generators: Text-to-Image Diffusion Models are Zero-Shot Video Generators
  - GitHub
  - Picsart-AI-Research/Text2Video-Zero: Text-to-Image Diffusion Models are Zero-Shot Video Generators](https://github.com/Picsart-AI-Research/Text2Video-Zero)
  - The Picsart-AI-Research/Text2Video-Zero repository contains code for a text-to-image diffusion model that can be used to generate videos from text input. The model is a zero-shot video generator, meaning that it does not require any training data in order to generate videos.
  - [LVDM for long video creation](https://yingqinghe.github.io/LVDM/)
  - [The Text2Room algorithm generates textured 3D meshes from a given text prompt by leveraging pre-trained 2D text-to-image models. The core idea is to select camera poses that will result in a seamless, textured 3D mesh. The algorithm iteratively fuses scene frames with the existing geometry to create the final mesh. Evaluation shows that the algorithm is able to generate room-scale 3D geometry with compelling textures from only text as input.](https://lukashoel.github.io/text-to-room/)
  - [The VMesh system models a scene with a triangular mesh and a sparse volume for efficient view synthesis. It is trained on multi-view images of an object to create a contiguous representation of the object's surface and volume. This representation is then used to generate a simplified triangular mesh and a sparse volume, which can be stored and rendered efficiently. The system is designed for real-time applications and can render at 2K 60FPS on common consumer devices.](https://bennyguo.github.io/vmesh/)
  - [LLM guided video generation paper](https://arxiv.org/abs/2309.15091)
  - [LVM video gen using LLM paper](https://arxiv.org/pdf/2309.17444.pdf)
  - [Temporal stable automatic plugin](https://www.reddit.com/r/StableDiffusion/comments/12sd4bi/results_from_latest_version_of_temporal_stable/)
  - [We present a method for high-resolution video synthesis using latent diffusion models (LDMs). Our approach first pre-trains an LDM on images, then introduces a temporal dimension to the latent space diffusion model and fine-tunes it on encoded image sequences (i.e. videos). We focus on two real-world applications: simulation of in-the-wild driving data and creative content creation with text-to-video modeling. Our method achieves state-of-the-art performance on real driving videos of 512 x 1024 resolution. Additionally, our approach can leverage off-the-shelf pre-trained image LDMs, turning the publicly available, state-of-the-art text-to-image LDM Stable Diffusion into an efficient and expressive text-to-video model.](https://buff.ly/41FgQrb)
  - [This script allows for the automation of video stylization using StableDiffusion and ControlNet.](https://github.com/volotat/SD-CN-Animation)
  - [Really easy videos in A1111](https://www.reddit.com/r/StableDiffusion/comments/12otdo0/the_secret_to_really_easy_videos_in_a1111_easier/)
  - [Dancer 4 keyframes, low noise, controlnet approach](https://www.reddit.com/r/StableDiffusion/comments/12nwpdx/dancer_4_keyframes_guide_and_source_files_for/)
  - [Flicker free video workflow paper (good!)](https://anonymous-31415926.github.io/)
  - [Pika labs](https://twitter.com/pika_labs)
  - [Realtime lip-sync API](https://getsynchronicity.io/)
  - [ms image to video on huggingface](https://huggingface.co/spaces/fffiloni/MS-Image2Video)
  - [model to video blender modules](https://github.com/tin2tin/Generative_AI)
  - [videocomposer in python 3.9](https://github.com/mindspore-lab/mindone/tree/master/examples/videocomposer)
  - [motionagent image to video](https://github.com/modelscope/motionagent)
  - [Animatediff comfy workflows on discord](https://discord.com/channels/1076117621407223829/1149372684220768367)
  - [fluid animation youtube](https://www.youtube.com/watch?v=ak_az6ZNYFM)
  - [Controlnet tutorial](https://www.youtube.com/watch?v=WHxIrY2wLQE)
  - [LCM loras for fast inferencing](https://huggingface.co/collections/latent-consistency/latent-consistency-models-loras-654cdd24e111e16f0865fba6)
  - Animatediff is a new animation software that provides a range of tools and features for creating high-quality animations. It offers a user-friendly interface and supports various animation techniques, such as 2D, 3D, stop motion, and more. With Animatediff, users can easily bring their ideas to life and express their creativity through unique and captivating animations. Whether you're a professional animator or a beginner, Animatediff offers a comprehensive set of features to help you create stunning animations in a fast and efficient manner. title:: Animatediff and Stablevideo
  - Youtube tutorials
  - [IF_Animator ComfyUI workflow LCM+Animatediff+IPA+CN (youtube.com)](https://www.youtube.com/watch?v=FE2KmCEv19E)
  - [[Part 2] Tips and Tricks
		- AnimateDiff ControlNet Animation in ComfyUI
		- YouTube](https://www.youtube.com/watch?v=aysg2vFFO9g)
  - [TianxingWu/FreeInit: FreeInit: Bridging Initialization Gap in Video Diffusion Models (github.com)](https://github.com/TianxingWu/FreeInit)
  - [CiaraStrawberry/svd-temporal-controlnet (github.com)](https://github.com/CiaraStrawberry/svd-temporal-controlnet)
  - [ProjectNUWA/DragNUWA (github.com)](https://github.com/ProjectNUWA/DragNUWA)

  - ## Texturing

  - ## Text to Multiview and Texturing

  - ## Text to 3D

  - ### Evaluation
  - Comparison and Detection
  - **LLM QA Evaluation on Wikipedia**: An insightful comparison of different LLMs' performance on QA tasks using Wikipedia as a benchmark. [LLM QA Evaluation Wikipedia](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - *This study offers a comparative analysis highlighting the strengths and weaknesses of open-source vs closed-source LLMs in handling QA tasks, providing valuable insights for both developers and users.*
  - **LLM Zoo**: A collection of various LLMs to explore and compare their capabilities. [LLMZoo GitHub](https://github.com/FreedomIntelligence/LLMZoo)
  - *A unique repository that provides access to a wide range of LLMs, facilitating exploration, comparison, and understanding of different models' functionalities and performance.*
  - **Can AI-Generated Text be Reliably Detected?**: Addresses the critical question of distinguishing between human and AI-generated text. [AI-Generated Text Detection Study](https://arxiv.org/abs/2303.11156)
  - *This paper delves into the challenges and methodologies involved in detecting AI-generated text, offering insights into the reliability of current detection techniques.*

  - ## Introduction to Large Language Models
  - Large Language Models (LLMs) like OpenAI's GPT series have revolutionized the field of artificial intelligence, offering unprecedented capabilities in natural language understanding and generation. These models are trained on vast amounts of text data, enabling them to perform a wide range of language-based tasks, from writing and translation to answering questions and generating code.
  - [This is a jargon free primer](https://www.understandingai.org/p/large-language-models-explained-with)

  ## Core Characteristics

  - **Autoregressive Generation**: Sequential token-by-token text production
  - **Conditional Generation**: Text production conditioned on prompts or contexts
  - **Controllable Attributes**: Style, tone, length, and topic control
  - **Few-Shot and Zero-Shot**: Generation from minimal examples or instructions
  - **Factual Consistency**: Grounding in knowledge and reducing hallucination
  - **Multi-Domain**: News, creative writing, technical documentation, code

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Language Modeling, Large Language Model, GPT, Text-to-Text Generation
  - **Models**: GPT-3/4, T5, BLOOM, LLaMA, PaLM
  - **Applications**: Content Creation, Code Generation, Creative Writing, Summarisation

  ## Key Literature

  1. Brown, T., et al. (2020). "Language models are few-shot learners." *NeurIPS*, 1877-1901.

  2. Raffel, C., et al. (2020). "Exploring the limits of transfer learning with a unified text-to-text transformer." *JMLR*, 21(140), 1-67.

  3. Radford, A., et al. (2019). "Language models are unsupervised multitask learners." *OpenAI Blog*.

  4. Holtzman, A., et al. (2020). "The curious case of neural text degeneration." *ICLR*.

  ## 2024-2025: Reasoning Models and Multimodal Text Generation Breakthrough

  The period from 2024 through 2025 witnessed transformative developments in text generation, with the emergence of **reasoning-optimised models**, widespread **multimodal integration**, and intense competition driving rapid performance improvements across all major frontier language models.

  ### Reasoning-First Architecture: OpenAI o1 and o3

  In September 2024, OpenAI unveiled **o1**, experimental models specifically fine-tuned to generate **chains of thought** before providing answers, scoring particularly high in mathematics, coding, and science benchmarks. Released in full on **5th December 2024**, o1 marked a significant shift toward **reasoning-first architecture**, representing the first model explicitly optimised for chain-of-thought reasoning.

  In December 2024, OpenAI offered a glimpse of **o3**—o1's successor with impressive capabilities—whilst Google and **DeepSeek** unveiled their own reasoning models, establishing reasoning as a core paradigm for text generation going forward.

  ### Multimodal Text Generation Revolution

  **GPT-4o** was released on **13th May 2024** as a flagship multimodal model designed to process and generate text, audio, and visual inputs and outputs in real time. The "o" stands for "omni," signalling the model's ability to handle longer conversations with better memory whilst understanding both text and images.

  It was truly in 2024 that **multimodal LLMs became mainstream**. **Claude 3.5 Sonnet** (released June 2024) excelled in reading, coding, mathematics, and vision tasks. In May 2025, Anthropic introduced the **Claude 4 family**, including **Claude 4 Opus** and **Claude 4 Sonnet**, with Opus 4 optimised for complex reasoning and coding.

  ### Performance Convergence and Competition

  Some new iterations of fast models (**GPT-4o**, **Gemini 2.0 Flash**, and **Claude 3.5 Sonnet**) became more performant than the flagship models of the previous generation (GPT-4, Gemini 1.5 Pro, Claude 3 Opus), demonstrating accelerating performance improvements. By the end of 2024, OpenAI's leadership faced stiff competition, with **GPT-4o** tied with **o1** and two versions of **Google's Gemini** for first place on the **LMSYS Chatbot Arena leaderboard**.

  **Gemini 2.0** by Google DeepMind launched in December 2024, expanding AI's multimodal potential and integrating seamlessly with autonomous agents. **Gemini 2.0 Flash** emerged as one of the fastest options for text generation tasks.

  ### Competitive Landscape Maturation

  The text generation landscape matured significantly in 2024-2025, transitioning from OpenAI dominance to a highly competitive multi-player market with Google, Anthropic, Meta, and DeepSeek all fielding competitive frontier models. This competition drove rapid capability improvements, pricing reductions, and broader accessibility to state-of-the-art text generation capabilities.

  ## See Also

  - [[Natural Language Processing]]
  - [[Language Modeling]]
  - [[Large Language Model]]
  - [[GPT]]

  ## Core Characteristics

  - **Autoregressive Generation**: Sequential token-by-token text production
  - **Conditional Generation**: Text production conditioned on prompts or contexts
  - **Controllable Attributes**: Style, tone, length, and topic control
  - **Few-Shot and Zero-Shot**: Generation from minimal examples or instructions
  - **Factual Consistency**: Grounding in knowledge and reducing hallucination
  - **Multi-Domain**: News, creative writing, technical documentation, code

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Language Modeling, Large Language Model, GPT, Text-to-Text Generation
  - **Models**: GPT-3/4, T5, BLOOM, LLaMA, PaLM
  - **Applications**: Content Creation, Code Generation, Creative Writing, Summarisation

  ## Key Literature

  1. Brown, T., et al. (2020). "Language models are few-shot learners." *NeurIPS*, 1877-1901.

  2. Raffel, C., et al. (2020). "Exploring the limits of transfer learning with a unified text-to-text transformer." *JMLR*, 21(140), 1-67.

  3. Radford, A., et al. (2019). "Language models are unsupervised multitask learners." *OpenAI Blog*.

  4. Holtzman, A., et al. (2020). "The curious case of neural text degeneration." *ICLR*.

  ## See Also

  - [[Natural Language Processing]]
  - [[Language Modeling]]
  - [[Large Language Model]]
  - [[GPT]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
