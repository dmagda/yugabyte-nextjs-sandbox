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

Execute SQL queries via `ysqlsh`:

1. Open the `YugabyteDB Shell` tab that has an active `ysqlsh` connection to the YugabyteDB instance.

2. Confirm the `Account` table exists:
    ```shell
    \d
    ```

    The output should be as follows:

    ```shell
    List of relations
    Schema |  Name   | Type  |  Owner   
    --------+---------+-------+----------
    public | account | table | yugabyte
    (1 row)
    ```

3. Get all `Accounts`:

    ```shell
    select * from Account;
    ```

    The output should be as follows:

    ```shell
    id |  name   | age | country | balance 
    ----+---------+-----+---------+---------
    1 | Jessica |  28 | USA     |   10000
    2 | John    |  28 | Canada  |    9000
    (2 rows)
    ```

Test the Next.js API endpoint:

1. Open [http://localhost:3000/api/accounts](http://localhost:3000/api/accounts).

2. Confirm the API returned the following JSON:

    ```shell
    [{"name":"Jessica","age":28,"country":"USA","balance":10000},
    {"name":"John","age":28,"country":"Canada","balance":9000}]
    ```



