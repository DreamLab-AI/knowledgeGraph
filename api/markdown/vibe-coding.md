- ### Definition
  - **Vibe Coding** is an AI-assisted software development practice in which developers direct large language models or AI coding tools (such as Cursor, Aider, or Copilot) with high-level intent rather than writing all code manually. The practitioner retains system-level design authority whilst delegating implementation of discrete, scoped tasks to the AI, requiring disciplined use of version control, structured context documents, and iterative refinement cycles.

- ### Semantic Classification
  - owl-class:: infrastructure:VibeCoding
  - owl-role:: Concept

- ### Relationships
  - **uses**: [[Generative AI]], [[Machine Learning]] — vibe coding relies on LLMs as the core code-generation engine
  - **requires**: [[Software Engineering]] — sound engineering principles (version control, architecture, testing) remain essential even when AI writes the code
  - **enables**: [[User Experience]] — lower barriers to building custom software tools can improve UX prototyping speed
  - **relatedTo**: [[Generative AI Engineering]] — shares techniques and tooling with the broader generative AI engineering practice

- ### Content
  - Start like a Project Manager, not a Prompt Monkey
  Before you do anything, write a real PRD.
  • Describe what you’re building, why, and with what tools (Supabase, Vercel, GitHub, etc.) • Keep it in your root as product.md or instructions.md. Reference it constantly. • AI loses context fast — this is your compass.
  2. Add a deployment manual. Yesterday.
  Document exactly how to ship your project. Which branch, which env vars, which server, where the bodies are buried.
  You will forget. Cursor will forget. This file saves you at 2am.
  3. Git or die trying.
  Cursor will break something critical.
  • Use version control. • Use local changelogs per folder (frontend/backend). • Saves tokens and gives your AI breadcrumbs to follow.
  4. Short chats > Smart chats
  Don’t hoard one 400-message Cursor chat. Start new ones per issue.
  • Keep context small, scoped, and aggressive. • Always say: “Fix X only. Don’t change anything else.” • AI is smart, but it’s also a toddler with scissors.
  5. Don’t touch anything until you’ve scoped the feature
  Your AI works better when you plan.
  • Write out the full feature flow in GPT/Claude first. • Get suggestions. • Choose one approach. • Then go to Cursor. You’re not brainstorming in Cursor. You’re executing.
  6. Clean your house weekly
  Run a weekly codebase cleanup.
  • Delete temp files. • Reorganize folder structure. • AI thrives in clean environments. So do you.
  7. Don’t ask Cursor to build the whole thing
  It’s not your intern. It’s a tool. Use it for: • UI stubs • Small logic blocks • Controlled refactors
  Asking for an entire app in one go is like asking a blender to cook your dinner.
  8. Ask before you fix
  When debugging: • Ask the model to investigate first. • Then have it suggest multiple solutions. • Then pick one.
  Only then ask it to implement. This sequence saves you hours of recursive hell.
  9. Tech debt builds at AI speed
  You’ll MVP fast, but the mess scales faster than you.
  • Keep architecture clean. • Pause every few sprints to refactor. • You can vibe-code fast, but you can’t scale spaghetti.
  10. Your job is to lead the machine
  Cursor isn’t “coding for you.” It’s co-piloting. You’re still the captain.
  • Use .cursorrules to define project rules. • Use git checkpoints. • Use your brain for system thinking and product intuition.
  p.s. I’m putting together 20+ more hard-earned insights in a doc — including specific prompts, scoped examples, debug flows, and mini PRD templates.
  If that sounds valuable, let me know and I’ll drop it.
  Stay caffeinated. Lead the machines.
  - Four week rolling schedule
  - High level concepts
  - Choosing tools
  - Setting up
  - Planning your project
  - Implement
  - Iterate
  - Refine
  - Productionise
  - High level concepts from programming that remain important in vibe coding
  - Gated Debug
  - Understanding client server
  - Understanding code layout and structure
  - Tips and Tricks
  - Build messy then strip back with gemini
  - roll back then peek forward with git
  - Managing and understanding tokens
  - API keys
  - context windows and efficient practice
  - Tools
  - VSCode
  - Aider
  - Cursor
  - Continue
  - Augment
  - Windsurf
  - Multiple AI tools
  - Gemini AI studio
  - Claude 3.7
  - Soon co-pilot for both?
  - Github
  - Git Show
  - branches
  - Yaml files
  - Docs
  - README
  - docs directory
  - Diagrams as code
  - Contacts to pick up
  - [James Patterson](https://www.linkedin.com/in/ACoAABtIa0YBJHS-UQbBV5mChJwA2O0GwBu4ufY) (He/Him)  6:08 PM
		- Hey John! 👋 Hope things are well with you, just saw the post from Dreamlab about vibe coding/agent workshops. Would love to know if/how I could get involved, I’ve been working on some personal projects in v0 and Cursor and keen to learn more
  - Derek Hales
  - Pip
  - Kat Cooke

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z