The S3 API is a RESTful, HTTP-based application programming interface for object storage that exposes buckets and objects through operations such as PUT, GET, DELETE and LIST. Originating with Amazon Simple Storage Service, it has become a de facto standard implemented by many cloud and on-premises storage systems, enabling portable, vendor-neutral object access. Clients authenticate with signed requests and address resources by bucket and key, allowing scalable, durable storage of unstructured data.

### Overview

- Exposes object operations (PUT, GET, DELETE, LIST) over HTTP against buckets and keys.
- Has become a de facto industry standard, implemented by numerous compatible storage backends.
- Uses request signing for authentication and fine-grained access policies.

### Mechanisms

- Bucket and key namespace for addressing immutable objects.
- Signed request authentication and policy-based authorisation.
- Multipart upload, versioning and lifecycle management semantics.
- Compatibility layers that let diverse systems present an S3-shaped surface.

### Applications

- Backing store for data lakes and analytics pipelines.
- Static asset and media hosting at scale.
- Backup, archival and disaster-recovery storage.
- Portable application storage across cloud providers.

### Provenance

