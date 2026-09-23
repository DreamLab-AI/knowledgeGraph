
Pairwise comparison is a method of evaluation in which items are judged two at a time, with each judgement expressing which of the two is preferred or superior on some criterion. Because relative judgements are easier and more reliable for humans than absolute scoring, pairwise comparison is widely used to elicit preferences and to construct rankings from many such local decisions. Statistical models such as the Bradley-Terry model convert collections of pairwise outcomes into latent strength or quality scores. In machine learning it is the dominant feedback format for training reward models and aligning language models with human preferences.

- [[Pairwise Comparison]] evaluates items two at a time, recording which is preferred, because relative judgements are more reliable than absolute scores.
- It relies on [[Human Feedback]] and feeds statistical models like the [[Bradley-Terry Model]] that recover latent quality scores from many local decisions.
- As a feedback format it enables [[Preference Learning]] and the training of a [[Reward Model]].
- ### Overview
- Asking which of two options is better avoids the calibration and scale-anchoring problems that plague absolute rating tasks.
- A large set of pairwise outcomes can be aggregated into a global ranking, even when individual judges disagree or are noisy.
- Probabilistic models interpret each comparison as a stochastic outcome driven by the difference in latent strengths of the two items.
- This format has become the standard way to collect human preference data for aligning generative models.
- ### Mechanisms
- Each comparison yields a binary or graded preference between two candidates on a stated criterion.
- The Bradley-Terry model assigns each item a strength parameter and predicts the probability one beats another via their difference.
- Maximum-likelihood fitting over all observed comparisons recovers a consistent ranking and quality estimates.
- Reward models trained on pairwise data generalise the preference signal to unseen candidates.
- ### Applications
- Collecting human preference data to train reward models for language-model alignment.
- Ranking search results, recommendations and tournament participants.
- Eliciting expert judgements in decision analysis and evaluation studies.
- Comparing model outputs in human evaluation of generative systems.
- ### Provenance

