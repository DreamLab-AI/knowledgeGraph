---
okf_version: "0.2"
type: Class
title: Base64URL Encoding
resource: urn:ngm:class:base64url-encoding
domain: security
description: "Base64URL encoding is a variant of Base64 that replaces the characters plus and slash with hyphen and underscore and typically omits padding, so that encoded data can be safely embedded in URLs and filenames without escaping. It is the encoding used for the header, payload and signature segments of a JSON Web Token, and for the compact serialisation used by SD-JWT. Its safety for use in URL query "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:data-format
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Base64URL Encoding

Base64URL encoding is a variant of Base64 that replaces the characters plus and slash with hyphen and underscore and typically omits padding, so that encoded data can be safely embedded in URLs and filenames without escaping. It is the encoding used for the header, payload and signature segments of a JSON Web Token, and for the compact serialisation used by SD-JWT. Its safety for use in URL query parameters and path segments is the reason it was chosen over standard Base64 for these token formats.
