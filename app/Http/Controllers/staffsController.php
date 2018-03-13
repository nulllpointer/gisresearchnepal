<?php 

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Serverfireteam\Panel\CrudController;

use Illuminate\Http\Request;

class staffsController extends CrudController{

    public function all($entity){
        parent::all($entity);

        $this->filter = \DataFilter::source(new \App\staffs);
        $this->filter->add('title', 'Title', 'text');
        $this->filter->submit('search');
        $this->filter->reset('reset');
        $this->filter->build();

        $this->grid = \DataGrid::source($this->filter);
        $this->grid->add('name', 'Name');
        $this->grid->add('message', 'Message');
        $this->grid->add('department', 'Department');

        $this->grid->add('image', 'Image');
        $this->addStylesToGrid();

        return $this->returnView();    }
    
    public function  edit($entity){

        parent::edit($entity);

        $this->edit = \DataEdit::source(new \App\staffs);

        $this->edit->label('Edit Staffs');

        $this->edit->add('name', 'Name', 'text');

        $this->edit->add('message', 'Message', 'text');

        $this->edit->add('department', 'Department', 'text');


        $this->edit->add('image', 'Image', 'file')->rule('required');

        return $this->returnEditView();
    }    
}
