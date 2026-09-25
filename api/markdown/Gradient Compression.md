A family of communication-efficiency techniques for distributed and federated machine learning that reduce the volume of gradient data exchanged between workers during training, using quantisation to fewer bits, sparsification of small-magnitude entries, or low-rank decomposition, usually combined with error-feedback so the accumulated compression error is reapplied and convergence is preserved.

### Semantic Classification

### Content

## Definition

**Gradient compression** addresses the dominant bottleneck in data-parallel training: the cost of exchanging gradients between workers on every optimisation step. In synchronous [[Data Parallelism]], each worker computes gradients over its local mini-batch, and those gradients — one value per model parameter, so gigabytes per step for large models — must be aggregated across the cluster before weights are updated. Compressing the gradients before communication cuts interconnect traffic by one to three orders of magnitude, trading a small amount of extra computation and approximation error for substantially higher throughput on bandwidth-limited links.

The three principal mechanisms are **quantisation** (representing each gradient value in fewer bits, from FP16 down to 1-bit SGD and ternary schemes such as TernGrad or QSGD's stochastic quantisation), **sparsification** (transmitting only the top-k largest-magnitude entries, as in Deep Gradient Compression, which reports 270-600x compression with negligible accuracy loss), and **low-rank approximation** (factorising the gradient matrix, as in PowerSGD). Naive compression biases the optimisation trajectory, so practical schemes pair compression with **error feedback**: the residual discarded in one step is accumulated locally and added to the next step's gradient, which restores convergence guarantees for a broad class of compressors.

Gradient compression is foundational for [[Federated Learning]], where clients sit behind consumer uplinks and communication — not computation — dominates wall-clock cost, and it interacts with privacy techniques: compressed or sketched updates are also the substrate on which secure aggregation and differentially private noise addition operate in privacy-preserving analytics pipelines.

## Technical Details

**Quantisation approaches**:

- 1-bit SGD (Seide et al., 2014) — sign-only gradients with error feedback, first deployed for speech-model training
- QSGD (Alistarh et al., 2017) — stochastic quantisation with tunable bit-width and unbiasedness guarantees
- signSGD with majority vote — sign-based updates with theoretical convergence analysis

  **Sparsification approaches**:

- Top-k selection with momentum correction (Deep Gradient Compression, Lin et al., 2018)
- Random-k and threshold-based selection for cheaper selection cost

  **Low-rank approaches**:

- PowerSGD (Vogels et al., 2019) — iterated power method producing rank-r factors; used in large-scale production training

  **Systems integration**:

- Framework hooks: PyTorch DDP communication hooks, Horovod compression operators, DeepSpeed 1-bit Adam/LAMB
- Interaction with all-reduce: sparse updates aggregate poorly under ring all-reduce (indices differ per worker), so sparsified schemes often use all-gather or parameter-server topologies
- Trade-off envelope: compression helps most when the network, not the GPU, is the bottleneck — over fast NVLink/InfiniBand fabrics, aggressive compression can reduce end-to-end throughput

  ## Current Landscape

- **Optimiser-aware compression**: DeepSpeed's 1-bit Adam (2020) reports up to 5x less communication and up to 3.5x higher throughput for BERT-Large pretraining at the same convergence; its successor 0/1 Adam (ICLR 2023) cut up to 87% of data volume and 54% of communication rounds across up to 128 GPUs, and 1-bit LAMB extends the technique to large-batch training.
- **Low-rank remains the practical winner for all-reduce**: PowerSGD (NeurIPS 2019) is still the reference low-rank compressor because its factors aggregate cleanly under ring all-reduce/NCCL — the property that lets sparsified top-k schemes struggle at scale — and it ships as a built-in PyTorch DDP communication hook.
- **LLM-era methods**: work such as LoCo (2024) integrates a moving-average error-feedback compensator with Adam/Adafactor under Megatron-LM and PyTorch FSDP, reporting 14-40% faster training of LLaMA-class and MoE models without accuracy loss; extreme 1-bit schemes (e.g. BinSGDM) now claim overall wall-clock speedups over highly optimised full-precision DDP.
- **Error feedback is the load-bearing idea**: nearly every deployed compressor pairs a biased compressor (sign, top-k, low-rank) with local accumulation and reinsertion of the discarded residual, which restores convergence guarantees for a broad compressor class.

  **Sources**:

- https://www.deepspeed.ai/2020/09/08/onebit-adam-blog-post.html
- https://openreview.net/pdf?id=Sylw3BHgIH
- https://openreview.net/pdf?id=-CefY2EOupj

