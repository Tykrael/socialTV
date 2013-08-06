<?php
if (!strstr($_SERVER['HTTP_HOST'],'.dev.novedia-agency.com') && !strstr($_SERVER['HTTP_HOST'],'.local') && $_SERVER["REQUEST_URI"]=="/fprc/")
{
 header("Location: /fprc");
  die("here");
}

if (!empty($_GET["request_ids"])) {

	//die("here"); 
	header("Location: /mlm");

	die();
}

require_once __DIR__.'/../app/bootstrap.php.cache';
require_once __DIR__.'/../app/AppKernel.php';
//require_once __DIR__.'/../app/AppCache.php';

use Symfony\Component\HttpFoundation\Request;

$kernel = new AppKernel('prod', true);
$kernel->loadClassCache();
//Adding AppCache to make it jump high
//$kernel = new AppCache($kernel);
$kernel->handle(Request::createFromGlobals())->send();
