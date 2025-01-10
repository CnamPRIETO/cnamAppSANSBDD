#!/bin/bash

# Démarrer l'application Node.js avec pm2
pm2 start index.js --name node-app

# Démarrer Apache en mode premier plan
apache2-foreground
