<?php


return array(
    'title' => 'Master Identity',
    'column' => array(
        array(  
            "id"=>"midtId",
            "name"=>"ID",
            "show"=>"0",
            "type"=>"integer",
            "width"=>"50"
        ),
        array(
            "id"=>"midtDesc",
            "name"=>"Identity Description",
            "show"=>1,
            "type"=>"varchar",
            "width"=>200,
            "minVal"=>"",
            "maxVal"=>"",
            "minLength"=>"2",
            "maxLength"=>"200",
            "mandatory"=>"1"
        ),
        array(
            "id"=>"midtNonActive",
            "name"=>"Status",
            "show"=>1,
            "type"=>"varchar",
            "width"=>200,
        )
    ),
    "status"=>array(
        "error"=>0,
        "errorCode"=>0,
        "message"=>""
    )
);


