Artificial intelligence systems that optimise therapeutic interventions by integrating patient-specific clinical data, treatment guidelines, outcome predictions, and resource constraints to generate evidence-based, individualised care plans. Core capabilities include automated treatment protocol selection, dosage optimisation, radiotherapy dose distribution planning, surgical simulation, and adverse event risk stratification.

### Semantic Classification

### Content

- Treatment Planning AI encompasses artificial intelligence systems that optimise therapeutic interventions through automated treatment selection, dosage optimisation, radiation therapy planning, surgical planning, and personalised care pathway design. These systems integrate patient-specific data, treatment guidelines, outcome predictions, and resource constraints to generate evidence-based, individualised treatment plans.

### Planning and Execution

- Successful long-horizon systems require:
  - Explicit planning phases before execution
  - Regular plan updates as new information emerges
  - Clear task decomposition and prioritisation
  - Progress tracking and milestone completion
  - Recovery mechanisms when tasks go off-track

<!-- vault-migrate: inlined Logseq block 68aef10f-22e6-4b42-b835-1d12dabfef8d from working/pages/Model Control Protocols like MCP.md -->
> ## Model Context Protocol (MCP)
> ### Purpose and Benefits
> MCP standardises how AI applications connect to external services and tools. Rather than building custom integrations for each service, MCP provides:
> Unified protocol for tool discovery and usage
> Reduced integration complexity for developers
> Better tool definitions maintained by service providers
> Standardised authentication and security
> ### Architecture Components
> MCP systems have two main components:
> Servers: Provide tools and resources (maintained by service providers)
> Clients/Hosts: Applications that consume MCP resources
> This architecture shifts integration work from application developers to service providers, who can optimise their MCP servers for better AI interaction.
> ### Workflow Encapsulation
> MCP encourages encapsulating entire workflows rather than exposing granular API endpoints. Instead of requiring multiple API calls to complete a task, MCP servers should provide single endpoints that handle complete business processes.
> ### Practical Implementation
> MCP servers can provide:
> Tools for specific actions
> Prompts for common use cases
> Files and documents
> Real-time data feeds
> The discovery process allows agents to understand available resources dynamically, adapting their capabilities based on connected services.
> — working/pages/Model Control Protocols like MCP.md

<!-- vault-migrate: inlined Logseq block 68aef10f-1127-4a2c-b03f-fc7ddd9a8d1d from working/pages/CLI multi agent systems.md -->
> Modern CLI AI tools can be approached like conversational interfaces:
> Ask the tool what it can do
> Request help with navigation and commands
> Use natural language to describe desired outcomes
> Let the tool guide you through complex processes
> ### Integration with Automation
> CLI tools excel in automation contexts:
> GitHub Actions and CI/CD pipelines
> Bash scripts and system administration
> Background processing and scheduled tasks
> Headless operation in server environments
> ### Advantages of CLI Interfaces
> Command-line tools offer distinct benefits:
> Single-focus interaction without visual distractions
> Fire-and-forget task execution
> Easy integration with existing development workflows
> Reduced cognitive load during complex operations
> — working/pages/CLI multi agent systems.md

<!-- vault-migrate: inlined Logseq block 68aef10f-4c4a-4c65-a81b-be1ac28622e2 from working/pages/Computer Use and Browser Agents.md -->
> ### Expanding Agent Capabilities
> Browser agents can interact with any web-based interface, dramatically expanding what AI systems can accomplish. They operate websites designed for humans rather than requiring specific API access.
> ### Use Cases and Applications
> Browser agents excel at:
> Web scraping and data collection from sites without APIs
> Testing web applications and user interfaces
> Automated form filling and data entry
> Research across multiple websites and databases
> E-commerce and booking tasks
> ### Technical Implementation
> Modern browser agent frameworks:
> Provide headless browser environments
> Support real-time session monitoring
> Handle authentication and session management
> Offer both programmatic and visual feedback
> Scale to multiple concurrent sessions
> — working/pages/Computer Use and Browser Agents.md

### Planning and Execution

- Successful long-horizon systems require:
  - Explicit planning phases before execution
  - Regular plan updates as new information emerges
  - Clear task decomposition and prioritisation
  - Progress tracking and milestone completion
  - Recovery mechanisms when tasks go off-track

<!-- vault-migrate: inlined Logseq block 68aef10f-22e6-4b42-b835-1d12dabfef8d from working/pages/Model Control Protocols like MCP.md -->
> ## Model Context Protocol (MCP)
> ### Purpose and Benefits
> MCP standardises how AI applications connect to external services and tools. Rather than building custom integrations for each service, MCP provides:
> Unified protocol for tool discovery and usage
> Reduced integration complexity for developers
> Better tool definitions maintained by service providers
> Standardised authentication and security
> ### Architecture Components
> MCP systems have two main components:
> Servers: Provide tools and resources (maintained by service providers)
> Clients/Hosts: Applications that consume MCP resources
> This architecture shifts integration work from application developers to service providers, who can optimise their MCP servers for better AI interaction.
> ### Workflow Encapsulation
> MCP encourages encapsulating entire workflows rather than exposing granular API endpoints. Instead of requiring multiple API calls to complete a task, MCP servers should provide single endpoints that handle complete business processes.
> ### Practical Implementation
> MCP servers can provide:
> Tools for specific actions
> Prompts for common use cases
> Files and documents
> Real-time data feeds
> The discovery process allows agents to understand available resources dynamically, adapting their capabilities based on connected services.
> — working/pages/Model Control Protocols like MCP.md

