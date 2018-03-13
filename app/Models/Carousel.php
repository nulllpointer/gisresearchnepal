<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carousel extends Model
{
    //carousel
    protected $table = 'carousel';
    public $timestamps = false;

    public $picUrl;
    public $altName;
    public $captionHeading;
    public $captionDesc;
    public $btnText;
    public $btnUrl;
}
