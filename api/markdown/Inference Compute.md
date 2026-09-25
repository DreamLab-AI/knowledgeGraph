Inference compute is the computational capacity consumed when a trained machine-learning model generates outputs from inputs, as distinct from the compute used during training. For large language models it scales with model size, context length, and the number of generated tokens, and increasingly with test-time reasoning techniques that spend more compute per query to improve answers. It is a primary cost and latency driver for deployed AI systems and agents.

### Content

- Inference compute is provisioned via accelerators (GPUs, TPUs, custom ASICs) and optimised through batching, quantisation, and key-value caching. Test-time scaling, where models deliberate longer to improve accuracy, has made inference compute a strategic lever comparable to training scale.