<!-- vault-migrate: inlined Logseq block 68aef10f-1127-4a2c-b03f-fc7ddd9a8d1d from working/pages/CLI multi agent systems.md -->
> Modern CLI AI tools can be approached like conversational interfaces:
> Ask the tool what it can do
> Request help with navigation and commands
> Use natural language to describe desired outcomes
> Let the tool guide you through complex processes
> ### Integration with Automation
> CLI tools excel in automation contexts:
> GitHub Actions and CI/CD pipelines
> Bash scripts and system administration
> Background processing and scheduled tasks
> Headless operation in server environments
> ### Advantages of CLI Interfaces
> Command-line tools offer distinct benefits:
> Single-focus interaction without visual distractions
> Fire-and-forget task execution
> Easy integration with existing development workflows
> Reduced cognitive load during complex operations
> — working/pages/CLI multi agent systems.md

<!-- vault-migrate: inlined Logseq block 68aef10f-4c4a-4c65-a81b-be1ac28622e2 from working/pages/Computer Use and Browser Agents.md -->
> ### Expanding Agent Capabilities
> Browser agents can interact with any web-based interface, dramatically expanding what AI systems can accomplish. They operate websites designed for humans rather than requiring specific API access.
> ### Use Cases and Applications
> Browser agents excel at:
> Web scraping and data collection from sites without APIs
> Testing web applications and user interfaces
> Automated form filling and data entry
> Research across multiple websites and databases
> E-commerce and booking tasks
> ### Technical Implementation
> Modern browser agent frameworks:
> Provide headless browser environments
> Support real-time session monitoring
> Handle authentication and session management
> Offer both programmatic and visual feedback
> Scale to multiple concurrent sessions
> — working/pages/Computer Use and Browser Agents.md

### Planning and Execution

- Successful long-horizon systems require:
  - Explicit planning phases before execution
  - Regular plan updates as new information emerges
  - Clear task decomposition and prioritisation
  - Progress tracking and milestone completion
- Deep agents distinguish themselves through:
  - Extended runtime (minutes to hours or days)
  - Comprehensive planning and re-planning
  - High-value, substantial outputs
  - Self-correction and iteration capabilities
  - Significant computational resource usage

#### 4.12.6 AI and Central Planning

Another concern is the fear that AI will make centrally planned economies seem viable, where past attempts failed due to the lack of data. This idea was discussed in a conversation between Peter Thiel and Reed Hoffman hosted by Neil Ferguson at Stanford in 2018. Thiel posited that AI appears to favor centralization, an aspect that supports the principles of central planning.

#### 4.12.6 AI and Central Planning

Another concern is the fear that AI will make centrally planned economies seem viable, where past attempts failed due to the lack of data. This idea was discussed in a conversation between Peter Thiel and Reed Hoffman hosted by Neil Ferguson at Stanford in 2018. Thiel posited that AI appears to favor centralization, an aspect that supports the principles of central planning.

#### 4.12.6 AI and Central Planning

Another concern is the fear that AI will make centrally planned economies seem viable, where past attempts failed due to the lack of data. This idea was discussed in a conversation between Peter Thiel and Reed Hoffman hosted by Neil Ferguson at Stanford in 2018. Thiel posited that AI appears to favor centralization, an aspect that supports the principles of central planning.

#### 4.12.6 AI and Central Planning

Another concern is the fear that AI will make centrally planned economies seem viable, where past attempts failed due to the lack of data. This idea was discussed in a conversation between Peter Thiel and Reed Hoffman hosted by Neil Ferguson at Stanford in 2018. Thiel posited that AI appears to favor centralization, an aspect that supports the principles of central planning.

## Core Characteristics

- **Therapy Optimisation**: Personalised treatment protocol selection
- **Radiation Treatment Planning**: Automated radiotherapy dose optimisation
- **Surgical Planning**: 3D surgical simulation and guidance
- **Outcome Prediction**: Treatment efficacy forecasting
- **Adverse Event Prediction**: Toxicity and complication risk assessment

  ## Relationships

- **Superclass**: Medical AI
- **Related**: Medical Diagnosis AI, Precision Medicine, Clinical Decision Support
- **Utilises**: Optimisation Algorithms, Reinforcement Learning, 3D Medical Imaging

  ## Key Literature

  1. Bibault, J. E., et al. (2019). "Big Data and machine learning in radiation oncology: State of the art and future prospects." *Cancer Letters*, 382(1), 110-117.

  2. Kooreman, E. S., et al. (2022). "Automated treatment planning in radiotherapy using AI: a review." *Medical Physics Reviews*.

  ## See Also

- [[Medical AI]]
- [[Medical Diagnosis AI]]
- [[Radiation Therapy]]

  ## Core Characteristics

- **Therapy Optimisation**: Personalised treatment protocol selection
- **Radiation Treatment Planning**: Automated radiotherapy dose optimisation
- **Surgical Planning**: 3D surgical simulation and guidance
- **Outcome Prediction**: Treatment efficacy forecasting
- **Adverse Event Prediction**: Toxicity and complication risk assessment

  ## Relationships

- **Superclass**: Medical AI
- **Related**: Medical Diagnosis AI, Precision Medicine, Clinical Decision Support
- **Utilises**: Optimisation Algorithms, Reinforcement Learning, 3D Medical Imaging

  ## Key Literature

  1. Bibault, J. E., et al. (2019). "Big Data and machine learning in radiation oncology: State of the art and future prospects." *Cancer Letters*, 382(1), 110-117.

  2. Kooreman, E. S., et al. (2022). "Automated treatment planning in radiotherapy using AI: a review." *Medical Physics Reviews*.

  ## See Also

- [[Medical AI]]
- [[Medical Diagnosis AI]]
- [[Radiation Therapy]]

### Provenance

