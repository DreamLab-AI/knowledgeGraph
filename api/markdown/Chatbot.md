public:: true

# Chatbot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:90248e1112757b7a22550b2f354b9f3d52f07ef2304b99229be003293f530073",
  "@type": "Page",
  "vc:slug": "chatbot",
  "title": "Chatbot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:virtual-assistant",
      "vc:label": "Virtual Assistant"
    },
    {
      "@id": "urn:visionflow:owl:class:dialogue-system",
      "vc:label": "Dialogue System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0373"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Chatbot"
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
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:chatbot",
  "@type": "OntologyClass",
  "label": "Chatbot",
  "urn:visionflow:owl:class:dialogue-system","Dialogue System"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:90248e1112757b7a22550b2f354b9f3d52f07ef2304b99229be003293f530073"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:90248e1112757b7a22550b2f354b9f3d52f07ef2304b99229be003293f530073@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A Chatbot is a software application that simulates human conversation through text or voice interactions, automating customer service, information retrieval, and task completion through natural language dialogue. Chatbots range from rule-based systems to sophisticated AI-powered conversational agents employing large language models, intent classification, and dialogue management to provide responsive, context-aware interactions across messaging platforms, websites, and voice interfaces.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:chatbot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:90248e1112757b7a22550b2f354b9f3d52f07ef2304b99229be003293f530073"
  },
  "vc:resolutions": [
    {
      "raw": "[[Virtual Assistant]]",
      "resolved": "urn:visionflow:linked:virtual-assistant",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dialogue System]]",
      "resolved": "urn:visionflow:owl:class:dialogue-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - A Chatbot is a software application that simulates human conversation through text or voice interactions, automating customer service, information retrieval, and task completion through natural language dialogue. Chatbots range from rule-based systems to sophisticated AI-powered conversational agents employing large language models, intent classification, and dialogue management to provide responsive, context-aware interactions across messaging platforms, websites, and voice interfaces.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Chatbot
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]

