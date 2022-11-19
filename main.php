<?php
//get post items
[$url, $folder] = json_decode(file_get_contents('php://input'));

//handle the back-end as in run the bash script

$output1 = null;
exec("sh run.sh $url $folder",$output1);
echo json_encode($output1);