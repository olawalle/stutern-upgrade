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
define('DB_NAME', 'stutern');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

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
define('AUTH_KEY',         'pt1jhRL*bdLdxiQ2Fx(OU(df.CZ4oz.K(c*>WG#y_~vlLIv`E=[][?)}P:aY)M0z');
define('SECURE_AUTH_KEY',  '~A3frk&3@}3sYp-T24OX5-1_rc F^%a!7a^cFa.!}yx~oO`K0C{i9cBJ*#P`3fu5');
define('LOGGED_IN_KEY',    'dk{~wtG<OjMUGc<[]O^YGJI+ /b}MrA|S9iG`~7C*,L4IF5rCaKBc&z`ENmIvZAw');
define('NONCE_KEY',        'Z8Hu(iLBv?5u=C.ddg?AfQnW3BGG|Qle?v1%q#WF[Sq`:;q 1+GsR^P?Wn]~R)61');
define('AUTH_SALT',        'B)}:9p1JzYY=En@`O-X]f.kG6e/Ou^ PP[} <f^VHAtDkVr) oG:r>qPO:*4ZRsW');
define('SECURE_AUTH_SALT', 'C?pe!Fx+f|SPp0g^dzq:-_654gWT$Ew]5C?:EjgJD1&prziSSC:V3M~:RN(mg]`0');
define('LOGGED_IN_SALT',   '5j9r:8qaumT?(t&s}!>5x/wfmNL_5ui6xyboTCx2qM2<%NCXq*Lp7>-(5r(<u#c>');
define('NONCE_SALT',       'i}M/vXzU-ybVlCyn^V`@X0`UGNEeB>6WkN}g#+y|u~,k80[*Q-wRe%)aX]vU}4m`');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
