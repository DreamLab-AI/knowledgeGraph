Matrix factorisation is a family of techniques that decompose a matrix into a product of lower-dimensional factor matrices, revealing latent structure in the data. In machine learning it is widely used for collaborative-filtering recommendation, where a sparse user-item rating matrix is approximated by user and item embedding factors. Variants include singular value decomposition, non-negative matrix factorisation, and low-rank adaptation methods.

### Content

- In recommendation, learned user and item vectors reconstruct observed interactions and predict missing ones, with regularisation and bias terms improving accuracy. The same low-rank idea reappears in model compression and adapter-based fine-tuning, where weight updates are constrained to a small factorised subspace.

