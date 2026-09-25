Prompt caching is an inference optimisation in which the key-value attention state for a shared, unchanging prefix of a prompt -- such as a system prompt or long context document -- is computed once and reused across subsequent requests, avoiding redundant computation. It reduces latency and cost for workloads that repeatedly send the same long context with only a short suffix varying between calls. It builds directly on KV cache mechanisms and is a common lever in context engineering for large language model applications.

### In Plain Terms

- A speed-and-cost saving trick: when you keep sending the same long piece of context to an AI (a big instruction sheet, say), it holds on to the groundwork from the first time instead of re-reading it every request. You pay less and get faster replies for the repeated part.

### Provenance

