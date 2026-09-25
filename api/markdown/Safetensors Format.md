Safetensors is a file format for storing tensors — the weight matrices of machine-learning models — designed to be safe, fast, and simple. Unlike Python pickle-based formats, safetensors stores only raw tensor data and a JSON header describing shapes, dtypes, and offsets, so loading a file cannot execute arbitrary code. The layout supports zero-copy and memory-mapped loading, enabling rapid model initialisation and lazy access to individual tensors. Developed by Hugging Face, it has become a de facto standard for distributing open model weights.

### Content

- The format's safety guarantee derives from its refusal to embed executable objects: a safetensors file is a header plus a contiguous binary buffer, parsed without invoking any deserialisation machinery that could run code. This eliminates the arbitrary-code-execution risk inherent in pickle-based checkpoints.
- Performance comes from the offset-indexed layout, which permits memory-mapping the file and loading individual tensors lazily and without copying. This makes safetensors particularly well suited to large models and to environments where only a subset of weights is needed at a time.

