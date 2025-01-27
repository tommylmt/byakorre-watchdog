# IKEA's Byakorre Watchdog

A Watchdog app for the availability of Byakorre in Ikea France. 

## Disclaimer

This app is not affiliated to IKEA and yes, I'm a try harder. Don't talk to me about "why didn't you released this publicly before it came out " as I don't give a f*ck.

## How do I make this sh*t work

## Prerequisites 

* Having a Telegram bot 
* giving the link of the product
* Knowing the internal Ikea reference

### Define env 

```bash
$ cp .env.example .env
```

### Build and start

```bash
$ docker compose build
$ docker compose up -d
```

### Set up a Cronjob

```bash
*/10 * * * * cd /var/www/byakorre-watchdog/ && docker compose node exec npm run cron
```