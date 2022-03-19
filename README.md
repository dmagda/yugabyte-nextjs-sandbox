# YugabyteDB Gitpod Sandbox for Next.js

A sandbox gitpod project for prototyping with a local YugabyteDB cluster and Next.js.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/dmagda/yugabyte-nextjs-sandbox)

## Sandbox Overview

The gitpod bootstraps the following environment:

* YugabyteDB single-node cluster with sample data from the `<project>/data/init.sql` file.
* Next.js dev server that is started in the terminal tab `Next.js Dev`.
* `ysqlsh` connection to the YugabyteDB cluster that is opened in the terminal tab `YugabyteDB Shell`

The Next.js project includes an API endpoint - `pages/api/accounts.ts` - that connects to the YugabyteDB cluster with the [node-postgres](https://docs.yugabyte.com/latest/reference/drivers/ysql-client-drivers/#node-postgres) module and queries sample data from the database.

## Play With Sandbox







