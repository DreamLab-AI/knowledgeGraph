Few-shot examples are a small set of input-output demonstrations placed within a language model's prompt to illustrate the desired task, format, or reasoning pattern. By conditioning on these in-context examples, the model can perform the task without weight updates, leveraging in-context learning. The number, quality, ordering, and representativeness of the examples strongly influence output accuracy and consistency.

### Content

- Selecting effective few-shot examples involves choosing demonstrations that are representative of the target distribution, formatted consistently, and ordered to avoid recency or majority biases. Because examples consume context-window budget, practitioners balance their number against token limits and may retrieve semantically similar examples dynamically to maximise relevance per prompt.

