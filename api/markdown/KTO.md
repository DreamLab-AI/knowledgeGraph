KTO (Kahneman-Tversky Optimization) is a method for aligning language models that learns from binary good or bad feedback on individual outputs rather than paired preference comparisons. Drawing on prospect theory, it defines a utility-based loss that down-weights losses relative to gains, simplifying data collection compared with preference-pair methods. It is an alternative to direct preference optimization in the post-training alignment toolkit.

### Content

- Because KTO needs only a desirable/undesirable label per sample, it avoids the costly construction of preference pairs while remaining competitive in alignment quality. Its loss asymmetrically penalises degradations more than it rewards improvements, mirroring human loss aversion and producing models that are conservative about regressions.

