<?php
if (get_magic_quotes_gpc()) {
    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
    while (list($key, $val) = each($process)) {
        foreach ($val as $k => $v) {
            unset($process[$key][$k]);
            if (is_array($v)) {
                $process[$key][stripslashes($k)] = $v;
                $process[] = &$process[$key][stripslashes($k)];
            } else {
                $process[$key][stripslashes($k)] = stripslashes($v);
            }
        }
    }
    unset($process);
}

if(isset($_REQUEST))
{
	include("db.php");
	$connection = mysql_connect(DB_HOST, DB_USER, DB_PASS);
	mysql_select_db(DB_NAME, $connection);
	error_reporting(E_ALL && ~E_NOTICE);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $city = $_POST['city'];
    $expertise = $_POST['expertise'];

    if (isset($_POST['profession'])) {
        $profession = $_POST['profession'];
    } else {
        $profession = '';
    }

    if (isset($_POST['mode'])) {
        $mode = $_POST['mode'];
    } else {
        $mode = '';
    }

    $description = $_POST['description'];

	$sql = "INSERT INTO landing (name, email, number, city, expertise, profession, mode, description) VALUES ('$name', '$email', '$number', '$city', '$expertise', '$profession', '$mode', '$description')";
	$result = mysql_query($sql) or die(mysql_error());
	/*if ($result) {
		echo mysql_insert_id();
	}*/
    echo $result;
}
?>
