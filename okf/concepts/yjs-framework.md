---
okf_version: "0.2"
type: Class
title: Yjs Framework
resource: urn:ngm:class:yjs-framework
domain: distributed-collaboration
description: Yjs is an open-source, high-performance CRDT (Conflict-free Replicated Data Type) framework for building collaborative applications in JavaScript. It provides shared data types such as maps, arrays, and rich text that automatically merge concurrent edits without conflicts, and integrates with popular editors like ProseMirror, CodeMirror, and Quill. Yjs supports multiple transport backends includin
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-protocol-and-infra
enables:
  - urn:ngm:class:crdt
  - urn:ngm:class:real-time-synchronisation
relatedTo:
  - urn:ngm:class:automerge
---

# Yjs Framework

Yjs is an open-source, high-performance CRDT (Conflict-free Replicated Data Type) framework for building collaborative applications in JavaScript. It provides shared data types such as maps, arrays, and rich text that automatically merge concurrent edits without conflicts, and integrates with popular editors like ProseMirror, CodeMirror, and Quill. Yjs supports multiple transport backends including WebSocket, WebRTC, and IndexedDB for offline persistence.
