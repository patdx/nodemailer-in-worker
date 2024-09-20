# nodemailer-in-worker

Demonstration of nodemailer inside Cloudflare Workers.

With the new `nodejs_compat_v2` mode, while we cannot connect to an SMTP server inside a Worker yet, you can import `nodemailer` and still use it to generate an actual encoded email payload.

## Usage

Currently you may pass the following variables with query params:

- `from`: The email address to send from
- `to`: The email address to send to
- `subject`: The subject of the email
- `text`: The text of the email
- `html`: The HTML of the email

## Example

Go to a url like:

- https://nodemailer-in-worker.pmil.workers.dev/?from=patrick@example.com&to=charlie@example.com&text=hello
- https://nodemailer-in-worker.pmil.workers.dev/?from=patrick@example.com&to=charlie@example.com&text=こんにちは

## Bundle Size

I got the following stats upon deploy:

```
 ⛅️ wrangler 3.78.7
-------------------

Total Upload: 666.98 KiB / gzip: 126.54 KiB
Worker Startup Time: 36 ms
```
