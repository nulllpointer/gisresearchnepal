<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;
use Serverfireteam\Panel\ObservantTrait;

class staffs extends Model {
	use ObservantTrait;
	
    protected $table = 'staffs';

}