- ### Content
  - A Chatbot is a software application that simulates human conversation through text or voice interactions, automating customer service, information retrieval, and task completion through natural language dialogue. Chatbots range from rule-based systems to sophisticated AI-powered conversational agents employing large language models, intent classification, and dialogue management to provide responsive, context-aware interactions across messaging platforms, websites, and voice interfaces.

		- ## No, Really, What are Agents
			- I have given up following the debate because in a way it doesn't matter. As a good heuristic
				- LLMs
				- Chatbots - LLMs that are tuned by RL for turn based chat
				- Agents
					- Tool use
					- Memory
					- Agency (decision action trees)
					- Minimal oversight
					- Outcome driven
				- Agentic Systems
					- Learning
					- Persistence across sessions
					- Complex tasks
					- Complex tool use
					- Able to create and use tooling
				- Multi-Agent Orchestration
					- Complex organisations of Agentic Systems
					- Long runs times
					- Open ended discovery and knowledge synthesis
					- Systems level problems
					- Expensive

  - ### Open-Source ChatGPT Equivalents and UI Enhancements
		- **Mintplex-Labs on GitHub**: An open-source ChatGPT equivalent experience for both open and closed source LLMs, embedders, and vector databases, supporting unlimited documents and users ([GitHub Repository](https://github.com/Mintplex-Labs/anything-llm)).
		- **mckaywrigley/chatbot-ui on GitHub**: An open-source ChatGPT UI ([GitHub Repository](https://github.com/mckaywrigley/chatbot-ui)).

		- ### Creating Your Own AI Models and Bots
			- **Custom ChatGPT Bots**: Tutorials on creating your own ChatGPT chatbot with business content ([CustomGPT.ai](https://customgpt.ai/)).
			- **GPT Voice Assistant**: Guide on creating a GPT voice assistant with infinite chat memory in Python ([Medium Article](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)).

		- ## No, Really, What are Agents
			- I have given up following the debate because in a way it doesn't matter. As a good heuristic
				- LLMs
				- Chatbots - LLMs that are tuned by RL for turn based chat
				- Agents
					- Tool use
					- Memory
					- Agency (decision action trees)
					- Minimal oversight
					- Outcome driven
				- Agentic Systems
					- Learning
					- Persistence across sessions
					- Complex tasks
					- Complex tool use
					- Able to create and use tooling
				- Multi-Agent Orchestration
					- Complex organisations of Agentic Systems
					- Long runs times
					- Open ended discovery and knowledge synthesis
					- Systems level problems
					- Expensive

  - ### Open-Source ChatGPT Equivalents and UI Enhancements
		- **Mintplex-Labs on GitHub**: An open-source ChatGPT equivalent experience for both open and closed source LLMs, embedders, and vector databases, supporting unlimited documents and users ([GitHub Repository](https://github.com/Mintplex-Labs/anything-llm)).
		- **mckaywrigley/chatbot-ui on GitHub**: An open-source ChatGPT UI ([GitHub Repository](https://github.com/mckaywrigley/chatbot-ui)).

		- ### Creating Your Own AI Models and Bots
			- **Custom ChatGPT Bots**: Tutorials on creating your own ChatGPT chatbot with business content ([CustomGPT.ai](https://customgpt.ai/)).
			- **GPT Voice Assistant**: Guide on creating a GPT voice assistant with infinite chat memory in Python ([Medium Article](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)).

		- ### Creating Your Own AI Models and Bots
			- **Custom ChatGPT Bots**: Tutorials on creating your own ChatGPT chatbot with business content ([CustomGPT.ai](https://customgpt.ai/)).
			- **GPT Voice Assistant**: Guide on creating a GPT voice assistant with infinite chat memory in Python ([Medium Article](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)).

  - # Unsorted Links
  - A bunch more GPTs [nerority/Advanced-GPTs: Showcase of my custom GPTs, featuring advanced workflows and operational logic. (github.com)](https://github.com/nerority/Advanced-GPTs)
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Create Your Own ChatGPT ChatBOT With ALL Your Business Content](https://customgpt.ai/)
  - [GPTZero Case Study (Exploring False Positives)](https://gonzoknows.com/posts/GPTZero-Case-Study/%22)
  - [Has ChatGPT or me been hacked? Ive never had these conversations..](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)
  - [March | 2023 | Ars Technica](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%7D%7Barticle)
  - [RadioGPT: 'World’s first' AI-driven radio station is here](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - [Scientists begin building AI for scientific discovery using tech behind ChatGPT](https://techxplore.com/news/2023-10-scientists-ai-scientific-discovery-tech.html)
  - [Using openai chat gpt to write stable diffusion prompts%22](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%22)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is ChatGPT? | OpenAI Help Center](https://help.openai.com/en/articles/6783457-chatgpt-general-faq%7D%7Bexplicit)
  - [mckaywrigley/chatbot-ui: An open source ChatGPT UI.](https://github.com/mckaywrigley/chatbot-ui)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)
  - [#367 – Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI](https://open.spotify.com/episode/6rAOusZcsuNtCv8mefmwND?nd=1&si=3a17aef004df4982)
  - [3D-GPT generates 3D worlds in Blender](https://the-decoder.com/3d-gpt-generates-3d-worlds-in-blender)
  - [Can GPT-3 AI write comedy?](https://robmanuelfuckyeah.substack.com/p/someone-needs-to-stop-me-playing)
  - [Carlos E. Perez on Twitter / X](https://twitter.com/IntuitMachine/status/1608690077139599360%7D%7Bchatgpt)
  - [ChatGPT political compass](https://www.gptoverflow.link/question/1519492600837443584/chatgpt-political-compass%7D%7Bpolitical)
  - [Introducing GPT-Furr, Cat-GPT’s meowst sassy, all-knowing system.](https://www.cat-gpt.com/)
  - [Microsoft just announced a SURPRISE media event taking place tomorrow](https://www.windowscentral.com/microsoft/microsoft-surprise-event-chatgpt-openai-bing-2023)
  - [Narrative Manipulation: Convincing Chat GPT to Write a Python Program to Eradicate Humanity](https://zacdenham.com/blog/narrative-manipulation-convincing-gpt-chat-to-write-a-python-program-to-eradicate-humanity)
  - [New model: gpt4-x-alpaca-13b-native-4bit-128g !! · oobabooga text-generation-webui · Discussion #727](https://github.com/oobabooga/text-generation-webui/discussions/727%7D%7BAnonymous)
  - [Stack Overflow bans ChatGPT as 'substantially harmful'](https://www.theregister.com/2022/12/05/stack_overflow_bans_chatgpt)
  - [Stephen Wolfram Answers Live Questions About ChatGPT](https://youtu.be/zLnhg9kir3Q%7D%7BStephen)
  - [What is Auto-GPT? | Blog](https://stablecog.com/blog/what-is-auto-gpt)
  - [You can now run a GPT-3-level AI model on your laptop, phone, and Raspberry Pi](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%22)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)

		- ### Creating Your Own AI Models and Bots
			- **Custom ChatGPT Bots**: Tutorials on creating your own ChatGPT chatbot with business content ([CustomGPT.ai](https://customgpt.ai/)).
				- **RadioGPT**: The world’s first AI-driven radio station ([Interesting Engineering Article](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)).

			- ### Podcasts and Interviews on AI
				- **Code Interpreter and GPT 4.5**: Discussions on the advancements and implications of these technologies ([Spotify Podcast](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA)).
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)

  - ### Sydney
  - [Microsoft has been secretly testing its Bing chatbot ‘Sydney’ for years The Verge](https://www.theverge.com/2023/2/23/23609942/microsoft-bing-sydney-chatbot-history-ai)

  - ### Sydney
  - [Microsoft has been secretly testing its Bing chatbot ‘Sydney’ for years The Verge](https://www.theverge.com/2023/2/23/23609942/microsoft-bing-sydney-chatbot-history-ai)

  - ## **From Chatbots to AI Coworkers - Revolutionising the Future of Work:**
  - **The Rise of the AI Agent:** The discussion explores a future where AI surpasses chatbot limitations, evolving into agentic entities capable of autonomously tackling complex tasks. This evolution leads to scenarios where AI functions as "drop-in remote workers," seamlessly integrating into work environments and potentially displacing humans from numerous cognitive roles.
  - **Productivity Boom, But at What Cost?:** While recognising the immense productivity gains promised by AI, the guests grapple with the potential economic and social consequences. The rapid displacement of jobs, particularly in white-collar sectors, could lead to significant disruptions, necessitating substantial societal adaptation. They also consider whether intermediate AI systems might see limited adoption, as companies await the arrival of more powerful, user-friendly AGI systems.

  - ### Applications
  - Consumer Tools Using LLMs
  - **Personalized Customer Experiences**: LLMs are increasingly used to create personalized interactions in consumer applications, enhancing ecommerce experiences and facilitating more intuitive user interfaces.
  - [CustomGPT](https://customgpt.ai)
		- *CustomGPT offers businesses the ability to create their own chatbot using GPT-4 for tailored customer interactions. This platform demonstrates the application of LLMs in improving customer service and engagement by providing accurate, context-aware responses.*
  - **Innovative Interfaces and Applications**: The versatility of LLMs allows for the development of creative tools that simplify complex tasks or provide new services.
  - [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
		- *A comprehensive solution for turning any document or piece of content into a piece of data for LLM-based chat interactions, showcasing the potential of LLMs in data management and retrieval.*

  - ## Handy GPT
  - There's a GPT to assist you in making diagrams  https://chat.openai.com/g/g-5QhhdsfDj-diagrams-show-me/

  - ## Concerns Over AI's Influence on Information
  - The rise of AI-generated content brings significant risks to the credibility of online information. The [New York Times](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html) highlighted instances where AI chatbots have provided harmful or inaccurate information. This threatens to erode public trust in online content, as people increasingly struggle to discern between authentic human knowledge and AI-generated narratives, a concern echoed in [Pew Research Center](https://www.pewresearch.org/internet/2023/06/21/ai-and-human-enhancement-americans-hopes-and-fears/) reports.
  - The [World Economic Forum](https://www.weforum.org/agenda/2023/01/davos-2023-ai-misinformation-disinformation/) warned that AI's role in content curation could deepen the spread of disinformation, leaving us with an increasingly "fake" internet, dominated by bots and automated systems, rather than genuine human interaction.
  - [Algorithmic Bias: How Search Engine Results Can Be Skewed (talentsmart.co.in)](https://www.talentsmart.co.in/algorithmic-bias-how-search-engine-results-can-be-skewed/)

  - ### Sydney
  - [Microsoft has been secretly testing its Bing chatbot ‘Sydney’ for years The Verge](https://www.theverge.com/2023/2/23/23609942/microsoft-bing-sydney-chatbot-history-ai)

  - ## **From Chatbots to AI Coworkers - Revolutionising the Future of Work:**
  - **The Rise of the AI Agent:** The discussion explores a future where AI surpasses chatbot limitations, evolving into agentic entities capable of autonomously tackling complex tasks. This evolution leads to scenarios where AI functions as "drop-in remote workers," seamlessly integrating into work environments and potentially displacing humans from numerous cognitive roles.
  - **Productivity Boom, But at What Cost?:** While recognising the immense productivity gains promised by AI, the guests grapple with the potential economic and social consequences. The rapid displacement of jobs, particularly in white-collar sectors, could lead to significant disruptions, necessitating substantial societal adaptation. They also consider whether intermediate AI systems might see limited adoption, as companies await the arrival of more powerful, user-friendly AGI systems.

  - ### Applications
  - Consumer Tools Using LLMs
  - **Personalized Customer Experiences**: LLMs are increasingly used to create personalized interactions in consumer applications, enhancing ecommerce experiences and facilitating more intuitive user interfaces.
  - [CustomGPT](https://customgpt.ai)
		- *CustomGPT offers businesses the ability to create their own chatbot using GPT-4 for tailored customer interactions. This platform demonstrates the application of LLMs in improving customer service and engagement by providing accurate, context-aware responses.*
  - **Innovative Interfaces and Applications**: The versatility of LLMs allows for the development of creative tools that simplify complex tasks or provide new services.
  - [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
		- *A comprehensive solution for turning any document or piece of content into a piece of data for LLM-based chat interactions, showcasing the potential of LLMs in data management and retrieval.*

  - ## Handy GPT
  - There's a GPT to assist you in making diagrams  https://chat.openai.com/g/g-5QhhdsfDj-diagrams-show-me/

  - ## Concerns Over AI's Influence on Information
  - The rise of AI-generated content brings significant risks to the credibility of online information. The [New York Times](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html) highlighted instances where AI chatbots have provided harmful or inaccurate information. This threatens to erode public trust in online content, as people increasingly struggle to discern between authentic human knowledge and AI-generated narratives, a concern echoed in [Pew Research Center](https://www.pewresearch.org/internet/2023/06/21/ai-and-human-enhancement-americans-hopes-and-fears/) reports.
  - The [World Economic Forum](https://www.weforum.org/agenda/2023/01/davos-2023-ai-misinformation-disinformation/) warned that AI's role in content curation could deepen the spread of disinformation, leaving us with an increasingly "fake" internet, dominated by bots and automated systems, rather than genuine human interaction.
  - [Algorithmic Bias: How Search Engine Results Can Be Skewed (talentsmart.co.in)](https://www.talentsmart.co.in/algorithmic-bias-how-search-engine-results-can-be-skewed/)

  - ### Applications
  - Consumer Tools Using LLMs
  - **Personalized Customer Experiences**: LLMs are increasingly used to create personalized interactions in consumer applications, enhancing ecommerce experiences and facilitating more intuitive user interfaces.
  - [CustomGPT](https://customgpt.ai)
		- *CustomGPT offers businesses the ability to create their own chatbot using GPT-4 for tailored customer interactions. This platform demonstrates the application of LLMs in improving customer service and engagement by providing accurate, context-aware responses.*
  - **Innovative Interfaces and Applications**: The versatility of LLMs allows for the development of creative tools that simplify complex tasks or provide new services.
  - [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
		- *A comprehensive solution for turning any document or piece of content into a piece of data for LLM-based chat interactions, showcasing the potential of LLMs in data management and retrieval.*

  ## Core Characteristics

  - **Conversational Interface**: Text or voice-based user interaction
  - **Rule-Based or AI-Powered**: Pattern matching vs. machine learning approaches
  - **Intent Recognition**: Understanding user goals and requests
  - **Response Generation**: Rule-based templates or neural generation
  - **Platform Integration**: Deployment on websites, messaging apps, voice assistants
  - **Domain-Specific or General-Purpose**: Specialised vs. open-domain capabilities

  ## Relationships

  - **Instance Of**: Dialogue System
  - **Related**: Virtual Assistant, Conversational AI, Customer Service Automation
  - **Technologies**: Natural Language Understanding, Intent Classification, Language Models
  - **Platforms**: WhatsApp, Facebook Messenger, Slack, Web Chat

  ## Key Literature

  1. Adamopoulou, E., & Moussiades, L. (2020). "Chatbots: History, technology, and applications." *Machine Learning with Applications*, 2, 100006.

  2. Følstad, A., & Brandtzæg, P. B. (2017). "Chatbots and the new world of HCI." *Interactions*, 24(4), 38-42.

  3. Xu, A., et al. (2017). "A new chatbot for customer service on social media." *CHI*, 3506-3510.

  ## See Also

  - [[Dialogue System]]
  - [[Natural Language Processing]]
  - [[Virtual Assistant]]

  ## Core Characteristics

  - **Conversational Interface**: Text or voice-based user interaction
  - **Rule-Based or AI-Powered**: Pattern matching vs. machine learning approaches
  - **Intent Recognition**: Understanding user goals and requests
  - **Response Generation**: Rule-based templates or neural generation
  - **Platform Integration**: Deployment on websites, messaging apps, voice assistants
  - **Domain-Specific or General-Purpose**: Specialised vs. open-domain capabilities

  ## Relationships

  - **Instance Of**: Dialogue System
  - **Related**: Virtual Assistant, Conversational AI, Customer Service Automation
  - **Technologies**: Natural Language Understanding, Intent Classification, Language Models
  - **Platforms**: WhatsApp, Facebook Messenger, Slack, Web Chat

  ## Key Literature

  1. Adamopoulou, E., & Moussiades, L. (2020). "Chatbots: History, technology, and applications." *Machine Learning with Applications*, 2, 100006.

  2. Følstad, A., & Brandtzæg, P. B. (2017). "Chatbots and the new world of HCI." *Interactions*, 24(4), 38-42.

  3. Xu, A., et al. (2017). "A new chatbot for customer service on social media." *CHI*, 3506-3510.

  ## See Also

  - [[Dialogue System]]
  - [[Natural Language Processing]]
  - [[Virtual Assistant]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
