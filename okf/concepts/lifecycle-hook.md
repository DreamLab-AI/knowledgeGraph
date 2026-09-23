---
okf_version: "0.2"
type: Class
title: Lifecycle Hook
resource: urn:ngm:class:lifecycle-hook
domain: infrastructure
description: An extension point exposed at a defined moment in a system's execution lifecycle at which user-supplied code is invoked to observe or modify behaviour without altering the host itself. In agent runtimes, hooks fire before and after events such as a tool call, a model request, a task start, or a session end, and the registered handler can log, validate, transform inputs and outputs, inject context,
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:design-pattern
  - urn:ngm:class:designpattern
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
uses:
  - urn:ngm:class:middleware
relatedTo:
  - urn:ngm:class:webhook
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:eventdrivenarchitecture
---

# Lifecycle Hook

An extension point exposed at a defined moment in a system's execution lifecycle at which user-supplied code is invoked to observe or modify behaviour without altering the host itself. In agent runtimes, hooks fire before and after events such as a tool call, a model request, a task start, or a session end, and the registered handler can log, validate, transform inputs and outputs, inject context, or veto the action, making hooks the primary mechanism for deterministic, policy-driven customisation of an otherwise opaque agent loop.
