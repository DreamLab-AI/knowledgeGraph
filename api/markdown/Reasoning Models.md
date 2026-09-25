Reasoning models are large language models trained or post-trained to generate extended intermediate chains of thought before producing a final answer, trading inference-time compute for higher accuracy on complex tasks. They are typically optimised with reinforcement learning on verifiable problems in mathematics, coding, and logic. By spending more tokens deliberating, they outperform standard models on multi-step problems where single-pass generation fails.

### In Plain Terms

- AI models that deliberately work through a problem step by step before answering, spending extra time and effort to get hard questions right. They are slower and cost more per answer, but far more reliable on things like maths, coding, and multi-step logic.

### Content

- These models are usually trained with reinforcement learning against checkable rewards, learning to plan, self-check, and backtrack within a long chain of thought. The approach excels on mathematics, competitive coding, and scientific reasoning, at the cost of higher latency and token consumption per query.

