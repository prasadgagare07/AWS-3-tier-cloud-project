# 06 - Deploy the application

On each EC2 instance:

```bash
cd backend
npm install
npm start
```

For a persistent service, create a systemd service after the manual test works.

Example service concept:

```ini
[Unit]
Description=Cloud Task Manager API
After=network.target

[Service]
WorkingDirectory=/opt/cloud-task-manager/backend
ExecStart=/usr/bin/node /opt/cloud-task-manager/backend/server.js
Restart=always
EnvironmentFile=/etc/cloud-task-manager.env
User=ubuntu

[Install]
WantedBy=multi-user.target
```

Adjust the Node path and Linux username for your AMI.

Then:

```bash
sudo systemctl daemon-reload
sudo systemctl enable cloud-task-manager
sudo systemctl start cloud-task-manager
sudo systemctl status cloud-task-manager
```

Logs:

```bash
sudo journalctl -u cloud-task-manager -f
```

The service should listen on port 3000.
