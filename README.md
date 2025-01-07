# IKEA's Byakorre Watchdog

A Watchdog app for the availability of Byakorre in Ikea France

## How do I make this sh*t work on my Raspberry ? 

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
*/30 * * * * cd /var/www/byakorre-watchdog/ && docker compose node exec npm run cron
```