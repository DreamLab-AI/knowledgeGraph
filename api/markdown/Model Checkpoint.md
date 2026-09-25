A model checkpoint is a serialised snapshot of a machine learning model's learned parameters (weights), often including optimiser state, captured at a point during or after training. Checkpoints allow training to resume after interruption, enable model sharing and deployment, and support evaluation of intermediate states. They are typically stored in formats such as safetensors, PyTorch .pt, or framework-native files.

### Content

- Checkpoints make long training runs fault-tolerant by allowing exact resumption, and they are the unit of distribution for pretrained and fine-tuned models. Safetensors has become a preferred format because it avoids the arbitrary-code-execution risk of pickle while supporting fast, zero-copy loading.

