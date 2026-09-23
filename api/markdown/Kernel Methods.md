
Kernel methods are a class of machine learning algorithms that operate on data implicitly mapped into a high-dimensional feature space via a kernel function, without computing coordinates in that space. The kernel trick replaces inner products with kernel evaluations, enabling linear algorithms to learn non-linear relationships. They underpin support vector machines, Gaussian processes and kernel ridge regression.

- ### Content
  - A valid kernel corresponds to a positive semi-definite Gram matrix, guaranteeing a well-posed optimisation. Common choices include the radial basis function, polynomial and Matérn kernels. Kernel methods offer strong theoretical guarantees and interpretability but scale poorly to very large datasets without approximation techniques such as random features or inducing points.

