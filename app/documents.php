<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;
use Serverfireteam\Panel\ObservantTrait;

class documents extends Model {
	use ObservantTrait;
	
    protected $table = 'documents';

}
