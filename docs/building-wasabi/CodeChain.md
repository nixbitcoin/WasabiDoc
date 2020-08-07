---
{
  "title": "CodeChain",
  "description": "A guide on how to use CodeChain to sign and distribute the Wasabi source and package. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# CodeChain

[[toc]]

## Rational

### The Problem

For high security software like Wasabi, we need to take extra care that the code is well reviewed by different peers, and that users run exactly that software, and are not victim of a targeted backdoor attack.
Current best practice is to have PGP signatures of the developers on the individual code commits, as well as by the maintainers on every released compiled package.
However, users do not verify the git commit signatures, and only a few verify the build signatures.
Packages are distributed on the Wasabi website, with no verification of what the most recent version is.

There are several problems with such an approach:
- The PGP keys can be very old and long validity time makes stolen keys disastrous.
- They are stored on a network server and thus easily stolen.
- There is no method for key rotation.
- Only one key signs the package, this is a single point of failure.
- The verification is rather cumbersome, especially for commit signatures.
- Users cannot verify which version of the package is the most recent one.

The main attacks of such a signing and distribution process are:
- Key compromise (attacker can produce valid signatures).
- Developer coercion (wrench attack, blackmailing or bribing).
- Regression (suppression of updates).

:::danger
This is far from optimal.
We can and must do better.
:::

### The Proposed Solution

CodeChain is about secure multi-party code reviews with threshold signatures and unmodifiable hash chains, which prevents any single developer from including a generic backdoor in the software.
A single source of truth mechanism is used to ensure that every user runs the same version of the software, which prevents targeted backdoors and the suppression of updates.
It is a design for secure software distribution and development, and includes a verifiable build process.

:::tip
The user can verify that he is running the same version as all other users, and that the code is claimed to be reviewed by m-of-n developers.
:::

## Summary of the Protocol Design

Components
1. [Multi-party signing](#multi-party-signing)
2. [Single source of truth (SSOT)](#single-source-of-truth-ssot)
3. [secpkg](#secpkg)

### Multi-party signing

CodeChain is orthogonal to Git. Git remains the version control mechanism, while CodeChain is used to produce releases over a __directory state__.

The __directory state__ is represented as a __tree hash__.

The __tree hash__ is calculated by hashing files and then hashing the resulting list of file hashes.

The code history is the __sequence of tree hashes__ starting from the empty tree. The codechain always features one change after another, unlike Git. Undoing a previous change is simply a new __tree hash__.

The __sequence of tree hashes__ and their __signatures__ are recorded in a __hash chain__ (file)

The __hash chain__ is a newline separated list of

```
hash-of-previous current-time type type-fields ...
```

The __hash chain__ `type`'s are `cstart`, `source`, `signtr`, `addkey`, `remkey`, `sigctl`.

`cstart`: starts a new hash chain
```
hash-of-previous current-time source source-hash pubkey sig [comment]
```
`source`: marks new source tree state, comment can be used to describe change
```
hash-of-previous current-time source tree-hash pubkey signature [comment]
```
`signtr`: adds signature on previous lines (doesn't have to be preceding line). This allows one developer to share a new `source` entry and other developers to sign that line using `signtr` entries.
```
hash-of-previous current-time signtr hash-of-chain-entry pubkey sig
```
`addkey`: adds new signer
```
hash-of-previous current-time addkey pubkey
```
`remkey`: removes signer
```
hash-of-previous current-time remkey pubkey
```
`sigctl`: sets the m-of-n __threshold__
```
hash-of-previous current-time sigctl m
```

The __signatures__ contribute towards a m-of-n __threshold__ (similar to Bitcoin multisigs).

Code is distributed as a set of __patch files__ which transform a directory tree a into a directory tree b.

### Single source of truth (SSOT)

The __single source of truth (SSOT)__ distributes the __current head__ of a __hash chain__ in a non-targeted way. CodeChain chooses DNS as a __SSOT__. DNS is a distributed caching system, which means that developers cannot target data to specific users.

The __current head__ is signed and placed in a __TXT record__ of a fully qualified domain name.

The __current head__ __TXT record__ is signed by a dedicated __SSOT head signing key__ (trusted on first use), __current head__ is thereby transformed into __signed head__.

The __signed head__ is made up of

```
PUBKEY
PUBKEY_ROTATE
VALID_FROM
VALID_TO
COUNTER
HEAD
SIGNATURE
```

`PUBKEY`: Ed25519 public key of __SSOT head signing key__

`PUBKEY_ROTATE`: pubkey to rotate to (0 if unused)

`VALID_FROM`: signed head valid from given Unix time

`VALID_TO`: signed head valid to given Unix time

`COUNTER`: strictly increasing signature counter

`HEAD`: Codechain head to sign

`SIGNATURE`: signature with `PUBKEY`

The __signed head__ is a base64 encoded concatenation of `PUBKEY|PUBKEY_ROTATE|VALID_FROM|VALID_TO|COUNTER|HEAD|SIGNATURE` resulting in, for example

```
4856f2e782fb0d4fc4f116a6ee9406c49f55d410c26c2a52be994a5daa7df35c
```

The __signed head__ should expire regularly

DNS spoofing is mitigated in both cases
* Case 1: User has not seen the __TXT record signing key__ key before -> DNSSEC
* Case 2: User has seen the __TXT record signing key__ before -> TOFU

### secpkg

`secpkg` is a tool for users to securely install and update __.secpkg files__.

__.secpkg file__ is made up of

```
{
  "Name": "the project's package name",
  "Head": "the head of the project's codechain",
  "DNS": "fully qualified domain name where user can query for most recent head",
  "URL": "URL to download project files from"
}
```

resulting in, for example:
```
{
  "Name": "codechain",
  "Head": "4856f2e782fb0d4fc4f116a6ee9406c49f55d410c26c2a52be994a5daa7df35c",
  "DNS": "codechain.secpkg.net"
}
```

Install: Install software from GNU makefile described by __.secpkg files__ for the first time

Update: Query for updates and perform them, if necessary

### CodeChain tool overview

1. `codechain`: for developers to perform __multiparty signing__
2. `ssotpub`: for admin to public __current head__ via __SSOT__
3. `secpkg`: for user to securely install and update software distributed as .secpkg files
