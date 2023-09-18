# Personal Site (Hugo)
Hugo source of my personal portfolio & blog. Available at [filippo-orru.com](https://filippo-orru.com/).

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Docker
- Docker Compose

## Setup / Deployment

1. Set up reverse proxy with traefik: https://github.com/ffactory-ofcl/vps-reverse-proxy. Follow instructions there.

1. Create a deploy key using [this script](https://gist.github.com/ffactory-ofcl/a4dcfc7a68c0b8d35487aa8297e98128) and add it to the Github repository.

1. Clone this repository using the command echoed by the script.

1. Pull the submodule `webhook-listener` (used for automatic deployment).
    
    1. Generate a deploy key and add it to the [Github repository](https://github.com/ffactory-ofcl/webhook-listener).

    2. Clone the `webhook-listener` repository using the command echoed by the script.

1. Create the file `webhook.secret` to store the Github webhook secret used by the webhook-listener.

1. Copy the ssh config files to the webhook listener.

    ```bash
    cp deploy/shared/ssh/config webhook-listener/shared/ssh/config
    cp ~/.ssh/id_rsa.personal-site-hugo webhook-listener/shared/ssh/id_rsa.personal-site-hugo
    cp ~/.ssh/id_rsa.webhook-listener webhook-listener/shared/ssh/id_rsa.webhook-listener
    ```

1. Configure Plausible analytics

    1. Create the plausible env file:

    ```bash
    cp plausible/plausible-conf.demo.env plausible/plausible-conf.env
    ```

    1. Create a secret using the following command and copy it to the .env file.

    ```bash
    openssl rand -base64 64 | tr -d '\n' ; echo
    ```

1. Create systemd service file.

    1. Modify `WorkingDirectory` in `personal-site.service` to point to the root of this repository.

    2. Copy the file:

    ```bash
    sudo cp personal-site.service /etc/systemd/system/personal-site.service
    sudo systemctl daemon-reload
    sudo systemctl enable personal-site.service
    sudo systemctl start personal-site.service
    ```

1. Check the status:
    
    ```bash
    sudo systemctl status personal-site.service
    ```