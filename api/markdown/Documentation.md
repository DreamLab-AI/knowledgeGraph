Documentation is the structured body of written, diagrammatic, or interactive material that describes the purpose, design, behaviour, and use of a system, dataset, process, or software artefact. It serves as the primary medium through which knowledge about an artefact is transferred between its creators and its users, maintainers, and auditors. Effective documentation spans reference material, conceptual explanations, tutorials, and procedural guides, and is increasingly treated as a versioned, testable component of the artefact itself rather than an afterthought.

### Overview

- Documentation captures the intent, structure, and operation of systems so that knowledge survives the departure of its original authors and scales beyond a single team.
- It exists along a spectrum from machine-extractable inline comments and docstrings to standalone reference manuals, design records, and narrative guides.
- The "docs-as-code" paradigm treats documentation sources as plain-text files held under [[Version Control]], reviewed alongside code, and published through automated pipelines.
- Documentation quality is a measurable property: completeness, accuracy, currency, discoverability, and audience fit all contribute to its value.

### Key aspects

- Reference documentation describes every interface, parameter, and configuration option precisely, often generated from source annotations.
- Conceptual documentation explains the mental model and architecture behind a system, providing the "why" rather than the "how".
- Procedural documentation (how-to guides and runbooks) walks readers through accomplishing concrete tasks.
- Tutorials provide guided, learning-oriented paths for newcomers.
- [[Metadata]] and structured annotations make documentation searchable and linkable.

### Mechanisms

- Authoring in lightweight markup such as [[Markdown]] or reStructuredText keeps sources diffable and reviewable.
- [[Static Site Generation]] transforms source files into navigable, searchable websites.
- API documentation generators extract signatures and comments directly from source to keep reference material synchronised with code.
- Continuous integration can lint prose, check links, and test embedded code samples, treating documentation defects as build failures.

### Applications

- Software libraries and platforms ship reference docs, tutorials, and migration guides to enable adoption.
- Research projects publish methods, environments, and analysis steps to support [[Reproducible Research]].
- Operations teams maintain runbooks and incident playbooks as living documentation.
- Datasets are accompanied by data dictionaries and provenance records expressed as [[Metadata]].

### Provenance

