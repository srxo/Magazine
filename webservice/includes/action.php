<?php
/**
 * @return array
 */
function getPorsche()
{
    return [
        [
            "id" => 1,
            "name" => "Cayenne Turbo GTS",
            "images" => "images/Porsche Cayenne GTS.png",
        ],
        [
            "id" => 2,
            "name" => "Cayenne Turbo GT",
            "images" => "images/Porsche Cayenne Turbo GT.png",
        ],
        [
            "id" => 3,
            "name" => "Macan GTS",
            "images" => "images/Porsche Macan GTS.png",
        ],
        [
            "id" => 4,
            "name" => "Macan S",
            "images" => "images/Porsche Macan S.png",
        ],

        [
            "id" => 5,
            "name" => "Panamera 4S",
            "images" => "images/Porsche Panamera 4S.png",

        ],
        [
            "id" => 6,
            "name" => "Panamera Turbo S",
            "images" => "images/Porsche Panamera Turbo S.png",

        ],
        [
            "id" => 7,
            "name" => "Taycan Turbo S",
            "images" => "images/Porsche Taycan Turbo S.png",
        ],
        [
            "id" => 8,
            "name" => "Taycan 4S",
            "images" => "images/Porsche Taycan 4s.png",
        ],
        [
            "id" => 9,
            "name" => "718 Spyder",
            "images" => "images/Porsche 718 Spyder.png",
        ],
        [
            "id" => 10,
            "name" => "718 Cayman GT4 RS",
            "images" => "images/Porsche 718 Cayman GT4 RS.png",
        ],
        [
            "id" => 11,
            "name" => "911 GT3",
            "images" => "images/Porsche 911 GT3.png",

        ],
        [
            "id" => 12,
            "name" => "911 GT3 RS",
            "images" => "images/Porsche 911 GT3 RS.png",
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function getPorscheDetails($id)
{
    $tags = [

        1 => [
            "Horsepower" => "375kW" ,
            "Acceleration" => "3,4s" ,
            "Top Speed" => "318 kmh"
        ],
        2 => [
            "Horsepower" => "368kW",
            "Acceleration" => "3,4s" ,
            "Top Speed" => "315 kmh"
        ],
        3 => [
            "Horsepower" => "463kW",
            "Acceleration" => "3,1s" ,
            "Top Speed" => "315 kmh"
        ],
        4 => [
            "Horsepower" => "560kW",
            "Acceleration" => "2,8s" ,
            "Top Speed" => "260 kmh"
        ],
        5 => [
            "Horsepower" => "471kW",
            "Acceleration" => "3,4s" ,
            "Top Speed" => "318 kmh"
        ],
        6 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
        7 => [
            "Horsepower" => "309kW",
            "Acceleration" => "4,4s" ,
            "Top Speed" => "201 km/h"
        ],
        8 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
        9 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
        10 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
        11 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
        12 => [
            "Horsepower" => "324kW",
            "Acceleration" => "4,5s" ,
            "Top Speed" => "272 kmh"
        ],
    ];

    return $tags[$id];
}