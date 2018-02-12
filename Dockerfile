FROM php:7.0-apache-jessie
#instalar algunas dependencias para compilar las librerias necesarias
RUN apt update && apt install -y --no-install-recommends libmcrypt-dev libxml2-dev libpng-dev libjpeg-dev dcmtk && apt-get clean
#configura gd para imágenes
RUN docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr
#intalar los modulos necesarios de php
RUN docker-php-ext-install json xml pdo pdo_mysql mcrypt mbstring gd
#Copiar todos los datos a el contenedor
COPY 000-default.conf /etc/apache2/sites-enabled/
COPY . /var/www/html/
RUN chmod -R 777 /var/www/html/public/avatars
#activar configuracion de apache
RUN a2enmod rewrite
EXPOSE 80

