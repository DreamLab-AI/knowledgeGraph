---
okf_version: "0.2"
type: Class
title: Diagrams as Code
resource: urn:ngm:class:diagrams-as-code
domain: infrastructure
description: Diagrams as Code (DaC) is a software-engineering discipline and tooling category in which technical diagrams (architecture, sequence, state, deployment, entity-relationship, Gantt, wireframe, timing, dataflow) are authored as plain-text source artefacts in a constrained, machine-readable grammar ...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:documentation-as-code
  - urn:ngm:class:declarative-specification
  - urn:ngm:class:domain-specific-language
  - urn:ngm:class:text-based-authoring
  - urn:ngm:class:version-controlled-artefact
hasPart:
  - urn:ngm:class:layout-engine
  - urn:ngm:class:renderer
  - urn:ngm:class:diagram-grammar
  - urn:ngm:class:source-file
  - urn:ngm:class:build-pipeline
  - urn:ngm:class:icon-library
  - urn:ngm:class:theme
  - urn:ngm:class:preview-plugin
requires:
  - urn:ngm:class:layout-algorithm
  - urn:ngm:class:markdown
  - urn:ngm:class:version-control
  - urn:ngm:class:text-editor
  - urn:ngm:class:render-toolchain
enables:
  - urn:ngm:class:c4-model
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:code-review
  - urn:ngm:class:runbook
  - urn:ngm:class:code-review
  - urn:ngm:class:living-documentation
  - urn:ngm:class:architectural-decision-records
  - urn:ngm:class:refactor-time-consistency
dependsOn:
  - urn:ngm:class:sugiyama-algorithm
  - urn:ngm:class:force-directed-layout
  - urn:ngm:class:eclipse-layout-kernel
  - urn:ngm:class:svg
  - urn:ngm:class:unicode
  - urn:ngm:class:markdown
implements:
  - urn:ngm:class:structurizr-dsl
  - urn:ngm:class:markdown-diagramming-as-code-tool
  - urn:ngm:class:markdown-diagramming-as-code-tool
  - urn:ngm:class:plantuml
  - urn:ngm:class:graphviz-dot
  - urn:ngm:class:d2
  - urn:ngm:class:tikz
  - urn:ngm:class:vega-lite
  - urn:ngm:class:wavedrom
  - urn:ngm:class:pikchr
  - urn:ngm:class:penrose
contrastsWith:
  - urn:ngm:class:wysiwyg-editor
  - urn:ngm:class:microsoft-visio
  - urn:ngm:class:lucidchart-drag-drop
  - urn:ngm:class:generative-models
  - urn:ngm:class:whiteboard-photographs
uses:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:markdown-code-fence
  - urn:ngm:class:yaml-frontmatter
  - urn:ngm:class:web-components
supports:
  - urn:ngm:class:mind-map
  - urn:ngm:class:sequence-diagram
  - urn:ngm:class:class-diagram
  - urn:ngm:class:state-diagram
  - urn:ngm:class:entity-relationship-diagram
  - urn:ngm:class:gantt-chart
  - urn:ngm:class:flowchart
  - urn:ngm:class:deployment-diagram
  - urn:ngm:class:timing-diagram
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:markdown-diagramming-as-code-tool
  - urn:ngm:class:object-management-group
  - urn:ngm:class:w3-c
  - urn:ngm:class:markdown-diagramming-as-code-tool
  - urn:ngm:class:omg
  - urn:ngm:class:thoughtworks-tech-radar
relatedTo:
  - urn:ngm:class:c4-model
  - urn:ngm:class:documentation-as-code
  - urn:ngm:class:excalidraw
  - urn:ngm:class:notion
  - urn:ngm:class:ai-diagram-tools
  - urn:ngm:class:logseq
  - urn:ngm:class:kroki
  - urn:ngm:class:diagrams-py
  - urn:ngm:class:adr
  - urn:ngm:class:static-site-generator
---

# Diagrams as Code

Diagrams as Code (DaC) is a software-engineering discipline and tooling category in which technical diagrams (architecture, sequence, state, deployment, entity-relationship, Gantt, wireframe, timing, dataflow) are authored as plain-text source artefacts in a constrained, machine-readable grammar ...
