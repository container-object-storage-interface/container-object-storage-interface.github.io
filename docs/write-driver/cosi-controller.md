---
title: COSI Controller
---

Container Object Storage (COSI) controller is responsible to manage lifecycle of COSI objects. Specifically, the controller monitors the lifecycle of the user-facing CRDs:

- `BucketClaim`:  Represents a claim to provision a Bucket
- `BucketAccess`: Represents a resource to access a Bucket

and generates the associated CRDs:

- `Bucket`: Represents a Bucket or its equivalent in the storage backend
