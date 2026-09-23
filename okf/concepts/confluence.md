---
okf_version: "0.2"
type: Class
title: Confluence
resource: urn:ngm:class:confluence
domain: distributed-collaboration
description: Confluence is a team workspace and wiki product developed by Atlassian for collaborative documentation, knowledge management, and project information sharing. It organises content into spaces and pages with rich editing, versioning, and tight integration with issue-tracking tools such as Jira. It is widely deployed as a digital-workplace platform for enterprise knowledge capture.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:dc-workspace-tools
requires:
  - urn:ngm:class:user-authentication
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:knowledge-management
  - urn:ngm:class:runbook
dependsOn:
  - urn:ngm:class:distributed-collaboration
implements:
  - urn:ngm:class:enterprise-content-management
contrastsWith:
  - urn:ngm:class:notion
bridgesTo:
  - urn:ngm:class:jira
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:webhook
supports:
  - urn:ngm:class:remote-work
  - urn:ngm:class:asynchronous-communication
partOf:
  - urn:ngm:class:digital-workplace-platform
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-whiteboard
  - urn:ngm:class:issue-tracking
---

# Confluence

Confluence is a team workspace and wiki product developed by Atlassian for collaborative documentation, knowledge management, and project information sharing. It organises content into spaces and pages with rich editing, versioning, and tight integration with issue-tracking tools such as Jira. It is widely deployed as a digital-workplace platform for enterprise knowledge capture.
