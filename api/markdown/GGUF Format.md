
GGUF (GPT-Generated Unified Format) is a binary file format for storing large language model weights, metadata, and tokenizer data in a single self-contained file optimised for fast loading and local inference. Developed in the llama.cpp ecosystem as a successor to GGML, it supports a range of quantization schemes and embeds the metadata needed to run a model without external configuration. It is the de facto format for running quantized LLMs on consumer hardware.

- ### Content
  - A GGUF file bundles tensors, hyperparameters, and tokenizer information with a versioned, extensible header, enabling memory-mapped loading and forward compatibility. It supports many quantization levels (e.g. 2-bit through 8-bit and k-quant variants) that trade accuracy for reduced memory footprint. This makes large models runnable on CPUs and modest GPUs, broadening access to local and offline inference.

