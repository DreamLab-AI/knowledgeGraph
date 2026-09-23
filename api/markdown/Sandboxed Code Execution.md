
Sandboxed code execution is the practice of running AI-agent-generated code inside an isolated runtime — a container, microVM, or restricted interpreter — that constrains filesystem, network, and system-call access. It lets an agent execute arbitrary code to compute results or verify hypotheses without risking the host environment or leaking credentials. It matters for autonomous coding agents and terminal-based assistants, where generated code is untrusted by default and must be contained until its effects are reviewed or accepted.

- ### Provenance

