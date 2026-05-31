- ### Definition
  - The [[Safetensors Format]] is a file format for storing model tensors safely and efficiently. It is a [[Data Format]] that holds raw tensor bytes plus a JSON header of shapes, dtypes, and offsets, so loading cannot execute arbitrary code.
- ### Relationships
  - The format is the serialisation defined by the [[Safetensors]] library and is a specialised form of [[Data Serialization]] for numeric tensors. Its zero-copy memory-mapped loading directly enables fast, secure [[Model Deployment]].
- ### Content
  - The format's safety guarantee derives from its refusal to embed executable objects: a safetensors file is a header plus a contiguous binary buffer, parsed without invoking any deserialisation machinery that could run code. This eliminates the arbitrary-code-execution risk inherent in pickle-based checkpoints.

  - Performance comes from the offset-indexed layout, which permits memory-mapping the file and loading individual tensors lazily and without copying. This makes safetensors particularly well suited to large models and to environments where only a subset of weights is needed at a time.