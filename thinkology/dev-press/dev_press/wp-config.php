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
define('DB_NAME', 'dev');

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
define('AUTH_KEY',         '81FNEd%u0eFjO%*!tb@xt174dW58dhg` OHaYYy0y 19hlb,*.=o5w@l@}>q(qh}');
define('SECURE_AUTH_KEY',  '<MaJWrwFr7hnWFARuHLE@X;$m%W_tsT|1TVH(o380x-Re%:n.H(`)2whvvWAp:IE');
define('LOGGED_IN_KEY',    '<$CTR8D8NnWs)A!S8ELgxWGP.N+$h4lXO*4{KEPt]>tHr_kzfdB;xBAI<eNh)-t~');
define('NONCE_KEY',        'hDGu!*>tUiO`r|,{YW}6Qt~]CTQi]MTmot=K:9@++D/RKaK`G2<HldNWEVj1<%Z/');
define('AUTH_SALT',        'aHN{w4amIn}`3r_.@x(Bo;V|+Z0D~ncCdYXK`&$]wnOP[{l!10{bvOtsS{7B~olJ');
define('SECURE_AUTH_SALT', '~&$Rsz=^q,h-e{:Uy8,^2h@T]fH?]rJ/ZT!&:Ey4tZmezQ5b.eT_r4})ak)){)si');
define('LOGGED_IN_SALT',   'AGn/kJ%TguSv<NYF2o*}[p}[=lpH_NK|V1Mm!;E!v_d9{,;A58:->vbnkf]rk0)[');
define('NONCE_SALT',       '%Pq;@X -v0VKcmlU16#[.yd2zAs#.M:q]&@M{46I@tLwkcB]jx)k*67X7YILmV  ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'dev_';

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
