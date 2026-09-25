Spaced repetition is a learning technique that schedules reviews of material at increasing intervals timed to occur just before predicted forgetting, exploiting the psychological spacing effect to strengthen long-term retention efficiently. Algorithmic implementations track each item's review history and recall outcomes to compute the optimal next-review date, concentrating study effort on material at risk of being forgotten. It is a core mechanism in flashcard software and the memory-management components of adaptive learning systems.

### Overview

- The technique operationalises the spacing effect: information reviewed at distributed intervals is retained far longer than information crammed in a single session. By reviewing each item just as recall begins to fade, learners maximise retention per unit of study time.
- Scheduling algorithms model each item's memory strength and project a review date. Correct, effortful recalls lengthen the interval, while failures shorten it, concentrating effort precisely where forgetting is imminent.

### Mechanisms

- The forgetting curve models memory decay over time as the basis for interval selection.
- Interval-growth algorithms such as SM-2 expand spacing after each successful recall.
- Recall-difficulty feedback adjusts an item's ease and future intervals.
- Modern schedulers fit memory models to large datasets to predict optimal review timing.

### Applications

- Flashcard applications for language vocabulary and factual recall.
- Medical and professional examination preparation requiring durable retention.
- Memory-management modules within [[Personalised Learning]] platforms.
- Reinforcement of skills surfaced as at-risk by [[Intelligent Tutoring System]] diagnostics.

### Provenance

