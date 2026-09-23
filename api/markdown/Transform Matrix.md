
A transform matrix is a matrix, typically 4x4 in homogeneous coordinates for 3D graphics, that encodes a composed translation, rotation and scale applied to geometry. Graphics pipelines multiply vertex positions by a chain of transform matrices to move objects from local model space through world, view and projection spaces to screen coordinates. Scene graphs attach a transform matrix to each node so that hierarchical transformations propagate correctly from parent nodes to their children.

- ### Provenance

