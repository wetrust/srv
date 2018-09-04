FROM php:7-fpm 
RUN apt-get update && apt-get install -y \
    --no-install-recommends \
    libfreetype6-dev \
        libmcrypt-dev \
        libpng12-dev \
        libjpeg-dev \
        libpng-dev \
        dcmtk \
        ffmpeg && apt-get clean \
    && docker-php-ext-install iconv mcrypt \
    && docker-php-ext-configure gd \
        --enable-gd-native-ttf \
        --with-freetype-dir=/usr/include/freetype2 \
        --with-png-dir=/usr/include \
        --with-jpeg-dir=/usr/include \
    && docker-php-ext-install gd \
    && docker-php-ext-install mbstring \
    && docker-php-ext-enable gd \
    && docker-php-ext-install json pdo pdo_mysql
USER www-data