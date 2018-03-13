<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;
use Serverfireteam\Panel\ObservantTrait;

class notices extends Model {
	use ObservantTrait;
	
    protected $table = 'notices';

}
