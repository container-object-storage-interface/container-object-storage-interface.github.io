---
title: COSI Driver
---

COSI driver implements APIs that will be called by COSI controller. COSI driver must be deployed as [sidecar](https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar) for the COSI [controller](https://github.com/kubernetes-sigs/container-object-storage-interface-controller).

A COSI driver must implement following:

- Identity server
- COSI APIs

## Identity Server

A `IdentityServer` reports the driver's name on the `ProvisionerGetInfo` RPC call from the controller.

### Identity Server Struct

```go
type identityServer struct {
	spec.UnimplementedIdentityServer
	driverName string
}
```

## Driver APIs

COSI driver must implement following APIs. We recommended developer synchronize all checks and business logic.
### ProvisionerCreateBucket

The `ProvisionerCreateBucket` API is called when a user wants to create a new bucket. Driver must create the bucket only after ensuring that a bucket with same name does not already exist.
### ProvisionerDeleteBucket

The `ProvisionerDeleteBucket` API is called when a user wants to delete a bucket. Driver must delete the bucket if it exists. If it cannot find a bucket with the matching name, it should return as success.
### ProvisionerGrantBucketAccess

The `ProvisionerGrantBucketAccess` API is used to grant an application access to a bucket.
### ProvisionerRevokeBucketAccess

The `ProvisionerRevokeBucketAccess` API is used to revoke an application's access to a bucket.
