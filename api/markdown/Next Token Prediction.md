
Next token prediction is the autoregressive language-modelling objective in which a model predicts the next token in a sequence given all preceding tokens. Trained by maximising the likelihood of each token conditioned on its left context, it requires no explicit labels and scales to vast text corpora. It is the core pre-training objective behind generative transformer language models such as the GPT family.

- Next token prediction trains a model to estimate the probability of the next token given all preceding tokens, an [[Autoregressive Model]] objective that drives generative [[Language Model]] pre-training. As a [[Pre Training]] task it is a form of [[Self Supervised Learning]], since the next token in any text supplies its own target.
- It differs from [[Masked Language Modelling]] in that prediction is strictly left-to-right, which makes the resulting model naturally suited to text generation.
- ### Overview
- The model processes a sequence and, at each position, outputs a probability distribution over the vocabulary for the following token.
- Training minimises a [[Cross Entropy Loss]] between the predicted distribution and the true next token, a standard generative [[Loss Function]].
- Causal masking in the [[Transformer]] ensures each position attends only to earlier tokens, preserving the autoregressive factorisation.
- At inference, tokens are generated one at a time and fed back as context, enabling open-ended text generation.
- ### Mechanisms
- Causal attention: a triangular mask prevents positions from attending to future tokens.
- Teacher forcing: during training the true previous tokens are supplied as context.
- Likelihood maximisation: the objective maximises the joint probability factorised over positions.
- Sampling: at generation time, decoding strategies select tokens from the predicted distribution.
- ### Applications
- Pre-training generative [[GPT]]-style language models.
- Producing transferable representations later adapted via [[Fine Tuning]].
- Text completion, summarisation, dialogue and code generation.
- Serving as the foundation for instruction-tuned and aligned assistants.
- ### Provenance

