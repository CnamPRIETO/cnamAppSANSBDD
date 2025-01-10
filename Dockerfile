FROM php:7.4-apache

# Installer Node.js, npm et autres dépendances
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    unzip \
    zip \
    && rm -rf /var/lib/apt/lists/* \
    && a2enmod proxy \
    && a2enmod proxy_http

# Copier la configuration Apache
COPY ./deploy/my-proxy.conf /etc/apache2/sites-available/000-default.conf

# Copier le code de l'application
COPY ./deploy/ /var/www/html

# Définir le répertoire de travail
WORKDIR /var/www/html/api

# Installer les dépendances Node.js et pm2
RUN npm install \
    && npm install pm2 -g

# Copier le script d'initialisation
COPY ./deploy/start.sh /start.sh
RUN chmod +x /start.sh

# Exposer le port 80
EXPOSE 80

# Définir le script de démarrage
CMD ["/start.sh"]
