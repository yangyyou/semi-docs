---
title: Stream 16
icon: book
dir:
    order: 18
---

## Stream 16 Processing Management

This stream provides protocol for a set of messages that enable the control of material processing at equipment and equipment resources. Control is implemented by supporting two job types; the control job and the process job. A process job is a single unit of work that ensures that the appropriate processing is applied to a particular material by a processing resource. The Process Job provides a widely applicable supervisory control capability for automated processing of material in equipment, irrespective of the particular process being used. The Process Job creates a transient link between the three elements of the manufacturing process; the first is the material to be processed. The second is the equipment on which the process will occur. The third is the process specification, a Process Recipe. When a Process Job has completed, it ceases to exist; its Process Job ID is no longer valid. The control job is used to group a set of related process jobs. The group is logically related from the host’s viewpoint. For instance; if a carrier contains multiple lots, then the process jobs for each lot (in the carrier) could be included in the control job specification. Control jobs also provide mechanisms for specifying the destination for processed material.

<Catalog />
