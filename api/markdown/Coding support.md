iri:: http://narrativegoldmine.com/infrastructure#CodingSupport
uri:: urn:visionclaw:concept:infrastructure:coding-support
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:coding-support
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Coding support
content-hash:: sha256-12-042f57bd6b0c
status:: stub
maturity:: draft
bridges-to:: [[Blockchain]] (bc), [[AI Agent System]] (ai), or [[Digital Twin]] (mv)
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Coding support is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:CodingSupport
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{video https://www.youtube.com/watch?v=yj73GIEKmLI}}
  - # Believably wrong answers
  - **[Study Details](https://dl.acm.org/doi/pdf/10.1145/3613904.3642596)**  by Purdue University. Presented at the Computer-Human Interaction Conference in Hawaii. (CHI)
  - **517 programming questions** from Stack Overflow.
		- **52%** contained incorrect information.
		- **77%** were verbose.
		- **78%** showed inconsistency compared to human answers.
  - **User Perception**
		- Participants preferred ChatGPT answers **35%** of the time despite inaccuracies.
		- Misleading AI responses were not detected by programmers **39%** of the time.
		- ChatGPT's answers were more formal, analytical, and positive in tone.
		- Politeness and comprehensiveness made ChatGPT answers appear more convincing.
  - # Specialised Models
  - ![image.png](../assets/image_1717159684964_0.png)
  - # Products
		- {{video https://www.youtube.com/watch?v=fjHtjT7GO1c&}}
		- [Blog (cognition-labs.com)](https://www.cognition-labs.com/blog)
		- The AI Coding Assistant
			- **Introduction to Cody**
				- Developed by Sourcegraph, co-founded by Beang Liu, CTO.
				- Aims to revolutionize software development with AI.
				- Integrates into various editors, enhancing developer productivity.
			- **Foundation and Purpose**
				- Rooted in Beang's early interest in AI and machine learning at Stanford AI lab.
				- Addresses the gap between the potential of programming and the drudgery of day-to-day software engineering tasks.
				- Focuses on reducing time spent on reading and understanding existing code.
			- **Defining Spatial Computing**
				- Initially focused on advanced search capabilities in real coding environments.
				- Aimed at achieving 'flow' in programming through efficient information retrieval.
			- **Integration of AI in Sourcegraph and Cody**
				- Shift towards AI-enhanced coding tools around 2017-2018.
				- Early experiments with applying large language models (LLMs) to code search.
				- Development driven by advancements in AI, especially in neural networks and LLMs.
			- **Capabilities of Cody**
				- Provides AI-driven coding assistance in various IDEs.
				- Features include inline completions, high-level Q&A, and specific coding commands.
				- Unique in augmenting large language models with contextual information from Sourcegraph.
			- **Future Aspirations for Cody**
				- Aims to automate more complex software development tasks.
				- Foresees the potential for AI to generate pull requests and change sets from issue descriptions.
				- Emphasizes the importance of context quality in improving code generation.
			- **Technical Challenges and Innovations**
				- Balances traditional information retrieval with AI-driven approaches.
				- Focuses on optimizing search architecture and context retrieval for better code generation.
				- Explores the use of small models for faster and more cost-effective solutions.
			- **The Evolution of Software Development with AI**
				- Envisions a future where individual developers are more productive and cohesive.
				- Anticipates changes in the software development lifecycle due to AI integration.
				- Stresses the growing importance of CS fundamentals and domain expertise in an AI-augmented future.
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
  - # other links
  - Setup Continue for VSCode
  - [How to use a local LLM as a free coding copilot in VS Code | by Simon Fraser | Dec, 2023 | Medium](https://medium.com/@smfraser/how-to-use-a-local-llm-as-a-free-coding-copilot-in-vs-code-6dffc053369d)
  - [LoneStriker/code-millenials-34b-6.0bpw-h6-exl2 · Hugging Face](https://huggingface.co/LoneStriker/code-millenials-34b-6.0bpw-h6-exl2)
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
  - AI code auto-completion tools like [[Microsoft CoPilot]] have shown the potential for AI to enhance software development. The latest [[Microsoft CoPilot]] leverages [[ChatGPT]] 4 and is extremely good.
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
  - # VSCode Agents [[Tips and Tricks]] [[Training Modules]]
  - Cursor
		- really big detailed settings structures in complex extended codebases need this
  - Cline
  - Roo Code
  - Google Gemini
		- subtle whole codebase needle in a haystack logic problems
  - make notes about what works and doesn't in the commits
  - reversion and blend strategies

  - ## Devin
  - ## Cody

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
