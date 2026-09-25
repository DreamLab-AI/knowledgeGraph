A support vector machine (SVM) is a supervised learning model that finds the hyperplane separating classes with the maximum margin between the nearest training examples, called support vectors. Through the kernel trick it can construct non-linear decision boundaries by implicitly mapping inputs into higher-dimensional feature spaces. SVMs are grounded in statistical learning theory and are effective for classification and regression on small to medium, high-dimensional datasets.

### Overview

- SVMs reframe learning as a convex optimisation problem with a unique global solution.
- The maximum-margin principle provides good generalisation and resistance to [[Overfitting]] in high dimensions.
- Kernels (linear, polynomial, RBF) let the same algorithm fit a wide range of decision surfaces.
- SVMs were dominant before the deep-learning era and remain strong on small, structured datasets.

### Mechanisms

- The optimisation maximises the margin subject to correct (soft) classification of training points.
- Support vectors are the boundary examples that define the separating hyperplane.
- The kernel trick computes inner products in feature space without explicit mapping.
- The soft-margin parameter trades classification errors against margin width.

### Applications

- Text and document classification with high-dimensional sparse features.
- Bioinformatics tasks such as protein and gene classification.
- Image recognition before convolutional networks became standard.
- Anomaly detection via one-class formulations.

### Provenance

