Resolution bucketing is a training-data preparation technique for diffusion and other image-generation models that groups training images into a fixed set of aspect-ratio and size buckets rather than forcing every image to a single square resolution. Each batch is drawn from a single bucket so images share dimensions, avoiding distortion from cropping or stretching while preserving GPU batching efficiency. It improves fidelity for non-square data and is a standard step in fine-tuning pipelines such as Kohya-based DreamBooth and LoRA training.

### Content

- By assigning each image to the nearest valid bucket and batching within buckets, the technique preserves composition and detail for portraits, landscapes, and other non-square inputs. This reduces aspect-ratio artefacts in the trained model while keeping memory layout uniform for efficient GPU throughput.

