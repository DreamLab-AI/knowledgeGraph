- ### Definition
  - Computer Use is an AI capability that enables multimodal models to perceive, navigate, and interact with graphical user interfaces, desktop applications, and operating system environments to autonomously complete multi-step tasks. The model receives screenshot observations of the screen and emits mouse-click, keyboard, and scroll actions, effectively operating software as a human operator would. It extends conventional tool-use paradigms by treating the entire GUI surface as an action space rather than a structured API.

- ### Semantic Classification
  - owl-class:: computer-use:Computer Use
  - owl-role:: Concept

- ### Relationships
  - requires [[multimodal]]
  - requires [[Tool Use]]
  - enables [[Autonomous Agent]]
  - enables [[Workflow Automation]]
  - relatedTo [[Interface]]

- ### Content
  - Computer Use extends the reach of AI agents beyond structured API calls to encompass any software accessible via a graphical interface. A model operating in this mode treats pixel-level screen content as observation and generates discrete UI actions—clicks, keypresses, scroll events, and drag operations—to manipulate applications that lack machine-readable APIs.
  - This capability is particularly significant for legacy enterprise software, web applications requiring complex navigation, and tasks that involve switching between multiple desktop tools. The model must perform visual grounding (identifying the spatial location of buttons, fields, and menus), state tracking across action sequences, and error recovery when the UI state diverges from expectations.
  - Robustness challenges include latency-induced state mismatches, pop-up dialogs interrupting workflows, and the risk of irreversible actions such as deletions or form submissions. Safety constraints typically include confirmation steps for destructive operations and sandboxed environments for testing. Computer Use aligns with broader agentic paradigms that use tool-use to extend language model capability beyond text generation into real-world action execution.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z