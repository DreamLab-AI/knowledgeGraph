Cross-modal retrieval is the task of retrieving items in one modality (such as images) using a query expressed in a different modality (such as text), and vice versa. It relies on learning a shared embedding space in which semantically corresponding items across modalities lie close together, so that similarity search can bridge the modality gap. Contrastive vision-language models are the dominant approach, enabling text-to-image search, image captioning retrieval and multimodal recommendation.

- Cross-modal retrieval finds items in one modality from queries in another, a specialised form of [[Information Retrieval]].
- It depends on a shared [[Embedding]] space learned so that corresponding text and images sit near each other.
- [[Contrastive Learning]] over paired data, as in [[CLIP]], is the standard recipe for building such spaces.

### Definition continued

- The retrieval step reduces to nearest-neighbour [[Vector Search]] across the joint space, making it efficient at scale.

### Overview

- The core challenge is the modality gap: raw pixels and raw tokens are incomparable, so a model must project both into a common geometry where cosine or dot-product similarity reflects semantic correspondence.
- Vision-language models trained with a contrastive objective pull matched image-text pairs together and push mismatched pairs apart, yielding aligned encoders for each modality.
- At inference, a query of either type is encoded once and matched against a precomputed index of the opposite modality.

### Mechanisms

- Dual or shared encoders mapping each modality into one vector space.
- Contrastive training objectives (such as InfoNCE) over large paired corpora.
- Approximate nearest-neighbour indexes for fast similarity search.
- Optional re-ranking with cross-attention fusion for higher precision.

### Applications

- Text-to-image and image-to-text search engines.
- Multimodal recommendation and content moderation.
- Zero-shot classification by retrieving the nearest label embedding.
- Asset discovery in large media and document libraries.

### Provenance

