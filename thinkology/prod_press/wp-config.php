<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'prod');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '`~,5=Up2f!W!f5O1d@zF{!hI|9o=`pB#8{=%2?Q&:2iy7 JLs47VCCbi$9yZ)#p.');
define('SECURE_AUTH_KEY',  'h.:uxG@e(02/uo)fJl$Z%~^D7]qBbClX,LgT _mox4$t6V~Vzgi{oqt7#2tK,aY<');
define('LOGGED_IN_KEY',    'jl}A2Eiq~[=9g&C!/)8C1 [,ck;z6.wHk})cN~mJ*N!J]rz`d3=nR6j|n|N0e!3,');
define('NONCE_KEY',        'B,kp c`pkK[j k&B:MoGc{|e~G&VF<{.-daGv1{/.X14dF}[EjTs:(E-1.O.oX?`');
define('AUTH_SALT',        '~e|xK9o`Pa&1a^WtjW)(RaT|PdS=v.{@#y-PmQkMpzEb4Zc4W|^lv?7E(}Rt5_WP');
define('SECURE_AUTH_SALT', 'a4N^|MK7O[A DV@f0mCLXd$A$x,z-8CPJj&4/9zbI^G)zI42j|_.h3O{&rnZa_ W');
define('LOGGED_IN_SALT',   '^xl_0eB9YX&%MYa!*j,c02?8%W&h%76qjGa.?!RES.9a6S{Xhxcq3LnI7x7dfXHN');
define('NONCE_SALT',       '1vL..)d+douQ~VHrd=%5f%aaA`_h@RmM0Sf(ixub{c5XX-2`:m< Mry5r+ii-kQK');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'prod_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
