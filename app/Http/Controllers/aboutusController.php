<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Serverfireteam\Panel\CrudController;

use Illuminate\Http\Request;

class aboutusController extends CrudController
{

    public function all($entity)
    {
        parent::all($entity);

        $this->filter = \DataFilter::source(new \App\aboutus);
        $this->filter->add('title', 'Title', 'text');
        $this->filter->submit('search');
        $this->filter->reset('reset');
        $this->filter->build();

        $this->grid = \DataGrid::source($this->filter);
        $this->grid->add('name', 'Name');
        $this->grid->add('email', 'Email');
        $this->grid->add('address', 'Address');
        $this->grid->add('mobile', 'Mobile');
        $this->grid->add('title1', 'Title1');
        $this->grid->add('title2', 'Title2');
        $this->grid->add('logo', 'Logo');
        $this->grid->add('imageabout', 'Imageabout');
        $this->grid->add('imagemission', 'Imagemission');
        $this->grid->add('imagecorevalue', 'Imagecorevalue');
        $this->grid->add('imagechooseus', 'Imagechooseus');


        $this->addStylesToGrid();

        return $this->returnView();
    }

    public function edit($entity)
    {

        parent::edit($entity);

        parent::edit($entity);

        $this->edit = \DataEdit::source(new \App\aboutus);

        $this->edit->label('Edit Aboutus');

        $this->edit->add('name', 'Name', 'text')->rule('required');

        $this->edit->add('email', 'Email', 'text')->rule('required');

        $this->edit->add('address', 'Address', 'text')->rule('required');

        $this->edit->add('mobile', 'Mobile', 'text')->rule('required');

        $this->edit->add('title1', 'Title1', 'file')->rule('required');

        $this->edit->add('title2', 'Title2', 'file')->rule('required');

        $this->edit->add('logo', 'Logo', 'file')->rule('required');

        $this->edit->add('imageabout', 'Imageabout', 'file')->rule('required');

        $this->edit->add('imagemission', 'Imagemission', 'file')->rule('required');
        $this->edit->add('imagevision', 'Imagevision', 'file')->rule('required');
        $this->edit->add('imageobjective', 'Imageobjective', 'file')->rule('required');
        $this->edit->add('imagecorevalue', 'Imagecorevalue', 'file')->rule('required');
        $this->edit->add('imagechooseus', 'Imagechooseus', 'file')->rule('required');


        return $this->returnEditView();


    }


}
