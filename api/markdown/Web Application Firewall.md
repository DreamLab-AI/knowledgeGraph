A web application firewall is a security control that inspects and filters HTTP and HTTPS traffic between clients and a web application to detect and block application-layer attacks. Operating at layer seven, it applies signature, rule and behavioural policies to mitigate threats such as injection, cross-site scripting and automated abuse that traditional network firewalls cannot see. It is commonly deployed as a reverse proxy, an inline appliance or a cloud service in front of the protected application.

### Overview

- The WAF sits between users and the application, examining each request and response against a policy set before passing it through.
- Policies combine signature matching for known attack patterns with rule logic and behavioural scoring for anomalous traffic.
- Deployment models include inline appliances, embedded reverse proxies and managed cloud services close to the network edge.

### Key aspects

- Layer-seven inspection of headers, parameters and bodies.
- Signature, rule-based and behavioural detection working together.
- Positive and negative security models, allow-listing and block-listing.
- Virtual patching that shields known vulnerabilities until code is fixed.

### Applications

- Protecting public web applications and APIs from common exploits.
- Mitigating automated bot abuse and credential stuffing.
- Augmenting an [[Intrusion Detection System]] with active blocking.
- Edge protection paired with a [[Content Delivery Network]] and [[Load Balancer]].

### Provenance

