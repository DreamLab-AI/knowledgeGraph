A query encoder is a neural model component that maps a search query into a dense vector embedding within a shared semantic space, enabling similarity comparison against encoded documents. In dual-encoder retrieval architectures it is paired with a document encoder, allowing fast approximate-nearest-neighbour search over precomputed passage embeddings. It is a core building block of dense retrieval and retrieval-augmented generation pipelines.

### Content

- In dual-encoder (bi-encoder) designs, the query encoder runs at inference time while document embeddings are precomputed and indexed, giving low-latency retrieval. Training typically uses contrastive objectives with positive and hard-negative passages. Quality hinges on alignment between the query and document encoders' shared embedding space.

