# Guía de instalación 

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

- PHP >= 8.1
- Composer
- Node.js
- NPM o YARN

## Pasos de instalación

1. Abre tu terminal y navega hasta la carpeta donde deseas instalar Laravel.

2. Ejecuta el siguiente comando para clonar el repositorio de Laravel:

    ```
    git clone https://github.com/laravel/laravel.git
    ```

3. Navega hasta la carpeta del proyecto Laravel:

    ```
    cd ejercicio 
    ```

4. Ejecuta el siguiente comando para instalar las dependencias de Composer:

    ```
    composer install
    ```

5. Copia el archivo `.env.example` y renómbralo como `.env`:

    ```
    cp .env.example .env
    crear base datos 
    importar el archivo db_ejercio
    ejemplo .env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=db_ejercicio
    DB_USERNAME=root
    DB_PASSWORD=root
    ```

6. Genera una nueva clave de aplicación ejecutando el siguiente comando:

    ```
    php artisan key:generate
    ```

7. Configura la conexión a la base de datos en el archivo `.env` según tus necesidades.


8. Finalmente, ejecuta el servidor de desarrollo de Laravel con el siguiente comando:

    ```
    php artisan serve 
    ```
10. para ejecutar las vista en desarrollo 
 
   ```
   instalar npm i o yarn
   ejecutar npm run dev o yarn dev
    ```

11. si se ejetuca en otro ip, puerto cambiar la configuracion del archivo config.ts

    cambiar por el puerto o ip 
    export const apiBase = {
        API_URL: `http://127.0.0.1:8000`,
    }


¡Listo! ver en `http://127.0.0.1:8000`.
