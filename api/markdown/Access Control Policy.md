An Access Control Policy is a machine-readable specification of the rules that determine which agents may read, write, or append to a given resource. In decentralized web-data systems such as Solid, policies are expressed as RDF documents (e.g. WAC or ACP) attached to resources, granting or denying modes of access to identified WebID principals or groups. The policy is the declarative source of truth that an authorization engine evaluates on each request.

### Content

- Policies reference principals by [[Identity Management]] identifiers such as WebIDs and grant access modes like read, write, append, and control. Authorization servers interpret the policy at request time, separating the rules from the enforcement code so that permissions can be edited without changing application logic.

