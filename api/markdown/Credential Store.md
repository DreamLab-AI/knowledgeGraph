
A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.

- ### Content
  - Credential stores range from LDAP directories and relational user tables to dedicated secrets vaults, often hashing passwords and isolating high-value secrets. Hardening focuses on encryption at rest, least-privilege access, rotation, and replication so that the store remains both highly available and resistant to compromise.

