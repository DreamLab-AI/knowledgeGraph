---
okf_version: "0.2"
type: Class
title: Accessibility Tree
resource: urn:ngm:class:accessibility-tree
domain: ai
description: The Accessibility Tree is a structured, platform-independent semantic representation of a user interface that browsers and native application runtimes construct in parallel with the visual render tree, exposing each element's role, name, description, state, and value to platform accessibility APIs and programmatic automation clients. Derived from the Document Object Model by filtering out presenta
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:user-interface
  - urn:ngm:class:inclusive-design
  - urn:ngm:class:user-interface-model
  - urn:ngm:class:semantic-representation
hasPart:
  - urn:ngm:class:aria-role
  - urn:ngm:class:accessible-name
  - urn:ngm:class:aria-state
  - urn:ngm:class:focus-management
  - urn:ngm:class:accessible-name-computation
  - urn:ngm:class:alternative-text
  - urn:ngm:class:live-region
  - urn:ngm:class:accessible-description
  - urn:ngm:class:role-name-state-value-tuple
requires:
  - urn:ngm:class:document-object-model
  - urn:ngm:class:wai-aria
  - urn:ngm:class:semantic-html
  - urn:ngm:class:html-accessibility-api-mappings
  - urn:ngm:class:platform-accessibility-api
  - urn:ngm:class:accessible-name-computation
enables:
  - urn:ngm:class:assistive-technology
  - urn:ngm:class:computer-use-and-browser-agents
  - urn:ngm:class:browser-automation
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:jaws-screen-reader
  - urn:ngm:class:nvda-screen-reader
  - urn:ngm:class:voiceover
  - urn:ngm:class:keyboard-navigation
  - urn:ngm:class:voice-control
  - urn:ngm:class:automated-accessibility-testing
  - urn:ngm:class:switch-access
dependsOn:
  - urn:ngm:class:document-object-model
  - urn:ngm:class:wai-aria
  - urn:ngm:class:chrome-devtools-protocol
  - urn:ngm:class:semantic-html
  - urn:ngm:class:browser-rendering-engine
implements:
  - urn:ngm:class:core-accessibility-api-mappings
  - urn:ngm:class:wcag-2-2
  - urn:ngm:class:windows-ui-automation
  - urn:ngm:class:platform-accessibility-api
  - urn:ngm:class:msaa-iaccessible2
  - urn:ngm:class:atk-at-spi
contrastsWith:
  - urn:ngm:class:visual-render-tree
  - urn:ngm:class:pixel-based-interaction
  - urn:ngm:class:screenshot-based-automation
uses:
  - urn:ngm:class:aria-role
  - urn:ngm:class:aria-state
  - urn:ngm:class:accessible-name-computation
  - urn:ngm:class:semantic-html
  - urn:ngm:class:alternative-text
  - urn:ngm:class:focus-management
supports:
  - urn:ngm:class:accessibility
  - urn:ngm:class:universal-design
  - urn:ngm:class:assistive-technology
  - urn:ngm:class:web-accessibility-initiative
  - urn:ngm:class:inclusive-design
  - urn:ngm:class:accessibility-standard
standardizedBy:
  - urn:ngm:class:wai-aria
  - urn:ngm:class:wcag-2-2
  - urn:ngm:class:core-accessibility-api-mappings
  - urn:ngm:class:web-accessibility-initiative
  - urn:ngm:class:html-accessibility-api-mappings
  - urn:ngm:class:accessibility-standard
relatedTo:
  - urn:ngm:class:computer-use-and-browser-agents
  - urn:ngm:class:platform-accessibility-api
  - urn:ngm:class:chrome-devtools-protocol
  - urn:ngm:class:webdriver-bidi
  - urn:ngm:class:playwright-mcp
  - urn:ngm:class:axe-core
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:web-agent
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:large-language-model
  - urn:ngm:class:accessibility-audit-tool
  - urn:ngm:class:universal-design
---

# Accessibility Tree

The Accessibility Tree is a structured, platform-independent semantic representation of a user interface that browsers and native application runtimes construct in parallel with the visual render tree, exposing each element's role, name, description, state, and value to platform accessibility APIs and programmatic automation clients. Derived from the Document Object Model by filtering out presentational and layout-only nodes, it is the authoritative conduit through which screen readers, braille displays, switch-access devices, voice-control systems, and AI browser agents perceive and interact with software interfaces without parsing raw pixels.
