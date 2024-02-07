---
title: NumLab 2024
author: juha.lento@csc.fi
presentation-date: Spring 2024
layout: reveal
reveal-theme: sky
---

## NumLab 2024

<juha.lento@csc.fi>

--

### Goal of the lecture

**More** *enjoyable* **and** *productive* **working with computers**

### Golden rules

-  **KIS**, Keep It Simple
-  **DRY**, Don't Repeat Yourself

--

### Baking analogy: recipe vs understanding

Baking recipies are great to get the work started, especially if

- there are no mistakes in the recipe
- all the ingredients are available
- your own oven is similar enough with the oven of the person who wrote the recipe

With experience, bakers understand how bread is made in general, can adapt, and
make great bread even when the recipe needs tuning.

--

## Menu

- How supercomputers (clusters) work, how they differ from Linux desktops?
- Batch system and batch scripts
- Programming, a simple abstraction

---

## Contemporary supercomputers

--

### Architecture

![Cluster architecture](./SupercomputerArchitecture.svg "Juha's Incscape art")

Typical contemporary supercomputers consist of *login nodes*,
tightly interconnected *compute nodes*, and accompanying *parallel file
system*.

--

### Compute node

![Compute node](./ComputeNode.svg "Juha's Incscape art")

Each compute node is a NUMA workstation.

--

### Parallel file system

![Parallel file system](./ParallelFileSystem.svg "Juha's Incscape art")

Parallel filesystem (Lustre) consists of a MetaData Server (MDS) and
an array of large file servers (Object Data Server, ODS).

--

### Parallel file system (cont.)

**Keeping thing reasonable**

- avoid excessive metadata access, i.e. opening and closing files, etc.
- no more than 500 files in a single directory
- single file size < 5GB

--

### HPC environment vs. workstation

1. multiple versions of software packages
2. more complicated filesystem(s)
3. batch queue system

--

### Use supers for

-  Parallel computing, massively parallel programs (MPP)
-  farming calculations, parameter searches etc.
-  large data sets

--

### Containers

- Used to deploy software with many dependencies
- Role of Linux kernel, other processes and hardware
- Operating system consists of the kernel and "other stuff"
  in system directories `/usr`, `/etc`, and so on.

--

### Further reading

-  <http://docs.csc.fi>

---

## Batch system and batch job scripts

Here we improvise, and look at the scripts you use in NumLab course!

- What is a process and what is a thread?

---

## Programming

Programs *must* be easy to read and understand. Abstractions group details
into meaningful chuncks.

--

### The first abstraction, functions

The inputs and outputs of the (main) function (application) are immediately
obvious in a good source code.

```
Input                               The implementation          Output
-----                               ------------------          ------
- command line parameters    -->    - application        -->    - output files
- input files                       - function                  - return values
- function arguments
```

--

### The second abstraction, composite datatypes

In case the list of input arguments becomes long, or you have multiple return
values, group them into composite datatypes. For example, instead of
`par1`, `par2`, ..., have datatype `parameters`, that contains all the
individual ones.

---

## Questions?
