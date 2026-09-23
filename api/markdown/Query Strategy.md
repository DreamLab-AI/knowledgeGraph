
A query strategy is the policy by which an active-learning system selects which unlabelled instances to request labels for, aiming to maximise model improvement per labelling cost. Common strategies include uncertainty sampling, query-by-committee, and expected model change. It is the decision-making core that makes active learning more label-efficient than passive supervised learning.

- ### Content
  - Uncertainty sampling selects instances the model is least confident about; query-by-committee picks points of maximal disagreement among an ensemble; expected-error-reduction estimates downstream impact. The choice trades off computational cost against labelling efficiency, and poorly chosen strategies can introduce sampling bias that degrades generalisation.

