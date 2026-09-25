A tool-augmented large language model is an LLM that can invoke external tools, APIs, code execution, or retrieval systems during inference to overcome the limits of its parametric knowledge. By emitting structured calls and incorporating the returned results, it can perform calculations, access live data, and act on the world rather than relying solely on text generation.

### Content

- Tool use is typically realised through function-calling interfaces in which the model proposes a tool and arguments, the runtime executes it, and the result is fed back into the context. This pattern grounds outputs in authoritative sources, reduces hallucination, and enables multi-step reasoning over real-world systems.

