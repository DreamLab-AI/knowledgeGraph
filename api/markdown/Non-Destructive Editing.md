
Non-destructive editing is a content-authoring approach in which modifications are recorded as separate, reversible operations or layers rather than overwriting the original source data. The source remains intact, and the final result is computed by composing the edit stack, so any change can be re-ordered, adjusted, or removed. It is fundamental to layered 3D scene description and modern media pipelines.

- ### Content
  - In USD this is realised through composition arcs and layer stacks, where stronger layers override weaker ones without modifying them, enabling collaborative, version-friendly workflows. The same principle underlies adjustment layers in image and video editors, allowing experimentation and reproducibility at the cost of resolving the edit graph at read time.

