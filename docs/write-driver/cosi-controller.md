---
title: COSI Controller
---

Container Object Storage (COSI) controller is responsible to manage lifecycle of COSI objects. Specifically, the controller monitors the lifecycle of the user-facing CRDs:

- `BucketRequest`:  Represents a request to provision a Bucket
- `BucketAccessRequest`: Represents a request to access a Bucket

and generates the associated CRDs:

- `Bucket`: Represents a Bucket or its equivalent in the storage backend
- `BucketAccess`: Represents a access token or service account in the storage backend
